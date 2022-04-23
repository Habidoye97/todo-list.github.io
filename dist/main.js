(()=>{"use strict";var t={152:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(81),a=n.n(r),i=n(645),o=n.n(i)()(a());o.push([t.id,"*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  border: 0;\r\n  padding: 0;\r\n  font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n:root {\r\n  --header-bg: rgb(228,67,50);\r\n  --white: #fff;\r\n  --nav-bg: rgb(250,250,250);\r\n  --btn-hover: rgb(236,236,236);\r\n  --form-outline-color: rgb(221,221,221);\r\n}\r\n\r\n\r\ninput {\r\n  border: none;\r\n  color: inherit;\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n  outline: none;\r\n}\r\n\r\nbutton {\r\n  width: 100%;\r\n  padding: 10px 20px;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  margin-bottom: 5px;\r\n  text-align: left;\r\n  background: none;\r\n}\r\n\r\nbutton:hover {\r\n  background: var(--btn-hover);\r\n}\r\n\r\ni {\r\n  margin-right: 10px;\r\n}\r\n\r\n.main {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-grow: 1;\r\n  \r\n}\r\n\r\n#header {\r\n  width: 100%;\r\n  height: 50px;\r\n  background: var(--header-bg);\r\n  padding: 5px;\r\n}\r\n\r\n#header-container {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.logo-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.logo-container img {\r\n  height: 100%;\r\n}\r\n\r\n.logo-container span {\r\n  color: var(--white);\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.nav {\r\n  width: 300px;\r\n  min-width: 250px;\r\n  padding: 20px;\r\n  background: var(--nav-bg);\r\n  height: calc(100vh - 50px);\r\n}\r\n\r\n.active {\r\n  background-color: var(--btn-hover);\r\n}\r\n\r\n.display-section {\r\n  margin-bottom: 38px;\r\n  padding-bottom: 2px;\r\n  width: 100%;\r\n}\r\n\r\n.todo-list-display-container {\r\n  padding: 35px 55px 0 55px;\r\n  \r\n}\r\n\r\n.list-header {\r\n  padding-bottom: 15px;\r\n}\r\n\r\n.add-task-button {\r\n  display: flex;\r\n  padding-left: 0px;\r\n  align-items: center;\r\n}\r\n\r\n.add-task-button:hover {\r\n  background: none;\r\n  color: var(--header-bg);\r\n}\r\n\r\n#add-task-image {\r\n  height: 13px;\r\n  margin-right: 5px;\r\n}\r\n\r\n#addTaskForm  {\r\n  font-size: 13px;\r\n  font-family: inherit;\r\n}\r\n\r\n#addTaskFormTop {\r\n  min-height: 115px;\r\n  width: auto;\r\n  margin: 0 0 10px 0;\r\n  border: var(--form-outline-color) solid 1px;\r\n  border-radius: 10px;\r\n  display: grid;\r\n  grid-template-rows: 30px 80px 40px;\r\n  grid-template-columns: 110px auto;\r\n}\r\n\r\n#taskTitleArea {\r\n  grid-row: 1/2;\r\n  grid-column: 1/3;\r\n  min-height: 65px;\r\n  width: 95%;\r\n  padding: 10px;\r\n  background: transparent;\r\n  border: none;\r\n  outline: none;\r\n  resize: none;\r\n  font-size: inherit;\r\n}\r\n\r\n#taskDetailsArea {\r\n  grid-row: 2/3;\r\n  grid-column: 1/3;\r\n  min-height: 65px;\r\n  width: 95%;\r\n  padding: 10px;\r\n  font-family: inherit;\r\n  background: transparent;\r\n  border: none;\r\n  outline: none;\r\n  resize: none;\r\n}\r\n\r\n#dueDate {\r\n  grid-row: 3/4;\r\n  width: 100px;\r\n  height: 30px;margin: auto;\r\n  margin-left: 10px;\r\n  line-height: 100%;\r\n  text-align: center;\r\n  padding: 0px;\r\n  border-radius: 5px;\r\n  border: var(--form-outline-color) solid 1px;\r\n}\r\n\r\n#add-new-task-button {\r\n  background-color: var(--header-bg);\r\n  color: white;\r\n  width: fit-content;\r\n  margin-right: 5px;\r\n  font-weight: 900;\r\n}\r\n\r\n#cancel-task-button {\r\n  width: fit-content;\r\n  font-weight: 900;\r\n  color: black;\r\n  border: var(--form-outline-color) solid 1px;\r\n}\r\n\r\n\r\n.task-list-item {\r\n  list-style-type: none;\r\n  border-bottom: 1px solid #f0f0f0;\r\n}\r\n\r\n.task-list-body {\r\n  display: flex;\r\n  align-items: stretch;\r\n  position: relative;\r\n  padding: 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.task-list-checkbox-container {\r\n  margin: 11px 6px 0 -3px;\r\n  z-index: 1;\r\n}\r\n\r\n.task-list-item-content {\r\n  flex: 1;\r\n  padding: 8px 0;\r\n  margin-right: 30px;\r\n}\r\n\r\n.task-list-item-content-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-wrap: wrap;\r\n  margin-bottom: 3px;\r\n}\r\n\r\n.head {\r\n  flex-grow: 1;\r\n  font-size: 14px;\r\n  line-height: 21px;\r\n  word-wrap: break-word;\r\n  overflow: hidden;\r\n  color: grey;\r\n}\r\n\r\n.description {\r\n  flex-basis: 100%;\r\n  font-size: 12px;\r\n  word-wrap: break-word;\r\n  overflow: hidden;\r\n  color: grey;\r\n}\r\n\r\n.date {\r\n  font-size: 12px;\r\n  line-height: 12px;\r\n}\r\n\r\n.task-list-item-delete-wrapper {\r\n  z-index: 1;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.task-list-body:hover .hidden {\r\n  display: block;\r\n}",""]);const s=o},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,i){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var u=this[s][0];null!=u&&(o[u]=!0)}for(var d=0;d<t.length;d++){var c=[].concat(t[d]);r&&o[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),e.push(c))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},o=[],s=0;s<t.length;s++){var u=t[s],d=r.base?u[0]+r.base:u[0],c=i[d]||0,l="".concat(d," ").concat(c);i[d]=c+1;var h=n(l),m={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==h)e[h].references++,e[h].updater(m);else{var f=a(m,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:f,references:1})}o.push(l)}return o}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var i=r(t=t||[],a=a||{});return function(t){t=t||[];for(var o=0;o<i.length;o++){var s=n(i[o]);e[s].references--}for(var u=r(t,a),d=0;d<i.length;d++){var c=n(i[d]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}i=u}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=n(379),e=n.n(t),r=n(795),a=n.n(r),i=n(569),o=n.n(i),s=n(565),u=n.n(s),d=n(216),c=n.n(d),l=n(589),h=n.n(l),m=n(152),f={};function g(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function p(t){return g(1,arguments),t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function b(t){g(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function v(t){if(g(1,arguments),!p(t)&&"number"!=typeof t)return!1;var e=b(t);return!isNaN(Number(e))}f.styleTagTransform=h(),f.setAttributes=u(),f.insert=o().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=c(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var w={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function y(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}const x={date:y({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:y({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:y({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var k={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function C(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=a.width?String(a.width):i;r=t.formattingValues[o]||t.formattingValues[i]}else{var s=t.defaultWidth,u=a.width?String(a.width):t.defaultWidth;r=t.values[u]||t.values[s]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const T={ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:C({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:C({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:C({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:C({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:C({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function M(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(a);if(!i)return null;var o,s=i[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(u)?E(u,(function(t){return t.test(s)})):D(u,(function(t){return t.test(s)}));o=t.valueCallback?t.valueCallback(d):d,o=n.valueCallback?n.valueCallback(o):o;var c=e.slice(s.length);return{value:o,rest:c}}}function D(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function E(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}var S,U={ordinalNumber:(S={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(S.matchPattern);if(!n)return null;var r=n[0],a=t.match(S.parsePattern);if(!a)return null;var i=S.valueCallback?S.valueCallback(a[0]):a[0];i=e.valueCallback?e.valueCallback(i):i;var o=t.slice(r.length);return{value:i,rest:o}}),era:M({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:M({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:M({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:M({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:M({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const A={code:"en-US",formatDistance:function(t,e,n){var r,a=w[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:x,formatRelative:function(t,e,n,r){return k[t]},localize:T,match:U,options:{weekStartsOn:0,firstWeekContainsDate:1}};function P(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function W(t,e){g(2,arguments);var n=b(t).getTime(),r=P(e);return new Date(n+r)}function q(t,e){g(2,arguments);var n=P(e);return W(t,-n)}var Y=864e5;function N(t){g(1,arguments);var e=1,n=b(t),r=n.getUTCDay(),a=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function O(t){g(1,arguments);var e=b(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=N(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var o=N(i);return e.getTime()>=a.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}function L(t){g(1,arguments);var e=O(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=N(n);return r}var j=6048e5;function z(t,e){g(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,i=null==a?0:P(a),o=null==n.weekStartsOn?i:P(n.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=b(t),u=s.getUTCDay(),d=(u<o?7:0)+u-o;return s.setUTCDate(s.getUTCDate()-d),s.setUTCHours(0,0,0,0),s}function F(t,e){g(1,arguments);var n=b(t),r=n.getUTCFullYear(),a=e||{},i=a.locale,o=i&&i.options&&i.options.firstWeekContainsDate,s=null==o?1:P(o),u=null==a.firstWeekContainsDate?s:P(a.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=new Date(0);d.setUTCFullYear(r+1,0,u),d.setUTCHours(0,0,0,0);var c=z(d,e),l=new Date(0);l.setUTCFullYear(r,0,u),l.setUTCHours(0,0,0,0);var h=z(l,e);return n.getTime()>=c.getTime()?r+1:n.getTime()>=h.getTime()?r:r-1}function H(t,e){g(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,i=null==a?1:P(a),o=null==n.firstWeekContainsDate?i:P(n.firstWeekContainsDate),s=F(t,e),u=new Date(0);u.setUTCFullYear(s,0,o),u.setUTCHours(0,0,0,0);var d=z(u,e);return d}var I=6048e5;function Q(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const R={y:function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return Q("yy"===e?r%100:r,e.length)},M:function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):Q(n+1,2)},d:function(t,e){return Q(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:function(t,e){return Q(t.getUTCHours()%12||12,e.length)},H:function(t,e){return Q(t.getUTCHours(),e.length)},m:function(t,e){return Q(t.getUTCMinutes(),e.length)},s:function(t,e){return Q(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,r=t.getUTCMilliseconds();return Q(Math.floor(r*Math.pow(10,n-3)),e.length)}};var B={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return R.y(t,e)},Y:function(t,e,n,r){var a=F(t,r),i=a>0?a:1-a;return"YY"===e?Q(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):Q(i,e.length)},R:function(t,e){return Q(O(t),e.length)},u:function(t,e){return Q(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return Q(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return Q(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return R.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return Q(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=function(t,e){g(1,arguments);var n=b(t),r=z(n,e).getTime()-H(n,e).getTime();return Math.round(r/I)+1}(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):Q(a,e.length)},I:function(t,e,n){var r=function(t){g(1,arguments);var e=b(t),n=N(e).getTime()-L(e).getTime();return Math.round(n/j)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):Q(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):R.d(t,e)},D:function(t,e,n){var r=function(t){g(1,arguments);var e=b(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),a=n-r;return Math.floor(a/Y)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):Q(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return Q(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return Q(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return Q(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return R.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):R.H(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):Q(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):Q(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):R.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):R.s(t,e)},S:function(t,e){return R.S(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return X(a);case"XXXX":case"XX":return J(a);default:return J(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return X(a);case"xxxx":case"xx":return J(a);default:return J(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+G(a,":");default:return"GMT"+J(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+G(a,":");default:return"GMT"+J(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return Q(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return Q((r._originalDate||t).getTime(),e.length)}};function G(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+Q(i,2)}function X(t,e){return t%60==0?(t>0?"-":"+")+Q(Math.abs(t)/60,2):J(t,e)}function J(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+Q(Math.floor(a/60),2)+n+Q(a%60,2)}const _=B;function Z(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}}function V(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}}const K={p:V,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return Z(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",Z(a,e)).replace("{{time}}",V(i,e))}};function $(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var tt=["D","DD"],et=["YY","YYYY"];function nt(t){return-1!==tt.indexOf(t)}function rt(t){return-1!==et.indexOf(t)}function at(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var it=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ot=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,st=/^'([^]*?)'?$/,ut=/''/g,dt=/[a-zA-Z]/;function ct(t,e,n){g(2,arguments);var r=String(e),a=n||{},i=a.locale||A,o=i.options&&i.options.firstWeekContainsDate,s=null==o?1:P(o),u=null==a.firstWeekContainsDate?s:P(a.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=i.options&&i.options.weekStartsOn,c=null==d?0:P(d),l=null==a.weekStartsOn?c:P(a.weekStartsOn);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var h=b(t);if(!v(h))throw new RangeError("Invalid time value");var m=$(h),f=q(h,m),p={firstWeekContainsDate:u,weekStartsOn:l,locale:i,_originalDate:h},w=r.match(ot).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,K[e])(t,i.formatLong,p):t})).join("").match(it).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return lt(n);var o=_[r];if(o)return!a.useAdditionalWeekYearTokens&&rt(n)&&at(n,e,t),!a.useAdditionalDayOfYearTokens&&nt(n)&&at(n,e,t),o(f,n,i.localize,p);if(r.match(dt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("");return w}function lt(t){return t.match(st)[1].replace(ut,"'")}function ht(t){g(1,arguments);var e=b(t);return e.setHours(0,0,0,0),e}function mt(t,e){g(2,arguments);var n=ht(t),r=ht(e);return n.getTime()===r.getTime()}document.querySelector("body");const ft=ct(new Date,"yyyy-MM-dd");console.log(ft);let gt=[],pt=[];const bt=document.querySelector(".todo-list-display-container"),vt=document.createElement("div"),wt=document.createElement("ul"),yt=document.createElement("h2");function xt(t,e,n){this.title=t,this.description=e,this.date=n}if(null===localStorage.getItem("tasks"))gt=[];else{const t=JSON.parse(localStorage.getItem("tasks"));gt=t}const kt=document.querySelector("#button-inbox-project");kt.addEventListener("click",(t=>{t.target.classList.contains("active")||(Et(kt),Mt("Inbox"),St().addEventListener("click",(()=>{Dt(),St().style.display="none"})))}));const Ct=document.querySelector("#button-today-project");Ct.addEventListener("click",(t=>{t.target.classList.contains("active")||(Et(Ct),Mt("Today"),St().addEventListener("click",(()=>{Dt(),St().style.display="none"})))}));const Tt=document.querySelector("#button-upcoming-project");function Mt(t){bt.textContent="",yt.setAttribute("class","list-header"),yt.textContent=t,vt.setAttribute("class","todo-list-holder"),wt.setAttribute("class","task-list-section"),Ut();const e=document.createElement("button");e.setAttribute("class","add-task-button");const n=document.createElement("img");n.setAttribute("id","add-task-image"),n.src="./icons8-plus-64.png";const r=document.createElement("span");switch(r.setAttribute("id","add-task-btn-text"),r.textContent="Add Task",e.appendChild(n),e.appendChild(r),vt.appendChild(wt),bt.appendChild(yt),bt.appendChild(vt),bt.appendChild(e),t){case"Inbox":e.setAttribute("id","inbox-add-btn"),wt.setAttribute("id","inbox-todo-list-details");break;case"Today":e.setAttribute("id","today-add-btn"),wt.setAttribute("id","today-todo-list-details");break;case"Upcoming":e.setAttribute("id","upcoming-add-btn"),wt.setAttribute("id","upcoming-todo-list-details");break;default:return}}function Dt(){const t=document.createElement("form");t.setAttribute("id","addTaskForm");const e=document.createElement("div");e.setAttribute("id","addTaskFormTop");const n=document.createElement("textarea");n.setAttribute("id","taskTitleArea"),n.placeholder="e.g. Read everyday p3 @goals #Learning",n.required;const r=document.createElement("textarea");r.setAttribute("id","taskDetailsArea"),r.placeholder="Description";const a=document.createElement("input");a.setAttribute("id","dueDate"),a.min=ct(new Date,"yyyy-MM-dd"),a.autocomplete="off",a.type="date";const i=document.createElement("div");i.setAttribute("id","addTaskFormbottom");const o=document.createElement("button");o.setAttribute("id","add-new-task-button"),o.textContent="Add Task",o.type="button",o.addEventListener("click",(()=>{!function(){const t=document.querySelector("#addTaskForm"),e=document.querySelector("#taskTitleArea"),n=document.querySelector("#taskDetailsArea"),r=document.querySelector("#dueDate");console.log(b(ct(new Date(r.value),"dd.MMM"))),""!==e.value&&""!==n.value&&function(t,e,n){const r=new xt(t,e,n);(function(t){return g(1,arguments),mt(t,Date.now())})(new Date(n))&&pt.push(r),console.log(pt)}(e.value,n.value,r.value),t.reset()}(),bt.removeChild(t),St().style.display="block",Ut()}));const s=document.createElement("button");s.setAttribute("id","cancel-task-button"),s.textContent="Cancel",s.type="button",s.addEventListener("click",(()=>{t.reset(),bt.removeChild(t),St().style.display="block"})),e.appendChild(n),e.appendChild(r),e.appendChild(a),i.appendChild(o),i.appendChild(s),t.appendChild(e),t.appendChild(i),bt.appendChild(t)}function Et(t){document.querySelectorAll(".button-default-project").forEach((t=>{t!==this&&t.classList.remove("active")})),t.classList.add("active")}function St(){return document.getElementById(document.querySelector(".add-task-button").id)}function Ut(){localStorage.setItem("tasks",JSON.stringify(gt)),wt.textContent=" ";for(let t=0;t<gt.length;t++){const e=document.createElement("li"),n=document.createElement("div"),r=document.createElement("div"),a=document.createElement("input");a.type="checkbox";const i=document.createElement("div"),o=document.createElement("div"),s=document.createElement("h4");s.textContent=gt[t].title;const u=document.createElement("p");u.textContent=gt[t].description;const d=document.createElement("div"),c=document.createElement("span"),l=document.createElement("div"),h=document.createElement("button"),m=document.createElement("img"),f=gt[t].date;c.textContent=f?ct(new Date(f),"E dd"):f,e.setAttribute("class","task-list-item"),n.setAttribute("class","task-list-body"),r.setAttribute("class","task-list-checkbox-container"),a.setAttribute("class","task-list-complete-checkbox"),i.setAttribute("class","task-list-item-content"),o.setAttribute("class","task-list-item-content-wrapper"),s.setAttribute("class","task-content head"),u.setAttribute("class","task-content description"),d.setAttribute("class","task-content-date-container"),c.setAttribute("class","task-content date"),l.setAttribute("class","task-list-item-delete-wrapper"),h.setAttribute("class","task-delete-button hidden"),m.setAttribute("class","task-delete-img"),m.src="./icons8-delete-16.png",r.appendChild(a),h.appendChild(m),l.appendChild(h),o.appendChild(s),o.appendChild(u),d.appendChild(c),i.appendChild(o),i.appendChild(d),n.appendChild(r),n.appendChild(i),n.appendChild(l),e.appendChild(n),wt.appendChild(e)}}Tt.addEventListener("click",(t=>{t.target.classList.contains("active")||(Et(Tt),Mt("Upcoming"),St().addEventListener("click",(()=>{Dt(),St().style.display="none"})))})),Mt("Inbox"),Et(document.querySelector(".button-default-project")),St().addEventListener("click",(()=>{Dt(),St().style.display="none"}))})()})();