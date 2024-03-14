import{b as F,av as De,c as jt,O as Jt,j as Mt,aw as Ee,_ as ft,p as Zt,U as Gt,ax as Se,f as Re,ay as Ae,s as Ce,k as je,as as Te,t as ke}from"./index-7d6b082f.js";const We={disableDefaultClasses:!1},Be=F.createContext(We);function Le(t){const{disableDefaultClasses:e}=F.useContext(Be);return r=>e?"":t(r)}const se="base";function He(t){return`${se}--${t}`}function _e(t,e){return`${se}-${t}-${e}`}function ue(t,e){const r=De[e];return r?He(r):_e(t,e)}function Ne(t,e){const r={};return e.forEach(n=>{r[n]=ue(t,n)}),r}var U="top",Q="bottom",K="right",I="left",Tt="auto",wt=[U,Q,K,I],lt="start",gt="end",Ye="clippingParents",ce="viewport",ht="popper",Ve="reference",Qt=wt.reduce(function(t,e){return t.concat([e+"-"+lt,e+"-"+gt])},[]),fe=[].concat(wt,[Tt]).reduce(function(t,e){return t.concat([e,e+"-"+lt,e+"-"+gt])},[]),Fe="beforeRead",Ue="read",Ie="afterRead",qe="beforeMain",Xe="main",ze="afterMain",Je="beforeWrite",Ze="write",Ge="afterWrite",Qe=[Fe,Ue,Ie,qe,Xe,ze,Je,Ze,Ge];function rt(t){return t?(t.nodeName||"").toLowerCase():null}function X(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function ct(t){var e=X(t).Element;return t instanceof e||t instanceof Element}function G(t){var e=X(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function kt(t){if(typeof ShadowRoot>"u")return!1;var e=X(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function Ke(t){var e=t.state;Object.keys(e.elements).forEach(function(r){var n=e.styles[r]||{},o=e.attributes[r]||{},a=e.elements[r];!G(a)||!rt(a)||(Object.assign(a.style,n),Object.keys(o).forEach(function(f){var s=o[f];s===!1?a.removeAttribute(f):a.setAttribute(f,s===!0?"":s)}))})}function tr(t){var e=t.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach(function(n){var o=e.elements[n],a=e.attributes[n]||{},f=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:r[n]),s=f.reduce(function(i,v){return i[v]="",i},{});!G(o)||!rt(o)||(Object.assign(o.style,s),Object.keys(a).forEach(function(i){o.removeAttribute(i)}))})}}const er={name:"applyStyles",enabled:!0,phase:"write",fn:Ke,effect:tr,requires:["computeStyles"]};function et(t){return t.split("-")[0]}var ut=Math.max,Dt=Math.min,pt=Math.round;function Rt(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function le(){return!/^((?!chrome|android).)*safari/i.test(Rt())}function dt(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!1);var n=t.getBoundingClientRect(),o=1,a=1;e&&G(t)&&(o=t.offsetWidth>0&&pt(n.width)/t.offsetWidth||1,a=t.offsetHeight>0&&pt(n.height)/t.offsetHeight||1);var f=ct(t)?X(t):window,s=f.visualViewport,i=!le()&&r,v=(n.left+(i&&s?s.offsetLeft:0))/o,c=(n.top+(i&&s?s.offsetTop:0))/a,y=n.width/o,R=n.height/a;return{width:y,height:R,top:c,right:v+y,bottom:c+R,left:v,x:v,y:c}}function Wt(t){var e=dt(t),r=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:n}}function pe(t,e){var r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&kt(r)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function nt(t){return X(t).getComputedStyle(t)}function rr(t){return["table","td","th"].indexOf(rt(t))>=0}function ot(t){return((ct(t)?t.ownerDocument:t.document)||window.document).documentElement}function Et(t){return rt(t)==="html"?t:t.assignedSlot||t.parentNode||(kt(t)?t.host:null)||ot(t)}function Kt(t){return!G(t)||nt(t).position==="fixed"?null:t.offsetParent}function nr(t){var e=/firefox/i.test(Rt()),r=/Trident/i.test(Rt());if(r&&G(t)){var n=nt(t);if(n.position==="fixed")return null}var o=Et(t);for(kt(o)&&(o=o.host);G(o)&&["html","body"].indexOf(rt(o))<0;){var a=nt(o);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||e&&a.willChange==="filter"||e&&a.filter&&a.filter!=="none")return o;o=o.parentNode}return null}function xt(t){for(var e=X(t),r=Kt(t);r&&rr(r)&&nt(r).position==="static";)r=Kt(r);return r&&(rt(r)==="html"||rt(r)==="body"&&nt(r).position==="static")?e:r||nr(t)||e}function Bt(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function mt(t,e,r){return ut(t,Dt(e,r))}function or(t,e,r){var n=mt(t,e,r);return n>r?r:n}function de(){return{top:0,right:0,bottom:0,left:0}}function ve(t){return Object.assign({},de(),t)}function he(t,e){return e.reduce(function(r,n){return r[n]=t,r},{})}var ar=function(e,r){return e=typeof e=="function"?e(Object.assign({},r.rects,{placement:r.placement})):e,ve(typeof e!="number"?e:he(e,wt))};function ir(t){var e,r=t.state,n=t.name,o=t.options,a=r.elements.arrow,f=r.modifiersData.popperOffsets,s=et(r.placement),i=Bt(s),v=[I,K].indexOf(s)>=0,c=v?"height":"width";if(!(!a||!f)){var y=ar(o.padding,r),R=Wt(a),h=i==="y"?U:I,E=i==="y"?Q:K,O=r.rects.reference[c]+r.rects.reference[i]-f[i]-r.rects.popper[c],D=f[i]-r.rects.reference[i],A=xt(a),T=A?i==="y"?A.clientHeight||0:A.clientWidth||0:0,S=O/2-D/2,b=y[h],M=T-R[c]-y[E],$=T/2-R[c]/2+S,C=mt(b,$,M),B=i;r.modifiersData[n]=(e={},e[B]=C,e.centerOffset=C-$,e)}}function sr(t){var e=t.state,r=t.options,n=r.element,o=n===void 0?"[data-popper-arrow]":n;o!=null&&(typeof o=="string"&&(o=e.elements.popper.querySelector(o),!o)||pe(e.elements.popper,o)&&(e.elements.arrow=o))}const ur={name:"arrow",enabled:!0,phase:"main",fn:ir,effect:sr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function vt(t){return t.split("-")[1]}var cr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function fr(t,e){var r=t.x,n=t.y,o=e.devicePixelRatio||1;return{x:pt(r*o)/o||0,y:pt(n*o)/o||0}}function te(t){var e,r=t.popper,n=t.popperRect,o=t.placement,a=t.variation,f=t.offsets,s=t.position,i=t.gpuAcceleration,v=t.adaptive,c=t.roundOffsets,y=t.isFixed,R=f.x,h=R===void 0?0:R,E=f.y,O=E===void 0?0:E,D=typeof c=="function"?c({x:h,y:O}):{x:h,y:O};h=D.x,O=D.y;var A=f.hasOwnProperty("x"),T=f.hasOwnProperty("y"),S=I,b=U,M=window;if(v){var $=xt(r),C="clientHeight",B="clientWidth";if($===X(r)&&($=ot(r),nt($).position!=="static"&&s==="absolute"&&(C="scrollHeight",B="scrollWidth")),$=$,o===U||(o===I||o===K)&&a===gt){b=Q;var k=y&&$===M&&M.visualViewport?M.visualViewport.height:$[C];O-=k-n.height,O*=i?1:-1}if(o===I||(o===U||o===Q)&&a===gt){S=K;var P=y&&$===M&&M.visualViewport?M.visualViewport.width:$[B];h-=P-n.width,h*=i?1:-1}}var w=Object.assign({position:s},v&&cr),Y=c===!0?fr({x:h,y:O},X(r)):{x:h,y:O};if(h=Y.x,O=Y.y,i){var _;return Object.assign({},w,(_={},_[b]=T?"0":"",_[S]=A?"0":"",_.transform=(M.devicePixelRatio||1)<=1?"translate("+h+"px, "+O+"px)":"translate3d("+h+"px, "+O+"px, 0)",_))}return Object.assign({},w,(e={},e[b]=T?O+"px":"",e[S]=A?h+"px":"",e.transform="",e))}function lr(t){var e=t.state,r=t.options,n=r.gpuAcceleration,o=n===void 0?!0:n,a=r.adaptive,f=a===void 0?!0:a,s=r.roundOffsets,i=s===void 0?!0:s,v={placement:et(e.placement),variation:vt(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:o,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,te(Object.assign({},v,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:f,roundOffsets:i})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,te(Object.assign({},v,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:i})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const pr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:lr,data:{}};var $t={passive:!0};function dr(t){var e=t.state,r=t.instance,n=t.options,o=n.scroll,a=o===void 0?!0:o,f=n.resize,s=f===void 0?!0:f,i=X(e.elements.popper),v=[].concat(e.scrollParents.reference,e.scrollParents.popper);return a&&v.forEach(function(c){c.addEventListener("scroll",r.update,$t)}),s&&i.addEventListener("resize",r.update,$t),function(){a&&v.forEach(function(c){c.removeEventListener("scroll",r.update,$t)}),s&&i.removeEventListener("resize",r.update,$t)}}const vr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:dr,data:{}};var hr={left:"right",right:"left",bottom:"top",top:"bottom"};function Pt(t){return t.replace(/left|right|bottom|top/g,function(e){return hr[e]})}var mr={start:"end",end:"start"};function ee(t){return t.replace(/start|end/g,function(e){return mr[e]})}function Lt(t){var e=X(t),r=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:r,scrollTop:n}}function Ht(t){return dt(ot(t)).left+Lt(t).scrollLeft}function yr(t,e){var r=X(t),n=ot(t),o=r.visualViewport,a=n.clientWidth,f=n.clientHeight,s=0,i=0;if(o){a=o.width,f=o.height;var v=le();(v||!v&&e==="fixed")&&(s=o.offsetLeft,i=o.offsetTop)}return{width:a,height:f,x:s+Ht(t),y:i}}function gr(t){var e,r=ot(t),n=Lt(t),o=(e=t.ownerDocument)==null?void 0:e.body,a=ut(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),f=ut(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-n.scrollLeft+Ht(t),i=-n.scrollTop;return nt(o||r).direction==="rtl"&&(s+=ut(r.clientWidth,o?o.clientWidth:0)-a),{width:a,height:f,x:s,y:i}}function _t(t){var e=nt(t),r=e.overflow,n=e.overflowX,o=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function me(t){return["html","body","#document"].indexOf(rt(t))>=0?t.ownerDocument.body:G(t)&&_t(t)?t:me(Et(t))}function yt(t,e){var r;e===void 0&&(e=[]);var n=me(t),o=n===((r=t.ownerDocument)==null?void 0:r.body),a=X(n),f=o?[a].concat(a.visualViewport||[],_t(n)?n:[]):n,s=e.concat(f);return o?s:s.concat(yt(Et(f)))}function At(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function br(t,e){var r=dt(t,!1,e==="fixed");return r.top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r}function re(t,e,r){return e===ce?At(yr(t,r)):ct(e)?br(e,r):At(gr(ot(t)))}function wr(t){var e=yt(Et(t)),r=["absolute","fixed"].indexOf(nt(t).position)>=0,n=r&&G(t)?xt(t):t;return ct(n)?e.filter(function(o){return ct(o)&&pe(o,n)&&rt(o)!=="body"}):[]}function xr(t,e,r,n){var o=e==="clippingParents"?wr(t):[].concat(e),a=[].concat(o,[r]),f=a[0],s=a.reduce(function(i,v){var c=re(t,v,n);return i.top=ut(c.top,i.top),i.right=Dt(c.right,i.right),i.bottom=Dt(c.bottom,i.bottom),i.left=ut(c.left,i.left),i},re(t,f,n));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function ye(t){var e=t.reference,r=t.element,n=t.placement,o=n?et(n):null,a=n?vt(n):null,f=e.x+e.width/2-r.width/2,s=e.y+e.height/2-r.height/2,i;switch(o){case U:i={x:f,y:e.y-r.height};break;case Q:i={x:f,y:e.y+e.height};break;case K:i={x:e.x+e.width,y:s};break;case I:i={x:e.x-r.width,y:s};break;default:i={x:e.x,y:e.y}}var v=o?Bt(o):null;if(v!=null){var c=v==="y"?"height":"width";switch(a){case lt:i[v]=i[v]-(e[c]/2-r[c]/2);break;case gt:i[v]=i[v]+(e[c]/2-r[c]/2);break}}return i}function bt(t,e){e===void 0&&(e={});var r=e,n=r.placement,o=n===void 0?t.placement:n,a=r.strategy,f=a===void 0?t.strategy:a,s=r.boundary,i=s===void 0?Ye:s,v=r.rootBoundary,c=v===void 0?ce:v,y=r.elementContext,R=y===void 0?ht:y,h=r.altBoundary,E=h===void 0?!1:h,O=r.padding,D=O===void 0?0:O,A=ve(typeof D!="number"?D:he(D,wt)),T=R===ht?Ve:ht,S=t.rects.popper,b=t.elements[E?T:R],M=xr(ct(b)?b:b.contextElement||ot(t.elements.popper),i,c,f),$=dt(t.elements.reference),C=ye({reference:$,element:S,strategy:"absolute",placement:o}),B=At(Object.assign({},S,C)),k=R===ht?B:$,P={top:M.top-k.top+A.top,bottom:k.bottom-M.bottom+A.bottom,left:M.left-k.left+A.left,right:k.right-M.right+A.right},w=t.modifiersData.offset;if(R===ht&&w){var Y=w[o];Object.keys(P).forEach(function(_){var m=[K,Q].indexOf(_)>=0?1:-1,p=[U,Q].indexOf(_)>=0?"y":"x";P[_]+=Y[p]*m})}return P}function Or(t,e){e===void 0&&(e={});var r=e,n=r.placement,o=r.boundary,a=r.rootBoundary,f=r.padding,s=r.flipVariations,i=r.allowedAutoPlacements,v=i===void 0?fe:i,c=vt(n),y=c?s?Qt:Qt.filter(function(E){return vt(E)===c}):wt,R=y.filter(function(E){return v.indexOf(E)>=0});R.length===0&&(R=y);var h=R.reduce(function(E,O){return E[O]=bt(t,{placement:O,boundary:o,rootBoundary:a,padding:f})[et(O)],E},{});return Object.keys(h).sort(function(E,O){return h[E]-h[O]})}function $r(t){if(et(t)===Tt)return[];var e=Pt(t);return[ee(t),e,ee(e)]}function Pr(t){var e=t.state,r=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var o=r.mainAxis,a=o===void 0?!0:o,f=r.altAxis,s=f===void 0?!0:f,i=r.fallbackPlacements,v=r.padding,c=r.boundary,y=r.rootBoundary,R=r.altBoundary,h=r.flipVariations,E=h===void 0?!0:h,O=r.allowedAutoPlacements,D=e.options.placement,A=et(D),T=A===D,S=i||(T||!E?[Pt(D)]:$r(D)),b=[D].concat(S).reduce(function(H,N){return H.concat(et(N)===Tt?Or(e,{placement:N,boundary:c,rootBoundary:y,padding:v,flipVariations:E,allowedAutoPlacements:O}):N)},[]),M=e.rects.reference,$=e.rects.popper,C=new Map,B=!0,k=b[0],P=0;P<b.length;P++){var w=b[P],Y=et(w),_=vt(w)===lt,m=[U,Q].indexOf(Y)>=0,p=m?"width":"height",u=bt(e,{placement:w,boundary:c,rootBoundary:y,altBoundary:R,padding:v}),d=m?_?K:I:_?Q:U;M[p]>$[p]&&(d=Pt(d));var l=Pt(d),g=[];if(a&&g.push(u[Y]<=0),s&&g.push(u[d]<=0,u[l]<=0),g.every(function(H){return H})){k=w,B=!1;break}C.set(w,g)}if(B)for(var x=E?3:1,j=function(N){var z=b.find(function(J){var q=C.get(J);if(q)return q.slice(0,N).every(function(tt){return tt})});if(z)return k=z,"break"},W=x;W>0;W--){var L=j(W);if(L==="break")break}e.placement!==k&&(e.modifiersData[n]._skip=!0,e.placement=k,e.reset=!0)}}const Mr={name:"flip",enabled:!0,phase:"main",fn:Pr,requiresIfExists:["offset"],data:{_skip:!1}};function ne(t,e,r){return r===void 0&&(r={x:0,y:0}),{top:t.top-e.height-r.y,right:t.right-e.width+r.x,bottom:t.bottom-e.height+r.y,left:t.left-e.width-r.x}}function oe(t){return[U,K,Q,I].some(function(e){return t[e]>=0})}function Dr(t){var e=t.state,r=t.name,n=e.rects.reference,o=e.rects.popper,a=e.modifiersData.preventOverflow,f=bt(e,{elementContext:"reference"}),s=bt(e,{altBoundary:!0}),i=ne(f,n),v=ne(s,o,a),c=oe(i),y=oe(v);e.modifiersData[r]={referenceClippingOffsets:i,popperEscapeOffsets:v,isReferenceHidden:c,hasPopperEscaped:y},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":y})}const Er={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Dr};function Sr(t,e,r){var n=et(t),o=[I,U].indexOf(n)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},e,{placement:t})):r,f=a[0],s=a[1];return f=f||0,s=(s||0)*o,[I,K].indexOf(n)>=0?{x:s,y:f}:{x:f,y:s}}function Rr(t){var e=t.state,r=t.options,n=t.name,o=r.offset,a=o===void 0?[0,0]:o,f=fe.reduce(function(c,y){return c[y]=Sr(y,e.rects,a),c},{}),s=f[e.placement],i=s.x,v=s.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=i,e.modifiersData.popperOffsets.y+=v),e.modifiersData[n]=f}const Ar={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Rr};function Cr(t){var e=t.state,r=t.name;e.modifiersData[r]=ye({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const jr={name:"popperOffsets",enabled:!0,phase:"read",fn:Cr,data:{}};function Tr(t){return t==="x"?"y":"x"}function kr(t){var e=t.state,r=t.options,n=t.name,o=r.mainAxis,a=o===void 0?!0:o,f=r.altAxis,s=f===void 0?!1:f,i=r.boundary,v=r.rootBoundary,c=r.altBoundary,y=r.padding,R=r.tether,h=R===void 0?!0:R,E=r.tetherOffset,O=E===void 0?0:E,D=bt(e,{boundary:i,rootBoundary:v,padding:y,altBoundary:c}),A=et(e.placement),T=vt(e.placement),S=!T,b=Bt(A),M=Tr(b),$=e.modifiersData.popperOffsets,C=e.rects.reference,B=e.rects.popper,k=typeof O=="function"?O(Object.assign({},e.rects,{placement:e.placement})):O,P=typeof k=="number"?{mainAxis:k,altAxis:k}:Object.assign({mainAxis:0,altAxis:0},k),w=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,Y={x:0,y:0};if($){if(a){var _,m=b==="y"?U:I,p=b==="y"?Q:K,u=b==="y"?"height":"width",d=$[b],l=d+D[m],g=d-D[p],x=h?-B[u]/2:0,j=T===lt?C[u]:B[u],W=T===lt?-B[u]:-C[u],L=e.elements.arrow,H=h&&L?Wt(L):{width:0,height:0},N=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:de(),z=N[m],J=N[p],q=mt(0,C[u],H[u]),tt=S?C[u]/2-x-q-z-P.mainAxis:j-q-z-P.mainAxis,V=S?-C[u]/2+x+q+J+P.mainAxis:W+q+J+P.mainAxis,Z=e.elements.arrow&&xt(e.elements.arrow),at=Z?b==="y"?Z.clientTop||0:Z.clientLeft||0:0,it=(_=w==null?void 0:w[b])!=null?_:0,Oe=d+tt-it-at,$e=d+V-it,Yt=mt(h?Dt(l,Oe):l,d,h?ut(g,$e):g);$[b]=Yt,Y[b]=Yt-d}if(s){var Vt,Pe=b==="x"?U:I,Me=b==="x"?Q:K,st=$[M],Ot=M==="y"?"height":"width",Ft=st+D[Pe],Ut=st-D[Me],St=[U,I].indexOf(A)!==-1,It=(Vt=w==null?void 0:w[M])!=null?Vt:0,qt=St?Ft:st-C[Ot]-B[Ot]-It+P.altAxis,Xt=St?st+C[Ot]+B[Ot]-It-P.altAxis:Ut,zt=h&&St?or(qt,st,Xt):mt(h?qt:Ft,st,h?Xt:Ut);$[M]=zt,Y[M]=zt-st}e.modifiersData[n]=Y}}const Wr={name:"preventOverflow",enabled:!0,phase:"main",fn:kr,requiresIfExists:["offset"]};function Br(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Lr(t){return t===X(t)||!G(t)?Lt(t):Br(t)}function Hr(t){var e=t.getBoundingClientRect(),r=pt(e.width)/t.offsetWidth||1,n=pt(e.height)/t.offsetHeight||1;return r!==1||n!==1}function _r(t,e,r){r===void 0&&(r=!1);var n=G(e),o=G(e)&&Hr(e),a=ot(e),f=dt(t,o,r),s={scrollLeft:0,scrollTop:0},i={x:0,y:0};return(n||!n&&!r)&&((rt(e)!=="body"||_t(a))&&(s=Lr(e)),G(e)?(i=dt(e,!0),i.x+=e.clientLeft,i.y+=e.clientTop):a&&(i.x=Ht(a))),{x:f.left+s.scrollLeft-i.x,y:f.top+s.scrollTop-i.y,width:f.width,height:f.height}}function Nr(t){var e=new Map,r=new Set,n=[];t.forEach(function(a){e.set(a.name,a)});function o(a){r.add(a.name);var f=[].concat(a.requires||[],a.requiresIfExists||[]);f.forEach(function(s){if(!r.has(s)){var i=e.get(s);i&&o(i)}}),n.push(a)}return t.forEach(function(a){r.has(a.name)||o(a)}),n}function Yr(t){var e=Nr(t);return Qe.reduce(function(r,n){return r.concat(e.filter(function(o){return o.phase===n}))},[])}function Vr(t){var e;return function(){return e||(e=new Promise(function(r){Promise.resolve().then(function(){e=void 0,r(t())})})),e}}function Fr(t){var e=t.reduce(function(r,n){var o=r[n.name];return r[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,r},{});return Object.keys(e).map(function(r){return e[r]})}var ae={placement:"bottom",modifiers:[],strategy:"absolute"};function ie(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Ur(t){t===void 0&&(t={});var e=t,r=e.defaultModifiers,n=r===void 0?[]:r,o=e.defaultOptions,a=o===void 0?ae:o;return function(s,i,v){v===void 0&&(v=a);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},ae,a),modifiersData:{},elements:{reference:s,popper:i},attributes:{},styles:{}},y=[],R=!1,h={state:c,setOptions:function(A){var T=typeof A=="function"?A(c.options):A;O(),c.options=Object.assign({},a,c.options,T),c.scrollParents={reference:ct(s)?yt(s):s.contextElement?yt(s.contextElement):[],popper:yt(i)};var S=Yr(Fr([].concat(n,c.options.modifiers)));return c.orderedModifiers=S.filter(function(b){return b.enabled}),E(),h.update()},forceUpdate:function(){if(!R){var A=c.elements,T=A.reference,S=A.popper;if(ie(T,S)){c.rects={reference:_r(T,xt(S),c.options.strategy==="fixed"),popper:Wt(S)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(P){return c.modifiersData[P.name]=Object.assign({},P.data)});for(var b=0;b<c.orderedModifiers.length;b++){if(c.reset===!0){c.reset=!1,b=-1;continue}var M=c.orderedModifiers[b],$=M.fn,C=M.options,B=C===void 0?{}:C,k=M.name;typeof $=="function"&&(c=$({state:c,options:B,name:k,instance:h})||c)}}}},update:Vr(function(){return new Promise(function(D){h.forceUpdate(),D(c)})}),destroy:function(){O(),R=!0}};if(!ie(s,i))return h;h.setOptions(v).then(function(D){!R&&v.onFirstUpdate&&v.onFirstUpdate(D)});function E(){c.orderedModifiers.forEach(function(D){var A=D.name,T=D.options,S=T===void 0?{}:T,b=D.effect;if(typeof b=="function"){var M=b({state:c,name:A,instance:h,options:S}),$=function(){};y.push(M||$)}})}function O(){y.forEach(function(D){return D()}),y=[]}return h}}var Ir=[vr,jr,pr,er,Ar,Mr,Wr,ur,Er],qr=Ur({defaultModifiers:Ir});const ge="Popper";function Xr(t){return ue(ge,t)}Ne(ge,["root"]);const zr=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],Jr=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function Zr(t,e){if(e==="ltr")return t;switch(t){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return t}}function Ct(t){return typeof t=="function"?t():t}function Gr(t){return t.nodeType!==void 0}const Qr=()=>Re({root:["root"]},Le(Xr)),Kr={},tn=F.forwardRef(function(e,r){var n;const{anchorEl:o,children:a,direction:f,disablePortal:s,modifiers:i,open:v,placement:c,popperOptions:y,popperRef:R,slotProps:h={},slots:E={},TransitionProps:O}=e,D=jt(e,zr),A=F.useRef(null),T=Zt(A,r),S=F.useRef(null),b=Zt(S,R),M=F.useRef(b);Gt(()=>{M.current=b},[b]),F.useImperativeHandle(R,()=>S.current,[]);const $=Zr(c,f),[C,B]=F.useState($),[k,P]=F.useState(Ct(o));F.useEffect(()=>{S.current&&S.current.forceUpdate()}),F.useEffect(()=>{o&&P(Ct(o))},[o]),Gt(()=>{if(!k||!v)return;const p=l=>{B(l.placement)};let u=[{name:"preventOverflow",options:{altBoundary:s}},{name:"flip",options:{altBoundary:s}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:l})=>{p(l)}}];i!=null&&(u=u.concat(i)),y&&y.modifiers!=null&&(u=u.concat(y.modifiers));const d=qr(k,A.current,ft({placement:$},y,{modifiers:u}));return M.current(d),()=>{d.destroy(),M.current(null)}},[k,s,i,v,y,$]);const w={placement:C};O!==null&&(w.TransitionProps=O);const Y=Qr(),_=(n=E.root)!=null?n:"div",m=Se({elementType:_,externalSlotProps:h.root,externalForwardedProps:D,additionalProps:{role:"tooltip",ref:T},ownerState:e,className:Y.root});return Mt.jsx(_,ft({},m,{children:typeof a=="function"?a(w):a}))}),en=F.forwardRef(function(e,r){const{anchorEl:n,children:o,container:a,direction:f="ltr",disablePortal:s=!1,keepMounted:i=!1,modifiers:v,open:c,placement:y="bottom",popperOptions:R=Kr,popperRef:h,style:E,transition:O=!1,slotProps:D={},slots:A={}}=e,T=jt(e,Jr),[S,b]=F.useState(!0),M=()=>{b(!1)},$=()=>{b(!0)};if(!i&&!c&&(!O||S))return null;let C;if(a)C=a;else if(n){const P=Ct(n);C=P&&Gr(P)?Jt(P).body:Jt(null).body}const B=!c&&i&&(!O||S)?"none":void 0,k=O?{in:c,onEnter:M,onExited:$}:void 0;return Mt.jsx(Ee,{disablePortal:s,container:C,children:Mt.jsx(tn,ft({anchorEl:n,direction:f,disablePortal:s,modifiers:v,ref:r,open:O?!S:c,placement:y,popperOptions:R,popperRef:h,slotProps:D,slots:A},T,{style:ft({position:"fixed",top:0,left:0,display:B},E),TransitionProps:k,children:o}))})});var Nt={};Object.defineProperty(Nt,"__esModule",{value:!0});var be=Nt.default=void 0,rn=on(F),nn=Ae;function we(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,r=new WeakMap;return(we=function(n){return n?r:e})(t)}function on(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var r=we(e);if(r&&r.has(t))return r.get(t);var n={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(a!=="default"&&Object.prototype.hasOwnProperty.call(t,a)){var f=o?Object.getOwnPropertyDescriptor(t,a):null;f&&(f.get||f.set)?Object.defineProperty(n,a,f):n[a]=t[a]}return n.default=t,r&&r.set(t,n),n}function an(t){return Object.keys(t).length===0}function sn(t=null){const e=rn.useContext(nn.ThemeContext);return!e||an(e)?t:e}be=Nt.default=sn;const un=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],cn=Ce(en,{name:"MuiPopper",slot:"Root",overridesResolver:(t,e)=>e.root})({}),fn=F.forwardRef(function(e,r){var n;const o=be(),a=je({props:e,name:"MuiPopper"}),{anchorEl:f,component:s,components:i,componentsProps:v,container:c,disablePortal:y,keepMounted:R,modifiers:h,open:E,placement:O,popperOptions:D,popperRef:A,transition:T,slots:S,slotProps:b}=a,M=jt(a,un),$=(n=S==null?void 0:S.root)!=null?n:i==null?void 0:i.Root,C=ft({anchorEl:f,container:c,disablePortal:y,keepMounted:R,modifiers:h,open:E,placement:O,popperOptions:D,popperRef:A,transition:T},M);return Mt.jsx(cn,ft({as:s,direction:o==null?void 0:o.direction,slots:{root:$},slotProps:b??v},C,{ref:r}))}),dn=fn;var xe={exports:{}};(function(t,e){(function(r,n){t.exports=n()})(ke,function(){var r=1e3,n=6e4,o=36e5,a="millisecond",f="second",s="minute",i="hour",v="day",c="week",y="month",R="quarter",h="year",E="date",O="Invalid Date",D=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,A=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,T={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(m){var p=["th","st","nd","rd"],u=m%100;return"["+m+(p[(u-20)%10]||p[u]||p[0])+"]"}},S=function(m,p,u){var d=String(m);return!d||d.length>=p?m:""+Array(p+1-d.length).join(u)+m},b={s:S,z:function(m){var p=-m.utcOffset(),u=Math.abs(p),d=Math.floor(u/60),l=u%60;return(p<=0?"+":"-")+S(d,2,"0")+":"+S(l,2,"0")},m:function m(p,u){if(p.date()<u.date())return-m(u,p);var d=12*(u.year()-p.year())+(u.month()-p.month()),l=p.clone().add(d,y),g=u-l<0,x=p.clone().add(d+(g?-1:1),y);return+(-(d+(u-l)/(g?l-x:x-l))||0)},a:function(m){return m<0?Math.ceil(m)||0:Math.floor(m)},p:function(m){return{M:y,y:h,w:c,d:v,D:E,h:i,m:s,s:f,ms:a,Q:R}[m]||String(m||"").toLowerCase().replace(/s$/,"")},u:function(m){return m===void 0}},M="en",$={};$[M]=T;var C="$isDayjsObject",B=function(m){return m instanceof Y||!(!m||!m[C])},k=function m(p,u,d){var l;if(!p)return M;if(typeof p=="string"){var g=p.toLowerCase();$[g]&&(l=g),u&&($[g]=u,l=g);var x=p.split("-");if(!l&&x.length>1)return m(x[0])}else{var j=p.name;$[j]=p,l=j}return!d&&l&&(M=l),l||!d&&M},P=function(m,p){if(B(m))return m.clone();var u=typeof p=="object"?p:{};return u.date=m,u.args=arguments,new Y(u)},w=b;w.l=k,w.i=B,w.w=function(m,p){return P(m,{locale:p.$L,utc:p.$u,x:p.$x,$offset:p.$offset})};var Y=function(){function m(u){this.$L=k(u.locale,null,!0),this.parse(u),this.$x=this.$x||u.x||{},this[C]=!0}var p=m.prototype;return p.parse=function(u){this.$d=function(d){var l=d.date,g=d.utc;if(l===null)return new Date(NaN);if(w.u(l))return new Date;if(l instanceof Date)return new Date(l);if(typeof l=="string"&&!/Z$/i.test(l)){var x=l.match(D);if(x){var j=x[2]-1||0,W=(x[7]||"0").substring(0,3);return g?new Date(Date.UTC(x[1],j,x[3]||1,x[4]||0,x[5]||0,x[6]||0,W)):new Date(x[1],j,x[3]||1,x[4]||0,x[5]||0,x[6]||0,W)}}return new Date(l)}(u),this.init()},p.init=function(){var u=this.$d;this.$y=u.getFullYear(),this.$M=u.getMonth(),this.$D=u.getDate(),this.$W=u.getDay(),this.$H=u.getHours(),this.$m=u.getMinutes(),this.$s=u.getSeconds(),this.$ms=u.getMilliseconds()},p.$utils=function(){return w},p.isValid=function(){return this.$d.toString()!==O},p.isSame=function(u,d){var l=P(u);return this.startOf(d)<=l&&l<=this.endOf(d)},p.isAfter=function(u,d){return P(u)<this.startOf(d)},p.isBefore=function(u,d){return this.endOf(d)<P(u)},p.$g=function(u,d,l){return w.u(u)?this[d]:this.set(l,u)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(u,d){var l=this,g=!!w.u(d)||d,x=w.p(u),j=function(tt,V){var Z=w.w(l.$u?Date.UTC(l.$y,V,tt):new Date(l.$y,V,tt),l);return g?Z:Z.endOf(v)},W=function(tt,V){return w.w(l.toDate()[tt].apply(l.toDate("s"),(g?[0,0,0,0]:[23,59,59,999]).slice(V)),l)},L=this.$W,H=this.$M,N=this.$D,z="set"+(this.$u?"UTC":"");switch(x){case h:return g?j(1,0):j(31,11);case y:return g?j(1,H):j(0,H+1);case c:var J=this.$locale().weekStart||0,q=(L<J?L+7:L)-J;return j(g?N-q:N+(6-q),H);case v:case E:return W(z+"Hours",0);case i:return W(z+"Minutes",1);case s:return W(z+"Seconds",2);case f:return W(z+"Milliseconds",3);default:return this.clone()}},p.endOf=function(u){return this.startOf(u,!1)},p.$set=function(u,d){var l,g=w.p(u),x="set"+(this.$u?"UTC":""),j=(l={},l[v]=x+"Date",l[E]=x+"Date",l[y]=x+"Month",l[h]=x+"FullYear",l[i]=x+"Hours",l[s]=x+"Minutes",l[f]=x+"Seconds",l[a]=x+"Milliseconds",l)[g],W=g===v?this.$D+(d-this.$W):d;if(g===y||g===h){var L=this.clone().set(E,1);L.$d[j](W),L.init(),this.$d=L.set(E,Math.min(this.$D,L.daysInMonth())).$d}else j&&this.$d[j](W);return this.init(),this},p.set=function(u,d){return this.clone().$set(u,d)},p.get=function(u){return this[w.p(u)]()},p.add=function(u,d){var l,g=this;u=Number(u);var x=w.p(d),j=function(H){var N=P(g);return w.w(N.date(N.date()+Math.round(H*u)),g)};if(x===y)return this.set(y,this.$M+u);if(x===h)return this.set(h,this.$y+u);if(x===v)return j(1);if(x===c)return j(7);var W=(l={},l[s]=n,l[i]=o,l[f]=r,l)[x]||1,L=this.$d.getTime()+u*W;return w.w(L,this)},p.subtract=function(u,d){return this.add(-1*u,d)},p.format=function(u){var d=this,l=this.$locale();if(!this.isValid())return l.invalidDate||O;var g=u||"YYYY-MM-DDTHH:mm:ssZ",x=w.z(this),j=this.$H,W=this.$m,L=this.$M,H=l.weekdays,N=l.months,z=l.meridiem,J=function(V,Z,at,it){return V&&(V[Z]||V(d,g))||at[Z].slice(0,it)},q=function(V){return w.s(j%12||12,V,"0")},tt=z||function(V,Z,at){var it=V<12?"AM":"PM";return at?it.toLowerCase():it};return g.replace(A,function(V,Z){return Z||function(at){switch(at){case"YY":return String(d.$y).slice(-2);case"YYYY":return w.s(d.$y,4,"0");case"M":return L+1;case"MM":return w.s(L+1,2,"0");case"MMM":return J(l.monthsShort,L,N,3);case"MMMM":return J(N,L);case"D":return d.$D;case"DD":return w.s(d.$D,2,"0");case"d":return String(d.$W);case"dd":return J(l.weekdaysMin,d.$W,H,2);case"ddd":return J(l.weekdaysShort,d.$W,H,3);case"dddd":return H[d.$W];case"H":return String(j);case"HH":return w.s(j,2,"0");case"h":return q(1);case"hh":return q(2);case"a":return tt(j,W,!0);case"A":return tt(j,W,!1);case"m":return String(W);case"mm":return w.s(W,2,"0");case"s":return String(d.$s);case"ss":return w.s(d.$s,2,"0");case"SSS":return w.s(d.$ms,3,"0");case"Z":return x}return null}(V)||x.replace(":","")})},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(u,d,l){var g,x=this,j=w.p(d),W=P(u),L=(W.utcOffset()-this.utcOffset())*n,H=this-W,N=function(){return w.m(x,W)};switch(j){case h:g=N()/12;break;case y:g=N();break;case R:g=N()/3;break;case c:g=(H-L)/6048e5;break;case v:g=(H-L)/864e5;break;case i:g=H/o;break;case s:g=H/n;break;case f:g=H/r;break;default:g=H}return l?g:w.a(g)},p.daysInMonth=function(){return this.endOf(y).$D},p.$locale=function(){return $[this.$L]},p.locale=function(u,d){if(!u)return this.$L;var l=this.clone(),g=k(u,d,!0);return g&&(l.$L=g),l},p.clone=function(){return w.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},m}(),_=Y.prototype;return P.prototype=_,[["$ms",a],["$s",f],["$m",s],["$H",i],["$W",v],["$M",y],["$y",h],["$D",E]].forEach(function(m){_[m[1]]=function(p){return this.$g(p,m[0],m[1])}}),P.extend=function(m,p){return m.$i||(m(p,Y,P),m.$i=!0),P},P.locale=k,P.isDayjs=B,P.unix=function(m){return P(1e3*m)},P.en=$[M],P.Ls=$,P.p={},P})})(xe);var ln=xe.exports;const vn=Te(ln);export{dn as M,vn as d};
