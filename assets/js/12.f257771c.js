(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{427:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));n(168);var o=n(0);function r(){const e=Object(o.getCurrentInstance)();if(!e)throw new Error("must be called in setup");return(null==e?void 0:e.proxy)||{}}function c(){const e=Object(o.ref)(!1);return Object(o.onMounted)(()=>{e.value=!0}),Object(o.onUpdated)(()=>{e.value=!1,setTimeout(()=>{e.value=!0},100)}),{recoShowModule:e}}},429:function(e,t,n){},433:function(e,t,n){"use strict";n(429)},449:function(e,t,n){},487:function(e,t,n){"use strict";n(449)},548:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(427);const c=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];var u=Object(o.defineComponent)({setup(e,t){const n=Object(r.a)(),u=Object(o.computed)(()=>!1!==n.$themeConfig.noFoundPageByTencent);return Object(o.onMounted)(()=>{if(u.value){const e=document.createElement("script");e.setAttribute("homePageName","回到首页"),e.setAttribute("homePageUrl",n.$site.base),e.setAttribute("src","//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js"),document.body.append(e)}}),{noFoundPageByTencent:u,getMsg:()=>c[Math.floor(Math.random()*c.length)]}}}),s=(n(433),n(487),n(1)),i=Object(s.a)(u,(function(){var e=this,t=e._self._c;e._self._setupProxy;return e.noFoundPageByTencent?e._e():t("section",{staticClass:"theme-container"},[t("article",{staticClass:"content"},[t("h1",[e._v("404")]),e._v(" "),t("blockquote",[e._v(e._s(e.getMsg()))]),e._v(" "),t("router-link",{attrs:{to:"/"}},[e._v("Take me home.")])],1)])}),[],!1,null,null,null);t.default=i.exports}}]);