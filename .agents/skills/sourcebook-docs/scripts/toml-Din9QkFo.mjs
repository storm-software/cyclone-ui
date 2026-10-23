import{t as e}from"./_format-BTht7T7g.mjs";
/*!
* Copyright (c) Squirrel Chat et al., All rights reserved.
* SPDX-License-Identifier: BSD-3-Clause
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
* 1. Redistributions of source code must retain the above copyright notice, this
*    list of conditions and the following disclaimer.
* 2. Redistributions in binary form must reproduce the above copyright notice,
*    this list of conditions and the following disclaimer in the
*    documentation and/or other materials provided with the distribution.
* 3. Neither the name of the copyright holder nor the names of its contributors
*    may be used to endorse or promote products derived from this software without
*    specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
* ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
* SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function t(e,t){let n=e.slice(0,t).split(/\r\n|\n|\r/g);return[n.length,n.pop().length+1]}function n(e,t,n){let r=e.split(/\r\n|\n|\r/g),i=``,a=(Math.log10(t+1)|0)+1;for(let e=t-1;e<=t+1;e++){let o=r[e-1];o&&(i+=e.toString().padEnd(a,` `),i+=`:  `,i+=o,i+=`
`,e===t&&(i+=` `.repeat(a+n+2),i+=`^
`))}return i}var r=class extends Error{line;column;codeblock;constructor(e,r){let[i,a]=t(r.toml,r.ptr),o=n(r.toml,i,a);super(`Invalid TOML document: ${e}\n\n${o}`,r),this.line=i,this.column=a,this.codeblock=o}};
/*!
* Copyright (c) Squirrel Chat et al., All rights reserved.
* SPDX-License-Identifier: BSD-3-Clause
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
* 1. Redistributions of source code must retain the above copyright notice, this
*    list of conditions and the following disclaimer.
* 2. Redistributions in binary form must reproduce the above copyright notice,
*    this list of conditions and the following disclaimer in the
*    documentation and/or other materials provided with the distribution.
* 3. Neither the name of the copyright holder nor the names of its contributors
*    may be used to endorse or promote products derived from this software without
*    specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
* ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
* SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function i(e,t){let n=0;for(;e[t-++n]===`\\`;);return--n&&n%2}function a(e,t=0,n=e.length){let r=e.indexOf(`
`,t);return e[r-1]===`\r`&&r--,r<=n?r:-1}function o(e,t){for(let n=t;n<e.length;n++){let i=e[n];if(i===`
`)return n;if(i===`\r`&&e[n+1]===`
`)return n+1;if(i<` `&&i!==`	`||i===``)throw new r(`control characters are not allowed in comments`,{toml:e,ptr:t})}return e.length}function s(e,t,n,r){let i;for(;(i=e[t])===` `||i===`	`||!n&&(i===`
`||i===`\r`&&e[t+1]===`
`);)t++;return r||i!==`#`?t:s(e,o(e,t),n)}function c(e,t,n,i,o=!1){if(!i)return t=a(e,t),t<0?e.length:t;for(let r=t;r<e.length;r++){let t=e[r];if(t===`#`)r=a(e,r);else if(t===n)return r+1;else if(t===i||o&&(t===`
`||t===`\r`&&e[r+1]===`
`))return r}throw new r(`cannot find end of structure`,{toml:e,ptr:t})}function l(e,t){let n=e[t],r=n===e[t+1]&&e[t+1]===e[t+2]?e.slice(t,t+3):n;t+=r.length-1;do t=e.indexOf(r,++t);while(t>-1&&n!==`'`&&i(e,t));return t>-1&&(t+=r.length,r.length>1&&(e[t]===n&&t++,e[t]===n&&t++)),t}
/*!
* Copyright (c) Squirrel Chat et al., All rights reserved.
* SPDX-License-Identifier: BSD-3-Clause
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
* 1. Redistributions of source code must retain the above copyright notice, this
*    list of conditions and the following disclaimer.
* 2. Redistributions in binary form must reproduce the above copyright notice,
*    this list of conditions and the following disclaimer in the
*    documentation and/or other materials provided with the distribution.
* 3. Neither the name of the copyright holder nor the names of its contributors
*    may be used to endorse or promote products derived from this software without
*    specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
* ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
* SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
let u=/^(\d{4}-\d{2}-\d{2})?[T ]?(?:(\d{2}):\d{2}(?::\d{2}(?:\.\d+)?)?)?(Z|[-+]\d{2}:\d{2})?$/i;var d=class e extends Date{#e=!1;#t=!1;#n=null;constructor(e){let t=!0,n=!0,r=`Z`;if(typeof e==`string`){let i=e.match(u);i?(i[1]||(t=!1,e=`0000-01-01T${e}`),n=!!i[2],n&&e[10]===` `&&(e=e.replace(` `,`T`)),i[2]&&+i[2]>23?e=``:(r=i[3]||null,e=e.toUpperCase(),!r&&n&&(e+=`Z`))):e=``}super(e),isNaN(this.getTime())||(this.#e=t,this.#t=n,this.#n=r)}isDateTime(){return this.#e&&this.#t}isLocal(){return!this.#e||!this.#t||!this.#n}isDate(){return this.#e&&!this.#t}isTime(){return this.#t&&!this.#e}isValid(){return this.#e||this.#t}toISOString(){let e=super.toISOString();if(this.isDate())return e.slice(0,10);if(this.isTime())return e.slice(11,23);if(this.#n===null)return e.slice(0,-1);if(this.#n===`Z`)return e;let t=this.#n.slice(1,3)*60+ +this.#n.slice(4,6);return t=this.#n[0]===`-`?t:-t,(/* @__PURE__ */ new Date(this.getTime()-t*6e4)).toISOString().slice(0,-1)+this.#n}static wrapAsOffsetDateTime(t,n=`Z`){let r=new e(t);return r.#n=n,r}static wrapAsLocalDateTime(t){let n=new e(t);return n.#n=null,n}static wrapAsLocalDate(t){let n=new e(t);return n.#t=!1,n.#n=null,n}static wrapAsLocalTime(t){let n=new e(t);return n.#e=!1,n.#n=null,n}};
/*!
* Copyright (c) Squirrel Chat et al., All rights reserved.
* SPDX-License-Identifier: BSD-3-Clause
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
* 1. Redistributions of source code must retain the above copyright notice, this
*    list of conditions and the following disclaimer.
* 2. Redistributions in binary form must reproduce the above copyright notice,
*    this list of conditions and the following disclaimer in the
*    documentation and/or other materials provided with the distribution.
* 3. Neither the name of the copyright holder nor the names of its contributors
*    may be used to endorse or promote products derived from this software without
*    specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
* ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
* SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
let f=/^((0x[0-9a-fA-F](_?[0-9a-fA-F])*)|(([+-]|0[ob])?\d(_?\d)*))$/,p=/^[+-]?\d(_?\d)*(\.\d(_?\d)*)?([eE][+-]?\d(_?\d)*)?$/,m=/^[+-]?0[0-9_]/,h=/^[0-9a-f]{2,8}$/i,g={b:`\b`,t:`	`,n:`
`,f:`\f`,r:`\r`,e:`\x1B`,'"':`"`,"\\":`\\`};function _(e,t=0,n=e.length){let i=e[t]===`'`,a=e[t++]===e[t]&&e[t]===e[t+1];a&&(n-=2,e[t+=2]===`\r`&&t++,e[t]===`
`&&t++);let o=0,c,l=``,u=t;for(;t<n-1;){let n=e[t++];if(n===`
`||n===`\r`&&e[t]===`
`){if(!a)throw new r(`newlines are not allowed in strings`,{toml:e,ptr:t-1})}else if(n<` `&&n!==`	`||n===``)throw new r(`control characters are not allowed in strings`,{toml:e,ptr:t-1});if(c){if(c=!1,n===`x`||n===`u`||n===`U`){let i=e.slice(t,t+=n===`x`?2:n===`u`?4:8);if(!h.test(i))throw new r(`invalid unicode escape`,{toml:e,ptr:o});try{l+=String.fromCodePoint(parseInt(i,16))}catch{throw new r(`invalid unicode escape`,{toml:e,ptr:o})}}else if(a&&(n===`
`||n===` `||n===`	`||n===`\r`)){if(t=s(e,t-1,!0),e[t]!==`
`&&e[t]!==`\r`)throw new r(`invalid escape: only line-ending whitespace may be escaped`,{toml:e,ptr:o});t=s(e,t)}else if(n in g)l+=g[n];else throw new r(`unrecognized escape sequence`,{toml:e,ptr:o});u=t}else!i&&n===`\\`&&(o=t-1,c=!0,l+=e.slice(u,o))}return l+e.slice(u,n-1)}function v(e,t,n,i){if(e===`true`)return!0;if(e===`false`)return!1;if(e===`-inf`)return-1/0;if(e===`inf`||e===`+inf`)return 1/0;if(e===`nan`||e===`+nan`||e===`-nan`)return NaN;if(e===`-0`)return i?0n:0;let a=f.test(e);if(a||p.test(e)){if(m.test(e))throw new r(`leading zeroes are not allowed`,{toml:t,ptr:n});e=e.replace(/_/g,``);let o=+e;if(isNaN(o))throw new r(`invalid number`,{toml:t,ptr:n});if(a){if((a=!Number.isSafeInteger(o))&&!i)throw new r(`integer value cannot be represented losslessly`,{toml:t,ptr:n});(a||i===!0)&&(o=BigInt(e))}return o}let o=new d(e);if(!o.isValid())throw new r(`invalid value`,{toml:t,ptr:n});return o}
/*!
* Copyright (c) Squirrel Chat et al., All rights reserved.
* SPDX-License-Identifier: BSD-3-Clause
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
* 1. Redistributions of source code must retain the above copyright notice, this
*    list of conditions and the following disclaimer.
* 2. Redistributions in binary form must reproduce the above copyright notice,
*    this list of conditions and the following disclaimer in the
*    documentation and/or other materials provided with the distribution.
* 3. Neither the name of the copyright holder nor the names of its contributors
*    may be used to endorse or promote products derived from this software without
*    specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
* ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
* SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function y(e,t,n){let r=e.slice(t,n),i=r.indexOf(`#`);return i>-1&&(o(e,i),r=r.slice(0,i)),[r.trimEnd(),i]}function b(e,t,n,i,a){if(i===0)throw new r(`document contains excessively nested structures. aborting.`,{toml:e,ptr:t});let o=e[t];if(o===`[`||o===`{`){let[c,l]=o===`[`?w(e,t,i,a):C(e,t,i,a);if(n){if(l=s(e,l),e[l]===`,`)l++;else if(e[l]!==n)throw new r(`expected comma or end of structure`,{toml:e,ptr:l})}return[c,l]}let u;if(o===`"`||o===`'`){u=l(e,t);let i=_(e,t,u);if(n){if(u=s(e,u),e[u]&&e[u]!==`,`&&e[u]!==n&&e[u]!==`
`&&e[u]!==`\r`)throw new r(`unexpected character encountered`,{toml:e,ptr:u});u+=+(e[u]===`,`)}return[i,u]}u=c(e,t,`,`,n);let d=y(e,t,u-+(e[u-1]===`,`));if(!d[0])throw new r(`incomplete key-value declaration: no value specified`,{toml:e,ptr:t});return n&&d[1]>-1&&(u=s(e,t+d[1]),u+=+(e[u]===`,`)),[v(d[0],e,t,a),u]}
/*!
* Copyright (c) Squirrel Chat et al., All rights reserved.
* SPDX-License-Identifier: BSD-3-Clause
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
* 1. Redistributions of source code must retain the above copyright notice, this
*    list of conditions and the following disclaimer.
* 2. Redistributions in binary form must reproduce the above copyright notice,
*    this list of conditions and the following disclaimer in the
*    documentation and/or other materials provided with the distribution.
* 3. Neither the name of the copyright holder nor the names of its contributors
*    may be used to endorse or promote products derived from this software without
*    specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
* ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
* SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
let x=/^[a-zA-Z0-9-_]+[ \t]*$/;function S(e,t,n=`=`){let i=t-1,o=[],c=e.indexOf(n,t);if(c<0)throw new r(`incomplete key-value: cannot find end of key`,{toml:e,ptr:t});do{let s=e[t=++i];if(s!==` `&&s!==`	`){if(s===`"`||s===`'`){if(s===e[t+1]&&s===e[t+2])throw new r(`multiline strings are not allowed in keys`,{toml:e,ptr:t});let u=l(e,t);if(u<0)throw new r(`unfinished string encountered`,{toml:e,ptr:t});i=e.indexOf(`.`,u);let d=e.slice(u,i<0||i>c?c:i),f=a(d);if(f>-1)throw new r(`newlines are not allowed in keys`,{toml:e,ptr:t+i+f});if(d.trimStart())throw new r(`found extra tokens after the string part`,{toml:e,ptr:u});if(c<u&&(c=e.indexOf(n,u),c<0))throw new r(`incomplete key-value: cannot find end of key`,{toml:e,ptr:t});o.push(_(e,t,u))}else{i=e.indexOf(`.`,t);let n=e.slice(t,i<0||i>c?c:i);if(!x.test(n))throw new r(`only letter, numbers, dashes and underscores are allowed in keys`,{toml:e,ptr:t});o.push(n.trimEnd())}}}while(i+1&&i<c);return[o,s(e,c+1,!0,!0)]}function C(e,t,n,i){let a={},s=/* @__PURE__ */ new Set,c;for(t++;(c=e[t++])!==`}`&&c;)if(c===`,`)throw new r(`expected value, found comma`,{toml:e,ptr:t-1});else if(c===`#`)t=o(e,t);else if(c!==` `&&c!==`	`&&c!==`
`&&c!==`\r`){let o,c=a,l=!1,[u,d]=S(e,t-1);for(let n=0;n<u.length;n++){if(n&&(c=l?c[o]:c[o]={}),o=u[n],(l=Object.hasOwn(c,o))&&(typeof c[o]!=`object`||s.has(c[o])))throw new r(`trying to redefine an already defined value`,{toml:e,ptr:t});!l&&o===`__proto__`&&Object.defineProperty(c,o,{enumerable:!0,configurable:!0,writable:!0})}if(l)throw new r(`trying to redefine an already defined value`,{toml:e,ptr:t});let[f,p]=b(e,d,`}`,n-1,i);s.add(f),c[o]=f,t=p}if(!c)throw new r(`unfinished table encountered`,{toml:e,ptr:t});return[a,t]}function w(e,t,n,i){let a=[],s;for(t++;(s=e[t++])!==`]`&&s;)if(s===`,`)throw new r(`expected value, found comma`,{toml:e,ptr:t-1});else if(s===`#`)t=o(e,t);else if(s!==` `&&s!==`	`&&s!==`
`&&s!==`\r`){let r=b(e,t-1,`]`,n-1,i);a.push(r[0]),t=r[1]}if(!s)throw new r(`unfinished array encountered`,{toml:e,ptr:t});return[a,t]}
/*!
* Copyright (c) Squirrel Chat et al., All rights reserved.
* SPDX-License-Identifier: BSD-3-Clause
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
* 1. Redistributions of source code must retain the above copyright notice, this
*    list of conditions and the following disclaimer.
* 2. Redistributions in binary form must reproduce the above copyright notice,
*    this list of conditions and the following disclaimer in the
*    documentation and/or other materials provided with the distribution.
* 3. Neither the name of the copyright holder nor the names of its contributors
*    may be used to endorse or promote products derived from this software without
*    specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
* ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
* SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function T(e,t,n,r){let i=t,a=n,o,s=!1,c;for(let t=0;t<e.length;t++){if(t){if(i=s?i[o]:i[o]={},a=(c=a[o]).c,r===0&&(c.t===1||c.t===2))return null;if(c.t===2){let e=i.length-1;i=i[e],a=a[e].c}}if(o=e[t],(s=Object.hasOwn(i,o))&&a[o]?.t===0&&a[o]?.d)return null;s||(o===`__proto__`&&(Object.defineProperty(i,o,{enumerable:!0,configurable:!0,writable:!0}),Object.defineProperty(a,o,{enumerable:!0,configurable:!0,writable:!0})),a[o]={t:t<e.length-1&&r===2?3:r,d:!1,i:0,c:{}})}if(c=a[o],c.t!==r&&(r!==1||c.t!==3)||(r===2&&(c.d||(c.d=!0,i[o]=[]),i[o].push(i={}),c.c[c.i++]=c={t:1,d:!1,i:0,c:{}}),c.d))return null;if(c.d=!0,r===1)i=s?i[o]:i[o]={};else if(r===0&&s)return null;return[o,i,c.c]}function E(e,{maxDepth:t=1e3,integersAsBigInt:n}={}){let i={},a={},o=i,c=a;for(let l=s(e,0);l<e.length;){if(e[l]===`[`){let t=e[++l]===`[`,n=S(e,l+=+t,`]`);if(t){if(e[n[1]-1]!==`]`)throw new r(`expected end of table declaration`,{toml:e,ptr:n[1]-1});n[1]++}let s=T(n[0],i,a,t?2:1);if(!s)throw new r(`trying to redefine an already defined table or value`,{toml:e,ptr:l});c=s[2],o=s[1],l=n[1]}else{let i=S(e,l),a=T(i[0],o,c,0);if(!a)throw new r(`trying to redefine an already defined table or value`,{toml:e,ptr:l});let s=b(e,i[1],void 0,t,n);a[1][a[0]]=s[0],l=s[1]}if(l=s(e,l,!0),e[l]&&e[l]!==`
`&&e[l]!==`\r`)throw new r(`each key-value declaration must be followed by an end-of-line`,{toml:e,ptr:l});l=s(e,l)}return i}
/*!
* Copyright (c) Squirrel Chat et al., All rights reserved.
* SPDX-License-Identifier: BSD-3-Clause
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
* 1. Redistributions of source code must retain the above copyright notice, this
*    list of conditions and the following disclaimer.
* 2. Redistributions in binary form must reproduce the above copyright notice,
*    this list of conditions and the following disclaimer in the
*    documentation and/or other materials provided with the distribution.
* 3. Neither the name of the copyright holder nor the names of its contributors
*    may be used to endorse or promote products derived from this software without
*    specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
* ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
* SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function D(t){let n=E(t);return e(t,n,{preserveIndentation:!1}),n}export{D as parseTOML};