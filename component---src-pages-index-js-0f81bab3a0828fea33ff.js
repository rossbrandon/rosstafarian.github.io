(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0bVq":function(e,t,n){var a=n("hBhu");function r(e){if(!(this instanceof r))return new r(e);this._from=e,this.ease("linear"),this.duration(500)}n("M4kv")(r.prototype),r.prototype.reset=function(){return this.isArray="[object Array]"===Object.prototype.toString.call(this._from),this._curr=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}({},this._from),this._done=!1,this._start=Date.now(),this},r.prototype.to=function(e){return this.reset(),this._to=e,this},r.prototype.duration=function(e){return this._duration=e,this},r.prototype.ease=function(e){if(!(e="function"==typeof e?e:a[e]))throw new TypeError("invalid easing function");return this._ease=e,this},r.prototype.stop=function(){return this.stopped=!0,this._done=!0,this.emit("stop"),this.emit("end"),this},r.prototype.step=function(){if(!this._done){var e=this._duration,t=Date.now();if(t-this._start>=e)return this._from=this._to,this._update(this._to),this._done=!0,this.emit("end"),this;var n=this._from,a=this._to,r=this._curr,i=(0,this._ease)((t-this._start)/e);if(this.isArray){for(var o=0;o<n.length;++o)r[o]=n[o]+(a[o]-n[o])*i;return this._update(r),this}for(var l in n)r[l]=n[l]+(a[l]-n[l])*i;return this._update(r),this}},r.prototype.update=function(e){return 0==arguments.length?this.step():(this._update=e,this)},e.exports=r},"9eSz":function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0,t.default=void 0;var r,i=a(n("PJYZ")),o=a(n("VbXa")),l=a(n("8OQS")),u=a(n("pVnL")),s=a(n("q1tI")),c=a(n("17x9")),d=function(e){var t=(0,u.default)({},e),n=t.resolutions,a=t.sizes,r=t.critical;return n&&(t.fixed=n,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,n=e.fixed,a=h(t||n||[]);return a&&a.src},h=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var n=e.findIndex((function(e){return void 0===e.media}));if(-1!==n)return e[n]}return e[0]},m=Object.create({}),g=function(e){var t=d(e),n=p(t);return m[n]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,w=new WeakMap;function x(e){return e.map((function(e){var t=e.src,n=e.srcSet,a=e.srcSetWebp,r=e.media,i=e.sizes;return s.default.createElement(s.default.Fragment,{key:t},a&&s.default.createElement("source",{type:"image/webp",media:r,srcSet:a,sizes:i}),n&&s.default.createElement("source",{media:r,srcSet:n,sizes:i}))}))}function E(e){var t=[],n=[];return e.forEach((function(e){return(e.media?t:n).push(e)})),[].concat(t,n)}function k(e){return e.map((function(e){var t=e.src,n=e.media,a=e.tracedSVG;return s.default.createElement("source",{key:t,media:n,srcSet:a})}))}function O(e){return e.map((function(e){var t=e.src,n=e.media,a=e.base64;return s.default.createElement("source",{key:t,media:n,srcSet:a})}))}function _(e,t){var n=e.srcSet,a=e.srcSetWebp,r=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?a:n)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var S=function(e,t){var n=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return n&&(n.observe(e),w.set(e,t)),function(){n.unobserve(e),w.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",u=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",s=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?_(e,!0):"")+_(e)})).join("")+"<img "+s+o+l+n+a+t+i+r+u+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},j=s.default.forwardRef((function(e,t){var n=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,o=e.ariaHidden,l=s.default.createElement(M,(0,u.default)({ref:t,src:n},i,{ariaHidden:o}));return a.length>1?s.default.createElement("picture",null,r(a),l):l})),M=s.default.forwardRef((function(e,t){var n=e.sizes,a=e.srcSet,r=e.src,i=e.style,o=e.onLoad,c=e.onError,d=e.loading,f=e.draggable,p=e.ariaHidden,h=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return s.default.createElement("img",(0,u.default)({"aria-hidden":p,sizes:n,srcSet:a,src:r},h,{onLoad:o,onError:c,ref:t,loading:d,draggable:f,style:(0,u.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));M.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var C=function(e){function t(t){var n;(n=e.call(this,t)||this).seenBefore=y&&g(t),n.isCritical="eager"===t.loading||t.critical,n.addNoScript=!(n.isCritical&&!t.fadeIn),n.useIOSupport=!b&&v&&!n.isCritical&&!n.seenBefore;var a=n.isCritical||y&&(b||!n.useIOSupport);return n.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!n.seenBefore&&t.fadeIn,isHydrated:!1},n.imageRef=s.default.createRef(),n.placeholderRef=t.placeholderRef||s.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,i.default)(n)),n.handleRef=n.handleRef.bind((0,i.default)(n)),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=S(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=d(e),(n=p(t))&&(m[n]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=d(this.props),t=e.title,n=e.alt,a=e.className,r=e.style,i=void 0===r?{}:r,o=e.imgStyle,l=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,g=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,w=e.itemProp,E=e.loading,_=e.draggable,S=m||g;if(!S)return null;var C=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,P=(0,u.default)({opacity:C?1:0,transition:L?"opacity "+y+"ms":"none"},l),R="boolean"==typeof b?"lightgray":b,z={transitionDelay:y+"ms"},B=(0,u.default)({opacity:this.state.imgLoaded?0:1},L&&z,l,f),q={title:t,alt:this.state.isVisible?"":n,style:B,className:p,itemProp:w},T=this.state.isHydrated?h(S):S[0];if(m)return s.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:(0,u.default)({position:"relative",overflow:"hidden",maxWidth:T.maxWidth?T.maxWidth+"px":null,maxHeight:T.maxHeight?T.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},s.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),R&&s.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,u.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&z)}),T.base64&&s.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:q,imageVariants:S,generateSources:O}),T.tracedSVG&&s.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:q,imageVariants:S,generateSources:k}),this.state.isVisible&&s.default.createElement("picture",null,x(S),s.default.createElement(M,{alt:n,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:E,draggable:_})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,u.default)({alt:n,title:t,loading:E},T,{imageVariants:S}))}}));if(g){var N=(0,u.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},i);return"inherit"===i.display&&delete N.display,s.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:N,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},R&&s.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,u.default)({backgroundColor:R,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},L&&z)}),T.base64&&s.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:q,imageVariants:S,generateSources:O}),T.tracedSVG&&s.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:q,imageVariants:S,generateSources:k}),this.state.isVisible&&s.default.createElement("picture",null,x(S),s.default.createElement(M,{alt:n,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:E,draggable:_})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,u.default)({alt:n,title:t,loading:E},T,{imageVariants:S}))}}))}return null},t}(s.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var L=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),P=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function R(e){return function(t,n,a){var r;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+a+"`, but their values are both `undefined`.");c.default.checkPropTypes(((r={})[n]=e,r),t,"prop",a)}}C.propTypes={resolutions:L,sizes:P,fixed:R(c.default.oneOfType([L,c.default.arrayOf(L)])),fluid:R(c.default.oneOfType([P,c.default.arrayOf(P)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var z=C;t.default=z},JwyU:function(e,t,n){var a=n("0bVq"),r=n("xEkU");e.exports=function(e,t,n){n=n||{};var i={top:window.pageYOffset||document.documentElement.scrollTop,left:window.pageXOffset||document.documentElement.scrollLeft},o=a(i).ease(n.ease||"out-circ").to({top:t,left:e}).duration(n.duration||1e3);function l(){r(l),o.update()}return o.update((function(e){window.scrollTo(0|e.left,0|e.top)})),o.on("end",(function(){l=function(){}})),l(),o}},M4kv:function(e,t,n){function a(e){if(e)return function(e){for(var t in a.prototype)e[t]=a.prototype[t];return e}(e)}a.prototype.on=a.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this},a.prototype.once=function(e,t){function n(){this.off(e,n),t.apply(this,arguments)}return n.fn=t,this.on(e,n),this},a.prototype.off=a.prototype.removeListener=a.prototype.removeAllListeners=a.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n,a=this._callbacks["$"+e];if(!a)return this;if(1==arguments.length)return delete this._callbacks["$"+e],this;for(var r=0;r<a.length;r++)if((n=a[r])===t||n.fn===t){a.splice(r,1);break}return 0===a.length&&delete this._callbacks["$"+e],this},a.prototype.emit=function(e){this._callbacks=this._callbacks||{};var t=[].slice.call(arguments,1),n=this._callbacks["$"+e];if(n)for(var a=0,r=(n=n.slice(0)).length;a<r;++a)n[a].apply(this,t);return this},a.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]},a.prototype.hasListeners=function(e){return!!this.listeners(e).length},e.exports=a},RXBc:function(e,t,n){"use strict";n.r(t);var a,r,i,o,l=n("MUpH"),u=n("q1tI"),s=n.n(u),c=n("qJIG"),d=n.n(c),f=n("vOnD"),p=n("k06Q"),h=n("Bl7J"),m=n("p/d+"),g=n("SKMy"),b=n.n(g),y=f.default.a.withConfig({displayName:"name__Base",componentId:"sc-1u28qxz-0"})(["font-size:20pt;font-family:'Pacifico',cursive;color:#fff;margin:20px 0;width:fit-content;white-space:nowrap;transition-property:transform;transition-duration:0.8s;&:hover{cursor:pointer;text-decoration:none;color:#fff;}"," "," "," ",""],(function(e){return e.dark&&Object(f.css)(["color:#444;"])}),(function(e){return e.block&&Object(f.css)(["display:block;"])}),(function(e){return e.small&&Object(f.css)(["font-size:1em;"])}),(function(e){return e.big&&Object(f.css)(["font-size:2em;"])})),v=function(e){var t=e.dark,n=e.small,a=e.big,r=e.block;return s.a.createElement(y,{dark:t,small:n,big:a,block:r,href:"/"},"Ross Brandon")},w=f.default.div.withConfig({displayName:"navbar__Base",componentId:"he2cgp-0"})(["padding:0;margin:0;max-height:62px;line-height:62px;width:100vw;& ul{width:100%;height:62px;padding:0;margin:0;list-style:none;font-size:13px;}& ul > li button,& ul > li{height:62px;font-size:11px;float:right;position:relative;color:#fff;text-decoration:none;cursor:pointer;transition:opacity .3s ease;}& ul > li button{font-family:'Raleway';text-transform:uppercase;font-weight:600;letter-spacing:1px;margin-right:32px;}"," "," ",""],(function(e){return e.dark&&Object(f.css)(["background:#fff;& ul > li button,& ul > li{color:#242424;opacity:0.6;}& ul > li button:hover{opacity:1;}a{color:#000;}"])}),(function(e){return e.main&&Object(f.css)(["background-color:rgba(0,0,0,0.5);position:absolute;top:0;left:0;z-index:100;"])}),m.a.xs(a||(a=Object(l.a)(["\n    & ul {\n      display: none;\n    }\n  "])))),x=f.default.button.withConfig({displayName:"navbar__ButtonLink",componentId:"he2cgp-1"})(["background-color:transparent;border:none;cursor:pointer;text-decoration:underline;display:inline;margin:0;padding:0;:hover,:focus{text-decoration:none;}"]),E=function(e){var t=e.children,n=e.dark,a=e.main,r=t.map((function(e){var t;return e.props.id&&(t={name:e.props.children,href:"#"+e.props.id}),t})).filter((function(e){return void 0!==e})).reverse().map((function(e){return s.a.createElement("li",{key:e.name},s.a.createElement(x,{onClick:function(){b()(e.href)},onKeyDown:function(){b()(e.href)},type:"button",tabIndex:"0"},e.name))}));return s.a.createElement(w,{dark:n,main:a},s.a.createElement(p.Flex,null,s.a.createElement(p.Box,{px:2,width:[1,1/3,2/6]},s.a.createElement(v,null)),s.a.createElement(p.Box,{px:2,width:[0,2/3,4/6]},s.a.createElement("ul",null,r))))},k=n("lgVb"),O=n("yNYL"),_=n.n(O),S=n("dEtu"),I=function(e){var t=e.name,n=e.href;return s.a.createElement(S.OutboundLink,{href:n,target:"_blank",rel:"noopener noreferrer"},s.a.createElement(_.a,{name:t}))},j=f.default.div.withConfig({displayName:"socialIcons__Base",componentId:"sc-41i91u-0"})(["margin:20px 0;text-align:center;& a{display:inline-block;margin:5px;color:#fff;}& a span{transition:color 0.2s ease-in;}& a:hover{text-decoration:none;}& a:hover span.fa-linkedin{color:#4875b4;}& a:hover span.fa-envelope-o{color:#3cf;}& a:hover span.fa-github-alt{color:#fc6d26;}"]),M=function(e){var t=e.icons.map((function(e){return s.a.createElement(I,{key:e.name,name:e.name,href:e.href})}));return s.a.createElement(j,e,t)},C=n("9eSz"),L=n.n(C),P=f.default.div.withConfig({displayName:"showcase__Base",componentId:"sc-1dvdn1v-0"})(["width:40%;margin:0 auto !important;padding:0;overflow:hidden;padding-top:40px;",""],m.a.xs(r||(r=Object(l.a)(["\n    width: 95%;\n    margin-left: 0;\n  "])))),R=function(e){var t=e.images.map((function(e){return s.a.createElement(p.Box,{key:e.node.name,px:2,width:[.5,1/4]},s.a.createElement(L.a,{sizes:e.node.childImageSharp.sizes}))}));return s.a.createElement(P,null,s.a.createElement(p.Flex,{flexWrap:"wrap"},t))},z=n("ZXdF"),B=n("UFXn"),q=f.default.div.withConfig({displayName:"footer__Base",componentId:"sc-1klmjvn-0"})(["height:fit-contents;padding:0;background:#292929;"]),T=f.default.div.withConfig({displayName:"footer__FooterText",componentId:"sc-1klmjvn-1"})(["padding-top:6px;color:#fff;text-align:center;a{color:#9880dc;}"]),N=Object(f.default)(M).withConfig({displayName:"footer__SocialIconsStyled",componentId:"sc-1klmjvn-2"})(["margin-left:-8px;text-align:left;"]),H=Object(f.default)(p.Box).withConfig({displayName:"footer__CenteredButtonBox",componentId:"sc-1klmjvn-3"})(["margin:2em auto;"]),V=Object(f.default)(p.Flex).withConfig({displayName:"footer___StyledFlex",componentId:"sc-1klmjvn-4"})(["padding-right:25px;"]),Q=function(){var e=Object(B.a)(),t=e.github,n=e.linkedin,a=e.email;return s.a.createElement(q,null,s.a.createElement(p.Flex,{flexWrap:"wrap",justifyContent:"space-around"},s.a.createElement(p.Box,{px:2,width:[1,.5,1/3,1/6]},s.a.createElement(p.Flex,{flexDirection:"column"},s.a.createElement(p.Box,null,s.a.createElement(v,{block:!0})))),s.a.createElement(p.Box,{width:[1,.5,1/3,1/6]},s.a.createElement(p.Flex,{justifyContent:"center",flexDirection:"column"},s.a.createElement(p.Box,null,s.a.createElement(T,null,s.a.createElement("h4",null,"Made with"," ",s.a.createElement("a",{href:"https://www.gatsbyjs.org/",target:"_blank",rel:"noopener noreferrer"},"GatsbyJS")))),s.a.createElement(H,null,s.a.createElement(z.a,{onClick:function(){b()("html")},small:"small",dark:"dark",opaque:"opaque"},"Top")))),s.a.createElement(p.Box,{width:[.8,.5,1/3,1/6],pt:2},s.a.createElement(V,{alignItems:"center",justifyContent:"right"},s.a.createElement(N,{icons:[{name:"github-alt",href:t},{name:"linkedin",href:n},{name:"envelope-o",href:a}]})))))},A=n("Wbzz"),D=function(){return Object(A.useStaticQuery)("8063280")},F=f.default.div.withConfig({displayName:"pages__Content",componentId:"sc-6vm5de-0"})(["& > a{visibility:hidden;display:block;height:0;}& > h1{text-align:center;}"]),W=f.default.h1.withConfig({displayName:"pages__Title",componentId:"sc-6vm5de-1"})(["font-family:'Raleway';text-transform:uppercase;letter-spacing:6px;margin-bottom:40px;font-weight:400;font-size:32px;line-height:40px;border:none;color:#292929;",""],(function(e){return e.small&&Object(f.css)(["font-size:12px;letter-spacing:2px;font-weight:700;line-height:24px;"])})),U=f.default.div.withConfig({displayName:"pages__Section",componentId:"sc-6vm5de-2"})(["text-align:center;padding-top:45px;padding-bottom:40px;a{font-family:'Lato';}p{margin-bottom:25px;font-size:large;color:#666;}p.sub{margin-top:-25px;color:#666;}h1,h2,h3,h4,h5,h6{font-family:'Raleway';text-transform:uppercase;color:#292929;}h4{letter-spacing:3px;font-weight:400;font-size:24px;line-height:32px;color:#292929;}span{color:#666;opacity:0.5;display:block;}& > div:last-child{border-bottom:none !important;}"," ",""],(function(e){return e.center&&Object(f.css)(["text-align:left;h4,span{text-align:center;}",""],m.a.xs(i||(i=Object(l.a)(["\n        & > div {\n          margin-left: 3vw !important;\n        }\n    "]))))}),(function(e){return e.dark&&Object(f.css)(["background:#292929;*{color:#eee;}span{font-size:16px;line-height:28px;font-weight:400;opacity:0.5;}span,p{color:#fefefe !important;}h6{color:#fff;font-weight:700;}h4{color:#fff;}div{border-bottom:1px solid #333 !important;}"])})),J=f.default.div.withConfig({displayName:"pages__Item",componentId:"sc-6vm5de-3"})(["width:40%;margin:0 auto;border:none;border-bottom:1px solid #eee;h6{letter-spacing:2px;font-weight:700;padding-top:6px;}span,p{font-size:13px;line-height:24px;color:#666;}span{opacity:0.75;float:right;text-transform:uppercase;}p{margin-bottom:24px;opacity:0.5;}",""],m.a.xs(o||(o=Object(l.a)(["\n    width: 90%;\n\n  "])))),G=f.default.div.withConfig({displayName:"pages__Hero",componentId:"sc-6vm5de-4"})(["width:100vw;height:100vh;"]);t.default=function(){var e=Object(B.a)(),t=e.github,n=e.linkedin,a=e.email,r=D(),i=s.a.createElement(F,null,s.a.createElement(G,null,s.a.createElement(d.a,{expand:!0,collectionId:8807226})),s.a.createElement(k.a,null),s.a.createElement(M,{style:{position:"absolute",margin:"0 auto",left:0,right:0,bottom:16},icons:[{name:"github-alt",href:t},{name:"linkedin",href:n},{name:"envelope-o",href:a}]}),s.a.createElement("a",{id:"about-me"},"About Me"),s.a.createElement(U,null,s.a.createElement(W,null,"About Me"),s.a.createElement(p.Flex,{alignItems:"center",flexDirection:"column"},s.a.createElement(p.Box,{px:2,width:[1,.5]},s.a.createElement("p",null,"Full-stack software engineer, with a passion for application architecture and development. ",s.a.createElement("br",null)," In 2011 I started working as a full-stack developer at Hewlett-Packard in Austin, TX working with Java, Javascript, SQL Server, and Linux. ",s.a.createElement("br",null)),s.a.createElement("p",null,"In 2017, I began a new opportunity working with the popular e-commerce platform"," ",s.a.createElement("a",{href:"https://magento.com",target:"_blank",rel:"noopener noreferrer"},"Magento")," ","writing backend APIs for our move towards cloud based commerce."),s.a.createElement("p",null,"I currently reside happily as engineering team lead for the Product Recommendations project with"," ",s.a.createElement("a",{href:"https://adobe.com/commerce/magento.html",target:"_blank",rel:"noopener noreferrer"},"Adobe Commerce")," ","as part of a broader initative to drive innovation via service oriented architecture and transformation. I am proud to be a part of building the next generation e-commerce platform at Adobe.")))),s.a.createElement("a",{id:"experience"},"Experience"),s.a.createElement(U,{center:!0,dark:!0},s.a.createElement("h4",null,"Experience"),s.a.createElement("span",null,"Where I've worked."),s.a.createElement(J,null,s.a.createElement("span",null,"JUL 2018 - PRESENT"),s.a.createElement("h6",null,"ADOBE"),s.a.createElement("p",null,"Senior Software Engineer"),s.a.createElement("p",{className:"sub"},"Product Recommendations Team Lead")),s.a.createElement(J,null,s.a.createElement("span",null,"AUG 2017 - JUL 2018"),s.a.createElement("h6",null,"Magento"),s.a.createElement("p",null,"Software Engineer")),s.a.createElement(J,null,s.a.createElement("span",null,"AUG 2015 - AUG 2017"),s.a.createElement("h6",null,"HP, INC"),s.a.createElement("p",null,"Software Development Specialist")),s.a.createElement(J,null,s.a.createElement("span",null,"JAN 2011 - AUG 2015"),s.a.createElement("h6",null,"Hewlett-Packard"),s.a.createElement("p",null,"Full Stack Developer"))),s.a.createElement("a",{id:"tech"},"Tech"),s.a.createElement(U,{center:!0},s.a.createElement("h4",null,"Tech"),s.a.createElement("span",null,"Technologies I enjoy working with."),s.a.createElement(R,{images:r.allImageSharp?r.allImageSharp.edges:[]})),s.a.createElement(Q,null));return s.a.createElement(h.a,null,s.a.createElement(E,{main:!0},i.props.children),i)}},SKMy:function(e,t,n){var a=n("JwyU");e.exports=function(e,t){if(t=t||{},"string"==typeof e&&(e=document.querySelector(e)),e)return a(0,function(e,t,n){var a,r=document.body,i=document.documentElement,o=e.getBoundingClientRect(),l=i.clientHeight,u=Math.max(r.scrollHeight,r.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight);t=t||0,a="bottom"===n?o.bottom-l:"middle"===n?o.bottom-l/2-o.height/2:o.top;var s=u-l;return Math.min(a+t+window.pageYOffset,s)}(e,t.offset,t.align),t)}},bQgK:function(e,t,n){(function(t){(function(){var n,a,r,i,o,l;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-o)/1e6},a=t.hrtime,i=(n=function(){var e;return 1e9*(e=a())[0]+e[1]})(),l=1e9*t.uptime(),o=i-l):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)}).call(this,n("8oxB"))},dEtu:function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0,t.OutboundLink=void 0;var r=a(n("pVnL")),i=a(n("8OQS")),o=a(n("q1tI")),l=a(n("17x9")),u=o.default.forwardRef((function(e,t){var n=e.children,a=(0,i.default)(e,["children"]);return o.default.createElement("a",(0,r.default)({ref:t},a,{onClick:function(e){"function"==typeof a.onClick&&a.onClick(e);var t=!0;return(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.defaultPrevented)&&(t=!1),a.target&&"_self"!==a.target.toLowerCase()&&(t=!1),window.gtag?window.gtag("event","click",{event_category:"outbound",event_label:a.href,transport_type:t?"beacon":"",event_callback:function(){t&&(document.location=a.href)}}):t&&(document.location=a.href),!1}}),n)}));t.OutboundLink=u,u.propTypes={href:l.default.string,target:l.default.string,onClick:l.default.func}},"f/d2":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("q1tI")),r=i(n("17x9"));function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s={backgroundRepeat:"no-repeat",backgroundSize:"cover",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"auto"},c={position:"absolute",top:0,right:0,bottom:0,left:0,margin:0},d=function(e){var t=e.children,n=e.photoId,r=e.collectionId,i=e.username,o=e.expand,u=e.fixed,d=e.img,f=e.keywords,p=e.style,h=e.width,m=e.height;"string"==typeof h&&(h=parseInt(h,10)),"string"==typeof m&&(m=parseInt(m,10));var g=p&&p.width||h,b=p&&p.height||m,y=encodeURI(function(e){var t=e.username,n=e.width,a=e.height,r=e.photoId,i=e.collectionId,o=e.keywords,l=["//source.unsplash.com"];return e.fixed?l.push("daily").join("/"):(t&&l.push("user",t),!t&&i&&l.push("collection",i),t||i||!r||l.push(r),t||r||i||o||l.push("random"),l.push("".concat(n,"x").concat(a)),o&&l.push("?".concat(o.replace(/\s/g,""))),l.join("/"))}({username:i,collectionId:r,photoId:n,keywords:f,fixed:u,width:g,height:b})),v=l({width:h,height:m},p),w=l({},s,{backgroundImage:"url(".concat(y,")")});return w=o?l({},w,{},c):l({},w,{width:h,height:m},p),d?a.default.createElement("img",{src:y,style:v}):a.default.createElement("div",{style:w},t)};d.propTypes={children:r.default.node,collectionId:r.default.number,username:r.default.string,keywords:r.default.string,expand:r.default.bool,fixed:r.default.bool,img:r.default.bool,style:r.default.object,width:r.default.oneOfType([r.default.string,r.default.number]),height:r.default.oneOfType([r.default.string,r.default.number])},d.defaultProps={expand:!1,fixed:!1,img:!1,width:1080,height:720};var f=d;t.default=f},hBhu:function(e,t){t.linear=function(e){return e},t.inQuad=function(e){return e*e},t.outQuad=function(e){return e*(2-e)},t.inOutQuad=function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)},t.inCube=function(e){return e*e*e},t.outCube=function(e){return--e*e*e+1},t.inOutCube=function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)},t.inQuart=function(e){return e*e*e*e},t.outQuart=function(e){return 1- --e*e*e*e},t.inOutQuart=function(e){return(e*=2)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2)},t.inQuint=function(e){return e*e*e*e*e},t.outQuint=function(e){return--e*e*e*e*e+1},t.inOutQuint=function(e){return(e*=2)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)},t.inSine=function(e){return 1-Math.cos(e*Math.PI/2)},t.outSine=function(e){return Math.sin(e*Math.PI/2)},t.inOutSine=function(e){return.5*(1-Math.cos(Math.PI*e))},t.inExpo=function(e){return 0==e?0:Math.pow(1024,e-1)},t.outExpo=function(e){return 1==e?e:1-Math.pow(2,-10*e)},t.inOutExpo=function(e){return 0==e?0:1==e?1:(e*=2)<1?.5*Math.pow(1024,e-1):.5*(2-Math.pow(2,-10*(e-1)))},t.inCirc=function(e){return 1-Math.sqrt(1-e*e)},t.outCirc=function(e){return Math.sqrt(1- --e*e)},t.inOutCirc=function(e){return(e*=2)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)},t.inBack=function(e){var t=1.70158;return e*e*((t+1)*e-t)},t.outBack=function(e){var t=1.70158;return--e*e*((t+1)*e+t)+1},t.inOutBack=function(e){var t=2.5949095;return(e*=2)<1?e*e*((t+1)*e-t)*.5:.5*((e-=2)*e*((t+1)*e+t)+2)},t.inBounce=function(e){return 1-t.outBounce(1-e)},t.outBounce=function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},t.inOutBounce=function(e){return e<.5?.5*t.inBounce(2*e):.5*t.outBounce(2*e-1)+.5},t.inElastic=function(e){var t,n=.1;return 0===e?0:1===e?1:(!n||n<1?(n=1,t=.1):t=.4*Math.asin(1/n)/(2*Math.PI),-n*Math.pow(2,10*(e-=1))*Math.sin((e-t)*(2*Math.PI)/.4))},t.outElastic=function(e){var t,n=.1;return 0===e?0:1===e?1:(!n||n<1?(n=1,t=.1):t=.4*Math.asin(1/n)/(2*Math.PI),n*Math.pow(2,-10*e)*Math.sin((e-t)*(2*Math.PI)/.4)+1)},t.inOutElastic=function(e){var t,n=.1,a=.4;return 0===e?0:1===e?1:(!n||n<1?(n=1,t=.1):t=a*Math.asin(1/n)/(2*Math.PI),(e*=2)<1?n*Math.pow(2,10*(e-=1))*Math.sin((e-t)*(2*Math.PI)/a)*-.5:n*Math.pow(2,-10*(e-=1))*Math.sin((e-t)*(2*Math.PI)/a)*.5+1)},t["in-quad"]=t.inQuad,t["out-quad"]=t.outQuad,t["in-out-quad"]=t.inOutQuad,t["in-cube"]=t.inCube,t["out-cube"]=t.outCube,t["in-out-cube"]=t.inOutCube,t["in-quart"]=t.inQuart,t["out-quart"]=t.outQuart,t["in-out-quart"]=t.inOutQuart,t["in-quint"]=t.inQuint,t["out-quint"]=t.outQuint,t["in-out-quint"]=t.inOutQuint,t["in-sine"]=t.inSine,t["out-sine"]=t.outSine,t["in-out-sine"]=t.inOutSine,t["in-expo"]=t.inExpo,t["out-expo"]=t.outExpo,t["in-out-expo"]=t.inOutExpo,t["in-circ"]=t.inCirc,t["out-circ"]=t.outCirc,t["in-out-circ"]=t.inOutCirc,t["in-back"]=t.inBack,t["out-back"]=t.outBack,t["in-out-back"]=t.inOutBack,t["in-bounce"]=t.inBounce,t["out-bounce"]=t.outBounce,t["in-out-bounce"]=t.inOutBounce,t["in-elastic"]=t.inElastic,t["out-elastic"]=t.outElastic,t["in-out-elastic"]=t.inOutElastic},qJIG:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=((a=n("f/d2"))&&a.__esModule?a:{default:a}).default;t.default=r},xEkU:function(e,t,n){(function(t){for(var a=n("bQgK"),r="undefined"==typeof window?t:window,i=["moz","webkit"],o="AnimationFrame",l=r["request"+o],u=r["cancel"+o]||r["cancelRequest"+o],s=0;!l&&s<i.length;s++)l=r[i[s]+"Request"+o],u=r[i[s]+"Cancel"+o]||r[i[s]+"CancelRequest"+o];if(!l||!u){var c=0,d=0,f=[];l=function(e){if(0===f.length){var t=a(),n=Math.max(0,1e3/60-(t-c));c=n+t,setTimeout((function(){var e=f.slice(0);f.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(c)}catch(n){setTimeout((function(){throw n}),0)}}),Math.round(n))}return f.push({handle:++d,callback:e,cancelled:!1}),d},u=function(e){for(var t=0;t<f.length;t++)f[t].handle===e&&(f[t].cancelled=!0)}}e.exports=function(e){return l.call(r,e)},e.exports.cancel=function(){u.apply(r,arguments)},e.exports.polyfill=function(e){e||(e=r),e.requestAnimationFrame=l,e.cancelAnimationFrame=u}}).call(this,n("yLpj"))},yNYL:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=l(n("q1tI")),o=l(n("17x9"));function l(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.displayName="FontAwesome",e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e=this.props,t=e.border,n=e.cssModule,r=e.className,o=e.fixedWidth,l=e.flip,u=e.inverse,s=e.name,c=e.pulse,d=e.rotate,f=e.size,p=e.spin,h=e.stack,m=e.tag,g=void 0===m?"span":m,b=e.ariaLabel,y=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["border","cssModule","className","fixedWidth","flip","inverse","name","pulse","rotate","size","spin","stack","tag","ariaLabel"]),v=b?{"aria-label":b}:{"aria-hidden":!0},w=[];return n?(w.push(n.fa),w.push(n["fa-"+s]),f&&w.push(n["fa-"+f]),p&&w.push(n["fa-spin"]),c&&w.push(n["fa-pulse"]),t&&w.push(n["fa-border"]),o&&w.push(n["fa-fw"]),u&&w.push(n["fa-inverse"]),l&&w.push(n["fa-flip-"+l]),d&&w.push(n["fa-rotate-"+d]),h&&w.push(n["fa-stack-"+h])):(w.push("fa"),w.push("fa-"+s),f&&w.push("fa-"+f),p&&w.push("fa-spin"),c&&w.push("fa-pulse"),t&&w.push("fa-border"),o&&w.push("fa-fw"),u&&w.push("fa-inverse"),l&&w.push("fa-flip-"+l),d&&w.push("fa-rotate-"+d),h&&w.push("fa-stack-"+h)),r&&w.push(r),i.default.createElement(g,a({},y,v,{className:w.join(" ")}))}}]),t}(i.default.Component);u.propTypes={ariaLabel:o.default.string,border:o.default.bool,className:o.default.string,cssModule:o.default.object,fixedWidth:o.default.bool,flip:o.default.oneOf(["horizontal","vertical"]),inverse:o.default.bool,name:o.default.string.isRequired,pulse:o.default.bool,rotate:o.default.oneOf([90,180,270]),size:o.default.oneOf(["lg","2x","3x","4x","5x"]),spin:o.default.bool,stack:o.default.oneOf(["1x","2x"]),tag:o.default.string},t.default=u,e.exports=t.default}}]);
//# sourceMappingURL=component---src-pages-index-js-0f81bab3a0828fea33ff.js.map