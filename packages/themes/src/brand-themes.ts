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
  'hsl(0,0%,100%)',
  'hsl(240,4.76%,95.88%)',
  'hsl(240,1.41%,86.08%)',
  'hsl(240,0.83%,76.27%)',
  'hsl(0,0%,66.27%)',
  'hsl(0,0%,56.47%)',
  'hsl(240,0.42%,46.47%)',
  'hsl(240,0.53%,36.67%)',
  'hsl(0,0%,26.67%)',
  'hsl(0,0%,16.86%)',
  'hsl(0,0%,7.06%)',
  'hsl(0,0%,0%)',
  'hsla(215,15%,15.69%, 0)',
  'hsla(240,4.76%,95.88%, 0)',
  'hsl(177.78,36.99%,85.69%)',
  'hsl(175.5,40.82%,80.78%)',
  'hsl(175.47,43.09%,75.88%)',
  'hsl(175.52,44.97%,70.78%)',
  'hsl(175.5,45.98%,65.88%)',
  'hsl(175.53,47%,60.78%)',
  'hsl(175.51,47.56%,55.88%)',
  'hsl(175,48%,50.98%)',
  'hsl(175.07,57.26%,45.88%)',
  'hsl(175.1,70.33%,40.98%)',
  'hsl(174.92,67.82%,34.12%)',
  'hsl(175.23,62.86%,27.45%)',
  'hsl(260,49.09%,89.22%)',
  'hsl(261,55.56%,85.88%)',
  'hsl(261.51,59.55%,82.55%)',
  'hsl(260.91,62.26%,79.22%)',
  'hsl(260.77,63.93%,76.08%)',
  'hsl(260.44,65.47%,72.75%)',
  'hsl(260.77,66.67%,69.41%)',
  'hsl(261.03,67.63%,66.08%)',
  'hsl(260.77,68.42%,62.75%)',
  'hsl(260.98,69.08%,59.41%)',
  'hsl(261.05,45.6%,49.02%)',
  'hsl(260.93,43.88%,38.43%)',
  'hsl(163.64,25.58%,83.14%)',
  'hsl(163.12,27.12%,76.86%)',
  'hsl(163.26,28.48%,70.39%)',
  'hsl(162.22,29.67%,64.31%)',
  'hsl(162.46,30.23%,57.84%)',
  'hsl(161.84,30.89%,51.76%)',
  'hsl(162.07,37.66%,45.29%)',
  'hsl(162.06,48.74%,39.02%)',
  'hsl(161.83,65.27%,32.75%)',
  'hsl(161.85,88.15%,26.47%)',
  'hsl(161.68,82.61%,22.55%)',
  'hsl(162.25,74.74%,18.63%)',
  'hsl(348.89,34.18%,84.51%)',
  'hsl(348.29,38.32%,79.02%)',
  'hsl(349.09,40.74%,73.53%)',
  'hsl(349.57,42.33%,68.04%)',
  'hsl(350.37,42.41%,62.55%)',
  'hsl(350.53,43.38%,57.06%)',
  'hsl(350.64,44.13%,51.57%)',
  'hsl(350.24,52.34%,46.08%)',
  'hsl(350.29,66.02%,40.39%)',
  'hsl(350.4,84.27%,34.9%)',
  'hsl(350.5,80%,29.41%)',
  'hsl(350.67,73.77%,23.92%)',
  'hsl(41.38,50.88%,88.82%)',
  'hsl(41.86,57.33%,85.29%)',
  'hsl(41.38,63.04%,81.96%)',
  'hsl(41.92,65.77%,78.24%)',
  'hsl(42.27,68.75%,74.9%)',
  'hsl(42.52,70.07%,71.18%)',
  'hsl(42.2,71.95%,67.84%)',
  'hsl(42.27,72.53%,64.31%)',
  'hsl(42.16,74%,60.78%)',
  'hsl(42.22,74.31%,57.25%)',
  'hsl(42.33,53.53%,47.25%)',
  'hsl(42.68,51.32%,37.06%)',
  'hsl(214.84,40.26%,84.9%)',
  'hsl(214.47,44.76%,79.41%)',
  'hsl(213.87,46.27%,73.73%)',
  'hsl(213.85,48.15%,68.24%)',
  'hsl(213.26,48.42%,62.75%)',
  'hsl(213.33,49.54%,57.25%)',
  'hsl(213.17,49.8%,51.57%)',
  'hsl(213.24,59.15%,46.08%)',
  'hsl(213.33,73.91%,40.59%)',
  'hsl(213.37,94.41%,35.1%)',
  'hsl(213.33,89.4%,29.61%)',
  'hsl(213.53,83.61%,23.92%)',
  'rgba(0,0,0,0.085)',
  'rgba(0,0,0,0.04)',
  'hsl(215,15%,15.69%)',
  'hsl(215,13.95%,16.86%)',
  'hsl(215,12%,19.61%)',
  'hsl(218.18,8.66%,24.9%)',
  'hsl(216,6.17%,31.76%)',
  'hsl(210,4.81%,40.78%)',
  'hsl(213.33,3.67%,51.96%)',
  'hsl(214.29,3.91%,64.9%)',
  'hsl(216,4.95%,80.2%)',
  'hsl(210,28.57%,97.25%)',
  'hsl(186.86,34.65%,19.8%)',
  'hsl(182.61,41.07%,21.96%)',
  'hsl(180,46.34%,24.12%)',
  'hsl(179.13,51.11%,26.47%)',
  'hsl(177.11,56.46%,28.82%)',
  'hsl(176.84,59.75%,31.18%)',
  'hsl(176.11,62.79%,33.73%)',
  'hsl(175.54,65.41%,36.27%)',
  'hsl(175.52,68.37%,38.43%)',
  'hsl(175.42,48.36%,52.16%)',
  'hsl(175.96,47.59%,63.33%)',
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
  'hsl(261.43,55.68%,65.49%)',
  'hsl(260.27,55.22%,73.73%)',
  'hsl(177.69,30.95%,16.47%)',
  'hsl(171.67,40%,17.65%)',
  'hsl(168.26,47.92%,18.82%)',
  'hsl(166.32,56.44%,19.8%)',
  'hsl(165.67,62.62%,20.98%)',
  'hsl(164.62,69.64%,21.96%)',
  'hsl(163.64,74.58%,23.14%)',
  'hsl(162.86,79.03%,24.31%)',
  'hsl(162.39,84.5%,25.29%)',
  'hsl(162.32,45.89%,40.59%)',
  'hsl(163.33,31.03%,54.51%)',
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
  'hsl(355.65,63.89%,57.65%)',
  'hsl(355.92,62.42%,67.65%)',
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
  'hsl(45,82.54%,75.29%)',
  'hsl(45.79,77.55%,80.78%)',
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
  'hsl(212.24,98.53%,73.33%)',
  'hsl(211.76,96.23%,79.22%)',
  'rgba(0,0,0,0.3)',
  'rgba(0,0,0,0.2)',
  'hsla(175.23,62.86%,27.45%, 0)',
  'hsla(177.78,36.99%,85.69%, 0)',
  'hsla(260.93,43.88%,38.43%, 0)',
  'hsla(260,49.09%,89.22%, 0)',
  'hsla(162.25,74.74%,18.63%, 0)',
  'hsla(163.64,25.58%,83.14%, 0)',
  'hsla(42.68,51.32%,37.06%, 0)',
  'hsla(41.38,50.88%,88.82%, 0)',
  'hsla(350.67,73.77%,23.92%, 0)',
  'hsla(348.89,34.18%,84.51%, 0)',
  'hsla(213.53,83.61%,23.92%, 0)',
  'hsla(214.84,40.26%,84.9%, 0)',
  'hsla(175.96,47.59%,63.33%, 0)',
  'hsla(186.86,34.65%,19.8%, 0)',
  'hsla(260.27,55.22%,73.73%, 0)',
  'hsla(246.67,21.95%,24.12%, 0)',
  'hsla(163.33,31.03%,54.51%, 0)',
  'hsla(177.69,30.95%,16.47%, 0)',
  'hsla(45.79,77.55%,80.78%, 0)',
  'hsla(51.43,10.77%,25.49%, 0)',
  'hsla(355.92,62.42%,67.65%, 0)',
  'hsla(342.86,26.92%,20.39%, 0)',
  'hsla(211.76,96.23%,79.22%, 0)',
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


const n1 = t([[0, 0],[1, 1],[2, 2],[3, 3],[4, 4],[5, 5],[6, 6],[7, 7],[8, 8],[9, 9],[10, 10],[11, 11],[12, 12],[13, 12],[14, 9],[15, 3],[16, 0],[17, 13],[18, 11],[19, 12],[20, 0],[21, 2],[22, 3],[23, 3],[24, 0],[25, 13],[26, 11],[27, 10],[28, 11],[29, 10],[30, 12],[31, 8],[32, 10],[33, 9],[34, 9],[35, 8],[36, 9],[37, 1],[38, 2],[39, 3],[40, 4],[41, 5],[42, 6],[43, 7],[44, 8],[45, 9],[46, 10],[47, 14],[48, 15],[49, 16],[50, 17],[51, 18],[52, 19],[53, 20],[54, 21],[55, 22],[56, 23],[57, 24],[58, 25],[59, 14],[60, 15],[61, 16],[62, 17],[63, 18],[64, 19],[65, 20],[66, 21],[67, 22],[68, 23],[69, 24],[70, 25],[71, 26],[72, 27],[73, 28],[74, 29],[75, 30],[76, 31],[77, 32],[78, 33],[79, 34],[80, 35],[81, 36],[82, 37],[83, 38],[84, 39],[85, 40],[86, 41],[87, 42],[88, 43],[89, 44],[90, 45],[91, 46],[92, 47],[93, 48],[94, 49],[95, 50],[96, 51],[97, 52],[98, 53],[99, 54],[100, 55],[101, 56],[102, 57],[103, 58],[104, 59],[105, 60],[106, 61],[107, 62],[108, 63],[109, 64],[110, 65],[111, 66],[112, 67],[113, 68],[114, 69],[115, 70],[116, 71],[117, 72],[118, 73],[119, 74],[120, 75],[121, 76],[122, 77],[123, 78],[124, 79],[125, 80],[126, 81],[127, 82],[128, 83],[129, 84],[130, 85],[131, 86],[132, 86],[133, 87],[134, 87]])

