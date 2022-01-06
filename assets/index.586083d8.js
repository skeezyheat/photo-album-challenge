var E=Object.defineProperty,L=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var P=(e,t,r)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,w=(e,t)=>{for(var r in t||(t={}))A.call(t,r)&&P(e,r,t[r]);if(b)for(var r of b(t))k.call(t,r)&&P(e,r,t[r]);return e},v=(e,t)=>L(e,M(t));var j=(e,t)=>{var r={};for(var n in e)A.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&b)for(var n of b(e))t.indexOf(n)<0&&k.call(e,n)&&(r[n]=e[n]);return r};import{j as x,s as a,c as C,r as g,a as S,W as R,R as F,b as N}from"./vendor.1d42b592.js";const W=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const h of i.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&n(h)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}};W();const s=x.exports.jsx,f=x.exports.jsxs,z=x.exports.Fragment,B=a.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`,I=a.div`
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
`,O=()=>s(B,{children:s(I,{children:"Loading"})}),G=a.div`
  padding: 0.5rem 0;
  width: 100%;
`,H=a.button`
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
`,y=n=>{var o=n,{variant:e="primary",children:t}=o,r=j(o,["variant","children"]);return s(G,{children:s(H,v(w({variant:e},r),{children:t}))})},T=async()=>{try{const e=await fetch("https://jsonplaceholder.typicode.com/albums");if(!e.ok)throw new Error("Something went wrong while fetching albums");return e.json()}catch(e){return Promise.reject(e)}},$=async e=>{try{const t=await fetch(`https://jsonplaceholder.typicode.com/albums/${e}/photos`);if(!t.ok)throw new Error(`Something went wrong while fetching photos for album ${e}`);return t.json()}catch(t){return Promise.reject(t)}},m=C(e=>({loading:!0,setLoading:t=>e({loading:t}),albums:[],setAlbums:t=>e({albums:t}),selectedAlbum:0,setSelectedAlbum:t=>e({selectedAlbum:t}),photos:[],setPhotos:t=>e({photos:t}),modal:null,setModal:t=>e({modal:t}),removePhoto:t=>{e(r=>{const n=r.photos.filter(i=>i.id!==t),o=r.albums.map(i=>(i.id===r.selectedAlbum&&(i.photos=n),i));return console.log(`Photo with id ${t} removed form album ${r.selectedAlbum}`),console.log("New state",{photos:n,album:o[r.selectedAlbum-1]}),{photos:n,albums:o}})},movePhoto:(t,r)=>{e(n=>{const o=n.photos.find(d=>d.id===t),i=n.photos.filter(d=>d.id!==t),h=n.albums.map(d=>(d.id===n.selectedAlbum&&(d.photos=i),d.id===r&&(d.photos.length===0?$(r).then(c=>{o&&(n.albums[r-1].photos=[...c,o])}):o&&d.photos.push(o)),d));return console.log(`Photo with id ${t} moved from ${n.selectedAlbum} to album ${r}`),console.log(`Check the photo at the end of the album ${r}`),console.log("New state",{currentAlbum:h[n.selectedAlbum-1],photos:i,newAlbum:h[r-1]}),{photos:i,albums:h}})}})),U=a.div`
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
`,q=a.div`
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
`,D=a(y)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  height: 2rem;
  width: 2rem;
`,K=a.img`
  width: 80%;
  max-width: 400px;
  height: auto;
`,X=a.h2`
  font-size: 1.125rem;
  margin: 1rem 0;
  text-align: center;
`,Z=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,J=a.h3`
  font-size: 0.875rem;
  margin: 0.5rem 0;
  text-align: center;
  color: #000;
`,Q=()=>{const e=m(c=>c.modal),t=m(c=>c.setModal),r=m(c=>c.removePhoto),n=m(c=>c.movePhoto),o=g.exports.useRef(null),i=()=>{t(null)},h=c=>{r(c),i()},d=(c,l)=>{const p=window.prompt("Enter the album number to move the photo to");if(p){const u=parseInt(p,10);if(!Number.isNaN(u)&&u!==l&&u>0)n(c,u),i();else return window.alert("Please enter a valid album number.")}};return g.exports.useEffect(()=>{const c=l=>{l.key==="Escape"&&i()};return window.addEventListener("keydown",c),()=>{window.removeEventListener("keydown",c)}},[]),g.exports.useEffect(()=>{const c=l=>{o.current&&!o.current.contains(l.target)&&i()};return o.current&&document.addEventListener("click",c,!0),()=>{document.removeEventListener("click",c,!0)}},[o]),s(U,{children:f(q,{ref:o,children:[s(D,{onClick:i,children:"X"}),s(K,{src:e==null?void 0:e.photo.url}),s(X,{children:e==null?void 0:e.photo.title}),f(J,{children:["Photo ",e==null?void 0:e.photo.id," from Album #",e==null?void 0:e.photo.albumId]}),s(Z,{children:s(y,{onClick:()=>d(e==null?void 0:e.photo.id,e==null?void 0:e.photo.albumId),children:"Move Photo"})}),s(y,{onClick:()=>h(e==null?void 0:e.photo.id),variant:"danger",children:"Remove From Album"})]})})},V=a.nav`
  max-height: 100vh;
  height: 100%;
  width: 100%;
  background-color: #f1f1f1;
  border-right: 2px solid #ccc;
  overflow: auto;
`,Y=a.div`
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`,_=a(y)`
  @media (max-width: 768px) {
    font-size: 0.75rem;
    height: 2.25rem;
  }
`,ee=()=>{const e=m(r=>r.albums),t=m(r=>r.setSelectedAlbum);return s(V,{children:s(Y,{children:e.map(r=>f(_,{onClick:()=>t(r.id),children:["Album #",r.id]},r.id))})})},te=a.main`
  max-height: 100vh;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: #fff;
`,oe=a.h1`
  text-align: center;
  font-size: 1.5rem;
`,re=a.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 1em 1em;
  grid-template-areas: '. . .';
  width: 75%;
  margin: 0 auto;
