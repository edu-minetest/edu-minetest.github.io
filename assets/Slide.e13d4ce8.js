import{f as m,v as r,k as t,x as v,h as o,C as h,y as s}from"./app.2182db58.js";const d=()=>o(s,{name:"back"},()=>o("path",{d:"M1014.749 449.156v125.688H260.626l345.64 345.64-89.239 89.237L19.307 512l497.72-497.721 89.238 89.238-345.64 345.64h754.124z"})),b=()=>o(s,{name:"home"},()=>o("path",{d:"M780.106 420.978L506.994 147.866 233.882 420.978h.045v455.11H780.06v-455.11h.046zm90.977 90.976V876.09a91.022 91.022 0 01-91.023 91.022H233.927a91.022 91.022 0 01-91.022-91.022V511.954l-67.22 67.175-64.307-64.307 431.309-431.31c35.498-35.498 93.115-35.498 128.614 0l431.309 431.31-64.307 64.307L871.083 512z"}));var p=m({name:"SlidePage",setup(){const c=r(),e=t(!1),a=t(null),l=()=>{e.value=!e.value},n=()=>{e.value=!1},u=()=>{n(),window.history.go(-1)},i=()=>{n(),c.push("/")};return v(a,n),()=>o("div",{class:"presentation"},[o(h),o("div",{ref:a,class:["menu",{active:e.value}]},[o("button",{class:"menu-button",onClick:()=>l()},o("span",{class:"icon"})),o("button",{class:"back-button",onClick:()=>u()},o(d)),o("button",{class:"home-button",onClick:()=>i()},o(b))])])}});export{p as default};
