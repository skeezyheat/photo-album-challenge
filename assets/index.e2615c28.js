var L=Object.defineProperty,M=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var j=(e,t,o)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,v=(e,t)=>{for(var o in t||(t={}))k.call(t,o)&&j(e,o,t[o]);if(w)for(var o of w(t))P.call(t,o)&&j(e,o,t[o]);return e},y=(e,t)=>M(e,C(t));var $=(e,t)=>{var o={};for(var i in e)k.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(e!=null&&w)for(var i of w(e))t.indexOf(i)<0&&P.call(e,i)&&(o[i]=e[i]);return o};import{j as A,s as c,c as S,r as b,a as R,W as F,R as N,b as W}from"./vendor.1d42b592.js";const z=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}};z();const l=A.exports.jsx,f=A.exports.jsxs,B=A.exports.Fragment,I=c.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`,O=c.div`
  &,
  &:before,
  &:after {
    border-radius: 50%;
    background-color: #e05d5b;
    animation: grow 4s ease-in-out infinite;
    animation-fill-mode: both;
    width: 2rem;
    height: 2rem;
  }

  & {
    color: #fff;
    text-indent: -9999rem;
    position: relative;
    animation-delay: -0.25s;
    transform: translateZ(0);
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
  }

  &:before {
    left: -2.5rem;
    animation-delay: -0.75s;
  }

  &:after {
    right: -2.5rem;
  }
  @keyframes grow {
    0%,
    50%,
    100% {
      transform: scale(1);
    }
    25%,
    75% {
      transform: scale(1.2);
    }
  }
`,G=()=>l(I,{children:l(O,{children:"Loading"})}),H=c.div`
  padding: 0.5rem 0;
  width: 100%;
`,T=c.button`
  width: 100%;
  height: 2rem;
  font-weight: bold;
  border: 1px solid;
  border-radius: 0.25rem;
  background-color: ${e=>e.variant==="danger"?"#ff1744":"transparent"};
  color: ${e=>e.variant==="danger"?"#fff":"#333"};
  border-color: ${e=>e.variant==="danger"?"#b2102f":"transparent"};
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    background-color: ${e=>e.variant==="danger"?"#b2102f":"#e1e1e1"};
    border-color: ${e=>e.variant==="danger"?"#b2102f":"#888"};
  }
`,x=i=>{var r=i,{variant:e="primary",children:t}=r,o=$(r,["variant","children"]);return l(H,{children:l(T,y(v({variant:e},o),{children:t}))})},U=async()=>{try{const e=await fetch("https://jsonplaceholder.typicode.com/albums");if(!e.ok)throw new Error("Something went wrong while fetching albums");return e.json()}catch(e){return Promise.reject(e)}},E=async e=>{try{const t=await fetch(`https://jsonplaceholder.typicode.com/albums/${e}/photos`);if(!t.ok)throw new Error(`Something went wrong while fetching photos for album ${e}`);return t.json()}catch(t){return Promise.reject(t)}},h=S(e=>({loading:!0,setLoading:t=>e({loading:t}),albums:[],setAlbums:t=>e({albums:t}),selectedAlbum:0,setSelectedAlbum:t=>e({selectedAlbum:t}),photos:[],setPhotos:t=>e({photos:t}),modal:null,setModal:t=>e({modal:t}),removePhoto:t=>{e(o=>{const i=o.photos.filter(s=>s.id!==t),r=o.albums.map(s=>(s.id===o.selectedAlbum&&(s.photos=i),s));return console.log(`Photo with id ${t} removed form album ${o.selectedAlbum}`),console.log("New state",{photos:i,album:r[o.selectedAlbum-1]}),{photos:i,albums:r}})},movePhoto:(t,o)=>{e(i=>{const r=i.photos.find(d=>d.id===t),s=i.photos.filter(d=>d.id!==t),a=i.albums.map(d=>(d.id===i.selectedAlbum&&(d.photos=s),d.id===o&&(d.photos.length===0?E(o).then(p=>{r&&(i.albums[o-1].photos=[...p,r])}):r&&d.photos.push(r)),d));return console.log(`Photo with id ${t} moved from ${i.selectedAlbum} to album ${o}`),console.log(`Check the photo at the end of the album ${o}`),console.log("New state",{currentAlbum:a[i.selectedAlbum-1],photos:s,newAlbum:a[o-1]}),{photos:s,albums:a}})}})),q=c.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  animation: fadeIn 0.2s ease-in-out;
  z-index: 10;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,D=c.div`
  position: relative;
  z-index: 20;
  background-color: #fff;
  height: 90vh;
  width: 90vw;
  max-height: 700px;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  padding: 1rem;
`,K=c(x)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  height: 2rem;
  width: 2rem;
`,X=c.img`
  width: 80%;
  max-width: 400px;
  height: auto;
`,Z=c.h2`
  font-size: 1.125rem;
  margin: 1rem 0;
  text-align: center;
