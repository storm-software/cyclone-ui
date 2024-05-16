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
  muted: string;
  disabled: string;
  bg: string;
  bgTransparent: string;
  fg: string;
  fgTransparent: string;
  background: string;
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

}

function t(a: [number, number][]) {
  let res: Record<string,string> = {}
  for (const [ki, vi] of a) {
    res[ks[ki] as string] = vs[vi] as string
  }
  return res as Theme
}
const vs = [
  'hsl(0,0%,98.04%)',
  'hsl(0,0%,89.8%)',
  'hsl(0,0%,81.57%)',
  'hsl(0,0%,73.33%)',
  'hsl(0,0%,65.1%)',
  'hsl(0,0%,56.86%)',
  'hsl(0,0%,48.24%)',
  'hsl(0,0%,40%)',
  'hsl(0,0%,31.76%)',
  'hsl(0,0%,7.06%)',
  'hsl(0,0%,3.53%)',
  'hsl(0,0%,0%)',
  'hsla(0,0%,0%, 0)',
  'hsla(0,0%,98.04%, 0)',
  'hsl(175.56,42.86%,87.65%)',
  'hsl(175.5,44.44%,82.35%)',
  'hsl(174.44,46.55%,77.25%)',
  'hsl(175.52,46.85%,71.96%)',
  'hsl(174.75,47.62%,67.06%)',
  'hsl(175.48,47.69%,61.76%)',
  'hsl(174.95,48.42%,56.67%)',
  'hsl(175,48.39%,51.37%)',
  'hsl(175.07,56.78%,46.27%)',
  'hsl(175.1,70.33%,40.98%)',
  'hsl(175.1,64.47%,29.8%)',
  'hsl(175.1,52.69%,18.24%)',
  'hsl(260.77,56.52%,90.98%)',
  'hsl(260,61.9%,87.65%)',
  'hsl(260.77,63.41%,83.92%)',
  'hsl(260.31,65.66%,80.59%)',
  'hsl(261.54,66.1%,76.86%)',
  'hsl(261.1,67.41%,73.53%)',
  'hsl(261.35,67.53%,69.8%)',
  'hsl(261.03,68.42%,66.47%)',
  'hsl(261.23,68.42%,62.75%)',
  'hsl(260.98,69.08%,59.41%)',
  'hsl(261.25,44.86%,41.96%)',
  'hsl(260.43,37.6%,24.51%)',
  'hsl(160.91,28.95%,85.1%)',
  'hsl(163.13,29.09%,78.43%)',
  'hsl(161.86,30.07%,71.96%)',
  'hsl(162.22,30.68%,65.49%)',
  'hsl(161.54,31.1%,59.02%)',
  'hsl(161.84,31.4%,52.55%)',
  'hsl(161.38,37.02%,46.08%)',
  'hsl(162.06,48.26%,39.41%)',
  'hsl(161.67,64.29%,32.94%)',
  'hsl(161.85,88.15%,26.47%)',
  'hsl(162,78.43%,20%)',
  'hsl(161.54,56.52%,13.53%)',
  'hsl(351.11,39.13%,86.47%)',
  'hsl(351.22,42.27%,80.98%)',
  'hsl(350.18,43.31%,75.1%)',
  'hsl(350.29,43.59%,69.41%)',
  'hsl(350.49,44.09%,63.53%)',
  'hsl(350.53,44.19%,57.84%)',
  'hsl(350.09,44.49%,51.96%)',
  'hsl(350.24,51.9%,46.47%)',
  'hsl(350.36,66.18%,40.59%)',
  'hsl(350.4,84.27%,34.9%)',
  'hsl(350.4,76.92%,25.49%)',
  'hsl(350.4,59.52%,16.47%)',
  'hsl(42,62.5%,90.59%)',
  'hsl(42.27,66.67%,87.06%)',
  'hsl(41.69,69.41%,83.33%)',
  'hsl(42.16,71.15%,79.61%)',
  'hsl(42.27,70.97%,75.69%)',
  'hsl(42.52,72.03%,71.96%)',
  'hsl(42.2,72.84%,68.24%)',
  'hsl(42.27,73.33%,64.71%)',
  'hsl(42.04,73.87%,60.98%)',
  'hsl(42.22,74.31%,57.25%)',
  'hsl(42.22,52.43%,40.39%)',
  'hsl(42.22,44.26%,23.92%)',
  'hsl(212.9,44.93%,86.47%)',
  'hsl(212.61,46.94%,80.78%)',
  'hsl(213.44,48.03%,75.1%)',
  'hsl(213.16,48.72%,69.41%)',
  'hsl(213.55,50.27%,63.73%)',
  'hsl(213.33,50.47%,58.04%)',
  'hsl(213.66,50.62%,52.35%)',
  'hsl(213.48,57.98%,46.67%)',
  'hsl(213.51,74.04%,40.78%)',
  'hsl(213.37,94.41%,35.1%)',
  'hsl(213.45,86.26%,25.69%)',
  'hsl(213.21,66.67%,16.47%)',
  'rgba(0,0,0,0.085)',
  'rgba(0,0,0,0.04)',
  'hsl(215,15%,15.69%)',
  'hsl(215,13.95%,16.86%)',
  'hsl(212.73,11.11%,19.41%)',
  'hsl(218.18,9.24%,23.33%)',
  'hsl(218.18,7.59%,28.43%)',
  'hsl(216,5.68%,34.51%)',
  'hsl(220,4.27%,41.37%)',
  'hsl(217.5,3.17%,49.41%)',
  'hsl(222.86,3.29%,58.24%)',
  'hsl(240,5.88%,90%)',
  'hsl(240,4%,95.1%)',
  'hsl(0,0%,100%)',
  'hsla(0,0%,100%, 0)',
  'hsla(215,15%,15.69%, 0)',
  'hsl(186.86,34.65%,19.8%)',
  'hsl(182.61,41.07%,21.96%)',
  'hsl(180,46.34%,24.12%)',
  'hsl(179.13,51.11%,26.47%)',
  'hsl(177.11,56.46%,28.82%)',
  'hsl(176.84,59.75%,31.18%)',
  'hsl(176.11,62.79%,33.73%)',
  'hsl(175.54,65.41%,36.27%)',
  'hsl(175.52,68.37%,38.43%)',
  'hsl(175.71,44.95%,57.25%)',
  'hsl(177.55,35.77%,73.14%)',
  'hsl(246.67,21.95%,24.12%)',
  'hsl(252.63,26.76%,27.84%)',
  'hsl(255.92,30.43%,31.57%)',
  'hsl(258,33.33%,35.29%)',
  'hsl(258.26,34.67%,39.02%)',
  'hsl(259.5,36.7%,42.75%)',
  'hsl(260.44,38.4%,46.47%)',
  'hsl(261.18,40.16%,50.2%)',
  'hsl(261.08,47.23%,53.92%)',
  'hsl(261.64,56.48%,57.65%)',
  'hsl(261.69,51.55%,68.43%)',
  'hsl(260,39.62%,79.22%)',
  'hsl(171.43,36.08%,19.02%)',
  'hsl(168,46.3%,21.18%)',
  'hsl(165.23,54.62%,23.33%)',
  'hsl(164.05,60.31%,25.69%)',
  'hsl(162.32,66.43%,28.04%)',
  'hsl(161.83,70.32%,30.39%)',
  'hsl(161.13,74.7%,32.55%)',
  'hsl(161.01,78.53%,34.71%)',
  'hsl(160.13,81.05%,37.25%)',
  'hsl(160.12,84.08%,39.41%)',
  'hsl(160.71,50%,56.08%)',
  'hsl(162.11,41.01%,72.75%)',
  'hsl(342.86,26.92%,20.39%)',
  'hsl(349.09,36.67%,23.53%)',
  'hsl(352,44.12%,26.67%)',
  'hsl(353.68,50%,29.8%)',
  'hsl(353.48,55.42%,32.55%)',
  'hsl(354.44,59.34%,35.69%)',
  'hsl(355.16,62.63%,38.82%)',
  'hsl(355.71,65.42%,41.96%)',
  'hsl(355.8,68.56%,44.9%)',
  'hsl(356.18,70.61%,48.04%)',
  'hsl(355.83,58.97%,61.76%)',
  'hsl(353.79,46.77%,75.69%)',
  'hsl(51.43,10.77%,25.49%)',
  'hsl(48.89,17.42%,30.39%)',
  'hsl(48,22.22%,35.29%)',
  'hsl(46.42,25.85%,40.2%)',
  'hsl(46.15,28.14%,45.29%)',
  'hsl(45.38,30.71%,50.2%)',
  'hsl(45.49,39.74%,55.1%)',
  'hsl(45.58,50.98%,60%)',
  'hsl(45.13,65.36%,64.9%)',
  'hsl(45.23,84.42%,69.8%)',
  'hsl(45.35,71.67%,76.47%)',
  'hsl(43.9,48.24%,83.33%)',
  'hsl(213,31.25%,25.1%)',
  'hsl(212.22,35.53%,29.8%)',
  'hsl(212.65,38.64%,34.51%)',
  'hsl(212.2,41%,39.22%)',
  'hsl(212.16,43.5%,43.73%)',
  'hsl(211.89,44.94%,48.43%)',
  'hsl(212.16,52.3%,53.14%)',
  'hsl(211.94,64.65%,57.84%)',
  'hsl(212.16,80.1%,62.55%)',
  'hsl(211.98,100%,67.25%)',
  'hsl(212.14,87.5%,74.9%)',
  'hsl(213.1,64.44%,82.35%)',
  'rgba(0,0,0,0.3)',
  'rgba(0,0,0,0.2)',
  'hsla(175.1,52.69%,18.24%, 0)',
  'hsla(175.56,42.86%,87.65%, 0)',
  'hsla(260.43,37.6%,24.51%, 0)',
  'hsla(260.77,56.52%,90.98%, 0)',
  'hsla(161.54,56.52%,13.53%, 0)',
  'hsla(160.91,28.95%,85.1%, 0)',
  'hsla(42.22,44.26%,23.92%, 0)',
  'hsla(42,62.5%,90.59%, 0)',
  'hsla(350.4,59.52%,16.47%, 0)',
  'hsla(351.11,39.13%,86.47%, 0)',
  'hsla(213.21,66.67%,16.47%, 0)',
  'hsla(212.9,44.93%,86.47%, 0)',
  'hsla(177.55,35.77%,73.14%, 0)',
  'hsla(186.86,34.65%,19.8%, 0)',
  'hsla(260,39.62%,79.22%, 0)',
  'hsla(246.67,21.95%,24.12%, 0)',
  'hsla(162.11,41.01%,72.75%, 0)',
  'hsla(171.43,36.08%,19.02%, 0)',
  'hsla(43.9,48.24%,83.33%, 0)',
  'hsla(51.43,10.77%,25.49%, 0)',
  'hsla(353.79,46.77%,75.69%, 0)',
  'hsla(342.86,26.92%,20.39%, 0)',
  'hsla(213.1,64.44%,82.35%, 0)',
  'hsla(213,31.25%,25.1%, 0)',
  'rgba(0,0,0,0.5)',
  'rgba(0,0,0,0.9)',
]

const ks = [
'color1',
'color2',
'color3',
'color4',
'color5',
'color6',
'color7',
'color8',
'color9',
'color10',
'color11',
'color12',
'color13',
'color14',
'primary',
'muted',
'disabled',
'bg',
'bgTransparent',
'fg',
'fgTransparent',
'background',
'backgroundHover',
'backgroundPress',
'backgroundFocus',
'backgroundStrong',
'backgroundTransparent',
'color',
'colorHover',
'colorPress',
'colorFocus',
'colorTransparent',
'borderColor',
'borderColorHover',
'borderColorFocus',
'borderColorPress',
'placeholderColor',
'outlineColor',
'base1',
'base2',
'base3',
'base4',
'base5',
'base6',
'base7',
'base8',
'base9',
'base10',
'base11',
'base12',
'brand1',
'brand2',
'brand3',
'brand4',
'brand5',
'brand6',
'brand7',
'brand8',
'brand9',
'brand10',
'brand11',
'brand12',
'accent1',
'accent2',
'accent3',
'accent4',
'accent5',
'accent6',
'accent7',
'accent8',
'accent9',
'accent10',
'accent11',
'accent12',
'help1',
'help2',
'help3',
'help4',
'help5',
'help6',
'help7',
'help8',
'help9',
'help10',
'help11',
'help12',
'success1',
'success2',
'success3',
'success4',
'success5',
'success6',
'success7',
'success8',
'success9',
'success10',
'success11',
'success12',
'error1',
'error2',
'error3',
'error4',
'error5',
'error6',
'error7',
'error8',
'error9',
'error10',
'error11',
'error12',
'warning1',
'warning2',
'warning3',
'warning4',
'warning5',
'warning6',
'warning7',
'warning8',
'warning9',
'warning10',
'warning11',
'warning12',
'info1',
'info2',
'info3',
'info4',
'info5',
'info6',
'info7',
'info8',
'info9',
'info10',
'info11',
'info12',
'shadowColor',
'shadowColorHover',
'shadowColorPress',
'shadowColorFocus']


