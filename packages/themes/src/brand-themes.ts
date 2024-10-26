type Theme = {
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
  color6: string;
  color7: string;
  color8: string;
  color9: string;
  color10: string;
  color11: string;
  color12: string;
  color13: string;
  color14: string;
  primary: string;
  secondary: string;
  muted: string;
  disabled: string;
  bg: string;
  bgTransparent: string;
  fg: string;
  fgTransparent: string;
  background: string;
  backgroundRaised: string;
  backgroundHover: string;
  backgroundPress: string;
  backgroundFocus: string;
  backgroundStrong: string;
  backgroundTransparent: string;
  color: string;
  colorHover: string;
  colorPress: string;
  colorFocus: string;
  colorTransparent: string;
  borderColor: string;
  borderColorHover: string;
  borderColorFocus: string;
  borderColorPress: string;
  placeholderColor: string;
  outlineColor: string;
  base1: string;
  base2: string;
  base3: string;
  base4: string;
  base5: string;
  base6: string;
  base7: string;
  base8: string;
  base9: string;
  base10: string;
  base11: string;
  base12: string;
  brand1: string;
  brand2: string;
  brand3: string;
  brand4: string;
  brand5: string;
  brand6: string;
  brand7: string;
  brand8: string;
  brand9: string;
  brand10: string;
  brand11: string;
  brand12: string;
  alternate1: string;
  alternate2: string;
  alternate3: string;
  alternate4: string;
  alternate5: string;
  alternate6: string;
  alternate7: string;
  alternate8: string;
  alternate9: string;
  alternate10: string;
  alternate11: string;
  alternate12: string;
  accent1: string;
  accent2: string;
  accent3: string;
  accent4: string;
  accent5: string;
  accent6: string;
  accent7: string;
  accent8: string;
  accent9: string;
  accent10: string;
  accent11: string;
  accent12: string;
  help1: string;
  help2: string;
  help3: string;
  help4: string;
  help5: string;
  help6: string;
  help7: string;
  help8: string;
  help9: string;
  help10: string;
  help11: string;
  help12: string;
  success1: string;
  success2: string;
  success3: string;
  success4: string;
  success5: string;
  success6: string;
  success7: string;
  success8: string;
  success9: string;
  success10: string;
  success11: string;
  success12: string;
  error1: string;
  error2: string;
  error3: string;
  error4: string;
  error5: string;
  error6: string;
  error7: string;
  error8: string;
  error9: string;
  error10: string;
  error11: string;
  error12: string;
  warning1: string;
  warning2: string;
  warning3: string;
  warning4: string;
  warning5: string;
  warning6: string;
  warning7: string;
  warning8: string;
  warning9: string;
  warning10: string;
  warning11: string;
  warning12: string;
  info1: string;
  info2: string;
  info3: string;
  info4: string;
  info5: string;
  info6: string;
  info7: string;
  info8: string;
  info9: string;
  info10: string;
  info11: string;
  info12: string;
  shadowColor: string;
  shadowColorHover: string;
  shadowColorPress: string;
  shadowColorFocus: string;
};

function t(a: [number, number][]) {
  let res: Record<string, string> = {};
  for (const [ki, vi] of a) {
    res[ks[ki] as string] = vs[vi] as string;
  }
  return res as Theme;
}
const vs = [
  "hsl(0,0%,98.04%)",
  "hsl(0,0%,90.2%)",
  "hsl(240,1.12%,82.55%)",
  "hsl(240,0.78%,74.71%)",
  "hsl(240,0.59%,66.86%)",
  "hsl(240,0.96%,59.22%)",
  "hsl(220,1.2%,51.18%)",
  "hsl(225,1.8%,43.53%)",
  "hsl(225,2.2%,35.69%)",
  "hsl(228,7.94%,12.35%)",
  "hsl(240,6.25%,6.27%)",
  "hsl(0,0%,0%)",
  "hsla(0,0%,0%, 0)",
  "hsla(0,0%,98.04%, 0)",
  "hsl(175.56,42.86%,87.65%)",
  "hsl(175.5,44.44%,82.35%)",
  "hsl(174.44,46.55%,77.25%)",
  "hsl(175.52,46.85%,71.96%)",
  "hsl(174.75,47.62%,67.06%)",
  "hsl(175.48,47.69%,61.76%)",
  "hsl(174.95,48.42%,56.67%)",
  "hsl(175,48.39%,51.37%)",
  "hsl(175.07,56.78%,46.27%)",
  "hsl(175.1,70.33%,40.98%)",
  "hsl(175.76,62.26%,31.18%)",
  "hsl(178.78,44.95%,21.37%)",
  "hsl(333.75,59.26%,89.41%)",
  "hsl(333.6,65.79%,85.1%)",
  "hsl(333.64,67.35%,80.78%)",
  "hsl(333.66,68.33%,76.47%)",
  "hsl(333.06,69.01%,72.16%)",
  "hsl(333.16,69.51%,67.84%)",
  "hsl(333.23,69.89%,63.53%)",
  "hsl(333.24,71.15%,59.22%)",
  "hsl(333.29,71.3%,54.9%)",
  "hsl(333.33,71.43%,50.59%)",
  "hsl(332.5,62.5%,37.65%)",
  "hsl(330.51,47.2%,24.51%)",
  "hsl(244.44,60%,91.18%)",
  "hsl(245.85,65.08%,87.65%)",
  "hsl(246.55,67.9%,84.12%)",
  "hsl(245.29,69.39%,80.78%)",
  "hsl(245.78,72.17%,77.45%)",
  "hsl(245,72.73%,74.12%)",
  "hsl(245.45,73.33%,70.59%)",
  "hsl(245.81,73.81%,67.06%)",
  "hsl(245.26,74.05%,63.73%)",
  "hsl(245.56,74.38%,60.2%)",
  "hsl(245.29,45.13%,44.31%)",
  "hsl(244.53,36.55%,28.43%)",
  "hsl(160.91,28.95%,85.1%)",
  "hsl(163.13,29.09%,78.43%)",
  "hsl(161.86,30.07%,71.96%)",
  "hsl(162.22,30.68%,65.49%)",
  "hsl(161.54,31.1%,59.02%)",
  "hsl(161.84,31.4%,52.55%)",
  "hsl(161.38,37.02%,46.08%)",
  "hsl(162.06,48.26%,39.41%)",
  "hsl(161.67,64.29%,32.94%)",
  "hsl(161.85,88.15%,26.47%)",
  "hsl(162.75,72.73%,21.57%)",
  "hsl(166.5,47.62%,16.47%)",
  "hsl(351.11,39.13%,86.47%)",
  "hsl(351.22,42.27%,80.98%)",
  "hsl(350.18,43.31%,75.1%)",
  "hsl(350.29,43.59%,69.41%)",
  "hsl(350.49,44.09%,63.53%)",
  "hsl(350.53,44.19%,57.84%)",
  "hsl(350.09,44.49%,51.96%)",
  "hsl(350.24,51.9%,46.47%)",
  "hsl(350.36,66.18%,40.59%)",
  "hsl(350.4,84.27%,34.9%)",
  "hsl(349.2,72.46%,27.06%)",
  "hsl(347.76,49.49%,19.41%)",
  "hsl(42,62.5%,90.59%)",
  "hsl(42.27,66.67%,87.06%)",
  "hsl(41.69,69.41%,83.33%)",
  "hsl(42.16,71.15%,79.61%)",
  "hsl(42.27,70.97%,75.69%)",
  "hsl(42.52,72.03%,71.96%)",
  "hsl(42.2,72.84%,68.24%)",
  "hsl(42.27,73.33%,64.71%)",
  "hsl(42.04,73.87%,60.98%)",
  "hsl(42.22,74.31%,57.25%)",
  "hsl(41.89,49.07%,42.35%)",
  "hsl(42.35,36.69%,27.25%)",
  "hsl(212.9,44.93%,86.47%)",
  "hsl(212.61,46.94%,80.78%)",
  "hsl(213.44,48.03%,75.1%)",
  "hsl(213.16,48.72%,69.41%)",
  "hsl(213.55,50.27%,63.73%)",
  "hsl(213.33,50.47%,58.04%)",
  "hsl(213.66,50.62%,52.35%)",
  "hsl(213.48,57.98%,46.67%)",
  "hsl(213.51,74.04%,40.78%)",
  "hsl(213.37,94.41%,35.1%)",
  "hsl(213.68,81.43%,27.45%)",
  "hsl(214,58.82%,20%)",
  "rgba(0,0,0,0.085)",
  "rgba(0,0,0,0.04)",
  "hsl(228,7.25%,13.53%)",
  "hsl(230,7.32%,16.08%)",
  "hsl(222.86,6.93%,19.8%)",
  "hsl(225,6.35%,24.71%)",
  "hsl(220,5.81%,30.39%)",
  "hsl(218.18,5.82%,37.06%)",
  "hsl(216.92,5.68%,44.9%)",
  "hsl(214.29,5.88%,53.33%)",
  "hsl(212.73,26.83%,83.92%)",
  "hsl(212.73,26.83%,91.96%)",
  "hsl(0,0%,100%)",
  "hsla(0,0%,100%, 0)",
  "hsla(228,7.94%,12.35%, 0)",
  "hsl(180,32.63%,18.63%)",
  "hsl(176.17,41.59%,22.16%)",
  "hsl(175.08,46.56%,25.69%)",
  "hsl(173.77,51.68%,29.22%)",
  "hsl(174.07,54.49%,32.75%)",
  "hsl(173.27,57.84%,36.27%)",
  "hsl(173.06,59.61%,39.8%)",
  "hsl(172.55,61.99%,43.33%)",
  "hsl(172.85,63.18%,46.86%)",
  "hsl(172.46,66.01%,50.39%)",
  "hsl(174.74,57%,60.78%)",
  "hsl(180.94,43.84%,71.37%)",
  "hsl(328.13,33.33%,18.82%)",
  "hsl(329.39,43.36%,22.16%)",
  "hsl(330.46,49.62%,25.69%)",
  "hsl(331.11,54.36%,29.22%)",
  "hsl(332.45,58.33%,32.94%)",
  "hsl(332.63,61.29%,36.47%)",
  "hsl(332.77,63.73%,40%)",
  "hsl(332.65,66.52%,43.33%)",
  "hsl(333.29,68.33%,47.06%)",
  "hsl(330.77,58.79%,60.98%)",
  "hsl(320.38,36.05%,71.18%)",
  "hsl(233.08,21.67%,23.53%)",
  "hsl(233.33,24.32%,29.02%)",
  "hsl(233.62,26.55%,34.71%)",
  "hsl(233.68,27.8%,40.2%)",
  "hsl(234.63,28.51%,46.08%)",
  "hsl(234.55,31.17%,51.57%)",
  "hsl(234.55,40.37%,57.25%)",
  "hsl(234.49,51.58%,62.75%)",
  "hsl(234.5,67.7%,68.43%)",
  "hsl(234.45,89.47%,73.92%)",
  "hsl(233.02,74.14%,77.25%)",
  "hsl(228,55.56%,80.59%)",
  "hsl(166.45,36.47%,16.67%)",
  "hsl(164.68,48.45%,19.02%)",
  "hsl(163.55,56.36%,21.57%)",
  "hsl(162.08,62.6%,24.12%)",
  "hsl(161.29,67.88%,26.86%)",
  "hsl(160.56,72%,29.41%)",
  "hsl(160.49,75.46%,31.96%)",
  "hsl(160.58,79.43%,34.31%)",
  "hsl(160.13,81.91%,36.86%)",
  "hsl(160.12,84.08%,39.41%)",
  "hsl(162.93,48.74%,53.33%)",
  "hsl(169.52,38.18%,67.65%)",
  "hsl(350.32,33.33%,18.24%)",
  "hsl(352.17,41.82%,21.57%)",
  "hsl(353.23,49.21%,24.71%)",
  "hsl(354.62,54.17%,28.24%)",
  "hsl(354.89,58.75%,31.37%)",
  "hsl(355.64,61.8%,34.9%)",
  "hsl(355.71,64.95%,38.04%)",
  "hsl(355.74,66.82%,41.37%)",
  "hsl(355.82,69.3%,44.71%)",
  "hsl(356.18,70.61%,48.04%)",
  "hsl(354.11,53.85%,59.22%)",
  "hsl(345.88,33.77%,70.39%)",
  "hsl(45,17.24%,22.75%)",
  "hsl(44.52,21.68%,28.04%)",
  "hsl(45,25.88%,33.33%)",
  "hsl(45,28.57%,38.43%)",
  "hsl(45.22,30.94%,43.73%)",
  "hsl(45.19,32.53%,48.82%)",
  "hsl(45.32,40.17%,54.12%)",
  "hsl(45.14,50.72%,59.41%)",
  "hsl(45.25,65.56%,64.71%)",
  "hsl(45.23,84.42%,69.8%)",
  "hsl(46.5,61.54%,74.51%)",
  "hsl(51.43,26.42%,79.22%)",
  "hsl(213.53,29.82%,22.35%)",
  "hsl(213.06,35.25%,27.25%)",
  "hsl(212.81,39.02%,32.16%)",
  "hsl(212.31,41.05%,37.25%)",
  "hsl(212.55,43.52%,42.35%)",
  "hsl(212.22,44.63%,47.45%)",
  "hsl(212.2,50.62%,52.35%)",
  "hsl(212.17,63.3%,57.25%)",
  "hsl(211.97,79.17%,62.35%)",
  "hsl(211.98,100%,67.25%)",
  "hsl(211.76,85.61%,72.75%)",
  "hsl(212.57,63.64%,78.43%)",
  "rgba(0,0,0,0.3)",
  "rgba(0,0,0,0.2)",
  "hsla(178.78,44.95%,21.37%, 0)",
  "hsla(175.56,42.86%,87.65%, 0)",
  "hsla(330.51,47.2%,24.51%, 0)",
  "hsla(333.75,59.26%,89.41%, 0)",
  "hsla(244.53,36.55%,28.43%, 0)",
  "hsla(244.44,60%,91.18%, 0)",
  "hsla(166.5,47.62%,16.47%, 0)",
  "hsla(160.91,28.95%,85.1%, 0)",
  "hsla(42.35,36.69%,27.25%, 0)",
  "hsla(42,62.5%,90.59%, 0)",
  "hsla(347.76,49.49%,19.41%, 0)",
  "hsla(351.11,39.13%,86.47%, 0)",
  "hsla(214,58.82%,20%, 0)",
  "hsla(212.9,44.93%,86.47%, 0)",
  "hsla(180.94,43.84%,71.37%, 0)",
  "hsla(180,32.63%,18.63%, 0)",
  "hsla(320.38,36.05%,71.18%, 0)",
  "hsla(328.13,33.33%,18.82%, 0)",
  "hsla(228,55.56%,80.59%, 0)",
  "hsla(233.08,21.67%,23.53%, 0)",
  "hsla(169.52,38.18%,67.65%, 0)",
  "hsla(166.45,36.47%,16.67%, 0)",
  "hsla(51.43,26.42%,79.22%, 0)",
  "hsla(45,17.24%,22.75%, 0)",
  "hsla(345.88,33.77%,70.39%, 0)",
  "hsla(350.32,33.33%,18.24%, 0)",
  "hsla(212.57,63.64%,78.43%, 0)",
  "hsla(213.53,29.82%,22.35%, 0)",
  "rgba(0,0,0,0.5)",
  "rgba(0,0,0,0.9)"
];

const ks = [
  "color1",
  "color2",
  "color3",
  "color4",
  "color5",
  "color6",
  "color7",
  "color8",
  "color9",
  "color10",
  "color11",
  "color12",
  "color13",
  "color14",
  "primary",
  "secondary",
  "muted",
  "disabled",
  "bg",
  "bgTransparent",
  "fg",
  "fgTransparent",
  "background",
  "backgroundRaised",
  "backgroundHover",
  "backgroundPress",
  "backgroundFocus",
  "backgroundStrong",
  "backgroundTransparent",
  "color",
  "colorHover",
  "colorPress",
  "colorFocus",
  "colorTransparent",
  "borderColor",
  "borderColorHover",
  "borderColorFocus",
  "borderColorPress",
  "placeholderColor",
  "outlineColor",
  "base1",
  "base2",
  "base3",
  "base4",
  "base5",
  "base6",
  "base7",
  "base8",
  "base9",
  "base10",
  "base11",
  "base12",
  "brand1",
  "brand2",
  "brand3",
  "brand4",
  "brand5",
  "brand6",
  "brand7",
  "brand8",
  "brand9",
  "brand10",
  "brand11",
  "brand12",
  "alternate1",
  "alternate2",
  "alternate3",
  "alternate4",
  "alternate5",
  "alternate6",
  "alternate7",
  "alternate8",
  "alternate9",
  "alternate10",
  "alternate11",
  "alternate12",
  "accent1",
  "accent2",
  "accent3",
  "accent4",
  "accent5",
  "accent6",
  "accent7",
  "accent8",
  "accent9",
  "accent10",
  "accent11",
  "accent12",
  "help1",
  "help2",
  "help3",
  "help4",
  "help5",
  "help6",
  "help7",
  "help8",
  "help9",
  "help10",
  "help11",
  "help12",
  "success1",
  "success2",
  "success3",
  "success4",
  "success5",
  "success6",
  "success7",
  "success8",
  "success9",
  "success10",
  "success11",
  "success12",
  "error1",
  "error2",
  "error3",
  "error4",
  "error5",
  "error6",
  "error7",
  "error8",
  "error9",
  "error10",
  "error11",
  "error12",
  "warning1",
  "warning2",
  "warning3",
  "warning4",
  "warning5",
  "warning6",
  "warning7",
  "warning8",
  "warning9",
  "warning10",
  "warning11",
  "warning12",
  "info1",
  "info2",
  "info3",
  "info4",
  "info5",
  "info6",
  "info7",
  "info8",
  "info9",
  "info10",
  "info11",
  "info12",
  "shadowColor",
  "shadowColorHover",
  "shadowColorPress",
  "shadowColorFocus"
];

const n1 = t([
  [0, 0],
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
  [5, 5],
  [6, 6],
  [7, 7],
  [8, 8],
  [9, 9],
  [10, 10],
  [11, 11],
  [12, 12],
  [13, 12],
  [14, 9],
  [15, 7],
  [16, 3],
  [17, 5],
  [18, 0],
  [19, 13],
  [20, 11],
  [21, 12],
  [22, 0],
  [23, 2],
  [24, 2],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 13],
  [29, 7],
  [30, 10],
  [31, 11],
  [32, 11],
  [33, 12],
  [34, 7],
  [35, 9],
  [36, 11],
  [37, 11],
  [38, 7],
  [39, 9],
  [40, 0],
  [41, 1],
  [42, 2],
  [43, 3],
  [44, 4],
  [45, 5],
  [46, 6],
  [47, 7],
  [48, 8],
  [49, 9],
  [50, 10],
  [51, 11],
  [52, 14],
  [53, 15],
  [54, 16],
  [55, 17],
  [56, 18],
  [57, 19],
  [58, 20],
  [59, 21],
  [60, 22],
  [61, 23],
  [62, 24],
  [63, 25],
  [64, 26],
  [65, 27],
  [66, 28],
  [67, 29],
  [68, 30],
  [69, 31],
  [70, 32],
  [71, 33],
  [72, 34],
  [73, 35],
  [74, 36],
  [75, 37],
  [76, 14],
  [77, 15],
  [78, 16],
  [79, 17],
  [80, 18],
  [81, 19],
  [82, 20],
  [83, 21],
  [84, 22],
  [85, 23],
  [86, 24],
  [87, 25],
  [88, 38],
  [89, 39],
  [90, 40],
  [91, 41],
  [92, 42],
  [93, 43],
  [94, 44],
  [95, 45],
  [96, 46],
  [97, 47],
  [98, 48],
  [99, 49],
  [100, 50],
  [101, 51],
  [102, 52],
  [103, 53],
  [104, 54],
  [105, 55],
  [106, 56],
  [107, 57],
  [108, 58],
  [109, 59],
  [110, 60],
  [111, 61],
  [112, 62],
  [113, 63],
  [114, 64],
  [115, 65],
  [116, 66],
  [117, 67],
  [118, 68],
  [119, 69],
  [120, 70],
  [121, 71],
  [122, 72],
  [123, 73],
  [124, 74],
  [125, 75],
  [126, 76],
  [127, 77],
  [128, 78],
  [129, 79],
  [130, 80],
  [131, 81],
  [132, 82],
  [133, 83],
  [134, 84],
  [135, 85],
  [136, 86],
  [137, 87],
  [138, 88],
  [139, 89],
  [140, 90],
  [141, 91],
  [142, 92],
  [143, 93],
  [144, 94],
  [145, 95],
  [146, 96],
  [147, 97],
  [148, 98],
  [149, 98],
  [150, 99],
  [151, 99]
]);

