import{a as r,P as l,b as u,Q as n,G as p,R as m,m as f}from"./entry.ee49f7cb.js";import d from"./ContentSlot.e19bbc34.js";/* empty css                 */const _={primary:"heroicons-outline:check",info:"heroicons-outline:information-circle",success:"heroicons-outline:check-circle",warning:"heroicons-outline:exclamation",danger:"heroicons-outline:exclamation-circle"},y=r({props:{icon:{type:String,default:null},type:{type:String,default:"primary",validator:e=>["primary","info","success","warning","danger"].includes(e)}},setup(e){const t=l(),{flatUnwrap:a,unwrap:s}=m(),i=u(()=>e.icon||_[e.type]);return()=>{const c=a((t.default&&t.default())??[],["ul"]).map(o=>s(o,["li"]));return n("ul",c.map(o=>n("li",[n("span",{class:`list-icon ${e.type}`},n(p,{name:i.value,class:"icon"})),n("span",n(d,{use:()=>o}))])))}}}),x=f(y,[["__scopeId","data-v-6109395b"]]);export{x as default};