const n1 = t([[0, 0],[1, 1],[2, 2],[3, 3],[4, 4],[5, 5],[6, 6],[7, 7],[8, 8],[9, 9],[10, 10],[11, 11],[12, 12],[13, 12],[14, 9],[15, 3],[16, 5],[17, 0],[18, 13],[19, 11],[20, 12],[21, 0],[22, 2],[23, 3],[24, 3],[25, 0],[26, 13],[27, 7],[28, 10],[29, 11],[30, 11],[31, 12],[32, 8],[33, 10],[34, 9],[35, 9],[36, 8],[37, 9],[38, 0],[39, 1],[40, 2],[41, 3],[42, 4],[43, 5],[44, 6],[45, 7],[46, 8],[47, 9],[48, 10],[49, 11],[50, 14],[51, 15],[52, 16],[53, 17],[54, 18],[55, 19],[56, 20],[57, 21],[58, 22],[59, 23],[60, 24],[61, 25],[62, 14],[63, 15],[64, 16],[65, 17],[66, 18],[67, 19],[68, 20],[69, 21],[70, 22],[71, 23],[72, 24],[73, 25],[74, 26],[75, 27],[76, 28],[77, 29],[78, 30],[79, 31],[80, 32],[81, 33],[82, 34],[83, 35],[84, 36],[85, 37],[86, 38],[87, 39],[88, 40],[89, 41],[90, 42],[91, 43],[92, 44],[93, 45],[94, 46],[95, 47],[96, 48],[97, 49],[98, 50],[99, 51],[100, 52],[101, 53],[102, 54],[103, 55],[104, 56],[105, 57],[106, 58],[107, 59],[108, 60],[109, 61],[110, 62],[111, 63],[112, 64],[113, 65],[114, 66],[115, 67],[116, 68],[117, 69],[118, 70],[119, 71],[120, 72],[121, 73],[122, 74],[123, 75],[124, 76],[125, 77],[126, 78],[127, 79],[128, 80],[129, 81],[130, 82],[131, 83],[132, 84],[133, 85],[134, 86],[135, 86],[136, 87],[137, 87]])

export const light = n1
const n2 = t([[0, 88],[1, 89],[2, 90],[3, 91],[4, 92],[5, 93],[6, 94],[7, 95],[8, 96],[9, 97],[10, 98],[11, 99],[12, 100],[13, 100],[14, 97],[15, 91],[16, 93],[17, 88],[18, 101],[19, 99],[20, 100],[21, 88],[22, 90],[23, 91],[24, 91],[25, 88],[26, 101],[27, 95],[28, 98],[29, 99],[30, 99],[31, 100],[32, 96],[33, 98],[34, 97],[35, 97],[36, 96],[37, 97],[38, 88],[39, 89],[40, 90],[41, 91],[42, 92],[43, 93],[44, 94],[45, 95],[46, 96],[47, 97],[48, 98],[49, 99],[50, 102],[51, 103],[52, 104],[53, 105],[54, 106],[55, 107],[56, 108],[57, 109],[58, 110],[59, 23],[60, 111],[61, 112],[62, 102],[63, 103],[64, 104],[65, 105],[66, 106],[67, 107],[68, 108],[69, 109],[70, 110],[71, 23],[72, 111],[73, 112],[74, 113],[75, 114],[76, 115],[77, 116],[78, 117],[79, 118],[80, 119],[81, 120],[82, 121],[83, 122],[84, 123],[85, 124],[86, 125],[87, 126],[88, 127],[89, 128],[90, 129],[91, 130],[92, 131],[93, 132],[94, 133],[95, 134],[96, 135],[97, 136],[98, 137],[99, 138],[100, 139],[101, 140],[102, 141],[103, 142],[104, 143],[105, 144],[106, 145],[107, 146],[108, 147],[109, 148],[110, 149],[111, 150],[112, 151],[113, 152],[114, 153],[115, 154],[116, 155],[117, 156],[118, 157],[119, 158],[120, 159],[121, 160],[122, 161],[123, 162],[124, 163],[125, 164],[126, 165],[127, 166],[128, 167],[129, 168],[130, 169],[131, 170],[132, 171],[133, 172],[134, 173],[135, 173],[136, 174],[137, 174]])

export const dark = n2
const n3 = t([[0, 0],[1, 1],[2, 2],[3, 3],[4, 4],[5, 5],[6, 6],[7, 7],[8, 8],[9, 9],[10, 10],[11, 11],[12, 12],[13, 12],[14, 9],[15, 3],[16, 5],[17, 0],[18, 13],[19, 11],[20, 12],[21, 0],[22, 2],[23, 3],[24, 3],[25, 0],[26, 13],[27, 7],[28, 10],[29, 11],[30, 11],[31, 12],[32, 3],[33, 4],[34, 3],[35, 3],[36, 8],[37, 9]])

export const light_base = n3
const n4 = t([[0, 0],[1, 14],[2, 15],[3, 16],[4, 17],[5, 18],[6, 19],[7, 21],[8, 22],[9, 23],[10, 24],[11, 25],[12, 11],[13, 175],[14, 23],[15, 16],[16, 18],[17, 0],[18, 176],[19, 11],[20, 175],[21, 0],[22, 15],[23, 16],[24, 16],[25, 0],[26, 176],[27, 21],[28, 24],[29, 25],[30, 25],[31, 175],[32, 16],[33, 17],[34, 16],[35, 16],[36, 23],[37, 23]])

export const light_brand = n4
export const light_accent = n4
const n5 = t([[0, 0],[1, 26],[2, 27],[3, 28],[4, 29],[5, 30],[6, 31],[7, 33],[8, 34],[9, 35],[10, 36],[11, 37],[12, 11],[13, 177],[14, 35],[15, 28],[16, 30],[17, 0],[18, 178],[19, 11],[20, 177],[21, 0],[22, 27],[23, 28],[24, 28],[25, 0],[26, 178],[27, 33],[28, 36],[29, 37],[30, 37],[31, 177],[32, 28],[33, 29],[34, 28],[35, 28],[36, 35],[37, 35]])

export const light_help = n5
const n6 = t([[0, 0],[1, 38],[2, 39],[3, 40],[4, 41],[5, 42],[6, 43],[7, 45],[8, 46],[9, 47],[10, 48],[11, 49],[12, 11],[13, 179],[14, 47],[15, 40],[16, 42],[17, 0],[18, 180],[19, 11],[20, 179],[21, 0],[22, 39],[23, 40],[24, 40],[25, 0],[26, 180],[27, 45],[28, 48],[29, 49],[30, 49],[31, 179],[32, 40],[33, 41],[34, 40],[35, 40],[36, 47],[37, 47]])

export const light_success = n6
const n7 = t([[0, 0],[1, 62],[2, 63],[3, 64],[4, 65],[5, 66],[6, 67],[7, 69],[8, 70],[9, 71],[10, 72],[11, 73],[12, 11],[13, 181],[14, 71],[15, 64],[16, 66],[17, 0],[18, 182],[19, 11],[20, 181],[21, 0],[22, 63],[23, 64],[24, 64],[25, 0],[26, 182],[27, 69],[28, 72],[29, 73],[30, 73],[31, 181],[32, 64],[33, 65],[34, 64],[35, 64],[36, 71],[37, 71]])

export const light_warning = n7
const n8 = t([[0, 0],[1, 50],[2, 51],[3, 52],[4, 53],[5, 54],[6, 55],[7, 57],[8, 58],[9, 59],[10, 60],[11, 61],[12, 11],[13, 183],[14, 59],[15, 52],[16, 54],[17, 0],[18, 184],[19, 11],[20, 183],[21, 0],[22, 51],[23, 52],[24, 52],[25, 0],[26, 184],[27, 57],[28, 60],[29, 61],[30, 61],[31, 183],[32, 52],[33, 53],[34, 52],[35, 52],[36, 59],[37, 59]])

export const light_error = n8
const n9 = t([[0, 0],[1, 74],[2, 75],[3, 76],[4, 77],[5, 78],[6, 79],[7, 81],[8, 82],[9, 83],[10, 84],[11, 85],[12, 11],[13, 185],[14, 83],[15, 76],[16, 78],[17, 0],[18, 186],[19, 11],[20, 185],[21, 0],[22, 75],[23, 76],[24, 76],[25, 0],[26, 186],[27, 81],[28, 84],[29, 85],[30, 85],[31, 185],[32, 76],[33, 77],[34, 76],[35, 76],[36, 83],[37, 83]])

export const light_info = n9
const n10 = t([[0, 88],[1, 89],[2, 90],[3, 91],[4, 92],[5, 93],[6, 94],[7, 95],[8, 96],[9, 97],[10, 98],[11, 99],[12, 100],[13, 100],[14, 97],[15, 91],[16, 93],[17, 88],[18, 101],[19, 99],[20, 100],[21, 88],[22, 90],[23, 91],[24, 91],[25, 88],[26, 101],[27, 95],[28, 98],[29, 99],[30, 99],[31, 100],[32, 96],[33, 98],[34, 97],[35, 97],[36, 96],[37, 97]])

export const dark_base = n10
const n11 = t([[0, 88],[1, 102],[2, 103],[3, 104],[4, 105],[5, 106],[6, 107],[7, 109],[8, 110],[9, 23],[10, 111],[11, 112],[12, 99],[13, 187],[14, 23],[15, 104],[16, 106],[17, 88],[18, 188],[19, 99],[20, 187],[21, 88],[22, 103],[23, 104],[24, 104],[25, 88],[26, 188],[27, 109],[28, 111],[29, 112],[30, 112],[31, 187],[32, 23],[33, 112],[34, 111],[35, 111],[36, 23],[37, 23]])

export const dark_brand = n11
export const dark_accent = n11
const n12 = t([[0, 88],[1, 113],[2, 114],[3, 115],[4, 116],[5, 117],[6, 118],[7, 120],[8, 121],[9, 122],[10, 123],[11, 124],[12, 99],[13, 189],[14, 122],[15, 115],[16, 117],[17, 88],[18, 190],[19, 99],[20, 189],[21, 88],[22, 114],[23, 115],[24, 115],[25, 88],[26, 190],[27, 120],[28, 123],[29, 124],[30, 124],[31, 189],[32, 122],[33, 124],[34, 123],[35, 123],[36, 122],[37, 122]])

export const dark_help = n12
const n13 = t([[0, 88],[1, 125],[2, 126],[3, 127],[4, 128],[5, 129],[6, 130],[7, 132],[8, 133],[9, 134],[10, 135],[11, 136],[12, 99],[13, 191],[14, 134],[15, 127],[16, 129],[17, 88],[18, 192],[19, 99],[20, 191],[21, 88],[22, 126],[23, 127],[24, 127],[25, 88],[26, 192],[27, 132],[28, 135],[29, 136],[30, 136],[31, 191],[32, 134],[33, 136],[34, 135],[35, 135],[36, 134],[37, 134]])

export const dark_success = n13
const n14 = t([[0, 88],[1, 149],[2, 150],[3, 151],[4, 152],[5, 153],[6, 154],[7, 156],[8, 157],[9, 158],[10, 159],[11, 160],[12, 99],[13, 193],[14, 158],[15, 151],[16, 153],[17, 88],[18, 194],[19, 99],[20, 193],[21, 88],[22, 150],[23, 151],[24, 151],[25, 88],[26, 194],[27, 156],[28, 159],[29, 160],[30, 160],[31, 193],[32, 158],[33, 160],[34, 159],[35, 159],[36, 158],[37, 158]])

export const dark_warning = n14
const n15 = t([[0, 88],[1, 137],[2, 138],[3, 139],[4, 140],[5, 141],[6, 142],[7, 144],[8, 145],[9, 146],[10, 147],[11, 148],[12, 99],[13, 195],[14, 146],[15, 139],[16, 141],[17, 88],[18, 196],[19, 99],[20, 195],[21, 88],[22, 138],[23, 139],[24, 139],[25, 88],[26, 196],[27, 144],[28, 147],[29, 148],[30, 148],[31, 195],[32, 146],[33, 148],[34, 147],[35, 147],[36, 146],[37, 146]])

export const dark_error = n15
const n16 = t([[0, 88],[1, 161],[2, 162],[3, 163],[4, 164],[5, 165],[6, 166],[7, 168],[8, 169],[9, 170],[10, 171],[11, 172],[12, 99],[13, 197],[14, 170],[15, 163],[16, 165],[17, 88],[18, 198],[19, 99],[20, 197],[21, 88],[22, 162],[23, 163],[24, 163],[25, 88],[26, 198],[27, 168],[28, 171],[29, 172],[30, 172],[31, 197],[32, 170],[33, 172],[34, 171],[35, 171],[36, 170],[37, 170]])

export const dark_info = n16
const n17 = t([[21, 199]])

export const light_SheetOverlay = n17
export const light_DialogOverlay = n17
export const light_ModalOverlay = n17
export const light_base_SheetOverlay = n17
export const light_base_DialogOverlay = n17
export const light_base_ModalOverlay = n17
export const light_brand_SheetOverlay = n17
export const light_brand_DialogOverlay = n17
export const light_brand_ModalOverlay = n17
export const light_accent_SheetOverlay = n17
export const light_accent_DialogOverlay = n17
export const light_accent_ModalOverlay = n17
export const light_help_SheetOverlay = n17
export const light_help_DialogOverlay = n17
export const light_help_ModalOverlay = n17
export const light_success_SheetOverlay = n17
export const light_success_DialogOverlay = n17
export const light_success_ModalOverlay = n17
export const light_warning_SheetOverlay = n17
export const light_warning_DialogOverlay = n17
export const light_warning_ModalOverlay = n17
export const light_error_SheetOverlay = n17
export const light_error_DialogOverlay = n17
export const light_error_ModalOverlay = n17
export const light_info_SheetOverlay = n17
export const light_info_DialogOverlay = n17
export const light_info_ModalOverlay = n17
const n18 = t([[21, 200]])