export const light = n1
const n2 = t([[0, 88],[1, 88],[2, 89],[3, 90],[4, 91],[5, 92],[6, 93],[7, 94],[8, 95],[9, 96],[10, 97],[11, 0],[12, 13],[13, 13],[14, 96],[15, 90],[16, 88],[17, 12],[18, 0],[19, 13],[20, 88],[21, 89],[22, 90],[23, 90],[24, 88],[25, 12],[26, 0],[27, 97],[28, 0],[29, 97],[30, 13],[31, 95],[32, 97],[33, 96],[34, 96],[35, 95],[36, 96],[37, 88],[38, 89],[39, 90],[40, 91],[41, 92],[42, 93],[43, 94],[44, 95],[45, 96],[46, 97],[47, 98],[48, 99],[49, 100],[50, 101],[51, 102],[52, 103],[53, 104],[54, 105],[55, 106],[56, 23],[57, 107],[58, 108],[59, 98],[60, 99],[61, 100],[62, 101],[63, 102],[64, 103],[65, 104],[66, 105],[67, 106],[68, 23],[69, 107],[70, 108],[71, 109],[72, 110],[73, 111],[74, 112],[75, 113],[76, 114],[77, 115],[78, 116],[79, 117],[80, 118],[81, 119],[82, 120],[83, 121],[84, 122],[85, 123],[86, 124],[87, 125],[88, 126],[89, 127],[90, 128],[91, 129],[92, 47],[93, 130],[94, 131],[95, 132],[96, 133],[97, 134],[98, 135],[99, 136],[100, 137],[101, 138],[102, 139],[103, 140],[104, 141],[105, 142],[106, 143],[107, 144],[108, 145],[109, 146],[110, 147],[111, 148],[112, 149],[113, 150],[114, 151],[115, 152],[116, 153],[117, 154],[118, 155],[119, 156],[120, 157],[121, 158],[122, 159],[123, 160],[124, 161],[125, 162],[126, 163],[127, 164],[128, 165],[129, 166],[130, 167],[131, 168],[132, 168],[133, 169],[134, 169]])

export const dark = n2
const n3 = t([[0, 0],[1, 1],[2, 2],[3, 3],[4, 4],[5, 5],[6, 6],[7, 7],[8, 8],[9, 9],[10, 10],[11, 11],[12, 12],[13, 12],[14, 9],[15, 3],[16, 0],[17, 13],[18, 11],[19, 12],[20, 0],[21, 2],[22, 3],[23, 3],[24, 0],[25, 13],[26, 11],[27, 10],[28, 11],[29, 10],[30, 12],[31, 3],[32, 4],[33, 3],[34, 3],[35, 8],[36, 9]])

export const light_base = n3
const n4 = t([[0, 1],[1, 14],[2, 15],[3, 16],[4, 17],[5, 18],[6, 19],[7, 21],[8, 22],[9, 23],[10, 24],[11, 25],[12, 88],[13, 170],[14, 23],[15, 16],[16, 1],[17, 171],[18, 88],[19, 170],[20, 1],[21, 15],[22, 16],[23, 16],[24, 1],[25, 171],[26, 88],[27, 25],[28, 88],[29, 25],[30, 170],[31, 16],[32, 17],[33, 16],[34, 16],[35, 23],[36, 23]])

export const light_brand = n4
export const light_accent = n4
const n5 = t([[0, 1],[1, 26],[2, 27],[3, 28],[4, 29],[5, 30],[6, 31],[7, 33],[8, 34],[9, 35],[10, 36],[11, 37],[12, 88],[13, 172],[14, 35],[15, 28],[16, 1],[17, 173],[18, 88],[19, 172],[20, 1],[21, 27],[22, 28],[23, 28],[24, 1],[25, 173],[26, 88],[27, 37],[28, 88],[29, 37],[30, 172],[31, 28],[32, 29],[33, 28],[34, 28],[35, 35],[36, 35]])

export const light_help = n5
const n6 = t([[0, 1],[1, 38],[2, 39],[3, 40],[4, 41],[5, 42],[6, 43],[7, 45],[8, 46],[9, 47],[10, 48],[11, 49],[12, 88],[13, 174],[14, 47],[15, 40],[16, 1],[17, 175],[18, 88],[19, 174],[20, 1],[21, 39],[22, 40],[23, 40],[24, 1],[25, 175],[26, 88],[27, 49],[28, 88],[29, 49],[30, 174],[31, 40],[32, 41],[33, 40],[34, 40],[35, 47],[36, 47]])

export const light_success = n6
const n7 = t([[0, 1],[1, 62],[2, 63],[3, 64],[4, 65],[5, 66],[6, 67],[7, 69],[8, 70],[9, 71],[10, 72],[11, 73],[12, 88],[13, 176],[14, 71],[15, 64],[16, 1],[17, 177],[18, 88],[19, 176],[20, 1],[21, 63],[22, 64],[23, 64],[24, 1],[25, 177],[26, 88],[27, 73],[28, 88],[29, 73],[30, 176],[31, 64],[32, 65],[33, 64],[34, 64],[35, 71],[36, 71]])

export const light_warning = n7
const n8 = t([[0, 1],[1, 50],[2, 51],[3, 52],[4, 53],[5, 54],[6, 55],[7, 57],[8, 58],[9, 59],[10, 60],[11, 61],[12, 88],[13, 178],[14, 59],[15, 52],[16, 1],[17, 179],[18, 88],[19, 178],[20, 1],[21, 51],[22, 52],[23, 52],[24, 1],[25, 179],[26, 88],[27, 61],[28, 88],[29, 61],[30, 178],[31, 52],[32, 53],[33, 52],[34, 52],[35, 59],[36, 59]])

export const light_error = n8
const n9 = t([[0, 1],[1, 74],[2, 75],[3, 76],[4, 77],[5, 78],[6, 79],[7, 81],[8, 82],[9, 83],[10, 84],[11, 85],[12, 88],[13, 180],[14, 83],[15, 76],[16, 1],[17, 181],[18, 88],[19, 180],[20, 1],[21, 75],[22, 76],[23, 76],[24, 1],[25, 181],[26, 88],[27, 85],[28, 88],[29, 85],[30, 180],[31, 76],[32, 77],[33, 76],[34, 76],[35, 83],[36, 83]])

export const light_info = n9
const n10 = t([[0, 88],[1, 88],[2, 89],[3, 90],[4, 91],[5, 92],[6, 93],[7, 94],[8, 95],[9, 96],[10, 97],[11, 0],[12, 13],[13, 13],[14, 96],[15, 90],[16, 88],[17, 12],[18, 0],[19, 13],[20, 88],[21, 89],[22, 90],[23, 90],[24, 88],[25, 12],[26, 0],[27, 97],[28, 0],[29, 97],[30, 13],[31, 95],[32, 97],[33, 96],[34, 96],[35, 95],[36, 96]])

export const dark_base = n10
const n11 = t([[0, 88],[1, 98],[2, 99],[3, 100],[4, 101],[5, 102],[6, 103],[7, 105],[8, 106],[9, 23],[10, 107],[11, 108],[12, 1],[13, 182],[14, 23],[15, 100],[16, 88],[17, 183],[18, 1],[19, 182],[20, 88],[21, 99],[22, 100],[23, 100],[24, 88],[25, 183],[26, 1],[27, 108],[28, 1],[29, 108],[30, 182],[31, 23],[32, 108],[33, 107],[34, 107],[35, 23],[36, 23]])

export const dark_brand = n11
export const dark_accent = n11
const n12 = t([[0, 88],[1, 109],[2, 110],[3, 111],[4, 112],[5, 113],[6, 114],[7, 116],[8, 117],[9, 118],[10, 119],[11, 120],[12, 1],[13, 184],[14, 118],[15, 111],[16, 88],[17, 185],[18, 1],[19, 184],[20, 88],[21, 110],[22, 111],[23, 111],[24, 88],[25, 185],[26, 1],[27, 120],[28, 1],[29, 120],[30, 184],[31, 118],[32, 120],[33, 119],[34, 119],[35, 118],[36, 118]])

export const dark_help = n12
const n13 = t([[0, 88],[1, 121],[2, 122],[3, 123],[4, 124],[5, 125],[6, 126],[7, 128],[8, 129],[9, 47],[10, 130],[11, 131],[12, 1],[13, 186],[14, 47],[15, 123],[16, 88],[17, 187],[18, 1],[19, 186],[20, 88],[21, 122],[22, 123],[23, 123],[24, 88],[25, 187],[26, 1],[27, 131],[28, 1],[29, 131],[30, 186],[31, 47],[32, 131],[33, 130],[34, 130],[35, 47],[36, 47]])

export const dark_success = n13
const n14 = t([[0, 88],[1, 144],[2, 145],[3, 146],[4, 147],[5, 148],[6, 149],[7, 151],[8, 152],[9, 153],[10, 154],[11, 155],[12, 1],[13, 188],[14, 153],[15, 146],[16, 88],[17, 189],[18, 1],[19, 188],[20, 88],[21, 145],[22, 146],[23, 146],[24, 88],[25, 189],[26, 1],[27, 155],[28, 1],[29, 155],[30, 188],[31, 153],[32, 155],[33, 154],[34, 154],[35, 153],[36, 153]])

export const dark_warning = n14
const n15 = t([[0, 88],[1, 132],[2, 133],[3, 134],[4, 135],[5, 136],[6, 137],[7, 139],[8, 140],[9, 141],[10, 142],[11, 143],[12, 1],[13, 190],[14, 141],[15, 134],[16, 88],[17, 191],[18, 1],[19, 190],[20, 88],[21, 133],[22, 134],[23, 134],[24, 88],[25, 191],[26, 1],[27, 143],[28, 1],[29, 143],[30, 190],[31, 141],[32, 143],[33, 142],[34, 142],[35, 141],[36, 141]])

export const dark_error = n15
const n16 = t([[0, 88],[1, 156],[2, 157],[3, 158],[4, 159],[5, 160],[6, 161],[7, 163],[8, 164],[9, 165],[10, 166],[11, 167],[12, 1],[13, 192],[14, 165],[15, 158],[16, 88],[17, 193],[18, 1],[19, 192],[20, 88],[21, 157],[22, 158],[23, 158],[24, 88],[25, 193],[26, 1],[27, 167],[28, 1],[29, 167],[30, 192],[31, 165],[32, 167],[33, 166],[34, 166],[35, 165],[36, 165]])

export const dark_info = n16
const n17 = t([[20, 194]])

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
const n18 = t([[20, 195]])

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
const n19 = t([[14, 8],[15, 2],[16, 13],[17, 13],[18, 12],[19, 12],[20, 13],[21, 1],[22, 2],[23, 2],[24, 13],[25, 13],[26, 12],[27, 11],[28, 12],[29, 11],[30, 12],[31, 9],[32, 11],[33, 10],[34, 10],[35, 9],[36, 8]])

