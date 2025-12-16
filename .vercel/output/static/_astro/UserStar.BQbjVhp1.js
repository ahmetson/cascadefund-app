import{j as t}from"./jsx-runtime.D_zvdyIk.js";import{r as p,R as ha}from"./index.DxhH1ShK.js";import{C as ea}from"./Link.DQs8_5h1.js";import{C as F}from"./Tooltip.X-wb9Q3Q.js";import{N as y}from"./NumberFlow-client-48rw3j0J.DO-Ted3l.js";import{g as N}from"./index.C9GdNTjf.js";const ua={USER_STAR_CREATED:"user-star-created",USER_STAR_MOVED:"user-star-moved"},Y="polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",Ra=({x:G,y:U,userId:sa,src:S,alt:k,className:ra,imgClassName:A,uri:ia="/user",nickname:b,email:oa,sunshines:P,stars:x,role:z,funded:B,received:X,issuesClosed:L,issuesActive:V,leaderboardPosition:j,walletAddress:fa,githubUrl:ba,linkedinUrl:va,tags:q=["Maintainer","Django","Solidity","p2p"],animationDelay:H=0,draggable:l=!1,disableTooltip:na=!1,disableEllipses:c=!1})=>{const R="https://api.backdropbuild.com/storage/v1/object/public/avatars/9nFM8HasgS.jpeg",C="Avatar",K=`${ia}?email=${oa}`,[h,Q]=p.useState(!1),[W,J]=p.useState({x:G,y:U}),D=p.useRef({x:0,y:0}),Z=p.useRef(null),{starLevel:ja,isMaintainer:o,isFirstPlace:I,isSecondPlace:aa,isThirdPlace:ta,opacity:w,blurAmount:M,size:u}=p.useMemo(()=>{const a=x!==void 0?x>=1&&x<=10?Math.round(x):Math.max(1,Math.min(10,Math.round(x/5*10)||1)):1,s=z==="Maintainer",r=j===1,$=j===2,n=j===3,i=.35+(a-1)/9*.65,f=s||r?1:i,d=12-(a-1)/9*12,g=s||r?0:d,m=32+(a-1)/9*16;return{starLevel:a,isMaintainer:s,isFirstPlace:r,isSecondPlace:$,isThirdPlace:n,opacity:f,blurAmount:g,size:s?72:r?64:m}},[x,z,j]),{glowGradient1:la,glowGradient2:ca,glowGradient3:da}=p.useMemo(()=>aa?{glowGradient1:"radial-gradient(circle, rgba(192, 192, 192, 0.9) 0%, rgba(230, 230, 230, 0.5) 50%, transparent 100%)",glowGradient2:"radial-gradient(circle, rgba(220, 220, 220, 0.7) 0%, rgba(192, 192, 192, 0.4) 50%, transparent 100%)",glowGradient3:"radial-gradient(circle, rgba(200, 200, 200, 0.6) 0%, rgba(240, 240, 240, 0.3) 50%, transparent 100%)"}:ta?{glowGradient1:"radial-gradient(circle, rgba(205, 127, 50, 0.9) 0%, rgba(255, 200, 100, 0.5) 50%, transparent 100%)",glowGradient2:"radial-gradient(circle, rgba(255, 180, 80, 0.7) 0%, rgba(205, 127, 50, 0.4) 50%, transparent 100%)",glowGradient3:"radial-gradient(circle, rgba(220, 150, 70, 0.6) 0%, rgba(255, 220, 150, 0.3) 50%, transparent 100%)"}:{glowGradient1:"radial-gradient(circle, rgba(255, 215, 0, 0.8) 0%, rgba(255, 255, 0, 0.4) 50%, transparent 100%)",glowGradient2:"radial-gradient(circle, rgba(255, 255, 100, 0.6) 0%, rgba(255, 215, 0, 0.3) 50%, transparent 100%)",glowGradient3:"radial-gradient(circle, rgba(255, 200, 0, 0.5) 0%, rgba(255, 255, 150, 0.2) 50%, transparent 100%)"},[aa,ta]),ma=p.useCallback(a=>{if(!l)return;Q(!0);const s=Z.current?.getBoundingClientRect();s&&(D.current={x:a.clientX-s.left,y:a.clientY-s.top}),a.dataTransfer.effectAllowed="move",a.dataTransfer.setData("text/plain","")},[l]),pa=p.useCallback(a=>{if(!l||!h)return;a.preventDefault();const s=document.querySelector("#galaxy-space");if(!s)return;const r=s.getBoundingClientRect(),n=window.getComputedStyle(s).transform;let i=1;if(n&&n!=="none"){const g=n.match(/matrix\(([^)]+)\)/);if(g){const m=g[1].split(",");i=parseFloat(m[0])||1}}const f=(a.clientX-r.left-D.current.x)/i,d=(a.clientY-r.top-D.current.y)/i;J({x:f,y:d})},[l,h]),ga=p.useCallback(a=>{if(!l)return;Q(!1);const s=document.querySelector("#galaxy-space");if(!s)return;const r=s.getBoundingClientRect(),n=window.getComputedStyle(s).transform;let i=1;if(n&&n!=="none"){const m=n.match(/matrix\(([^)]+)\)/);if(m){const _=m[1].split(",");i=parseFloat(_[0])||1}}const f=(a.clientX-r.left-D.current.x)/i,d=(a.clientY-r.top-D.current.y)/i,g=new CustomEvent(ua.USER_STAR_MOVED,{detail:{userId:sa,nickname:b,x:f,y:d}});window.dispatchEvent(g),J({x:f,y:d})},[l,b]);ha.useEffect(()=>{h||J({x:G,y:U})},[G,U,h]);const xa=l?t.jsx("div",{className:"text-sm",children:t.jsx("p",{className:"font-medium",children:"Drag and drop around the page to move the location"})}):t.jsxs("div",{className:"text-sm space-y-3",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("div",{className:"w-12 h-12 flex-shrink-0",style:{clipPath:Y},children:t.jsx("img",{src:S||R,alt:k||C,className:"w-full h-full object-cover",style:{clipPath:Y}})}),t.jsxs("div",{children:[t.jsx("div",{className:"font-medium",children:b}),j!==void 0&&t.jsxs("div",{className:"text-xs text-slate-400 dark:text-slate-100 mt-0.5",children:["Star Order: #",j]}),(x!==void 0||P!==void 0)&&t.jsxs("div",{className:"flex items-center gap-3 mt-2 pt-2 border-t border-slate-700",children:[x!==void 0&&t.jsxs("div",{className:"flex items-center gap-1",children:[N({iconType:"star",className:"w-3 h-3 text-yellow-500",fill:"currentColor"}),t.jsx(y,{value:x,locales:"en-US",format:{style:"decimal",maximumFractionDigits:2},className:"text-xs font-medium"})]}),P!==void 0&&t.jsxs("div",{className:"flex items-center gap-1",children:[N({iconType:"sunshine",className:"w-3 h-3 text-orange-500"}),t.jsx(y,{value:P,locales:"en-US",format:{style:"decimal",maximumFractionDigits:0},className:"text-xs font-medium"})]})]})]})]}),(B!==void 0||X!==void 0||L!==void 0||V!==void 0)&&t.jsxs("div",{className:"space-y-2 pt-2 border-t border-slate-700",children:[z&&t.jsxs("div",{className:"flex items-center justify-between gap-4",children:[t.jsx("span",{className:"text-xs text-slate-400 dark:text-slate-500",children:"Role:"}),t.jsx("span",{className:"text-xs font-medium",children:z})]}),B!==void 0&&t.jsxs("div",{className:"flex items-center justify-between gap-4",children:[t.jsx("span",{className:"text-xs text-slate-400 dark:text-slate-500",children:"Funded:"}),t.jsx(y,{value:B,locales:"en-US",format:{style:"decimal",maximumFractionDigits:0},className:"text-xs font-medium"})]}),X!==void 0&&t.jsxs("div",{className:"flex items-center justify-between gap-4",children:[t.jsx("span",{className:"text-xs text-slate-400 dark:text-slate-500",children:"Received:"}),t.jsx(y,{value:X,locales:"en-US",format:{style:"decimal",maximumFractionDigits:0},className:"text-xs font-medium"})]}),L!==void 0&&t.jsxs("div",{className:"flex items-center justify-between gap-4",children:[t.jsx("span",{className:"text-xs text-slate-400 dark:text-slate-500",children:"Issues Closed:"}),t.jsx(y,{value:L,locales:"en-US",format:{style:"decimal",maximumFractionDigits:0},className:"text-xs font-medium"})]}),V!==void 0&&t.jsxs("div",{className:"flex items-center justify-between gap-4",children:[t.jsx("span",{className:"text-xs text-slate-400 dark:text-slate-500",children:"Issues Active:"}),t.jsx(y,{value:V,locales:"en-US",format:{style:"decimal",maximumFractionDigits:0},className:"text-xs font-medium"})]})]})]}),e=p.useMemo(()=>`user-star-${b.replace(/\s+/g,"-").toLowerCase()}`,[b]),{ellipses:O,tagsEllipseRadius:v,tagsEllipseRotationDuration:$a}=p.useMemo(()=>{const a=P||0,s=Math.floor(a/100),r=a%100,$=Array.from({length:s},(g,m)=>({id:m,radius:u/2+15+m*20,rotationDuration:20+m*5,isPartial:!1,partialOpacity:1})),n=r>0?Math.min(1,r/100*2):0,i=r>0?[...$,{id:s,radius:u/2+15+s*20,rotationDuration:20+s*5,isPartial:!0,partialOpacity:n}]:$,d=(i.length>0?Math.max(...i.map(g=>g.radius)):u/2)+25;return{ellipses:i,tagsEllipseRadius:d,tagsEllipseRotationDuration:30}},[P,u]),{validTags:E,badgePositions:T}=p.useMemo(()=>{const a=["rgba(255, 183, 127, 0.1)","rgba(255, 159, 100, 0.1)","rgba(255, 182, 193, 0.1)","rgba(255, 160, 180, 0.1)","rgba(245, 222, 179, 0.1)","rgba(238, 203, 173, 0.1)","rgba(255, 127, 80, 0.1)","rgba(250, 128, 114, 0.1)","rgba(255, 218, 185, 0.1)","rgba(255, 192, 203, 0.1)"],s=q?q.slice(0,5):[],r=s.map(($,n)=>{const i=$.split("").reduce((m,_)=>m+_.charCodeAt(0),0),d=(i%360+n*72)%360,g=i%a.length;return{tag:$,angle:d,x:v*Math.cos((d-90)*(Math.PI/180)),y:v*Math.sin((d-90)*(Math.PI/180)),rotationSpeed:15+n*5,color:a[g]}});return{validTags:s,badgePositions:r}},[q,v]);return t.jsxs(t.Fragment,{children:[t.jsx("style",{children:`
        @keyframes starPulse-${e} {
          0%, 100% {
            opacity: ${w};
            transform: scale(1);
          }
          50% {
            opacity: ${Math.min(1,w+.2)};
            transform: scale(${o?"1.15":"1.1"});
          }
        }
        
        ${o?`
        @keyframes maintainerGlow-${e} {
          0%, 100% {
            filter: blur(${M}px) drop-shadow(0 0 20px rgba(255, 215, 0, 0.8)) drop-shadow(0 0 40px rgba(255, 255, 0, 0.6));
          }
          50% {
            filter: blur(${M}px) drop-shadow(0 0 30px rgba(255, 215, 0, 1)) drop-shadow(0 0 60px rgba(255, 255, 0, 0.9));
          }
        }
        `:""}
        
        @keyframes starRotate-${e} {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .star-glow-container-${e} {
          position: relative;
          width: ${u}px;
          height: ${u}px;
          display: flex;
          align-items: center;
          justify-content: center;
          ${o?"z-index: 100;":I?"z-index: 50;":""}
        }
        
        .star-glow-${e} {
          position: absolute;
          width: 100%;
          height: 100%;
          clip-path: ${Y};
          background: ${la};
          filter: blur(${M}px)${o?" drop-shadow(0 0 20px rgba(255, 215, 0, 0.8)) drop-shadow(0 0 40px rgba(255, 255, 0, 0.6))":""};
          opacity: ${w};
          animation: starPulse-${e} ${o?"2s":"3s"} ease-in-out infinite, starRotate-${e} 20s linear infinite${o?`, maintainerGlow-${e} 2s ease-in-out infinite`:""};
          pointer-events: none;
          transition: filter 0.3s ease, opacity 0.3s ease;
        }
        
        .star-glow-container-${e}:hover .star-glow-${e} {
          filter: blur(0px)${o?" drop-shadow(0 0 25px rgba(255, 215, 0, 1))":""};
          opacity: 1;
        }
        
        .star-glow-2-${e} {
          animation-delay: -1s;
          background: ${ca};
          filter: blur(${M+2}px)${o?" drop-shadow(0 0 15px rgba(255, 255, 100, 0.6))":""};
          opacity: ${w*.75};
          transition: filter 0.3s ease, opacity 0.3s ease;
        }
        
        .star-glow-container-${e}:hover .star-glow-2-${e} {
          filter: blur(2px)${o?" drop-shadow(0 0 20px rgba(255, 255, 100, 0.8))":""};
          opacity: 0.75;
        }
        
        .star-glow-3-${e} {
          animation-delay: -2s;
          background: ${da};
          filter: blur(${M+4}px)${o?" drop-shadow(0 0 10px rgba(255, 200, 0, 0.5))":""};
          opacity: ${w*.6};
          transition: filter 0.3s ease, opacity 0.3s ease;
        }
        
        .star-glow-container-${e}:hover .star-glow-3-${e} {
          filter: blur(4px)${o?" drop-shadow(0 0 15px rgba(255, 200, 0, 0.7))":""};
          opacity: 0.6;
        }
        
        .star-avatar-${e} {
          position: relative;
          z-index: 1;
          width: ${u}px;
          height: ${u}px;
          clip-path: ${Y};
          overflow: hidden;
          opacity: ${w};
          transition: opacity 0.3s ease;
          ${o?"box-shadow: 0 0 30px rgba(255, 215, 0, 0.6), 0 0 60px rgba(255, 255, 0, 0.4);":""}
          ${I?"box-shadow: 0 0 20px rgba(255, 215, 0, 0.5), 0 0 40px rgba(255, 255, 0, 0.3);":""}
        }
        
        .star-glow-container-${e}:hover .star-avatar-${e} {
          opacity: 1;
          ${o?"box-shadow: 0 0 40px rgba(255, 215, 0, 0.8), 0 0 80px rgba(255, 255, 0, 0.6);":""}
          ${I?"box-shadow: 0 0 30px rgba(255, 215, 0, 0.7), 0 0 60px rgba(255, 255, 0, 0.5);":""}
        }
        
        .star-avatar-${e} img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        ${O.map(a=>`
        .ellipse-orbit-${e}-${a.id} {
          position: absolute;
          top: 50%;
          left: 50%;
          width: ${a.radius*2}px;
          height: ${a.radius*2}px;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
        
        .ellipse-ring-${e}-${a.id} {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 1.5px transparent;
          border-image: linear-gradient(135deg, rgba(192, 192, 192, ${a.isPartial?.2*a.partialOpacity:.4}), rgba(173, 216, 230, ${a.isPartial?.2*a.partialOpacity:.4}), rgba(192, 192, 192, ${a.isPartial?.2*a.partialOpacity:.4})) 1;
          border-radius: 50%;
          box-shadow: 
            0 0 10px rgba(192, 192, 192, ${a.isPartial?.15*a.partialOpacity:.3}),
            0 0 20px rgba(173, 216, 230, ${a.isPartial?.1*a.partialOpacity:.2}),
            inset 0 0 10px rgba(192, 192, 192, ${a.isPartial?.1*a.partialOpacity:.2}),
            inset 0 0 20px rgba(173, 216, 230, ${a.isPartial?.05*a.partialOpacity:.1});
          opacity: ${a.isPartial?.5*a.partialOpacity:.5};
          animation: orbitRotate-${e}-${a.id} ${a.rotationDuration}s linear infinite${a.isPartial?`, ellipsePulse-${e}-${a.id} 2s ease-in-out infinite`:""};
        }
        
        .ellipse-beam-wrapper-${e}-${a.id} {
          position: absolute;
          top: 50%;
          left: 50%;
          width: ${a.radius*2}px;
          height: ${a.radius*2}px;
          transform: translate(-50%, -50%);
          animation: beamOrbit-${e}-${a.id} ${a.rotationDuration}s linear infinite;
        }
        
        .ellipse-beam-${e}-${a.id} {
          position: absolute;
          top: 0;
          left: 50%;
          width: 6px;
          height: 6px;
          margin-left: -3px;
          margin-top: -3px;
          background: radial-gradient(circle, rgba(192, 192, 192, ${a.isPartial?.8*a.partialOpacity:.8}) 0%, rgba(173, 216, 230, ${a.isPartial?.6*a.partialOpacity:.6}) 50%, transparent 100%);
          border-radius: 50%;
          box-shadow: 
            0 0 8px rgba(192, 192, 192, ${a.isPartial?.8*a.partialOpacity:.8}),
            0 0 16px rgba(173, 216, 230, ${a.isPartial?.6*a.partialOpacity:.6});
          animation: beamPulse-${e}-${a.id} 2s ease-in-out infinite;
          opacity: ${a.isPartial?a.partialOpacity:1};
        }
        
        @keyframes orbitRotate-${e}-${a.id} {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        
        @keyframes beamOrbit-${e}-${a.id} {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        
        @keyframes beamPulse-${e}-${a.id} {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.3);
            opacity: 1;
          }
        }
        
        ${a.isPartial?`
        @keyframes ellipsePulse-${e}-${a.id} {
          0%, 100% {
            opacity: ${.5*a.partialOpacity};
            transform: scale(1);
          }
          50% {
            opacity: ${.7*a.partialOpacity};
            transform: scale(1.05);
          }
        }
        `:""}
        `).join("")}
        
        ${E.length>0?`
        .tags-ellipse-${e} {
          position: absolute;
          top: 50%;
          left: 50%;
          width: ${v*2}px;
          height: ${v*2}px;
          margin-top: -${v}px;
          margin-left: -${v}px;
          pointer-events: none;
        }
        
        .tags-ellipse-ring-${e} {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 1px solid;
          border-color: rgba(192, 192, 192, 0.1);
          border-radius: 50%;
          opacity: 0.2;
          animation: tagsEllipseRotate-${e} ${$a}s linear infinite;
          animation-delay: ${H}s;
        }
        
        @keyframes tagsEllipseRotate-${e} {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        `:""}
        
        ${T.map((a,s)=>`
        .tag-badge-${e}-${s} {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          animation: badgeRotate-${e}-${s} ${a.rotationSpeed}s linear infinite;
          animation-delay: ${H+s*.2}s;
          pointer-events: auto;
          z-index: 10;
        }
        
        .tag-badge-content-${e}-${s} {
          position: absolute;
          top: ${a.y}px;
          left: ${a.x}px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          width: auto;
          min-width: 24px;
          height: 24px;
          padding: 4px 8px;
          border-radius: 50%;
          background: ${a.color};
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          opacity: 0.6;
          transition: opacity 0.3s ease, transform 0.3s ease;
          cursor: pointer;
          transform: translate(-50%, -50%);
          animation: badgeContentCounterRotate-${e}-${s} ${a.rotationSpeed}s linear infinite;
          animation-delay: ${H+s*.2}s;
        }
        
        .tag-badge-content-${e}-${s}:hover {
          opacity: 0.9;
          transform: translate(-50%, -50%) scale(1.1);
        }
        
        @keyframes badgeRotate-${e}-${s} {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes badgeContentCounterRotate-${e}-${s} {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(-360deg);
          }
        }
        `).join("")}
      `}),t.jsx("div",{ref:Z,className:`absolute ${ra||""} ${l?"cursor-move":""} ${h?"opacity-50 z-[1000]":""}`,style:{left:`${h?W.x:G}px`,top:`${h?W.y:U}px`,zIndex:h?1e3:o?100:I?50:void 0,willChange:l?"transform":void 0},draggable:l,onDragStart:ma,onDrag:pa,onDragEnd:ga,children:na?t.jsxs(t.Fragment,{children:[l?t.jsx("div",{className:"flex flex-col items-center gap-1",children:t.jsxs("div",{className:`star-glow-container-${e} `,children:[!c&&E.length>0&&t.jsx("div",{className:`tags-ellipse-${e}`,children:t.jsx("div",{className:`tags-ellipse-ring-${e}`})}),!c&&O.map(a=>t.jsxs("div",{className:`ellipse-orbit-${e}-${a.id} `,children:[t.jsx("div",{className:`ellipse-ring-${e}-${a.id} `}),t.jsx("div",{className:`ellipse-beam-wrapper-${e}-${a.id}`,children:t.jsx("div",{className:`ellipse-beam-${e}-${a.id} `})})]},a.id)),!c&&T.map((a,s)=>t.jsx("div",{className:`tag-badge-${e}-${s}`,children:t.jsx(F,{content:a.tag,children:t.jsxs("div",{className:`tag-badge-content-${e}-${s}`,children:[N({iconType:"star",className:"w-3 h-3",fill:"currentColor"}),t.jsx("span",{className:"text-[10px] font-medium",children:a.tag})]})})},`${a.tag}-${s}`)),t.jsx("div",{className:`star-glow-${e}`}),t.jsx("div",{className:`star-glow-${e} star-glow-2-${e}`}),t.jsx("div",{className:`star-glow-${e} star-glow-3-${e}`}),t.jsx("div",{className:`star-avatar-${e} hover:opacity-80 transition-opacity p-3 border-2 border-red-500 hover:bg-teal-300 bg-blue-200 dark:bg-blue-400! dark:hover:bg-teal-300! dark:hover:blur-sm`,children:t.jsx("img",{src:S||R,alt:k||C,className:A||""})})]})}):t.jsx(ea,{uri:K,children:t.jsx("div",{className:"flex flex-col items-center gap-1",children:t.jsxs("div",{className:`star-glow-container-${e} `,children:[!c&&E.length>0&&t.jsx("div",{className:`tags-ellipse-${e}`,children:t.jsx("div",{className:`tags-ellipse-ring-${e}`})}),!c&&O.map(a=>t.jsxs("div",{className:`ellipse-orbit-${e}-${a.id} `,children:[t.jsx("div",{className:`ellipse-ring-${e}-${a.id} `}),t.jsx("div",{className:`ellipse-beam-wrapper-${e}-${a.id}`,children:t.jsx("div",{className:`ellipse-beam-${e}-${a.id} `})})]},a.id)),!c&&T.map((a,s)=>t.jsx("div",{className:`tag-badge-${e}-${s}`,children:t.jsx(F,{content:a.tag,children:t.jsxs("div",{className:`tag-badge-content-${e}-${s}`,children:[N({iconType:"star",className:"w-3 h-3",fill:"currentColor"}),t.jsx("span",{className:"text-[10px] font-medium",children:a.tag})]})})},`${a.tag}-${s}`)),t.jsx("div",{className:`star-glow-${e}`}),t.jsx("div",{className:`star-glow-${e} star-glow-2-${e}`}),t.jsx("div",{className:`star-glow-${e} star-glow-3-${e}`}),t.jsx("div",{className:`star-avatar-${e} hover:opacity-80 transition-opacity p-3 border-2 border-red-500 hover:bg-teal-300 bg-blue-200 dark:bg-blue-400! dark:hover:bg-teal-300! dark:hover:blur-sm`,children:t.jsx("img",{src:S||R,alt:k||C,className:A||""})})]})})}),t.jsx("div",{className:"text-center mt-1",children:t.jsx("span",{className:"text-[10px] font-medium text-slate-700 dark:text-slate-300",children:b})})]}):t.jsxs(F,{content:xa,children:[l?t.jsx("div",{className:"flex flex-col items-center gap-1",children:t.jsxs("div",{className:`star-glow-container-${e} `,children:[!c&&E.length>0&&t.jsx("div",{className:`tags-ellipse-${e}`,children:t.jsx("div",{className:`tags-ellipse-ring-${e}`})}),!c&&O.map(a=>t.jsxs("div",{className:`ellipse-orbit-${e}-${a.id} `,children:[t.jsx("div",{className:`ellipse-ring-${e}-${a.id} `}),t.jsx("div",{className:`ellipse-beam-wrapper-${e}-${a.id}`,children:t.jsx("div",{className:`ellipse-beam-${e}-${a.id} `})})]},a.id)),!c&&T.map((a,s)=>t.jsx("div",{className:`tag-badge-${e}-${s}`,children:t.jsx(F,{content:a.tag,children:t.jsxs("div",{className:`tag-badge-content-${e}-${s}`,children:[N({iconType:"star",className:"w-3 h-3",fill:"currentColor"}),t.jsx("span",{className:"text-[10px] font-medium",children:a.tag})]})})},`${a.tag}-${s}`)),t.jsx("div",{className:`star-glow-${e}`}),t.jsx("div",{className:`star-glow-${e} star-glow-2-${e}`}),t.jsx("div",{className:`star-glow-${e} star-glow-3-${e}`}),t.jsx("div",{className:`star-avatar-${e} hover:opacity-80 transition-opacity p-3 border-2 border-red-500 hover:bg-teal-300 bg-blue-200 dark:bg-blue-400! dark:hover:bg-teal-300! dark:hover:blur-sm`,children:t.jsx("img",{src:S||R,alt:k||C,className:A||""})})]})}):t.jsx(ea,{uri:K,children:t.jsx("div",{className:"flex flex-col items-center gap-1",children:t.jsxs("div",{className:`star-glow-container-${e} `,children:[!c&&E.length>0&&t.jsx("div",{className:`tags-ellipse-${e}`,children:t.jsx("div",{className:`tags-ellipse-ring-${e}`})}),!c&&O.map(a=>t.jsxs("div",{className:`ellipse-orbit-${e}-${a.id} `,children:[t.jsx("div",{className:`ellipse-ring-${e}-${a.id} `}),t.jsx("div",{className:`ellipse-beam-wrapper-${e}-${a.id}`,children:t.jsx("div",{className:`ellipse-beam-${e}-${a.id} `})})]},a.id)),!c&&T.map((a,s)=>t.jsx("div",{className:`tag-badge-${e}-${s}`,children:t.jsx(F,{content:a.tag,children:t.jsxs("div",{className:`tag-badge-content-${e}-${s}`,children:[N({iconType:"star",className:"w-3 h-3",fill:"currentColor"}),t.jsx("span",{className:"text-[10px] font-medium",children:a.tag})]})})},`${a.tag}-${s}`)),t.jsx("div",{className:`star-glow-${e}`}),t.jsx("div",{className:`star-glow-${e} star-glow-2-${e}`}),t.jsx("div",{className:`star-glow-${e} star-glow-3-${e}`}),t.jsx("div",{className:`star-avatar-${e} hover:opacity-80 transition-opacity p-3 border-2 border-red-500 hover:bg-teal-300 bg-blue-200 dark:bg-blue-400! dark:hover:bg-teal-300! dark:hover:blur-sm`,children:t.jsx("img",{src:S||R,alt:k||C,className:A||""})})]})})}),t.jsx("div",{className:"text-center mt-1",children:t.jsx("span",{className:"text-[10px] font-medium text-slate-700 dark:text-slate-300",children:b})})]})})]})};export{ua as S,Ra as U};