export const dark_SheetOverlay = n18
export const dark_DialogOverlay = n18
export const dark_ModalOverlay = n18
export const dark_base_SheetOverlay = n18
export const dark_base_DialogOverlay = n18
export const dark_base_ModalOverlay = n18
export const dark_brand_SheetOverlay = n18
export const dark_brand_DialogOverlay = n18
export const dark_brand_ModalOverlay = n18
export const dark_accent_SheetOverlay = n18
export const dark_accent_DialogOverlay = n18
export const dark_accent_ModalOverlay = n18
export const dark_help_SheetOverlay = n18
export const dark_help_DialogOverlay = n18
export const dark_help_ModalOverlay = n18
export const dark_success_SheetOverlay = n18
export const dark_success_DialogOverlay = n18
export const dark_success_ModalOverlay = n18
export const dark_warning_SheetOverlay = n18
export const dark_warning_DialogOverlay = n18
export const dark_warning_ModalOverlay = n18
export const dark_error_SheetOverlay = n18
export const dark_error_DialogOverlay = n18
export const dark_error_ModalOverlay = n18
export const dark_info_SheetOverlay = n18
export const dark_info_DialogOverlay = n18
export const dark_info_ModalOverlay = n18
const n19 = t([[14, 8],[15, 2],[16, 4],[17, 13],[18, 13],[19, 12],[20, 12],[21, 13],[22, 1],[23, 2],[24, 2],[25, 13],[26, 13],[27, 6],[28, 9],[29, 10],[30, 10],[31, 12],[32, 9],[33, 11],[34, 10],[35, 10],[36, 9],[37, 8]])

export const light_ListItem = n19
const n20 = t([[14, 9],[15, 3],[16, 5],[17, 0],[18, 13],[19, 11],[20, 12],[21, 0],[22, 2],[23, 3],[24, 3],[25, 0],[26, 13],[27, 7],[28, 10],[29, 11],[30, 11],[31, 12],[32, 8],[33, 10],[34, 9],[35, 9],[36, 8],[37, 9]])

export const light_Card = n20
export const light_CardEyebrow = n20
export const light_CardTitle = n20
export const light_Alert = n20
export const light_AlertHeading = n20
export const light_Message = n20
export const light_MessageHeading = n20
export const light_Input = n20
export const light_Select = n20
export const light_Label = n20
export const light_Badge = n20
export const light_TextArea = n20
const n21 = t([[14, 9],[15, 3],[16, 5],[17, 0],[18, 13],[19, 11],[20, 12],[21, 9],[22, 11],[23, 8],[24, 8],[25, 0],[26, 13],[27, 0],[28, 0],[29, 0],[30, 0],[31, 12],[32, 9],[33, 11],[34, 8],[35, 8],[36, 8],[37, 9]])

export const light_Button = n21
export const light_base_Button = n21
const n22 = t([[14, 9],[15, 3],[16, 5],[17, 0],[18, 13],[19, 11],[20, 12],[21, 0],[22, 2],[23, 3],[24, 3],[25, 0],[26, 13],[27, 7],[28, 10],[29, 11],[30, 11],[31, 12],[32, 6],[33, 8],[34, 7],[35, 7],[36, 8],[37, 9]])

export const light_Checkbox = n22
const n23 = t([[14, 11],[15, 5],[16, 7],[17, 2],[18, 1],[19, 9],[20, 10],[21, 2],[22, 4],[23, 5],[24, 5],[25, 2],[26, 1],[27, 9],[28, 12],[29, 12],[30, 12],[31, 10],[32, 6],[33, 8],[34, 7],[35, 7],[36, 6],[37, 11]])

export const light_Switch = n23
export const light_TooltipContent = n23
export const light_SliderTrack = n23
const n24 = t([[14, 4],[15, 10],[16, 8],[17, 12],[18, 12],[19, 13],[20, 13],[21, 12],[22, 11],[23, 10],[24, 10],[25, 12],[26, 12],[27, 6],[28, 3],[29, 2],[30, 2],[31, 13],[32, 1],[33, 13],[34, 0],[35, 0],[36, 1],[37, 4]])

export const light_SwitchThumb = n24
const n25 = t([[14, 10],[15, 4],[16, 6],[17, 1],[18, 0],[19, 10],[20, 11],[21, 1],[22, 3],[23, 4],[24, 4],[25, 1],[26, 0],[27, 8],[28, 11],[29, 12],[30, 12],[31, 11],[32, 7],[33, 9],[34, 8],[35, 8],[36, 7],[37, 10]])

export const light_DrawerFrame = n25
export const light_Progress = n25
export const light_TooltipArrow = n25
const n26 = t([[14, 9],[15, 3],[16, 5],[17, 0],[18, 13],[19, 11],[20, 12],[21, 0],[22, 2],[23, 3],[24, 3],[25, 0],[26, 13],[27, 7],[28, 10],[29, 11],[30, 11],[31, 12],[32, 7],[33, 9],[34, 8],[35, 8],[36, 8],[37, 9]])

export const light_RadioGroupItem = n26
const n27 = t([[14, 0],[15, 6],[16, 4],[17, 9],[18, 10],[19, 2],[20, 1],[21, 9],[22, 7],[23, 6],[24, 6],[25, 9],[26, 10],[27, 2],[28, 13],[29, 13],[30, 13],[31, 1],[32, 5],[33, 3],[34, 4],[35, 4],[36, 5],[37, 0]])

export const light_SliderTrackActive = n27
const n28 = t([[14, 2],[15, 8],[16, 6],[17, 11],[18, 12],[19, 0],[20, 13],[21, 11],[22, 9],[23, 8],[24, 8],[25, 11],[26, 12],[27, 4],[28, 1],[29, 0],[30, 0],[31, 13],[32, 3],[33, 1],[34, 2],[35, 2],[36, 3],[37, 2]])

export const light_SliderThumb = n28
export const light_Tooltip = n28
export const light_ProgressIndicator = n28
const n29 = t([[14, 9],[15, 3],[16, 5],[17, 0],[18, 13],[19, 11],[20, 12],[21, 0],[22, 2],[23, 3],[24, 3],[25, 0],[26, 13],[27, 11],[28, 8],[29, 7],[30, 7],[31, 12],[32, 8],[33, 10],[34, 9],[35, 9],[36, 8],[37, 9]])

export const light_Breadcrumb = n29
export const light_Link = n29
const n30 = t([[14, 97],[15, 91],[16, 93],[17, 88],[18, 101],[19, 99],[20, 100],[21, 88],[22, 90],[23, 91],[24, 91],[25, 88],[26, 101],[27, 95],[28, 98],[29, 99],[30, 99],[31, 100],[32, 96],[33, 98],[34, 97],[35, 97],[36, 96],[37, 97]])

export const dark_ListItem = n30
export const dark_Card = n30
export const dark_CardEyebrow = n30
export const dark_CardTitle = n30
export const dark_Alert = n30
export const dark_AlertHeading = n30
export const dark_Message = n30
export const dark_MessageHeading = n30
export const dark_Input = n30
export const dark_Select = n30
export const dark_Label = n30
export const dark_Badge = n30
export const dark_TextArea = n30
export const dark_base_ListItem = n30
export const dark_base_Card = n30
export const dark_base_CardEyebrow = n30
export const dark_base_CardTitle = n30
export const dark_base_Alert = n30
export const dark_base_AlertHeading = n30
export const dark_base_Message = n30
export const dark_base_MessageHeading = n30
export const dark_base_Input = n30
export const dark_base_Select = n30
export const dark_base_Label = n30
export const dark_base_Badge = n30
export const dark_base_TextArea = n30
const n31 = t([[14, 97],[15, 91],[16, 93],[17, 88],[18, 101],[19, 99],[20, 100],[21, 97],[22, 99],[23, 96],[24, 96],[25, 88],[26, 101],[27, 88],[28, 88],[29, 88],[30, 88],[31, 100],[32, 97],[33, 99],[34, 96],[35, 96],[36, 96],[37, 97]])

export const dark_Button = n31
export const dark_base_Button = n31
const n32 = t([[14, 97],[15, 91],[16, 93],[17, 88],[18, 101],[19, 99],[20, 100],[21, 88],[22, 90],[23, 91],[24, 91],[25, 88],[26, 101],[27, 95],[28, 98],[29, 99],[30, 99],[31, 100],[32, 94],[33, 96],[34, 95],[35, 95],[36, 96],[37, 97]])

export const dark_Checkbox = n32
export const dark_base_Checkbox = n32
const n33 = t([[14, 99],[15, 93],[16, 95],[17, 90],[18, 89],[19, 97],[20, 98],[21, 90],[22, 92],[23, 93],[24, 93],[25, 90],[26, 89],[27, 97],[28, 100],[29, 100],[30, 100],[31, 98],[32, 94],[33, 96],[34, 95],[35, 95],[36, 94],[37, 99]])

export const dark_Switch = n33
export const dark_TooltipContent = n33
export const dark_SliderTrack = n33
export const dark_base_Switch = n33
export const dark_base_TooltipContent = n33
export const dark_base_SliderTrack = n33
const n34 = t([[14, 92],[15, 98],[16, 96],[17, 100],[18, 100],[19, 101],[20, 101],[21, 100],[22, 99],[23, 98],[24, 98],[25, 100],[26, 100],[27, 94],[28, 91],[29, 90],[30, 90],[31, 101],[32, 89],[33, 101],[34, 88],[35, 88],[36, 89],[37, 92]])

export const dark_SwitchThumb = n34
export const dark_base_SwitchThumb = n34
const n35 = t([[14, 98],[15, 92],[16, 94],[17, 89],[18, 88],[19, 98],[20, 99],[21, 89],[22, 91],[23, 92],[24, 92],[25, 89],[26, 88],[27, 96],[28, 99],[29, 100],[30, 100],[31, 99],[32, 95],[33, 97],[34, 96],[35, 96],[36, 95],[37, 98]])

export const dark_DrawerFrame = n35
export const dark_Progress = n35
export const dark_TooltipArrow = n35
export const dark_base_DrawerFrame = n35
export const dark_base_Progress = n35
export const dark_base_TooltipArrow = n35
const n36 = t([[14, 97],[15, 91],[16, 93],[17, 88],[18, 101],[19, 99],[20, 100],[21, 88],[22, 90],[23, 91],[24, 91],[25, 88],[26, 101],[27, 95],[28, 98],[29, 99],[30, 99],[31, 100],[32, 95],[33, 97],[34, 96],[35, 96],[36, 96],[37, 97]])

export const dark_RadioGroupItem = n36
export const dark_base_RadioGroupItem = n36
const n37 = t([[14, 88],[15, 94],[16, 92],[17, 97],[18, 98],[19, 90],[20, 89],[21, 97],[22, 95],[23, 94],[24, 94],[25, 97],[26, 98],[27, 90],[28, 101],[29, 101],[30, 101],[31, 89],[32, 93],[33, 91],[34, 92],[35, 92],[36, 93],[37, 88]])

export const dark_SliderTrackActive = n37
export const dark_base_SliderTrackActive = n37
const n38 = t([[14, 90],[15, 96],[16, 94],[17, 99],[18, 100],[19, 88],[20, 101],[21, 99],[22, 97],[23, 96],[24, 96],[25, 99],[26, 100],[27, 92],[28, 89],[29, 88],[30, 88],[31, 101],[32, 91],[33, 89],[34, 90],[35, 90],[36, 91],[37, 90]])

export const dark_SliderThumb = n38
export const dark_Tooltip = n38
export const dark_ProgressIndicator = n38
export const dark_base_SliderThumb = n38
export const dark_base_Tooltip = n38
export const dark_base_ProgressIndicator = n38
const n39 = t([[14, 97],[15, 91],[16, 93],[17, 88],[18, 101],[19, 99],[20, 100],[21, 88],[22, 90],[23, 91],[24, 91],[25, 88],[26, 101],[27, 99],[28, 96],[29, 95],[30, 95],[31, 100],[32, 96],[33, 98],[34, 97],[35, 97],[36, 96],[37, 97]])

export const dark_Breadcrumb = n39
export const dark_Link = n39
export const dark_base_Breadcrumb = n39
export const dark_base_Link = n39
const n40 = t([[14, 8],[15, 2],[16, 4],[17, 13],[18, 13],[19, 12],[20, 12],[21, 13],[22, 1],[23, 2],[24, 2],[25, 13],[26, 13],[27, 6],[28, 9],[29, 10],[30, 10],[31, 12],[32, 2],[33, 3],[34, 2],[35, 2],[36, 9],[37, 8]])

export const light_base_ListItem = n40
const n41 = t([[14, 9],[15, 3],[16, 5],[17, 0],[18, 13],[19, 11],[20, 12],[21, 0],[22, 2],[23, 3],[24, 3],[25, 0],[26, 13],[27, 7],[28, 10],[29, 11],[30, 11],[31, 12],[32, 3],[33, 4],[34, 3],[35, 3],[36, 8],[37, 9]])