export const light_ListItem = n19
const n20 = t([[14, 10],[15, 4],[16, 1],[17, 0],[18, 10],[19, 11],[20, 1],[21, 3],[22, 4],[23, 4],[24, 1],[25, 0],[26, 10],[27, 9],[28, 10],[29, 9],[30, 11],[31, 7],[32, 9],[33, 8],[34, 8],[35, 7],[36, 10]])

export const light_Card = n20
export const light_DrawerFrame = n20
export const light_Progress = n20
export const light_TooltipArrow = n20
const n21 = t([[14, 9],[15, 3],[16, 0],[17, 13],[18, 11],[19, 12],[20, 9],[21, 10],[22, 11],[23, 11],[24, 0],[25, 13],[26, 0],[27, 0],[28, 0],[29, 0],[30, 12],[31, 9],[32, 10],[33, 11],[34, 11],[35, 8],[36, 9]])

export const light_Button = n21
export const light_base_Button = n21
const n22 = t([[14, 9],[15, 3],[16, 0],[17, 13],[18, 11],[19, 12],[20, 0],[21, 2],[22, 3],[23, 3],[24, 0],[25, 13],[26, 11],[27, 10],[28, 11],[29, 10],[30, 12],[31, 6],[32, 8],[33, 7],[34, 7],[35, 8],[36, 9]])

export const light_Checkbox = n22
const n23 = t([[14, 11],[15, 5],[16, 2],[17, 1],[18, 9],[19, 10],[20, 2],[21, 4],[22, 5],[23, 5],[24, 2],[25, 1],[26, 9],[27, 8],[28, 9],[29, 8],[30, 10],[31, 6],[32, 8],[33, 7],[34, 7],[35, 6],[36, 11]])

export const light_Switch = n23
export const light_TooltipContent = n23
export const light_SliderTrack = n23
const n24 = t([[14, 4],[15, 10],[16, 12],[17, 12],[18, 13],[19, 13],[20, 12],[21, 11],[22, 10],[23, 10],[24, 12],[25, 12],[26, 13],[27, 13],[28, 13],[29, 13],[30, 13],[31, 1],[32, 13],[33, 0],[34, 0],[35, 1],[36, 4]])

export const light_SwitchThumb = n24
const n25 = t([[14, 9],[15, 3],[16, 0],[17, 13],[18, 11],[19, 12],[20, 0],[21, 2],[22, 3],[23, 3],[24, 0],[25, 13],[26, 11],[27, 10],[28, 11],[29, 10],[30, 12],[31, 7],[32, 9],[33, 8],[34, 8],[35, 8],[36, 9]])

export const light_RadioGroupItem = n25
const n26 = t([[14, 0],[15, 6],[16, 9],[17, 10],[18, 2],[19, 1],[20, 9],[21, 7],[22, 6],[23, 6],[24, 9],[25, 10],[26, 2],[27, 3],[28, 2],[29, 3],[30, 1],[31, 5],[32, 3],[33, 4],[34, 4],[35, 5],[36, 0]])

export const light_SliderTrackActive = n26
const n27 = t([[14, 2],[15, 8],[16, 11],[17, 12],[18, 0],[19, 13],[20, 11],[21, 9],[22, 8],[23, 8],[24, 11],[25, 12],[26, 0],[27, 1],[28, 0],[29, 1],[30, 13],[31, 3],[32, 1],[33, 2],[34, 2],[35, 3],[36, 2]])

export const light_SliderThumb = n27
export const light_Tooltip = n27
export const light_ProgressIndicator = n27
const n28 = t([[14, 9],[15, 3],[16, 0],[17, 13],[18, 11],[19, 12],[20, 0],[21, 2],[22, 3],[23, 3],[24, 0],[25, 13],[26, 11],[27, 10],[28, 11],[29, 10],[30, 12],[31, 8],[32, 10],[33, 9],[34, 9],[35, 8],[36, 9]])

export const light_Input = n28
export const light_TextArea = n28
const n29 = t([[14, 96],[15, 90],[16, 88],[17, 12],[18, 0],[19, 13],[20, 88],[21, 89],[22, 90],[23, 90],[24, 88],[25, 12],[26, 0],[27, 97],[28, 0],[29, 97],[30, 13],[31, 95],[32, 97],[33, 96],[34, 96],[35, 95],[36, 96]])

export const dark_ListItem = n29
export const dark_Input = n29
export const dark_TextArea = n29
export const dark_base_ListItem = n29
export const dark_base_Input = n29
export const dark_base_TextArea = n29
const n30 = t([[14, 97],[15, 91],[16, 88],[17, 88],[18, 97],[19, 0],[20, 88],[21, 90],[22, 91],[23, 91],[24, 88],[25, 88],[26, 97],[27, 96],[28, 97],[29, 96],[30, 0],[31, 94],[32, 96],[33, 95],[34, 95],[35, 94],[36, 97]])

export const dark_Card = n30
export const dark_DrawerFrame = n30
export const dark_Progress = n30
export const dark_TooltipArrow = n30
export const dark_base_Card = n30
export const dark_base_DrawerFrame = n30
export const dark_base_Progress = n30
export const dark_base_TooltipArrow = n30
const n31 = t([[14, 96],[15, 90],[16, 88],[17, 12],[18, 0],[19, 13],[20, 96],[21, 97],[22, 0],[23, 0],[24, 88],[25, 12],[26, 88],[27, 88],[28, 88],[29, 88],[30, 13],[31, 96],[32, 97],[33, 0],[34, 0],[35, 95],[36, 96]])

export const dark_Button = n31
export const dark_base_Button = n31
const n32 = t([[14, 96],[15, 90],[16, 88],[17, 12],[18, 0],[19, 13],[20, 88],[21, 89],[22, 90],[23, 90],[24, 88],[25, 12],[26, 0],[27, 97],[28, 0],[29, 97],[30, 13],[31, 93],[32, 95],[33, 94],[34, 94],[35, 95],[36, 96]])

export const dark_Checkbox = n32
export const dark_base_Checkbox = n32
const n33 = t([[14, 0],[15, 92],[16, 89],[17, 88],[18, 96],[19, 97],[20, 89],[21, 91],[22, 92],[23, 92],[24, 89],[25, 88],[26, 96],[27, 95],[28, 96],[29, 95],[30, 97],[31, 93],[32, 95],[33, 94],[34, 94],[35, 93],[36, 0]])

export const dark_Switch = n33
export const dark_TooltipContent = n33
export const dark_SliderTrack = n33
export const dark_base_Switch = n33
export const dark_base_TooltipContent = n33
export const dark_base_SliderTrack = n33
const n34 = t([[14, 91],[15, 97],[16, 13],[17, 13],[18, 12],[19, 12],[20, 13],[21, 0],[22, 97],[23, 97],[24, 13],[25, 13],[26, 12],[27, 12],[28, 12],[29, 12],[30, 12],[31, 88],[32, 12],[33, 88],[34, 88],[35, 88],[36, 91]])

export const dark_SwitchThumb = n34
export const dark_base_SwitchThumb = n34
const n35 = t([[14, 96],[15, 90],[16, 88],[17, 12],[18, 0],[19, 13],[20, 88],[21, 89],[22, 90],[23, 90],[24, 88],[25, 12],[26, 0],[27, 97],[28, 0],[29, 97],[30, 13],[31, 94],[32, 96],[33, 95],[34, 95],[35, 95],[36, 96]])

export const dark_RadioGroupItem = n35
export const dark_base_RadioGroupItem = n35
const n36 = t([[14, 88],[15, 93],[16, 96],[17, 97],[18, 89],[19, 88],[20, 96],[21, 94],[22, 93],[23, 93],[24, 96],[25, 97],[26, 89],[27, 90],[28, 89],[29, 90],[30, 88],[31, 92],[32, 90],[33, 91],[34, 91],[35, 92],[36, 88]])

export const dark_SliderTrackActive = n36
export const dark_base_SliderTrackActive = n36
const n37 = t([[14, 89],[15, 95],[16, 0],[17, 13],[18, 88],[19, 12],[20, 0],[21, 96],[22, 95],[23, 95],[24, 0],[25, 13],[26, 88],[27, 88],[28, 88],[29, 88],[30, 12],[31, 90],[32, 88],[33, 89],[34, 89],[35, 90],[36, 89]])

export const dark_SliderThumb = n37
export const dark_Tooltip = n37
export const dark_ProgressIndicator = n37
export const dark_base_SliderThumb = n37
export const dark_base_Tooltip = n37
export const dark_base_ProgressIndicator = n37
const n38 = t([[14, 8],[15, 2],[16, 13],[17, 13],[18, 12],[19, 12],[20, 13],[21, 1],[22, 2],[23, 2],[24, 13],[25, 13],[26, 12],[27, 11],[28, 12],[29, 11],[30, 12],[31, 2],[32, 3],[33, 2],[34, 2],[35, 9],[36, 8]])

export const light_base_ListItem = n38
const n39 = t([[14, 10],[15, 4],[16, 1],[17, 0],[18, 10],[19, 11],[20, 1],[21, 3],[22, 4],[23, 4],[24, 1],[25, 0],[26, 10],[27, 9],[28, 10],[29, 9],[30, 11],[31, 4],[32, 5],[33, 4],[34, 4],[35, 7],[36, 10]])

export const light_base_Card = n39
export const light_base_DrawerFrame = n39
export const light_base_Progress = n39
export const light_base_TooltipArrow = n39
const n40 = t([[14, 9],[15, 3],[16, 0],[17, 13],[18, 11],[19, 12],[20, 0],[21, 2],[22, 3],[23, 3],[24, 0],[25, 13],[26, 11],[27, 10],[28, 11],[29, 10],[30, 12],[31, 5],[32, 6],[33, 5],[34, 5],[35, 8],[36, 9]])

export const light_base_Checkbox = n40
const n41 = t([[14, 11],[15, 5],[16, 2],[17, 1],[18, 9],[19, 10],[20, 2],[21, 4],[22, 5],[23, 5],[24, 2],[25, 1],[26, 9],[27, 8],[28, 9],[29, 8],[30, 10],[31, 5],[32, 6],[33, 5],[34, 5],[35, 6],[36, 11]])

export const light_base_Switch = n41
export const light_base_TooltipContent = n41
export const light_base_SliderTrack = n41
const n42 = t([[14, 4],[15, 10],[16, 12],[17, 12],[18, 13],[19, 13],[20, 12],[21, 11],[22, 10],[23, 10],[24, 12],[25, 12],[26, 13],[27, 13],[28, 13],[29, 13],[30, 13],[31, 10],[32, 9],[33, 10],[34, 10],[35, 1],[36, 4]])