export const light = n1;
const n2 = t([
  [0, 9],
  [1, 100],
  [2, 101],
  [3, 102],
  [4, 103],
  [5, 104],
  [6, 105],
  [7, 106],
  [8, 107],
  [9, 108],
  [10, 109],
  [11, 110],
  [12, 111],
  [13, 111],
  [14, 108],
  [15, 106],
  [16, 102],
  [17, 104],
  [18, 9],
  [19, 112],
  [20, 110],
  [21, 111],
  [22, 9],
  [23, 101],
  [24, 101],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 112],
  [29, 106],
  [30, 109],
  [31, 110],
  [32, 110],
  [33, 111],
  [34, 106],
  [35, 108],
  [36, 110],
  [37, 110],
  [38, 106],
  [39, 108],
  [40, 9],
  [41, 100],
  [42, 101],
  [43, 102],
  [44, 103],
  [45, 104],
  [46, 105],
  [47, 106],
  [48, 107],
  [49, 108],
  [50, 109],
  [51, 110],
  [52, 113],
  [53, 114],
  [54, 115],
  [55, 116],
  [56, 117],
  [57, 118],
  [58, 119],
  [59, 120],
  [60, 121],
  [61, 122],
  [62, 123],
  [63, 124],
  [64, 125],
  [65, 126],
  [66, 127],
  [67, 128],
  [68, 129],
  [69, 130],
  [70, 131],
  [71, 132],
  [72, 133],
  [73, 35],
  [74, 134],
  [75, 135],
  [76, 113],
  [77, 114],
  [78, 115],
  [79, 116],
  [80, 117],
  [81, 118],
  [82, 119],
  [83, 120],
  [84, 121],
  [85, 122],
  [86, 123],
  [87, 124],
  [88, 136],
  [89, 137],
  [90, 138],
  [91, 139],
  [92, 140],
  [93, 141],
  [94, 142],
  [95, 143],
  [96, 144],
  [97, 145],
  [98, 146],
  [99, 147],
  [100, 148],
  [101, 149],
  [102, 150],
  [103, 151],
  [104, 152],
  [105, 153],
  [106, 154],
  [107, 155],
  [108, 156],
  [109, 157],
  [110, 158],
  [111, 159],
  [112, 160],
  [113, 161],
  [114, 162],
  [115, 163],
  [116, 164],
  [117, 165],
  [118, 166],
  [119, 167],
  [120, 168],
  [121, 169],
  [122, 170],
  [123, 171],
  [124, 172],
  [125, 173],
  [126, 174],
  [127, 175],
  [128, 176],
  [129, 177],
  [130, 178],
  [131, 179],
  [132, 180],
  [133, 181],
  [134, 182],
  [135, 183],
  [136, 184],
  [137, 185],
  [138, 186],
  [139, 187],
  [140, 188],
  [141, 189],
  [142, 190],
  [143, 191],
  [144, 192],
  [145, 193],
  [146, 194],
  [147, 195],
  [148, 196],
  [149, 196],
  [150, 197],
  [151, 197]
]);

export const dark = n2;
const n3 = t([
  [0, 0],
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
  [5, 5],
  [6, 6],
  [7, 7],
  [8, 8],
  [9, 9],
  [10, 10],
  [11, 11],
  [12, 12],
  [13, 12],
  [14, 9],
  [15, 7],
  [16, 3],
  [17, 5],
  [18, 0],
  [19, 13],
  [20, 11],
  [21, 12],
  [22, 0],
  [23, 2],
  [24, 2],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 13],
  [29, 7],
  [30, 10],
  [31, 11],
  [32, 11],
  [33, 12],
  [34, 3],
  [35, 4],
  [36, 3],
  [37, 3],
  [38, 7],
  [39, 9]
]);

export const light_base = n3;
const n4 = t([
  [0, 0],
  [1, 14],
  [2, 15],
  [3, 16],
  [4, 17],
  [5, 18],
  [6, 19],
  [7, 21],
  [8, 22],
  [9, 23],
  [10, 24],
  [11, 25],
  [12, 11],
  [13, 198],
  [14, 23],
  [15, 21],
  [16, 16],
  [17, 18],
  [18, 0],
  [19, 199],
  [20, 11],
  [21, 198],
  [22, 0],
  [23, 15],
  [24, 15],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 199],
  [29, 21],
  [30, 24],
  [31, 25],
  [32, 25],
  [33, 198],
  [34, 16],
  [35, 17],
  [36, 16],
  [37, 16],
  [38, 21],
  [39, 23]
]);

export const light_brand = n4;
export const light_accent = n4;
const n5 = t([
  [0, 0],
  [1, 26],
  [2, 27],
  [3, 28],
  [4, 29],
  [5, 30],
  [6, 31],
  [7, 33],
  [8, 34],
  [9, 35],
  [10, 36],
  [11, 37],
  [12, 11],
  [13, 200],
  [14, 35],
  [15, 33],
  [16, 28],
  [17, 30],
  [18, 0],
  [19, 201],
  [20, 11],
  [21, 200],
  [22, 0],
  [23, 27],
  [24, 27],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 201],
  [29, 33],
  [30, 36],
  [31, 37],
  [32, 37],
  [33, 200],
  [34, 28],
  [35, 29],
  [36, 28],
  [37, 28],
  [38, 33],
  [39, 35]
]);

export const light_alternate = n5;
const n6 = t([
  [0, 0],
  [1, 38],
  [2, 39],
  [3, 40],
  [4, 41],
  [5, 42],
  [6, 43],
  [7, 45],
  [8, 46],
  [9, 47],
  [10, 48],
  [11, 49],
  [12, 11],
  [13, 202],
  [14, 47],
  [15, 45],
  [16, 40],
  [17, 42],
  [18, 0],
  [19, 203],
  [20, 11],
  [21, 202],
  [22, 0],
  [23, 39],
  [24, 39],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 203],
  [29, 45],
  [30, 48],
  [31, 49],
  [32, 49],
  [33, 202],
  [34, 40],
  [35, 41],
  [36, 40],
  [37, 40],
  [38, 45],
  [39, 47]
]);

export const light_help = n6;
const n7 = t([
  [0, 0],
  [1, 50],
  [2, 51],
  [3, 52],
  [4, 53],
  [5, 54],
  [6, 55],
  [7, 57],
  [8, 58],
  [9, 59],
  [10, 60],
  [11, 61],
  [12, 11],
  [13, 204],
  [14, 59],
  [15, 57],
  [16, 52],
  [17, 54],
  [18, 0],
  [19, 205],
  [20, 11],
  [21, 204],
  [22, 0],
  [23, 51],
  [24, 51],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 205],
  [29, 57],
  [30, 60],
  [31, 61],
  [32, 61],
  [33, 204],
  [34, 52],
  [35, 53],
  [36, 52],
  [37, 52],
  [38, 57],
  [39, 59]
]);

export const light_success = n7;
const n8 = t([
  [0, 0],
  [1, 74],
  [2, 75],
  [3, 76],
  [4, 77],
  [5, 78],
  [6, 79],
  [7, 81],
  [8, 82],
  [9, 83],
  [10, 84],
  [11, 85],
  [12, 11],
  [13, 206],
  [14, 83],
  [15, 81],
  [16, 76],
  [17, 78],
  [18, 0],
  [19, 207],
  [20, 11],
  [21, 206],
  [22, 0],
  [23, 75],
  [24, 75],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 207],
  [29, 81],
  [30, 84],
  [31, 85],
  [32, 85],
  [33, 206],
  [34, 76],
  [35, 77],
  [36, 76],
  [37, 76],
  [38, 81],
  [39, 83]
]);

export const light_warning = n8;
const n9 = t([
  [0, 0],
  [1, 62],
  [2, 63],
  [3, 64],
  [4, 65],
  [5, 66],
  [6, 67],
  [7, 69],
  [8, 70],
  [9, 71],
  [10, 72],
  [11, 73],
  [12, 11],
  [13, 208],
  [14, 71],
  [15, 69],
  [16, 64],
  [17, 66],
  [18, 0],
  [19, 209],
  [20, 11],
  [21, 208],
  [22, 0],
  [23, 63],
  [24, 63],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 209],
  [29, 69],
  [30, 72],
  [31, 73],
  [32, 73],
  [33, 208],
  [34, 64],
  [35, 65],
  [36, 64],
  [37, 64],
  [38, 69],
  [39, 71]
]);

export const light_error = n9;
const n10 = t([
  [0, 0],
  [1, 86],
  [2, 87],
  [3, 88],
  [4, 89],
  [5, 90],
  [6, 91],
  [7, 93],
  [8, 94],
  [9, 95],
  [10, 96],
  [11, 97],
  [12, 11],
  [13, 210],
  [14, 95],
  [15, 93],
  [16, 88],
  [17, 90],
  [18, 0],
  [19, 211],
  [20, 11],
  [21, 210],
  [22, 0],
  [23, 87],
  [24, 87],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 211],
  [29, 93],
  [30, 96],
  [31, 97],
  [32, 97],
  [33, 210],
  [34, 88],
  [35, 89],
  [36, 88],
  [37, 88],
  [38, 93],
  [39, 95]
]);

export const light_info = n10;
const n11 = t([
  [0, 9],
  [1, 100],
  [2, 101],
  [3, 102],
  [4, 103],
  [5, 104],
  [6, 105],
  [7, 106],
  [8, 107],
  [9, 108],
  [10, 109],
  [11, 110],
  [12, 111],
  [13, 111],
  [14, 108],
  [15, 106],
  [16, 102],
  [17, 104],
  [18, 9],
  [19, 112],
  [20, 110],
  [21, 111],
  [22, 9],
  [23, 101],
  [24, 101],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 112],
  [29, 106],
  [30, 109],
  [31, 110],
  [32, 110],
  [33, 111],
  [34, 106],
  [35, 108],
  [36, 110],
  [37, 110],
  [38, 106],
  [39, 108]
]);

export const dark_base = n11;
const n12 = t([
  [0, 9],
  [1, 113],
  [2, 114],
  [3, 115],
  [4, 116],
  [5, 117],
  [6, 118],
  [7, 120],
  [8, 121],
  [9, 122],
  [10, 123],
  [11, 124],
  [12, 110],
  [13, 212],
  [14, 122],
  [15, 120],
  [16, 115],
  [17, 117],
  [18, 9],
  [19, 213],
  [20, 110],
  [21, 212],
  [22, 9],
  [23, 114],
  [24, 114],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 213],
  [29, 120],
  [30, 123],
  [31, 124],
  [32, 124],
  [33, 212],
  [34, 120],
  [35, 122],
  [36, 110],
  [37, 110],
  [38, 120],
  [39, 122]
]);

export const dark_brand = n12;
export const dark_accent = n12;
const n13 = t([
  [0, 9],
  [1, 125],
  [2, 126],
  [3, 127],
  [4, 128],
  [5, 129],
  [6, 130],
  [7, 132],
  [8, 133],
  [9, 35],
  [10, 134],
  [11, 135],
  [12, 110],
  [13, 214],
  [14, 35],
  [15, 132],
  [16, 127],
  [17, 129],
  [18, 9],
  [19, 215],
  [20, 110],
  [21, 214],
  [22, 9],
  [23, 126],
  [24, 126],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 215],
  [29, 132],
  [30, 134],
  [31, 135],
  [32, 135],
  [33, 214],
  [34, 132],
  [35, 35],
  [36, 110],
  [37, 110],
  [38, 132],
  [39, 35]
]);

export const dark_alternate = n13;
const n14 = t([
  [0, 9],
  [1, 136],
  [2, 137],
  [3, 138],
  [4, 139],
  [5, 140],
  [6, 141],
  [7, 143],
  [8, 144],
  [9, 145],
  [10, 146],
  [11, 147],
  [12, 110],
  [13, 216],
  [14, 145],
  [15, 143],
  [16, 138],
  [17, 140],
  [18, 9],
  [19, 217],
  [20, 110],
  [21, 216],
  [22, 9],
  [23, 137],
  [24, 137],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 217],
  [29, 143],
  [30, 146],
  [31, 147],
  [32, 147],
  [33, 216],
  [34, 143],
  [35, 145],
  [36, 110],
  [37, 110],
  [38, 143],
  [39, 145]
]);

export const dark_help = n14;
const n15 = t([
  [0, 9],
  [1, 148],
  [2, 149],
  [3, 150],
  [4, 151],
  [5, 152],
  [6, 153],
  [7, 155],
  [8, 156],
  [9, 157],
  [10, 158],
  [11, 159],
  [12, 110],
  [13, 218],
  [14, 157],
  [15, 155],
  [16, 150],
  [17, 152],
  [18, 9],
  [19, 219],
  [20, 110],
  [21, 218],
  [22, 9],
  [23, 149],
  [24, 149],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 219],
  [29, 155],
  [30, 158],
  [31, 159],
  [32, 159],
  [33, 218],
  [34, 155],
  [35, 157],
  [36, 110],
  [37, 110],
  [38, 155],
  [39, 157]
]);

export const dark_success = n15;
const n16 = t([
  [0, 9],
  [1, 172],
  [2, 173],
  [3, 174],
  [4, 175],
  [5, 176],
  [6, 177],
  [7, 179],
  [8, 180],
  [9, 181],
  [10, 182],
  [11, 183],
  [12, 110],
  [13, 220],
  [14, 181],
  [15, 179],
  [16, 174],
  [17, 176],
  [18, 9],
  [19, 221],
  [20, 110],
  [21, 220],
  [22, 9],
  [23, 173],
  [24, 173],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 221],
  [29, 179],
  [30, 182],
  [31, 183],
  [32, 183],
  [33, 220],
  [34, 179],
  [35, 181],
  [36, 110],
  [37, 110],
  [38, 179],
  [39, 181]
]);

export const dark_warning = n16;
const n17 = t([
  [0, 9],
  [1, 160],
  [2, 161],
  [3, 162],
  [4, 163],
  [5, 164],
  [6, 165],
  [7, 167],
  [8, 168],
  [9, 169],
  [10, 170],
  [11, 171],
  [12, 110],
  [13, 222],
  [14, 169],
  [15, 167],
  [16, 162],
  [17, 164],
  [18, 9],
  [19, 223],
  [20, 110],
  [21, 222],
  [22, 9],
  [23, 161],
  [24, 161],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 223],
  [29, 167],
  [30, 170],
  [31, 171],
  [32, 171],
  [33, 222],
  [34, 167],
  [35, 169],
  [36, 110],
  [37, 110],
  [38, 167],
  [39, 169]
]);

export const dark_error = n17;
const n18 = t([
  [0, 9],
  [1, 184],
  [2, 185],
  [3, 186],
  [4, 187],
  [5, 188],
  [6, 189],
  [7, 191],
  [8, 192],
  [9, 193],
  [10, 194],
  [11, 195],
  [12, 110],
  [13, 224],
  [14, 193],
  [15, 191],
  [16, 186],
  [17, 188],
  [18, 9],
  [19, 225],
  [20, 110],
  [21, 224],
  [22, 9],
  [23, 185],
  [24, 185],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 225],
  [29, 191],
  [30, 194],
  [31, 195],
  [32, 195],
  [33, 224],
  [34, 191],
  [35, 193],
  [36, 110],
  [37, 110],
  [38, 191],
  [39, 193]
]);

export const dark_info = n18;
const n19 = t([[22, 226]]);

export const light_SheetOverlay = n19;
export const light_DialogOverlay = n19;
export const light_ModalOverlay = n19;
export const light_base_SheetOverlay = n19;
export const light_base_DialogOverlay = n19;
export const light_base_ModalOverlay = n19;
export const light_brand_SheetOverlay = n19;
export const light_brand_DialogOverlay = n19;
export const light_brand_ModalOverlay = n19;
export const light_alternate_SheetOverlay = n19;
export const light_alternate_DialogOverlay = n19;
export const light_alternate_ModalOverlay = n19;
export const light_accent_SheetOverlay = n19;
export const light_accent_DialogOverlay = n19;
export const light_accent_ModalOverlay = n19;
export const light_help_SheetOverlay = n19;
export const light_help_DialogOverlay = n19;
export const light_help_ModalOverlay = n19;
export const light_success_SheetOverlay = n19;
export const light_success_DialogOverlay = n19;
export const light_success_ModalOverlay = n19;
export const light_warning_SheetOverlay = n19;
export const light_warning_DialogOverlay = n19;
export const light_warning_ModalOverlay = n19;
export const light_error_SheetOverlay = n19;
export const light_error_DialogOverlay = n19;
export const light_error_ModalOverlay = n19;
export const light_info_SheetOverlay = n19;
export const light_info_DialogOverlay = n19;
export const light_info_ModalOverlay = n19;
const n20 = t([[22, 227]]);

export const dark_SheetOverlay = n20;
export const dark_DialogOverlay = n20;
export const dark_ModalOverlay = n20;
export const dark_base_SheetOverlay = n20;
export const dark_base_DialogOverlay = n20;
export const dark_base_ModalOverlay = n20;
export const dark_brand_SheetOverlay = n20;
export const dark_brand_DialogOverlay = n20;
export const dark_brand_ModalOverlay = n20;
export const dark_alternate_SheetOverlay = n20;
export const dark_alternate_DialogOverlay = n20;
export const dark_alternate_ModalOverlay = n20;
export const dark_accent_SheetOverlay = n20;
export const dark_accent_DialogOverlay = n20;
export const dark_accent_ModalOverlay = n20;
export const dark_help_SheetOverlay = n20;
export const dark_help_DialogOverlay = n20;
export const dark_help_ModalOverlay = n20;
export const dark_success_SheetOverlay = n20;
export const dark_success_DialogOverlay = n20;
export const dark_success_ModalOverlay = n20;
export const dark_warning_SheetOverlay = n20;
export const dark_warning_DialogOverlay = n20;
export const dark_warning_ModalOverlay = n20;
export const dark_error_SheetOverlay = n20;
export const dark_error_DialogOverlay = n20;
export const dark_error_ModalOverlay = n20;
export const dark_info_SheetOverlay = n20;
export const dark_info_DialogOverlay = n20;
export const dark_info_ModalOverlay = n20;
const n21 = t([
  [14, 8],
  [15, 6],
  [16, 2],
  [17, 4],
  [18, 13],
  [19, 13],
  [20, 12],
  [21, 12],
  [22, 13],
  [23, 1],
  [24, 1],
  [25, 13],
  [26, 13],
  [27, 13],
  [28, 13],
  [29, 6],
  [30, 9],
  [31, 10],
  [32, 10],
  [33, 12],
  [34, 6],
  [35, 8],
  [36, 12],
  [37, 12],
  [38, 6],
  [39, 8]
]);

export const light_ListItem = n21;
const n22 = t([
  [14, 9],
  [15, 7],
  [16, 3],
  [17, 5],
  [18, 0],
  [19, 13],
  [20, 11],
  [21, 12],
  [22, 0],
  [23, 2],
  [24, 2],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 13],
  [29, 7],
  [30, 10],
  [31, 11],
  [32, 11],
  [33, 12],
  [34, 7],
  [35, 9],
  [36, 11],
  [37, 11],
  [38, 7],
  [39, 9]
]);

export const light_BodyText = n22;
export const light_Card = n22;
export const light_CardEyebrow = n22;
export const light_CardTitle = n22;
export const light_Alert = n22;
export const light_AlertHeading = n22;
export const light_Message = n22;
export const light_MessageHeading = n22;
export const light_Input = n22;
export const light_Select = n22;
export const light_RadioGroup = n22;
export const light_DatePicker = n22;
export const light_FilePicker = n22;
export const light_Label = n22;
export const light_Badge = n22;
export const light_TextArea = n22;
export const light_Table = n22;
export const light_TableHeader = n22;
const n23 = t([
  [14, 9],
  [15, 7],
  [16, 3],
  [17, 5],
  [18, 0],
  [19, 13],
  [20, 11],
  [21, 12],
  [22, 7],
  [23, 2],
  [24, 11],
  [25, 7],
  [26, 7],
  [27, 0],
  [28, 13],
  [29, 0],
  [30, 0],
  [31, 0],
  [32, 0],
  [33, 12],
  [34, 7],
  [35, 9],
  [36, 11],
  [37, 11],
  [38, 7],
  [39, 9]
]);

export const light_Button = n23;
const n24 = t([
  [14, 9],
  [15, 7],
  [16, 3],
  [17, 5],
  [18, 0],
  [19, 13],
  [20, 11],
  [21, 12],
  [22, 0],
  [23, 2],
  [24, 2],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 13],
  [29, 7],
  [30, 10],
  [31, 11],
  [32, 11],
  [33, 12],
  [34, 9],
  [35, 11],
  [36, 9],
  [37, 9],
  [38, 7],
  [39, 9]
]);