export const light_base_Card = n41
export const light_base_CardEyebrow = n41
export const light_base_CardTitle = n41
export const light_base_Alert = n41
export const light_base_AlertHeading = n41
export const light_base_Message = n41
export const light_base_MessageHeading = n41
export const light_base_Input = n41
export const light_base_Select = n41
export const light_base_Label = n41
export const light_base_Badge = n41
export const light_base_TextArea = n41
const n42 = t([[14, 9],[15, 3],[16, 5],[17, 0],[18, 13],[19, 11],[20, 12],[21, 0],[22, 2],[23, 3],[24, 3],[25, 0],[26, 13],[27, 7],[28, 10],[29, 11],[30, 11],[31, 12],[32, 5],[33, 6],[34, 5],[35, 5],[36, 8],[37, 9]])

export const light_base_Checkbox = n42
const n43 = t([[14, 11],[15, 5],[16, 7],[17, 2],[18, 1],[19, 9],[20, 10],[21, 2],[22, 4],[23, 5],[24, 5],[25, 2],[26, 1],[27, 9],[28, 12],[29, 12],[30, 12],[31, 10],[32, 5],[33, 6],[34, 5],[35, 5],[36, 6],[37, 11]])

export const light_base_Switch = n43
export const light_base_TooltipContent = n43
export const light_base_SliderTrack = n43
const n44 = t([[14, 4],[15, 10],[16, 8],[17, 12],[18, 12],[19, 13],[20, 13],[21, 12],[22, 11],[23, 10],[24, 10],[25, 12],[26, 12],[27, 6],[28, 3],[29, 2],[30, 2],[31, 13],[32, 10],[33, 9],[34, 10],[35, 10],[36, 1],[37, 4]])

export const light_base_SwitchThumb = n44
const n45 = t([[14, 10],[15, 4],[16, 6],[17, 1],[18, 0],[19, 10],[20, 11],[21, 1],[22, 3],[23, 4],[24, 4],[25, 1],[26, 0],[27, 8],[28, 11],[29, 12],[30, 12],[31, 11],[32, 4],[33, 5],[34, 4],[35, 4],[36, 7],[37, 10]])

export const light_base_DrawerFrame = n45
export const light_base_Progress = n45
export const light_base_TooltipArrow = n45
const n46 = t([[14, 9],[15, 3],[16, 5],[17, 0],[18, 13],[19, 11],[20, 12],[21, 0],[22, 2],[23, 3],[24, 3],[25, 0],[26, 13],[27, 7],[28, 10],[29, 11],[30, 11],[31, 12],[32, 4],[33, 5],[34, 4],[35, 4],[36, 8],[37, 9]])

export const light_base_RadioGroupItem = n46
const n47 = t([[14, 0],[15, 6],[16, 4],[17, 9],[18, 10],[19, 2],[20, 1],[21, 9],[22, 7],[23, 6],[24, 6],[25, 9],[26, 10],[27, 2],[28, 13],[29, 13],[30, 13],[31, 1],[32, 6],[33, 5],[34, 6],[35, 6],[36, 5],[37, 0]])

export const light_base_SliderTrackActive = n47
const n48 = t([[14, 2],[15, 8],[16, 6],[17, 11],[18, 12],[19, 0],[20, 13],[21, 11],[22, 9],[23, 8],[24, 8],[25, 11],[26, 12],[27, 4],[28, 1],[29, 0],[30, 0],[31, 13],[32, 8],[33, 7],[34, 8],[35, 8],[36, 3],[37, 2]])

export const light_base_SliderThumb = n48
export const light_base_Tooltip = n48
export const light_base_ProgressIndicator = n48
const n49 = t([[14, 9],[15, 3],[16, 5],[17, 0],[18, 13],[19, 11],[20, 12],[21, 0],[22, 2],[23, 3],[24, 3],[25, 0],[26, 13],[27, 11],[28, 8],[29, 7],[30, 7],[31, 12],[32, 3],[33, 4],[34, 3],[35, 3],[36, 8],[37, 9]])

export const light_base_Breadcrumb = n49
export const light_base_Link = n49
const n50 = t([[14, 22],[15, 15],[16, 17],[17, 176],[18, 176],[19, 175],[20, 175],[21, 176],[22, 14],[23, 15],[24, 15],[25, 176],[26, 176],[27, 19],[28, 23],[29, 24],[30, 24],[31, 175],[32, 15],[33, 16],[34, 15],[35, 15],[36, 24],[37, 22]])

export const light_brand_ListItem = n50
export const light_accent_ListItem = n50
const n51 = t([[14, 23],[15, 16],[16, 18],[17, 0],[18, 176],[19, 11],[20, 175],[21, 0],[22, 15],[23, 16],[24, 16],[25, 0],[26, 176],[27, 21],[28, 24],[29, 25],[30, 25],[31, 175],[32, 16],[33, 17],[34, 16],[35, 16],[36, 23],[37, 23]])

export const light_brand_Card = n51
export const light_brand_CardEyebrow = n51
export const light_brand_CardTitle = n51
export const light_brand_Alert = n51
export const light_brand_AlertHeading = n51
export const light_brand_Message = n51
export const light_brand_MessageHeading = n51
export const light_brand_Input = n51
export const light_brand_Select = n51
export const light_brand_Label = n51
export const light_brand_Badge = n51
export const light_brand_TextArea = n51
export const light_accent_Card = n51
export const light_accent_CardEyebrow = n51
export const light_accent_CardTitle = n51
export const light_accent_Alert = n51
export const light_accent_AlertHeading = n51
export const light_accent_Message = n51
export const light_accent_MessageHeading = n51
export const light_accent_Input = n51
export const light_accent_Select = n51
export const light_accent_Label = n51
export const light_accent_Badge = n51
export const light_accent_TextArea = n51
const n52 = t([[14, 23],[15, 16],[16, 18],[17, 0],[18, 176],[19, 11],[20, 175],[21, 23],[22, 25],[23, 22],[24, 22],[25, 0],[26, 176],[27, 0],[28, 0],[29, 0],[30, 0],[31, 175],[32, 23],[33, 25],[34, 22],[35, 22],[36, 23],[37, 23]])

export const light_brand_Button = n52
export const light_accent_Button = n52
const n53 = t([[14, 23],[15, 16],[16, 18],[17, 0],[18, 176],[19, 11],[20, 175],[21, 0],[22, 15],[23, 16],[24, 16],[25, 0],[26, 176],[27, 21],[28, 24],[29, 25],[30, 25],[31, 175],[32, 18],[33, 19],[34, 18],[35, 18],[36, 23],[37, 23]])

export const light_brand_Checkbox = n53
export const light_accent_Checkbox = n53
const n54 = t([[14, 25],[15, 18],[16, 21],[17, 15],[18, 14],[19, 24],[20, 25],[21, 15],[22, 17],[23, 18],[24, 18],[25, 15],[26, 14],[27, 23],[28, 11],[29, 175],[30, 175],[31, 25],[32, 18],[33, 19],[34, 18],[35, 18],[36, 21],[37, 25]])

export const light_brand_Switch = n54
export const light_brand_TooltipContent = n54
export const light_brand_SliderTrack = n54
export const light_accent_Switch = n54
export const light_accent_TooltipContent = n54
export const light_accent_SliderTrack = n54
const n55 = t([[14, 18],[15, 25],[16, 23],[17, 175],[18, 175],[19, 176],[20, 176],[21, 175],[22, 11],[23, 25],[24, 25],[25, 175],[26, 175],[27, 21],[28, 17],[29, 16],[30, 16],[31, 176],[32, 25],[33, 24],[34, 25],[35, 25],[36, 14],[37, 18]])

export const light_brand_SwitchThumb = n55
export const light_accent_SwitchThumb = n55
const n56 = t([[14, 24],[15, 17],[16, 19],[17, 14],[18, 0],[19, 25],[20, 11],[21, 14],[22, 16],[23, 17],[24, 17],[25, 14],[26, 0],[27, 22],[28, 25],[29, 11],[30, 11],[31, 11],[32, 17],[33, 18],[34, 17],[35, 17],[36, 22],[37, 24]])

export const light_brand_DrawerFrame = n56
export const light_brand_Progress = n56
export const light_brand_TooltipArrow = n56
export const light_accent_DrawerFrame = n56
export const light_accent_Progress = n56
export const light_accent_TooltipArrow = n56
const n57 = t([[14, 23],[15, 16],[16, 18],[17, 0],[18, 176],[19, 11],[20, 175],[21, 0],[22, 15],[23, 16],[24, 16],[25, 0],[26, 176],[27, 21],[28, 24],[29, 25],[30, 25],[31, 175],[32, 17],[33, 18],[34, 17],[35, 17],[36, 23],[37, 23]])

export const light_brand_RadioGroupItem = n57
export const light_accent_RadioGroupItem = n57
const n58 = t([[14, 14],[15, 21],[16, 18],[17, 24],[18, 25],[19, 15],[20, 14],[21, 24],[22, 22],[23, 21],[24, 21],[25, 24],[26, 25],[27, 16],[28, 0],[29, 176],[30, 176],[31, 14],[32, 21],[33, 19],[34, 21],[35, 21],[36, 18],[37, 14]])

export const light_brand_SliderTrackActive = n58
export const light_accent_SliderTrackActive = n58
const n59 = t([[14, 16],[15, 23],[16, 21],[17, 11],[18, 175],[19, 0],[20, 176],[21, 11],[22, 24],[23, 23],[24, 23],[25, 11],[26, 175],[27, 18],[28, 15],[29, 14],[30, 14],[31, 176],[32, 23],[33, 22],[34, 23],[35, 23],[36, 16],[37, 16]])

export const light_brand_SliderThumb = n59
export const light_brand_Tooltip = n59
export const light_brand_ProgressIndicator = n59
export const light_accent_SliderThumb = n59
export const light_accent_Tooltip = n59
export const light_accent_ProgressIndicator = n59
const n60 = t([[14, 23],[15, 16],[16, 18],[17, 0],[18, 176],[19, 11],[20, 175],[21, 0],[22, 15],[23, 16],[24, 16],[25, 0],[26, 176],[27, 11],[28, 22],[29, 21],[30, 21],[31, 175],[32, 16],[33, 17],[34, 16],[35, 16],[36, 23],[37, 23]])

export const light_brand_Breadcrumb = n60
export const light_brand_Link = n60
export const light_accent_Breadcrumb = n60
export const light_accent_Link = n60
const n61 = t([[14, 34],[15, 27],[16, 29],[17, 178],[18, 178],[19, 177],[20, 177],[21, 178],[22, 26],[23, 27],[24, 27],[25, 178],[26, 178],[27, 31],[28, 35],[29, 36],[30, 36],[31, 177],[32, 27],[33, 28],[34, 27],[35, 27],[36, 36],[37, 34]])

export const light_help_ListItem = n61
const n62 = t([[14, 35],[15, 28],[16, 30],[17, 0],[18, 178],[19, 11],[20, 177],[21, 0],[22, 27],[23, 28],[24, 28],[25, 0],[26, 178],[27, 33],[28, 36],[29, 37],[30, 37],[31, 177],[32, 28],[33, 29],[34, 28],[35, 28],[36, 35],[37, 35]])

export const light_help_Card = n62
export const light_help_CardEyebrow = n62
export const light_help_CardTitle = n62
export const light_help_Alert = n62
export const light_help_AlertHeading = n62
export const light_help_Message = n62
export const light_help_MessageHeading = n62
export const light_help_Input = n62
export const light_help_Select = n62
export const light_help_Label = n62
export const light_help_Badge = n62
export const light_help_TextArea = n62
const n63 = t([[14, 35],[15, 28],[16, 30],[17, 0],[18, 178],[19, 11],[20, 177],[21, 35],[22, 37],[23, 34],[24, 34],[25, 0],[26, 178],[27, 0],[28, 0],[29, 0],[30, 0],[31, 177],[32, 35],[33, 37],[34, 34],[35, 34],[36, 35],[37, 35]])

export const light_help_Button = n63
const n64 = t([[14, 35],[15, 28],[16, 30],[17, 0],[18, 178],[19, 11],[20, 177],[21, 0],[22, 27],[23, 28],[24, 28],[25, 0],[26, 178],[27, 33],[28, 36],[29, 37],[30, 37],[31, 177],[32, 30],[33, 31],[34, 30],[35, 30],[36, 35],[37, 35]])

export const light_help_Checkbox = n64
const n65 = t([[14, 37],[15, 30],[16, 33],[17, 27],[18, 26],[19, 36],[20, 37],[21, 27],[22, 29],[23, 30],[24, 30],[25, 27],[26, 26],[27, 35],[28, 11],[29, 177],[30, 177],[31, 37],[32, 30],[33, 31],[34, 30],[35, 30],[36, 33],[37, 37]])

export const light_help_Switch = n65
export const light_help_TooltipContent = n65
export const light_help_SliderTrack = n65
const n66 = t([[14, 30],[15, 37],[16, 35],[17, 177],[18, 177],[19, 178],[20, 178],[21, 177],[22, 11],[23, 37],[24, 37],[25, 177],[26, 177],[27, 33],[28, 29],[29, 28],[30, 28],[31, 178],[32, 37],[33, 36],[34, 37],[35, 37],[36, 26],[37, 30]])

export const light_help_SwitchThumb = n66
const n67 = t([[14, 36],[15, 29],[16, 31],[17, 26],[18, 0],[19, 37],[20, 11],[21, 26],[22, 28],[23, 29],[24, 29],[25, 26],[26, 0],[27, 34],[28, 37],[29, 11],[30, 11],[31, 11],[32, 29],[33, 30],[34, 29],[35, 29],[36, 34],[37, 36]])