export const light_base_SwitchThumb = n42
const n43 = t([[14, 9],[15, 3],[16, 0],[17, 13],[18, 11],[19, 12],[20, 0],[21, 2],[22, 3],[23, 3],[24, 0],[25, 13],[26, 11],[27, 10],[28, 11],[29, 10],[30, 12],[31, 4],[32, 5],[33, 4],[34, 4],[35, 8],[36, 9]])

export const light_base_RadioGroupItem = n43
const n44 = t([[14, 0],[15, 6],[16, 9],[17, 10],[18, 2],[19, 1],[20, 9],[21, 7],[22, 6],[23, 6],[24, 9],[25, 10],[26, 2],[27, 3],[28, 2],[29, 3],[30, 1],[31, 6],[32, 5],[33, 6],[34, 6],[35, 5],[36, 0]])

export const light_base_SliderTrackActive = n44
const n45 = t([[14, 2],[15, 8],[16, 11],[17, 12],[18, 0],[19, 13],[20, 11],[21, 9],[22, 8],[23, 8],[24, 11],[25, 12],[26, 0],[27, 1],[28, 0],[29, 1],[30, 13],[31, 8],[32, 7],[33, 8],[34, 8],[35, 3],[36, 2]])

export const light_base_SliderThumb = n45
export const light_base_Tooltip = n45
export const light_base_ProgressIndicator = n45
const n46 = t([[14, 9],[15, 3],[16, 0],[17, 13],[18, 11],[19, 12],[20, 0],[21, 2],[22, 3],[23, 3],[24, 0],[25, 13],[26, 11],[27, 10],[28, 11],[29, 10],[30, 12],[31, 3],[32, 4],[33, 3],[34, 3],[35, 8],[36, 9]])

export const light_base_Input = n46
export const light_base_TextArea = n46
const n47 = t([[14, 22],[15, 15],[16, 171],[17, 171],[18, 170],[19, 170],[20, 171],[21, 14],[22, 15],[23, 15],[24, 171],[25, 171],[26, 170],[27, 88],[28, 170],[29, 88],[30, 170],[31, 15],[32, 16],[33, 15],[34, 15],[35, 24],[36, 22]])

export const light_brand_ListItem = n47
export const light_accent_ListItem = n47
const n48 = t([[14, 24],[15, 17],[16, 14],[17, 1],[18, 25],[19, 88],[20, 14],[21, 16],[22, 17],[23, 17],[24, 14],[25, 1],[26, 25],[27, 24],[28, 25],[29, 24],[30, 88],[31, 17],[32, 18],[33, 17],[34, 17],[35, 22],[36, 24]])

export const light_brand_Card = n48
export const light_brand_DrawerFrame = n48
export const light_brand_Progress = n48
export const light_brand_TooltipArrow = n48
export const light_accent_Card = n48
export const light_accent_DrawerFrame = n48
export const light_accent_Progress = n48
export const light_accent_TooltipArrow = n48
const n49 = t([[14, 23],[15, 16],[16, 1],[17, 171],[18, 88],[19, 170],[20, 23],[21, 24],[22, 25],[23, 25],[24, 1],[25, 171],[26, 1],[27, 1],[28, 1],[29, 1],[30, 170],[31, 23],[32, 24],[33, 25],[34, 25],[35, 23],[36, 23]])

export const light_brand_Button = n49
export const light_accent_Button = n49
const n50 = t([[14, 23],[15, 16],[16, 1],[17, 171],[18, 88],[19, 170],[20, 1],[21, 15],[22, 16],[23, 16],[24, 1],[25, 171],[26, 88],[27, 25],[28, 88],[29, 25],[30, 170],[31, 18],[32, 19],[33, 18],[34, 18],[35, 23],[36, 23]])

export const light_brand_Checkbox = n50
export const light_accent_Checkbox = n50
const n51 = t([[14, 25],[15, 18],[16, 15],[17, 14],[18, 24],[19, 25],[20, 15],[21, 17],[22, 18],[23, 18],[24, 15],[25, 14],[26, 24],[27, 23],[28, 24],[29, 23],[30, 25],[31, 18],[32, 19],[33, 18],[34, 18],[35, 21],[36, 25]])

export const light_brand_Switch = n51
export const light_brand_TooltipContent = n51
export const light_brand_SliderTrack = n51
export const light_accent_Switch = n51
export const light_accent_TooltipContent = n51
export const light_accent_SliderTrack = n51
const n52 = t([[14, 18],[15, 25],[16, 170],[17, 170],[18, 171],[19, 171],[20, 170],[21, 88],[22, 25],[23, 25],[24, 170],[25, 170],[26, 171],[27, 171],[28, 171],[29, 171],[30, 171],[31, 25],[32, 24],[33, 25],[34, 25],[35, 14],[36, 18]])

export const light_brand_SwitchThumb = n52
export const light_accent_SwitchThumb = n52
const n53 = t([[14, 23],[15, 16],[16, 1],[17, 171],[18, 88],[19, 170],[20, 1],[21, 15],[22, 16],[23, 16],[24, 1],[25, 171],[26, 88],[27, 25],[28, 88],[29, 25],[30, 170],[31, 17],[32, 18],[33, 17],[34, 17],[35, 23],[36, 23]])

export const light_brand_RadioGroupItem = n53
export const light_accent_RadioGroupItem = n53
const n54 = t([[14, 14],[15, 21],[16, 24],[17, 25],[18, 15],[19, 14],[20, 24],[21, 22],[22, 21],[23, 21],[24, 24],[25, 25],[26, 15],[27, 16],[28, 15],[29, 16],[30, 14],[31, 21],[32, 19],[33, 21],[34, 21],[35, 18],[36, 14]])

export const light_brand_SliderTrackActive = n54
export const light_accent_SliderTrackActive = n54
const n55 = t([[14, 16],[15, 23],[16, 88],[17, 170],[18, 1],[19, 171],[20, 88],[21, 24],[22, 23],[23, 23],[24, 88],[25, 170],[26, 1],[27, 14],[28, 1],[29, 14],[30, 171],[31, 23],[32, 22],[33, 23],[34, 23],[35, 16],[36, 16]])

export const light_brand_SliderThumb = n55
export const light_brand_Tooltip = n55
export const light_brand_ProgressIndicator = n55
export const light_accent_SliderThumb = n55
export const light_accent_Tooltip = n55
export const light_accent_ProgressIndicator = n55
const n56 = t([[14, 23],[15, 16],[16, 1],[17, 171],[18, 88],[19, 170],[20, 1],[21, 15],[22, 16],[23, 16],[24, 1],[25, 171],[26, 88],[27, 25],[28, 88],[29, 25],[30, 170],[31, 16],[32, 17],[33, 16],[34, 16],[35, 23],[36, 23]])

export const light_brand_Input = n56
export const light_brand_TextArea = n56
export const light_accent_Input = n56
export const light_accent_TextArea = n56
const n57 = t([[14, 34],[15, 27],[16, 173],[17, 173],[18, 172],[19, 172],[20, 173],[21, 26],[22, 27],[23, 27],[24, 173],[25, 173],[26, 172],[27, 88],[28, 172],[29, 88],[30, 172],[31, 27],[32, 28],[33, 27],[34, 27],[35, 36],[36, 34]])

export const light_help_ListItem = n57
const n58 = t([[14, 36],[15, 29],[16, 26],[17, 1],[18, 37],[19, 88],[20, 26],[21, 28],[22, 29],[23, 29],[24, 26],[25, 1],[26, 37],[27, 36],[28, 37],[29, 36],[30, 88],[31, 29],[32, 30],[33, 29],[34, 29],[35, 34],[36, 36]])

export const light_help_Card = n58
export const light_help_DrawerFrame = n58
export const light_help_Progress = n58
export const light_help_TooltipArrow = n58
const n59 = t([[14, 35],[15, 28],[16, 1],[17, 173],[18, 88],[19, 172],[20, 35],[21, 36],[22, 37],[23, 37],[24, 1],[25, 173],[26, 1],[27, 1],[28, 1],[29, 1],[30, 172],[31, 35],[32, 36],[33, 37],[34, 37],[35, 35],[36, 35]])

export const light_help_Button = n59
const n60 = t([[14, 35],[15, 28],[16, 1],[17, 173],[18, 88],[19, 172],[20, 1],[21, 27],[22, 28],[23, 28],[24, 1],[25, 173],[26, 88],[27, 37],[28, 88],[29, 37],[30, 172],[31, 30],[32, 31],[33, 30],[34, 30],[35, 35],[36, 35]])

export const light_help_Checkbox = n60
const n61 = t([[14, 37],[15, 30],[16, 27],[17, 26],[18, 36],[19, 37],[20, 27],[21, 29],[22, 30],[23, 30],[24, 27],[25, 26],[26, 36],[27, 35],[28, 36],[29, 35],[30, 37],[31, 30],[32, 31],[33, 30],[34, 30],[35, 33],[36, 37]])

export const light_help_Switch = n61
export const light_help_TooltipContent = n61
export const light_help_SliderTrack = n61
const n62 = t([[14, 30],[15, 37],[16, 172],[17, 172],[18, 173],[19, 173],[20, 172],[21, 88],[22, 37],[23, 37],[24, 172],[25, 172],[26, 173],[27, 173],[28, 173],[29, 173],[30, 173],[31, 37],[32, 36],[33, 37],[34, 37],[35, 26],[36, 30]])

export const light_help_SwitchThumb = n62
const n63 = t([[14, 35],[15, 28],[16, 1],[17, 173],[18, 88],[19, 172],[20, 1],[21, 27],[22, 28],[23, 28],[24, 1],[25, 173],[26, 88],[27, 37],[28, 88],[29, 37],[30, 172],[31, 29],[32, 30],[33, 29],[34, 29],[35, 35],[36, 35]])

export const light_help_RadioGroupItem = n63
const n64 = t([[14, 26],[15, 33],[16, 36],[17, 37],[18, 27],[19, 26],[20, 36],[21, 34],[22, 33],[23, 33],[24, 36],[25, 37],[26, 27],[27, 28],[28, 27],[29, 28],[30, 26],[31, 33],[32, 31],[33, 33],[34, 33],[35, 30],[36, 26]])

export const light_help_SliderTrackActive = n64
const n65 = t([[14, 28],[15, 35],[16, 88],[17, 172],[18, 1],[19, 173],[20, 88],[21, 36],[22, 35],[23, 35],[24, 88],[25, 172],[26, 1],[27, 26],[28, 1],[29, 26],[30, 173],[31, 35],[32, 34],[33, 35],[34, 35],[35, 28],[36, 28]])