`,J=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,Q=c.h3`
  font-size: 0.875rem;
  margin: 0.5rem 0;
  text-align: center;
  color: #000;
`,V=()=>{const e=h(n=>n.modal),t=h(n=>n.albums),o=h(n=>n.setModal),i=h(n=>n.removePhoto),r=h(n=>n.movePhoto),s=b.exports.useRef(null),a=()=>{o(null)},d=n=>{i(n),a()},p=(n,m)=>{const u=window.prompt("Enter the album number to move the photo to");if(u){const g=parseInt(u,10);if(!Number.isNaN(g)&&g!==m&&g>0&&g<=t.length)r(n,g),a();else return window.alert("Please enter a valid album number.")}};return b.exports.useEffect(()=>{const n=m=>{m.key==="Escape"&&a()};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[]),b.exports.useEffect(()=>{const n=m=>{s.current&&!s.current.contains(m.target)&&a()};return s.current&&document.addEventListener("click",n,!0),()=>{document.removeEventListener("click",n,!0)}},[s]),l(q,{children:f(D,{ref:s,children:[l(K,{onClick:a,children:"X"}),l(X,{src:e==null?void 0:e.photo.url}),l(Z,{children:e==null?void 0:e.photo.title}),f(Q,{children:["Photo ",e==null?void 0:e.photo.id," from Album #",e==null?void 0:e.photo.albumId]}),l(J,{children:l(x,{onClick:()=>p(e==null?void 0:e.photo.id,e==null?void 0:e.photo.albumId),children:"Move Photo"})}),l(x,{onClick:()=>d(e==null?void 0:e.photo.id),variant:"danger",children:"Remove From Album"})]})})},Y=c.nav`
  max-height: 100vh;
  height: 100%;
  width: 100%;
  background-color: #f1f1f1;
  border-right: 2px solid #ccc;
  overflow: auto;
`,_=c.div`
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`,ee=c(x)`
  @media (max-width: 768px) {
    font-size: 0.75rem;
    height: 2.25rem;
  }
`,te=()=>{const e=h(o=>o.albums),t=h(o=>o.setSelectedAlbum);return l(Y,{children:l(_,{children:e.map(o=>f(ee,{onClick:()=>t(o.id),children:["Album #",o.id]},o.id))})})},oe=c.main`
  max-height: 100vh;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: #fff;
`,re=c.h1`
  text-align: center;
  font-size: 1.5rem;
`,ne=c.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 1em 1em;
  grid-template-areas: '. . .';
  width: 75%;
  margin: 0 auto;
`,ie=c.div`
  margin: 0 auto;
  transition: transform 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.125);
  }
`,se=()=>{const e=h(r=>r.photos),t=h(r=>r.selectedAlbum),o=h(r=>r.setModal),i=r=>{o({photo:r})};return f(oe,{children:[f(re,{children:["Album #",t," "]}),l(ne,{children:e.map(r=>l(ie,{role:"button",onClick:()=>i(r),children:l("img",{src:r.thumbnailUrl,alt:r.title})},r.id))})]})},le=c.div`
  display: grid;
  grid-template-columns: 0.3fr 1.7fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: '. .';
  @media (max-width: 768px) {
    grid-template-columns: 0.5fr 1.5fr;
  }
`,ce=()=>{const e=h(t=>t.modal);return f(le,{children:[l(te,{}),l(se,{}),e&&l(V,{})]})},ae=c.div`
  position: relative;
  max-height: 100vh;
  height: 100%;
  width: 100%;
`,de=()=>{const[e,t,o,i,r,s,a]=h(n=>[n.loading,n.setLoading,n.albums,n.setAlbums,n.selectedAlbum,n.setSelectedAlbum,n.setPhotos],R),d=async()=>{try{const n=await U();s(n[0].id);const m=n.map(u=>y(v({},u),{photos:[]}));i(m)}catch(n){console.log(n),console.log("Failed to fetch initial data")}finally{t(!1)}},p=async()=>{t(!0);try{const n=await E(r),m=o.map(u=>u.id===r?y(v({},u),{photos:n}):u);i(m),a(n)}catch(n){console.log(n),console.log("Failed to fetch photo set")}finally{t(!1)}};return b.exports.useEffect(()=>{d()},[]),b.exports.useEffect(()=>{o.length>0&&(o[r-1].photos&&o[r-1].photos.length===0?p():a(o[r-1].photos))},[r,o]),l(B,{children:f(ae,{children:[e&&l(G,{}),l(ce,{})]})})},he=F`
html,
body {
  height: 100%;
  width: 100%;
  font-size: 16px;
}

body {
  display: flex;
  font-family: Helvetica, sans-serif;
}

#root {
  height: 100%;
  width: 100%;
  flex: 1;
  background-color: #f1f1f1;
}
`;N.render(f(W.StrictMode,{children:[l(he,{}),l(de,{})]}),document.getElementById("root"));
