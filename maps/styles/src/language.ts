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

function getNameBlock(
  scriptSegment: "name" | "name2" | "name3",
  regular?: string
) {
  return [
    ["coalesce", ["get", `pgf:${scriptSegment}`], ["get", scriptSegment]],
    {
      "text-font": ["literal", [regular || "Noto Sans Regular"]]
    }
  ];
}

function isNotInTargetScript(
  lang: string,
  script: string,
  scriptSegment: "name" | "name2" | "name3"
) {
  let suffix = "name";
  if (scriptSegment === "name") {
    suffix = "";
  } else if (scriptSegment === "name2") {
    suffix = "2";
  } else if (scriptSegment === "name3") {
    suffix = "3";
  }

  if (script === "Latin") {
    return ["has", `script${suffix}`];
  }

  if (lang === "ja") {
    return [
      "all",
      ["!=", ["get", `script${suffix}`], "Han"],
      ["!=", ["get", `script${suffix}`], "Hiragana"],
      ["!=", ["get", `script${suffix}`], "Katakana"],
      ["!=", ["get", `script${suffix}`], "Mixed-Japanese"]
    ];
  }

  return ["!=", ["get", `script${suffix}`], script];
}

function getFontFormatting(_script: string) {
  // Inherit the layer's face. A script name does not select a typeface;
  // additional script coverage must be supplied by the configured glyph stack.
  return {};
}

function getDefaultScript(lang: string) {
  const pair = languageScriptPairs.find(d => d.lang === lang);

  return pair === undefined ? "Latin" : pair.script;
}

export function getCountryName(lang: string, script?: string) {
  const targetScript = script || getDefaultScript(lang);
  let namePrefix: string;
  if (targetScript === "Devanagari") {
    namePrefix = "pgf:";
  } else {
    namePrefix = "";
  }
  return [
    "format",
    ["coalesce", ["get", `${namePrefix}name:${lang}`], ["get", "name:en"]],
    getFontFormatting(targetScript)
  ];
}