export const light_help_SliderThumb = n65
export const light_help_Tooltip = n65
export const light_help_ProgressIndicator = n65
const n66 = t([[14, 35],[15, 28],[16, 1],[17, 173],[18, 88],[19, 172],[20, 1],[21, 27],[22, 28],[23, 28],[24, 1],[25, 173],[26, 88],[27, 37],[28, 88],[29, 37],[30, 172],[31, 28],[32, 29],[33, 28],[34, 28],[35, 35],[36, 35]])

export const light_help_Input = n66
export const light_help_TextArea = n66
const n67 = t([[14, 46],[15, 39],[16, 175],[17, 175],[18, 174],[19, 174],[20, 175],[21, 38],[22, 39],[23, 39],[24, 175],[25, 175],[26, 174],[27, 88],[28, 174],[29, 88],[30, 174],[31, 39],[32, 40],[33, 39],[34, 39],[35, 48],[36, 46]])

export const light_success_ListItem = n67
const n68 = t([[14, 48],[15, 41],[16, 38],[17, 1],[18, 49],[19, 88],[20, 38],[21, 40],[22, 41],[23, 41],[24, 38],[25, 1],[26, 49],[27, 48],[28, 49],[29, 48],[30, 88],[31, 41],[32, 42],[33, 41],[34, 41],[35, 46],[36, 48]])

export const light_success_Card = n68
export const light_success_DrawerFrame = n68
export const light_success_Progress = n68
export const light_success_TooltipArrow = n68
const n69 = t([[14, 47],[15, 40],[16, 1],[17, 175],[18, 88],[19, 174],[20, 47],[21, 48],[22, 49],[23, 49],[24, 1],[25, 175],[26, 1],[27, 1],[28, 1],[29, 1],[30, 174],[31, 47],[32, 48],[33, 49],[34, 49],[35, 47],[36, 47]])

export const light_success_Button = n69
const n70 = t([[14, 47],[15, 40],[16, 1],[17, 175],[18, 88],[19, 174],[20, 1],[21, 39],[22, 40],[23, 40],[24, 1],[25, 175],[26, 88],[27, 49],[28, 88],[29, 49],[30, 174],[31, 42],[32, 43],[33, 42],[34, 42],[35, 47],[36, 47]])

export const light_success_Checkbox = n70
const n71 = t([[14, 49],[15, 42],[16, 39],[17, 38],[18, 48],[19, 49],[20, 39],[21, 41],[22, 42],[23, 42],[24, 39],[25, 38],[26, 48],[27, 47],[28, 48],[29, 47],[30, 49],[31, 42],[32, 43],[33, 42],[34, 42],[35, 45],[36, 49]])

export const light_success_Switch = n71
export const light_success_TooltipContent = n71
export const light_success_SliderTrack = n71
const n72 = t([[14, 42],[15, 49],[16, 174],[17, 174],[18, 175],[19, 175],[20, 174],[21, 88],[22, 49],[23, 49],[24, 174],[25, 174],[26, 175],[27, 175],[28, 175],[29, 175],[30, 175],[31, 49],[32, 48],[33, 49],[34, 49],[35, 38],[36, 42]])

export const light_success_SwitchThumb = n72
const n73 = t([[14, 47],[15, 40],[16, 1],[17, 175],[18, 88],[19, 174],[20, 1],[21, 39],[22, 40],[23, 40],[24, 1],[25, 175],[26, 88],[27, 49],[28, 88],[29, 49],[30, 174],[31, 41],[32, 42],[33, 41],[34, 41],[35, 47],[36, 47]])

export const light_success_RadioGroupItem = n73
const n74 = t([[14, 38],[15, 45],[16, 48],[17, 49],[18, 39],[19, 38],[20, 48],[21, 46],[22, 45],[23, 45],[24, 48],[25, 49],[26, 39],[27, 40],[28, 39],[29, 40],[30, 38],[31, 45],[32, 43],[33, 45],[34, 45],[35, 42],[36, 38]])

export const light_success_SliderTrackActive = n74
const n75 = t([[14, 40],[15, 47],[16, 88],[17, 174],[18, 1],[19, 175],[20, 88],[21, 48],[22, 47],[23, 47],[24, 88],[25, 174],[26, 1],[27, 38],[28, 1],[29, 38],[30, 175],[31, 47],[32, 46],[33, 47],[34, 47],[35, 40],[36, 40]])

export const light_success_SliderThumb = n75
export const light_success_Tooltip = n75
export const light_success_ProgressIndicator = n75
const n76 = t([[14, 47],[15, 40],[16, 1],[17, 175],[18, 88],[19, 174],[20, 1],[21, 39],[22, 40],[23, 40],[24, 1],[25, 175],[26, 88],[27, 49],[28, 88],[29, 49],[30, 174],[31, 40],[32, 41],[33, 40],[34, 40],[35, 47],[36, 47]])

export const light_success_Input = n76
export const light_success_TextArea = n76
const n77 = t([[14, 70],[15, 63],[16, 177],[17, 177],[18, 176],[19, 176],[20, 177],[21, 62],[22, 63],[23, 63],[24, 177],[25, 177],[26, 176],[27, 88],[28, 176],[29, 88],[30, 176],[31, 63],[32, 64],[33, 63],[34, 63],[35, 72],[36, 70]])

export const light_warning_ListItem = n77
const n78 = t([[14, 72],[15, 65],[16, 62],[17, 1],[18, 73],[19, 88],[20, 62],[21, 64],[22, 65],[23, 65],[24, 62],[25, 1],[26, 73],[27, 72],[28, 73],[29, 72],[30, 88],[31, 65],[32, 66],[33, 65],[34, 65],[35, 70],[36, 72]])

export const light_warning_Card = n78
export const light_warning_DrawerFrame = n78
export const light_warning_Progress = n78
export const light_warning_TooltipArrow = n78
const n79 = t([[14, 71],[15, 64],[16, 1],[17, 177],[18, 88],[19, 176],[20, 71],[21, 72],[22, 73],[23, 73],[24, 1],[25, 177],[26, 1],[27, 1],[28, 1],[29, 1],[30, 176],[31, 71],[32, 72],[33, 73],[34, 73],[35, 71],[36, 71]])

export const light_warning_Button = n79
const n80 = t([[14, 71],[15, 64],[16, 1],[17, 177],[18, 88],[19, 176],[20, 1],[21, 63],[22, 64],[23, 64],[24, 1],[25, 177],[26, 88],[27, 73],[28, 88],[29, 73],[30, 176],[31, 66],[32, 67],[33, 66],[34, 66],[35, 71],[36, 71]])

export const light_warning_Checkbox = n80
const n81 = t([[14, 73],[15, 66],[16, 63],[17, 62],[18, 72],[19, 73],[20, 63],[21, 65],[22, 66],[23, 66],[24, 63],[25, 62],[26, 72],[27, 71],[28, 72],[29, 71],[30, 73],[31, 66],[32, 67],[33, 66],[34, 66],[35, 69],[36, 73]])

export const light_warning_Switch = n81
export const light_warning_TooltipContent = n81
export const light_warning_SliderTrack = n81
const n82 = t([[14, 66],[15, 73],[16, 176],[17, 176],[18, 177],[19, 177],[20, 176],[21, 88],[22, 73],[23, 73],[24, 176],[25, 176],[26, 177],[27, 177],[28, 177],[29, 177],[30, 177],[31, 73],[32, 72],[33, 73],[34, 73],[35, 62],[36, 66]])

export const light_warning_SwitchThumb = n82
const n83 = t([[14, 71],[15, 64],[16, 1],[17, 177],[18, 88],[19, 176],[20, 1],[21, 63],[22, 64],[23, 64],[24, 1],[25, 177],[26, 88],[27, 73],[28, 88],[29, 73],[30, 176],[31, 65],[32, 66],[33, 65],[34, 65],[35, 71],[36, 71]])

export const light_warning_RadioGroupItem = n83
const n84 = t([[14, 62],[15, 69],[16, 72],[17, 73],[18, 63],[19, 62],[20, 72],[21, 70],[22, 69],[23, 69],[24, 72],[25, 73],[26, 63],[27, 64],[28, 63],[29, 64],[30, 62],[31, 69],[32, 67],[33, 69],[34, 69],[35, 66],[36, 62]])

export const light_warning_SliderTrackActive = n84
const n85 = t([[14, 64],[15, 71],[16, 88],[17, 176],[18, 1],[19, 177],[20, 88],[21, 72],[22, 71],[23, 71],[24, 88],[25, 176],[26, 1],[27, 62],[28, 1],[29, 62],[30, 177],[31, 71],[32, 70],[33, 71],[34, 71],[35, 64],[36, 64]])

export const light_warning_SliderThumb = n85
export const light_warning_Tooltip = n85
export const light_warning_ProgressIndicator = n85
const n86 = t([[14, 71],[15, 64],[16, 1],[17, 177],[18, 88],[19, 176],[20, 1],[21, 63],[22, 64],[23, 64],[24, 1],[25, 177],[26, 88],[27, 73],[28, 88],[29, 73],[30, 176],[31, 64],[32, 65],[33, 64],[34, 64],[35, 71],[36, 71]])

export const light_warning_Input = n86
export const light_warning_TextArea = n86
const n87 = t([[14, 58],[15, 51],[16, 179],[17, 179],[18, 178],[19, 178],[20, 179],[21, 50],[22, 51],[23, 51],[24, 179],[25, 179],[26, 178],[27, 88],[28, 178],[29, 88],[30, 178],[31, 51],[32, 52],[33, 51],[34, 51],[35, 60],[36, 58]])

export const light_error_ListItem = n87
const n88 = t([[14, 60],[15, 53],[16, 50],[17, 1],[18, 61],[19, 88],[20, 50],[21, 52],[22, 53],[23, 53],[24, 50],[25, 1],[26, 61],[27, 60],[28, 61],[29, 60],[30, 88],[31, 53],[32, 54],[33, 53],[34, 53],[35, 58],[36, 60]])

export const light_error_Card = n88
export const light_error_DrawerFrame = n88
export const light_error_Progress = n88
export const light_error_TooltipArrow = n88
const n89 = t([[14, 59],[15, 52],[16, 1],[17, 179],[18, 88],[19, 178],[20, 59],[21, 60],[22, 61],[23, 61],[24, 1],[25, 179],[26, 1],[27, 1],[28, 1],[29, 1],[30, 178],[31, 59],[32, 60],[33, 61],[34, 61],[35, 59],[36, 59]])

export const light_error_Button = n89
const n90 = t([[14, 59],[15, 52],[16, 1],[17, 179],[18, 88],[19, 178],[20, 1],[21, 51],[22, 52],[23, 52],[24, 1],[25, 179],[26, 88],[27, 61],[28, 88],[29, 61],[30, 178],[31, 54],[32, 55],[33, 54],[34, 54],[35, 59],[36, 59]])

