(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[364],{87851:function(e,a,t){"use strict";t.r(a),t.d(a,{HptoContainer:function(){return fe},VIEW_MAP:function(){return oe},default:function(){return ge}});var c=t(2398),r=t.n(c),s=t(27378),n=t.n(s),l=t(79308),i=t(60042),d=t.n(i),m="desktoproutes-homepage-takeover-ad-hptoComponent-parentContainer",u="desktoproutes-homepage-takeover-ad-hptoComponent-container",o=t(11661),f=t(44135),g=t(28482);const h=({children:e,fetchingState:a})=>{const t=(0,l.I0)(),c=(0,s.useRef)(null);(0,s.useEffect)((()=>(c.current&&t((0,o.az)(c.current)),()=>{t((0,o.MJ)())})),[t]),(0,s.useEffect)((()=>{a===g.Y.FETCHED&&t((0,o.Fw)())}),[a,t]);const r=(0,s.useCallback)((e=>{t((0,o.lT)(e.message))}),[t]);return n().createElement(f.Z,{onError:r},n().createElement("div",{className:d()(m,"contentSpacing")},n().createElement("div",{"data-testid":"test-htpo-ref",ref:c,className:u},e)))};var E="desktoproutes-homepage-takeover-ad-hptoNativeOriginal-container",p="desktoproutes-homepage-takeover-ad-hptoNativeOriginal-containerSlot",b="desktoproutes-homepage-takeover-ad-hptoNativeOriginal-containerSlotSponsored",v="desktoproutes-homepage-takeover-ad-hptoNativeOriginal-sponsorship",k="desktoproutes-homepage-takeover-ad-hptoNativeOriginal-slot",T="desktoproutes-homepage-takeover-ad-hptoNativeOriginal-image",y="desktoproutes-homepage-takeover-ad-hptoNativeOriginal-imageContainer",I="desktoproutes-homepage-takeover-ad-hptoNativeOriginal-sponsoredImage",C="desktoproutes-homepage-takeover-ad-hptoNativeOriginal-sponsoredLogo",N="desktoproutes-homepage-takeover-ad-hptoNativeOriginal-sponsoredText",V="desktoproutes-homepage-takeover-ad-hptoNativeOriginal-presentedBy",_="desktoproutes-homepage-takeover-ad-hptoNativeOriginal-entityType",A="desktoproutes-homepage-takeover-ad-hptoNativeOriginal-exclusive",L="desktoproutes-homepage-takeover-ad-hptoNativeOriginal-header",M="desktoproutes-homepage-takeover-ad-hptoNativeOriginal-description",S="desktoproutes-homepage-takeover-ad-hptoNativeOriginal-actionButtons",z="desktoproutes-homepage-takeover-ad-hptoNativeOriginal-moreButton",P="desktoproutes-homepage-takeover-ad-hptoNativeOriginal-background",w="desktoproutes-homepage-takeover-ad-hptoNativeOriginal-backgroundBlurred",F="desktoproutes-homepage-takeover-ad-hptoNativeOriginal-following",B=t(66917),O=t.n(B),H="desktoproutes-homepage-takeover-ad-floatingTagOrButton-sponsoredTag",U="desktoproutes-homepage-takeover-ad-floatingTagOrButton-hideButton",R=t(35181),Y=t(44621);const $=({isPremium:e})=>{const a=(0,l.I0)();return e?n().createElement("button",{className:U,onClick:()=>a((0,Y.xG)())},R.ag.get("ad-formats.hideAnnouncements")):n().createElement("span",{className:H},R.ag.get("ad-formats.sponsored"))};var x=t(65701),D=t(64954),W=t(18010),J=t(28979),K=t(20651),Z=t(88886),G=t(27272),q=t(52003),X=t(7164),j=t(16023),Q=t(75933),ee=t(33060),ae=t(18237),te=t(37585),ce=t(1324);const re=({playBtnUri:e,uri:a,uriType:t})=>{const c=(0,l.I0)();(0,s.useEffect)((()=>{c((e=>{switch(e){case O().Type.ALBUM:return J.TY;case O().Type.TRACK:return J.U0;case O().Type.ARTIST:return J.OI;case O().Type.EPISODE:case O().Type.SHOW:return J.PA;case O().Type.PLAYLIST:case O().Type.PLAYLIST_V2:return J.So;default:return e=>(0,o.lT)(`invalid button uri type ${e}`)}})(t)(a))}),[c,a,t]);const r=(0,K.cR)(e),i=(0,l.v9)((e=>{var t;const c=e.entities.collection.mapTrackSaved&&e.entities.collection.mapTrackSaved[a];return null!==(t=e.entities.follows[a]||c)&&void 0!==t&&t})),m=(0,s.useCallback)((()=>{c((0,x.nh)(e)),c((0,o.kh)("event_clicked","ne-play-button"))}),[c,e]),u=(0,s.useCallback)((()=>{const e=((e,a)=>{switch(e){case O().Type.ALBUM:return a?W.UC:W.Lw;case O().Type.TRACK:return a?W.T1:W.rl;case O().Type.ARTIST:return a?W.u$:W.hs;case O().Type.EPISODE:case O().Type.SHOW:return a?W.Bn:W.PJ;case O().Type.PLAYLIST:case O().Type.PLAYLIST_V2:return a?W.PZ:W.Uz;default:return e=>(0,o.lT)(`invalid button uri type ${e}`)}})(t,i);c(e(a)),c((0,o.kh)("event_clicked","ne-save-button"))}),[t,i,c,a]),f=(0,s.useCallback)((()=>{c((0,o.kh)("event_clicked","ne-more-button"))}),[c]);let g=null;return g=O().isAlbum(a)?n().createElement(q.Y,{uri:a}):O().isArtist(a)?n().createElement(X.m,{uri:a}):O().isPlaylistV1OrV2(a)?n().createElement(j.X,{uri:a}):O().isShow(a)?n().createElement(Q.M,{uri:a}):O().isTrack(a)?n().createElement(ee.$,{uri:a}):O().isEpisode(a)?n().createElement(ae.k,{uri:a}):O().isLocalTrack(a)?n().createElement(te.N,{uri:a}):n().createElement(ce.o,{uri:a}),n().createElement("div",{className:S,"data-testid":"hpto-native-buttons"},n().createElement(D.z,{version:"primary",onClick:m},r?R.ag.get("pause"):R.ag.get("play")),n().createElement(D.z,{version:"outlined",className:d()({[F]:i}),onClick:u},((e,a)=>{switch(e){case O().Type.ALBUM:case O().Type.TRACK:case O().Type.EPISODE:case O().Type.PLAYLIST:return a?R.ag.get("ad-formats.remove"):R.ag.get("ad-formats.save");default:return a?R.ag.get("unfollow"):R.ag.get("follow")}})(t,i)),n().createElement(Z.y,{menu:g},n().createElement(G.z,{onClick:f,size:32,className:z})))},se=({className:e})=>n().createElement("svg",{className:e,xmlns:"http://www.w3.org/2000/svg",width:"150",height:"20",viewBox:"0 0 147 20"},n().createElement("g",{fill:"none",fillRule:"evenodd",stroke:"none",strokeWidth:"1"},n().createElement("path",{fill:"#FFF",d:"M70 5H71V16H70z"}),n().createElement("g",null,n().createElement("path",{fill:"#84BD00",d:"M10.001.045C4.489.045.02 4.49.02 9.975c0 5.486 4.469 9.932 9.981 9.932 5.513 0 9.981-4.446 9.981-9.931 0-5.485-4.468-9.931-9.981-9.931"}),n().createElement("path",{fill:"#000",d:"M15.544 10.6C12.463 8.717 7.956 8.186 4.33 9.28a.775.775 0 00-.519.967.78.78 0 00.972.515c3.173-.958 7.263-.483 9.945 1.158a.78.78 0 001.07-.255.772.772 0 00-.255-1.065"}),n().createElement("path",{fill:"#000",d:"M16.858 7.251c-3.704-2.187-9.565-2.393-13.09-1.328A.928.928 0 104.31 7.7c3.07-.927 8.378-.752 11.595 1.149a.936.936 0 001.28-.325.926.926 0 00-.327-1.273"}),n().createElement("path",{fill:"#000",d:"M14.372 13.518c-2.63-1.6-5.892-1.972-9.694-1.107a.618.618 0 10.277 1.206c3.474-.79 6.424-.467 8.768.958a.624.624 0 00.855-.206.617.617 0 00-.206-.851"})),n().createElement("g",{fill:"#FFF",transform:"translate(25 5)"},n().createElement("path",{d:"M3.806 4.194C2.23 3.822 1.95 3.56 1.95 3.013c0-.518.493-.867 1.226-.867.711 0 1.416.265 2.156.81a.104.104 0 00.146-.023l.77-1.073a.102.102 0 00-.02-.139C5.347 1.023 4.357.684 3.199.684 1.496.684.307 1.694.307 3.14c0 1.55 1.026 2.099 2.799 2.522 1.508.344 1.763.632 1.763 1.147 0 .57-.515.924-1.343.924-.92 0-1.672-.306-2.511-1.025a.109.109 0 00-.076-.025.103.103 0 00-.071.036L.005 7.734a.1.1 0 00.01.142 5.18 5.18 0 003.476 1.318c1.834 0 3.02-.991 3.02-2.525 0-1.297-.784-2.014-2.705-2.475"}),n().createElement("path",{d:"M10.661 2.656c-.795 0-1.447.31-1.985.944v-.714a.103.103 0 00-.103-.102H7.16a.103.103 0 00-.103.102v7.935c0 .057.046.102.103.102h1.412a.103.103 0 00.103-.102V8.316c.538.597 1.19.889 1.985.889 1.478 0 2.973-1.125 2.973-3.274 0-2.15-1.495-3.275-2.973-3.275zm1.332 3.275c0 1.094-.682 1.858-1.659 1.858-.965 0-1.693-.798-1.693-1.858s.728-1.858 1.693-1.858c.961 0 1.659.78 1.659 1.858z"}),n().createElement("path",{d:"M17.468 2.656c-1.903 0-3.393 1.449-3.393 3.298 0 1.83 1.48 3.263 3.37 3.263 1.91 0 3.405-1.444 3.405-3.286 0-1.836-1.485-3.275-3.382-3.275zm0 5.145c-1.012 0-1.775-.804-1.775-1.87 0-1.07.737-1.847 1.752-1.847 1.019 0 1.787.804 1.787 1.87 0 1.07-.742 1.847-1.764 1.847z"}),n().createElement("path",{d:"M24.913 2.784H23.36v-1.57a.103.103 0 00-.104-.103h-1.411a.103.103 0 00-.104.102v1.57h-.679a.103.103 0 00-.102.103v1.2c0 .056.046.102.102.102h.68v3.104c0 1.254.63 1.89 1.876 1.89.507 0 .927-.103 1.323-.325a.102.102 0 00.052-.089V7.626a.102.102 0 00-.049-.087.104.104 0 00-.1-.004 1.797 1.797 0 01-.83.197c-.452 0-.654-.203-.654-.659V4.188h1.553a.103.103 0 00.103-.102v-1.2a.103.103 0 00-.103-.102"}),n().createElement("path",{d:"M30.326 2.79v-.193c0-.567.22-.82.714-.82.294 0 .53.057.795.145.033.01.067.005.093-.014a.101.101 0 00.043-.083V.648a.102.102 0 00-.073-.098 3.916 3.916 0 00-1.173-.166c-1.305 0-1.994.726-1.994 2.098v.296h-.678a.103.103 0 00-.104.102v1.206c0 .056.047.102.104.102h.678v4.788c0 .056.046.102.103.102h1.412a.103.103 0 00.103-.102V4.188h1.319l2.019 4.787c-.23.502-.455.603-.762.603-.25 0-.511-.074-.779-.219a.107.107 0 00-.082-.007.104.104 0 00-.061.055l-.479 1.038a.1.1 0 00.045.132 3 3 0 001.507.381c1.043 0 1.62-.48 2.127-1.771l2.45-6.258a.1.1 0 00-.011-.095.103.103 0 00-.085-.044h-1.47a.104.104 0 00-.098.068L34.483 7.11l-1.649-4.254a.103.103 0 00-.096-.066h-2.412"}),n().createElement("path",{d:"M27.188 2.784h-1.412a.103.103 0 00-.103.102v6.09c0 .056.046.102.103.102h1.412a.103.103 0 00.103-.102v-6.09a.103.103 0 00-.103-.102"}),n().createElement("path",{d:"M26.49.011c-.56 0-1.014.448-1.014 1 0 .554.454 1.002 1.013 1.002.56 0 1.013-.448 1.013-1.001 0-.553-.454-1-1.013-1"}),n().createElement("path",{d:"M38.858 4.742a.984.984 0 01-.994-.983c0-.538.44-.987 1-.987a.984.984 0 11-.006 1.97zm.005-1.872c-.509 0-.894.4-.894.89 0 .489.382.884.889.884.509 0 .894-.4.894-.89a.876.876 0 00-.889-.884zm.22.985l.281.389h-.237l-.253-.357h-.217v.357h-.198V3.213h.465c.242 0 .401.122.401.329 0 .169-.098.272-.242.313zm-.167-.465h-.26v.326h.26c.129 0 .206-.063.206-.163 0-.107-.077-.163-.206-.163z"})),n().createElement("path",{fill:"#FFF",d:"M79.9 13.12c1.8 0 2.37-1.03 2.37-1.89 0-2.49-4-1.55-4-3.26 0-.72.67-1.23 1.56-1.23.75 0 1.43.26 1.91.84l.38-.42c-.52-.59-1.26-.94-2.26-.94-1.21 0-2.19.69-2.19 1.78 0 2.33 4 1.31 4 3.27 0 .57-.39 1.33-1.76 1.33-.95 0-1.65-.47-2.08-.97l-.37.43c.51.62 1.34 1.06 2.44 1.06zm6.61-.12v-2.77h1.93c1.27 0 2.01-.9 2.01-1.95 0-1.05-.73-1.95-2.01-1.95h-2.5V13h.57zm1.87-3.29h-1.87V6.85h1.87c.88 0 1.47.59 1.47 1.43s-.59 1.43-1.47 1.43zm8.56 3.41c1.95 0 3.24-1.5 3.24-3.45 0-1.95-1.29-3.45-3.24-3.45-1.96 0-3.24 1.5-3.24 3.45 0 1.95 1.28 3.45 3.24 3.45zm0-.52c-1.62 0-2.64-1.25-2.64-2.93 0-1.7 1.02-2.93 2.64-2.93 1.6 0 2.64 1.23 2.64 2.93 0 1.68-1.04 2.93-2.64 2.93zm8.94.4V6.85h2.18v-.52h-4.94v.52h2.18V13h.58zm9.46 0v-.52h-3.23V6.33h-.57V13h3.8zm4.11 0V6.33h-.57V13h.57zm7.09.13c1.05 0 1.94-.45 2.53-1.11V9.69h-3.09v.51h2.52v1.6c-.37.37-1.07.81-1.96.81-1.57 0-2.78-1.22-2.78-2.94 0-1.74 1.21-2.93 2.78-2.93.85 0 1.61.37 2.08.93l.43-.31c-.61-.7-1.41-1.14-2.51-1.14-1.87 0-3.38 1.39-3.38 3.45 0 2.06 1.51 3.46 3.38 3.46zM138.2 13V6.33h-.58v2.98h-4.23V6.33h-.57V13h.57V9.83h4.23V13h.58zm6.23 0V6.85h2.18v-.52h-4.94v.52h2.18V13h.58z"}))),ne=(e,a)=>"spotlight"===e?n().createElement(se,{className:_}):"exclusive"===e?n().createElement("p",{dir:"auto",className:d()(_,A)},R.ag.get("ad-formats.exclusive")):n().createElement("p",{dir:"auto",className:_},(e=>{switch(e){case O().Type.ALBUM:return R.ag.get("card.tag.album");case O().Type.TRACK:return R.ag.get("card.tag.track");case O().Type.ARTIST:return R.ag.get("card.tag.artist");case O().Type.EPISODE:return R.ag.get("card.tag.episode");case O().Type.SHOW:return R.ag.get("card.tag.show");case O().Type.PLAYLIST:case O().Type.PLAYLIST_V2:return R.ag.get("card.tag.playlist");default:return""}})(a));var le="desktoproutes-homepage-takeover-ad-hptoImage-slot",ie="desktoproutes-homepage-takeover-ad-hptoImage-image";var de="desktoproutes-homepage-takeover-ad-hptoHtml-slot",me="desktoproutes-homepage-takeover-ad-hptoHtml-adIframe";var ue=t(67455);const oe={[g.O.NATIVE]:({name:e,uri:a,playBtnUri:t,description:c,smallImage:r,isSponsored:s,backgroundImage:i,sponsoredLogo:m,uriType:u,logoBlurb:f,isPremium:g,artists:h,badgeType:_})=>{const A=(0,l.I0)(),S=h.length>0,z=!g&&s;return n().createElement(n().Fragment,null,n().createElement("div",{className:d()(E,{[b]:s})},s&&n().createElement("div",{className:v},n().createElement("div",null,n().createElement("p",{className:V},R.ag.get("ad-formats.presentedBy")),n().createElement("img",{draggable:!1,className:C,src:m,alt:""}),n().createElement("p",{className:N},f))),n().createElement("div",{className:p},n().createElement("a",{"data-testid":"ne-image-link-test",onClick:()=>{A((0,o.kh)("event_clicked","ne-image-link"))},className:y,href:a},n().createElement("img",{className:d()(T,{[I]:s}),alt:"",src:r})),n().createElement("div",{className:k},ne(_,u),n().createElement("a",{"data-testid":"ne-name-link-test",onClick:()=>{A((0,o.kh)("event_clicked","ne-name-link"))},href:a,dir:"auto",className:L},e),S&&n().createElement("div",null,h.map(((e,t)=>n().createElement("span",{key:`${a}-${t}`},t?R.ag.getSeparator():"",n().createElement("a",{"data-testid":`ne-attrib-link-${t}-test`,onClick:()=>{A((0,o.kh)("event_clicked","ne-attrib-link"))},draggable:!1,href:e.uri},e.name))))),n().createElement("span",{dir:"auto",className:M},c),n().createElement(re,{playBtnUri:t,uri:a,uriType:u})))),n().createElement("div",{draggable:!1,className:d()(P,{[w]:!s}),style:{backgroundImage:`url(${i})`}}),!z&&n().createElement($,{isPremium:g}))},[g.O.IMAGE]:({isPremium:e,backgroundColor:a,backgroundImage:t,clickThroughUrl:c})=>{(0,s.useEffect)((()=>{if(!t)throw Error("[Image HPTO] Missing background image")}),[t]);const r=(0,l.I0)();return n().createElement(n().Fragment,null,n().createElement("a",{draggable:!1,onClick:()=>{r((0,o.kh)("event_clicked"))},className:le,style:{backgroundColor:a},href:c},n().createElement("img",{draggable:!1,className:ie,alt:"",src:t})),n().createElement($,{isPremium:e}))},[g.O.HTML]:({isPremium:e,backgroundColor:a,backgroundImage:t,backgroundUrl:c,loaderFrame:r})=>{const i=(0,s.useRef)(null),[d,m]=(0,s.useState)(!1),u=(0,l.I0)();return(0,s.useEffect)((()=>{const e=()=>{m(!0)};return i&&i.current&&(r.style.display="",r.className=me,r.setAttribute("aria-hidden","true"),r.addEventListener("load",e),i.current.innerHTML="",i.current.insertBefore(r,i.current.firstChild)),()=>{r.removeEventListener("load",e)}}),[i,r]),n().createElement(n().Fragment,null,n().createElement("a",{draggable:!1,href:c,ref:i,className:de,onClick:()=>{c&&u((0,o.kh)("event_clicked"))},style:{backgroundColor:a,opacity:d?1:0,backgroundImage:d?`url(${t})`:"none"}}),n().createElement($,{isPremium:e}))}},fe=()=>{const e=(0,l.I0)(),a=(0,l.v9)(ue.LA),t=(0,l.v9)(ue.sp),c=(0,l.v9)(ue.Jk),i=(0,l.v9)(ue.F7);if((0,s.useEffect)((()=>{e((0,o.fm)())}),[e]),!i||null===a)return null;const d=oe[a.bannerMode];return n().createElement(h,{fetchingState:t},n().createElement(d,r()({},a,{isPremium:c})))};var ge=fe},1324:function(e,a,t){"use strict";t.d(a,{o:function(){return m}});var c=t(27378),r=t.n(c),s=t(34761),n=t(50878),l=t(13479),i=t(19421),d=t(35181);const m=r().memo((({uri:e})=>r().createElement(n.ZP,{value:"generic"},r().createElement(s.v,null,r().createElement(i.q,{divider:"before"},r().createElement(l.Jx,{uri:e,displayText:d.ag.get("context-menu.copy-generic-link")}),r().createElement(l.W2,{uri:e}))))))}}]);
//# sourceMappingURL=xpui-desktop-routes-homepage-takeover-ad.js.map