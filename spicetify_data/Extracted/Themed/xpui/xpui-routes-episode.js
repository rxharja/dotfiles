(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[472],{99576:function(e,t,a){"use strict";a.r(t),a.d(t,{Episode:function(){return pe},MUSIC_PLUS_TALK_TRIGGER_ID:function(){return me},default:function(){return Ee}});var n=a(27378),l=a.n(n),i=a(79308),s=a(48529),r=a(35181),o=a(66917),c=a.n(o),d=a(28979),u=a(7444),m=a(46471),p=a(65701),E=a(7487),g=a(34834),y="episode-episode-episode",f="episode-episode-contentDescription",v="episode-episode-contentDescriptionTitle",k=(a(23615),a(60042)),b=a.n(k),L=a(29510),h="episode-episodesShelf-EpisodesShelf",_="episode-episodesShelf-Title",I="episode-episodesShelf-EpisodesList",P=a(9807),S=a(14298);var U=({title:e,episodes:t,className:a})=>l().createElement("div",{className:b()(h,a)},l().createElement(P.Dy,{as:"h2",variant:P.Dy.canon,color:S.ixZ,className:_},e),l().createElement("div",{className:I},t.map((e=>l().createElement(L.B,{key:e.id,entity:e}))))),C=a(93261),M=a(88319),A=a(82907),R=a(32311),w=a(76654),N=a(37539),x="episode-episodeEntityHeader-container",B="episode-episodeEntityHeader-smallHeader",D=a(75533),Z=a(72136),z=a(21311),T=a(99209),O=a(26380),$=a(32049),G=a(34159),W=a(33482),q=a(48936);const F=e=>{const t=c().from(e);return`/show/${c().hexToId((null==t?void 0:t.id)||"")}`},J=({uri:e,backgroundColor:t,backgroundImages:a,size:i,data:s,playButtonWrapper:r=null,contextMenuWrapper:o=q.j,onPlayClick:c,isPlaying:d,isLocked:u=!1,isPlayDisabled:m=!1,playButtonRef:p,actionBarHeader:E,actionBarButtons:g})=>{const y=(0,n.useRef)(null),{imageUrl:f}=(0,R.f)(a,y),{title:v="",subtitle:k="",subtitleLinkURI:L,type:h,displayType:_,images:I}=s;return l().createElement(l().Fragment,null,l().createElement("div",{"data-testid":"container",ref:y,style:{backgroundColor:t},className:b()(N.Z.container,x,N.Z.overlay,{[N.Z.withBackgroundImage]:f,[N.Z.smallHeader]:i===W.f.SMALL,[B]:i===W.f.SMALL})},l().createElement(T.Du,null,l().createElement(G.JM,{size:G.qE.sm,onClick:c,isPlaying:d,disabled:m,locked:u}),l().createElement(T.yZ,{text:v})),f&&l().createElement(l().Fragment,null,l().createElement("div",{"data-testid":"background-image",className:b()(N.Z.background,N.Z.gradient),style:{backgroundImage:`url(${f})`}}),l().createElement("div",{className:b()(N.Z.background,N.Z.overlay)})),l().createElement(o,{uri:e,contextUri:e},l().createElement(Z.O,{title:v,className:N.Z.image,size:i===W.f.SMALL?z.m$.SIZE_56:z.m$.SIZE_200,type:h,images:I,shape:Z.K.ROUNDED_CORNERS})),l().createElement(D.sP,null,i!==W.f.SMALL&&l().createElement(P.Dy.p,{variant:P.$e.minuetBold},_),l().createElement(o,{uri:e,contextUri:e},l().createElement(D.xd,{size:i===W.f.SMALL?$.Jj.SMALL:$.Jj.LARGE},v)),l().createElement(D.dy,{small:i===W.f.SMALL,large:i===W.f.LARGE},L&&l().createElement(o,{uri:L,contextUri:e},l().createElement(w.rU,{to:F(L)},k))))),l().createElement(O.o,{backgroundColor:t,size:i===W.f.SMALL?O.m.SMALL:O.m.LARGE,playButton:i===W.f.MOBILE?null:l().createElement("div",{className:N.Z.stickyPlayButton,ref:p},r?r(l().createElement(G.JM,{size:G.qE.lg,onClick:c,isPlaying:d,disabled:m,locked:u})):l().createElement(G.JM,{size:G.qE.lg,onClick:c,isPlaying:d,disabled:m,locked:u})),header:E,secondaryActionButtons:g}))};var H=a(64619),j=a(57553),K=a(404),X=a(28234),Y=a(20651),Q=a(88886),V=a(18237),ee=a(27272),te=a(39536),ae=a(12275),ne=a(13564),le=a(21723),ie=a(91486),se=a(54798),re=a(17922),oe=a(47574),ce=a(54220),de=a(25227);const ue=({children:e,uri:t,contextUri:a})=>l().createElement(ae._,{menu:l().createElement(V.k,{uri:t,contextUri:a})},e),me="activation-trigger-mme",pe=e=>{var t,a,o,k,b,L,h,_;const{uri:I}=e,S=(0,s.TH)(),R=(0,i.I0)(),w=(0,M.o)(),N=(0,oe.W6)(se.Cz),x=(0,i.v9)((e=>e.entities.tracks[I])),[B,D]=(0,n.useState)((null==x||null===(t=x.resume_point)||void 0===t?void 0:t.fully_played)||!1),Z=(0,i.v9)((e=>{var t,a;return null===(t=e.entities.similarEpisodes)||void 0===t||null===(a=t[I])||void 0===a?void 0:a.map((t=>e.entities.tracks[t]))})),z=(0,i.v9)(A.dO),T=(0,i.v9)(Y.fL),O=(0,i.v9)(Y.Ys)===I,$=z.isPlaying&&z.trackURI===I,G=null==x||null===(a=x.show)||void 0===a?void 0:a.uri,q=null==x?void 0:x.episodeType,F={displayType:"EPISODE"===(null==x?void 0:x.episodeType)?r.ag.get("type.showEpisode"):r.ag.get("type.podcastEpisode"),title:(null==x?void 0:x.name)||"",subtitle:null==x||null===(o=x.show)||void 0===o?void 0:o.name,subtitleLinkURI:null==x||null===(k=x.show)||void 0===k?void 0:k.uri,images:(null==x?void 0:x.images)||[],type:H.p.EPISODE},ae=null==x||null===(b=x.images)||void 0===b||null===(L=b[0])||void 0===L?void 0:L.url,pe=(0,te.Z)(ae||null);(0,n.useEffect)((()=>{if(!x)return void R((0,d.N5)(I));const{name:e,show:t}=x;R((0,d.y7)(I)),R((0,d.PA)(G)),R((0,u.Dk)(r.ag.get("podcasts.episode.seo.title",{name:e,show:(null==t?void 0:t.name)||""})))}),[R,x,I,G]);const Ee=null===(h=(0,i.oR)().getState().platform)||void 0===h?void 0:h.isBrowser,ge=!(null!=x&&x.is_playable)&&(null==x?void 0:x.is_playable_reason)===K.Ku.PaymentRequired,ye=(0,n.useCallback)(((e,t=!0)=>{if(ge)return;const a=parseInt(e,10)||0;let n="play";!$||0!==a&&t||(n="pause"),w({intent:n,targetUri:I,type:"click",itemIdSuffix:a>0?"podcast-description-timestamp":"button"}),q===K.Wf.Episode&&Ee?m.y.set((()=>({triggerId:me,triggerAction:null}))):R(O&&!t?(0,p.Xh)():(0,p.mU)(I,a))}),[ge,$,w,I,q,Ee,O,R]),fe=(0,n.useCallback)((()=>{w({intent:"expand-description",type:"click"})}),[w]),ve=(0,n.useCallback)((e=>{const t=l().createElement(de.l,{enabled:ge},e);return Ee?l().createElement(X.c,{id:me,targetURI:c().from(I)},t):t}),[ge,Ee,I]),ke=(null==x?void 0:x.description)||N&&(null==x?void 0:x.htmlDescription),be=!ge&&!(null!=x&&x.is_playable);return(0,n.useEffect)((()=>{if(x){const e=new URLSearchParams(S.search);if(e.has("t")){const t=e.get("t")||"0",a=1e3*parseInt(t,10);a<=x.duration_ms&&ye(a)}}}),[x]),x?l().createElement("section",{"data-testid":"episode",className:y},l().createElement(J,{uri:x.uri,backgroundColor:pe,size:W.f.LARGE,data:F,onPlayClick:()=>{var e;ye((null==x||null===(e=x.resume_point)||void 0===e?void 0:e.resume_position_ms)||0,!1)},isPlaying:$,isPlayDisabled:be,isLocked:ge,playButtonWrapper:ve,contextMenuWrapper:ue,actionBarHeader:l().createElement(C.E,{size:C.$.LARGE,fullyPlayed:B,durationMs:x.duration_ms,releaseDate:x.release_date,resumePositionMs:(null==x||null===(_=x.resume_point)||void 0===_?void 0:_.resume_position_ms)||0,isPlaying:$,position:O?T:void 0}),actionBarButtons:l().createElement(l().Fragment,null,!ge&&l().createElement(g.p,{uri:x.uri,showUri:G}),l().createElement(re.F,{property:se.eh,renderNewExperience:()=>l().createElement(le.w,{uri:x.uri,size:ie.q.md})}),l().createElement(Q.y,{menu:l().createElement(V.k,{uri:I,sharingInfo:x.sharingInfo,showUri:G,contextUri:I,isPlayed:B,onMarkAsPlayed:D})},l().createElement(ee.z,null)))}),l().createElement("div",{className:"contentSpacing"},ke&&l().createElement(l().Fragment,null,l().createElement(P.Dy,{as:"h2",variant:P.$e.canon,color:"white",className:v},r.ag.get("episode.description-title")),l().createElement(j.o,{className:f,onTimeStampClick:ye,maxLines:4,onExpanded:fe,content:(x.description||"").trim(),htmlContent:N?x.htmlDescription:void 0,LinkComponent:ce.Z,enableTimestamps:x.is_playable})),l().createElement(ne.N,e),(null==Z?void 0:Z.length)>0&&l().createElement(U,{title:r.ag.get("mwp.entity.might.like"),episodes:Z}))):l().createElement(E.h,{errorMessage:r.ag.get("error.not_found.title.podcast")})};var Ee=l().memo((()=>{const{episodeId:e}=(0,s.UO)(),t=`spotify:episode:${e}`;return l().createElement(n.Suspense,{fallback:null},l().createElement(pe,{uri:t}))}))}}]);
//# sourceMappingURL=xpui-routes-episode.js.map