export const light_help_DrawerFrame = n67
export const light_help_Progress = n67
export const light_help_TooltipArrow = n67
const n68 = t([[14, 35],[15, 28],[16, 30],[17, 0],[18, 178],[19, 11],[20, 177],[21, 0],[22, 27],[23, 28],[24, 28],[25, 0],[26, 178],[27, 33],[28, 36],[29, 37],[30, 37],[31, 177],[32, 29],[33, 30],[34, 29],[35, 29],[36, 35],[37, 35]])

export const light_help_RadioGroupItem = n68
const n69 = t([[14, 26],[15, 33],[16, 30],[17, 36],[18, 37],[19, 27],[20, 26],[21, 36],[22, 34],[23, 33],[24, 33],[25, 36],[26, 37],[27, 28],[28, 0],[29, 178],[30, 178],[31, 26],[32, 33],[33, 31],[34, 33],[35, 33],[36, 30],[37, 26]])

export const light_help_SliderTrackActive = n69
const n70 = t([[14, 28],[15, 35],[16, 33],[17, 11],[18, 177],[19, 0],[20, 178],[21, 11],[22, 36],[23, 35],[24, 35],[25, 11],[26, 177],[27, 30],[28, 27],[29, 26],[30, 26],[31, 178],[32, 35],[33, 34],[34, 35],[35, 35],[36, 28],[37, 28]])

export const light_help_SliderThumb = n70
export const light_help_Tooltip = n70
export const light_help_ProgressIndicator = n70
const n71 = t([[14, 35],[15, 28],[16, 30],[17, 0],[18, 178],[19, 11],[20, 177],[21, 0],[22, 27],[23, 28],[24, 28],[25, 0],[26, 178],[27, 11],[28, 34],[29, 33],[30, 33],[31, 177],[32, 28],[33, 29],[34, 28],[35, 28],[36, 35],[37, 35]])

export const light_help_Breadcrumb = n71
export const light_help_Link = n71
const n72 = t([[14, 46],[15, 39],[16, 41],[17, 180],[18, 180],[19, 179],[20, 179],[21, 180],[22, 38],[23, 39],[24, 39],[25, 180],[26, 180],[27, 43],[28, 47],[29, 48],[30, 48],[31, 179],[32, 39],[33, 40],[34, 39],[35, 39],[36, 48],[37, 46]])

export const light_success_ListItem = n72
const n73 = t([[14, 47],[15, 40],[16, 42],[17, 0],[18, 180],[19, 11],[20, 179],[21, 0],[22, 39],[23, 40],[24, 40],[25, 0],[26, 180],[27, 45],[28, 48],[29, 49],[30, 49],[31, 179],[32, 40],[33, 41],[34, 40],[35, 40],[36, 47],[37, 47]])

export const light_success_Card = n73
export const light_success_CardEyebrow = n73
export const light_success_CardTitle = n73
export const light_success_Alert = n73
export const light_success_AlertHeading = n73
export const light_success_Message = n73
export const light_success_MessageHeading = n73
export const light_success_Input = n73
export const light_success_Select = n73
export const light_success_Label = n73
export const light_success_Badge = n73
export const light_success_TextArea = n73
const n74 = t([[14, 47],[15, 40],[16, 42],[17, 0],[18, 180],[19, 11],[20, 179],[21, 47],[22, 49],[23, 46],[24, 46],[25, 0],[26, 180],[27, 0],[28, 0],[29, 0],[30, 0],[31, 179],[32, 47],[33, 49],[34, 46],[35, 46],[36, 47],[37, 47]])

export const light_success_Button = n74
const n75 = t([[14, 47],[15, 40],[16, 42],[17, 0],[18, 180],[19, 11],[20, 179],[21, 0],[22, 39],[23, 40],[24, 40],[25, 0],[26, 180],[27, 45],[28, 48],[29, 49],[30, 49],[31, 179],[32, 42],[33, 43],[34, 42],[35, 42],[36, 47],[37, 47]])

export const light_success_Checkbox = n75
const n76 = t([[14, 49],[15, 42],[16, 45],[17, 39],[18, 38],[19, 48],[20, 49],[21, 39],[22, 41],[23, 42],[24, 42],[25, 39],[26, 38],[27, 47],[28, 11],[29, 179],[30, 179],[31, 49],[32, 42],[33, 43],[34, 42],[35, 42],[36, 45],[37, 49]])

export const light_success_Switch = n76
export const light_success_TooltipContent = n76
export const light_success_SliderTrack = n76
const n77 = t([[14, 42],[15, 49],[16, 47],[17, 179],[18, 179],[19, 180],[20, 180],[21, 179],[22, 11],[23, 49],[24, 49],[25, 179],[26, 179],[27, 45],[28, 41],[29, 40],[30, 40],[31, 180],[32, 49],[33, 48],[34, 49],[35, 49],[36, 38],[37, 42]])

export const light_success_SwitchThumb = n77
const n78 = t([[14, 48],[15, 41],[16, 43],[17, 38],[18, 0],[19, 49],[20, 11],[21, 38],[22, 40],[23, 41],[24, 41],[25, 38],[26, 0],[27, 46],[28, 49],[29, 11],[30, 11],[31, 11],[32, 41],[33, 42],[34, 41],[35, 41],[36, 46],[37, 48]])

export const light_success_DrawerFrame = n78
export const light_success_Progress = n78
export const light_success_TooltipArrow = n78
const n79 = t([[14, 47],[15, 40],[16, 42],[17, 0],[18, 180],[19, 11],[20, 179],[21, 0],[22, 39],[23, 40],[24, 40],[25, 0],[26, 180],[27, 45],[28, 48],[29, 49],[30, 49],[31, 179],[32, 41],[33, 42],[34, 41],[35, 41],[36, 47],[37, 47]])

export const light_success_RadioGroupItem = n79
const n80 = t([[14, 38],[15, 45],[16, 42],[17, 48],[18, 49],[19, 39],[20, 38],[21, 48],[22, 46],[23, 45],[24, 45],[25, 48],[26, 49],[27, 40],[28, 0],[29, 180],[30, 180],[31, 38],[32, 45],[33, 43],[34, 45],[35, 45],[36, 42],[37, 38]])

export const light_success_SliderTrackActive = n80
const n81 = t([[14, 40],[15, 47],[16, 45],[17, 11],[18, 179],[19, 0],[20, 180],[21, 11],[22, 48],[23, 47],[24, 47],[25, 11],[26, 179],[27, 42],[28, 39],[29, 38],[30, 38],[31, 180],[32, 47],[33, 46],[34, 47],[35, 47],[36, 40],[37, 40]])

export const light_success_SliderThumb = n81
export const light_success_Tooltip = n81
export const light_success_ProgressIndicator = n81
const n82 = t([[14, 47],[15, 40],[16, 42],[17, 0],[18, 180],[19, 11],[20, 179],[21, 0],[22, 39],[23, 40],[24, 40],[25, 0],[26, 180],[27, 11],[28, 46],[29, 45],[30, 45],[31, 179],[32, 40],[33, 41],[34, 40],[35, 40],[36, 47],[37, 47]])

export const light_success_Breadcrumb = n82
export const light_success_Link = n82
const n83 = t([[14, 70],[15, 63],[16, 65],[17, 182],[18, 182],[19, 181],[20, 181],[21, 182],[22, 62],[23, 63],[24, 63],[25, 182],[26, 182],[27, 67],[28, 71],[29, 72],[30, 72],[31, 181],[32, 63],[33, 64],[34, 63],[35, 63],[36, 72],[37, 70]])

export const light_warning_ListItem = n83
const n84 = t([[14, 71],[15, 64],[16, 66],[17, 0],[18, 182],[19, 11],[20, 181],[21, 0],[22, 63],[23, 64],[24, 64],[25, 0],[26, 182],[27, 69],[28, 72],[29, 73],[30, 73],[31, 181],[32, 64],[33, 65],[34, 64],[35, 64],[36, 71],[37, 71]])

export const light_warning_Card = n84
export const light_warning_CardEyebrow = n84
export const light_warning_CardTitle = n84
export const light_warning_Alert = n84
export const light_warning_AlertHeading = n84
export const light_warning_Message = n84
export const light_warning_MessageHeading = n84
export const light_warning_Input = n84
export const light_warning_Select = n84
export const light_warning_Label = n84
export const light_warning_Badge = n84
export const light_warning_TextArea = n84
const n85 = t([[14, 71],[15, 64],[16, 66],[17, 0],[18, 182],[19, 11],[20, 181],[21, 71],[22, 73],[23, 70],[24, 70],[25, 0],[26, 182],[27, 0],[28, 0],[29, 0],[30, 0],[31, 181],[32, 71],[33, 73],[34, 70],[35, 70],[36, 71],[37, 71]])

export const light_warning_Button = n85
const n86 = t([[14, 71],[15, 64],[16, 66],[17, 0],[18, 182],[19, 11],[20, 181],[21, 0],[22, 63],[23, 64],[24, 64],[25, 0],[26, 182],[27, 69],[28, 72],[29, 73],[30, 73],[31, 181],[32, 66],[33, 67],[34, 66],[35, 66],[36, 71],[37, 71]])

export const light_warning_Checkbox = n86
const n87 = t([[14, 73],[15, 66],[16, 69],[17, 63],[18, 62],[19, 72],[20, 73],[21, 63],[22, 65],[23, 66],[24, 66],[25, 63],[26, 62],[27, 71],[28, 11],[29, 181],[30, 181],[31, 73],[32, 66],[33, 67],[34, 66],[35, 66],[36, 69],[37, 73]])

export const light_warning_Switch = n87
export const light_warning_TooltipContent = n87
export const light_warning_SliderTrack = n87
const n88 = t([[14, 66],[15, 73],[16, 71],[17, 181],[18, 181],[19, 182],[20, 182],[21, 181],[22, 11],[23, 73],[24, 73],[25, 181],[26, 181],[27, 69],[28, 65],[29, 64],[30, 64],[31, 182],[32, 73],[33, 72],[34, 73],[35, 73],[36, 62],[37, 66]])

export const light_warning_SwitchThumb = n88
const n89 = t([[14, 72],[15, 65],[16, 67],[17, 62],[18, 0],[19, 73],[20, 11],[21, 62],[22, 64],[23, 65],[24, 65],[25, 62],[26, 0],[27, 70],[28, 73],[29, 11],[30, 11],[31, 11],[32, 65],[33, 66],[34, 65],[35, 65],[36, 70],[37, 72]])

export const light_warning_DrawerFrame = n89
export const light_warning_Progress = n89
export const light_warning_TooltipArrow = n89
const n90 = t([[14, 71],[15, 64],[16, 66],[17, 0],[18, 182],[19, 11],[20, 181],[21, 0],[22, 63],[23, 64],[24, 64],[25, 0],[26, 182],[27, 69],[28, 72],[29, 73],[30, 73],[31, 181],[32, 65],[33, 66],[34, 65],[35, 65],[36, 71],[37, 71]])

export const light_warning_RadioGroupItem = n90
const n91 = t([[14, 62],[15, 69],[16, 66],[17, 72],[18, 73],[19, 63],[20, 62],[21, 72],[22, 70],[23, 69],[24, 69],[25, 72],[26, 73],[27, 64],[28, 0],[29, 182],[30, 182],[31, 62],[32, 69],[33, 67],[34, 69],[35, 69],[36, 66],[37, 62]])

export const light_warning_SliderTrackActive = n91
const n92 = t([[14, 64],[15, 71],[16, 69],[17, 11],[18, 181],[19, 0],[20, 182],[21, 11],[22, 72],[23, 71],[24, 71],[25, 11],[26, 181],[27, 66],[28, 63],[29, 62],[30, 62],[31, 182],[32, 71],[33, 70],[34, 71],[35, 71],[36, 64],[37, 64]])

export const light_warning_SliderThumb = n92
export const light_warning_Tooltip = n92
export const light_warning_ProgressIndicator = n92
const n93 = t([[14, 71],[15, 64],[16, 66],[17, 0],[18, 182],[19, 11],[20, 181],[21, 0],[22, 63],[23, 64],[24, 64],[25, 0],[26, 182],[27, 11],[28, 70],[29, 69],[30, 69],[31, 181],[32, 64],[33, 65],[34, 64],[35, 64],[36, 71],[37, 71]])

export const light_warning_Breadcrumb = n93
export const light_warning_Link = n93
const n94 = t([[14, 58],[15, 51],[16, 53],[17, 184],[18, 184],[19, 183],[20, 183],[21, 184],[22, 50],[23, 51],[24, 51],[25, 184],[26, 184],[27, 55],[28, 59],[29, 60],[30, 60],[31, 183],[32, 51],[33, 52],[34, 51],[35, 51],[36, 60],[37, 58]])

export const light_error_ListItem = n94
const n95 = t([[14, 59],[15, 52],[16, 54],[17, 0],[18, 184],[19, 11],[20, 183],[21, 0],[22, 51],[23, 52],[24, 52],[25, 0],[26, 184],[27, 57],[28, 60],[29, 61],[30, 61],[31, 183],[32, 52],[33, 53],[34, 52],[35, 52],[36, 59],[37, 59]])

