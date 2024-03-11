import{j as e,M,T as S,P as c,r as x,S as N,I as D,m as y,n as F,o as P,p as H,D as U,W}from"./index-d4e8af47.js";import{T as b,a as m,L as q,b as V,c as z,d as B,e as $,f as G,g as Y}from"./TableSortLabel-03e1b8ba.js";import{C as J}from"./Container-55e8b586.js";import{C as K}from"./Select-534ecbdb.js";function C({query:n}){return e.jsx(b,{children:e.jsx(m,{align:"center",colSpan:6,sx:{py:3},children:e.jsx(M,{sx:{textAlign:"center"},children:e.jsx(S,{variant:"h6",paragraph:!0,children:"No Data found"})})})})}C.propTypes={query:c.string};function R({name:n,role:s,status:t,company:l,isVerified:i}){const[a,d]=x.useState(null),f=j=>{d(j.currentTarget)},p=()=>{d(null)};return e.jsxs(e.Fragment,{children:[e.jsxs(b,{hover:!0,tabIndex:-1,children:[e.jsx(m,{component:"th",scope:"row",padding:"none",children:e.jsx(N,{direction:"row",alignItems:"center",spacing:2,children:e.jsx(S,{variant:"subtitle2",noWrap:!0,children:n})})}),e.jsx(m,{children:l}),e.jsx(m,{children:s}),e.jsx(m,{align:"center",children:i?"Yes":"No"}),e.jsx(m,{children:e.jsx(q,{color:t==="banned"&&"error"||"success",children:t})}),e.jsx(m,{align:"right",children:e.jsx(D,{onClick:f,children:e.jsx(y,{icon:"eva:more-vertical-fill"})})})]}),e.jsxs(F,{open:!!a,anchorEl:a,onClose:p,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{sx:{width:140}},children:[e.jsxs(P,{onClick:p,children:[e.jsx(y,{icon:"eva:edit-fill",sx:{mr:2}}),"Edit"]}),e.jsxs(P,{onClick:p,sx:{color:"error.main"},children:[e.jsx(y,{icon:"eva:trash-2-outline",sx:{mr:2}}),"Delete"]})]})]})}R.propTypes={name:c.any,role:c.any,company:c.any,status:c.string,isVerified:c.any};const Q={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function X(n,s,t){return n?Math.max(0,(1+n)*s-t):0}function v(n,s,t){return n[t]===null?1:s[t]===null||s[t]<n[t]?-1:s[t]>n[t]?1:0}function Z(n,s){return n==="desc"?(t,l)=>v(t,l,s):(t,l)=>-v(t,l,s)}function ee({inputData:n,comparator:s,filterName:t}){const l=n.map((i,a)=>[i,a]);return l.sort((i,a)=>{const d=s(i[0],a[0]);return d!==0?d:i[1]-a[1]}),n=l.map(i=>i[0]),t&&(n=n.filter(i=>i.name.toLowerCase().indexOf(t.toLowerCase())!==-1)),n}function k({order:n,orderBy:s,headLabel:t,onRequestSort:l}){const i=a=>d=>{l(d,a)};return e.jsx(V,{children:e.jsx(b,{children:t.map(a=>e.jsx(m,{align:a.align||"left",sortDirection:s===a.id?n:!1,sx:{width:a.width,minWidth:a.minWidth},children:e.jsxs(z,{hideSortIcon:!0,active:s===a.id,direction:s===a.id?n:"asc",onClick:i(a.id),children:[a.label,s===a.id?e.jsx(H,{sx:{...Q},children:n==="desc"?"sorted descending":"sorted ascending"}):null]})},a.id))})})}k.propTypes={order:c.oneOf(["asc","desc"]),orderBy:c.string,headLabel:c.array,onRequestSort:c.func};function w({emptyRows:n,height:s}){return n?e.jsx(b,{sx:{...s&&{height:s*n}},children:e.jsx(m,{colSpan:9})}):null}w.propTypes={emptyRows:c.number,height:c.number};const ne=[{id:"bookingId",label:"Booking Id"},{id:"employeeId",label:"Employee Id"},{id:"center",label:"Center Name"},{id:"booking_status",label:"Booking Status"},{id:"reports",label:"Reports"},{id:"company_name",label:"Company Name"},{id:"package_type",label:"Package Type"},{id:"package_name",label:"Package Name"},{id:"division",label:"Division"},{id:"first_name",label:"First Name"},{id:"last_name",label:"Last Name"},{id:"mobile",label:"Mobile"},{id:"email",label:"Email"},{id:"visit_type",label:"Visit Type"},{id:"appointment_date",label:"Appointment Date"},{id:"appointment_time",label:"Appointment Time"},{id:"Payment Status",label:"Payment Status"},{id:"city",label:"City"},{id:"state",label:"State"},{id:"pin_code",label:"Pin Code"},{id:"updated_at",label:"Updated At"},{id:"created_at",label:"Created At"}],te={TABLE_HEADERS:ne},{TABLE_HEADERS:ae}=te,g=[];function se(){const[n,s]=x.useState(0),[t,l]=x.useState("asc"),[i,a]=x.useState([]),[d,f]=x.useState("name"),[p,j]=x.useState(5),E=(r,o)=>{o!==""&&(l(d===o&&t==="asc"?"desc":"asc"),f(o))},A=r=>{if(r.target.checked){const o=g.map(h=>h.name);a(o);return}a([])},_=(r,o)=>{const h=i.indexOf(o);let u=[];h===-1?u=u.concat(i,o):h===0?u=u.concat(i.slice(1)):h===i.length-1?u=u.concat(i.slice(0,-1)):h>0&&(u=u.concat(i.slice(0,h),i.slice(h+1))),a(u)},I=(r,o)=>{s(o)},O=r=>{s(0),j(parseInt(r.target.value,10))},T=ee({inputData:g,comparator:Z(t,d)}),L=!T.length;return e.jsxs(J,{children:[e.jsx(S,{mb:5,variant:"h4",children:"My Reports"}),e.jsxs(K,{children:[e.jsx(U,{children:e.jsx(B,{sx:{overflow:"unset"},children:e.jsxs($,{sx:{minWidth:800},children:[e.jsx(k,{order:t,orderBy:d,rowCount:g.length,numSelected:i.length,onRequestSort:E,onSelectAllClick:A,headLabel:ae}),e.jsxs(G,{children:[T.slice(n*p,n*p+p).map(r=>e.jsx(R,{name:r.name,role:r.role,status:r.status,company:r.company,avatarUrl:r.avatarUrl,isVerified:r.isVerified,selected:i.indexOf(r.name)!==-1,handleClick:o=>_(o,r.name)},r.id)),e.jsx(w,{height:77,emptyRows:X(n,p,g.length)}),L&&e.jsx(C,{})]})]})})}),e.jsx(Y,{page:n,component:"div",count:g.length,rowsPerPage:p,onPageChange:I,rowsPerPageOptions:[5,10,25],onRowsPerPageChange:O})]})]})}function ce(){return e.jsxs(e.Fragment,{children:[e.jsx(W,{children:e.jsx("title",{children:" Reports "})}),e.jsx(se,{})]})}export{ce as default};