export const light_Checkbox = n24;
const n25 = t([
  [14, 11],
  [15, 9],
  [16, 5],
  [17, 7],
  [18, 2],
  [19, 1],
  [20, 9],
  [21, 10],
  [22, 2],
  [23, 4],
  [24, 4],
  [25, 2],
  [26, 2],
  [27, 2],
  [28, 1],
  [29, 9],
  [30, 12],
  [31, 12],
  [32, 12],
  [33, 10],
  [34, 9],
  [35, 11],
  [36, 9],
  [37, 9],
  [38, 9],
  [39, 11]
]);

export const light_Switch = n25;
export const light_TooltipContent = n25;
export const light_SliderTrack = n25;
const n26 = t([
  [14, 4],
  [15, 6],
  [16, 10],
  [17, 8],
  [18, 12],
  [19, 12],
  [20, 13],
  [21, 13],
  [22, 12],
  [23, 11],
  [24, 11],
  [25, 12],
  [26, 12],
  [27, 12],
  [28, 12],
  [29, 6],
  [30, 3],
  [31, 2],
  [32, 2],
  [33, 13],
  [34, 6],
  [35, 4],
  [36, 13],
  [37, 13],
  [38, 6],
  [39, 4]
]);

export const light_SwitchThumb = n26;
const n27 = t([
  [14, 10],
  [15, 8],
  [16, 4],
  [17, 6],
  [18, 1],
  [19, 0],
  [20, 10],
  [21, 11],
  [22, 1],
  [23, 3],
  [24, 3],
  [25, 1],
  [26, 1],
  [27, 1],
  [28, 0],
  [29, 8],
  [30, 11],
  [31, 12],
  [32, 12],
  [33, 11],
  [34, 8],
  [35, 10],
  [36, 10],
  [37, 10],
  [38, 8],
  [39, 10]
]);

export const light_DrawerFrame = n27;
export const light_Progress = n27;
export const light_TooltipArrow = n27;
const n28 = t([
  [14, 9],
  [15, 7],
  [16, 3],
  [17, 5],
  [18, 0],
  [19, 13],
  [20, 11],
  [21, 12],
  [22, 0],
  [23, 2],
  [24, 2],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 13],
  [29, 7],
  [30, 10],
  [31, 11],
  [32, 11],
  [33, 12],
  [34, 8],
  [35, 10],
  [36, 10],
  [37, 10],
  [38, 7],
  [39, 9]
]);

export const light_RadioGroupItem = n28;
const n29 = t([
  [14, 0],
  [15, 2],
  [16, 6],
  [17, 4],
  [18, 9],
  [19, 10],
  [20, 2],
  [21, 1],
  [22, 9],
  [23, 7],
  [24, 7],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 10],
  [29, 2],
  [30, 13],
  [31, 13],
  [32, 13],
  [33, 1],
  [34, 2],
  [35, 0],
  [36, 2],
  [37, 2],
  [38, 2],
  [39, 0]
]);

export const light_SliderTrackActive = n29;
const n30 = t([
  [14, 2],
  [15, 4],
  [16, 8],
  [17, 6],
  [18, 11],
  [19, 12],
  [20, 0],
  [21, 13],
  [22, 11],
  [23, 9],
  [24, 9],
  [25, 11],
  [26, 11],
  [27, 11],
  [28, 12],
  [29, 4],
  [30, 1],
  [31, 0],
  [32, 0],
  [33, 13],
  [34, 4],
  [35, 2],
  [36, 0],
  [37, 0],
  [38, 4],
  [39, 2]
]);

export const light_SliderThumb = n30;
export const light_Tooltip = n30;
export const light_ProgressIndicator = n30;
const n31 = t([
  [14, 9],
  [15, 7],
  [16, 3],
  [17, 5],
  [18, 0],
  [19, 13],
  [20, 11],
  [21, 12],
  [22, 0],
  [23, 2],
  [24, 2],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 13],
  [29, 11],
  [30, 8],
  [31, 7],
  [32, 7],
  [33, 12],
  [34, 7],
  [35, 9],
  [36, 11],
  [37, 11],
  [38, 7],
  [39, 9]
]);

export const light_Breadcrumb = n31;
const n32 = t([
  [14, 9],
  [15, 7],
  [16, 3],
  [17, 5],
  [18, 0],
  [19, 13],
  [20, 11],
  [21, 12],
  [22, 0],
  [23, 2],
  [24, 2],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 13],
  [29, 9],
  [30, 7],
  [31, 11],
  [32, 11],
  [33, 12],
  [34, 7],
  [35, 9],
  [36, 11],
  [37, 11],
  [38, 7],
  [39, 9]
]);

export const light_Link = n32;
const n33 = t([
  [14, 108],
  [15, 106],
  [16, 102],
  [17, 104],
  [18, 9],
  [19, 112],
  [20, 110],
  [21, 111],
  [22, 9],
  [23, 101],
  [24, 101],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 112],
  [29, 106],
  [30, 109],
  [31, 110],
  [32, 110],
  [33, 111],
  [34, 106],
  [35, 108],
  [36, 110],
  [37, 110],
  [38, 106],
  [39, 108]
]);

export const dark_ListItem = n33;
export const dark_BodyText = n33;
export const dark_Card = n33;
export const dark_CardEyebrow = n33;
export const dark_CardTitle = n33;
export const dark_Alert = n33;
export const dark_AlertHeading = n33;
export const dark_Message = n33;
export const dark_MessageHeading = n33;
export const dark_Input = n33;
export const dark_Select = n33;
export const dark_RadioGroup = n33;
export const dark_DatePicker = n33;
export const dark_FilePicker = n33;
export const dark_Label = n33;
export const dark_Badge = n33;
export const dark_TextArea = n33;
export const dark_Table = n33;
export const dark_TableHeader = n33;
export const dark_base_ListItem = n33;
export const dark_base_BodyText = n33;
export const dark_base_Card = n33;
export const dark_base_CardEyebrow = n33;
export const dark_base_CardTitle = n33;
export const dark_base_Alert = n33;
export const dark_base_AlertHeading = n33;
export const dark_base_Message = n33;
export const dark_base_MessageHeading = n33;
export const dark_base_Input = n33;
export const dark_base_Select = n33;
export const dark_base_RadioGroup = n33;
export const dark_base_DatePicker = n33;
export const dark_base_FilePicker = n33;
export const dark_base_Label = n33;
export const dark_base_Badge = n33;
export const dark_base_TextArea = n33;
export const dark_base_Table = n33;
export const dark_base_TableHeader = n33;
const n34 = t([
  [14, 108],
  [15, 106],
  [16, 102],
  [17, 104],
  [18, 9],
  [19, 112],
  [20, 110],
  [21, 111],
  [22, 106],
  [23, 101],
  [24, 110],
  [25, 106],
  [26, 106],
  [27, 9],
  [28, 112],
  [29, 9],
  [30, 9],
  [31, 9],
  [32, 9],
  [33, 111],
  [34, 106],
  [35, 108],
  [36, 110],
  [37, 110],
  [38, 106],
  [39, 108]
]);

export const dark_Button = n34;
export const dark_base_Button = n34;
const n35 = t([
  [14, 108],
  [15, 106],
  [16, 102],
  [17, 104],
  [18, 9],
  [19, 112],
  [20, 110],
  [21, 111],
  [22, 9],
  [23, 101],
  [24, 101],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 112],
  [29, 106],
  [30, 109],
  [31, 110],
  [32, 110],
  [33, 111],
  [34, 108],
  [35, 110],
  [36, 108],
  [37, 108],
  [38, 106],
  [39, 108]
]);

export const dark_Checkbox = n35;
export const dark_base_Checkbox = n35;
const n36 = t([
  [14, 110],
  [15, 108],
  [16, 104],
  [17, 106],
  [18, 101],
  [19, 100],
  [20, 108],
  [21, 109],
  [22, 101],
  [23, 103],
  [24, 103],
  [25, 101],
  [26, 101],
  [27, 101],
  [28, 100],
  [29, 108],
  [30, 111],
  [31, 111],
  [32, 111],
  [33, 109],
  [34, 108],
  [35, 110],
  [36, 108],
  [37, 108],
  [38, 108],
  [39, 110]
]);

export const dark_Switch = n36;
export const dark_TooltipContent = n36;
export const dark_SliderTrack = n36;
export const dark_base_Switch = n36;
export const dark_base_TooltipContent = n36;
export const dark_base_SliderTrack = n36;
const n37 = t([
  [14, 103],
  [15, 105],
  [16, 109],
  [17, 107],
  [18, 111],
  [19, 111],
  [20, 112],
  [21, 112],
  [22, 111],
  [23, 110],
  [24, 110],
  [25, 111],
  [26, 111],
  [27, 111],
  [28, 111],
  [29, 105],
  [30, 102],
  [31, 101],
  [32, 101],
  [33, 112],
  [34, 105],
  [35, 103],
  [36, 112],
  [37, 112],
  [38, 105],
  [39, 103]
]);

export const dark_SwitchThumb = n37;
export const dark_base_SwitchThumb = n37;
const n38 = t([
  [14, 109],
  [15, 107],
  [16, 103],
  [17, 105],
  [18, 100],
  [19, 9],
  [20, 109],
  [21, 110],
  [22, 100],
  [23, 102],
  [24, 102],
  [25, 100],
  [26, 100],
  [27, 100],
  [28, 9],
  [29, 107],
  [30, 110],
  [31, 111],
  [32, 111],
  [33, 110],
  [34, 107],
  [35, 109],
  [36, 109],
  [37, 109],
  [38, 107],
  [39, 109]
]);

export const dark_DrawerFrame = n38;
export const dark_Progress = n38;
export const dark_TooltipArrow = n38;
export const dark_base_DrawerFrame = n38;
export const dark_base_Progress = n38;
export const dark_base_TooltipArrow = n38;
const n39 = t([
  [14, 108],
  [15, 106],
  [16, 102],
  [17, 104],
  [18, 9],
  [19, 112],
  [20, 110],
  [21, 111],
  [22, 9],
  [23, 101],
  [24, 101],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 112],
  [29, 106],
  [30, 109],
  [31, 110],
  [32, 110],
  [33, 111],
  [34, 107],
  [35, 109],
  [36, 109],
  [37, 109],
  [38, 106],
  [39, 108]
]);

export const dark_RadioGroupItem = n39;
export const dark_base_RadioGroupItem = n39;
const n40 = t([
  [14, 9],
  [15, 101],
  [16, 105],
  [17, 103],
  [18, 108],
  [19, 109],
  [20, 101],
  [21, 100],
  [22, 108],
  [23, 106],
  [24, 106],
  [25, 108],
  [26, 108],
  [27, 108],
  [28, 109],
  [29, 101],
  [30, 112],
  [31, 112],
  [32, 112],
  [33, 100],
  [34, 101],
  [35, 9],
  [36, 101],
  [37, 101],
  [38, 101],
  [39, 9]
]);

export const dark_SliderTrackActive = n40;
export const dark_base_SliderTrackActive = n40;
const n41 = t([
  [14, 101],
  [15, 103],
  [16, 107],
  [17, 105],
  [18, 110],
  [19, 111],
  [20, 9],
  [21, 112],
  [22, 110],
  [23, 108],
  [24, 108],
  [25, 110],
  [26, 110],
  [27, 110],
  [28, 111],
  [29, 103],
  [30, 100],
  [31, 9],
  [32, 9],
  [33, 112],
  [34, 103],
  [35, 101],
  [36, 9],
  [37, 9],
  [38, 103],
  [39, 101]
]);

export const dark_SliderThumb = n41;
export const dark_Tooltip = n41;
export const dark_ProgressIndicator = n41;
export const dark_base_SliderThumb = n41;
export const dark_base_Tooltip = n41;
export const dark_base_ProgressIndicator = n41;
const n42 = t([
  [14, 108],
  [15, 106],
  [16, 102],
  [17, 104],
  [18, 9],
  [19, 112],
  [20, 110],
  [21, 111],
  [22, 9],
  [23, 101],
  [24, 101],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 112],
  [29, 110],
  [30, 107],
  [31, 106],
  [32, 106],
  [33, 111],
  [34, 106],
  [35, 108],
  [36, 110],
  [37, 110],
  [38, 106],
  [39, 108]
]);

export const dark_Breadcrumb = n42;
export const dark_base_Breadcrumb = n42;
const n43 = t([
  [14, 108],
  [15, 106],
  [16, 102],
  [17, 104],
  [18, 9],
  [19, 112],
  [20, 110],
  [21, 111],
  [22, 9],
  [23, 101],
  [24, 101],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 112],
  [29, 108],
  [30, 106],
  [31, 110],
  [32, 110],
  [33, 111],
  [34, 106],
  [35, 108],
  [36, 110],
  [37, 110],
  [38, 106],
  [39, 108]
]);

export const dark_Link = n43;
export const dark_base_Link = n43;
const n44 = t([
  [14, 8],
  [15, 6],
  [16, 2],
  [17, 4],
  [18, 13],
  [19, 13],
  [20, 12],
  [21, 12],
  [22, 13],
  [23, 1],
  [24, 1],
  [25, 13],
  [26, 13],
  [27, 13],
  [28, 13],
  [29, 6],
  [30, 9],
  [31, 10],
  [32, 10],
  [33, 12],
  [34, 2],
  [35, 3],
  [36, 2],
  [37, 2],
  [38, 6],
  [39, 8]
]);

export const light_base_ListItem = n44;
const n45 = t([
  [14, 9],
  [15, 7],
  [16, 3],
  [17, 5],
  [18, 0],
  [19, 13],
  [20, 11],
  [21, 12],
  [22, 0],
  [23, 2],
  [24, 2],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 13],
  [29, 7],
  [30, 10],
  [31, 11],
  [32, 11],
  [33, 12],
  [34, 3],
  [35, 4],
  [36, 3],
  [37, 3],
  [38, 7],
  [39, 9]
]);

export const light_base_BodyText = n45;
export const light_base_Card = n45;
export const light_base_CardEyebrow = n45;
export const light_base_CardTitle = n45;
export const light_base_Alert = n45;
export const light_base_AlertHeading = n45;
export const light_base_Message = n45;
export const light_base_MessageHeading = n45;
export const light_base_Input = n45;
export const light_base_Select = n45;
export const light_base_RadioGroup = n45;
export const light_base_DatePicker = n45;
export const light_base_FilePicker = n45;
export const light_base_Label = n45;
export const light_base_Badge = n45;
export const light_base_TextArea = n45;
export const light_base_Table = n45;
export const light_base_TableHeader = n45;
const n46 = t([
  [14, 9],
  [15, 7],
  [16, 3],
  [17, 5],
  [18, 0],
  [19, 13],
  [20, 11],
  [21, 12],
  [22, 7],
  [23, 2],
  [24, 11],
  [25, 7],
  [26, 7],
  [27, 0],
  [28, 13],
  [29, 0],
  [30, 0],
  [31, 0],
  [32, 0],
  [33, 12],
  [34, 3],
  [35, 4],
  [36, 3],
  [37, 3],
  [38, 7],
  [39, 9]
]);

export const light_base_Button = n46;
const n47 = t([
  [14, 9],
  [15, 7],
  [16, 3],
  [17, 5],
  [18, 0],
  [19, 13],
  [20, 11],
  [21, 12],
  [22, 0],
  [23, 2],
  [24, 2],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 13],
  [29, 7],
  [30, 10],
  [31, 11],
  [32, 11],
  [33, 12],
  [34, 5],
  [35, 6],
  [36, 5],
  [37, 5],
  [38, 7],
  [39, 9]
]);

export const light_base_Checkbox = n47;
const n48 = t([
  [14, 11],
  [15, 9],
  [16, 5],
  [17, 7],
  [18, 2],
  [19, 1],
  [20, 9],
  [21, 10],
  [22, 2],
  [23, 4],
  [24, 4],
  [25, 2],
  [26, 2],
  [27, 2],
  [28, 1],
  [29, 9],
  [30, 12],
  [31, 12],
  [32, 12],
  [33, 10],
  [34, 5],
  [35, 6],
  [36, 5],
  [37, 5],
  [38, 9],
  [39, 11]
]);

export const light_base_Switch = n48;
export const light_base_TooltipContent = n48;
export const light_base_SliderTrack = n48;
const n49 = t([
  [14, 4],
  [15, 6],
  [16, 10],
  [17, 8],
  [18, 12],
  [19, 12],
  [20, 13],
  [21, 13],
  [22, 12],
  [23, 11],
  [24, 11],
  [25, 12],
  [26, 12],
  [27, 12],
  [28, 12],
  [29, 6],
  [30, 3],
  [31, 2],
  [32, 2],
  [33, 13],
  [34, 10],
  [35, 9],
  [36, 10],
  [37, 10],
  [38, 6],
  [39, 4]
]);

export const light_base_SwitchThumb = n49;
const n50 = t([
  [14, 10],
  [15, 8],
  [16, 4],
  [17, 6],
  [18, 1],
  [19, 0],
  [20, 10],
  [21, 11],
  [22, 1],
  [23, 3],
  [24, 3],
  [25, 1],
  [26, 1],
  [27, 1],
  [28, 0],
  [29, 8],
  [30, 11],
  [31, 12],
  [32, 12],
  [33, 11],
  [34, 4],
  [35, 5],
  [36, 4],
  [37, 4],
  [38, 8],
  [39, 10]
]);

export const light_base_DrawerFrame = n50;
export const light_base_Progress = n50;
export const light_base_TooltipArrow = n50;
const n51 = t([
  [14, 9],
  [15, 7],
  [16, 3],
  [17, 5],
  [18, 0],
  [19, 13],
  [20, 11],
  [21, 12],
  [22, 0],
  [23, 2],
  [24, 2],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 13],
  [29, 7],
  [30, 10],
  [31, 11],
  [32, 11],
  [33, 12],
  [34, 4],
  [35, 5],
  [36, 4],
  [37, 4],
  [38, 7],
  [39, 9]
]);

export const light_base_RadioGroupItem = n51;
const n52 = t([
  [14, 0],
  [15, 2],
  [16, 6],
  [17, 4],
  [18, 9],
  [19, 10],
  [20, 2],
  [21, 1],
  [22, 9],
  [23, 7],
  [24, 7],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 10],
  [29, 2],
  [30, 13],
  [31, 13],
  [32, 13],
  [33, 1],
  [34, 6],
  [35, 5],
  [36, 6],
  [37, 6],
  [38, 2],
  [39, 0]
]);

export const light_base_SliderTrackActive = n52;
const n53 = t([
  [14, 2],
  [15, 4],
  [16, 8],
  [17, 6],
  [18, 11],
  [19, 12],
  [20, 0],
  [21, 13],
  [22, 11],
  [23, 9],
  [24, 9],
  [25, 11],
  [26, 11],
  [27, 11],
  [28, 12],
  [29, 4],
  [30, 1],
  [31, 0],
  [32, 0],
  [33, 13],
  [34, 8],
  [35, 7],
  [36, 8],
  [37, 8],
  [38, 4],
  [39, 2]
]);

export const light_base_SliderThumb = n53;
export const light_base_Tooltip = n53;
export const light_base_ProgressIndicator = n53;
const n54 = t([
  [14, 9],
  [15, 7],
  [16, 3],
  [17, 5],
  [18, 0],
  [19, 13],
  [20, 11],
  [21, 12],
  [22, 0],
  [23, 2],
  [24, 2],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 13],
  [29, 11],
  [30, 8],
  [31, 7],
  [32, 7],
  [33, 12],
  [34, 3],
  [35, 4],
  [36, 3],
  [37, 3],
  [38, 7],
  [39, 9]
]);

export const light_base_Breadcrumb = n54;
const n55 = t([
  [14, 9],
  [15, 7],
  [16, 3],
  [17, 5],
  [18, 0],
  [19, 13],
  [20, 11],
  [21, 12],
  [22, 0],
  [23, 2],
  [24, 2],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 13],
  [29, 9],
  [30, 7],
  [31, 11],
  [32, 11],
  [33, 12],
  [34, 3],
  [35, 4],
  [36, 3],
  [37, 3],
  [38, 7],
  [39, 9]
]);

export const light_base_Link = n55;
const n56 = t([
  [14, 22],
  [15, 19],
  [16, 15],
  [17, 17],
  [18, 199],
  [19, 199],
  [20, 198],
  [21, 198],
  [22, 199],
  [23, 14],
  [24, 14],
  [25, 199],
  [26, 199],
  [27, 199],
  [28, 199],
  [29, 19],
  [30, 23],
  [31, 24],
  [32, 24],
  [33, 198],
  [34, 15],
  [35, 16],
  [36, 15],
  [37, 15],
  [38, 19],
  [39, 22]
]);