export function getMultilineName(
  lang: string,
  script?: string,
  regular?: string
) {
  const targetScript = script || getDefaultScript(lang);
  let namePrefix: string;
  if (targetScript === "Devanagari") {
    namePrefix = "pgf:";
  } else {
    namePrefix = "";
  }

  const result = [
    "case",
    [
      "all",
      ["any", ["has", "name"], ["has", "pgf:name"]],
      ["!", ["any", ["has", "name2"], ["has", "pgf:name2"]]],
      ["!", ["any", ["has", "name3"], ["has", "pgf:name3"]]]
    ],
    // The local name has 1 script segment: `name`
    [
      "case",
      isNotInTargetScript(lang, targetScript, "name"),
      // `name` is not in the target script
      [
        "case",
        ["any", ["is-supported-script", ["get", "name"]], ["has", "pgf:name"]],
        // `name` can be rendered correctly
        [
          "format",
          [
            "coalesce",
            ["get", `${namePrefix}name:${lang}`],
            ["get", "name:en"] // Always fallback to English
          ],
          getFontFormatting(targetScript),
          "\n",
          {},
          [
            "case",
            [
              "all",
              ["!", ["has", `${namePrefix}name:${lang}`]],
              ["has", "name:en"],
              ["!", ["has", "script"]]
            ],
            // We did fallback to English in the first line and `name` is Latin
            "",
            ["coalesce", ["get", "pgf:name"], ["get", "name"]]
          ],
          {
            "text-font": ["literal", [regular || "Noto Sans Regular"]]
          }
        ],
        // `name` cannot be rendered correctly, fallback to `name:en`
        ["get", "name:en"]
      ],
      // `name` is in the target script
      [
        "format",
        [
          "coalesce",
          ["get", `${namePrefix}name:${lang}`],
          ["get", "pgf:name"],
          ["get", "name"]
        ],
        getFontFormatting(targetScript)
      ]
    ],
    [
      "all",
      ["any", ["has", "name"], ["has", "pgf:name"]],
      ["any", ["has", "name2"], ["has", "pgf:name2"]],
      ["!", ["any", ["has", "name3"], ["has", "pgf:name3"]]]
    ],
    // The local name has 2 script segments: `name` and `name2`
    [
      "case",
      [
        "all",
        isNotInTargetScript(lang, targetScript, "name"),
        isNotInTargetScript(lang, targetScript, "name2")
      ],
      // Both `name` and `name2` are not in the target script
      [
        "format",
        ["get", `${namePrefix}name:${lang}`],
        getFontFormatting(targetScript),
        "\n",
        {},
        ...getNameBlock("name", regular),
        "\n",
        {},
        ...getNameBlock("name2", regular)
      ],
      // Either `name` or `name2` is in the target script
      [
        "case",
        isNotInTargetScript(lang, targetScript, "name2"),
        // `name2` is not in the target script, therefore `name` is in the target script
        [
          "format",
          [
            "coalesce",
            ["get", `${namePrefix}name:${lang}`],
            ["get", "pgf:name"],
            ["get", "name"]
          ],
          getFontFormatting(targetScript),
          "\n",
          {},
          ...getNameBlock("name2", regular)
        ],
        // `name2` is in the target script, therefore `name` is not in the target script
        [
          "format",
          [
            "coalesce",
            ["get", `${namePrefix}name:${lang}`],
            ["get", "pgf:name2"],
            ["get", "name2"]
          ],
          getFontFormatting(targetScript),
          "\n",
          {},
          ...getNameBlock("name", regular)
        ]
      ]
    ],
    // The local name has 3 script segments: `name`, `name2`, and `name3`
    [
      "case",
      [
        "all",
        isNotInTargetScript(lang, targetScript, "name"),
        isNotInTargetScript(lang, targetScript, "name2"),
        isNotInTargetScript(lang, targetScript, "name3")
      ],
      // All three `name`, `name2`, and `name3` are not in the target script
      [
        "format",
        ["get", `${namePrefix}name:${lang}`],
        getFontFormatting(targetScript),
        "\n",
        {},
        ...getNameBlock("name", regular),
        "\n",
        {},
        ...getNameBlock("name2", regular),
        "\n",
        {},
        ...getNameBlock("name3", regular)
      ],
      // Exactly one of the 3 script segments `name`, `name2`, or `name3` is in the target script
      [
        "case",
        ["!", isNotInTargetScript(lang, targetScript, "name")],
        // `name` is in the target script, and `name2` and `name3` are not
        [
          "format",
          [
            "coalesce",
            ["get", `${namePrefix}name:${lang}`],
            ["get", "pgf:name"],
            ["get", "name"]
          ],
          getFontFormatting(targetScript),
          "\n",
          {},
          ...getNameBlock("name2", regular),
          "\n",
          {},
          ...getNameBlock("name3", regular)
        ],
        ["!", isNotInTargetScript(lang, targetScript, "name2")],
        // `name2` is in the target script, and `name` and `name3` are not
        [
          "format",
          [
            "coalesce",
            ["get", `${namePrefix}name:${lang}`],
            ["get", "pgf:name2"],
            ["get", "name2"]
          ],
          getFontFormatting(targetScript),
          "\n",
          {},
          ...getNameBlock("name", regular),
          "\n",
          {},
          ...getNameBlock("name3", regular)
        ],
        // `name3` is in the target script, and `name` and `name2` are not
        [
          "format",
          [
            "coalesce",
            ["get", `${namePrefix}name:${lang}`],
            ["get", "pgf:name3"],
            ["get", "name3"]
          ],
          getFontFormatting(targetScript),
          "\n",
          {},
          ...getNameBlock("name", regular),
          "\n",
          {},
          ...getNameBlock("name2", regular)
        ]
      ]
    ]
  ];

  return result;
}