export const light_error_Card = n95
export const light_error_CardEyebrow = n95
export const light_error_CardTitle = n95
export const light_error_Alert = n95
export const light_error_AlertHeading = n95
export const light_error_Message = n95
export const light_error_MessageHeading = n95
export const light_error_Input = n95
export const light_error_Select = n95
export const light_error_Label = n95
export const light_error_Badge = n95
export const light_error_TextArea = n95
const n96 = t([[14, 59],[15, 52],[16, 54],[17, 0],[18, 184],[19, 11],[20, 183],[21, 59],[22, 61],[23, 58],[24, 58],[25, 0],[26, 184],[27, 0],[28, 0],[29, 0],[30, 0],[31, 183],[32, 59],[33, 61],[34, 58],[35, 58],[36, 59],[37, 59]])

export const light_error_Button = n96
const n97 = t([[14, 59],[15, 52],[16, 54],[17, 0],[18, 184],[19, 11],[20, 183],[21, 0],[22, 51],[23, 52],[24, 52],[25, 0],[26, 184],[27, 57],[28, 60],[29, 61],[30, 61],[31, 183],[32, 54],[33, 55],[34, 54],[35, 54],[36, 59],[37, 59]])

export const light_error_Checkbox = n97
const n98 = t([[14, 61],[15, 54],[16, 57],[17, 51],[18, 50],[19, 60],[20, 61],[21, 51],[22, 53],[23, 54],[24, 54],[25, 51],[26, 50],[27, 59],[28, 11],[29, 183],[30, 183],[31, 61],[32, 54],[33, 55],[34, 54],[35, 54],[36, 57],[37, 61]])

export const light_error_Switch = n98
export const light_error_TooltipContent = n98
export const light_error_SliderTrack = n98
const n99 = t([[14, 54],[15, 61],[16, 59],[17, 183],[18, 183],[19, 184],[20, 184],[21, 183],[22, 11],[23, 61],[24, 61],[25, 183],[26, 183],[27, 57],[28, 53],[29, 52],[30, 52],[31, 184],[32, 61],[33, 60],[34, 61],[35, 61],[36, 50],[37, 54]])

export const light_error_SwitchThumb = n99
const n100 = t([[14, 60],[15, 53],[16, 55],[17, 50],[18, 0],[19, 61],[20, 11],[21, 50],[22, 52],[23, 53],[24, 53],[25, 50],[26, 0],[27, 58],[28, 61],[29, 11],[30, 11],[31, 11],[32, 53],[33, 54],[34, 53],[35, 53],[36, 58],[37, 60]])

export const light_error_DrawerFrame = n100
export const light_error_Progress = n100
export const light_error_TooltipArrow = n100
const n101 = t([[14, 59],[15, 52],[16, 54],[17, 0],[18, 184],[19, 11],[20, 183],[21, 0],[22, 51],[23, 52],[24, 52],[25, 0],[26, 184],[27, 57],[28, 60],[29, 61],[30, 61],[31, 183],[32, 53],[33, 54],[34, 53],[35, 53],[36, 59],[37, 59]])

export const light_error_RadioGroupItem = n101
const n102 = t([[14, 50],[15, 57],[16, 54],[17, 60],[18, 61],[19, 51],[20, 50],[21, 60],[22, 58],[23, 57],[24, 57],[25, 60],[26, 61],[27, 52],[28, 0],[29, 184],[30, 184],[31, 50],[32, 57],[33, 55],[34, 57],[35, 57],[36, 54],[37, 50]])

export const light_error_SliderTrackActive = n102
const n103 = t([[14, 52],[15, 59],[16, 57],[17, 11],[18, 183],[19, 0],[20, 184],[21, 11],[22, 60],[23, 59],[24, 59],[25, 11],[26, 183],[27, 54],[28, 51],[29, 50],[30, 50],[31, 184],[32, 59],[33, 58],[34, 59],[35, 59],[36, 52],[37, 52]])

export const light_error_SliderThumb = n103
export const light_error_Tooltip = n103
export const light_error_ProgressIndicator = n103
const n104 = t([[14, 59],[15, 52],[16, 54],[17, 0],[18, 184],[19, 11],[20, 183],[21, 0],[22, 51],[23, 52],[24, 52],[25, 0],[26, 184],[27, 11],[28, 58],[29, 57],[30, 57],[31, 183],[32, 52],[33, 53],[34, 52],[35, 52],[36, 59],[37, 59]])

export const light_error_Breadcrumb = n104
export const light_error_Link = n104
const n105 = t([[14, 82],[15, 75],[16, 77],[17, 186],[18, 186],[19, 185],[20, 185],[21, 186],[22, 74],[23, 75],[24, 75],[25, 186],[26, 186],[27, 79],[28, 83],[29, 84],[30, 84],[31, 185],[32, 75],[33, 76],[34, 75],[35, 75],[36, 84],[37, 82]])

export const light_info_ListItem = n105
const n106 = t([[14, 83],[15, 76],[16, 78],[17, 0],[18, 186],[19, 11],[20, 185],[21, 0],[22, 75],[23, 76],[24, 76],[25, 0],[26, 186],[27, 81],[28, 84],[29, 85],[30, 85],[31, 185],[32, 76],[33, 77],[34, 76],[35, 76],[36, 83],[37, 83]])

export const light_info_Card = n106
export const light_info_CardEyebrow = n106
export const light_info_CardTitle = n106
export const light_info_Alert = n106
export const light_info_AlertHeading = n106
export const light_info_Message = n106
export const light_info_MessageHeading = n106
export const light_info_Input = n106
export const light_info_Select = n106
export const light_info_Label = n106
export const light_info_Badge = n106
export const light_info_TextArea = n106
const n107 = t([[14, 83],[15, 76],[16, 78],[17, 0],[18, 186],[19, 11],[20, 185],[21, 83],[22, 85],[23, 82],[24, 82],[25, 0],[26, 186],[27, 0],[28, 0],[29, 0],[30, 0],[31, 185],[32, 83],[33, 85],[34, 82],[35, 82],[36, 83],[37, 83]])

export const light_info_Button = n107
const n108 = t([[14, 83],[15, 76],[16, 78],[17, 0],[18, 186],[19, 11],[20, 185],[21, 0],[22, 75],[23, 76],[24, 76],[25, 0],[26, 186],[27, 81],[28, 84],[29, 85],[30, 85],[31, 185],[32, 78],[33, 79],[34, 78],[35, 78],[36, 83],[37, 83]])

export const light_info_Checkbox = n108
const n109 = t([[14, 85],[15, 78],[16, 81],[17, 75],[18, 74],[19, 84],[20, 85],[21, 75],[22, 77],[23, 78],[24, 78],[25, 75],[26, 74],[27, 83],[28, 11],[29, 185],[30, 185],[31, 85],[32, 78],[33, 79],[34, 78],[35, 78],[36, 81],[37, 85]])

export const light_info_Switch = n109
export const light_info_TooltipContent = n109
export const light_info_SliderTrack = n109
const n110 = t([[14, 78],[15, 85],[16, 83],[17, 185],[18, 185],[19, 186],[20, 186],[21, 185],[22, 11],[23, 85],[24, 85],[25, 185],[26, 185],[27, 81],[28, 77],[29, 76],[30, 76],[31, 186],[32, 85],[33, 84],[34, 85],[35, 85],[36, 74],[37, 78]])

export const light_info_SwitchThumb = n110
const n111 = t([[14, 84],[15, 77],[16, 79],[17, 74],[18, 0],[19, 85],[20, 11],[21, 74],[22, 76],[23, 77],[24, 77],[25, 74],[26, 0],[27, 82],[28, 85],[29, 11],[30, 11],[31, 11],[32, 77],[33, 78],[34, 77],[35, 77],[36, 82],[37, 84]])

export const light_info_DrawerFrame = n111
export const light_info_Progress = n111
export const light_info_TooltipArrow = n111
const n112 = t([[14, 83],[15, 76],[16, 78],[17, 0],[18, 186],[19, 11],[20, 185],[21, 0],[22, 75],[23, 76],[24, 76],[25, 0],[26, 186],[27, 81],[28, 84],[29, 85],[30, 85],[31, 185],[32, 77],[33, 78],[34, 77],[35, 77],[36, 83],[37, 83]])

export const light_info_RadioGroupItem = n112
const n113 = t([[14, 74],[15, 81],[16, 78],[17, 84],[18, 85],[19, 75],[20, 74],[21, 84],[22, 82],[23, 81],[24, 81],[25, 84],[26, 85],[27, 76],[28, 0],[29, 186],[30, 186],[31, 74],[32, 81],[33, 79],[34, 81],[35, 81],[36, 78],[37, 74]])

export const light_info_SliderTrackActive = n113
const n114 = t([[14, 76],[15, 83],[16, 81],[17, 11],[18, 185],[19, 0],[20, 186],[21, 11],[22, 84],[23, 83],[24, 83],[25, 11],[26, 185],[27, 78],[28, 75],[29, 74],[30, 74],[31, 186],[32, 83],[33, 82],[34, 83],[35, 83],[36, 76],[37, 76]])

export const light_info_SliderThumb = n114
export const light_info_Tooltip = n114
export const light_info_ProgressIndicator = n114
const n115 = t([[14, 83],[15, 76],[16, 78],[17, 0],[18, 186],[19, 11],[20, 185],[21, 0],[22, 75],[23, 76],[24, 76],[25, 0],[26, 186],[27, 11],[28, 82],[29, 81],[30, 81],[31, 185],[32, 76],[33, 77],[34, 76],[35, 76],[36, 83],[37, 83]])

export const light_info_Breadcrumb = n115
export const light_info_Link = n115
const n116 = t([[14, 23],[15, 104],[16, 106],[17, 88],[18, 188],[19, 99],[20, 187],[21, 88],[22, 103],[23, 104],[24, 104],[25, 88],[26, 188],[27, 109],[28, 111],[29, 112],[30, 112],[31, 187],[32, 23],[33, 112],[34, 111],[35, 111],[36, 23],[37, 23]])

export const dark_brand_ListItem = n116
export const dark_brand_Card = n116
export const dark_brand_CardEyebrow = n116
export const dark_brand_CardTitle = n116
export const dark_brand_Alert = n116
export const dark_brand_AlertHeading = n116
export const dark_brand_Message = n116
export const dark_brand_MessageHeading = n116
export const dark_brand_Input = n116
export const dark_brand_Select = n116
export const dark_brand_Label = n116
export const dark_brand_Badge = n116
export const dark_brand_TextArea = n116
export const dark_accent_ListItem = n116
export const dark_accent_Card = n116
export const dark_accent_CardEyebrow = n116
export const dark_accent_CardTitle = n116
export const dark_accent_Alert = n116
export const dark_accent_AlertHeading = n116
export const dark_accent_Message = n116
export const dark_accent_MessageHeading = n116
export const dark_accent_Input = n116
export const dark_accent_Select = n116
export const dark_accent_Label = n116
export const dark_accent_Badge = n116
export const dark_accent_TextArea = n116
const n117 = t([[14, 23],[15, 104],[16, 106],[17, 88],[18, 188],[19, 99],[20, 187],[21, 23],[22, 112],[23, 110],[24, 110],[25, 88],[26, 188],[27, 88],[28, 88],[29, 88],[30, 88],[31, 187],[32, 23],[33, 112],[34, 110],[35, 110],[36, 23],[37, 23]])

export const dark_brand_Button = n117
export const dark_accent_Button = n117
const n118 = t([[14, 23],[15, 104],[16, 106],[17, 88],[18, 188],[19, 99],[20, 187],[21, 88],[22, 103],[23, 104],[24, 104],[25, 88],[26, 188],[27, 109],[28, 111],[29, 112],[30, 112],[31, 187],[32, 109],[33, 23],[34, 110],[35, 110],[36, 23],[37, 23]])

export const dark_brand_Checkbox = n118
export const dark_accent_Checkbox = n118
const n119 = t([[14, 112],[15, 106],[16, 109],[17, 103],[18, 102],[19, 111],[20, 112],[21, 103],[22, 105],[23, 106],[24, 106],[25, 103],[26, 102],[27, 23],[28, 99],[29, 187],[30, 187],[31, 112],[32, 109],[33, 23],[34, 110],[35, 110],[36, 109],[37, 112]])

export const dark_brand_Switch = n119
export const dark_brand_TooltipContent = n119
export const dark_brand_SliderTrack = n119
export const dark_accent_Switch = n119
export const dark_accent_TooltipContent = n119
export const dark_accent_SliderTrack = n119
const n120 = t([[14, 106],[15, 112],[16, 23],[17, 187],[18, 187],[19, 188],[20, 188],[21, 187],[22, 99],[23, 112],[24, 112],[25, 187],[26, 187],[27, 109],[28, 105],[29, 104],[30, 104],[31, 188],[32, 102],[33, 188],[34, 88],[35, 88],[36, 102],[37, 106]])

export const dark_brand_SwitchThumb = n120
export const dark_accent_SwitchThumb = n120
const n121 = t([[14, 111],[15, 105],[16, 107],[17, 102],[18, 88],[19, 112],[20, 99],[21, 102],[22, 104],[23, 105],[24, 105],[25, 102],[26, 88],[27, 110],[28, 112],[29, 99],[30, 99],[31, 99],[32, 110],[33, 111],[34, 23],[35, 23],[36, 110],[37, 111]])

