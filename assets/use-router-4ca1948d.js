import{ad as o,b as a}from"./index-d6637ff8.js";function s(){const e=o();return a.useMemo(()=>({back:()=>e(-1),forward:()=>e(1),reload:()=>window.location.reload(),push:r=>e(r),replace:r=>e(r,{replace:!0})}),[e])}export{s as u};
