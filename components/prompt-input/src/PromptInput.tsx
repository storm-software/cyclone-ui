/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 our licensing page at https://stormsoftware.com/licenses/projects/cyclone-ui.

 Website:                  https://stormsoftware.com
 Repository:               https://github.com/storm-software/cyclone-ui
 Documentation:            https://docs.stormsoftware.com/projects/cyclone-ui
 Contact:                  https://stormsoftware.com/contact

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

"use client";

import type { ButtonProps } from "@cyclone-ui/button";
import { Button } from "@cyclone-ui/button";
import {
  ArrowUp,
  Document,
  Image,
  Loading,
  Plus,
  Square
} from "@cyclone-ui/icons";
import { InputValue } from "@cyclone-ui/input/InputValue";
import type { TagProps } from "@cyclone-ui/tag";
import { Tag } from "@cyclone-ui/tag";
import type { GetProps, TamaguiElement, ViewProps } from "@tamagui/core";
import {
  isWeb,
  useComposedRefs,
  View,
  withStaticProperties
} from "@tamagui/core";
import { useControllableState } from "@tamagui/use-controllable-state";
import type {
  ClipboardEvent,
  DragEvent,
  FormEvent,
  JSX,
  KeyboardEvent,
  ReactNode,
  RefObject
} from "react";
import { createContext, forwardRef, use, useRef, useState } from "react";

/** The status of a chat, as the AI SDK's `useChat` reports it. */
export type ChatStatus = "submitted" | "streaming" | "ready" | "error";

/**
 * A file sent with a message, in the shape of the AI SDK's `FileUIPart`: its
 * `url` is a data URL, so it can go straight to `sendMessage`.
 */
export interface PromptInputFile {
  type: "file";
  mediaType: string;
  filename?: string;
  url: string;
}

/** What `onSubmit` receives. */
export interface PromptInputMessage {
  text: string;
  files: PromptInputFile[];
}

/** A file attached to the message that hasn't been sent yet. */
export interface PromptInputAttachedFile {
  id: string;
  file: File;
}

/** Why attached files were turned away. */
export interface PromptInputError {
  code: "accept" | "max_file_size" | "max_files";
  message: string;
}

export interface PromptInputContextValue {
  /** The message text. */
  text: string;
  setText: (text: string) => void;
  /** The attached files. */
  files: PromptInputAttachedFile[];
  /** Attaches files, turning away those `accept`, `maxFileSize` or `maxFiles` rule out. */
  add: (files: File[] | FileList) => void;
  remove: (id: string) => void;
  clear: () => void;
  /** Opens the browser's file dialog. */
  openFileDialog: () => void;
  status: ChatStatus;
  onStop?: () => void;
  /** Whether there is text or a file to send and no reply is on its way. */
  canSend: boolean;
  /** Sends the message, as the form's submit does. */
  submit: (event?: FormEvent<HTMLFormElement>) => Promise<void>;
  /** Internal: the text box, which focus returns to. */
  textareaRef: RefObject<HTMLTextAreaElement | null>;
  /** Internal: whether the text box has focus, which rings the frame. */
  setFocused: (focused: boolean) => void;
}

// A plain context: a styled context Provider resets its values to defaults.
const PromptInputContext = createContext<PromptInputContextValue | null>(null);

/** The text, files and status of the nearest `PromptInput`. */
export const usePromptInput = () => {
  const context = use(PromptInputContext);
  if (!context) {
    throw new Error("usePromptInput must be used within a PromptInput");
  }

  return context;
};

const isGenerating = (status: ChatStatus) =>
  status === "submitted" || status === "streaming";

// The `accept` attribute's rules: `.pdf`, `image/*` or `image/png`.
const matchesAccept = (file: File, accept: string | undefined) =>
  !accept ||
  accept.split(",").some(rule => {
    const type = rule.trim().toLowerCase();

    return type.startsWith(".")
      ? file.name.toLowerCase().endsWith(type)
      : type.endsWith("/*")
        ? file.type.startsWith(type.slice(0, -1))
        : file.type === type;
  });

const toFilePart = (file: File) =>
  new Promise<PromptInputFile>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () =>
      resolve({
        type: "file",
        mediaType: file.type,
        filename: file.name,
        url: reader.result as string
      });
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });

