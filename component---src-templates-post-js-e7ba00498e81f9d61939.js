/*! For license information please see component---src-templates-post-js-e7ba00498e81f9d61939.js.LICENSE.txt */
(self.webpackChunksdv_dev=self.webpackChunksdv_dev||[]).push([[851],{7597:function(){Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},"string-interpolation":{pattern:/(?:f|rf|fr)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|rb|br)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/im,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:True|False|None)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?\b/i,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python},2928:function(e,t,n){var a=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,a={},r={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof i?new i(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var a,i;switch(n=n||{},r.util.type(t)){case"Object":if(i=r.util.objId(t),n[i])return n[i];for(var s in a={},n[i]=a,t)t.hasOwnProperty(s)&&(a[s]=e(t[s],n));return a;case"Array":return i=r.util.objId(t),n[i]?n[i]:(a=[],n[i]=a,t.forEach((function(t,r){a[r]=e(t,n)})),a);default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){for(var a="no-"+t;e;){var r=e.classList;if(r.contains(t))return!0;if(r.contains(a))return!1;e=e.parentElement}return!!n}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(e,t){var n=r.util.clone(r.languages[e]);for(var a in t)n[a]=t[a];return n},insertBefore:function(e,t,n,a){var i=(a=a||r.languages)[e],s={};for(var l in i)if(i.hasOwnProperty(l)){if(l==t)for(var o in n)n.hasOwnProperty(o)&&(s[o]=n[o]);n.hasOwnProperty(l)||(s[l]=i[l])}var c=a[e];return a[e]=s,r.languages.DFS(r.languages,(function(t,n){n===c&&t!=e&&(this[t]=s)})),s},DFS:function e(t,n,a,i){i=i||{};var s=r.util.objId;for(var l in t)if(t.hasOwnProperty(l)){n.call(t,l,t[l],a||l);var o=t[l],c=r.util.type(o);"Object"!==c||i[s(o)]?"Array"!==c||i[s(o)]||(i[s(o)]=!0,e(o,n,l,i)):(i[s(o)]=!0,e(o,n,null,i))}}},plugins:{},highlightAll:function(e,t){r.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var a={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),r.hooks.run("before-all-elements-highlight",a);for(var i,s=0;i=a.elements[s++];)r.highlightElement(i,!0===t,a.callback)},highlightElement:function(n,a,i){var s=r.util.getLanguage(n),l=r.languages[s];n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+s;var o=n.parentElement;o&&"pre"===o.nodeName.toLowerCase()&&(o.className=o.className.replace(t,"").replace(/\s+/g," ")+" language-"+s);var c={element:n,language:s,grammar:l,code:n.textContent};function u(e){c.highlightedCode=e,r.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,r.hooks.run("after-highlight",c),r.hooks.run("complete",c),i&&i.call(c.element)}if(r.hooks.run("before-sanity-check",c),(o=c.element.parentElement)&&"pre"===o.nodeName.toLowerCase()&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!c.code)return r.hooks.run("complete",c),void(i&&i.call(c.element));if(r.hooks.run("before-highlight",c),c.grammar)if(a&&e.Worker){var d=new Worker(r.filename);d.onmessage=function(e){u(e.data)},d.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else u(r.highlight(c.code,c.grammar,c.language));else u(r.util.encode(c.code))},highlight:function(e,t,n){var a={code:e,grammar:t,language:n};return r.hooks.run("before-tokenize",a),a.tokens=r.tokenize(a.code,a.grammar),r.hooks.run("after-tokenize",a),i.stringify(r.util.encode(a.tokens),a.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var a in n)t[a]=n[a];delete t.rest}var r=new o;return c(r,r.head,e),l(e,r,t,r.head,0),function(e){var t=[],n=e.head.next;for(;n!==e.tail;)t.push(n.value),n=n.next;return t}(r)},hooks:{all:{},add:function(e,t){var n=r.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=r.hooks.all[e];if(n&&n.length)for(var a,i=0;a=n[i++];)a(t)}},Token:i};function i(e,t,n,a){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length}function s(e,t,n,a){e.lastIndex=t;var r=e.exec(n);if(r&&a&&r[1]){var i=r[1].length;r.index+=i,r[0]=r[0].slice(i)}return r}function l(e,t,n,a,o,d){for(var p in n)if(n.hasOwnProperty(p)&&n[p]){var g=n[p];g=Array.isArray(g)?g:[g];for(var m=0;m<g.length;++m){if(d&&d.cause==p+","+m)return;var h=g[m],f=h.inside,b=!!h.lookbehind,v=!!h.greedy,y=h.alias;if(v&&!h.pattern.global){var x=h.pattern.toString().match(/[imsuy]*$/)[0];h.pattern=RegExp(h.pattern.source,x+"g")}for(var w=h.pattern||h,k=a.next,E=o;k!==t.tail&&!(d&&E>=d.reach);E+=k.value.length,k=k.next){var F=k.value;if(t.length>e.length)return;if(!(F instanceof i)){var _,A=1;if(v){if(!(_=s(w,E,e,b)))break;var N=_.index,S=_.index+_[0].length,j=E;for(j+=k.value.length;N>=j;)j+=(k=k.next).value.length;if(E=j-=k.value.length,k.value instanceof i)continue;for(var P=k;P!==t.tail&&(j<S||"string"==typeof P.value);P=P.next)A++,j+=P.value.length;A--,F=e.slice(E,j),_.index-=E}else if(!(_=s(w,0,F,b)))continue;N=_.index;var $=_[0],O=F.slice(0,N),C=F.slice(N+$.length),T=E+F.length;d&&T>d.reach&&(d.reach=T);var z=k.prev;if(O&&(z=c(t,z,O),E+=O.length),u(t,z,A),k=c(t,z,new i(p,f?r.tokenize($,f):$,y,$)),C&&c(t,k,C),A>1){var L={cause:p+","+m,reach:T};l(e,t,n,k.prev,E,L),d&&L.reach>d.reach&&(d.reach=L.reach)}}}}}}function o(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function c(e,t,n){var a=t.next,r={value:n,prev:t,next:a};return t.next=r,a.prev=r,e.length++,r}function u(e,t,n){for(var a=t.next,r=0;r<n&&a!==e.tail;r++)a=a.next;t.next=a,a.prev=t,e.length-=r}if(e.Prism=r,i.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var a="";return t.forEach((function(t){a+=e(t,n)})),a}var i={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},s=t.alias;s&&(Array.isArray(s)?Array.prototype.push.apply(i.classes,s):i.classes.push(s)),r.hooks.run("wrap",i);var l="";for(var o in i.attributes)l+=" "+o+'="'+(i.attributes[o]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+l+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(r.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),a=n.language,i=n.code,s=n.immediateClose;e.postMessage(r.highlight(i,r.languages[a],a)),s&&e.close()}),!1),r):r;var d=r.util.currentScript();function p(){r.manual||r.highlightAll()}if(d&&(r.filename=d.src,d.hasAttribute("data-manual")&&(r.manual=!0)),!r.manual){var g=document.readyState;"loading"===g||"interactive"===g&&d&&d.defer?document.addEventListener("DOMContentLoaded",p):window.requestAnimationFrame?window.requestAnimationFrame(p):window.setTimeout(p,16)}return r}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=a),void 0!==n.g&&(n.g.Prism=a),a.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.languages.markup.doctype.inside["internal-subset"].inside=a.languages.markup,a.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};r["language-"+t]={pattern:/[\s\S]+/,inside:a.languages[t]};var i={};i[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:r},a.languages.insertBefore("markup","cdata",i)}}),Object.defineProperty(a.languages.markup.tag,"addAttribute",{value:function(e,t){a.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:a.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.xml=a.languages.extend("markup",{}),a.languages.ssml=a.languages.xml,a.languages.atom=a.languages.xml,a.languages.rss=a.languages.xml,function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:a.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&(a.languages.markup.tag.addInlined("script","javascript"),a.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),a.languages.js=a.languages.javascript,function(){if(void 0!==a&&"undefined"!=typeof document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},t="data-src-status",n="loading",r="loaded",i='pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])',s=/\blang(?:uage)?-([\w-]+)\b/i;a.hooks.add("before-highlightall",(function(e){e.selector+=", "+i})),a.hooks.add("before-sanity-check",(function(s){var l=s.element;if(l.matches(i)){s.code="",l.setAttribute(t,n);var c=l.appendChild(document.createElement("CODE"));c.textContent="Loading…";var u=l.getAttribute("data-src"),d=s.language;if("none"===d){var p=(/\.(\w+)$/.exec(u)||[,"none"])[1];d=e[p]||p}o(c,d),o(l,d);var g=a.plugins.autoloader;g&&g.loadLanguages(d);var m=new XMLHttpRequest;m.open("GET",u,!0),m.onreadystatechange=function(){var e,n;4==m.readyState&&(m.status<400&&m.responseText?(l.setAttribute(t,r),c.textContent=m.responseText,a.highlightElement(c)):(l.setAttribute(t,"failed"),m.status>=400?c.textContent=(e=m.status,n=m.statusText,"✖ Error "+e+" while fetching file: "+n):c.textContent="✖ Error: File does not exist or is empty"))},m.send(null)}})),a.plugins.fileHighlight={highlight:function(e){for(var t,n=(e||document).querySelectorAll(i),r=0;t=n[r++];)a.highlightElement(t)}};var l=!1;a.fileHighlight=function(){l||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),l=!0),a.plugins.fileHighlight.highlight.apply(this,arguments)}}function o(e,t){var n=e.className;n=n.replace(s," ")+" language-"+t,e.className=n.replace(/\s+/g," ").trim()}}()},5058:function(e,t,n){e.exports=function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=n(7294)},function(e,t,n){e.exports=n(3)()},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";var a=n(2);function r(){}e.exports=function(){function e(e,t,n,r,i,s){if(s!==a){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(0),s=n.n(i);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?d(e):t}(this,c(t).call(this,e))).state={width:null},n.Scrolling=n.Scrolling.bind(d(d(n))),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,i.Component),function(e,t,n){t&&o(e.prototype,t)}(t,[{key:"Scrolling",value:function(){var e=document.body.scrollTop||document.documentElement.scrollTop,t=document.documentElement.scrollHeight-document.documentElement.clientHeight,n=e/t*100;t>0?this.setState({width:"".concat(n,"%")}):this.setState({width:null})}},{key:"componentDidMount",value:function(){try{window.addEventListener("scroll",this.Scrolling)}catch(e){console.log(e)}}},{key:"componentWillUnmount",value:function(){try{window.removeEventListener("scroll",this.Scrolling)}catch(e){console.log(e)}}},{key:"render",value:function(){var e=this.state.width,t=this.props,n=t.height,a=t.bgcolor;return s.a.createElement("div",{style:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"4px",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"#F43059";return{margin:0,padding:0,position:"fixed",top:0,zIndex:"99",backgroundColor:"".concat(n),height:"".concat(t),width:"".concat(e),transition:"".concat(e," 0.2s ease-out")}}(e,n,a)})}}]),t}();p.propTypes={height:r.a.number,color:r.a.string.isRequired},t.default=p}])},5845:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var a=n(7294),r=n(5444),i=n(5186),s=n(1554),l=n(8932),o=n(7593),c=n.n(o);function u(e){var t=e.post;return"object"==typeof t.authors[1]?a.createElement("div",{className:"flex flex-start"},t.authors.map((function(e,t){return a.createElement("section",{className:"flex flew-row mb-6 mr-4"},a.createElement("a",{href:c().sitePath+"/authors/"+e.slug,className:"relative inline-block hover:opacity-80"},a.createElement("div",{className:"rounded-full bg-sdv-highlight top-0 left-0",style:{width:"49px",height:"49px"}},a.createElement("div",{className:"overflow-hidden rounded-full absolute bottom-0 right-0",style:{width:"46px",height:"46px"}},e.profile_image?a.createElement("img",{width:46,height:46,className:"block rounded-full relative z-10 object-cover h-full",src:e.profile_image,alt:e.name}):a.createElement("img",{width:46,height:46,className:"block rounded-full relative z-10 object-cover h-full",src:"/blog/images/icons/avatar.svg",alt:e.name})))),a.createElement("div",{className:"text-xs px-4 flex flex-col justify-center"},a.createElement("p",{className:"text-sm font-bold"},a.createElement("a",{className:"hover:text-sdv-secondary",href:c().sitePath+"/authors/"+e.slug},e.name))))}))):a.createElement("a",{href:c().sitePath+"/authors/"+t.primary_author.slug,className:"flex flew-row mb-6 hover:text-sdv-secondary"},a.createElement("div",{className:"relative hover:opacity-80"},a.createElement("div",{className:"rounded-full bg-sdv-highlight top-0 left-0",style:{width:"48px",height:"48px"}},a.createElement("div",{className:"overflow-hidden rounded-full absolute bottom-0 right-0",style:{width:"46px",height:"46px"}},t.primary_author.profile_image?a.createElement("img",{width:46,height:46,className:"block rounded-full relative z-10 object-cover h-full",src:t.primary_author.profile_image,alt:t.primary_author.name}):a.createElement("img",{width:46,height:46,className:"block rounded-full relative z-10 object-cover h-full",src:"/blog/images/icons/avatar.svg",alt:t.primary_author.name})))),a.createElement("div",{className:"text-xs px-4 flex flex-col justify-center"},a.createElement("p",{className:"text-sm font-bold"},t.primary_author.name)))}var d=n(4280),p=n(9293),g=n(5058),m=n.n(g),h=n(2928),f=n.n(h),b=(n(7597),function(e){var t=e.data,n=e.location,o=t.ghostPost;return(0,a.useEffect)((function(){Array.from(document.querySelectorAll(".post-body a[href^='https:']")).forEach((function(e){return e.setAttribute("target","_blank")}))}),[]),(0,a.useEffect)((function(){f().highlightAll()}),[]),a.createElement(a.Fragment,null,a.createElement(l.U,{data:t,location:n,type:"article"}),a.createElement(i.q,null,a.createElement("meta",{"http-equiv":"Cache-Control",content:"no-cache, no-store, must-revalidate"}),a.createElement("meta",{"http-equiv":"Pragma",content:"no-cache"}),a.createElement("meta",{"http-equiv":"Expires",content:"0"}),a.createElement("style",{type:"text/css"},""+o.codeinjection_styles)),a.createElement(m(),{bgcolor:"#000036"}),a.createElement(s.d2,{isPost:!0},a.createElement("div",{className:"pt-20"},a.createElement("div",{className:"w-full feature-image relative h-0 pb-pimg-xs sm:pb-pimg-sm lg:pb-pimg-lg"},o.feature_image?a.createElement("img",{src:o.feature_image,alt:o.title,className:"absolute inset-0 md:w-full h-full object-cover object-center",style:{background:"linear-gradient(90deg, #03B0F2 1.57%, #01E0C9 100%)"}}):"")),a.createElement("div",{className:"-mt-10 md:-mt-20 relative"},a.createElement("div",{className:"container max-w-7xl h-full z-0 mx-auto relative"},a.createElement("section",{className:"absolute left-0 pt-36 z-0 absolute hidden xl:block"},a.createElement("div",{className:"flex flex-col mt-16 w-10 z-10 relative "},a.createElement("div",{className:"px-1 pb-3"},a.createElement(r.Link,{target:"_blank",rel:"noopener",to:"https://twitter.com/intent/tweet/?text="+encodeURIComponent(o.title)+"&url=https://sdv.dev"+c().sitePath+o.slug+"&hashtags=syntheticdatavault",className:"w-8 h-8 flex justify-center items-center text-white bg-sdv-dark inline-block rounded-full"},a.createElement(d.G,{width:"16",icon:p.mdU}))),a.createElement("div",{className:"px-1 pb-3"},a.createElement(r.Link,{target:"_blank",rel:"noopener",to:"https://www.linkedin.com/shareArticle?mini=true&url=https://sdv.dev"+c().sitePath+o.slug,className:"w-8 h-8 flex justify-center items-center text-white bg-sdv-dark inline-block rounded-full"},a.createElement(d.G,{width:"16",icon:p.D9H})))))),a.createElement("article",{className:"container max-w-5xl bg-white px-6 pt-10 md:pt-20 md:px-10 lg:px-20 pb-0 relative"},a.createElement("h1",{className:"leading-none text-6xl lg:text-8xl mb-3"},o.title),a.createElement("div",{className:"block xl:hidden"},a.createElement("div",{className:"flex flex-row"},a.createElement("div",{className:"px-1 pb-3"},a.createElement(r.Link,{target:"_blank",rel:"noopener",to:"https://twitter.com/intent/tweet/?text="+encodeURIComponent(o.title)+"&url=https://sdv.dev"+c().sitePath+o.slug+"&hashtags=syntheticdatavault",className:"w-8 h-8 flex justify-center items-center text-white bg-sdv-dark inline-block rounded-full"},a.createElement(d.G,{width:"16",icon:p.mdU}))),a.createElement("div",{className:"px-1 pb-3"},a.createElement(r.Link,{target:"_blank",rel:"noopener",to:"https://www.linkedin.com/shareArticle?mini=true&url=https://sdv.dev"+c().sitePath+o.slug,className:"w-8 h-8 flex justify-center items-center text-white bg-sdv-dark inline-block rounded-full"},a.createElement(d.G,{width:"16",icon:p.D9H}))))),a.createElement("p",{className:"font-light text-sm mb-6"},o.published_at_pretty),a.createElement(u,{post:o}),a.createElement("div",{className:"post"},a.createElement("section",{className:"post-body",dangerouslySetInnerHTML:{__html:o.html}}),a.createElement("div",{className:""},a.createElement("div",{className:"flex flex-row items-center"},a.createElement("div",{className:"pr-1 pb-3 font-light text-lg"},"Share: "),a.createElement("div",{className:"px-1 pb-3"},a.createElement(r.Link,{target:"_blank",rel:"noopener",to:"https://twitter.com/intent/tweet/?text="+encodeURIComponent(o.title)+"&url=https://sdv.dev"+c().sitePath+o.slug+"&hashtags=syntheticdatavault",className:"w-8 h-8 flex justify-center items-center text-white bg-sdv-dark inline-block rounded-full"},a.createElement(d.G,{width:"16",icon:p.mdU}))),a.createElement("div",{className:"px-1 pb-3"},a.createElement(r.Link,{target:"_blank",rel:"noopener",to:"https://www.linkedin.com/shareArticle?mini=true&url=https://sdv.dev"+c().sitePath+o.slug,className:"w-8 h-8 flex justify-center items-center text-white bg-sdv-dark inline-block rounded-full"},a.createElement(d.G,{width:"16",icon:p.D9H}))))),o.primary_tag?a.createElement("div",{className:"flex flex-grow -mx-6 font-light mb-8 mt-4 lg:mb-14"},a.createElement("div",{className:"px-6"},a.createElement(r.Link,{to:"/tag/"+o.primary_tag.slug,className:"mb-2 border border-sdv-stroke rounded-full inline-block px-6 py-1 shadow-lg mr-4"},o.primary_tag.name))):"")))))})}}]);
//# sourceMappingURL=component---src-templates-post-js-e7ba00498e81f9d61939.js.map