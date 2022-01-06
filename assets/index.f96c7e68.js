var M=Object.defineProperty,S=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var P=(e,t,r)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t)=>{for(var r in t||(t={}))x.call(t,r)&&P(e,r,t[r]);if(g)for(var r of g(t))A.call(t,r)&&P(e,r,t[r]);return e},v=(e,t)=>S(e,C(t));var k=(e,t)=>{var r={};for(var n in e)x.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&g)for(var n of g(e))t.indexOf(n)<0&&A.call(e,n)&&(r[n]=e[n]);return r};import{j as w,s as c,c as L,a as E,r as j,W,R as F,b as R}from"./vendor.1d42b592.js";const z=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const h of i.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&n(h)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}};z();const l=w.exports.jsx,f=w.exports.jsxs,B=w.exports.Fragment,I=c.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`,N=c.div`
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
`,O=()=>l(I,{children:l(N,{children:"Loading"})}),G=c.div`
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
`,y=n=>{var o=n,{variant:e="primary",children:t}=o,r=k(o,["variant","children"]);return l(G,{children:l(T,v(b({variant:e},r),{children:t}))})},U=async()=>{try{const e=await fetch("https://jsonplaceholder.typicode.com/albums");if(!e.ok)throw new Error("Something went wrong while fetching albums");return e.json()}catch(e){return Promise.reject(e)}},$=async e=>{try{console.log(e);const t=await fetch(`https://jsonplaceholder.typicode.com/albums/${e}/photos`);if(!t.ok)throw new Error(`Something went wrong while fetching photos for album ${e}`);return t.json()}catch(t){return Promise.reject(t)}},d=L(e=>({loading:!0,setLoading:t=>e({loading:t}),albums:[],setAlbums:t=>e({albums:t}),selectedAlbum:0,setSelectedAlbum:t=>e({selectedAlbum:t}),photos:[],setPhotos:t=>e({photos:t}),modal:null,setModal:t=>e({modal:t}),removePhoto:t=>{e(r=>{const n=r.photos.filter(i=>i.id!==t),o=r.albums.map(i=>(i.id===r.selectedAlbum&&(i.photos=n),i));return console.log(`Photo with id ${t} removed form album ${r.selectedAlbum}`),{photos:n,albums:o}})},movePhoto:(t,r)=>{e(n=>{const o=n.photos.find(s=>s.id===t),i=n.photos.filter(s=>s.id!==t),h=n.albums.map(s=>(s.id===n.selectedAlbum&&(s.photos=i),s.id===r&&(s.photos.length===0?$(r).then(u=>{o&&(n.albums[r-1].photos=[...u,o])}):o&&s.photos.push(o)),s));return console.log(`Photo with id ${t} moved from ${n.selectedAlbum} to album ${r}`),console.log(`Check the photo at the end of the album ${r}`),{photos:i,albums:h}})}})),q=c.div`
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
  z-index: 10;
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
`,H=c(y)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  height: 2rem;
  width: 2rem;
`,K=c.img`
  width: 80%;
  max-width: 400px;
  height: auto;
`,X=c.h2`
  font-size: 1.125rem;
  margin: 1rem 0;
  text-align: center;
`,Z=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,J=c.h3`
  font-size: 0.875rem;
  margin: 0.5rem 0;
  text-align: center;
  color: #000;
`,Q=()=>{const e=d(s=>s.modal),t=d(s=>s.setModal),r=d(s=>s.removePhoto),n=d(s=>s.movePhoto),o=()=>{t(null)},i=s=>{r(s),o()},h=(s,u)=>{const a=window.prompt("Enter the album number to move the photo to");if(a){const m=parseInt(a,10);if(!Number.isNaN(m)&&m!==u&&m>0)n(s,m),o();else return window.alert("Please enter a valid album number.")}};return l(q,{children:f(D,{children:[l(H,{onClick:o,children:"X"}),l(K,{src:e==null?void 0:e.photo.url}),l(X,{children:e==null?void 0:e.photo.title}),f(J,{children:["Photo ",e==null?void 0:e.photo.id," from Album #",e==null?void 0:e.photo.albumId]}),l(Z,{children:l(y,{onClick:()=>h(e==null?void 0:e.photo.id,e==null?void 0:e.photo.albumId),children:"Move Photo"})}),l(y,{onClick:()=>i(e==null?void 0:e.photo.id),variant:"danger",children:"Remove From Album"})]})})},V=c.nav`
  max-height: 100vh;
  height: 100%;
  width: 100%;
  background-color: #f1f1f1;
  border-right: 2px solid #ccc;
  overflow: auto;
`,Y=c.div`
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`,_=c(y)`
  @media (max-width: 768px) {
    font-size: 0.75rem;
    height: 2.25rem;
  }
`,ee=()=>{const e=d(r=>r.albums),t=d(r=>r.setSelectedAlbum);return l(V,{children:l(Y,{children:e.map(r=>f(_,{onClick:()=>t(r.id),children:["Album #",r.id]},r.id))})})},te=c.main`
  max-height: 100vh;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: #fff;
`,oe=c.h1`
  text-align: center;
  font-size: 1.5rem;
`,re=c.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 1em 1em;
  grid-template-areas: '. . .';
  width: 75%;
  margin: 0 auto;
`,ne=c.div`
  margin: 0 auto;
  transition: transform 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.125);
  }
`,ie=()=>{const e=d(o=>o.photos),t=d(o=>o.selectedAlbum),r=d(o=>o.setModal),n=o=>{r({photo:o})};return f(te,{children:[f(oe,{children:["Album #",t," "]}),l(re,{children:e.map(o=>l(ne,{role:"button",onClick:()=>n(o),children:l("img",{src:o.thumbnailUrl,alt:o.title})},o.id))})]})},se=c.div`
  display: grid;
  grid-template-columns: 0.3fr 1.7fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: '. .';
  @media (max-width: 768px) {
    grid-template-columns: 0.5fr 1.5fr;
  }
`,le=()=>{const e=d(t=>t.modal);return f(se,{children:[l(ee,{}),l(ie,{}),e&&l(Q,{})]})},ce=c.div`
  position: relative;
  max-height: 100vh;
  height: 100%;
  width: 100%;
`,ae=()=>{const[e,t,r,n,o,i,h]=d(a=>[a.loading,a.setLoading,a.albums,a.setAlbums,a.selectedAlbum,a.setSelectedAlbum,a.setPhotos],E),s=async()=>{try{const a=await U();i(a[0].id);const m=a.map(p=>v(b({},p),{photos:[]}));n(m)}catch{console.log("Failed to fetch initial data")}finally{t(!1)}},u=async()=>{t(!0);try{const a=await $(o),m=r.map(p=>p.id===o?v(b({},p),{photos:a}):p);n(m),h(a)}catch(a){console.log(a)}finally{t(!1)}};return j.exports.useEffect(()=>{s()},[]),j.exports.useEffect(()=>{r.length>0&&(r[o-1].photos&&r[o-1].photos.length===0?u():h(r[o-1].photos))},[o,r]),l(B,{children:f(ce,{children:[e&&l(O,{}),l(le,{})]})})},de=W`
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
`;F.render(f(R.StrictMode,{children:[l(de,{}),l(ae,{})]}),document.getElementById("root"));
