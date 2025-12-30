import{j as t}from"./jsx-runtime.D_zvdyIk.js";import{r as C}from"./index.DxhH1ShK.js";import{C as w}from"./Tooltip.BWGh4r1w.js";import{C as I}from"./Link.k33VB9n9.js";import{g as c}from"./icon.DFuhwfpy.js";import{N as y}from"./NumberFlow-client-48rw3j0J.DO-Ted3l.js";import"./index.C2SuE_cr.js";import"./index.CqUFkXl9.js";import"./slot.Dc8ja7ZA.js";import"./utils.Lr0IsqiS.js";import"./clsx.B-dksMZM.js";import"./proxy.D4YeN7SK.js";import"./index.CG_O7YBG.js";import"./ElectricBorder.BANsXwQj.js";const W=({x:N,y:k,projectName:i,projectId:G,galaxyData:n,tags:d,leaderboardPosition:j,className:M})=>{const a=C.useMemo(()=>`project-galaxy-${i.replace(/\s+/g,"-").toLowerCase()}`,[i]),R=`/project?galaxy=${G||i.toLowerCase().replace(/\s+/g,"-")}`,r=48+30,{validTags:u,badgePositions:v}=C.useMemo(()=>{const e=["rgba(255, 183, 127, 0.1)","rgba(255, 159, 100, 0.1)","rgba(255, 182, 193, 0.1)","rgba(255, 160, 180, 0.1)","rgba(245, 222, 179, 0.1)","rgba(238, 203, 173, 0.1)","rgba(255, 127, 80, 0.1)","rgba(250, 128, 114, 0.1)","rgba(255, 218, 185, 0.1)","rgba(255, 192, 203, 0.1)"],s=d?d.slice(0,5):[],p=s.map((m,f)=>{const o=m.split("").reduce(($,b)=>$+b.charCodeAt(0),0),l=(o%360+f*72)%360,x=o%e.length;return{tag:m,angle:l,x:r*Math.cos((l-90)*(Math.PI/180)),y:r*Math.sin((l-90)*(Math.PI/180)),rotationSpeed:15+f*5,color:e[x]}});return{validTags:s,badgePositions:p}},[d,r]),g=(e,s=2.5)=>{const p=[];for(let o=0;o<=100;o++){const h=o/100,l=e+h*s*Math.PI*2,x=48*(.1+h*.9),$=48+Math.cos(l)*x,b=48+Math.sin(l)*x;p.push(`${o===0?"M":"L"} ${$} ${b}`)}return p.join(" ")},P=n?t.jsxs("div",{className:"text-sm space-y-3 max-w-xs",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg font-bold text-slate-800 dark:text-slate-200 mb-1",children:i}),j!==void 0&&t.jsxs("div",{className:"text-xs text-slate-500 dark:text-slate-400 mb-2",children:["Leaderboard: #",j," galaxy"]}),t.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-400 line-clamp-3",children:n.description})]}),t.jsxs("div",{className:"flex items-center justify-between gap-4 pt-2 border-t border-slate-200 dark:border-slate-700",children:[t.jsxs("div",{className:"flex items-center gap-1",children:[c({iconType:"star",className:"w-4 h-4 text-yellow-500"}),t.jsx(y,{value:n.stars,locales:"en-US",format:{style:"decimal",maximumFractionDigits:1},className:"text-xs font-medium"})]}),t.jsxs("div",{className:"flex items-center gap-1",children:[c({iconType:"sunshine",className:"w-4 h-4 text-orange-500"}),t.jsx(y,{value:n.sunshines,locales:"en-US",format:{style:"decimal",maximumFractionDigits:0},className:"text-xs font-medium"})]}),t.jsxs("div",{className:"flex items-center gap-1",children:[c({iconType:"user",className:"w-4 h-4 text-blue-500"}),t.jsx(y,{value:n.users,locales:"en-US",format:{style:"decimal",maximumFractionDigits:0},className:"text-xs font-medium"})]})]}),t.jsx("div",{className:"pt-2 border-t border-slate-200 dark:border-slate-700",children:t.jsx("p",{className:"text-xs text-slate-700 dark:text-slate-300 font-medium",children:"View the galaxy page. Join it."})})]}):t.jsxs("div",{className:"text-sm",children:[t.jsx("p",{className:"font-medium",children:i}),t.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-400 mt-1",children:"View the galaxy page. Join it."})]});return t.jsxs(t.Fragment,{children:[t.jsx("style",{children:`
        @keyframes galaxyRotate-${a} {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes galaxyPulse-${a} {
          0%, 100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
        }
        
        .galaxy-spiral-container-${a} {
          position: relative;
          width: 96px;
          height: 96px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          animation: galaxyRotate-${a} 90s linear infinite;
          transition: transform 0.3s ease;
        }
        
        .galaxy-wrapper-${a}:hover .galaxy-spiral-container-${a} {
          animation: galaxyRotate-${a} 90s linear infinite, galaxyPulse-${a} 2s ease-in-out infinite;
        }
        
        .galaxy-core-${a} {
          position: absolute;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 200, 0.9) 30%,
            rgba(255, 200, 100, 0.7) 60%,
            transparent 100%
          );
          box-shadow: 
            0 0 20px rgba(255, 255, 255, 0.8),
            0 0 40px rgba(255, 255, 200, 0.6),
            0 0 60px rgba(255, 200, 100, 0.4);
          z-index: 3;
        }
        
        .galaxy-spiral-arm-${a} {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0.7;
        }
        
        .galaxy-spiral-arm-${a} path {
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          transition: stroke 0.3s ease, opacity 0.3s ease;
        }
        
        .galaxy-spiral-arm-1-${a} path {
          stroke: url(#spiralGradient1-${a});
        }
        
        .galaxy-spiral-arm-2-${a} path {
          stroke: url(#spiralGradient2-${a});
        }
        
        .galaxy-spiral-arm-3-${a} path {
          stroke: url(#spiralGradient3-${a});
        }
        
        .galaxy-wrapper-${a}:hover .galaxy-spiral-arm-1-${a} path {
          stroke: url(#spiralGradientHover1-${a});
          opacity: 1;
        }
        
        .galaxy-wrapper-${a}:hover .galaxy-spiral-arm-2-${a} path {
          stroke: url(#spiralGradientHover2-${a});
          opacity: 1;
        }
        
        .galaxy-wrapper-${a}:hover .galaxy-spiral-arm-3-${a} path {
          stroke: url(#spiralGradientHover3-${a});
          opacity: 1;
        }
        
        .galaxy-name-${a} {
          position: relative;
          z-index: 11;
          text-align: center;
          margin-top: 4px;
          font-size: 10px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.95);
          text-shadow: 
            2px 2px 4px rgba(0, 0, 0, 0.8),
            0 0 8px rgba(0, 0, 0, 0.6),
            0 0 12px rgba(0, 0, 0, 0.4);
          pointer-events: none;
        }
        
        ${u.length>0?`
        .tags-ellipse-${a} {
          position: absolute;
          top: 50%;
          left: 50%;
          width: ${r*2}px;
          height: ${r*2}px;
          margin-top: -${r}px;
          margin-left: -${r}px;
          pointer-events: none;
        }
        
        .tags-ellipse-ring-${a} {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 1px solid;
          border-color: rgba(192, 192, 192, 0.1);
          border-radius: 50%;
          opacity: 0.2;
          animation: tagsEllipseRotate-${a} 30s linear infinite;
        }
        
        @keyframes tagsEllipseRotate-${a} {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        `:""}
        
        ${v.map((e,s)=>`
        .tag-badge-${a}-${s} {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          animation: badgeRotate-${a}-${s} ${e.rotationSpeed}s linear infinite;
          animation-delay: ${s*.2}s;
          pointer-events: auto;
          z-index: 10;
        }
        
        .tag-badge-content-${a}-${s} {
          position: absolute;
          top: ${e.y}px;
          left: ${e.x}px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          width: auto;
          min-width: 24px;
          height: 24px;
          padding: 4px 8px;
          border-radius: 50%;
          background: ${e.color};
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          opacity: 0.6;
          transition: opacity 0.3s ease, transform 0.3s ease;
          cursor: pointer;
          transform: translate(-50%, -50%);
          animation: badgeContentCounterRotate-${a}-${s} ${e.rotationSpeed}s linear infinite;
          animation-delay: ${s*.2}s;
        }
        
        .tag-badge-content-${a}-${s}:hover {
          opacity: 0.9;
          transform: translate(-50%, -50%) scale(1.1);
        }
        
        @keyframes badgeRotate-${a}-${s} {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes badgeContentCounterRotate-${a}-${s} {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(-360deg);
          }
        }
        `).join("")}
      `}),t.jsx("div",{className:`absolute ${M||""}`,style:{left:`${N}px`,top:`${k}px`},children:t.jsx(w,{content:P,children:t.jsx(I,{uri:R,children:t.jsxs("div",{className:`flex flex-col items-center gap-1 cursor-pointer relative galaxy-wrapper-${a}`,children:[t.jsxs("div",{className:`galaxy-spiral-container-${a}`,children:[t.jsxs("svg",{width:"96",height:"96",viewBox:"0 0 96 96",className:"absolute inset-0",style:{overflow:"visible"},children:[t.jsxs("defs",{children:[t.jsxs("linearGradient",{id:`spiralGradient1-${a}`,x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[t.jsx("stop",{offset:"0%",stopColor:"rgba(255, 255, 255, 0.9)"}),t.jsx("stop",{offset:"30%",stopColor:"rgba(255, 200, 100, 0.6)"}),t.jsx("stop",{offset:"60%",stopColor:"rgba(200, 150, 255, 0.4)"}),t.jsx("stop",{offset:"100%",stopColor:"rgba(100, 50, 200, 0.2)"})]}),t.jsxs("linearGradient",{id:`spiralGradient2-${a}`,x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[t.jsx("stop",{offset:"0%",stopColor:"rgba(255, 255, 200, 0.8)"}),t.jsx("stop",{offset:"30%",stopColor:"rgba(255, 180, 80, 0.5)"}),t.jsx("stop",{offset:"60%",stopColor:"rgba(180, 120, 255, 0.3)"}),t.jsx("stop",{offset:"100%",stopColor:"rgba(90, 40, 180, 0.15)"})]}),t.jsxs("linearGradient",{id:`spiralGradient3-${a}`,x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[t.jsx("stop",{offset:"0%",stopColor:"rgba(255, 255, 150, 0.7)"}),t.jsx("stop",{offset:"30%",stopColor:"rgba(255, 160, 60, 0.4)"}),t.jsx("stop",{offset:"60%",stopColor:"rgba(160, 100, 255, 0.25)"}),t.jsx("stop",{offset:"100%",stopColor:"rgba(80, 30, 160, 0.1)"})]}),t.jsxs("linearGradient",{id:`spiralGradientHover1-${a}`,x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[t.jsx("stop",{offset:"0%",stopColor:"rgba(255, 255, 255, 1)"}),t.jsx("stop",{offset:"30%",stopColor:"rgba(255, 220, 120, 0.9)"}),t.jsx("stop",{offset:"60%",stopColor:"rgba(220, 170, 255, 0.7)"}),t.jsx("stop",{offset:"100%",stopColor:"rgba(120, 70, 220, 0.4)"})]}),t.jsxs("linearGradient",{id:`spiralGradientHover2-${a}`,x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[t.jsx("stop",{offset:"0%",stopColor:"rgba(255, 255, 220, 1)"}),t.jsx("stop",{offset:"30%",stopColor:"rgba(255, 200, 100, 0.8)"}),t.jsx("stop",{offset:"60%",stopColor:"rgba(200, 140, 255, 0.6)"}),t.jsx("stop",{offset:"100%",stopColor:"rgba(110, 60, 200, 0.3)"})]}),t.jsxs("linearGradient",{id:`spiralGradientHover3-${a}`,x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[t.jsx("stop",{offset:"0%",stopColor:"rgba(255, 255, 180, 0.95)"}),t.jsx("stop",{offset:"30%",stopColor:"rgba(255, 180, 80, 0.7)"}),t.jsx("stop",{offset:"60%",stopColor:"rgba(180, 120, 255, 0.5)"}),t.jsx("stop",{offset:"100%",stopColor:"rgba(100, 50, 200, 0.25)"})]})]}),t.jsx("g",{className:`galaxy-spiral-arm-${a} galaxy-spiral-arm-1-${a}`,children:t.jsx("path",{d:g(0,2.5)})}),t.jsx("g",{className:`galaxy-spiral-arm-${a} galaxy-spiral-arm-2-${a}`,children:t.jsx("path",{d:g(Math.PI*2/3,2.5)})}),t.jsx("g",{className:`galaxy-spiral-arm-${a} galaxy-spiral-arm-3-${a}`,children:t.jsx("path",{d:g(Math.PI*4/3,2.5)})})]}),t.jsx("div",{className:`galaxy-core-${a}`})]}),u.length>0&&t.jsx("div",{className:`tags-ellipse-${a}`,children:t.jsx("div",{className:`tags-ellipse-ring-${a}`})}),v.map((e,s)=>t.jsx("div",{className:`tag-badge-${a}-${s}`,children:t.jsx(w,{content:e.tag,children:t.jsxs("div",{className:`tag-badge-content-${a}-${s}`,children:[c({iconType:"star",className:"w-3 h-3",fill:"currentColor"}),t.jsx("span",{className:"text-[10px] font-medium",children:e.tag})]})})},`${e.tag}-${s}`)),t.jsx("div",{className:`galaxy-name-${a}`,children:i})]})})})})]})};export{W as default};