export type PromptInputProps = Omit<ViewProps, "onSubmit"> & {
  /**
   * Called with the text and files (as data URLs) when the message is sent.
   * The text box and files clear once it returns, or once its promise
   * resolves; a rejected promise keeps them, to try again.
   */
  onSubmit?: (
    message: PromptInputMessage,
    event?: FormEvent<HTMLFormElement>
  ) => void | Promise<void>;
  /** The message text. Makes the text controlled; pass `onValueChange` too. */
  value?: string;
  /** The initial text when uncontrolled. */
  defaultValue?: string;
  /** Called with the new text when it changes. */
  onValueChange?: (text: string) => void;
  /**
   * The chat's status. While a reply is `submitted` or `streaming`, a message
   * can't be sent, and the submit button shows a spinner or a stop square.
   * Defaults to `ready`.
   */
  status?: ChatStatus;
  /** Stops the reply. While set, the submit button stops a reply on its way. */
  onStop?: () => void;
  /** The file types to accept, as in an `<input type="file">`. */
  accept?: string;
  /** The most files a message can have. */
  maxFiles?: number;
  /** The largest file to accept, in bytes. */
  maxFileSize?: number;
  /** Called when attached files are turned away. */
  onError?: (error: PromptInputError) => void;
  /**
   * Custom parts. Defaults to a `PromptInput.Header`, a `PromptInput.Textarea`
   * and a `PromptInput.Footer` with an attach and a submit button.
   */
  children?: ReactNode;
};

/**
 * The field a person types a message to an agent in: a form with attached
 * files, a text box that grows with its text, and a footer of tools and a
 * submit button. Enter sends the message and Shift+Enter adds a line. Files
 * can be attached with a button, or pasted or dropped in on the web.
 */
const PromptInputRoot = forwardRef<TamaguiElement, PromptInputProps>(
  (
    {
      onSubmit,
      value,
      defaultValue = "",
      onValueChange,
      status = "ready",
      onStop,
      accept,
      maxFiles,
      maxFileSize,
      onError,
      children,
      ...props
    },
    forwardedRef
  ) => {
    const [text, setText] = useControllableState({
      prop: value,
      defaultProp: defaultValue,
      onChange: onValueChange
    });
    const [files, setFiles] = useState<PromptInputAttachedFile[]>([]);
    const [focused, setFocused] = useState(false);
    const [dragging, setDragging] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const nextIdRef = useRef(0);
    const canSend =
      !isGenerating(status) && (text.trim() !== "" || files.length > 0);

    const add = (incoming: File[] | FileList) => {
      const all = Array.from(incoming);
      const accepted = all.filter(file => matchesAccept(file, accept));
      if (accepted.length < all.length) {
        onError?.({
          code: "accept",
          message: "Some files are not an accepted type."
        });
      }
      const sized = accepted.filter(
        file => maxFileSize === undefined || file.size <= maxFileSize
      );
      if (sized.length < accepted.length) {
        onError?.({
          code: "max_file_size",
          message: "Some files are larger than the maximum size."
        });
      }
      const room =
        maxFiles === undefined
          ? sized.length
          : Math.max(maxFiles - files.length, 0);
      if (room < sized.length) {
        onError?.({
          code: "max_files",
          message: "Too many files. Some were not attached."
        });
      }
      if (room > 0 && sized.length > 0) {
        setFiles(current => [
          ...current,
          ...sized
            .slice(0, room)
            .map(file => ({ id: String(nextIdRef.current++), file }))
        ]);
      }
    };

    const submit = async (event?: FormEvent<HTMLFormElement>) => {
      event?.preventDefault();
      // Only the submit button and Enter send: a `<button>` without a `type`
      // (such as a `Tag`'s remove button) submits its form too.
      const submitter = (event?.nativeEvent as SubmitEvent | undefined)
        ?.submitter;
      if (!canSend || (submitter && submitter.getAttribute("type") !== "submit")) {
        return;
      }
      const message = {
        text,
        files: await Promise.all(files.map(({ file }) => toFilePart(file)))
      };
      await onSubmit?.(message, event);
      setText("");
      setFiles([]);
      // Back to the text box for the next message: a pressed submit button
      // is disabled once the text clears, which drops focus.
      textareaRef.current?.focus();
    };

    const context: PromptInputContextValue = {
      text,
      setText,
      files,
      add,
      remove: id => setFiles(current => current.filter(file => file.id !== id)),
      clear: () => setFiles([]),
      openFileDialog: () => inputRef.current?.click(),
      status,
      onStop,
      canSend,
      submit,
      textareaRef,
      setFocused
    };

    return (
      <PromptInputContext value={context}>
        <View
          ref={forwardedRef}
          render="form"
          position="relative"
          width="100%"
          minWidth={0}
          backgroundColor={dragging ? "surface-active" : "surface"}
          borderWidth={1}
          borderRadius="container"
          borderColor={
            dragging || focused
              ? "hairline-active"
              : "hairline hover:hairline-hovered"
          }
          boxShadow={focused ? "ring-offset" : "none"}
          transition="200ms"
          {...(isWeb &&
            ({
              onSubmit: (event: FormEvent<HTMLFormElement>) => {
                void submit(event);
              },
              // Files dropped anywhere on the input are attached.
              onDragOver: (event: DragEvent) => {
                if (!event.dataTransfer?.types.includes("Files")) return;
                event.preventDefault();
                setDragging(true);
              },
              onDragLeave: (event: DragEvent) => {
                const target = event.currentTarget as HTMLElement;
                if (!target.contains(event.relatedTarget as Node | null)) {
                  setDragging(false);
                }
              },
              onDrop: (event: DragEvent) => {
                setDragging(false);
                if (!event.dataTransfer?.files.length) return;
                event.preventDefault();
                add(event.dataTransfer.files);
              }
            } as object))}
          {...props}>
          {isWeb && (
            <input
              ref={inputRef}
              type="file"
              // Not `hidden`: global CSS can override that attribute.
              style={{ display: "none" }}
              tabIndex={-1}
              accept={accept}
              multiple={maxFiles !== 1}
              onChange={event => {
                if (event.currentTarget.files) add(event.currentTarget.files);
                // The same file can be picked again after it is removed.
                event.currentTarget.value = "";
              }}
            />
          )}
          {children ?? (
            <>
              <PromptInputHeader />
              <PromptInputTextarea />
              <PromptInputFooter>
                <PromptInputTools>
                  <PromptInputAddAttachments />
                </PromptInputTools>
                <PromptInputSubmit />
              </PromptInputFooter>
            </>
          )}
        </View>
      </PromptInputContext>
    );
  }
);

