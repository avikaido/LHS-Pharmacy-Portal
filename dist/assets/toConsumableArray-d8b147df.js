import{a4 as i,c1 as s,c2 as l,ab as u}from"./index-1d78c4ac.js";function p(r,o){if(r==null)return{};var t,e,a=i(r,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);for(e=0;e<n.length;e++)t=n[e],o.includes(t)||{}.propertyIsEnumerable.call(r,t)&&(a[t]=r[t])}return a}function b(r){if(Array.isArray(r))return s(r)}function y(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m(r){return b(r)||l(r)||u(r)||y()}export{p as _,m as a};