export const dark_brand_DrawerFrame = n121
export const dark_brand_Progress = n121
export const dark_brand_TooltipArrow = n121
export const dark_accent_DrawerFrame = n121
export const dark_accent_Progress = n121
export const dark_accent_TooltipArrow = n121
const n122 = t([[14, 23],[15, 104],[16, 106],[17, 88],[18, 188],[19, 99],[20, 187],[21, 88],[22, 103],[23, 104],[24, 104],[25, 88],[26, 188],[27, 109],[28, 111],[29, 112],[30, 112],[31, 187],[32, 110],[33, 111],[34, 23],[35, 23],[36, 23],[37, 23]])

export const dark_brand_RadioGroupItem = n122
export const dark_accent_RadioGroupItem = n122
const n123 = t([[14, 102],[15, 109],[16, 106],[17, 111],[18, 112],[19, 103],[20, 102],[21, 111],[22, 110],[23, 109],[24, 109],[25, 111],[26, 112],[27, 104],[28, 88],[29, 188],[30, 188],[31, 102],[32, 106],[33, 104],[34, 105],[35, 105],[36, 106],[37, 102]])

export const dark_brand_SliderTrackActive = n123
export const dark_accent_SliderTrackActive = n123
const n124 = t([[14, 104],[15, 23],[16, 109],[17, 99],[18, 187],[19, 88],[20, 188],[21, 99],[22, 111],[23, 23],[24, 23],[25, 99],[26, 187],[27, 106],[28, 103],[29, 102],[30, 102],[31, 188],[32, 104],[33, 102],[34, 103],[35, 103],[36, 104],[37, 104]])

export const dark_brand_SliderThumb = n124
export const dark_brand_Tooltip = n124
export const dark_brand_ProgressIndicator = n124
export const dark_accent_SliderThumb = n124
export const dark_accent_Tooltip = n124
export const dark_accent_ProgressIndicator = n124
const n125 = t([[14, 23],[15, 104],[16, 106],[17, 88],[18, 188],[19, 99],[20, 187],[21, 88],[22, 103],[23, 104],[24, 104],[25, 88],[26, 188],[27, 99],[28, 110],[29, 109],[30, 109],[31, 187],[32, 23],[33, 112],[34, 111],[35, 111],[36, 23],[37, 23]])

export const dark_brand_Breadcrumb = n125
export const dark_brand_Link = n125
export const dark_accent_Breadcrumb = n125
export const dark_accent_Link = n125
const n126 = t([[14, 122],[15, 115],[16, 117],[17, 88],[18, 190],[19, 99],[20, 189],[21, 88],[22, 114],[23, 115],[24, 115],[25, 88],[26, 190],[27, 120],[28, 123],[29, 124],[30, 124],[31, 189],[32, 122],[33, 124],[34, 123],[35, 123],[36, 122],[37, 122]])

export const dark_help_ListItem = n126
export const dark_help_Card = n126
export const dark_help_CardEyebrow = n126
export const dark_help_CardTitle = n126
export const dark_help_Alert = n126
export const dark_help_AlertHeading = n126
export const dark_help_Message = n126
export const dark_help_MessageHeading = n126
export const dark_help_Input = n126
export const dark_help_Select = n126
export const dark_help_Label = n126
export const dark_help_Badge = n126
export const dark_help_TextArea = n126
const n127 = t([[14, 122],[15, 115],[16, 117],[17, 88],[18, 190],[19, 99],[20, 189],[21, 122],[22, 124],[23, 121],[24, 121],[25, 88],[26, 190],[27, 88],[28, 88],[29, 88],[30, 88],[31, 189],[32, 122],[33, 124],[34, 121],[35, 121],[36, 122],[37, 122]])

export const dark_help_Button = n127
const n128 = t([[14, 122],[15, 115],[16, 117],[17, 88],[18, 190],[19, 99],[20, 189],[21, 88],[22, 114],[23, 115],[24, 115],[25, 88],[26, 190],[27, 120],[28, 123],[29, 124],[30, 124],[31, 189],[32, 120],[33, 122],[34, 121],[35, 121],[36, 122],[37, 122]])

export const dark_help_Checkbox = n128
const n129 = t([[14, 124],[15, 117],[16, 120],[17, 114],[18, 113],[19, 123],[20, 124],[21, 114],[22, 116],[23, 117],[24, 117],[25, 114],[26, 113],[27, 122],[28, 99],[29, 189],[30, 189],[31, 124],[32, 120],[33, 122],[34, 121],[35, 121],[36, 120],[37, 124]])

export const dark_help_Switch = n129
export const dark_help_TooltipContent = n129
export const dark_help_SliderTrack = n129
const n130 = t([[14, 117],[15, 124],[16, 122],[17, 189],[18, 189],[19, 190],[20, 190],[21, 189],[22, 99],[23, 124],[24, 124],[25, 189],[26, 189],[27, 120],[28, 116],[29, 115],[30, 115],[31, 190],[32, 113],[33, 190],[34, 88],[35, 88],[36, 113],[37, 117]])

export const dark_help_SwitchThumb = n130
const n131 = t([[14, 123],[15, 116],[16, 118],[17, 113],[18, 88],[19, 124],[20, 99],[21, 113],[22, 115],[23, 116],[24, 116],[25, 113],[26, 88],[27, 121],[28, 124],[29, 99],[30, 99],[31, 99],[32, 121],[33, 123],[34, 122],[35, 122],[36, 121],[37, 123]])

export const dark_help_DrawerFrame = n131
export const dark_help_Progress = n131
export const dark_help_TooltipArrow = n131
const n132 = t([[14, 122],[15, 115],[16, 117],[17, 88],[18, 190],[19, 99],[20, 189],[21, 88],[22, 114],[23, 115],[24, 115],[25, 88],[26, 190],[27, 120],[28, 123],[29, 124],[30, 124],[31, 189],[32, 121],[33, 123],[34, 122],[35, 122],[36, 122],[37, 122]])

export const dark_help_RadioGroupItem = n132
const n133 = t([[14, 113],[15, 120],[16, 117],[17, 123],[18, 124],[19, 114],[20, 113],[21, 123],[22, 121],[23, 120],[24, 120],[25, 123],[26, 124],[27, 115],[28, 88],[29, 190],[30, 190],[31, 113],[32, 117],[33, 115],[34, 116],[35, 116],[36, 117],[37, 113]])

export const dark_help_SliderTrackActive = n133
const n134 = t([[14, 115],[15, 122],[16, 120],[17, 99],[18, 189],[19, 88],[20, 190],[21, 99],[22, 123],[23, 122],[24, 122],[25, 99],[26, 189],[27, 117],[28, 114],[29, 113],[30, 113],[31, 190],[32, 115],[33, 113],[34, 114],[35, 114],[36, 115],[37, 115]])

export const dark_help_SliderThumb = n134
export const dark_help_Tooltip = n134
export const dark_help_ProgressIndicator = n134
const n135 = t([[14, 122],[15, 115],[16, 117],[17, 88],[18, 190],[19, 99],[20, 189],[21, 88],[22, 114],[23, 115],[24, 115],[25, 88],[26, 190],[27, 99],[28, 121],[29, 120],[30, 120],[31, 189],[32, 122],[33, 124],[34, 123],[35, 123],[36, 122],[37, 122]])

export const dark_help_Breadcrumb = n135
export const dark_help_Link = n135
const n136 = t([[14, 134],[15, 127],[16, 129],[17, 88],[18, 192],[19, 99],[20, 191],[21, 88],[22, 126],[23, 127],[24, 127],[25, 88],[26, 192],[27, 132],[28, 135],[29, 136],[30, 136],[31, 191],[32, 134],[33, 136],[34, 135],[35, 135],[36, 134],[37, 134]])

export const dark_success_ListItem = n136
export const dark_success_Card = n136
export const dark_success_CardEyebrow = n136
export const dark_success_CardTitle = n136
export const dark_success_Alert = n136
export const dark_success_AlertHeading = n136
export const dark_success_Message = n136
export const dark_success_MessageHeading = n136
export const dark_success_Input = n136
export const dark_success_Select = n136
export const dark_success_Label = n136
export const dark_success_Badge = n136
export const dark_success_TextArea = n136
const n137 = t([[14, 134],[15, 127],[16, 129],[17, 88],[18, 192],[19, 99],[20, 191],[21, 134],[22, 136],[23, 133],[24, 133],[25, 88],[26, 192],[27, 88],[28, 88],[29, 88],[30, 88],[31, 191],[32, 134],[33, 136],[34, 133],[35, 133],[36, 134],[37, 134]])

export const dark_success_Button = n137
const n138 = t([[14, 134],[15, 127],[16, 129],[17, 88],[18, 192],[19, 99],[20, 191],[21, 88],[22, 126],[23, 127],[24, 127],[25, 88],[26, 192],[27, 132],[28, 135],[29, 136],[30, 136],[31, 191],[32, 132],[33, 134],[34, 133],[35, 133],[36, 134],[37, 134]])

export const dark_success_Checkbox = n138
const n139 = t([[14, 136],[15, 129],[16, 132],[17, 126],[18, 125],[19, 135],[20, 136],[21, 126],[22, 128],[23, 129],[24, 129],[25, 126],[26, 125],[27, 134],[28, 99],[29, 191],[30, 191],[31, 136],[32, 132],[33, 134],[34, 133],[35, 133],[36, 132],[37, 136]])

export const dark_success_Switch = n139
export const dark_success_TooltipContent = n139
export const dark_success_SliderTrack = n139
const n140 = t([[14, 129],[15, 136],[16, 134],[17, 191],[18, 191],[19, 192],[20, 192],[21, 191],[22, 99],[23, 136],[24, 136],[25, 191],[26, 191],[27, 132],[28, 128],[29, 127],[30, 127],[31, 192],[32, 125],[33, 192],[34, 88],[35, 88],[36, 125],[37, 129]])

export const dark_success_SwitchThumb = n140
const n141 = t([[14, 135],[15, 128],[16, 130],[17, 125],[18, 88],[19, 136],[20, 99],[21, 125],[22, 127],[23, 128],[24, 128],[25, 125],[26, 88],[27, 133],[28, 136],[29, 99],[30, 99],[31, 99],[32, 133],[33, 135],[34, 134],[35, 134],[36, 133],[37, 135]])

export const dark_success_DrawerFrame = n141
export const dark_success_Progress = n141
export const dark_success_TooltipArrow = n141
const n142 = t([[14, 134],[15, 127],[16, 129],[17, 88],[18, 192],[19, 99],[20, 191],[21, 88],[22, 126],[23, 127],[24, 127],[25, 88],[26, 192],[27, 132],[28, 135],[29, 136],[30, 136],[31, 191],[32, 133],[33, 135],[34, 134],[35, 134],[36, 134],[37, 134]])

export const dark_success_RadioGroupItem = n142
const n143 = t([[14, 125],[15, 132],[16, 129],[17, 135],[18, 136],[19, 126],[20, 125],[21, 135],[22, 133],[23, 132],[24, 132],[25, 135],[26, 136],[27, 127],[28, 88],[29, 192],[30, 192],[31, 125],[32, 129],[33, 127],[34, 128],[35, 128],[36, 129],[37, 125]])

export const dark_success_SliderTrackActive = n143
const n144 = t([[14, 127],[15, 134],[16, 132],[17, 99],[18, 191],[19, 88],[20, 192],[21, 99],[22, 135],[23, 134],[24, 134],[25, 99],[26, 191],[27, 129],[28, 126],[29, 125],[30, 125],[31, 192],[32, 127],[33, 125],[34, 126],[35, 126],[36, 127],[37, 127]])

export const dark_success_SliderThumb = n144
export const dark_success_Tooltip = n144
export const dark_success_ProgressIndicator = n144
const n145 = t([[14, 134],[15, 127],[16, 129],[17, 88],[18, 192],[19, 99],[20, 191],[21, 88],[22, 126],[23, 127],[24, 127],[25, 88],[26, 192],[27, 99],[28, 133],[29, 132],[30, 132],[31, 191],[32, 134],[33, 136],[34, 135],[35, 135],[36, 134],[37, 134]])

export const dark_success_Breadcrumb = n145
export const dark_success_Link = n145
const n146 = t([[14, 158],[15, 151],[16, 153],[17, 88],[18, 194],[19, 99],[20, 193],[21, 88],[22, 150],[23, 151],[24, 151],[25, 88],[26, 194],[27, 156],[28, 159],[29, 160],[30, 160],[31, 193],[32, 158],[33, 160],[34, 159],[35, 159],[36, 158],[37, 158]])

export const dark_warning_ListItem = n146
export const dark_warning_Card = n146
export const dark_warning_CardEyebrow = n146
export const dark_warning_CardTitle = n146
export const dark_warning_Alert = n146
export const dark_warning_AlertHeading = n146
export const dark_warning_Message = n146
export const dark_warning_MessageHeading = n146
export const dark_warning_Input = n146
export const dark_warning_Select = n146
export const dark_warning_Label = n146
export const dark_warning_Badge = n146
export const dark_warning_TextArea = n146
const n147 = t([[14, 158],[15, 151],[16, 153],[17, 88],[18, 194],[19, 99],[20, 193],[21, 158],[22, 160],[23, 157],[24, 157],[25, 88],[26, 194],[27, 88],[28, 88],[29, 88],[30, 88],[31, 193],[32, 158],[33, 160],[34, 157],[35, 157],[36, 158],[37, 158]])