export const light_error_Checkbox = n90
const n91 = t([[14, 61],[15, 54],[16, 51],[17, 50],[18, 60],[19, 61],[20, 51],[21, 53],[22, 54],[23, 54],[24, 51],[25, 50],[26, 60],[27, 59],[28, 60],[29, 59],[30, 61],[31, 54],[32, 55],[33, 54],[34, 54],[35, 57],[36, 61]])

export const light_error_Switch = n91
export const light_error_TooltipContent = n91
export const light_error_SliderTrack = n91
const n92 = t([[14, 54],[15, 61],[16, 178],[17, 178],[18, 179],[19, 179],[20, 178],[21, 88],[22, 61],[23, 61],[24, 178],[25, 178],[26, 179],[27, 179],[28, 179],[29, 179],[30, 179],[31, 61],[32, 60],[33, 61],[34, 61],[35, 50],[36, 54]])

export const light_error_SwitchThumb = n92
const n93 = t([[14, 59],[15, 52],[16, 1],[17, 179],[18, 88],[19, 178],[20, 1],[21, 51],[22, 52],[23, 52],[24, 1],[25, 179],[26, 88],[27, 61],[28, 88],[29, 61],[30, 178],[31, 53],[32, 54],[33, 53],[34, 53],[35, 59],[36, 59]])

export const light_error_RadioGroupItem = n93
const n94 = t([[14, 50],[15, 57],[16, 60],[17, 61],[18, 51],[19, 50],[20, 60],[21, 58],[22, 57],[23, 57],[24, 60],[25, 61],[26, 51],[27, 52],[28, 51],[29, 52],[30, 50],[31, 57],[32, 55],[33, 57],[34, 57],[35, 54],[36, 50]])

export const light_error_SliderTrackActive = n94
const n95 = t([[14, 52],[15, 59],[16, 88],[17, 178],[18, 1],[19, 179],[20, 88],[21, 60],[22, 59],[23, 59],[24, 88],[25, 178],[26, 1],[27, 50],[28, 1],[29, 50],[30, 179],[31, 59],[32, 58],[33, 59],[34, 59],[35, 52],[36, 52]])

export const light_error_SliderThumb = n95
export const light_error_Tooltip = n95
export const light_error_ProgressIndicator = n95
const n96 = t([[14, 59],[15, 52],[16, 1],[17, 179],[18, 88],[19, 178],[20, 1],[21, 51],[22, 52],[23, 52],[24, 1],[25, 179],[26, 88],[27, 61],[28, 88],[29, 61],[30, 178],[31, 52],[32, 53],[33, 52],[34, 52],[35, 59],[36, 59]])

export const light_error_Input = n96
export const light_error_TextArea = n96
const n97 = t([[14, 82],[15, 75],[16, 181],[17, 181],[18, 180],[19, 180],[20, 181],[21, 74],[22, 75],[23, 75],[24, 181],[25, 181],[26, 180],[27, 88],[28, 180],[29, 88],[30, 180],[31, 75],[32, 76],[33, 75],[34, 75],[35, 84],[36, 82]])

export const light_info_ListItem = n97
const n98 = t([[14, 84],[15, 77],[16, 74],[17, 1],[18, 85],[19, 88],[20, 74],[21, 76],[22, 77],[23, 77],[24, 74],[25, 1],[26, 85],[27, 84],[28, 85],[29, 84],[30, 88],[31, 77],[32, 78],[33, 77],[34, 77],[35, 82],[36, 84]])

export const light_info_Card = n98
export const light_info_DrawerFrame = n98
export const light_info_Progress = n98
export const light_info_TooltipArrow = n98
const n99 = t([[14, 83],[15, 76],[16, 1],[17, 181],[18, 88],[19, 180],[20, 83],[21, 84],[22, 85],[23, 85],[24, 1],[25, 181],[26, 1],[27, 1],[28, 1],[29, 1],[30, 180],[31, 83],[32, 84],[33, 85],[34, 85],[35, 83],[36, 83]])

export const light_info_Button = n99
const n100 = t([[14, 83],[15, 76],[16, 1],[17, 181],[18, 88],[19, 180],[20, 1],[21, 75],[22, 76],[23, 76],[24, 1],[25, 181],[26, 88],[27, 85],[28, 88],[29, 85],[30, 180],[31, 78],[32, 79],[33, 78],[34, 78],[35, 83],[36, 83]])

export const light_info_Checkbox = n100
const n101 = t([[14, 85],[15, 78],[16, 75],[17, 74],[18, 84],[19, 85],[20, 75],[21, 77],[22, 78],[23, 78],[24, 75],[25, 74],[26, 84],[27, 83],[28, 84],[29, 83],[30, 85],[31, 78],[32, 79],[33, 78],[34, 78],[35, 81],[36, 85]])

export const light_info_Switch = n101
export const light_info_TooltipContent = n101
export const light_info_SliderTrack = n101
const n102 = t([[14, 78],[15, 85],[16, 180],[17, 180],[18, 181],[19, 181],[20, 180],[21, 88],[22, 85],[23, 85],[24, 180],[25, 180],[26, 181],[27, 181],[28, 181],[29, 181],[30, 181],[31, 85],[32, 84],[33, 85],[34, 85],[35, 74],[36, 78]])

export const light_info_SwitchThumb = n102
const n103 = t([[14, 83],[15, 76],[16, 1],[17, 181],[18, 88],[19, 180],[20, 1],[21, 75],[22, 76],[23, 76],[24, 1],[25, 181],[26, 88],[27, 85],[28, 88],[29, 85],[30, 180],[31, 77],[32, 78],[33, 77],[34, 77],[35, 83],[36, 83]])

export const light_info_RadioGroupItem = n103
const n104 = t([[14, 74],[15, 81],[16, 84],[17, 85],[18, 75],[19, 74],[20, 84],[21, 82],[22, 81],[23, 81],[24, 84],[25, 85],[26, 75],[27, 76],[28, 75],[29, 76],[30, 74],[31, 81],[32, 79],[33, 81],[34, 81],[35, 78],[36, 74]])

export const light_info_SliderTrackActive = n104
const n105 = t([[14, 76],[15, 83],[16, 88],[17, 180],[18, 1],[19, 181],[20, 88],[21, 84],[22, 83],[23, 83],[24, 88],[25, 180],[26, 1],[27, 74],[28, 1],[29, 74],[30, 181],[31, 83],[32, 82],[33, 83],[34, 83],[35, 76],[36, 76]])

export const light_info_SliderThumb = n105
export const light_info_Tooltip = n105
export const light_info_ProgressIndicator = n105
const n106 = t([[14, 83],[15, 76],[16, 1],[17, 181],[18, 88],[19, 180],[20, 1],[21, 75],[22, 76],[23, 76],[24, 1],[25, 181],[26, 88],[27, 85],[28, 88],[29, 85],[30, 180],[31, 76],[32, 77],[33, 76],[34, 76],[35, 83],[36, 83]])

export const light_info_Input = n106
export const light_info_TextArea = n106
const n107 = t([[14, 23],[15, 100],[16, 88],[17, 183],[18, 1],[19, 182],[20, 88],[21, 99],[22, 100],[23, 100],[24, 88],[25, 183],[26, 1],[27, 108],[28, 1],[29, 108],[30, 182],[31, 23],[32, 108],[33, 107],[34, 107],[35, 23],[36, 23]])

export const dark_brand_ListItem = n107
export const dark_brand_Input = n107
export const dark_brand_TextArea = n107
export const dark_accent_ListItem = n107
export const dark_accent_Input = n107
export const dark_accent_TextArea = n107
const n108 = t([[14, 107],[15, 101],[16, 98],[17, 88],[18, 108],[19, 1],[20, 98],[21, 100],[22, 101],[23, 101],[24, 98],[25, 88],[26, 108],[27, 107],[28, 108],[29, 107],[30, 1],[31, 106],[32, 107],[33, 23],[34, 23],[35, 106],[36, 107]])

export const dark_brand_Card = n108
export const dark_brand_DrawerFrame = n108
export const dark_brand_Progress = n108
export const dark_brand_TooltipArrow = n108
export const dark_accent_Card = n108
export const dark_accent_DrawerFrame = n108
export const dark_accent_Progress = n108
export const dark_accent_TooltipArrow = n108
const n109 = t([[14, 23],[15, 100],[16, 88],[17, 183],[18, 1],[19, 182],[20, 23],[21, 107],[22, 108],[23, 108],[24, 88],[25, 183],[26, 88],[27, 88],[28, 88],[29, 88],[30, 182],[31, 23],[32, 107],[33, 108],[34, 108],[35, 23],[36, 23]])

export const dark_brand_Button = n109
export const dark_accent_Button = n109
const n110 = t([[14, 23],[15, 100],[16, 88],[17, 183],[18, 1],[19, 182],[20, 88],[21, 99],[22, 100],[23, 100],[24, 88],[25, 183],[26, 1],[27, 108],[28, 1],[29, 108],[30, 182],[31, 105],[32, 23],[33, 106],[34, 106],[35, 23],[36, 23]])

export const dark_brand_Checkbox = n110
export const dark_accent_Checkbox = n110
const n111 = t([[14, 108],[15, 102],[16, 99],[17, 98],[18, 107],[19, 108],[20, 99],[21, 101],[22, 102],[23, 102],[24, 99],[25, 98],[26, 107],[27, 23],[28, 107],[29, 23],[30, 108],[31, 105],[32, 23],[33, 106],[34, 106],[35, 105],[36, 108]])

export const dark_brand_Switch = n111
export const dark_brand_TooltipContent = n111
export const dark_brand_SliderTrack = n111
export const dark_accent_Switch = n111
export const dark_accent_TooltipContent = n111
export const dark_accent_SliderTrack = n111
const n112 = t([[14, 102],[15, 108],[16, 182],[17, 182],[18, 183],[19, 183],[20, 182],[21, 1],[22, 108],[23, 108],[24, 182],[25, 182],[26, 183],[27, 183],[28, 183],[29, 183],[30, 183],[31, 98],[32, 183],[33, 88],[34, 88],[35, 98],[36, 102]])

export const dark_brand_SwitchThumb = n112
export const dark_accent_SwitchThumb = n112
const n113 = t([[14, 23],[15, 100],[16, 88],[17, 183],[18, 1],[19, 182],[20, 88],[21, 99],[22, 100],[23, 100],[24, 88],[25, 183],[26, 1],[27, 108],[28, 1],[29, 108],[30, 182],[31, 106],[32, 107],[33, 23],[34, 23],[35, 23],[36, 23]])