export const light_brand_ListItem = n56;
export const light_accent_ListItem = n56;
const n57 = t([
  [14, 23],
  [15, 21],
  [16, 16],
  [17, 18],
  [18, 0],
  [19, 199],
  [20, 11],
  [21, 198],
  [22, 0],
  [23, 15],
  [24, 15],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 199],
  [29, 21],
  [30, 24],
  [31, 25],
  [32, 25],
  [33, 198],
  [34, 16],
  [35, 17],
  [36, 16],
  [37, 16],
  [38, 21],
  [39, 23]
]);

export const light_brand_BodyText = n57;
export const light_brand_Card = n57;
export const light_brand_CardEyebrow = n57;
export const light_brand_CardTitle = n57;
export const light_brand_Alert = n57;
export const light_brand_AlertHeading = n57;
export const light_brand_Message = n57;
export const light_brand_MessageHeading = n57;
export const light_brand_Input = n57;
export const light_brand_Select = n57;
export const light_brand_RadioGroup = n57;
export const light_brand_DatePicker = n57;
export const light_brand_FilePicker = n57;
export const light_brand_Label = n57;
export const light_brand_Badge = n57;
export const light_brand_TextArea = n57;
export const light_brand_Table = n57;
export const light_brand_TableHeader = n57;
export const light_accent_BodyText = n57;
export const light_accent_Card = n57;
export const light_accent_CardEyebrow = n57;
export const light_accent_CardTitle = n57;
export const light_accent_Alert = n57;
export const light_accent_AlertHeading = n57;
export const light_accent_Message = n57;
export const light_accent_MessageHeading = n57;
export const light_accent_Input = n57;
export const light_accent_Select = n57;
export const light_accent_RadioGroup = n57;
export const light_accent_DatePicker = n57;
export const light_accent_FilePicker = n57;
export const light_accent_Label = n57;
export const light_accent_Badge = n57;
export const light_accent_TextArea = n57;
export const light_accent_Table = n57;
export const light_accent_TableHeader = n57;
const n58 = t([
  [14, 23],
  [15, 21],
  [16, 16],
  [17, 18],
  [18, 0],
  [19, 199],
  [20, 11],
  [21, 198],
  [22, 21],
  [23, 15],
  [24, 11],
  [25, 21],
  [26, 21],
  [27, 0],
  [28, 199],
  [29, 0],
  [30, 0],
  [31, 0],
  [32, 0],
  [33, 198],
  [34, 16],
  [35, 17],
  [36, 16],
  [37, 16],
  [38, 21],
  [39, 23]
]);

export const light_brand_Button = n58;
export const light_accent_Button = n58;
const n59 = t([
  [14, 23],
  [15, 21],
  [16, 16],
  [17, 18],
  [18, 0],
  [19, 199],
  [20, 11],
  [21, 198],
  [22, 0],
  [23, 15],
  [24, 15],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 199],
  [29, 21],
  [30, 24],
  [31, 25],
  [32, 25],
  [33, 198],
  [34, 18],
  [35, 19],
  [36, 18],
  [37, 18],
  [38, 21],
  [39, 23]
]);

export const light_brand_Checkbox = n59;
export const light_accent_Checkbox = n59;
const n60 = t([
  [14, 25],
  [15, 23],
  [16, 18],
  [17, 21],
  [18, 15],
  [19, 14],
  [20, 24],
  [21, 25],
  [22, 15],
  [23, 17],
  [24, 17],
  [25, 15],
  [26, 15],
  [27, 15],
  [28, 14],
  [29, 23],
  [30, 11],
  [31, 198],
  [32, 198],
  [33, 25],
  [34, 18],
  [35, 19],
  [36, 18],
  [37, 18],
  [38, 23],
  [39, 25]
]);

export const light_brand_Switch = n60;
export const light_brand_TooltipContent = n60;
export const light_brand_SliderTrack = n60;
export const light_accent_Switch = n60;
export const light_accent_TooltipContent = n60;
export const light_accent_SliderTrack = n60;
const n61 = t([
  [14, 18],
  [15, 21],
  [16, 25],
  [17, 23],
  [18, 198],
  [19, 198],
  [20, 199],
  [21, 199],
  [22, 198],
  [23, 11],
  [24, 11],
  [25, 198],
  [26, 198],
  [27, 198],
  [28, 198],
  [29, 21],
  [30, 17],
  [31, 16],
  [32, 16],
  [33, 199],
  [34, 25],
  [35, 24],
  [36, 25],
  [37, 25],
  [38, 21],
  [39, 18]
]);

export const light_brand_SwitchThumb = n61;
export const light_accent_SwitchThumb = n61;
const n62 = t([
  [14, 24],
  [15, 22],
  [16, 17],
  [17, 19],
  [18, 14],
  [19, 0],
  [20, 25],
  [21, 11],
  [22, 14],
  [23, 16],
  [24, 16],
  [25, 14],
  [26, 14],
  [27, 14],
  [28, 0],
  [29, 22],
  [30, 25],
  [31, 11],
  [32, 11],
  [33, 11],
  [34, 17],
  [35, 18],
  [36, 17],
  [37, 17],
  [38, 22],
  [39, 24]
]);

export const light_brand_DrawerFrame = n62;
export const light_brand_Progress = n62;
export const light_brand_TooltipArrow = n62;
export const light_accent_DrawerFrame = n62;
export const light_accent_Progress = n62;
export const light_accent_TooltipArrow = n62;
const n63 = t([
  [14, 23],
  [15, 21],
  [16, 16],
  [17, 18],
  [18, 0],
  [19, 199],
  [20, 11],
  [21, 198],
  [22, 0],
  [23, 15],
  [24, 15],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 199],
  [29, 21],
  [30, 24],
  [31, 25],
  [32, 25],
  [33, 198],
  [34, 17],
  [35, 18],
  [36, 17],
  [37, 17],
  [38, 21],
  [39, 23]
]);

export const light_brand_RadioGroupItem = n63;
export const light_accent_RadioGroupItem = n63;
const n64 = t([
  [14, 14],
  [15, 16],
  [16, 21],
  [17, 18],
  [18, 24],
  [19, 25],
  [20, 15],
  [21, 14],
  [22, 24],
  [23, 22],
  [24, 22],
  [25, 24],
  [26, 24],
  [27, 24],
  [28, 25],
  [29, 16],
  [30, 0],
  [31, 199],
  [32, 199],
  [33, 14],
  [34, 21],
  [35, 19],
  [36, 21],
  [37, 21],
  [38, 16],
  [39, 14]
]);

export const light_brand_SliderTrackActive = n64;
export const light_accent_SliderTrackActive = n64;
const n65 = t([
  [14, 16],
  [15, 18],
  [16, 23],
  [17, 21],
  [18, 11],
  [19, 198],
  [20, 0],
  [21, 199],
  [22, 11],
  [23, 24],
  [24, 24],
  [25, 11],
  [26, 11],
  [27, 11],
  [28, 198],
  [29, 18],
  [30, 15],
  [31, 14],
  [32, 14],
  [33, 199],
  [34, 23],
  [35, 22],
  [36, 23],
  [37, 23],
  [38, 18],
  [39, 16]
]);

export const light_brand_SliderThumb = n65;
export const light_brand_Tooltip = n65;
export const light_brand_ProgressIndicator = n65;
export const light_accent_SliderThumb = n65;
export const light_accent_Tooltip = n65;
export const light_accent_ProgressIndicator = n65;
const n66 = t([
  [14, 23],
  [15, 21],
  [16, 16],
  [17, 18],
  [18, 0],
  [19, 199],
  [20, 11],
  [21, 198],
  [22, 0],
  [23, 15],
  [24, 15],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 199],
  [29, 11],
  [30, 22],
  [31, 21],
  [32, 21],
  [33, 198],
  [34, 16],
  [35, 17],
  [36, 16],
  [37, 16],
  [38, 21],
  [39, 23]
]);

export const light_brand_Breadcrumb = n66;
export const light_accent_Breadcrumb = n66;
const n67 = t([
  [14, 23],
  [15, 21],
  [16, 16],
  [17, 18],
  [18, 0],
  [19, 199],
  [20, 11],
  [21, 198],
  [22, 0],
  [23, 15],
  [24, 15],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 199],
  [29, 23],
  [30, 21],
  [31, 25],
  [32, 25],
  [33, 198],
  [34, 16],
  [35, 17],
  [36, 16],
  [37, 16],
  [38, 21],
  [39, 23]
]);

export const light_brand_Link = n67;
export const light_accent_Link = n67;
const n68 = t([
  [14, 34],
  [15, 31],
  [16, 27],
  [17, 29],
  [18, 201],
  [19, 201],
  [20, 200],
  [21, 200],
  [22, 201],
  [23, 26],
  [24, 26],
  [25, 201],
  [26, 201],
  [27, 201],
  [28, 201],
  [29, 31],
  [30, 35],
  [31, 36],
  [32, 36],
  [33, 200],
  [34, 27],
  [35, 28],
  [36, 27],
  [37, 27],
  [38, 31],
  [39, 34]
]);

export const light_alternate_ListItem = n68;
const n69 = t([
  [14, 35],
  [15, 33],
  [16, 28],
  [17, 30],
  [18, 0],
  [19, 201],
  [20, 11],
  [21, 200],
  [22, 0],
  [23, 27],
  [24, 27],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 201],
  [29, 33],
  [30, 36],
  [31, 37],
  [32, 37],
  [33, 200],
  [34, 28],
  [35, 29],
  [36, 28],
  [37, 28],
  [38, 33],
  [39, 35]
]);

export const light_alternate_BodyText = n69;
export const light_alternate_Card = n69;
export const light_alternate_CardEyebrow = n69;
export const light_alternate_CardTitle = n69;
export const light_alternate_Alert = n69;
export const light_alternate_AlertHeading = n69;
export const light_alternate_Message = n69;
export const light_alternate_MessageHeading = n69;
export const light_alternate_Input = n69;
export const light_alternate_Select = n69;
export const light_alternate_RadioGroup = n69;
export const light_alternate_DatePicker = n69;
export const light_alternate_FilePicker = n69;
export const light_alternate_Label = n69;
export const light_alternate_Badge = n69;
export const light_alternate_TextArea = n69;
export const light_alternate_Table = n69;
export const light_alternate_TableHeader = n69;
const n70 = t([
  [14, 35],
  [15, 33],
  [16, 28],
  [17, 30],
  [18, 0],
  [19, 201],
  [20, 11],
  [21, 200],
  [22, 33],
  [23, 27],
  [24, 11],
  [25, 33],
  [26, 33],
  [27, 0],
  [28, 201],
  [29, 0],
  [30, 0],
  [31, 0],
  [32, 0],
  [33, 200],
  [34, 28],
  [35, 29],
  [36, 28],
  [37, 28],
  [38, 33],
  [39, 35]
]);

export const light_alternate_Button = n70;
const n71 = t([
  [14, 35],
  [15, 33],
  [16, 28],
  [17, 30],
  [18, 0],
  [19, 201],
  [20, 11],
  [21, 200],
  [22, 0],
  [23, 27],
  [24, 27],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 201],
  [29, 33],
  [30, 36],
  [31, 37],
  [32, 37],
  [33, 200],
  [34, 30],
  [35, 31],
  [36, 30],
  [37, 30],
  [38, 33],
  [39, 35]
]);

export const light_alternate_Checkbox = n71;
const n72 = t([
  [14, 37],
  [15, 35],
  [16, 30],
  [17, 33],
  [18, 27],
  [19, 26],
  [20, 36],
  [21, 37],
  [22, 27],
  [23, 29],
  [24, 29],
  [25, 27],
  [26, 27],
  [27, 27],
  [28, 26],
  [29, 35],
  [30, 11],
  [31, 200],
  [32, 200],
  [33, 37],
  [34, 30],
  [35, 31],
  [36, 30],
  [37, 30],
  [38, 35],
  [39, 37]
]);

export const light_alternate_Switch = n72;
export const light_alternate_TooltipContent = n72;
export const light_alternate_SliderTrack = n72;
const n73 = t([
  [14, 30],
  [15, 33],
  [16, 37],
  [17, 35],
  [18, 200],
  [19, 200],
  [20, 201],
  [21, 201],
  [22, 200],
  [23, 11],
  [24, 11],
  [25, 200],
  [26, 200],
  [27, 200],
  [28, 200],
  [29, 33],
  [30, 29],
  [31, 28],
  [32, 28],
  [33, 201],
  [34, 37],
  [35, 36],
  [36, 37],
  [37, 37],
  [38, 33],
  [39, 30]
]);

export const light_alternate_SwitchThumb = n73;
const n74 = t([
  [14, 36],
  [15, 34],
  [16, 29],
  [17, 31],
  [18, 26],
  [19, 0],
  [20, 37],
  [21, 11],
  [22, 26],
  [23, 28],
  [24, 28],
  [25, 26],
  [26, 26],
  [27, 26],
  [28, 0],
  [29, 34],
  [30, 37],
  [31, 11],
  [32, 11],
  [33, 11],
  [34, 29],
  [35, 30],
  [36, 29],
  [37, 29],
  [38, 34],
  [39, 36]
]);

export const light_alternate_DrawerFrame = n74;
export const light_alternate_Progress = n74;
export const light_alternate_TooltipArrow = n74;
const n75 = t([
  [14, 35],
  [15, 33],
  [16, 28],
  [17, 30],
  [18, 0],
  [19, 201],
  [20, 11],
  [21, 200],
  [22, 0],
  [23, 27],
  [24, 27],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 201],
  [29, 33],
  [30, 36],
  [31, 37],
  [32, 37],
  [33, 200],
  [34, 29],
  [35, 30],
  [36, 29],
  [37, 29],
  [38, 33],
  [39, 35]
]);

export const light_alternate_RadioGroupItem = n75;
const n76 = t([
  [14, 26],
  [15, 28],
  [16, 33],
  [17, 30],
  [18, 36],
  [19, 37],
  [20, 27],
  [21, 26],
  [22, 36],
  [23, 34],
  [24, 34],
  [25, 36],
  [26, 36],
  [27, 36],
  [28, 37],
  [29, 28],
  [30, 0],
  [31, 201],
  [32, 201],
  [33, 26],
  [34, 33],
  [35, 31],
  [36, 33],
  [37, 33],
  [38, 28],
  [39, 26]
]);

export const light_alternate_SliderTrackActive = n76;
const n77 = t([
  [14, 28],
  [15, 30],
  [16, 35],
  [17, 33],
  [18, 11],
  [19, 200],
  [20, 0],
  [21, 201],
  [22, 11],
  [23, 36],
  [24, 36],
  [25, 11],
  [26, 11],
  [27, 11],
  [28, 200],
  [29, 30],
  [30, 27],
  [31, 26],
  [32, 26],
  [33, 201],
  [34, 35],
  [35, 34],
  [36, 35],
  [37, 35],
  [38, 30],
  [39, 28]
]);

export const light_alternate_SliderThumb = n77;
export const light_alternate_Tooltip = n77;
export const light_alternate_ProgressIndicator = n77;
const n78 = t([
  [14, 35],
  [15, 33],
  [16, 28],
  [17, 30],
  [18, 0],
  [19, 201],
  [20, 11],
  [21, 200],
  [22, 0],
  [23, 27],
  [24, 27],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 201],
  [29, 11],
  [30, 34],
  [31, 33],
  [32, 33],
  [33, 200],
  [34, 28],
  [35, 29],
  [36, 28],
  [37, 28],
  [38, 33],
  [39, 35]
]);

export const light_alternate_Breadcrumb = n78;
const n79 = t([
  [14, 35],
  [15, 33],
  [16, 28],
  [17, 30],
  [18, 0],
  [19, 201],
  [20, 11],
  [21, 200],
  [22, 0],
  [23, 27],
  [24, 27],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 201],
  [29, 35],
  [30, 33],
  [31, 37],
  [32, 37],
  [33, 200],
  [34, 28],
  [35, 29],
  [36, 28],
  [37, 28],
  [38, 33],
  [39, 35]
]);

export const light_alternate_Link = n79;
const n80 = t([
  [14, 46],
  [15, 43],
  [16, 39],
  [17, 41],
  [18, 203],
  [19, 203],
  [20, 202],
  [21, 202],
  [22, 203],
  [23, 38],
  [24, 38],
  [25, 203],
  [26, 203],
  [27, 203],
  [28, 203],
  [29, 43],
  [30, 47],
  [31, 48],
  [32, 48],
  [33, 202],
  [34, 39],
  [35, 40],
  [36, 39],
  [37, 39],
  [38, 43],
  [39, 46]
]);

export const light_help_ListItem = n80;
const n81 = t([
  [14, 47],
  [15, 45],
  [16, 40],
  [17, 42],
  [18, 0],
  [19, 203],
  [20, 11],
  [21, 202],
  [22, 0],
  [23, 39],
  [24, 39],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 203],
  [29, 45],
  [30, 48],
  [31, 49],
  [32, 49],
  [33, 202],
  [34, 40],
  [35, 41],
  [36, 40],
  [37, 40],
  [38, 45],
  [39, 47]
]);

export const light_help_BodyText = n81;
export const light_help_Card = n81;
export const light_help_CardEyebrow = n81;
export const light_help_CardTitle = n81;
export const light_help_Alert = n81;
export const light_help_AlertHeading = n81;
export const light_help_Message = n81;
export const light_help_MessageHeading = n81;
export const light_help_Input = n81;
export const light_help_Select = n81;
export const light_help_RadioGroup = n81;
export const light_help_DatePicker = n81;
export const light_help_FilePicker = n81;
export const light_help_Label = n81;
export const light_help_Badge = n81;
export const light_help_TextArea = n81;
export const light_help_Table = n81;
export const light_help_TableHeader = n81;
const n82 = t([
  [14, 47],
  [15, 45],
  [16, 40],
  [17, 42],
  [18, 0],
  [19, 203],
  [20, 11],
  [21, 202],
  [22, 45],
  [23, 39],
  [24, 11],
  [25, 45],
  [26, 45],
  [27, 0],
  [28, 203],
  [29, 0],
  [30, 0],
  [31, 0],
  [32, 0],
  [33, 202],
  [34, 40],
  [35, 41],
  [36, 40],
  [37, 40],
  [38, 45],
  [39, 47]
]);

export const light_help_Button = n82;
const n83 = t([
  [14, 47],
  [15, 45],
  [16, 40],
  [17, 42],
  [18, 0],
  [19, 203],
  [20, 11],
  [21, 202],
  [22, 0],
  [23, 39],
  [24, 39],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 203],
  [29, 45],
  [30, 48],
  [31, 49],
  [32, 49],
  [33, 202],
  [34, 42],
  [35, 43],
  [36, 42],
  [37, 42],
  [38, 45],
  [39, 47]
]);

export const light_help_Checkbox = n83;
const n84 = t([
  [14, 49],
  [15, 47],
  [16, 42],
  [17, 45],
  [18, 39],
  [19, 38],
  [20, 48],
  [21, 49],
  [22, 39],
  [23, 41],
  [24, 41],
  [25, 39],
  [26, 39],
  [27, 39],
  [28, 38],
  [29, 47],
  [30, 11],
  [31, 202],
  [32, 202],
  [33, 49],
  [34, 42],
  [35, 43],
  [36, 42],
  [37, 42],
  [38, 47],
  [39, 49]
]);

export const light_help_Switch = n84;
export const light_help_TooltipContent = n84;
export const light_help_SliderTrack = n84;
const n85 = t([
  [14, 42],
  [15, 45],
  [16, 49],
  [17, 47],
  [18, 202],
  [19, 202],
  [20, 203],
  [21, 203],
  [22, 202],
  [23, 11],
  [24, 11],
  [25, 202],
  [26, 202],
  [27, 202],
  [28, 202],
  [29, 45],
  [30, 41],
  [31, 40],
  [32, 40],
  [33, 203],
  [34, 49],
  [35, 48],
  [36, 49],
  [37, 49],
  [38, 45],
  [39, 42]
]);

export const light_help_SwitchThumb = n85;
const n86 = t([
  [14, 48],
  [15, 46],
  [16, 41],
  [17, 43],
  [18, 38],
  [19, 0],
  [20, 49],
  [21, 11],
  [22, 38],
  [23, 40],
  [24, 40],
  [25, 38],
  [26, 38],
  [27, 38],
  [28, 0],
  [29, 46],
  [30, 49],
  [31, 11],
  [32, 11],
  [33, 11],
  [34, 41],
  [35, 42],
  [36, 41],
  [37, 41],
  [38, 46],
  [39, 48]
]);

export const light_help_DrawerFrame = n86;
export const light_help_Progress = n86;
export const light_help_TooltipArrow = n86;
const n87 = t([
  [14, 47],
  [15, 45],
  [16, 40],
  [17, 42],
  [18, 0],
  [19, 203],
  [20, 11],
  [21, 202],
  [22, 0],
  [23, 39],
  [24, 39],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 203],
  [29, 45],
  [30, 48],
  [31, 49],
  [32, 49],
  [33, 202],
  [34, 41],
  [35, 42],
  [36, 41],
  [37, 41],
  [38, 45],
  [39, 47]
]);

