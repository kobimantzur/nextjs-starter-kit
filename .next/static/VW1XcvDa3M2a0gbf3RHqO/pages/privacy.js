(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"+iuc":function(e,t,o){o("wgeU"),o("FlQf"),o("bBy9"),o("B9jh"),o("dL40"),o("xvv9"),o("V+O7"),e.exports=o("WEpk").Set},"/0+H":function(e,t,o){"use strict";var n=o("hfKm"),r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};n(t,"__esModule",{value:!0});var a=r(o("q1tI")),i=o("lwAK");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,o=void 0!==t&&t,n=e.hybrid,r=void 0!==n&&n,a=e.hasQuery;return o||r&&(void 0!==a&&a)}t.isInAmpMode=s,t.useAmp=function(){return s(a.default.useContext(i.AmpStateContext))}},"0tVQ":function(e,t,o){o("FlQf"),o("VJsP"),e.exports=o("WEpk").Array.from},"2PDY":function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"8Kt/":function(e,t,o){"use strict";var n=o("ttDY"),r=o("hfKm"),a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};r(t,"__esModule",{value:!0});var i=a(o("q1tI")),s=a(o("Xuae")),u=o("lwAK"),l=o("FYa8"),c=o("/0+H");function h(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=h;var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var o=i.default.Children.toArray(t.props.children);return e.concat(o)}),[]).reduce(d,[]).reverse().concat(h(t.inAmpMode)).filter(function(){var e=new n,t=new n,o=new n,r={};return function(a){var i=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var s=a.key.slice(a.key.indexOf("$")+1);e.has(s)?i=!1:e.add(s)}switch(a.type){case"title":case"base":t.has(a.type)?i=!1:t.add(a.type);break;case"meta":for(var u=0,l=f.length;u<l;u++){var c=f[u];if(a.props.hasOwnProperty(c))if("charSet"===c)o.has(c)?i=!1:o.add(c);else{var h=a.props[c],d=r[c]||new n;d.has(h)?i=!1:(d.add(h),r[c]=d)}}}return i}}()).reverse().map((function(e,t){var o=e.key||t;return i.default.cloneElement(e,{key:o})}))}var y=s.default();function m(e){var t=e.children;return i.default.createElement(u.AmpStateContext.Consumer,null,(function(e){return i.default.createElement(l.HeadManagerContext.Consumer,null,(function(o){return i.default.createElement(y,{reduceComponentsToState:p,handleStateChange:o,inAmpMode:c.isInAmpMode(e)},t)}))}))}m.rewind=y.rewind,t.default=m},B9jh:function(e,t,o){"use strict";var n=o("Wu5q"),r=o("n3ko");e.exports=o("raTm")("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return n.def(r(this,"Set"),e=0===e?0:e,e)}},n)},FYa8:function(e,t,o){"use strict";var n=o("hfKm"),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t};n(t,"__esModule",{value:!0});var a=r(o("q1tI"));t.HeadManagerContext=a.createContext(null)},FdOC:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/privacy",function(){return o("o7B1")}])},PQJW:function(e,t,o){var n=o("d04V"),r=o("yLu3");e.exports=function(e){if(r(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return n(e)}},TbGu:function(e,t,o){var n=o("fGSI"),r=o("PQJW"),a=o("2PDY");e.exports=function(e){return n(e)||r(e)||a()}},"V+O7":function(e,t,o){o("aPfg")("Set")},VJsP:function(e,t,o){"use strict";var n=o("2GTP"),r=o("Y7ZC"),a=o("JB68"),i=o("sNwI"),s=o("NwJ3"),u=o("tEej"),l=o("IP1Z"),c=o("fNZA");r(r.S+r.F*!o("TuGD")((function(e){Array.from(e)})),"Array",{from:function(e){var t,o,r,h,d=a(e),f="function"==typeof this?this:Array,p=arguments.length,y=p>1?arguments[1]:void 0,m=void 0!==y,v=0,g=c(d);if(m&&(y=n(y,p>2?arguments[2]:void 0,2)),void 0==g||f==Array&&s(g))for(o=new f(t=u(d.length));t>v;v++)l(o,v,m?y(d[v],v):d[v]);else for(h=g.call(d),o=new f;!(r=h.next()).done;v++)l(o,v,m?i(h,y,[r.value,v],!0):r.value);return o.length=v,o}})},Xuae:function(e,t,o){"use strict";var n=o("/HRN"),r=o("ZDA2"),a=o("/+P4"),i=o("K47E"),s=o("WaGi"),u=o("N9n2"),l=o("TbGu"),c=o("ttDY");o("hfKm")(t,"__esModule",{value:!0});var h=o("q1tI"),d=!1;t.default=function(){var e,t=new c;function o(o){e=o.props.reduceComponentsToState(l(t),o.props),o.props.handleStateChange&&o.props.handleStateChange(e)}return function(l){function c(e){var s;return n(this,c),s=r(this,a(c).call(this,e)),d&&(t.add(i(s)),o(i(s))),s}return u(c,l),s(c,null,[{key:"rewind",value:function(){var o=e;return e=void 0,t.clear(),o}}]),s(c,[{key:"componentDidMount",value:function(){t.add(this),o(this)}},{key:"componentDidUpdate",value:function(){o(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),o(this)}},{key:"render",value:function(){return null}}]),c}(h.Component)}},d04V:function(e,t,o){e.exports=o("0tVQ")},dL40:function(e,t,o){var n=o("Y7ZC");n(n.P+n.R,"Set",{toJSON:o("8iia")("Set")})},fGSI:function(e,t,o){var n=o("p0XB");e.exports=function(e){if(n(e)){for(var t=0,o=new Array(e.length);t<e.length;t++)o[t]=e[t];return o}}},lwAK:function(e,t,o){"use strict";var n=o("hfKm"),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t};n(t,"__esModule",{value:!0});var a=r(o("q1tI"));t.AmpStateContext=a.createContext({})},o7B1:function(e,t,o){"use strict";o.r(t);var n=o("0iUn"),r=o("sLSF"),a=o("MI3g"),i=o("a7VT"),s=o("Tit0"),u=o("q1tI"),l=o.n(u),c=o("8Kt/"),h=o.n(c),d=(o("A20i"),o("Kvkj")),f=l.a.createElement,p=function(e){function t(){return Object(n.a)(this,t),Object(a.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return f(d.f,{className:"privacy-policy"},f(d.d,null,f(d.e,{highlightedTitle:"Privacy Policy"}),f("p",null,f("b",null," Last Updated on May 24, 2018.")," This Privacy Policy is effective immediately for users registering accounts after that date and will become effective on May 24, 2018 for pre-existing users."," "),f("p",null,"The Mymapo.com website and related iOS and Android apps (the \u201cPlatform\u201d) and any current or future features, tools, apps, or websites offered through the Platform, are operated by Avartii Inc. (\u201cThe Company\u201d , \u201cour\u201d, \u201cwe\u201d , \u201cus\u201d). We believe that the privacy and security of your information and data (\u201cInfo\u201d) is important. This Privacy Policy explains the type of Information we collect from users on the Platform and what control our users have over their Information. By using or accessing the Platform, you signify that you have read, understand and agree to be bound by this Policy. When you use the Platform, you consent to our collection, use, and disclosure of information about you as described in this Privacy Policy."),f("ol",null,f("li",null,f("h2",null,"INFORMATION WE COLLECT AND HOW WE USE IT"),f("p",null,"We may collect and store information about you when you use the Platform. We use this information to fulfill your requests, provide the Platform\u2019s functionality, improve the Platform\u2019s quality, personalize your experience, track usage of the Platform, provide feedback to third party businesses that are listed on the Platform, display relevant advertising, market the Platform, provide customer support, message you, back up our systems that allow for disaster recovery, enhance the security of the Platform, and comply with legal obligations."),f("p",null,"There are two types of Information that may be collected through the Platform: A. Personal Information such as your name, email address, photos, geolocation information, and other information that can be used to directly identify you. B. Data Usage which is data related to your use of the Platform, anonymous information about the device used to access the Platform such as your device type and your device identifiers, and log data such as the date and time you visited, the browser or app version you used, the URLs you came from and go to."),f("p",null,"If you want to create an account and use the platform features we may at that time require access to a certain Personal Information. When you submit Personal Information through the Platform, whether by directly providing it to us upon request, expressly allowing us to access it, or voluntarily disclosing it through comments or communications, you are giving your consent to the collection, storage, use and disclosure of your Personal Information as set in this Privacy Policy."),f("p",null,"If you choose to connect with our Platform through a third-party social network such as Facebook, we may collect all Personal Information made available to us from your profile on such Social Network, such as your name, username, profile picture and email address. In addition, our Platform may offer social sharing features which will allow you to \u201cShare\u201d your activity on a Social Network. If you decide to use such features, it may allow the sharing and collection of Information both to and from such Social Network so you should check the privacy policy of each Social Network before using such features. If you would like more detail about what Information a Social Network is sharing with us, please go to the privacy policy of that Social Network."),f("p",null,"If you choose to include Personal Information in your profile (such as your name or photo), that Information will be publicly-facing and, therefore, be visible to other users. In addition, any content you post or communications you send will obviously be available to the public or the intended recipient (as applicable) so if you do not want Personal Information made public or you do not want certain Personal Information shared by another user, do not include such Personal Information in your profile or any communications you may send or post."),f("p",null,"If you choose to use our invite features to invite one of your contacts to join the Platform, we may access your device\u2019s phonebook or contact list, or your friends list on your applicable Social Network, to gather Information such as your friend\u2019s contact information in order to send the invite - but only if you have first given us your consent. You are responsible for getting your contacts\u2019 permission when you opt to give their contact details to us. Please note that we may also collect and use your Personal Information if one of your friends shares it with us in order to invite you to the Platform."),f("p",null,"Whether or not you submit Personal Information, any time you visit or use our Platform, click on our advertisements (including those appearing on third party sites), or visit our social media pages, we or our Service Providers may collect, store or accumulate certain Usage Data based on your use of our Platform, such as your device ID or other persistent identifier, your IP address, data regarding your activities on the Platform, and the URLs you visited before and after using our Platform. For more information on how certain Usage Data is collected, please see the Cookies section below.")),f("li",null,f("h2",null,"COOKIES"),f("p",null,"As part of our collection of data, and use of user data, we may use cookies, tracking pixels, or similar tracking technologies. Although cookies may record certain identifiers related to your electronic device, they do not contain any personal information. Cookies are small pieces of information stored on your hard drive by your browser that can then be used to gather usage data."),f("p",null,"You may choose to prevent your browser from automatically accepting cookies, however please note that by not accepting cookies, certain features of the Platform may unavailable to you.")),f("li",null,f("h2",null,"THIRD PARTIES"),f("p",null,"The Platform may contain links to third party websites to which we have no affiliation. This includes but is not limited to any form of advertising, content, reviews and recommendations found on these third party websites. Except as stated in this policy, we do not share your personal information with third parties. Furthermore, we are not responsible or liable for the privacy policies of any third party or their management of your personal information."," "),f("p",null,"We do however allow advertisements or sponsored posts of third parties on our Platform. This allows us to keep the Platform free to our users. Please note though, that third party advertisements and sponsored posts may be served through third party ad servers or ad networks that use technology to send, directly to your browser, the content and links that appear on the Platform. This means that they may receive certain usage data which is then used in analytics. We encourage you to read the privacy policies of these third parties prior to submitting any personal information to them as they may treat your information differently than we do."),f("p",null,"We may also personally use certain third party ad network service providers to serve advertisements on our behalf across the internet. These entities may use cookies to collect usage data and the information collected may then be used by us and others for various purposes such as but not limited to analytics, measuring effectiveness of ad campaigns, and to deliver content targeted to your interests."," "),f("p",null,"Usage Data may be used in aggregate form for internal business purposes, such as optimizing the Platform, generating statistics and developing marketing plans. We may also use, share or transfer such aggregated, anonymized Usage Data with or to our affiliates, licensees, contractors and partners for administrative, analytical, research, optimization, security and other purposes, but no such information will be linked with your Personal Information or be used to identify or contact you."),f("p",null,"Finally, we may share your Information: (i) In response to subpoenas, court orders, or other legal process, to establish or exercise our legal rights, to defend against legal claims, or as otherwise required by law, and in such cases we reserve the right to raise or waive any legal objection or right available to us; (ii) When we believe it is appropriate to investigate, prevent, or take action regarding illegal or suspected illegal activities, to protect and defend the rights, property, or safety of our company, our users, or others, and in connection with the enforcement of our Terms of Use and other agreements; or (iii) In connection with a corporate transaction, such as a divestiture, merger, consolidation, or asset sale, or in the unlikely event of bankruptcy.")),f("li",null,f("h2",null,"CONTROLLING YOUR PERSONAL DATA"),f("p",null,"We use and store the Personal Information that we collect to authenticate your account, verify your address, process your requests, provide use of chat, comment or forum functionality, send you push notifications about the Platform or other communications you have opted into, provide geolocation functionality when approved by you, allow you to communicate with other users, inform you of relevant information or offers related to the Platform through promotional emails, provide you with support, facilitate invitations, and otherwise communicate with you. Please note that you may always unsubscribe from further emails in any promotional messages we send you."),f("p",null,"We contract with companies or individuals to provide certain services including hosting services, software development, data management, surveys and marketing, and promotional services. We call them our \u201cService Providers.\u201d We may share both your Personal Information and Usage Data with Service Providers solely as appropriate for them to perform their services for us. They are prohibited from using your Personal Information for any other purposes.")),f("li",null,f("h2",null,"DATA RETENTION AND ACCOUNT TERMINATION"),f("p",null,"You can close your account at any time. We will remove your public posts from view and/or dissociate them from your account profile, but we may retain information about you for the purposes authorized under this Privacy Policy unless prohibited by law. For example, we may retain information to prevent, investigate, or identify possible wrongdoing in connection with the Platform or to comply with legal obligations. Please note that businesses cannot remove their business listings, ratings, or reviews by closing their accounts.")),f("li",null,f("h2",null,"CHILDREN"),f("p",null,"The Service is intended for general audiences and is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information without parental consent, please contact us. If we become aware that a child under 13 has provided us with personal information without parental consent, we take steps to remove such information and terminate the child's account.")),f("li",null,f("h2",null,"SECURITY"),f("p",null,"Although we take precautions to protect our users personal information, please remember that no method of transmission over the internet or via any device is 100% secure. While we strive to do our best to protect your personal information as it is at utmost importance to us, we cannot guarantee its absolute security. By signing up for the Platform, you acknowledge that we are not responsible for any intercepted information sent via the internet and you hereby release us from any and all claims regarding the use of intercepted information in any unauthorized manner. You also understand and agree that we are not liable in any way nor responsible for the acts, omissions or policies of our service providers or any other external sources with respect to your personal information. While we take all steps to govern our service providers use and protection of our user\u2019s personal information, you understand that we have no control over and not responsible for the privacy policies and practices of such parties."," "),f("p",null,"If you believe your information is being improperly used by us or any third party or even other user, please notify us immediately via email at contact@mymapo.com ."," ")),f("li",null,f("h2",null,"MODIFICATIONS TO THIS PRIVACY POLICY "),f("p",null,"We reserve the right to change this policy in whole or in part at any time. In such event, the policy will be updated and you will be notified in the app or via email. Therefore, please review this policy from time to time to ensure that you are aware of any changes made. If you have any questions or concerns we welcome you to contact us at contact@mymapo.com and include \u201cRe: Privacy Policy\u201d in the subject line. In any event, your continued use of the Platform after such change constitutes your acceptance of any such changes in whole or in part. You may choose to discontinue your use of the Platform at any time if you do not accept changes made to our privacy policy."," ")))))}}]),t}(u.Component),y=l.a.createElement,m=function(e){function t(){return Object(n.a)(this,t),Object(a.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"getPageTitle",value:function(){return"Mapo | \u05de\u05d3\u05d9\u05e0\u05d9\u05d5\u05ea \u05d4\u05e4\u05e8\u05d8\u05d9\u05d5\u05ea"}},{key:"getMetaImage",value:function(){return""}},{key:"getMetaDescription",value:function(){return"\u05d4\u05d5\u05e8\u05d9\u05d3\u05d5 \u05d0\u05ea \u05d4\u05d0\u05e4\u05dc\u05d9\u05e7\u05e6\u05d9\u05d4 \u05d5\u05d2\u05dc\u05d5 \u05d0\u05ea \u05d4\u05d4\u05de\u05dc\u05e6\u05d5\u05ea \u05e2\u05dc \u05d4\u05de\u05e7\u05d5\u05de\u05d5\u05ea \u05d4\u05db\u05d9 \u05d7\u05de\u05d9\u05dd \u05d1\u05e8\u05d7\u05d1\u05d9 \u05d4\u05e2\u05d5\u05dc\u05dd."}},{key:"render",value:function(){return y("div",null,y(h.a,null,y("title",{key:"title"},this.getPageTitle()),y("meta",{property:"description",key:"description",content:this.getMetaDescription()}),y("meta",{property:"og:title",key:"og:title",content:this.getPageTitle()}),y("meta",{property:"og:description",key:"og:description",content:this.getMetaDescription()})),y(p,null))}}]),t}(u.Component);t.default=m},ttDY:function(e,t,o){e.exports=o("+iuc")},xvv9:function(e,t,o){o("cHUd")("Set")}},[["FdOC",1,2,4,0,3,6,7]]]);