PromptInputRoot.displayName = "PromptInput";

export type PromptInputHeaderProps = ViewProps;

/**
 * The row above the text box. Defaults to a chip for each attached file, and
 * renders nothing while there are none.
 */
const PromptInputHeader = forwardRef<TamaguiElement, PromptInputHeaderProps>(
  ({ children, ...props }, forwardedRef) => {
    const { files } = usePromptInput();

    if (children == null && files.length === 0) return null;

    return (
      <View
        ref={forwardedRef}
        flexDirection="row"
        flexWrap="wrap"
        gap="lg"
        paddingHorizontal="2xl"
        paddingTop="2xl"
        {...props}>
        {children ??
          files.map(file => <PromptInputAttachment key={file.id} data={file} />)}
      </View>
    );
  }
);

PromptInputHeader.displayName = "PromptInput.Header";

export type PromptInputAttachmentProps = Omit<TagProps, "children"> & {
  /** The attached file. */
  data: PromptInputAttachedFile;
};

/** A chip for an attached file: an icon, its name and a remove button. */
const PromptInputAttachment = ({
  data,
  onAfterRemove,
  ...props
}: PromptInputAttachmentProps): JSX.Element => {
  const { remove, textareaRef } = usePromptInput();
  const name = data.file.name;

  return (
    <Tag
      variant="sunken"
      removable={true}
      removeButtonLabel={`Remove ${name}`}
      maxWidth="100%"
      {...props}
      onAfterRemove={() => {
        remove(data.id);
        // The remove button is gone; keep focus in the input.
        textareaRef.current?.focus();
        onAfterRemove?.();
      }}>
      <Tag.Icon>
        {data.file.type.startsWith("image/") ? <Image /> : <Document />}
      </Tag.Icon>
      <Tag.Text numberOfLines={1} flexShrink={1} minWidth={0}>
        {name}
      </Tag.Text>
    </Tag>
  );
};

export type PromptInputTextareaProps = GetProps<typeof InputValue>;

/**
 * The text box. It grows with its text up to a limit, then scrolls. Enter
 * sends the message, Shift+Enter adds a line, and pasted files are attached.
 */
const PromptInputTextarea = forwardRef<
  HTMLTextAreaElement,
  PromptInputTextareaProps
>(
  (
    {
      placeholder = "What would you like to know?",
      onKeyDown,
      onPaste,
      onFocus,
      onBlur,
      style,
      ...props
    },
    forwardedRef
  ) => {
    const { text, setText, add, setFocused, textareaRef } = usePromptInput();
    const ref = useComposedRefs(forwardedRef, textareaRef);

    return (
      <InputValue
        ref={ref}
        render="textarea"
        aria-label="Message"
        placeholder={placeholder}
        placeholderTextColor="primary-disabled"
        cursor="text"
        minHeight="13xl"
        maxHeight="26xl"
        paddingTop="3xl"
        paddingBottom="lg"
        {...props}
        value={text}
        onChange={(event: CustomEvent<string>) => setText(event.detail)}
        // Sized by its text (where supported), and never by the user.
        style={{
          ...(style as object),
          fieldSizing: "content",
          resize: "none"
        }}
        {...({
          onKeyDown: (event: KeyboardEvent<HTMLTextAreaElement>) => {
            onKeyDown?.(event as never);
            if (
              event.defaultPrevented ||
              event.key !== "Enter" ||
              event.shiftKey ||
              // Enter that picks a word from an input method editor.
              event.nativeEvent.isComposing
            ) {
              return;
            }
            event.preventDefault();
            event.currentTarget.form?.requestSubmit();
          },
          onPaste: (event: ClipboardEvent<HTMLTextAreaElement>) => {
            onPaste?.(event as never);
            const pasted = event.clipboardData?.files;
            if (!event.defaultPrevented && pasted?.length) {
              event.preventDefault();
              add(pasted);
            }
          }
        } as object)}
        onFocus={event => {
          setFocused(true);
          onFocus?.(event as never);
        }}
        onBlur={event => {
          setFocused(false);
          onBlur?.(event as never);
        }}
      />
    );
  }
);

