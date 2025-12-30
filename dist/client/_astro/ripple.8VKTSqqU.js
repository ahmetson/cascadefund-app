import{j as n}from"./jsx-runtime.D_zvdyIk.js";import{R as A,r}from"./index.DxhH1ShK.js";import{c as H}from"./utils.BnlJtBIq.js";import{g as G,S as C}from"./slot.RkfkL2mj.js";import{m as j}from"./proxy.D4YeN7SK.js";var q=(t=>(t.roundedXs="rounded-xs",t.roundedNone="rounded-none",t.roundedSm="rounded-sm",t.roundedMd="rounded-md",t.roundedLg="rounded-lg",t.roundedXl="rounded-xl",t.rounded2xl="rounded-2xl",t.rounded3xl="rounded-3xl",t.roundedFull="rounded-full",t))(q||{}),D=(t=>(t.shadowSm="shadow-sm",t.shadowXs="shadow-xs",t.shadowMd="shadow-md",t.shadowLg="shadow-lg",t.shadowXl="shadow-xl",t.shadow2xl="shadow-2xl",t.shadow3xl="shadow-3xl",t.shadow4xl="shadow-4xl",t.shadow5xl="shadow-5xl",t.shadowNone="shadow-none",t))(D||{}),V=(t=>(t.border0="border-0",t.border1="border-1",t.border2="border-2",t.border4="border-4",t.borderNone="border-none",t))(V||{});const S={panel:{margin:{bottom:"mb-6"}}},P={listContent:"bg-gradient-to-b from-gray-200 via-transparent to-gray-300 dark:text-gray-900 dark:from-gray-800 dark:via-transparent dark:to-gray-800"},F=A.memo(({className:t,size:o=48,duration:p=2,colorFrom:c="#8b82f6",colorTo:f="#8b5cf6",children:m})=>{const[u,l]=r.useState(!1),[a,h]=r.useState(!1),[x,$]=r.useState(0),[R,d]=r.useState([]),[g,v]=r.useState(0),M=r.useRef(null),E=r.useRef(null),w=r.useRef(0),y=["#ff0000","#ff8000","#ffff00","#80ff00","#00ff00","#00ff80","#00ffff","#0080ff","#0000ff","#8000ff","#ff00ff","#ff0080"],k=["circle","square","triangle","diamond"];r.useEffect(()=>{const s=setTimeout(()=>{a||l(!0)},Math.floor(Math.random()*50));return()=>clearTimeout(s)},[a,x]);const B=()=>{l(!1),a||($(e=>(e+1)%4),setTimeout(()=>{a||l(!0)},200))};r.useEffect(()=>{if(a){const e=setInterval(()=>{v(s=>(s+1)%100)},50);return()=>clearInterval(e)}},[a]),r.useEffect(()=>{if(a&&u){const e=setInterval(()=>{const s={id:w.current++,x:Math.random()*100,y:Math.random()*100,color:y[Math.floor(Math.random()*y.length)],shape:k[Math.floor(Math.random()*k.length)],direction:["up","down","left","right"][Math.floor(Math.random()*4)]};d(i=>[...i.slice(-8),s]),setTimeout(()=>{d(i=>i.filter(Y=>Y.id!==s.id))},2e3)},300);return()=>clearInterval(e)}},[a,u]);const L=()=>{h(!0),l(!0)},N=()=>{h(!1),d([]),setTimeout(()=>{setTimeout(()=>{l(!0)},300)},100)},T={},I={},b=r.useCallback(e=>`linear-gradient(${e}, 
      transparent 0%, 
      transparent 20%, 
      ${c}40 30%, 
      ${f}80 50%, 
      ${c}40 70%, 
      transparent 80%, 
      transparent 100%
    )`,[c,f]),X=r.useMemo(()=>{const e={animationDuration:`${p}s`,filter:"blur(0.5px)"};switch(x){case 0:return{...e,position:"absolute",top:0,left:0,width:`${o}px`,height:"3px",background:b("90deg"),animation:"beamTop 10s ease-in-out"};case 1:return{...e,position:"absolute",top:0,right:0,width:"3px",height:`${o}px`,background:b("180deg"),animation:"beamRight 4s ease-in-out"};case 2:return{...e,position:"absolute",bottom:0,right:0,width:`${o}px`,height:"3px",background:b("270deg"),animation:"beamBottom 8s ease-in-out"};case 3:return{...e,position:"absolute",bottom:0,left:0,width:"3px",height:`${o}px`,background:b("0deg"),animation:"beamLeft 4s ease-in-out"};default:return e}},[x,o,p,b]),O=r.useCallback(e=>{const s=Math.random()*2+3,i={position:"absolute",left:`${e.x}%`,top:`${e.y}%`,width:`${s}px`,height:`${s}px`,backgroundColor:e.color,opacity:.8,animation:`flyOut${e.direction} 2s ease-out forwards`,zIndex:20,pointerEvents:"none"};switch(e.shape){case"circle":return n.jsx("div",{style:{...i,borderRadius:"50%",pointerEvents:"none"}},e.id);case"square":return n.jsx("div",{style:{...i,pointerEvents:"none"}},e.id);case"triangle":return n.jsx("div",{style:{...i,width:0,height:0,backgroundColor:"transparent",borderLeft:`${s/2}px solid transparent`,borderRight:`${s/2}px solid transparent`,borderBottom:`${s}px solid ${e.color}`,pointerEvents:"none"}},e.id);case"diamond":return n.jsx("div",{style:{...i,transform:"rotate(45deg)",pointerEvents:"none"}},e.id);default:return n.jsx("div",{style:{...i,pointerEvents:"none"}},e.id)}},[]);return n.jsxs("div",{ref:M,className:H("relative overflow-hidden bg-transparent",t),style:a?I:T,onMouseEnter:L,onMouseLeave:N,children:[u&&!a&&n.jsx("div",{ref:E,className:"absolute z-10",style:X,onAnimationEnd:B}),a&&R.map(O),a&&n.jsx("div",{className:"absolute z-10 ",style:{position:"absolute",width:"8px",height:"8px",borderRadius:"50%",background:`radial-gradient(circle, ${f} 0%, ${c} 50%, transparent 100%)`,animation:"moveLight 5s linear infinite",transform:`translate(${g*4}px, 0)`,pointerEvents:"none"}}),n.jsx("div",{className:"relative z-0 hover:z-0",children:r.useMemo(()=>m,[m])}),n.jsx("style",{children:`
        @keyframes beamTop {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          5% {
            opacity: 0.8;
          }
          95% {
            opacity: 0.8;
          }
          100% {
            transform: translateX(100vw);
            opacity: 0;
          }
        }
        
        @keyframes beamRight {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          5% {
            opacity: 0.8;
          }
          95% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
        
        @keyframes beamBottom {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          5% {
            opacity: 0.8;
          }
          95% {
            opacity: 0.8;
          }
          100% {
            transform: translateX(-100vw);
            opacity: 0;
          }
        }
        
        @keyframes beamLeft {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          5% {
            opacity: 0.8;
          }
          95% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-100vh);
            opacity: 0;
          }
        }

        @keyframes flyOutup {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
          100% {
            transform: translate(0, -32px) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes flyOutdown {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
          100% {
            transform: translate(0, 32px) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes flyOutleft {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
          100% {
            transform: translate(-32px, 0) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes flyOutright {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
          100% {
            transform: translate(32px, 0) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes moveLight {
          0% {
            top: 0;
            left: 0;
            transform: translate(-4px, -4px);
          }
          25% {
            top: 0;
            left: 100%;
            transform: translate(-4px, -4px);
          }
          50% {
            top: 100%;
            left: 100%;
            transform: translate(-4px, -4px);
          }
          75% {
            top: 100%;
            left: 0;
            transform: translate(-4px, -4px);
          }
          100% {
            top: 0;
            left: 0;
            transform: translate(-4px, -4px);
          }
        }
      `})]})},(t,o)=>t.className===o.className&&t.size===o.size&&t.duration===o.duration&&t.colorFrom===o.colorFrom&&t.colorTo===o.colorTo&&t.children===o.children);F.displayName="BorderBeam";const[J,K]=G("RippleButtonContext");function z({ref:t,onClick:o,hoverScale:p=1.05,tapScale:c=.95,asChild:f=!1,style:m,...u}){const[l,a]=r.useState([]),h=r.useRef(null);r.useImperativeHandle(t,()=>h.current);const x=r.useCallback(d=>{const g=h.current;if(!g)return;const v=g.getBoundingClientRect(),M=d.clientX-v.left,E=d.clientY-v.top,w={id:Date.now(),x:M,y:E};a(y=>[...y,w]),setTimeout(()=>{a(y=>y.filter(k=>k.id!==w.id))},600)},[]),$=r.useCallback(d=>{x(d),o&&o(d)},[x,o]),R=f?C:j.button;return n.jsx(J,{value:{ripples:l,setRipples:a},children:n.jsx(R,{ref:h,"data-slot":"ripple-button",onClick:$,whileTap:{scale:c},whileHover:{scale:p},style:{position:"relative",overflow:"hidden",...m},...u})})}function tt({color:t="var(--ripple-button-ripple-color)",scale:o=10,transition:p={duration:.6,ease:"easeOut"},asChild:c=!1,style:f,...m}){const{ripples:u}=K(),l=c?C:j.span;return u.map(a=>n.jsx(l,{initial:{scale:0,opacity:.5},animate:{scale:o,opacity:0},transition:p,style:{position:"absolute",borderRadius:"50%",pointerEvents:"none",width:"20px",height:"20px",backgroundColor:t,top:a.y-10,left:a.x-10,...f},...m},a.id))}export{V as B,S as G,q as R,D as S,F as a,z as b,tt as c,P as d};