export const light_help_RadioGroupItem = n87;
const n88 = t([
  [14, 38],
  [15, 40],
  [16, 45],
  [17, 42],
  [18, 48],
  [19, 49],
  [20, 39],
  [21, 38],
  [22, 48],
  [23, 46],
  [24, 46],
  [25, 48],
  [26, 48],
  [27, 48],
  [28, 49],
  [29, 40],
  [30, 0],
  [31, 203],
  [32, 203],
  [33, 38],
  [34, 45],
  [35, 43],
  [36, 45],
  [37, 45],
  [38, 40],
  [39, 38]
]);

export const light_help_SliderTrackActive = n88;
const n89 = t([
  [14, 40],
  [15, 42],
  [16, 47],
  [17, 45],
  [18, 11],
  [19, 202],
  [20, 0],
  [21, 203],
  [22, 11],
  [23, 48],
  [24, 48],
  [25, 11],
  [26, 11],
  [27, 11],
  [28, 202],
  [29, 42],
  [30, 39],
  [31, 38],
  [32, 38],
  [33, 203],
  [34, 47],
  [35, 46],
  [36, 47],
  [37, 47],
  [38, 42],
  [39, 40]
]);

export const light_help_SliderThumb = n89;
export const light_help_Tooltip = n89;
export const light_help_ProgressIndicator = n89;
const n90 = t([
  [14, 47],
  [15, 45],
  [16, 40],
  [17, 42],
  [18, 0],
  [19, 203],
  [20, 11],
  [21, 202],
  [22, 0],
  [23, 39],
  [24, 39],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 203],
  [29, 11],
  [30, 46],
  [31, 45],
  [32, 45],
  [33, 202],
  [34, 40],
  [35, 41],
  [36, 40],
  [37, 40],
  [38, 45],
  [39, 47]
]);

export const light_help_Breadcrumb = n90;
const n91 = t([
  [14, 47],
  [15, 45],
  [16, 40],
  [17, 42],
  [18, 0],
  [19, 203],
  [20, 11],
  [21, 202],
  [22, 0],
  [23, 39],
  [24, 39],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 203],
  [29, 47],
  [30, 45],
  [31, 49],
  [32, 49],
  [33, 202],
  [34, 40],
  [35, 41],
  [36, 40],
  [37, 40],
  [38, 45],
  [39, 47]
]);

export const light_help_Link = n91;
const n92 = t([
  [14, 58],
  [15, 55],
  [16, 51],
  [17, 53],
  [18, 205],
  [19, 205],
  [20, 204],
  [21, 204],
  [22, 205],
  [23, 50],
  [24, 50],
  [25, 205],
  [26, 205],
  [27, 205],
  [28, 205],
  [29, 55],
  [30, 59],
  [31, 60],
  [32, 60],
  [33, 204],
  [34, 51],
  [35, 52],
  [36, 51],
  [37, 51],
  [38, 55],
  [39, 58]
]);

export const light_success_ListItem = n92;
const n93 = t([
  [14, 59],
  [15, 57],
  [16, 52],
  [17, 54],
  [18, 0],
  [19, 205],
  [20, 11],
  [21, 204],
  [22, 0],
  [23, 51],
  [24, 51],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 205],
  [29, 57],
  [30, 60],
  [31, 61],
  [32, 61],
  [33, 204],
  [34, 52],
  [35, 53],
  [36, 52],
  [37, 52],
  [38, 57],
  [39, 59]
]);

export const light_success_BodyText = n93;
export const light_success_Card = n93;
export const light_success_CardEyebrow = n93;
export const light_success_CardTitle = n93;
export const light_success_Alert = n93;
export const light_success_AlertHeading = n93;
export const light_success_Message = n93;
export const light_success_MessageHeading = n93;
export const light_success_Input = n93;
export const light_success_Select = n93;
export const light_success_RadioGroup = n93;
export const light_success_DatePicker = n93;
export const light_success_FilePicker = n93;
export const light_success_Label = n93;
export const light_success_Badge = n93;
export const light_success_TextArea = n93;
export const light_success_Table = n93;
export const light_success_TableHeader = n93;
const n94 = t([
  [14, 59],
  [15, 57],
  [16, 52],
  [17, 54],
  [18, 0],
  [19, 205],
  [20, 11],
  [21, 204],
  [22, 57],
  [23, 51],
  [24, 11],
  [25, 57],
  [26, 57],
  [27, 0],
  [28, 205],
  [29, 0],
  [30, 0],
  [31, 0],
  [32, 0],
  [33, 204],
  [34, 52],
  [35, 53],
  [36, 52],
  [37, 52],
  [38, 57],
  [39, 59]
]);

export const light_success_Button = n94;
const n95 = t([
  [14, 59],
  [15, 57],
  [16, 52],
  [17, 54],
  [18, 0],
  [19, 205],
  [20, 11],
  [21, 204],
  [22, 0],
  [23, 51],
  [24, 51],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 205],
  [29, 57],
  [30, 60],
  [31, 61],
  [32, 61],
  [33, 204],
  [34, 54],
  [35, 55],
  [36, 54],
  [37, 54],
  [38, 57],
  [39, 59]
]);

export const light_success_Checkbox = n95;
const n96 = t([
  [14, 61],
  [15, 59],
  [16, 54],
  [17, 57],
  [18, 51],
  [19, 50],
  [20, 60],
  [21, 61],
  [22, 51],
  [23, 53],
  [24, 53],
  [25, 51],
  [26, 51],
  [27, 51],
  [28, 50],
  [29, 59],
  [30, 11],
  [31, 204],
  [32, 204],
  [33, 61],
  [34, 54],
  [35, 55],
  [36, 54],
  [37, 54],
  [38, 59],
  [39, 61]
]);

export const light_success_Switch = n96;
export const light_success_TooltipContent = n96;
export const light_success_SliderTrack = n96;
const n97 = t([
  [14, 54],
  [15, 57],
  [16, 61],
  [17, 59],
  [18, 204],
  [19, 204],
  [20, 205],
  [21, 205],
  [22, 204],
  [23, 11],
  [24, 11],
  [25, 204],
  [26, 204],
  [27, 204],
  [28, 204],
  [29, 57],
  [30, 53],
  [31, 52],
  [32, 52],
  [33, 205],
  [34, 61],
  [35, 60],
  [36, 61],
  [37, 61],
  [38, 57],
  [39, 54]
]);

export const light_success_SwitchThumb = n97;
const n98 = t([
  [14, 60],
  [15, 58],
  [16, 53],
  [17, 55],
  [18, 50],
  [19, 0],
  [20, 61],
  [21, 11],
  [22, 50],
  [23, 52],
  [24, 52],
  [25, 50],
  [26, 50],
  [27, 50],
  [28, 0],
  [29, 58],
  [30, 61],
  [31, 11],
  [32, 11],
  [33, 11],
  [34, 53],
  [35, 54],
  [36, 53],
  [37, 53],
  [38, 58],
  [39, 60]
]);

export const light_success_DrawerFrame = n98;
export const light_success_Progress = n98;
export const light_success_TooltipArrow = n98;
const n99 = t([
  [14, 59],
  [15, 57],
  [16, 52],
  [17, 54],
  [18, 0],
  [19, 205],
  [20, 11],
  [21, 204],
  [22, 0],
  [23, 51],
  [24, 51],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 205],
  [29, 57],
  [30, 60],
  [31, 61],
  [32, 61],
  [33, 204],
  [34, 53],
  [35, 54],
  [36, 53],
  [37, 53],
  [38, 57],
  [39, 59]
]);

export const light_success_RadioGroupItem = n99;
const n100 = t([
  [14, 50],
  [15, 52],
  [16, 57],
  [17, 54],
  [18, 60],
  [19, 61],
  [20, 51],
  [21, 50],
  [22, 60],
  [23, 58],
  [24, 58],
  [25, 60],
  [26, 60],
  [27, 60],
  [28, 61],
  [29, 52],
  [30, 0],
  [31, 205],
  [32, 205],
  [33, 50],
  [34, 57],
  [35, 55],
  [36, 57],
  [37, 57],
  [38, 52],
  [39, 50]
]);

export const light_success_SliderTrackActive = n100;
const n101 = t([
  [14, 52],
  [15, 54],
  [16, 59],
  [17, 57],
  [18, 11],
  [19, 204],
  [20, 0],
  [21, 205],
  [22, 11],
  [23, 60],
  [24, 60],
  [25, 11],
  [26, 11],
  [27, 11],
  [28, 204],
  [29, 54],
  [30, 51],
  [31, 50],
  [32, 50],
  [33, 205],
  [34, 59],
  [35, 58],
  [36, 59],
  [37, 59],
  [38, 54],
  [39, 52]
]);

export const light_success_SliderThumb = n101;
export const light_success_Tooltip = n101;
export const light_success_ProgressIndicator = n101;
const n102 = t([
  [14, 59],
  [15, 57],
  [16, 52],
  [17, 54],
  [18, 0],
  [19, 205],
  [20, 11],
  [21, 204],
  [22, 0],
  [23, 51],
  [24, 51],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 205],
  [29, 11],
  [30, 58],
  [31, 57],
  [32, 57],
  [33, 204],
  [34, 52],
  [35, 53],
  [36, 52],
  [37, 52],
  [38, 57],
  [39, 59]
]);

export const light_success_Breadcrumb = n102;
const n103 = t([
  [14, 59],
  [15, 57],
  [16, 52],
  [17, 54],
  [18, 0],
  [19, 205],
  [20, 11],
  [21, 204],
  [22, 0],
  [23, 51],
  [24, 51],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 205],
  [29, 59],
  [30, 57],
  [31, 61],
  [32, 61],
  [33, 204],
  [34, 52],
  [35, 53],
  [36, 52],
  [37, 52],
  [38, 57],
  [39, 59]
]);

export const light_success_Link = n103;
const n104 = t([
  [14, 82],
  [15, 79],
  [16, 75],
  [17, 77],
  [18, 207],
  [19, 207],
  [20, 206],
  [21, 206],
  [22, 207],
  [23, 74],
  [24, 74],
  [25, 207],
  [26, 207],
  [27, 207],
  [28, 207],
  [29, 79],
  [30, 83],
  [31, 84],
  [32, 84],
  [33, 206],
  [34, 75],
  [35, 76],
  [36, 75],
  [37, 75],
  [38, 79],
  [39, 82]
]);

export const light_warning_ListItem = n104;
const n105 = t([
  [14, 83],
  [15, 81],
  [16, 76],
  [17, 78],
  [18, 0],
  [19, 207],
  [20, 11],
  [21, 206],
  [22, 0],
  [23, 75],
  [24, 75],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 207],
  [29, 81],
  [30, 84],
  [31, 85],
  [32, 85],
  [33, 206],
  [34, 76],
  [35, 77],
  [36, 76],
  [37, 76],
  [38, 81],
  [39, 83]
]);

export const light_warning_BodyText = n105;
export const light_warning_Card = n105;
export const light_warning_CardEyebrow = n105;
export const light_warning_CardTitle = n105;
export const light_warning_Alert = n105;
export const light_warning_AlertHeading = n105;
export const light_warning_Message = n105;
export const light_warning_MessageHeading = n105;
export const light_warning_Input = n105;
export const light_warning_Select = n105;
export const light_warning_RadioGroup = n105;
export const light_warning_DatePicker = n105;
export const light_warning_FilePicker = n105;
export const light_warning_Label = n105;
export const light_warning_Badge = n105;
export const light_warning_TextArea = n105;
export const light_warning_Table = n105;
export const light_warning_TableHeader = n105;
const n106 = t([
  [14, 83],
  [15, 81],
  [16, 76],
  [17, 78],
  [18, 0],
  [19, 207],
  [20, 11],
  [21, 206],
  [22, 81],
  [23, 75],
  [24, 11],
  [25, 81],
  [26, 81],
  [27, 0],
  [28, 207],
  [29, 0],
  [30, 0],
  [31, 0],
  [32, 0],
  [33, 206],
  [34, 76],
  [35, 77],
  [36, 76],
  [37, 76],
  [38, 81],
  [39, 83]
]);

export const light_warning_Button = n106;
const n107 = t([
  [14, 83],
  [15, 81],
  [16, 76],
  [17, 78],
  [18, 0],
  [19, 207],
  [20, 11],
  [21, 206],
  [22, 0],
  [23, 75],
  [24, 75],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 207],
  [29, 81],
  [30, 84],
  [31, 85],
  [32, 85],
  [33, 206],
  [34, 78],
  [35, 79],
  [36, 78],
  [37, 78],
  [38, 81],
  [39, 83]
]);

export const light_warning_Checkbox = n107;
const n108 = t([
  [14, 85],
  [15, 83],
  [16, 78],
  [17, 81],
  [18, 75],
  [19, 74],
  [20, 84],
  [21, 85],
  [22, 75],
  [23, 77],
  [24, 77],
  [25, 75],
  [26, 75],
  [27, 75],
  [28, 74],
  [29, 83],
  [30, 11],
  [31, 206],
  [32, 206],
  [33, 85],
  [34, 78],
  [35, 79],
  [36, 78],
  [37, 78],
  [38, 83],
  [39, 85]
]);

export const light_warning_Switch = n108;
export const light_warning_TooltipContent = n108;
export const light_warning_SliderTrack = n108;
const n109 = t([
  [14, 78],
  [15, 81],
  [16, 85],
  [17, 83],
  [18, 206],
  [19, 206],
  [20, 207],
  [21, 207],
  [22, 206],
  [23, 11],
  [24, 11],
  [25, 206],
  [26, 206],
  [27, 206],
  [28, 206],
  [29, 81],
  [30, 77],
  [31, 76],
  [32, 76],
  [33, 207],
  [34, 85],
  [35, 84],
  [36, 85],
  [37, 85],
  [38, 81],
  [39, 78]
]);

export const light_warning_SwitchThumb = n109;
const n110 = t([
  [14, 84],
  [15, 82],
  [16, 77],
  [17, 79],
  [18, 74],
  [19, 0],
  [20, 85],
  [21, 11],
  [22, 74],
  [23, 76],
  [24, 76],
  [25, 74],
  [26, 74],
  [27, 74],
  [28, 0],
  [29, 82],
  [30, 85],
  [31, 11],
  [32, 11],
  [33, 11],
  [34, 77],
  [35, 78],
  [36, 77],
  [37, 77],
  [38, 82],
  [39, 84]
]);

export const light_warning_DrawerFrame = n110;
export const light_warning_Progress = n110;
export const light_warning_TooltipArrow = n110;
const n111 = t([
  [14, 83],
  [15, 81],
  [16, 76],
  [17, 78],
  [18, 0],
  [19, 207],
  [20, 11],
  [21, 206],
  [22, 0],
  [23, 75],
  [24, 75],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 207],
  [29, 81],
  [30, 84],
  [31, 85],
  [32, 85],
  [33, 206],
  [34, 77],
  [35, 78],
  [36, 77],
  [37, 77],
  [38, 81],
  [39, 83]
]);

export const light_warning_RadioGroupItem = n111;
const n112 = t([
  [14, 74],
  [15, 76],
  [16, 81],
  [17, 78],
  [18, 84],
  [19, 85],
  [20, 75],
  [21, 74],
  [22, 84],
  [23, 82],
  [24, 82],
  [25, 84],
  [26, 84],
  [27, 84],
  [28, 85],
  [29, 76],
  [30, 0],
  [31, 207],
  [32, 207],
  [33, 74],
  [34, 81],
  [35, 79],
  [36, 81],
  [37, 81],
  [38, 76],
  [39, 74]
]);

export const light_warning_SliderTrackActive = n112;
const n113 = t([
  [14, 76],
  [15, 78],
  [16, 83],
  [17, 81],
  [18, 11],
  [19, 206],
  [20, 0],
  [21, 207],
  [22, 11],
  [23, 84],
  [24, 84],
  [25, 11],
  [26, 11],
  [27, 11],
  [28, 206],
  [29, 78],
  [30, 75],
  [31, 74],
  [32, 74],
  [33, 207],
  [34, 83],
  [35, 82],
  [36, 83],
  [37, 83],
  [38, 78],
  [39, 76]
]);

export const light_warning_SliderThumb = n113;
export const light_warning_Tooltip = n113;
export const light_warning_ProgressIndicator = n113;
const n114 = t([
  [14, 83],
  [15, 81],
  [16, 76],
  [17, 78],
  [18, 0],
  [19, 207],
  [20, 11],
  [21, 206],
  [22, 0],
  [23, 75],
  [24, 75],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 207],
  [29, 11],
  [30, 82],
  [31, 81],
  [32, 81],
  [33, 206],
  [34, 76],
  [35, 77],
  [36, 76],
  [37, 76],
  [38, 81],
  [39, 83]
]);

export const light_warning_Breadcrumb = n114;
const n115 = t([
  [14, 83],
  [15, 81],
  [16, 76],
  [17, 78],
  [18, 0],
  [19, 207],
  [20, 11],
  [21, 206],
  [22, 0],
  [23, 75],
  [24, 75],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 207],
  [29, 83],
  [30, 81],
  [31, 85],
  [32, 85],
  [33, 206],
  [34, 76],
  [35, 77],
  [36, 76],
  [37, 76],
  [38, 81],
  [39, 83]
]);

export const light_warning_Link = n115;
const n116 = t([
  [14, 70],
  [15, 67],
  [16, 63],
  [17, 65],
  [18, 209],
  [19, 209],
  [20, 208],
  [21, 208],
  [22, 209],
  [23, 62],
  [24, 62],
  [25, 209],
  [26, 209],
  [27, 209],
  [28, 209],
  [29, 67],
  [30, 71],
  [31, 72],
  [32, 72],
  [33, 208],
  [34, 63],
  [35, 64],
  [36, 63],
  [37, 63],
  [38, 67],
  [39, 70]
]);

export const light_error_ListItem = n116;
const n117 = t([
  [14, 71],
  [15, 69],
  [16, 64],
  [17, 66],
  [18, 0],
  [19, 209],
  [20, 11],
  [21, 208],
  [22, 0],
  [23, 63],
  [24, 63],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 209],
  [29, 69],
  [30, 72],
  [31, 73],
  [32, 73],
  [33, 208],
  [34, 64],
  [35, 65],
  [36, 64],
  [37, 64],
  [38, 69],
  [39, 71]
]);

export const light_error_BodyText = n117;
export const light_error_Card = n117;
export const light_error_CardEyebrow = n117;
export const light_error_CardTitle = n117;
export const light_error_Alert = n117;
export const light_error_AlertHeading = n117;
export const light_error_Message = n117;
export const light_error_MessageHeading = n117;
export const light_error_Input = n117;
export const light_error_Select = n117;
export const light_error_RadioGroup = n117;
export const light_error_DatePicker = n117;
export const light_error_FilePicker = n117;
export const light_error_Label = n117;
export const light_error_Badge = n117;
export const light_error_TextArea = n117;
export const light_error_Table = n117;
export const light_error_TableHeader = n117;
const n118 = t([
  [14, 71],
  [15, 69],
  [16, 64],
  [17, 66],
  [18, 0],
  [19, 209],
  [20, 11],
  [21, 208],
  [22, 69],
  [23, 63],
  [24, 11],
  [25, 69],
  [26, 69],
  [27, 0],
  [28, 209],
  [29, 0],
  [30, 0],
  [31, 0],
  [32, 0],
  [33, 208],
  [34, 64],
  [35, 65],
  [36, 64],
  [37, 64],
  [38, 69],
  [39, 71]
]);

export const light_error_Button = n118;
const n119 = t([
  [14, 71],
  [15, 69],
  [16, 64],
  [17, 66],
  [18, 0],
  [19, 209],
  [20, 11],
  [21, 208],
  [22, 0],
  [23, 63],
  [24, 63],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 209],
  [29, 69],
  [30, 72],
  [31, 73],
  [32, 73],
  [33, 208],
  [34, 66],
  [35, 67],
  [36, 66],
  [37, 66],
  [38, 69],
  [39, 71]
]);

export const light_error_Checkbox = n119;
const n120 = t([
  [14, 73],
  [15, 71],
  [16, 66],
  [17, 69],
  [18, 63],
  [19, 62],
  [20, 72],
  [21, 73],
  [22, 63],
  [23, 65],
  [24, 65],
  [25, 63],
  [26, 63],
  [27, 63],
  [28, 62],
  [29, 71],
  [30, 11],
  [31, 208],
  [32, 208],
  [33, 73],
  [34, 66],
  [35, 67],
  [36, 66],
  [37, 66],
  [38, 71],
  [39, 73]
]);