export const dark_brand_RadioGroupItem = n113
export const dark_accent_RadioGroupItem = n113
const n114 = t([[14, 98],[15, 105],[16, 107],[17, 108],[18, 99],[19, 98],[20, 107],[21, 106],[22, 105],[23, 105],[24, 107],[25, 108],[26, 99],[27, 100],[28, 99],[29, 100],[30, 98],[31, 102],[32, 100],[33, 101],[34, 101],[35, 102],[36, 98]])

export const dark_brand_SliderTrackActive = n114
export const dark_accent_SliderTrackActive = n114
const n115 = t([[14, 100],[15, 23],[16, 1],[17, 182],[18, 88],[19, 183],[20, 1],[21, 107],[22, 23],[23, 23],[24, 1],[25, 182],[26, 88],[27, 98],[28, 88],[29, 98],[30, 183],[31, 100],[32, 98],[33, 99],[34, 99],[35, 100],[36, 100]])

export const dark_brand_SliderThumb = n115
export const dark_brand_Tooltip = n115
export const dark_brand_ProgressIndicator = n115
export const dark_accent_SliderThumb = n115
export const dark_accent_Tooltip = n115
export const dark_accent_ProgressIndicator = n115
const n116 = t([[14, 118],[15, 111],[16, 88],[17, 185],[18, 1],[19, 184],[20, 88],[21, 110],[22, 111],[23, 111],[24, 88],[25, 185],[26, 1],[27, 120],[28, 1],[29, 120],[30, 184],[31, 118],[32, 120],[33, 119],[34, 119],[35, 118],[36, 118]])

export const dark_help_ListItem = n116
export const dark_help_Input = n116
export const dark_help_TextArea = n116
const n117 = t([[14, 119],[15, 112],[16, 109],[17, 88],[18, 120],[19, 1],[20, 109],[21, 111],[22, 112],[23, 112],[24, 109],[25, 88],[26, 120],[27, 119],[28, 120],[29, 119],[30, 1],[31, 117],[32, 119],[33, 118],[34, 118],[35, 117],[36, 119]])

export const dark_help_Card = n117
export const dark_help_DrawerFrame = n117
export const dark_help_Progress = n117
export const dark_help_TooltipArrow = n117
const n118 = t([[14, 118],[15, 111],[16, 88],[17, 185],[18, 1],[19, 184],[20, 118],[21, 119],[22, 120],[23, 120],[24, 88],[25, 185],[26, 88],[27, 88],[28, 88],[29, 88],[30, 184],[31, 118],[32, 119],[33, 120],[34, 120],[35, 118],[36, 118]])

export const dark_help_Button = n118
const n119 = t([[14, 118],[15, 111],[16, 88],[17, 185],[18, 1],[19, 184],[20, 88],[21, 110],[22, 111],[23, 111],[24, 88],[25, 185],[26, 1],[27, 120],[28, 1],[29, 120],[30, 184],[31, 116],[32, 118],[33, 117],[34, 117],[35, 118],[36, 118]])

export const dark_help_Checkbox = n119
const n120 = t([[14, 120],[15, 113],[16, 110],[17, 109],[18, 119],[19, 120],[20, 110],[21, 112],[22, 113],[23, 113],[24, 110],[25, 109],[26, 119],[27, 118],[28, 119],[29, 118],[30, 120],[31, 116],[32, 118],[33, 117],[34, 117],[35, 116],[36, 120]])

export const dark_help_Switch = n120
export const dark_help_TooltipContent = n120
export const dark_help_SliderTrack = n120
const n121 = t([[14, 113],[15, 120],[16, 184],[17, 184],[18, 185],[19, 185],[20, 184],[21, 1],[22, 120],[23, 120],[24, 184],[25, 184],[26, 185],[27, 185],[28, 185],[29, 185],[30, 185],[31, 109],[32, 185],[33, 88],[34, 88],[35, 109],[36, 113]])

export const dark_help_SwitchThumb = n121
const n122 = t([[14, 118],[15, 111],[16, 88],[17, 185],[18, 1],[19, 184],[20, 88],[21, 110],[22, 111],[23, 111],[24, 88],[25, 185],[26, 1],[27, 120],[28, 1],[29, 120],[30, 184],[31, 117],[32, 119],[33, 118],[34, 118],[35, 118],[36, 118]])

export const dark_help_RadioGroupItem = n122
const n123 = t([[14, 109],[15, 116],[16, 119],[17, 120],[18, 110],[19, 109],[20, 119],[21, 117],[22, 116],[23, 116],[24, 119],[25, 120],[26, 110],[27, 111],[28, 110],[29, 111],[30, 109],[31, 113],[32, 111],[33, 112],[34, 112],[35, 113],[36, 109]])

export const dark_help_SliderTrackActive = n123
const n124 = t([[14, 111],[15, 118],[16, 1],[17, 184],[18, 88],[19, 185],[20, 1],[21, 119],[22, 118],[23, 118],[24, 1],[25, 184],[26, 88],[27, 109],[28, 88],[29, 109],[30, 185],[31, 111],[32, 109],[33, 110],[34, 110],[35, 111],[36, 111]])

export const dark_help_SliderThumb = n124
export const dark_help_Tooltip = n124
export const dark_help_ProgressIndicator = n124
const n125 = t([[14, 47],[15, 123],[16, 88],[17, 187],[18, 1],[19, 186],[20, 88],[21, 122],[22, 123],[23, 123],[24, 88],[25, 187],[26, 1],[27, 131],[28, 1],[29, 131],[30, 186],[31, 47],[32, 131],[33, 130],[34, 130],[35, 47],[36, 47]])

export const dark_success_ListItem = n125
export const dark_success_Input = n125
export const dark_success_TextArea = n125
const n126 = t([[14, 130],[15, 124],[16, 121],[17, 88],[18, 131],[19, 1],[20, 121],[21, 123],[22, 124],[23, 124],[24, 121],[25, 88],[26, 131],[27, 130],[28, 131],[29, 130],[30, 1],[31, 129],[32, 130],[33, 47],[34, 47],[35, 129],[36, 130]])

export const dark_success_Card = n126
export const dark_success_DrawerFrame = n126
export const dark_success_Progress = n126
export const dark_success_TooltipArrow = n126
const n127 = t([[14, 47],[15, 123],[16, 88],[17, 187],[18, 1],[19, 186],[20, 47],[21, 130],[22, 131],[23, 131],[24, 88],[25, 187],[26, 88],[27, 88],[28, 88],[29, 88],[30, 186],[31, 47],[32, 130],[33, 131],[34, 131],[35, 47],[36, 47]])

export const dark_success_Button = n127
const n128 = t([[14, 47],[15, 123],[16, 88],[17, 187],[18, 1],[19, 186],[20, 88],[21, 122],[22, 123],[23, 123],[24, 88],[25, 187],[26, 1],[27, 131],[28, 1],[29, 131],[30, 186],[31, 128],[32, 47],[33, 129],[34, 129],[35, 47],[36, 47]])

export const dark_success_Checkbox = n128
const n129 = t([[14, 131],[15, 125],[16, 122],[17, 121],[18, 130],[19, 131],[20, 122],[21, 124],[22, 125],[23, 125],[24, 122],[25, 121],[26, 130],[27, 47],[28, 130],[29, 47],[30, 131],[31, 128],[32, 47],[33, 129],[34, 129],[35, 128],[36, 131]])

export const dark_success_Switch = n129
export const dark_success_TooltipContent = n129
export const dark_success_SliderTrack = n129
const n130 = t([[14, 125],[15, 131],[16, 186],[17, 186],[18, 187],[19, 187],[20, 186],[21, 1],[22, 131],[23, 131],[24, 186],[25, 186],[26, 187],[27, 187],[28, 187],[29, 187],[30, 187],[31, 121],[32, 187],[33, 88],[34, 88],[35, 121],[36, 125]])

export const dark_success_SwitchThumb = n130
const n131 = t([[14, 47],[15, 123],[16, 88],[17, 187],[18, 1],[19, 186],[20, 88],[21, 122],[22, 123],[23, 123],[24, 88],[25, 187],[26, 1],[27, 131],[28, 1],[29, 131],[30, 186],[31, 129],[32, 130],[33, 47],[34, 47],[35, 47],[36, 47]])

export const dark_success_RadioGroupItem = n131
const n132 = t([[14, 121],[15, 128],[16, 130],[17, 131],[18, 122],[19, 121],[20, 130],[21, 129],[22, 128],[23, 128],[24, 130],[25, 131],[26, 122],[27, 123],[28, 122],[29, 123],[30, 121],[31, 125],[32, 123],[33, 124],[34, 124],[35, 125],[36, 121]])

export const dark_success_SliderTrackActive = n132
const n133 = t([[14, 123],[15, 47],[16, 1],[17, 186],[18, 88],[19, 187],[20, 1],[21, 130],[22, 47],[23, 47],[24, 1],[25, 186],[26, 88],[27, 121],[28, 88],[29, 121],[30, 187],[31, 123],[32, 121],[33, 122],[34, 122],[35, 123],[36, 123]])

export const dark_success_SliderThumb = n133
export const dark_success_Tooltip = n133
export const dark_success_ProgressIndicator = n133
const n134 = t([[14, 153],[15, 146],[16, 88],[17, 189],[18, 1],[19, 188],[20, 88],[21, 145],[22, 146],[23, 146],[24, 88],[25, 189],[26, 1],[27, 155],[28, 1],[29, 155],[30, 188],[31, 153],[32, 155],[33, 154],[34, 154],[35, 153],[36, 153]])

export const dark_warning_ListItem = n134
export const dark_warning_Input = n134
export const dark_warning_TextArea = n134
const n135 = t([[14, 154],[15, 147],[16, 144],[17, 88],[18, 155],[19, 1],[20, 144],[21, 146],[22, 147],[23, 147],[24, 144],[25, 88],[26, 155],[27, 154],[28, 155],[29, 154],[30, 1],[31, 152],[32, 154],[33, 153],[34, 153],[35, 152],[36, 154]])

export const dark_warning_Card = n135
export const dark_warning_DrawerFrame = n135
export const dark_warning_Progress = n135
export const dark_warning_TooltipArrow = n135
const n136 = t([[14, 153],[15, 146],[16, 88],[17, 189],[18, 1],[19, 188],[20, 153],[21, 154],[22, 155],[23, 155],[24, 88],[25, 189],[26, 88],[27, 88],[28, 88],[29, 88],[30, 188],[31, 153],[32, 154],[33, 155],[34, 155],[35, 153],[36, 153]])

