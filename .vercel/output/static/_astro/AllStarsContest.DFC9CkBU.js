import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as u}from"./index.DxhH1ShK.js";import{g as x}from"./index.B-oIZhPt.js";import{B as y}from"./Badge.CwoN8wRJ.js";import{C as l}from"./Tooltip.Cp89g2lg.js";import{C as $}from"./Link.DQs8_5h1.js";import"./slot.DPiB-jfz.js";import"./index.CqUFkXl9.js";import"./utils.BnlJtBIq.js";import"./proxy.D4YeN7SK.js";import"./index.CG_O7YBG.js";import"./ElectricBorder.DAWLx7iV.js";const _=({projectGoal:r,currentStars:w=0,contest:t,isEligible:j,projectName:o,projectUri:p})=>{const v=j??(r!==void 0&&w>=r),[m,d]=u.useState(null);u.useEffect(()=>{if(!t?.endTime){d(null);return}const s=()=>{const n=typeof t.endTime=="number"?new Date(t.endTime):t.endTime,c=new Date,a=n.getTime()-c.getTime();if(a<=0){d({days:0,hours:0,minutes:0,seconds:0});return}const k=Math.floor(a/(1e3*60*60*24)),N=Math.floor(a%(1e3*60*60*24)/(1e3*60*60)),T=Math.floor(a%(1e3*60*60)/(1e3*60)),D=Math.floor(a%(1e3*60)/1e3);d({days:k,hours:N,minutes:T,seconds:D})};s();const i=setInterval(s,1e3);return()=>clearInterval(i)},[t?.endTime]);const g=()=>{if(!m)return"--:--:--";const{days:s,hours:i,minutes:n,seconds:c}=m;return s>0?`${s}d ${i}h ${n}m`:`${i}h ${n}m ${c}s`},b=()=>t?.endTime?(typeof t.endTime=="number"?new Date(t.endTime):t.endTime).toLocaleString():"";if(!t)return null;const f=s=>s?(typeof s=="number"?new Date(s):s).toLocaleDateString():"",h=()=>t.contestFromDate&&t.contestToDate?`5% of all donations between ${f(t.contestFromDate)} - ${f(t.contestToDate)} to random galaxy on top 100 leaderboard`:t.prize;return e.jsxs("div",{className:"flex items-center justify-center gap-3 px-4 py-2",children:[e.jsx(l,{content:e.jsxs("div",{className:"text-sm max-w-xs space-y-2",children:[e.jsx("div",{className:"font-semibold",children:t.title}),e.jsx("div",{children:t.description}),e.jsxs("div",{className:"text-xs text-slate-300",children:[e.jsxs("div",{children:["Goal: ",t.goal," stars"]}),e.jsxs("div",{children:["Prize: ",h()]}),e.jsxs("div",{children:["Position: #",t.position]})]})]}),children:e.jsxs("div",{className:"relative mt-2",children:[e.jsxs("div",{className:"absolute inset-0",children:[e.jsx("div",{className:"trophy-twinkle-1 absolute top-0 left-1/2 w-1 h-1 bg-yellow-300 rounded-full opacity-0 animate-twinkle-1"}),e.jsx("div",{className:"trophy-twinkle-2 absolute top-1 right-0 w-1 h-1 bg-yellow-300 rounded-full opacity-0 animate-twinkle-2"}),e.jsx("div",{className:"trophy-twinkle-3 absolute bottom-0 left-0 w-1 h-1 bg-yellow-300 rounded-full opacity-0 animate-twinkle-3"}),e.jsx("div",{className:"trophy-twinkle-4 absolute bottom-1 right-1/2 w-1 h-1 bg-yellow-300 rounded-full opacity-0 animate-twinkle-4"})]}),x({iconType:"trophy",className:"w-6 h-6 relative z-10"})]})}),e.jsx(l,{content:e.jsxs("div",{className:"text-sm max-w-xs space-y-2",children:[e.jsx("div",{className:"font-semibold",children:t.title}),e.jsx("div",{children:t.description}),e.jsxs("div",{className:"text-xs text-slate-300",children:[e.jsxs("div",{children:["Goal: ",t.goal," stars"]}),e.jsxs("div",{children:["Prize: ",h()]}),e.jsxs("div",{children:["Position: #",t.position]})]})]}),children:e.jsxs("span",{className:"text-sm font-semibold text-slate-700 dark:text-slate-300 mt-2",children:["#",t.position]})}),v?e.jsxs(y,{variant:"green",static:!0,className:"flex items-center gap-1 mt-2",children:[x({iconType:"check",className:"w-3 h-3"}),e.jsx("span",{className:"text-xs",children:"Eligible"})]}):e.jsx(l,{content:e.jsx("div",{className:"text-sm max-w-xs",children:e.jsxs("div",{children:["To be eligible, you need at least ",r||t.goal," stars, as"," ",p&&o?e.jsxs($,{uri:p,className:"text-blue-400 hover:text-blue-300 underline",children:["#",t.position," ",o]}):e.jsxs("span",{children:["#",t.position," ",o||"this project"]})]})}),children:e.jsx(y,{variant:"orange",static:!0,className:"flex items-center gap-1 mt-2",children:e.jsx("span",{className:"text-xs",children:"Not Eligible"})})}),m&&e.jsx(l,{content:e.jsxs("div",{className:"text-sm",children:[t.title," ends at ",b()]}),children:e.jsxs("div",{className:"flex items-center gap-1 text-sm font-medium text-slate-700 dark:text-slate-300 mt-2",children:[x({iconType:"clock",className:"w-4 h-4"}),e.jsx("span",{className:"transition-all duration-300",children:g()})]})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          @keyframes twinkle-1 {
            0%, 100% { opacity: 0; transform: scale(0) translate(0, 0); }
            50% { opacity: 1; transform: scale(1) translate(-5px, -5px); }
          }
          @keyframes twinkle-2 {
            0%, 100% { opacity: 0; transform: scale(0) translate(0, 0); }
            50% { opacity: 1; transform: scale(1) translate(5px, -5px); }
          }
          @keyframes twinkle-3 {
            0%, 100% { opacity: 0; transform: scale(0) translate(0, 0); }
            50% { opacity: 1; transform: scale(1) translate(-5px, 5px); }
          }
          @keyframes twinkle-4 {
            0%, 100% { opacity: 0; transform: scale(0) translate(0, 0); }
            50% { opacity: 1; transform: scale(1) translate(5px, 5px); }
          }
          .animate-twinkle-1 {
            animation: twinkle-1 2s ease-in-out infinite;
          }
          .animate-twinkle-2 {
            animation: twinkle-2 2s ease-in-out infinite 0.5s;
          }
          .animate-twinkle-3 {
            animation: twinkle-3 2s ease-in-out infinite 1s;
          }
          .animate-twinkle-4 {
            animation: twinkle-4 2s ease-in-out infinite 1.5s;
          }
        `}})]})};export{_ as default};