export const light_error_Switch = n120;
export const light_error_TooltipContent = n120;
export const light_error_SliderTrack = n120;
const n121 = t([
  [14, 66],
  [15, 69],
  [16, 73],
  [17, 71],
  [18, 208],
  [19, 208],
  [20, 209],
  [21, 209],
  [22, 208],
  [23, 11],
  [24, 11],
  [25, 208],
  [26, 208],
  [27, 208],
  [28, 208],
  [29, 69],
  [30, 65],
  [31, 64],
  [32, 64],
  [33, 209],
  [34, 73],
  [35, 72],
  [36, 73],
  [37, 73],
  [38, 69],
  [39, 66]
]);

export const light_error_SwitchThumb = n121;
const n122 = t([
  [14, 72],
  [15, 70],
  [16, 65],
  [17, 67],
  [18, 62],
  [19, 0],
  [20, 73],
  [21, 11],
  [22, 62],
  [23, 64],
  [24, 64],
  [25, 62],
  [26, 62],
  [27, 62],
  [28, 0],
  [29, 70],
  [30, 73],
  [31, 11],
  [32, 11],
  [33, 11],
  [34, 65],
  [35, 66],
  [36, 65],
  [37, 65],
  [38, 70],
  [39, 72]
]);

export const light_error_DrawerFrame = n122;
export const light_error_Progress = n122;
export const light_error_TooltipArrow = n122;
const n123 = t([
  [14, 71],
  [15, 69],
  [16, 64],
  [17, 66],
  [18, 0],
  [19, 209],
  [20, 11],
  [21, 208],
  [22, 0],
  [23, 63],
  [24, 63],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 209],
  [29, 69],
  [30, 72],
  [31, 73],
  [32, 73],
  [33, 208],
  [34, 65],
  [35, 66],
  [36, 65],
  [37, 65],
  [38, 69],
  [39, 71]
]);

export const light_error_RadioGroupItem = n123;
const n124 = t([
  [14, 62],
  [15, 64],
  [16, 69],
  [17, 66],
  [18, 72],
  [19, 73],
  [20, 63],
  [21, 62],
  [22, 72],
  [23, 70],
  [24, 70],
  [25, 72],
  [26, 72],
  [27, 72],
  [28, 73],
  [29, 64],
  [30, 0],
  [31, 209],
  [32, 209],
  [33, 62],
  [34, 69],
  [35, 67],
  [36, 69],
  [37, 69],
  [38, 64],
  [39, 62]
]);

export const light_error_SliderTrackActive = n124;
const n125 = t([
  [14, 64],
  [15, 66],
  [16, 71],
  [17, 69],
  [18, 11],
  [19, 208],
  [20, 0],
  [21, 209],
  [22, 11],
  [23, 72],
  [24, 72],
  [25, 11],
  [26, 11],
  [27, 11],
  [28, 208],
  [29, 66],
  [30, 63],
  [31, 62],
  [32, 62],
  [33, 209],
  [34, 71],
  [35, 70],
  [36, 71],
  [37, 71],
  [38, 66],
  [39, 64]
]);

export const light_error_SliderThumb = n125;
export const light_error_Tooltip = n125;
export const light_error_ProgressIndicator = n125;
const n126 = t([
  [14, 71],
  [15, 69],
  [16, 64],
  [17, 66],
  [18, 0],
  [19, 209],
  [20, 11],
  [21, 208],
  [22, 0],
  [23, 63],
  [24, 63],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 209],
  [29, 11],
  [30, 70],
  [31, 69],
  [32, 69],
  [33, 208],
  [34, 64],
  [35, 65],
  [36, 64],
  [37, 64],
  [38, 69],
  [39, 71]
]);

export const light_error_Breadcrumb = n126;
const n127 = t([
  [14, 71],
  [15, 69],
  [16, 64],
  [17, 66],
  [18, 0],
  [19, 209],
  [20, 11],
  [21, 208],
  [22, 0],
  [23, 63],
  [24, 63],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 209],
  [29, 71],
  [30, 69],
  [31, 73],
  [32, 73],
  [33, 208],
  [34, 64],
  [35, 65],
  [36, 64],
  [37, 64],
  [38, 69],
  [39, 71]
]);

export const light_error_Link = n127;
const n128 = t([
  [14, 94],
  [15, 91],
  [16, 87],
  [17, 89],
  [18, 211],
  [19, 211],
  [20, 210],
  [21, 210],
  [22, 211],
  [23, 86],
  [24, 86],
  [25, 211],
  [26, 211],
  [27, 211],
  [28, 211],
  [29, 91],
  [30, 95],
  [31, 96],
  [32, 96],
  [33, 210],
  [34, 87],
  [35, 88],
  [36, 87],
  [37, 87],
  [38, 91],
  [39, 94]
]);

export const light_info_ListItem = n128;
const n129 = t([
  [14, 95],
  [15, 93],
  [16, 88],
  [17, 90],
  [18, 0],
  [19, 211],
  [20, 11],
  [21, 210],
  [22, 0],
  [23, 87],
  [24, 87],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 211],
  [29, 93],
  [30, 96],
  [31, 97],
  [32, 97],
  [33, 210],
  [34, 88],
  [35, 89],
  [36, 88],
  [37, 88],
  [38, 93],
  [39, 95]
]);

export const light_info_BodyText = n129;
export const light_info_Card = n129;
export const light_info_CardEyebrow = n129;
export const light_info_CardTitle = n129;
export const light_info_Alert = n129;
export const light_info_AlertHeading = n129;
export const light_info_Message = n129;
export const light_info_MessageHeading = n129;
export const light_info_Input = n129;
export const light_info_Select = n129;
export const light_info_RadioGroup = n129;
export const light_info_DatePicker = n129;
export const light_info_FilePicker = n129;
export const light_info_Label = n129;
export const light_info_Badge = n129;
export const light_info_TextArea = n129;
export const light_info_Table = n129;
export const light_info_TableHeader = n129;
const n130 = t([
  [14, 95],
  [15, 93],
  [16, 88],
  [17, 90],
  [18, 0],
  [19, 211],
  [20, 11],
  [21, 210],
  [22, 93],
  [23, 87],
  [24, 11],
  [25, 93],
  [26, 93],
  [27, 0],
  [28, 211],
  [29, 0],
  [30, 0],
  [31, 0],
  [32, 0],
  [33, 210],
  [34, 88],
  [35, 89],
  [36, 88],
  [37, 88],
  [38, 93],
  [39, 95]
]);

export const light_info_Button = n130;
const n131 = t([
  [14, 95],
  [15, 93],
  [16, 88],
  [17, 90],
  [18, 0],
  [19, 211],
  [20, 11],
  [21, 210],
  [22, 0],
  [23, 87],
  [24, 87],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 211],
  [29, 93],
  [30, 96],
  [31, 97],
  [32, 97],
  [33, 210],
  [34, 90],
  [35, 91],
  [36, 90],
  [37, 90],
  [38, 93],
  [39, 95]
]);

export const light_info_Checkbox = n131;
const n132 = t([
  [14, 97],
  [15, 95],
  [16, 90],
  [17, 93],
  [18, 87],
  [19, 86],
  [20, 96],
  [21, 97],
  [22, 87],
  [23, 89],
  [24, 89],
  [25, 87],
  [26, 87],
  [27, 87],
  [28, 86],
  [29, 95],
  [30, 11],
  [31, 210],
  [32, 210],
  [33, 97],
  [34, 90],
  [35, 91],
  [36, 90],
  [37, 90],
  [38, 95],
  [39, 97]
]);

export const light_info_Switch = n132;
export const light_info_TooltipContent = n132;
export const light_info_SliderTrack = n132;
const n133 = t([
  [14, 90],
  [15, 93],
  [16, 97],
  [17, 95],
  [18, 210],
  [19, 210],
  [20, 211],
  [21, 211],
  [22, 210],
  [23, 11],
  [24, 11],
  [25, 210],
  [26, 210],
  [27, 210],
  [28, 210],
  [29, 93],
  [30, 89],
  [31, 88],
  [32, 88],
  [33, 211],
  [34, 97],
  [35, 96],
  [36, 97],
  [37, 97],
  [38, 93],
  [39, 90]
]);

export const light_info_SwitchThumb = n133;
const n134 = t([
  [14, 96],
  [15, 94],
  [16, 89],
  [17, 91],
  [18, 86],
  [19, 0],
  [20, 97],
  [21, 11],
  [22, 86],
  [23, 88],
  [24, 88],
  [25, 86],
  [26, 86],
  [27, 86],
  [28, 0],
  [29, 94],
  [30, 97],
  [31, 11],
  [32, 11],
  [33, 11],
  [34, 89],
  [35, 90],
  [36, 89],
  [37, 89],
  [38, 94],
  [39, 96]
]);

export const light_info_DrawerFrame = n134;
export const light_info_Progress = n134;
export const light_info_TooltipArrow = n134;
const n135 = t([
  [14, 95],
  [15, 93],
  [16, 88],
  [17, 90],
  [18, 0],
  [19, 211],
  [20, 11],
  [21, 210],
  [22, 0],
  [23, 87],
  [24, 87],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 211],
  [29, 93],
  [30, 96],
  [31, 97],
  [32, 97],
  [33, 210],
  [34, 89],
  [35, 90],
  [36, 89],
  [37, 89],
  [38, 93],
  [39, 95]
]);

export const light_info_RadioGroupItem = n135;
const n136 = t([
  [14, 86],
  [15, 88],
  [16, 93],
  [17, 90],
  [18, 96],
  [19, 97],
  [20, 87],
  [21, 86],
  [22, 96],
  [23, 94],
  [24, 94],
  [25, 96],
  [26, 96],
  [27, 96],
  [28, 97],
  [29, 88],
  [30, 0],
  [31, 211],
  [32, 211],
  [33, 86],
  [34, 93],
  [35, 91],
  [36, 93],
  [37, 93],
  [38, 88],
  [39, 86]
]);

export const light_info_SliderTrackActive = n136;
const n137 = t([
  [14, 88],
  [15, 90],
  [16, 95],
  [17, 93],
  [18, 11],
  [19, 210],
  [20, 0],
  [21, 211],
  [22, 11],
  [23, 96],
  [24, 96],
  [25, 11],
  [26, 11],
  [27, 11],
  [28, 210],
  [29, 90],
  [30, 87],
  [31, 86],
  [32, 86],
  [33, 211],
  [34, 95],
  [35, 94],
  [36, 95],
  [37, 95],
  [38, 90],
  [39, 88]
]);

export const light_info_SliderThumb = n137;
export const light_info_Tooltip = n137;
export const light_info_ProgressIndicator = n137;
const n138 = t([
  [14, 95],
  [15, 93],
  [16, 88],
  [17, 90],
  [18, 0],
  [19, 211],
  [20, 11],
  [21, 210],
  [22, 0],
  [23, 87],
  [24, 87],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 211],
  [29, 11],
  [30, 94],
  [31, 93],
  [32, 93],
  [33, 210],
  [34, 88],
  [35, 89],
  [36, 88],
  [37, 88],
  [38, 93],
  [39, 95]
]);

export const light_info_Breadcrumb = n138;
const n139 = t([
  [14, 95],
  [15, 93],
  [16, 88],
  [17, 90],
  [18, 0],
  [19, 211],
  [20, 11],
  [21, 210],
  [22, 0],
  [23, 87],
  [24, 87],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 211],
  [29, 95],
  [30, 93],
  [31, 97],
  [32, 97],
  [33, 210],
  [34, 88],
  [35, 89],
  [36, 88],
  [37, 88],
  [38, 93],
  [39, 95]
]);

export const light_info_Link = n139;
const n140 = t([
  [14, 122],
  [15, 120],
  [16, 115],
  [17, 117],
  [18, 9],
  [19, 213],
  [20, 110],
  [21, 212],
  [22, 9],
  [23, 114],
  [24, 114],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 213],
  [29, 120],
  [30, 123],
  [31, 124],
  [32, 124],
  [33, 212],
  [34, 120],
  [35, 122],
  [36, 110],
  [37, 110],
  [38, 120],
  [39, 122]
]);

export const dark_brand_ListItem = n140;
export const dark_brand_BodyText = n140;
export const dark_brand_Card = n140;
export const dark_brand_CardEyebrow = n140;
export const dark_brand_CardTitle = n140;
export const dark_brand_Alert = n140;
export const dark_brand_AlertHeading = n140;
export const dark_brand_Message = n140;
export const dark_brand_MessageHeading = n140;
export const dark_brand_Input = n140;
export const dark_brand_Select = n140;
export const dark_brand_RadioGroup = n140;
export const dark_brand_DatePicker = n140;
export const dark_brand_FilePicker = n140;
export const dark_brand_Label = n140;
export const dark_brand_Badge = n140;
export const dark_brand_TextArea = n140;
export const dark_brand_Table = n140;
export const dark_brand_TableHeader = n140;
export const dark_accent_ListItem = n140;
export const dark_accent_BodyText = n140;
export const dark_accent_Card = n140;
export const dark_accent_CardEyebrow = n140;
export const dark_accent_CardTitle = n140;
export const dark_accent_Alert = n140;
export const dark_accent_AlertHeading = n140;
export const dark_accent_Message = n140;
export const dark_accent_MessageHeading = n140;
export const dark_accent_Input = n140;
export const dark_accent_Select = n140;
export const dark_accent_RadioGroup = n140;
export const dark_accent_DatePicker = n140;
export const dark_accent_FilePicker = n140;
export const dark_accent_Label = n140;
export const dark_accent_Badge = n140;
export const dark_accent_TextArea = n140;
export const dark_accent_Table = n140;
export const dark_accent_TableHeader = n140;
const n141 = t([
  [14, 122],
  [15, 120],
  [16, 115],
  [17, 117],
  [18, 9],
  [19, 213],
  [20, 110],
  [21, 212],
  [22, 120],
  [23, 114],
  [24, 110],
  [25, 120],
  [26, 120],
  [27, 9],
  [28, 213],
  [29, 9],
  [30, 9],
  [31, 9],
  [32, 9],
  [33, 212],
  [34, 120],
  [35, 122],
  [36, 110],
  [37, 110],
  [38, 120],
  [39, 122]
]);

export const dark_brand_Button = n141;
export const dark_accent_Button = n141;
const n142 = t([
  [14, 122],
  [15, 120],
  [16, 115],
  [17, 117],
  [18, 9],
  [19, 213],
  [20, 110],
  [21, 212],
  [22, 9],
  [23, 114],
  [24, 114],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 213],
  [29, 120],
  [30, 123],
  [31, 124],
  [32, 124],
  [33, 212],
  [34, 122],
  [35, 124],
  [36, 123],
  [37, 123],
  [38, 120],
  [39, 122]
]);

export const dark_brand_Checkbox = n142;
export const dark_accent_Checkbox = n142;
const n143 = t([
  [14, 124],
  [15, 122],
  [16, 117],
  [17, 120],
  [18, 114],
  [19, 113],
  [20, 123],
  [21, 124],
  [22, 114],
  [23, 116],
  [24, 116],
  [25, 114],
  [26, 114],
  [27, 114],
  [28, 113],
  [29, 122],
  [30, 110],
  [31, 212],
  [32, 212],
  [33, 124],
  [34, 122],
  [35, 124],
  [36, 123],
  [37, 123],
  [38, 122],
  [39, 124]
]);

export const dark_brand_Switch = n143;
export const dark_brand_TooltipContent = n143;
export const dark_brand_SliderTrack = n143;
export const dark_accent_Switch = n143;
export const dark_accent_TooltipContent = n143;
export const dark_accent_SliderTrack = n143;
const n144 = t([
  [14, 117],
  [15, 120],
  [16, 124],
  [17, 122],
  [18, 212],
  [19, 212],
  [20, 213],
  [21, 213],
  [22, 212],
  [23, 110],
  [24, 110],
  [25, 212],
  [26, 212],
  [27, 212],
  [28, 212],
  [29, 120],
  [30, 116],
  [31, 115],
  [32, 115],
  [33, 213],
  [34, 120],
  [35, 117],
  [36, 213],
  [37, 213],
  [38, 120],
  [39, 117]
]);

export const dark_brand_SwitchThumb = n144;
export const dark_accent_SwitchThumb = n144;
const n145 = t([
  [14, 123],
  [15, 121],
  [16, 116],
  [17, 118],
  [18, 113],
  [19, 9],
  [20, 124],
  [21, 110],
  [22, 113],
  [23, 115],
  [24, 115],
  [25, 113],
  [26, 113],
  [27, 113],
  [28, 9],
  [29, 121],
  [30, 124],
  [31, 110],
  [32, 110],
  [33, 110],
  [34, 121],
  [35, 123],
  [36, 124],
  [37, 124],
  [38, 121],
  [39, 123]
]);

export const dark_brand_DrawerFrame = n145;
export const dark_brand_Progress = n145;
export const dark_brand_TooltipArrow = n145;
export const dark_accent_DrawerFrame = n145;
export const dark_accent_Progress = n145;
export const dark_accent_TooltipArrow = n145;
const n146 = t([
  [14, 122],
  [15, 120],
  [16, 115],
  [17, 117],
  [18, 9],
  [19, 213],
  [20, 110],
  [21, 212],
  [22, 9],
  [23, 114],
  [24, 114],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 213],
  [29, 120],
  [30, 123],
  [31, 124],
  [32, 124],
  [33, 212],
  [34, 121],
  [35, 123],
  [36, 124],
  [37, 124],
  [38, 120],
  [39, 122]
]);

export const dark_brand_RadioGroupItem = n146;
export const dark_accent_RadioGroupItem = n146;
const n147 = t([
  [14, 113],
  [15, 115],
  [16, 120],
  [17, 117],
  [18, 123],
  [19, 124],
  [20, 114],
  [21, 113],
  [22, 123],
  [23, 121],
  [24, 121],
  [25, 123],
  [26, 123],
  [27, 123],
  [28, 124],
  [29, 115],
  [30, 9],
  [31, 213],
  [32, 213],
  [33, 113],
  [34, 115],
  [35, 113],
  [36, 114],
  [37, 114],
  [38, 115],
  [39, 113]
]);

export const dark_brand_SliderTrackActive = n147;
export const dark_accent_SliderTrackActive = n147;
const n148 = t([
  [14, 115],
  [15, 117],
  [16, 122],
  [17, 120],
  [18, 110],
  [19, 212],
  [20, 9],
  [21, 213],
  [22, 110],
  [23, 123],
  [24, 123],
  [25, 110],
  [26, 110],
  [27, 110],
  [28, 212],
  [29, 117],
  [30, 114],
  [31, 113],
  [32, 113],
  [33, 213],
  [34, 117],
  [35, 115],
  [36, 9],
  [37, 9],
  [38, 117],
  [39, 115]
]);

export const dark_brand_SliderThumb = n148;
export const dark_brand_Tooltip = n148;
export const dark_brand_ProgressIndicator = n148;
export const dark_accent_SliderThumb = n148;
export const dark_accent_Tooltip = n148;
export const dark_accent_ProgressIndicator = n148;
const n149 = t([
  [14, 122],
  [15, 120],
  [16, 115],
  [17, 117],
  [18, 9],
  [19, 213],
  [20, 110],
  [21, 212],
  [22, 9],
  [23, 114],
  [24, 114],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 213],
  [29, 110],
  [30, 121],
  [31, 120],
  [32, 120],
  [33, 212],
  [34, 120],
  [35, 122],
  [36, 110],
  [37, 110],
  [38, 120],
  [39, 122]
]);

export const dark_brand_Breadcrumb = n149;
export const dark_accent_Breadcrumb = n149;
const n150 = t([
  [14, 122],
  [15, 120],
  [16, 115],
  [17, 117],
  [18, 9],
  [19, 213],
  [20, 110],
  [21, 212],
  [22, 9],
  [23, 114],
  [24, 114],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 213],
  [29, 122],
  [30, 120],
  [31, 124],
  [32, 124],
  [33, 212],
  [34, 120],
  [35, 122],
  [36, 110],
  [37, 110],
  [38, 120],
  [39, 122]
]);

export const dark_brand_Link = n150;
export const dark_accent_Link = n150;
const n151 = t([
  [14, 35],
  [15, 132],
  [16, 127],
  [17, 129],
  [18, 9],
  [19, 215],
  [20, 110],
  [21, 214],
  [22, 9],
  [23, 126],
  [24, 126],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 215],
  [29, 132],
  [30, 134],
  [31, 135],
  [32, 135],
  [33, 214],
  [34, 132],
  [35, 35],
  [36, 110],
  [37, 110],
  [38, 132],
  [39, 35]
]);