export const languageScriptPairs = [
  {
    lang: "ar",
    fullName: "Arabic",
    script: "Arabic"
  },
  {
    lang: "cs",
    fullName: "Czech",
    script: "Latin"
  },
  {
    lang: "bg",
    fullName: "Bulgarian",
    script: "Cyrillic"
  },
  {
    lang: "da",
    fullName: "Danish",
    script: "Latin"
  },
  {
    lang: "de",
    fullName: "German",
    script: "Latin"
  },
  {
    lang: "el",
    fullName: "Greek",
    script: "Greek"
  },
  {
    lang: "en",
    fullName: "English",
    script: "Latin"
  },
  {
    lang: "es",
    fullName: "Spanish",
    script: "Latin"
  },
  {
    lang: "et",
    fullName: "Estonian",
    script: "Latin"
  },
  {
    lang: "fa",
    fullName: "Persian",
    script: "Arabic"
  },
  {
    lang: "fi",
    fullName: "Finnish",
    script: "Latin"
  },
  {
    lang: "fr",
    fullName: "French",
    script: "Latin"
  },
  {
    lang: "ga",
    fullName: "Irish",
    script: "Latin"
  },
  {
    lang: "he",
    fullName: "Hebrew",
    script: "Hebrew"
  },
  {
    lang: "hi",
    fullName: "Hindi",
    script: "Devanagari"
  },
  {
    lang: "hr",
    fullName: "Croatian",
    script: "Latin"
  },
  {
    lang: "hu",
    fullName: "Hungarian",
    script: "Latin"
  },
  {
    lang: "id",
    fullName: "Indonesian",
    script: "Latin"
  },
  {
    lang: "it",
    fullName: "Italian",
    script: "Latin"
  },
  {
    lang: "ja",
    fullName: "Japanese",
    // Japanese is a special case, using multiple scripts
    script: ""
  },
  {
    lang: "ko",
    fullName: "Korean",
    script: "Hangul"
  },
  {
    lang: "lt",
    fullName: "Lithuanian",
    script: "Latin"
  },
  {
    lang: "lv",
    fullName: "Latvian",
    script: "Latin"
  },
  {
    lang: "ne",
    fullName: "Nepali",
    script: "Devanagari"
  },
  {
    lang: "nl",
    fullName: "Dutch",
    script: "Latin"
  },
  {
    lang: "no",
    fullName: "Norwegian",
    script: "Latin"
  },
  {
    lang: "mr",
    fullName: "Marathi",
    script: "Devanagari"
  },
  {
    lang: "mt",
    fullName: "Maltese",
    script: "Latin"
  },
  {
    lang: "pl",
    fullName: "Polish",
    script: "Latin"
  },
  {
    lang: "pt",
    fullName: "Portuguese",
    script: "Latin"
  },
  {
    lang: "ro",
    fullName: "Romanian",
    script: "Latin"
  },
  {
    lang: "ru",
    fullName: "Russian",
    script: "Cyrillic"
  },
  {
    lang: "sk",
    fullName: "Slovak",
    script: "Latin"
  },
  {
    lang: "sl",
    fullName: "Slovenian",
    script: "Latin"
  },
  {
    lang: "sv",
    fullName: "Swedish",
    script: "Latin"
  },
  {
    lang: "tr",
    fullName: "Turkish",
    script: "Latin"
  },
  {
    lang: "uk",
    fullName: "Ukrainian",
    script: "Cyrillic"
  },
  {
    lang: "ur",
    fullName: "Urdu",
    script: "Arabic"
  },
  {
    lang: "vi",
    fullName: "Vietnamese",
    script: "Latin"
  },
  {
    lang: "zh-Hans",
    fullName: "Chinese (Simplified)",
    script: "Han"
  },
  {
    lang: "zh-Hant",
    fullName: "Chinese (Traditional)",
    script: "Han"
  }
];
