# ASD-STE100 reference

Sources checked **2026-10-02**. This note paraphrases selected requirements and
provides original examples. It does not replace the official standard or dictionary.

## Which standard

Use **ASD-STE100 Simplified Technical English, Issue 9, issued 2025-01-15**.
The [official home page](https://www.asd-ste100.org/) and
[About STE](https://www.asd-ste100.org/about_STE.html) identify this as the current issue.
ASD owns the standard; the Simplified Technical English Maintenance Group (STEMG)
maintains it. It has two parts: 53 writing rules in nine sections, and a controlled
dictionary of approximately 900 approved words, plus guidance for technical terms.

This is a controlled language for technical documentation, originally aircraft
maintenance. It is not a file format or a general writing certification. The
[official FAQ](https://www.asd-ste100.org/STE_faq.html#collapse2_4) supports adopting
its principles in other writing contexts. Issue 9 uses the term **standard**, replacing
the former designation **specification**. "ASD" alone does not identify the document.

Obtain the complete text from the
[official copy request page](https://www.asd-ste100.org/STE_downloads.html#article02-2l).
The official site also hosts the [Issue 9 PDF](https://www.asd-ste100.org/assets/files/ASD-STE100_ISSUE9.pdf),
which was inspected to verify the rule numbers below. The standard and dictionary
are not redistributed in this repository.

## Selected rule map

These are summaries, not the complete requirements. Page numbers are the printed
page identifiers in the Issue 9 PDF.

| Topic | Issue 9 reference | Practical effect |
| --- | --- | --- |
| Vocabulary | Rules 1.1–1.4, page 1-1-1 | Use approved words with their approved meaning, part of speech, and forms. |
| Technical terms | Rules 1.5–1.13, page 1-1-1 | Use permitted technical nouns and verbs; a difficult word is not automatically a technical term. |
| Consistent names | Rule 1.11, page 1-1-1 | Use the same technical noun for the same item. |
| Long noun groups | Rules 2.1–2.2, page 1-2-1 | Limit multi-word nouns to three words; clarify longer technical nouns with the specified methods. |
| Verb forms | Rules 3.1–3.5, page 1-3-1 | Use approved forms and simple tenses; restrict complex constructions and verb forms ending in "-ing". |
| Voice | Rule 3.6, page 1-3-1 | Use active voice; descriptive text permits passive voice when the agent is unknown. |
| Instructions | Rules 5.1–5.3, page 1-5-1 | Maximum 20 words per sentence; one instruction, except simultaneous actions; imperative verbs. |
| Conditions | Rule 5.4, page 1-5-1 | Put a condition the reader needs first before the command, separated by a comma. |
| Explanations | Rules 6.1–6.6, page 1-6-1 | Give information gradually; maximum 25 words per sentence; one topic and at most six sentences per paragraph. |
| Safety text | Section 7 | Preserve the hazard, consequence, and required action; consult the full rules for warnings and cautions. |
| Counting words | Rule 8.6, section 8 | Use the standard's counting conventions; a whitespace counter is only a rough aid. |

Do not ban every word ending in "-ing": the
[FAQ explains the exceptions](https://www.asd-ste100.org/STE_faq.html#collapse1_5),
including permitted technical nouns and approved entries with other parts of speech.
For strict work, look up each word in Part 2 and document the applicable technical
terminology. These selected rules alone cannot establish compliance.

## Concrete examples

These examples were written for this project. They show the style and the named
rule, without asserting that a larger document has passed a full dictionary review.

| Before | After | What changed |
| --- | --- | --- |
| The valve must be closed before operation. | Before you start the operation, close the valve. | A direct command and prerequisite, rules 3.6 and 5.3–5.4. |
| Remove the cover and disconnect the cable. | Remove the cover. Disconnect the cable. | One instruction per sentence, rule 5.2. |
| Commence the test. | Start the test. | The FAQ identifies "start" as the selected synonym. |
| Drain about 2 liters of fuel. | Drain approximately 2 liters of fuel. | The dictionary restricts "about" to its approved meaning. |

## Karpathy's image and intent

The [source post](https://x.com/karpathy/status/2105819303471976479) proposes asking
an LLM to explain something in ASD-STE100, sometimes softened to "80% of the way to
ASD-STE100." The skill adopts that lighter mode for ordinary explanations. It does
not interpret 80% as a measured percentage of conformity.

The attached [reference image](karpathy-asd-ste100.png)
([original image](https://pbs.twimg.com/media/HTlaHqgbwAAS1lv.png?name=orig)) illustrates document structure,
short sentences, dictionary entries, and examples. It is a visual reference supplied
by the user through the linked post, not an authoritative copy of Issue 9.

One dictionary example in the image conflicts with the official standard: it marks
"approximately" as unapproved and recommends "about." Issue 9 approves
**APPROXIMATELY** as an adverb; **ABOUT** is a preposition meaning "concerned with."
See Part 2, pages **2-1-A2** and **2-1-A18**, and the
[official FAQ explanation](https://www.asd-ste100.org/STE_faq.html#collapse6_5).
The image also uses the older labels "technical names" and "noun clusters";
Issue 9 uses **technical nouns** and **multi-word nouns**. Follow the official issue
when the image and standard differ.

The image remains third-party material with its original ownership; no endorsement
by Karpathy, ASD, or STEMG is implied. The project license does not grant rights to it.

## Verification boundary

The [STEMG downloads page](https://www.asd-ste100.org/STE_downloads.html) explains
that plausible AI-generated STE does not establish verified compliance. Its
[FAQ on tools](https://www.asd-ste100.org/STE_faq.html#collapse1_8) states that no tool
replaces the standard and that ASD/STEMG do not endorse or certify tool vendors.
An assistant can produce a draft and a documented review; it must identify checks
it could not perform instead of calling its output certified or compliant.