export const dark_alternate_ListItem = n151;
export const dark_alternate_BodyText = n151;
export const dark_alternate_Card = n151;
export const dark_alternate_CardEyebrow = n151;
export const dark_alternate_CardTitle = n151;
export const dark_alternate_Alert = n151;
export const dark_alternate_AlertHeading = n151;
export const dark_alternate_Message = n151;
export const dark_alternate_MessageHeading = n151;
export const dark_alternate_Input = n151;
export const dark_alternate_Select = n151;
export const dark_alternate_RadioGroup = n151;
export const dark_alternate_DatePicker = n151;
export const dark_alternate_FilePicker = n151;
export const dark_alternate_Label = n151;
export const dark_alternate_Badge = n151;
export const dark_alternate_TextArea = n151;
export const dark_alternate_Table = n151;
export const dark_alternate_TableHeader = n151;
const n152 = t([
  [14, 35],
  [15, 132],
  [16, 127],
  [17, 129],
  [18, 9],
  [19, 215],
  [20, 110],
  [21, 214],
  [22, 132],
  [23, 126],
  [24, 110],
  [25, 132],
  [26, 132],
  [27, 9],
  [28, 215],
  [29, 9],
  [30, 9],
  [31, 9],
  [32, 9],
  [33, 214],
  [34, 132],
  [35, 35],
  [36, 110],
  [37, 110],
  [38, 132],
  [39, 35]
]);

export const dark_alternate_Button = n152;
const n153 = t([
  [14, 35],
  [15, 132],
  [16, 127],
  [17, 129],
  [18, 9],
  [19, 215],
  [20, 110],
  [21, 214],
  [22, 9],
  [23, 126],
  [24, 126],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 215],
  [29, 132],
  [30, 134],
  [31, 135],
  [32, 135],
  [33, 214],
  [34, 35],
  [35, 135],
  [36, 134],
  [37, 134],
  [38, 132],
  [39, 35]
]);

export const dark_alternate_Checkbox = n153;
const n154 = t([
  [14, 135],
  [15, 35],
  [16, 129],
  [17, 132],
  [18, 126],
  [19, 125],
  [20, 134],
  [21, 135],
  [22, 126],
  [23, 128],
  [24, 128],
  [25, 126],
  [26, 126],
  [27, 126],
  [28, 125],
  [29, 35],
  [30, 110],
  [31, 214],
  [32, 214],
  [33, 135],
  [34, 35],
  [35, 135],
  [36, 134],
  [37, 134],
  [38, 35],
  [39, 135]
]);

export const dark_alternate_Switch = n154;
export const dark_alternate_TooltipContent = n154;
export const dark_alternate_SliderTrack = n154;
const n155 = t([
  [14, 129],
  [15, 132],
  [16, 135],
  [17, 35],
  [18, 214],
  [19, 214],
  [20, 215],
  [21, 215],
  [22, 214],
  [23, 110],
  [24, 110],
  [25, 214],
  [26, 214],
  [27, 214],
  [28, 214],
  [29, 132],
  [30, 128],
  [31, 127],
  [32, 127],
  [33, 215],
  [34, 132],
  [35, 129],
  [36, 215],
  [37, 215],
  [38, 132],
  [39, 129]
]);

export const dark_alternate_SwitchThumb = n155;
const n156 = t([
  [14, 134],
  [15, 133],
  [16, 128],
  [17, 130],
  [18, 125],
  [19, 9],
  [20, 135],
  [21, 110],
  [22, 125],
  [23, 127],
  [24, 127],
  [25, 125],
  [26, 125],
  [27, 125],
  [28, 9],
  [29, 133],
  [30, 135],
  [31, 110],
  [32, 110],
  [33, 110],
  [34, 133],
  [35, 134],
  [36, 135],
  [37, 135],
  [38, 133],
  [39, 134]
]);

export const dark_alternate_DrawerFrame = n156;
export const dark_alternate_Progress = n156;
export const dark_alternate_TooltipArrow = n156;
const n157 = t([
  [14, 35],
  [15, 132],
  [16, 127],
  [17, 129],
  [18, 9],
  [19, 215],
  [20, 110],
  [21, 214],
  [22, 9],
  [23, 126],
  [24, 126],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 215],
  [29, 132],
  [30, 134],
  [31, 135],
  [32, 135],
  [33, 214],
  [34, 133],
  [35, 134],
  [36, 135],
  [37, 135],
  [38, 132],
  [39, 35]
]);

export const dark_alternate_RadioGroupItem = n157;
const n158 = t([
  [14, 125],
  [15, 127],
  [16, 132],
  [17, 129],
  [18, 134],
  [19, 135],
  [20, 126],
  [21, 125],
  [22, 134],
  [23, 133],
  [24, 133],
  [25, 134],
  [26, 134],
  [27, 134],
  [28, 135],
  [29, 127],
  [30, 9],
  [31, 215],
  [32, 215],
  [33, 125],
  [34, 127],
  [35, 125],
  [36, 126],
  [37, 126],
  [38, 127],
  [39, 125]
]);

export const dark_alternate_SliderTrackActive = n158;
const n159 = t([
  [14, 127],
  [15, 129],
  [16, 35],
  [17, 132],
  [18, 110],
  [19, 214],
  [20, 9],
  [21, 215],
  [22, 110],
  [23, 134],
  [24, 134],
  [25, 110],
  [26, 110],
  [27, 110],
  [28, 214],
  [29, 129],
  [30, 126],
  [31, 125],
  [32, 125],
  [33, 215],
  [34, 129],
  [35, 127],
  [36, 9],
  [37, 9],
  [38, 129],
  [39, 127]
]);

export const dark_alternate_SliderThumb = n159;
export const dark_alternate_Tooltip = n159;
export const dark_alternate_ProgressIndicator = n159;
const n160 = t([
  [14, 35],
  [15, 132],
  [16, 127],
  [17, 129],
  [18, 9],
  [19, 215],
  [20, 110],
  [21, 214],
  [22, 9],
  [23, 126],
  [24, 126],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 215],
  [29, 110],
  [30, 133],
  [31, 132],
  [32, 132],
  [33, 214],
  [34, 132],
  [35, 35],
  [36, 110],
  [37, 110],
  [38, 132],
  [39, 35]
]);

export const dark_alternate_Breadcrumb = n160;
const n161 = t([
  [14, 35],
  [15, 132],
  [16, 127],
  [17, 129],
  [18, 9],
  [19, 215],
  [20, 110],
  [21, 214],
  [22, 9],
  [23, 126],
  [24, 126],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 215],
  [29, 35],
  [30, 132],
  [31, 135],
  [32, 135],
  [33, 214],
  [34, 132],
  [35, 35],
  [36, 110],
  [37, 110],
  [38, 132],
  [39, 35]
]);

export const dark_alternate_Link = n161;
const n162 = t([
  [14, 145],
  [15, 143],
  [16, 138],
  [17, 140],
  [18, 9],
  [19, 217],
  [20, 110],
  [21, 216],
  [22, 9],
  [23, 137],
  [24, 137],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 217],
  [29, 143],
  [30, 146],
  [31, 147],
  [32, 147],
  [33, 216],
  [34, 143],
  [35, 145],
  [36, 110],
  [37, 110],
  [38, 143],
  [39, 145]
]);

export const dark_help_ListItem = n162;
export const dark_help_BodyText = n162;
export const dark_help_Card = n162;
export const dark_help_CardEyebrow = n162;
export const dark_help_CardTitle = n162;
export const dark_help_Alert = n162;
export const dark_help_AlertHeading = n162;
export const dark_help_Message = n162;
export const dark_help_MessageHeading = n162;
export const dark_help_Input = n162;
export const dark_help_Select = n162;
export const dark_help_RadioGroup = n162;
export const dark_help_DatePicker = n162;
export const dark_help_FilePicker = n162;
export const dark_help_Label = n162;
export const dark_help_Badge = n162;
export const dark_help_TextArea = n162;
export const dark_help_Table = n162;
export const dark_help_TableHeader = n162;
const n163 = t([
  [14, 145],
  [15, 143],
  [16, 138],
  [17, 140],
  [18, 9],
  [19, 217],
  [20, 110],
  [21, 216],
  [22, 143],
  [23, 137],
  [24, 110],
  [25, 143],
  [26, 143],
  [27, 9],
  [28, 217],
  [29, 9],
  [30, 9],
  [31, 9],
  [32, 9],
  [33, 216],
  [34, 143],
  [35, 145],
  [36, 110],
  [37, 110],
  [38, 143],
  [39, 145]
]);

export const dark_help_Button = n163;
const n164 = t([
  [14, 145],
  [15, 143],
  [16, 138],
  [17, 140],
  [18, 9],
  [19, 217],
  [20, 110],
  [21, 216],
  [22, 9],
  [23, 137],
  [24, 137],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 217],
  [29, 143],
  [30, 146],
  [31, 147],
  [32, 147],
  [33, 216],
  [34, 145],
  [35, 147],
  [36, 146],
  [37, 146],
  [38, 143],
  [39, 145]
]);

export const dark_help_Checkbox = n164;
const n165 = t([
  [14, 147],
  [15, 145],
  [16, 140],
  [17, 143],
  [18, 137],
  [19, 136],
  [20, 146],
  [21, 147],
  [22, 137],
  [23, 139],
  [24, 139],
  [25, 137],
  [26, 137],
  [27, 137],
  [28, 136],
  [29, 145],
  [30, 110],
  [31, 216],
  [32, 216],
  [33, 147],
  [34, 145],
  [35, 147],
  [36, 146],
  [37, 146],
  [38, 145],
  [39, 147]
]);

export const dark_help_Switch = n165;
export const dark_help_TooltipContent = n165;
export const dark_help_SliderTrack = n165;
const n166 = t([
  [14, 140],
  [15, 143],
  [16, 147],
  [17, 145],
  [18, 216],
  [19, 216],
  [20, 217],
  [21, 217],
  [22, 216],
  [23, 110],
  [24, 110],
  [25, 216],
  [26, 216],
  [27, 216],
  [28, 216],
  [29, 143],
  [30, 139],
  [31, 138],
  [32, 138],
  [33, 217],
  [34, 143],
  [35, 140],
  [36, 217],
  [37, 217],
  [38, 143],
  [39, 140]
]);

export const dark_help_SwitchThumb = n166;
const n167 = t([
  [14, 146],
  [15, 144],
  [16, 139],
  [17, 141],
  [18, 136],
  [19, 9],
  [20, 147],
  [21, 110],
  [22, 136],
  [23, 138],
  [24, 138],
  [25, 136],
  [26, 136],
  [27, 136],
  [28, 9],
  [29, 144],
  [30, 147],
  [31, 110],
  [32, 110],
  [33, 110],
  [34, 144],
  [35, 146],
  [36, 147],
  [37, 147],
  [38, 144],
  [39, 146]
]);

export const dark_help_DrawerFrame = n167;
export const dark_help_Progress = n167;
export const dark_help_TooltipArrow = n167;
const n168 = t([
  [14, 145],
  [15, 143],
  [16, 138],
  [17, 140],
  [18, 9],
  [19, 217],
  [20, 110],
  [21, 216],
  [22, 9],
  [23, 137],
  [24, 137],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 217],
  [29, 143],
  [30, 146],
  [31, 147],
  [32, 147],
  [33, 216],
  [34, 144],
  [35, 146],
  [36, 147],
  [37, 147],
  [38, 143],
  [39, 145]
]);

export const dark_help_RadioGroupItem = n168;
const n169 = t([
  [14, 136],
  [15, 138],
  [16, 143],
  [17, 140],
  [18, 146],
  [19, 147],
  [20, 137],
  [21, 136],
  [22, 146],
  [23, 144],
  [24, 144],
  [25, 146],
  [26, 146],
  [27, 146],
  [28, 147],
  [29, 138],
  [30, 9],
  [31, 217],
  [32, 217],
  [33, 136],
  [34, 138],
  [35, 136],
  [36, 137],
  [37, 137],
  [38, 138],
  [39, 136]
]);

export const dark_help_SliderTrackActive = n169;
const n170 = t([
  [14, 138],
  [15, 140],
  [16, 145],
  [17, 143],
  [18, 110],
  [19, 216],
  [20, 9],
  [21, 217],
  [22, 110],
  [23, 146],
  [24, 146],
  [25, 110],
  [26, 110],
  [27, 110],
  [28, 216],
  [29, 140],
  [30, 137],
  [31, 136],
  [32, 136],
  [33, 217],
  [34, 140],
  [35, 138],
  [36, 9],
  [37, 9],
  [38, 140],
  [39, 138]
]);

export const dark_help_SliderThumb = n170;
export const dark_help_Tooltip = n170;
export const dark_help_ProgressIndicator = n170;
const n171 = t([
  [14, 145],
  [15, 143],
  [16, 138],
  [17, 140],
  [18, 9],
  [19, 217],
  [20, 110],
  [21, 216],
  [22, 9],
  [23, 137],
  [24, 137],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 217],
  [29, 110],
  [30, 144],
  [31, 143],
  [32, 143],
  [33, 216],
  [34, 143],
  [35, 145],
  [36, 110],
  [37, 110],
  [38, 143],
  [39, 145]
]);

export const dark_help_Breadcrumb = n171;
const n172 = t([
  [14, 145],
  [15, 143],
  [16, 138],
  [17, 140],
  [18, 9],
  [19, 217],
  [20, 110],
  [21, 216],
  [22, 9],
  [23, 137],
  [24, 137],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 217],
  [29, 145],
  [30, 143],
  [31, 147],
  [32, 147],
  [33, 216],
  [34, 143],
  [35, 145],
  [36, 110],
  [37, 110],
  [38, 143],
  [39, 145]
]);

export const dark_help_Link = n172;
const n173 = t([
  [14, 157],
  [15, 155],
  [16, 150],
  [17, 152],
  [18, 9],
  [19, 219],
  [20, 110],
  [21, 218],
  [22, 9],
  [23, 149],
  [24, 149],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 219],
  [29, 155],
  [30, 158],
  [31, 159],
  [32, 159],
  [33, 218],
  [34, 155],
  [35, 157],
  [36, 110],
  [37, 110],
  [38, 155],
  [39, 157]
]);

export const dark_success_ListItem = n173;
export const dark_success_BodyText = n173;
export const dark_success_Card = n173;
export const dark_success_CardEyebrow = n173;
export const dark_success_CardTitle = n173;
export const dark_success_Alert = n173;
export const dark_success_AlertHeading = n173;
export const dark_success_Message = n173;
export const dark_success_MessageHeading = n173;
export const dark_success_Input = n173;
export const dark_success_Select = n173;
export const dark_success_RadioGroup = n173;
export const dark_success_DatePicker = n173;
export const dark_success_FilePicker = n173;
export const dark_success_Label = n173;
export const dark_success_Badge = n173;
export const dark_success_TextArea = n173;
export const dark_success_Table = n173;
export const dark_success_TableHeader = n173;
const n174 = t([
  [14, 157],
  [15, 155],
  [16, 150],
  [17, 152],
  [18, 9],
  [19, 219],
  [20, 110],
  [21, 218],
  [22, 155],
  [23, 149],
  [24, 110],
  [25, 155],
  [26, 155],
  [27, 9],
  [28, 219],
  [29, 9],
  [30, 9],
  [31, 9],
  [32, 9],
  [33, 218],
  [34, 155],
  [35, 157],
  [36, 110],
  [37, 110],
  [38, 155],
  [39, 157]
]);

export const dark_success_Button = n174;
const n175 = t([
  [14, 157],
  [15, 155],
  [16, 150],
  [17, 152],
  [18, 9],
  [19, 219],
  [20, 110],
  [21, 218],
  [22, 9],
  [23, 149],
  [24, 149],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 219],
  [29, 155],
  [30, 158],
  [31, 159],
  [32, 159],
  [33, 218],
  [34, 157],
  [35, 159],
  [36, 158],
  [37, 158],
  [38, 155],
  [39, 157]
]);

export const dark_success_Checkbox = n175;
const n176 = t([
  [14, 159],
  [15, 157],
  [16, 152],
  [17, 155],
  [18, 149],
  [19, 148],
  [20, 158],
  [21, 159],
  [22, 149],
  [23, 151],
  [24, 151],
  [25, 149],
  [26, 149],
  [27, 149],
  [28, 148],
  [29, 157],
  [30, 110],
  [31, 218],
  [32, 218],
  [33, 159],
  [34, 157],
  [35, 159],
  [36, 158],
  [37, 158],
  [38, 157],
  [39, 159]
]);

export const dark_success_Switch = n176;
export const dark_success_TooltipContent = n176;
export const dark_success_SliderTrack = n176;
const n177 = t([
  [14, 152],
  [15, 155],
  [16, 159],
  [17, 157],
  [18, 218],
  [19, 218],
  [20, 219],
  [21, 219],
  [22, 218],
  [23, 110],
  [24, 110],
  [25, 218],
  [26, 218],
  [27, 218],
  [28, 218],
  [29, 155],
  [30, 151],
  [31, 150],
  [32, 150],
  [33, 219],
  [34, 155],
  [35, 152],
  [36, 219],
  [37, 219],
  [38, 155],
  [39, 152]
]);

export const dark_success_SwitchThumb = n177;
const n178 = t([
  [14, 158],
  [15, 156],
  [16, 151],
  [17, 153],
  [18, 148],
  [19, 9],
  [20, 159],
  [21, 110],
  [22, 148],
  [23, 150],
  [24, 150],
  [25, 148],
  [26, 148],
  [27, 148],
  [28, 9],
  [29, 156],
  [30, 159],
  [31, 110],
  [32, 110],
  [33, 110],
  [34, 156],
  [35, 158],
  [36, 159],
  [37, 159],
  [38, 156],
  [39, 158]
]);

export const dark_success_DrawerFrame = n178;
export const dark_success_Progress = n178;
export const dark_success_TooltipArrow = n178;
const n179 = t([
  [14, 157],
  [15, 155],
  [16, 150],
  [17, 152],
  [18, 9],
  [19, 219],
  [20, 110],
  [21, 218],
  [22, 9],
  [23, 149],
  [24, 149],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 219],
  [29, 155],
  [30, 158],
  [31, 159],
  [32, 159],
  [33, 218],
  [34, 156],
  [35, 158],
  [36, 159],
  [37, 159],
  [38, 155],
  [39, 157]
]);

export const dark_success_RadioGroupItem = n179;
const n180 = t([
  [14, 148],
  [15, 150],
  [16, 155],
  [17, 152],
  [18, 158],
  [19, 159],
  [20, 149],
  [21, 148],
  [22, 158],
  [23, 156],
  [24, 156],
  [25, 158],
  [26, 158],
  [27, 158],
  [28, 159],
  [29, 150],
  [30, 9],
  [31, 219],
  [32, 219],
  [33, 148],
  [34, 150],
  [35, 148],
  [36, 149],
  [37, 149],
  [38, 150],
  [39, 148]
]);

export const dark_success_SliderTrackActive = n180;
const n181 = t([
  [14, 150],
  [15, 152],
  [16, 157],
  [17, 155],
  [18, 110],
  [19, 218],
  [20, 9],
  [21, 219],
  [22, 110],
  [23, 158],
  [24, 158],
  [25, 110],
  [26, 110],
  [27, 110],
  [28, 218],
  [29, 152],
  [30, 149],
  [31, 148],
  [32, 148],
  [33, 219],
  [34, 152],
  [35, 150],
  [36, 9],
  [37, 9],
  [38, 152],
  [39, 150]
]);

export const dark_success_SliderThumb = n181;
export const dark_success_Tooltip = n181;
export const dark_success_ProgressIndicator = n181;
const n182 = t([
  [14, 157],
  [15, 155],
  [16, 150],
  [17, 152],
  [18, 9],
  [19, 219],
  [20, 110],
  [21, 218],
  [22, 9],
  [23, 149],
  [24, 149],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 219],
  [29, 110],
  [30, 156],
  [31, 155],
  [32, 155],
  [33, 218],
  [34, 155],
  [35, 157],
  [36, 110],
  [37, 110],
  [38, 155],
  [39, 157]
]);

export const dark_success_Breadcrumb = n182;
const n183 = t([
  [14, 157],
  [15, 155],
  [16, 150],
  [17, 152],
  [18, 9],
  [19, 219],
  [20, 110],
  [21, 218],
  [22, 9],
  [23, 149],
  [24, 149],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 219],
  [29, 157],
  [30, 155],
  [31, 159],
  [32, 159],
  [33, 218],
  [34, 155],
  [35, 157],
  [36, 110],
  [37, 110],
  [38, 155],
  [39, 157]
]);

export const dark_success_Link = n183;
const n184 = t([
  [14, 181],
  [15, 179],
  [16, 174],
  [17, 176],
  [18, 9],
  [19, 221],
  [20, 110],
  [21, 220],
  [22, 9],
  [23, 173],
  [24, 173],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 221],
  [29, 179],
  [30, 182],
  [31, 183],
  [32, 183],
  [33, 220],
  [34, 179],
  [35, 181],
  [36, 110],
  [37, 110],
  [38, 179],
  [39, 181]
]);