PromptInputTextarea.displayName = "PromptInput.Textarea";

export type PromptInputFooterProps = ViewProps;

/** The row under the text box: tools at the start, the submit button at the end. */
const PromptInputFooter = forwardRef<TamaguiElement, PromptInputFooterProps>(
  (props, forwardedRef) => (
    <View
      ref={forwardedRef}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      gap="lg"
      padding="xl"
      {...props}
    />
  )
);

PromptInputFooter.displayName = "PromptInput.Footer";

export type PromptInputToolsProps = ViewProps;

/** A row of buttons and menus in the footer, such as the model and effort. */
const PromptInputTools = forwardRef<TamaguiElement, PromptInputToolsProps>(
  (props, forwardedRef) => (
    <View
      ref={forwardedRef}
      flexDirection="row"
      alignItems="center"
      // On a narrow input the tools wrap rather than overflow.
      flexWrap="wrap"
      flexShrink={1}
      gap="md"
      minWidth={0}
      {...props}
    />
  )
);

PromptInputTools.displayName = "PromptInput.Tools";

export type PromptInputAddAttachmentsProps = ButtonProps;

/** A round ghost button with a plus that opens the file dialog. */
const PromptInputAddAttachments = forwardRef<
  TamaguiElement,
  PromptInputAddAttachmentsProps
>(({ onPress, ...props }, forwardedRef) => {
  const { openFileDialog } = usePromptInput();

  return (
    <Button
      ref={forwardedRef}
      variant="ghost"
      size="sm"
      circular={true}
      flexGrow={0}
      tooltip="Attach files"
      {...props}
      onPress={event => {
        onPress?.(event);
        openFileDialog();
      }}>
      <Button.Icon>
        <Plus />
      </Button.Icon>
    </Button>
  );
});

PromptInputAddAttachments.displayName = "PromptInput.AddAttachments";

export type PromptInputSubmitProps = ButtonProps;

/**
 * A round primary button that follows the chat's `status`: an arrow that
 * sends the message (`ready`, or `error` in the danger theme), a spinner
 * (`submitted`) and a stop square (`streaming`). While a reply is on its way
 * and `onStop` is set, it stops the reply.
 */
const PromptInputSubmit = forwardRef<TamaguiElement, PromptInputSubmitProps>(
  ({ onPress, ...props }, forwardedRef) => {
    const { status, onStop, canSend, submit } = usePromptInput();
    const stops = isGenerating(status) && onStop !== undefined;

    return (
      <Button
        ref={forwardedRef}
        variant="primary"
        size="sm"
        circular={true}
        flexGrow={0}
        type={stops ? "button" : "submit"}
        theme={status === "error" ? "danger" : undefined}
        disabled={!stops && !canSend}
        tooltip={stops ? "Stop" : "Send"}
        {...props}
        onPress={event => {
          onPress?.(event);
          if (stops) onStop();
          // On the web the button submits the form.
          else if (!isWeb) void submit();
        }}>
        <Button.Icon>
          {status === "submitted" ? (
            <Loading />
          ) : status === "streaming" ? (
            <Square variant="filled" />
          ) : (
            <ArrowUp />
          )}
        </Button.Icon>
      </Button>
    );
  }
);

PromptInputSubmit.displayName = "PromptInput.Submit";

export const PromptInput = withStaticProperties(PromptInputRoot, {
  Header: PromptInputHeader,
  Attachment: PromptInputAttachment,
  Textarea: PromptInputTextarea,
  Footer: PromptInputFooter,
  Tools: PromptInputTools,
  AddAttachments: PromptInputAddAttachments,
  Submit: PromptInputSubmit
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`PromptInput.Submit` is undefined on the server).
 */
export {
  PromptInputAddAttachments,
  PromptInputAttachment,
  PromptInputFooter,
  PromptInputHeader,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools
};