export const dark_warning_Button = n147
const n148 = t([[14, 158],[15, 151],[16, 153],[17, 88],[18, 194],[19, 99],[20, 193],[21, 88],[22, 150],[23, 151],[24, 151],[25, 88],[26, 194],[27, 156],[28, 159],[29, 160],[30, 160],[31, 193],[32, 156],[33, 158],[34, 157],[35, 157],[36, 158],[37, 158]])

export const dark_warning_Checkbox = n148
const n149 = t([[14, 160],[15, 153],[16, 156],[17, 150],[18, 149],[19, 159],[20, 160],[21, 150],[22, 152],[23, 153],[24, 153],[25, 150],[26, 149],[27, 158],[28, 99],[29, 193],[30, 193],[31, 160],[32, 156],[33, 158],[34, 157],[35, 157],[36, 156],[37, 160]])

export const dark_warning_Switch = n149
export const dark_warning_TooltipContent = n149
export const dark_warning_SliderTrack = n149
const n150 = t([[14, 153],[15, 160],[16, 158],[17, 193],[18, 193],[19, 194],[20, 194],[21, 193],[22, 99],[23, 160],[24, 160],[25, 193],[26, 193],[27, 156],[28, 152],[29, 151],[30, 151],[31, 194],[32, 149],[33, 194],[34, 88],[35, 88],[36, 149],[37, 153]])

export const dark_warning_SwitchThumb = n150
const n151 = t([[14, 159],[15, 152],[16, 154],[17, 149],[18, 88],[19, 160],[20, 99],[21, 149],[22, 151],[23, 152],[24, 152],[25, 149],[26, 88],[27, 157],[28, 160],[29, 99],[30, 99],[31, 99],[32, 157],[33, 159],[34, 158],[35, 158],[36, 157],[37, 159]])

export const dark_warning_DrawerFrame = n151
export const dark_warning_Progress = n151
export const dark_warning_TooltipArrow = n151
const n152 = t([[14, 158],[15, 151],[16, 153],[17, 88],[18, 194],[19, 99],[20, 193],[21, 88],[22, 150],[23, 151],[24, 151],[25, 88],[26, 194],[27, 156],[28, 159],[29, 160],[30, 160],[31, 193],[32, 157],[33, 159],[34, 158],[35, 158],[36, 158],[37, 158]])

export const dark_warning_RadioGroupItem = n152
const n153 = t([[14, 149],[15, 156],[16, 153],[17, 159],[18, 160],[19, 150],[20, 149],[21, 159],[22, 157],[23, 156],[24, 156],[25, 159],[26, 160],[27, 151],[28, 88],[29, 194],[30, 194],[31, 149],[32, 153],[33, 151],[34, 152],[35, 152],[36, 153],[37, 149]])

export const dark_warning_SliderTrackActive = n153
const n154 = t([[14, 151],[15, 158],[16, 156],[17, 99],[18, 193],[19, 88],[20, 194],[21, 99],[22, 159],[23, 158],[24, 158],[25, 99],[26, 193],[27, 153],[28, 150],[29, 149],[30, 149],[31, 194],[32, 151],[33, 149],[34, 150],[35, 150],[36, 151],[37, 151]])

export const dark_warning_SliderThumb = n154
export const dark_warning_Tooltip = n154
export const dark_warning_ProgressIndicator = n154
const n155 = t([[14, 158],[15, 151],[16, 153],[17, 88],[18, 194],[19, 99],[20, 193],[21, 88],[22, 150],[23, 151],[24, 151],[25, 88],[26, 194],[27, 99],[28, 157],[29, 156],[30, 156],[31, 193],[32, 158],[33, 160],[34, 159],[35, 159],[36, 158],[37, 158]])

export const dark_warning_Breadcrumb = n155
export const dark_warning_Link = n155
const n156 = t([[14, 146],[15, 139],[16, 141],[17, 88],[18, 196],[19, 99],[20, 195],[21, 88],[22, 138],[23, 139],[24, 139],[25, 88],[26, 196],[27, 144],[28, 147],[29, 148],[30, 148],[31, 195],[32, 146],[33, 148],[34, 147],[35, 147],[36, 146],[37, 146]])

export const dark_error_ListItem = n156
export const dark_error_Card = n156
export const dark_error_CardEyebrow = n156
export const dark_error_CardTitle = n156
export const dark_error_Alert = n156
export const dark_error_AlertHeading = n156
export const dark_error_Message = n156
export const dark_error_MessageHeading = n156
export const dark_error_Input = n156
export const dark_error_Select = n156
export const dark_error_Label = n156
export const dark_error_Badge = n156
export const dark_error_TextArea = n156
const n157 = t([[14, 146],[15, 139],[16, 141],[17, 88],[18, 196],[19, 99],[20, 195],[21, 146],[22, 148],[23, 145],[24, 145],[25, 88],[26, 196],[27, 88],[28, 88],[29, 88],[30, 88],[31, 195],[32, 146],[33, 148],[34, 145],[35, 145],[36, 146],[37, 146]])

export const dark_error_Button = n157
const n158 = t([[14, 146],[15, 139],[16, 141],[17, 88],[18, 196],[19, 99],[20, 195],[21, 88],[22, 138],[23, 139],[24, 139],[25, 88],[26, 196],[27, 144],[28, 147],[29, 148],[30, 148],[31, 195],[32, 144],[33, 146],[34, 145],[35, 145],[36, 146],[37, 146]])

export const dark_error_Checkbox = n158
const n159 = t([[14, 148],[15, 141],[16, 144],[17, 138],[18, 137],[19, 147],[20, 148],[21, 138],[22, 140],[23, 141],[24, 141],[25, 138],[26, 137],[27, 146],[28, 99],[29, 195],[30, 195],[31, 148],[32, 144],[33, 146],[34, 145],[35, 145],[36, 144],[37, 148]])

export const dark_error_Switch = n159
export const dark_error_TooltipContent = n159
export const dark_error_SliderTrack = n159
const n160 = t([[14, 141],[15, 148],[16, 146],[17, 195],[18, 195],[19, 196],[20, 196],[21, 195],[22, 99],[23, 148],[24, 148],[25, 195],[26, 195],[27, 144],[28, 140],[29, 139],[30, 139],[31, 196],[32, 137],[33, 196],[34, 88],[35, 88],[36, 137],[37, 141]])

export const dark_error_SwitchThumb = n160
const n161 = t([[14, 147],[15, 140],[16, 142],[17, 137],[18, 88],[19, 148],[20, 99],[21, 137],[22, 139],[23, 140],[24, 140],[25, 137],[26, 88],[27, 145],[28, 148],[29, 99],[30, 99],[31, 99],[32, 145],[33, 147],[34, 146],[35, 146],[36, 145],[37, 147]])

export const dark_error_DrawerFrame = n161
export const dark_error_Progress = n161
export const dark_error_TooltipArrow = n161
const n162 = t([[14, 146],[15, 139],[16, 141],[17, 88],[18, 196],[19, 99],[20, 195],[21, 88],[22, 138],[23, 139],[24, 139],[25, 88],[26, 196],[27, 144],[28, 147],[29, 148],[30, 148],[31, 195],[32, 145],[33, 147],[34, 146],[35, 146],[36, 146],[37, 146]])

export const dark_error_RadioGroupItem = n162
const n163 = t([[14, 137],[15, 144],[16, 141],[17, 147],[18, 148],[19, 138],[20, 137],[21, 147],[22, 145],[23, 144],[24, 144],[25, 147],[26, 148],[27, 139],[28, 88],[29, 196],[30, 196],[31, 137],[32, 141],[33, 139],[34, 140],[35, 140],[36, 141],[37, 137]])

export const dark_error_SliderTrackActive = n163
const n164 = t([[14, 139],[15, 146],[16, 144],[17, 99],[18, 195],[19, 88],[20, 196],[21, 99],[22, 147],[23, 146],[24, 146],[25, 99],[26, 195],[27, 141],[28, 138],[29, 137],[30, 137],[31, 196],[32, 139],[33, 137],[34, 138],[35, 138],[36, 139],[37, 139]])

export const dark_error_SliderThumb = n164
export const dark_error_Tooltip = n164
export const dark_error_ProgressIndicator = n164
const n165 = t([[14, 146],[15, 139],[16, 141],[17, 88],[18, 196],[19, 99],[20, 195],[21, 88],[22, 138],[23, 139],[24, 139],[25, 88],[26, 196],[27, 99],[28, 145],[29, 144],[30, 144],[31, 195],[32, 146],[33, 148],[34, 147],[35, 147],[36, 146],[37, 146]])

export const dark_error_Breadcrumb = n165
export const dark_error_Link = n165
const n166 = t([[14, 170],[15, 163],[16, 165],[17, 88],[18, 198],[19, 99],[20, 197],[21, 88],[22, 162],[23, 163],[24, 163],[25, 88],[26, 198],[27, 168],[28, 171],[29, 172],[30, 172],[31, 197],[32, 170],[33, 172],[34, 171],[35, 171],[36, 170],[37, 170]])

export const dark_info_ListItem = n166
export const dark_info_Card = n166
export const dark_info_CardEyebrow = n166
export const dark_info_CardTitle = n166
export const dark_info_Alert = n166
export const dark_info_AlertHeading = n166
export const dark_info_Message = n166
export const dark_info_MessageHeading = n166
export const dark_info_Input = n166
export const dark_info_Select = n166
export const dark_info_Label = n166
export const dark_info_Badge = n166
export const dark_info_TextArea = n166
const n167 = t([[14, 170],[15, 163],[16, 165],[17, 88],[18, 198],[19, 99],[20, 197],[21, 170],[22, 172],[23, 169],[24, 169],[25, 88],[26, 198],[27, 88],[28, 88],[29, 88],[30, 88],[31, 197],[32, 170],[33, 172],[34, 169],[35, 169],[36, 170],[37, 170]])

export const dark_info_Button = n167
const n168 = t([[14, 170],[15, 163],[16, 165],[17, 88],[18, 198],[19, 99],[20, 197],[21, 88],[22, 162],[23, 163],[24, 163],[25, 88],[26, 198],[27, 168],[28, 171],[29, 172],[30, 172],[31, 197],[32, 168],[33, 170],[34, 169],[35, 169],[36, 170],[37, 170]])

export const dark_info_Checkbox = n168
const n169 = t([[14, 172],[15, 165],[16, 168],[17, 162],[18, 161],[19, 171],[20, 172],[21, 162],[22, 164],[23, 165],[24, 165],[25, 162],[26, 161],[27, 170],[28, 99],[29, 197],[30, 197],[31, 172],[32, 168],[33, 170],[34, 169],[35, 169],[36, 168],[37, 172]])

export const dark_info_Switch = n169
export const dark_info_TooltipContent = n169
export const dark_info_SliderTrack = n169
const n170 = t([[14, 165],[15, 172],[16, 170],[17, 197],[18, 197],[19, 198],[20, 198],[21, 197],[22, 99],[23, 172],[24, 172],[25, 197],[26, 197],[27, 168],[28, 164],[29, 163],[30, 163],[31, 198],[32, 161],[33, 198],[34, 88],[35, 88],[36, 161],[37, 165]])

export const dark_info_SwitchThumb = n170
const n171 = t([[14, 171],[15, 164],[16, 166],[17, 161],[18, 88],[19, 172],[20, 99],[21, 161],[22, 163],[23, 164],[24, 164],[25, 161],[26, 88],[27, 169],[28, 172],[29, 99],[30, 99],[31, 99],[32, 169],[33, 171],[34, 170],[35, 170],[36, 169],[37, 171]])

export const dark_info_DrawerFrame = n171
export const dark_info_Progress = n171
export const dark_info_TooltipArrow = n171
const n172 = t([[14, 170],[15, 163],[16, 165],[17, 88],[18, 198],[19, 99],[20, 197],[21, 88],[22, 162],[23, 163],[24, 163],[25, 88],[26, 198],[27, 168],[28, 171],[29, 172],[30, 172],[31, 197],[32, 169],[33, 171],[34, 170],[35, 170],[36, 170],[37, 170]])

export const dark_info_RadioGroupItem = n172
const n173 = t([[14, 161],[15, 168],[16, 165],[17, 171],[18, 172],[19, 162],[20, 161],[21, 171],[22, 169],[23, 168],[24, 168],[25, 171],[26, 172],[27, 163],[28, 88],[29, 198],[30, 198],[31, 161],[32, 165],[33, 163],[34, 164],[35, 164],[36, 165],[37, 161]])

export const dark_info_SliderTrackActive = n173
const n174 = t([[14, 163],[15, 170],[16, 168],[17, 99],[18, 197],[19, 88],[20, 198],[21, 99],[22, 171],[23, 170],[24, 170],[25, 99],[26, 197],[27, 165],[28, 162],[29, 161],[30, 161],[31, 198],[32, 163],[33, 161],[34, 162],[35, 162],[36, 163],[37, 163]])

export const dark_info_SliderThumb = n174
export const dark_info_Tooltip = n174
export const dark_info_ProgressIndicator = n174
const n175 = t([[14, 170],[15, 163],[16, 165],[17, 88],[18, 198],[19, 99],[20, 197],[21, 88],[22, 162],[23, 163],[24, 163],[25, 88],[26, 198],[27, 99],[28, 169],[29, 168],[30, 168],[31, 197],[32, 170],[33, 172],[34, 171],[35, 171],[36, 170],[37, 170]])

export const dark_info_Breadcrumb = n175
export const dark_info_Link = n175