export const dark_warning_ListItem = n184;
export const dark_warning_BodyText = n184;
export const dark_warning_Card = n184;
export const dark_warning_CardEyebrow = n184;
export const dark_warning_CardTitle = n184;
export const dark_warning_Alert = n184;
export const dark_warning_AlertHeading = n184;
export const dark_warning_Message = n184;
export const dark_warning_MessageHeading = n184;
export const dark_warning_Input = n184;
export const dark_warning_Select = n184;
export const dark_warning_RadioGroup = n184;
export const dark_warning_DatePicker = n184;
export const dark_warning_FilePicker = n184;
export const dark_warning_Label = n184;
export const dark_warning_Badge = n184;
export const dark_warning_TextArea = n184;
export const dark_warning_Table = n184;
export const dark_warning_TableHeader = n184;
const n185 = t([
  [14, 181],
  [15, 179],
  [16, 174],
  [17, 176],
  [18, 9],
  [19, 221],
  [20, 110],
  [21, 220],
  [22, 179],
  [23, 173],
  [24, 110],
  [25, 179],
  [26, 179],
  [27, 9],
  [28, 221],
  [29, 9],
  [30, 9],
  [31, 9],
  [32, 9],
  [33, 220],
  [34, 179],
  [35, 181],
  [36, 110],
  [37, 110],
  [38, 179],
  [39, 181]
]);

export const dark_warning_Button = n185;
const n186 = t([
  [14, 181],
  [15, 179],
  [16, 174],
  [17, 176],
  [18, 9],
  [19, 221],
  [20, 110],
  [21, 220],
  [22, 9],
  [23, 173],
  [24, 173],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 221],
  [29, 179],
  [30, 182],
  [31, 183],
  [32, 183],
  [33, 220],
  [34, 181],
  [35, 183],
  [36, 182],
  [37, 182],
  [38, 179],
  [39, 181]
]);

export const dark_warning_Checkbox = n186;
const n187 = t([
  [14, 183],
  [15, 181],
  [16, 176],
  [17, 179],
  [18, 173],
  [19, 172],
  [20, 182],
  [21, 183],
  [22, 173],
  [23, 175],
  [24, 175],
  [25, 173],
  [26, 173],
  [27, 173],
  [28, 172],
  [29, 181],
  [30, 110],
  [31, 220],
  [32, 220],
  [33, 183],
  [34, 181],
  [35, 183],
  [36, 182],
  [37, 182],
  [38, 181],
  [39, 183]
]);

export const dark_warning_Switch = n187;
export const dark_warning_TooltipContent = n187;
export const dark_warning_SliderTrack = n187;
const n188 = t([
  [14, 176],
  [15, 179],
  [16, 183],
  [17, 181],
  [18, 220],
  [19, 220],
  [20, 221],
  [21, 221],
  [22, 220],
  [23, 110],
  [24, 110],
  [25, 220],
  [26, 220],
  [27, 220],
  [28, 220],
  [29, 179],
  [30, 175],
  [31, 174],
  [32, 174],
  [33, 221],
  [34, 179],
  [35, 176],
  [36, 221],
  [37, 221],
  [38, 179],
  [39, 176]
]);

export const dark_warning_SwitchThumb = n188;
const n189 = t([
  [14, 182],
  [15, 180],
  [16, 175],
  [17, 177],
  [18, 172],
  [19, 9],
  [20, 183],
  [21, 110],
  [22, 172],
  [23, 174],
  [24, 174],
  [25, 172],
  [26, 172],
  [27, 172],
  [28, 9],
  [29, 180],
  [30, 183],
  [31, 110],
  [32, 110],
  [33, 110],
  [34, 180],
  [35, 182],
  [36, 183],
  [37, 183],
  [38, 180],
  [39, 182]
]);

export const dark_warning_DrawerFrame = n189;
export const dark_warning_Progress = n189;
export const dark_warning_TooltipArrow = n189;
const n190 = t([
  [14, 181],
  [15, 179],
  [16, 174],
  [17, 176],
  [18, 9],
  [19, 221],
  [20, 110],
  [21, 220],
  [22, 9],
  [23, 173],
  [24, 173],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 221],
  [29, 179],
  [30, 182],
  [31, 183],
  [32, 183],
  [33, 220],
  [34, 180],
  [35, 182],
  [36, 183],
  [37, 183],
  [38, 179],
  [39, 181]
]);

export const dark_warning_RadioGroupItem = n190;
const n191 = t([
  [14, 172],
  [15, 174],
  [16, 179],
  [17, 176],
  [18, 182],
  [19, 183],
  [20, 173],
  [21, 172],
  [22, 182],
  [23, 180],
  [24, 180],
  [25, 182],
  [26, 182],
  [27, 182],
  [28, 183],
  [29, 174],
  [30, 9],
  [31, 221],
  [32, 221],
  [33, 172],
  [34, 174],
  [35, 172],
  [36, 173],
  [37, 173],
  [38, 174],
  [39, 172]
]);

export const dark_warning_SliderTrackActive = n191;
const n192 = t([
  [14, 174],
  [15, 176],
  [16, 181],
  [17, 179],
  [18, 110],
  [19, 220],
  [20, 9],
  [21, 221],
  [22, 110],
  [23, 182],
  [24, 182],
  [25, 110],
  [26, 110],
  [27, 110],
  [28, 220],
  [29, 176],
  [30, 173],
  [31, 172],
  [32, 172],
  [33, 221],
  [34, 176],
  [35, 174],
  [36, 9],
  [37, 9],
  [38, 176],
  [39, 174]
]);

export const dark_warning_SliderThumb = n192;
export const dark_warning_Tooltip = n192;
export const dark_warning_ProgressIndicator = n192;
const n193 = t([
  [14, 181],
  [15, 179],
  [16, 174],
  [17, 176],
  [18, 9],
  [19, 221],
  [20, 110],
  [21, 220],
  [22, 9],
  [23, 173],
  [24, 173],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 221],
  [29, 110],
  [30, 180],
  [31, 179],
  [32, 179],
  [33, 220],
  [34, 179],
  [35, 181],
  [36, 110],
  [37, 110],
  [38, 179],
  [39, 181]
]);

export const dark_warning_Breadcrumb = n193;
const n194 = t([
  [14, 181],
  [15, 179],
  [16, 174],
  [17, 176],
  [18, 9],
  [19, 221],
  [20, 110],
  [21, 220],
  [22, 9],
  [23, 173],
  [24, 173],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 221],
  [29, 181],
  [30, 179],
  [31, 183],
  [32, 183],
  [33, 220],
  [34, 179],
  [35, 181],
  [36, 110],
  [37, 110],
  [38, 179],
  [39, 181]
]);

export const dark_warning_Link = n194;
const n195 = t([
  [14, 169],
  [15, 167],
  [16, 162],
  [17, 164],
  [18, 9],
  [19, 223],
  [20, 110],
  [21, 222],
  [22, 9],
  [23, 161],
  [24, 161],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 223],
  [29, 167],
  [30, 170],
  [31, 171],
  [32, 171],
  [33, 222],
  [34, 167],
  [35, 169],
  [36, 110],
  [37, 110],
  [38, 167],
  [39, 169]
]);

export const dark_error_ListItem = n195;
export const dark_error_BodyText = n195;
export const dark_error_Card = n195;
export const dark_error_CardEyebrow = n195;
export const dark_error_CardTitle = n195;
export const dark_error_Alert = n195;
export const dark_error_AlertHeading = n195;
export const dark_error_Message = n195;
export const dark_error_MessageHeading = n195;
export const dark_error_Input = n195;
export const dark_error_Select = n195;
export const dark_error_RadioGroup = n195;
export const dark_error_DatePicker = n195;
export const dark_error_FilePicker = n195;
export const dark_error_Label = n195;
export const dark_error_Badge = n195;
export const dark_error_TextArea = n195;
export const dark_error_Table = n195;
export const dark_error_TableHeader = n195;
const n196 = t([
  [14, 169],
  [15, 167],
  [16, 162],
  [17, 164],
  [18, 9],
  [19, 223],
  [20, 110],
  [21, 222],
  [22, 167],
  [23, 161],
  [24, 110],
  [25, 167],
  [26, 167],
  [27, 9],
  [28, 223],
  [29, 9],
  [30, 9],
  [31, 9],
  [32, 9],
  [33, 222],
  [34, 167],
  [35, 169],
  [36, 110],
  [37, 110],
  [38, 167],
  [39, 169]
]);

export const dark_error_Button = n196;
const n197 = t([
  [14, 169],
  [15, 167],
  [16, 162],
  [17, 164],
  [18, 9],
  [19, 223],
  [20, 110],
  [21, 222],
  [22, 9],
  [23, 161],
  [24, 161],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 223],
  [29, 167],
  [30, 170],
  [31, 171],
  [32, 171],
  [33, 222],
  [34, 169],
  [35, 171],
  [36, 170],
  [37, 170],
  [38, 167],
  [39, 169]
]);

export const dark_error_Checkbox = n197;
const n198 = t([
  [14, 171],
  [15, 169],
  [16, 164],
  [17, 167],
  [18, 161],
  [19, 160],
  [20, 170],
  [21, 171],
  [22, 161],
  [23, 163],
  [24, 163],
  [25, 161],
  [26, 161],
  [27, 161],
  [28, 160],
  [29, 169],
  [30, 110],
  [31, 222],
  [32, 222],
  [33, 171],
  [34, 169],
  [35, 171],
  [36, 170],
  [37, 170],
  [38, 169],
  [39, 171]
]);

export const dark_error_Switch = n198;
export const dark_error_TooltipContent = n198;
export const dark_error_SliderTrack = n198;
const n199 = t([
  [14, 164],
  [15, 167],
  [16, 171],
  [17, 169],
  [18, 222],
  [19, 222],
  [20, 223],
  [21, 223],
  [22, 222],
  [23, 110],
  [24, 110],
  [25, 222],
  [26, 222],
  [27, 222],
  [28, 222],
  [29, 167],
  [30, 163],
  [31, 162],
  [32, 162],
  [33, 223],
  [34, 167],
  [35, 164],
  [36, 223],
  [37, 223],
  [38, 167],
  [39, 164]
]);

export const dark_error_SwitchThumb = n199;
const n200 = t([
  [14, 170],
  [15, 168],
  [16, 163],
  [17, 165],
  [18, 160],
  [19, 9],
  [20, 171],
  [21, 110],
  [22, 160],
  [23, 162],
  [24, 162],
  [25, 160],
  [26, 160],
  [27, 160],
  [28, 9],
  [29, 168],
  [30, 171],
  [31, 110],
  [32, 110],
  [33, 110],
  [34, 168],
  [35, 170],
  [36, 171],
  [37, 171],
  [38, 168],
  [39, 170]
]);

export const dark_error_DrawerFrame = n200;
export const dark_error_Progress = n200;
export const dark_error_TooltipArrow = n200;
const n201 = t([
  [14, 169],
  [15, 167],
  [16, 162],
  [17, 164],
  [18, 9],
  [19, 223],
  [20, 110],
  [21, 222],
  [22, 9],
  [23, 161],
  [24, 161],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 223],
  [29, 167],
  [30, 170],
  [31, 171],
  [32, 171],
  [33, 222],
  [34, 168],
  [35, 170],
  [36, 171],
  [37, 171],
  [38, 167],
  [39, 169]
]);

export const dark_error_RadioGroupItem = n201;
const n202 = t([
  [14, 160],
  [15, 162],
  [16, 167],
  [17, 164],
  [18, 170],
  [19, 171],
  [20, 161],
  [21, 160],
  [22, 170],
  [23, 168],
  [24, 168],
  [25, 170],
  [26, 170],
  [27, 170],
  [28, 171],
  [29, 162],
  [30, 9],
  [31, 223],
  [32, 223],
  [33, 160],
  [34, 162],
  [35, 160],
  [36, 161],
  [37, 161],
  [38, 162],
  [39, 160]
]);

export const dark_error_SliderTrackActive = n202;
const n203 = t([
  [14, 162],
  [15, 164],
  [16, 169],
  [17, 167],
  [18, 110],
  [19, 222],
  [20, 9],
  [21, 223],
  [22, 110],
  [23, 170],
  [24, 170],
  [25, 110],
  [26, 110],
  [27, 110],
  [28, 222],
  [29, 164],
  [30, 161],
  [31, 160],
  [32, 160],
  [33, 223],
  [34, 164],
  [35, 162],
  [36, 9],
  [37, 9],
  [38, 164],
  [39, 162]
]);

export const dark_error_SliderThumb = n203;
export const dark_error_Tooltip = n203;
export const dark_error_ProgressIndicator = n203;
const n204 = t([
  [14, 169],
  [15, 167],
  [16, 162],
  [17, 164],
  [18, 9],
  [19, 223],
  [20, 110],
  [21, 222],
  [22, 9],
  [23, 161],
  [24, 161],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 223],
  [29, 110],
  [30, 168],
  [31, 167],
  [32, 167],
  [33, 222],
  [34, 167],
  [35, 169],
  [36, 110],
  [37, 110],
  [38, 167],
  [39, 169]
]);

export const dark_error_Breadcrumb = n204;
const n205 = t([
  [14, 169],
  [15, 167],
  [16, 162],
  [17, 164],
  [18, 9],
  [19, 223],
  [20, 110],
  [21, 222],
  [22, 9],
  [23, 161],
  [24, 161],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 223],
  [29, 169],
  [30, 167],
  [31, 171],
  [32, 171],
  [33, 222],
  [34, 167],
  [35, 169],
  [36, 110],
  [37, 110],
  [38, 167],
  [39, 169]
]);

export const dark_error_Link = n205;
const n206 = t([
  [14, 193],
  [15, 191],
  [16, 186],
  [17, 188],
  [18, 9],
  [19, 225],
  [20, 110],
  [21, 224],
  [22, 9],
  [23, 185],
  [24, 185],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 225],
  [29, 191],
  [30, 194],
  [31, 195],
  [32, 195],
  [33, 224],
  [34, 191],
  [35, 193],
  [36, 110],
  [37, 110],
  [38, 191],
  [39, 193]
]);

export const dark_info_ListItem = n206;
export const dark_info_BodyText = n206;
export const dark_info_Card = n206;
export const dark_info_CardEyebrow = n206;
export const dark_info_CardTitle = n206;
export const dark_info_Alert = n206;
export const dark_info_AlertHeading = n206;
export const dark_info_Message = n206;
export const dark_info_MessageHeading = n206;
export const dark_info_Input = n206;
export const dark_info_Select = n206;
export const dark_info_RadioGroup = n206;
export const dark_info_DatePicker = n206;
export const dark_info_FilePicker = n206;
export const dark_info_Label = n206;
export const dark_info_Badge = n206;
export const dark_info_TextArea = n206;
export const dark_info_Table = n206;
export const dark_info_TableHeader = n206;
const n207 = t([
  [14, 193],
  [15, 191],
  [16, 186],
  [17, 188],
  [18, 9],
  [19, 225],
  [20, 110],
  [21, 224],
  [22, 191],
  [23, 185],
  [24, 110],
  [25, 191],
  [26, 191],
  [27, 9],
  [28, 225],
  [29, 9],
  [30, 9],
  [31, 9],
  [32, 9],
  [33, 224],
  [34, 191],
  [35, 193],
  [36, 110],
  [37, 110],
  [38, 191],
  [39, 193]
]);

export const dark_info_Button = n207;
const n208 = t([
  [14, 193],
  [15, 191],
  [16, 186],
  [17, 188],
  [18, 9],
  [19, 225],
  [20, 110],
  [21, 224],
  [22, 9],
  [23, 185],
  [24, 185],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 225],
  [29, 191],
  [30, 194],
  [31, 195],
  [32, 195],
  [33, 224],
  [34, 193],
  [35, 195],
  [36, 194],
  [37, 194],
  [38, 191],
  [39, 193]
]);

export const dark_info_Checkbox = n208;
const n209 = t([
  [14, 195],
  [15, 193],
  [16, 188],
  [17, 191],
  [18, 185],
  [19, 184],
  [20, 194],
  [21, 195],
  [22, 185],
  [23, 187],
  [24, 187],
  [25, 185],
  [26, 185],
  [27, 185],
  [28, 184],
  [29, 193],
  [30, 110],
  [31, 224],
  [32, 224],
  [33, 195],
  [34, 193],
  [35, 195],
  [36, 194],
  [37, 194],
  [38, 193],
  [39, 195]
]);

export const dark_info_Switch = n209;
export const dark_info_TooltipContent = n209;
export const dark_info_SliderTrack = n209;
const n210 = t([
  [14, 188],
  [15, 191],
  [16, 195],
  [17, 193],
  [18, 224],
  [19, 224],
  [20, 225],
  [21, 225],
  [22, 224],
  [23, 110],
  [24, 110],
  [25, 224],
  [26, 224],
  [27, 224],
  [28, 224],
  [29, 191],
  [30, 187],
  [31, 186],
  [32, 186],
  [33, 225],
  [34, 191],
  [35, 188],
  [36, 225],
  [37, 225],
  [38, 191],
  [39, 188]
]);

export const dark_info_SwitchThumb = n210;
const n211 = t([
  [14, 194],
  [15, 192],
  [16, 187],
  [17, 189],
  [18, 184],
  [19, 9],
  [20, 195],
  [21, 110],
  [22, 184],
  [23, 186],
  [24, 186],
  [25, 184],
  [26, 184],
  [27, 184],
  [28, 9],
  [29, 192],
  [30, 195],
  [31, 110],
  [32, 110],
  [33, 110],
  [34, 192],
  [35, 194],
  [36, 195],
  [37, 195],
  [38, 192],
  [39, 194]
]);

export const dark_info_DrawerFrame = n211;
export const dark_info_Progress = n211;
export const dark_info_TooltipArrow = n211;
const n212 = t([
  [14, 193],
  [15, 191],
  [16, 186],
  [17, 188],
  [18, 9],
  [19, 225],
  [20, 110],
  [21, 224],
  [22, 9],
  [23, 185],
  [24, 185],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 225],
  [29, 191],
  [30, 194],
  [31, 195],
  [32, 195],
  [33, 224],
  [34, 192],
  [35, 194],
  [36, 195],
  [37, 195],
  [38, 191],
  [39, 193]
]);

export const dark_info_RadioGroupItem = n212;
const n213 = t([
  [14, 184],
  [15, 186],
  [16, 191],
  [17, 188],
  [18, 194],
  [19, 195],
  [20, 185],
  [21, 184],
  [22, 194],
  [23, 192],
  [24, 192],
  [25, 194],
  [26, 194],
  [27, 194],
  [28, 195],
  [29, 186],
  [30, 9],
  [31, 225],
  [32, 225],
  [33, 184],
  [34, 186],
  [35, 184],
  [36, 185],
  [37, 185],
  [38, 186],
  [39, 184]
]);

export const dark_info_SliderTrackActive = n213;
const n214 = t([
  [14, 186],
  [15, 188],
  [16, 193],
  [17, 191],
  [18, 110],
  [19, 224],
  [20, 9],
  [21, 225],
  [22, 110],
  [23, 194],
  [24, 194],
  [25, 110],
  [26, 110],
  [27, 110],
  [28, 224],
  [29, 188],
  [30, 185],
  [31, 184],
  [32, 184],
  [33, 225],
  [34, 188],
  [35, 186],
  [36, 9],
  [37, 9],
  [38, 188],
  [39, 186]
]);

export const dark_info_SliderThumb = n214;
export const dark_info_Tooltip = n214;
export const dark_info_ProgressIndicator = n214;
const n215 = t([
  [14, 193],
  [15, 191],
  [16, 186],
  [17, 188],
  [18, 9],
  [19, 225],
  [20, 110],
  [21, 224],
  [22, 9],
  [23, 185],
  [24, 185],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 225],
  [29, 110],
  [30, 192],
  [31, 191],
  [32, 191],
  [33, 224],
  [34, 191],
  [35, 193],
  [36, 110],
  [37, 110],
  [38, 191],
  [39, 193]
]);

export const dark_info_Breadcrumb = n215;
const n216 = t([
  [14, 193],
  [15, 191],
  [16, 186],
  [17, 188],
  [18, 9],
  [19, 225],
  [20, 110],
  [21, 224],
  [22, 9],
  [23, 185],
  [24, 185],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 225],
  [29, 193],
  [30, 191],
  [31, 195],
  [32, 195],
  [33, 224],
  [34, 191],
  [35, 193],
  [36, 110],
  [37, 110],
  [38, 191],
  [39, 193]
]);

export const dark_info_Link = n216;
