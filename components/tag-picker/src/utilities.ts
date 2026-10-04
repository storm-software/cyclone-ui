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

/**
 * Get the tag a draft from the text box adds.
 *
 * @param draft - The text typed into the text box.
 * @returns The draft without surrounding whitespace.
 */
export const normalizeTag = (draft: string) => draft.trim();

/**
 * Append a draft to the end of a tag list.
 *
 * @remarks
 * Tags are unique, so a draft that is blank or already in the list adds
 * nothing.
 *
 * @param tags - The current tags.
 * @param draft - The text typed into the text box.
 * @returns A new list with the tag appended, or `tags` itself when nothing was
 * added.
 */
export const appendTag = (
  tags: readonly string[],
  draft: string
): readonly string[] => {
  const tag = normalizeTag(draft);

  return tag && !tags.includes(tag) ? [...tags, tag] : tags;
};

/**
 * Remove a tag from a tag list.
 *
 * @param tags - The current tags.
 * @param tag - The tag to remove.
 * @returns A new list without the tag, or `tags` itself when it was not there.
 */
export const removeTag = (
  tags: readonly string[],
  tag: string
): readonly string[] =>
  tags.includes(tag) ? tags.filter(current => current !== tag) : tags;

/**
 * Get the default accessible label of a tag's remove button.
 *
 * @param tag - The tag the button removes.
 * @returns The button's label.
 */
export const getTagRemoveButtonLabel = (tag: string) => `Remove ${tag}`;