export const dark_warning_Button = n136
const n137 = t([[14, 153],[15, 146],[16, 88],[17, 189],[18, 1],[19, 188],[20, 88],[21, 145],[22, 146],[23, 146],[24, 88],[25, 189],[26, 1],[27, 155],[28, 1],[29, 155],[30, 188],[31, 151],[32, 153],[33, 152],[34, 152],[35, 153],[36, 153]])

export const dark_warning_Checkbox = n137
const n138 = t([[14, 155],[15, 148],[16, 145],[17, 144],[18, 154],[19, 155],[20, 145],[21, 147],[22, 148],[23, 148],[24, 145],[25, 144],[26, 154],[27, 153],[28, 154],[29, 153],[30, 155],[31, 151],[32, 153],[33, 152],[34, 152],[35, 151],[36, 155]])

export const dark_warning_Switch = n138
export const dark_warning_TooltipContent = n138
export const dark_warning_SliderTrack = n138
const n139 = t([[14, 148],[15, 155],[16, 188],[17, 188],[18, 189],[19, 189],[20, 188],[21, 1],[22, 155],[23, 155],[24, 188],[25, 188],[26, 189],[27, 189],[28, 189],[29, 189],[30, 189],[31, 144],[32, 189],[33, 88],[34, 88],[35, 144],[36, 148]])

export const dark_warning_SwitchThumb = n139
const n140 = t([[14, 153],[15, 146],[16, 88],[17, 189],[18, 1],[19, 188],[20, 88],[21, 145],[22, 146],[23, 146],[24, 88],[25, 189],[26, 1],[27, 155],[28, 1],[29, 155],[30, 188],[31, 152],[32, 154],[33, 153],[34, 153],[35, 153],[36, 153]])

export const dark_warning_RadioGroupItem = n140
const n141 = t([[14, 144],[15, 151],[16, 154],[17, 155],[18, 145],[19, 144],[20, 154],[21, 152],[22, 151],[23, 151],[24, 154],[25, 155],[26, 145],[27, 146],[28, 145],[29, 146],[30, 144],[31, 148],[32, 146],[33, 147],[34, 147],[35, 148],[36, 144]])

export const dark_warning_SliderTrackActive = n141
const n142 = t([[14, 146],[15, 153],[16, 1],[17, 188],[18, 88],[19, 189],[20, 1],[21, 154],[22, 153],[23, 153],[24, 1],[25, 188],[26, 88],[27, 144],[28, 88],[29, 144],[30, 189],[31, 146],[32, 144],[33, 145],[34, 145],[35, 146],[36, 146]])

export const dark_warning_SliderThumb = n142
export const dark_warning_Tooltip = n142
export const dark_warning_ProgressIndicator = n142
const n143 = t([[14, 141],[15, 134],[16, 88],[17, 191],[18, 1],[19, 190],[20, 88],[21, 133],[22, 134],[23, 134],[24, 88],[25, 191],[26, 1],[27, 143],[28, 1],[29, 143],[30, 190],[31, 141],[32, 143],[33, 142],[34, 142],[35, 141],[36, 141]])

export const dark_error_ListItem = n143
export const dark_error_Input = n143
export const dark_error_TextArea = n143
const n144 = t([[14, 142],[15, 135],[16, 132],[17, 88],[18, 143],[19, 1],[20, 132],[21, 134],[22, 135],[23, 135],[24, 132],[25, 88],[26, 143],[27, 142],[28, 143],[29, 142],[30, 1],[31, 140],[32, 142],[33, 141],[34, 141],[35, 140],[36, 142]])

export const dark_error_Card = n144
export const dark_error_DrawerFrame = n144
export const dark_error_Progress = n144
export const dark_error_TooltipArrow = n144
const n145 = t([[14, 141],[15, 134],[16, 88],[17, 191],[18, 1],[19, 190],[20, 141],[21, 142],[22, 143],[23, 143],[24, 88],[25, 191],[26, 88],[27, 88],[28, 88],[29, 88],[30, 190],[31, 141],[32, 142],[33, 143],[34, 143],[35, 141],[36, 141]])

export const dark_error_Button = n145
const n146 = t([[14, 141],[15, 134],[16, 88],[17, 191],[18, 1],[19, 190],[20, 88],[21, 133],[22, 134],[23, 134],[24, 88],[25, 191],[26, 1],[27, 143],[28, 1],[29, 143],[30, 190],[31, 139],[32, 141],[33, 140],[34, 140],[35, 141],[36, 141]])

export const dark_error_Checkbox = n146
const n147 = t([[14, 143],[15, 136],[16, 133],[17, 132],[18, 142],[19, 143],[20, 133],[21, 135],[22, 136],[23, 136],[24, 133],[25, 132],[26, 142],[27, 141],[28, 142],[29, 141],[30, 143],[31, 139],[32, 141],[33, 140],[34, 140],[35, 139],[36, 143]])

export const dark_error_Switch = n147
export const dark_error_TooltipContent = n147
export const dark_error_SliderTrack = n147
const n148 = t([[14, 136],[15, 143],[16, 190],[17, 190],[18, 191],[19, 191],[20, 190],[21, 1],[22, 143],[23, 143],[24, 190],[25, 190],[26, 191],[27, 191],[28, 191],[29, 191],[30, 191],[31, 132],[32, 191],[33, 88],[34, 88],[35, 132],[36, 136]])

export const dark_error_SwitchThumb = n148
const n149 = t([[14, 141],[15, 134],[16, 88],[17, 191],[18, 1],[19, 190],[20, 88],[21, 133],[22, 134],[23, 134],[24, 88],[25, 191],[26, 1],[27, 143],[28, 1],[29, 143],[30, 190],[31, 140],[32, 142],[33, 141],[34, 141],[35, 141],[36, 141]])

export const dark_error_RadioGroupItem = n149
const n150 = t([[14, 132],[15, 139],[16, 142],[17, 143],[18, 133],[19, 132],[20, 142],[21, 140],[22, 139],[23, 139],[24, 142],[25, 143],[26, 133],[27, 134],[28, 133],[29, 134],[30, 132],[31, 136],[32, 134],[33, 135],[34, 135],[35, 136],[36, 132]])

export const dark_error_SliderTrackActive = n150
const n151 = t([[14, 134],[15, 141],[16, 1],[17, 190],[18, 88],[19, 191],[20, 1],[21, 142],[22, 141],[23, 141],[24, 1],[25, 190],[26, 88],[27, 132],[28, 88],[29, 132],[30, 191],[31, 134],[32, 132],[33, 133],[34, 133],[35, 134],[36, 134]])

export const dark_error_SliderThumb = n151
export const dark_error_Tooltip = n151
export const dark_error_ProgressIndicator = n151
const n152 = t([[14, 165],[15, 158],[16, 88],[17, 193],[18, 1],[19, 192],[20, 88],[21, 157],[22, 158],[23, 158],[24, 88],[25, 193],[26, 1],[27, 167],[28, 1],[29, 167],[30, 192],[31, 165],[32, 167],[33, 166],[34, 166],[35, 165],[36, 165]])

export const dark_info_ListItem = n152
export const dark_info_Input = n152
export const dark_info_TextArea = n152
const n153 = t([[14, 166],[15, 159],[16, 156],[17, 88],[18, 167],[19, 1],[20, 156],[21, 158],[22, 159],[23, 159],[24, 156],[25, 88],[26, 167],[27, 166],[28, 167],[29, 166],[30, 1],[31, 164],[32, 166],[33, 165],[34, 165],[35, 164],[36, 166]])

export const dark_info_Card = n153
export const dark_info_DrawerFrame = n153
export const dark_info_Progress = n153
export const dark_info_TooltipArrow = n153
const n154 = t([[14, 165],[15, 158],[16, 88],[17, 193],[18, 1],[19, 192],[20, 165],[21, 166],[22, 167],[23, 167],[24, 88],[25, 193],[26, 88],[27, 88],[28, 88],[29, 88],[30, 192],[31, 165],[32, 166],[33, 167],[34, 167],[35, 165],[36, 165]])

export const dark_info_Button = n154
const n155 = t([[14, 165],[15, 158],[16, 88],[17, 193],[18, 1],[19, 192],[20, 88],[21, 157],[22, 158],[23, 158],[24, 88],[25, 193],[26, 1],[27, 167],[28, 1],[29, 167],[30, 192],[31, 163],[32, 165],[33, 164],[34, 164],[35, 165],[36, 165]])

export const dark_info_Checkbox = n155
const n156 = t([[14, 167],[15, 160],[16, 157],[17, 156],[18, 166],[19, 167],[20, 157],[21, 159],[22, 160],[23, 160],[24, 157],[25, 156],[26, 166],[27, 165],[28, 166],[29, 165],[30, 167],[31, 163],[32, 165],[33, 164],[34, 164],[35, 163],[36, 167]])

export const dark_info_Switch = n156
export const dark_info_TooltipContent = n156
export const dark_info_SliderTrack = n156
const n157 = t([[14, 160],[15, 167],[16, 192],[17, 192],[18, 193],[19, 193],[20, 192],[21, 1],[22, 167],[23, 167],[24, 192],[25, 192],[26, 193],[27, 193],[28, 193],[29, 193],[30, 193],[31, 156],[32, 193],[33, 88],[34, 88],[35, 156],[36, 160]])

export const dark_info_SwitchThumb = n157
const n158 = t([[14, 165],[15, 158],[16, 88],[17, 193],[18, 1],[19, 192],[20, 88],[21, 157],[22, 158],[23, 158],[24, 88],[25, 193],[26, 1],[27, 167],[28, 1],[29, 167],[30, 192],[31, 164],[32, 166],[33, 165],[34, 165],[35, 165],[36, 165]])

export const dark_info_RadioGroupItem = n158
const n159 = t([[14, 156],[15, 163],[16, 166],[17, 167],[18, 157],[19, 156],[20, 166],[21, 164],[22, 163],[23, 163],[24, 166],[25, 167],[26, 157],[27, 158],[28, 157],[29, 158],[30, 156],[31, 160],[32, 158],[33, 159],[34, 159],[35, 160],[36, 156]])

export const dark_info_SliderTrackActive = n159
const n160 = t([[14, 158],[15, 165],[16, 1],[17, 192],[18, 88],[19, 193],[20, 1],[21, 166],[22, 165],[23, 165],[24, 1],[25, 192],[26, 88],[27, 156],[28, 88],[29, 156],[30, 193],[31, 158],[32, 156],[33, 157],[34, 157],[35, 158],[36, 158]])

export const dark_info_SliderThumb = n160
export const dark_info_Tooltip = n160
export const dark_info_ProgressIndicator = n160