`,ne=a.div`
  margin: 0 auto;
  transition: transform 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.125);
  }
`,ie=()=>{const e=m(o=>o.photos),t=m(o=>o.selectedAlbum),r=m(o=>o.setModal),n=o=>{r({photo:o})};return f(te,{children:[f(oe,{children:["Album #",t," "]}),s(re,{children:e.map(o=>s(ne,{role:"button",onClick:()=>n(o),children:s("img",{src:o.thumbnailUrl,alt:o.title})},o.id))})]})},se=a.div`
  display: grid;
  grid-template-columns: 0.3fr 1.7fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: '. .';
  @media (max-width: 768px) {
    grid-template-columns: 0.5fr 1.5fr;
  }
`,le=()=>{const e=m(t=>t.modal);return f(se,{children:[s(ee,{}),s(ie,{}),e&&s(Q,{})]})},ce=a.div`
  position: relative;
  max-height: 100vh;
  height: 100%;
  width: 100%;
`,ae=()=>{const[e,t,r,n,o,i,h]=m(l=>[l.loading,l.setLoading,l.albums,l.setAlbums,l.selectedAlbum,l.setSelectedAlbum,l.setPhotos],S),d=async()=>{try{const l=await T();i(l[0].id);const p=l.map(u=>v(w({},u),{photos:[]}));n(p)}catch(l){console.log(l),console.log("Failed to fetch initial data")}finally{t(!1)}},c=async()=>{t(!0);try{const l=await $(o),p=r.map(u=>u.id===o?v(w({},u),{photos:l}):u);n(p),h(l)}catch(l){console.log(l),console.log("Failed to fetch photo set")}finally{t(!1)}};return g.exports.useEffect(()=>{d()},[]),g.exports.useEffect(()=>{r.length>0&&(r[o-1].photos&&r[o-1].photos.length===0?c():h(r[o-1].photos))},[o,r]),s(z,{children:f(ce,{children:[e&&s(O,{}),s(le,{})]})})},de=R`
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
`;F.render(f(N.StrictMode,{children:[s(de,{}),s(ae,{})]}),document.getElementById("root"));
