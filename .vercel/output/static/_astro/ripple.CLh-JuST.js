import{j as o}from"./jsx-runtime.D_zvdyIk.js";import{R as Y,r as a}from"./index.DxhH1ShK.js";import{c as z}from"./utils.BnlJtBIq.js";import{g as A,S as M}from"./slot.DPiB-jfz.js";import{m as j}from"./proxy.D4YeN7SK.js";const H=Y.memo(({className:r,size:n=48,duration:m=2,colorFrom:f="#8b82f6",colorTo:p="#8b5cf6",children:d})=>{const[u,l]=a.useState(!1),[e,h]=a.useState(!1),[y,k]=a.useState(0),[$,c]=a.useState([]),[g,v]=a.useState(0),S=a.useRef(null),E=a.useRef(null),R=a.useRef(0),x=["#ff0000","#ff8000","#ffff00","#80ff00","#00ff00","#00ff80","#00ffff","#0080ff","#0000ff","#8000ff","#ff00ff","#ff0080"],w=["circle","square","triangle","diamond"];a.useEffect(()=>{const s=setTimeout(()=>{e||l(!0)},Math.floor(Math.random()*50));return()=>clearTimeout(s)},[e,y]);const B=()=>{l(!1),e||(k(t=>(t+1)%4),setTimeout(()=>{e||l(!0)},200))};a.useEffect(()=>{if(e){const t=setInterval(()=>{v(s=>(s+1)%100)},50);return()=>clearInterval(t)}},[e]),a.useEffect(()=>{if(e&&u){const t=setInterval(()=>{const s={id:R.current++,x:Math.random()*100,y:Math.random()*100,color:x[Math.floor(Math.random()*x.length)],shape:w[Math.floor(Math.random()*w.length)],direction:["up","down","left","right"][Math.floor(Math.random()*4)]};c(i=>[...i.slice(-8),s]),setTimeout(()=>{c(i=>i.filter(X=>X.id!==s.id))},2e3)},300);return()=>clearInterval(t)}},[e,u]);const C=()=>{h(!0),l(!0)},T=()=>{h(!1),c([]),setTimeout(()=>{setTimeout(()=>{l(!0)},300)},100)},I={},L={},b=a.useCallback(t=>`linear-gradient(${t}, 
      transparent 0%, 
      transparent 20%, 
      ${f}40 30%, 
      ${p}80 50%, 
      ${f}40 70%, 
      transparent 80%, 
      transparent 100%
    )`,[f,p]),N=a.useMemo(()=>{const t={animationDuration:`${m}s`,filter:"blur(0.5px)"};switch(y){case 0:return{...t,position:"absolute",top:0,left:0,width:`${n}px`,height:"3px",background:b("90deg"),animation:"beamTop 10s ease-in-out"};case 1:return{...t,position:"absolute",top:0,right:0,width:"3px",height:`${n}px`,background:b("180deg"),animation:"beamRight 4s ease-in-out"};case 2:return{...t,position:"absolute",bottom:0,right:0,width:`${n}px`,height:"3px",background:b("270deg"),animation:"beamBottom 8s ease-in-out"};case 3:return{...t,position:"absolute",bottom:0,left:0,width:"3px",height:`${n}px`,background:b("0deg"),animation:"beamLeft 4s ease-in-out"};default:return t}},[y,n,m,b]),O=a.useCallback(t=>{const s=Math.random()*2+3,i={position:"absolute",left:`${t.x}%`,top:`${t.y}%`,width:`${s}px`,height:`${s}px`,backgroundColor:t.color,opacity:.8,animation:`flyOut${t.direction} 2s ease-out forwards`,zIndex:20,pointerEvents:"none"};switch(t.shape){case"circle":return o.jsx("div",{style:{...i,borderRadius:"50%",pointerEvents:"none"}},t.id);case"square":return o.jsx("div",{style:{...i,pointerEvents:"none"}},t.id);case"triangle":return o.jsx("div",{style:{...i,width:0,height:0,backgroundColor:"transparent",borderLeft:`${s/2}px solid transparent`,borderRight:`${s/2}px solid transparent`,borderBottom:`${s}px solid ${t.color}`,pointerEvents:"none"}},t.id);case"diamond":return o.jsx("div",{style:{...i,transform:"rotate(45deg)",pointerEvents:"none"}},t.id);default:return o.jsx("div",{style:{...i,pointerEvents:"none"}},t.id)}},[]);return o.jsxs("div",{ref:S,className:z("relative overflow-hidden bg-transparent",r),style:e?L:I,onMouseEnter:C,onMouseLeave:T,children:[u&&!e&&o.jsx("div",{ref:E,className:"absolute z-10",style:N,onAnimationEnd:B}),e&&$.map(O),e&&o.jsx("div",{className:"absolute z-10 ",style:{position:"absolute",width:"8px",height:"8px",borderRadius:"50%",background:`radial-gradient(circle, ${p} 0%, ${f} 50%, transparent 100%)`,animation:"moveLight 5s linear infinite",transform:`translate(${g*4}px, 0)`,pointerEvents:"none"}}),o.jsx("div",{className:"relative z-0 hover:z-0",children:a.useMemo(()=>d,[d])}),o.jsx("style",{children:`
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
      `})]})},(r,n)=>r.className===n.className&&r.size===n.size&&r.duration===n.duration&&r.colorFrom===n.colorFrom&&r.colorTo===n.colorTo&&r.children===n.children);H.displayName="BorderBeam";const[q,D]=A("RippleButtonContext");function U({ref:r,onClick:n,hoverScale:m=1.05,tapScale:f=.95,asChild:p=!1,style:d,...u}){const[l,e]=a.useState([]),h=a.useRef(null);a.useImperativeHandle(r,()=>h.current);const y=a.useCallback(c=>{const g=h.current;if(!g)return;const v=g.getBoundingClientRect(),S=c.clientX-v.left,E=c.clientY-v.top,R={id:Date.now(),x:S,y:E};e(x=>[...x,R]),setTimeout(()=>{e(x=>x.filter(w=>w.id!==R.id))},600)},[]),k=a.useCallback(c=>{y(c),n&&n(c)},[y,n]),$=p?M:j.button;return o.jsx(q,{value:{ripples:l,setRipples:e},children:o.jsx($,{ref:h,"data-slot":"ripple-button",onClick:k,whileTap:{scale:f},whileHover:{scale:m},style:{position:"relative",overflow:"hidden",...d},...u})})}function W({color:r="var(--ripple-button-ripple-color)",scale:n=10,transition:m={duration:.6,ease:"easeOut"},asChild:f=!1,style:p,...d}){const{ripples:u}=D(),l=f?M:j.span;return u.map(e=>o.jsx(l,{initial:{scale:0,opacity:.5},animate:{scale:n,opacity:0},transition:m,style:{position:"absolute",borderRadius:"50%",pointerEvents:"none",width:"20px",height:"20px",backgroundColor:r,top:e.y-10,left:e.x-10,...p},...d},e.id))}export{H as B,U as R,W as a};
