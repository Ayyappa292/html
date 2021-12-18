var _=require("underscore");
var oa={name:"ravi",name:"ramu",name:"sita"};
// var sc=oa.toArray();
// var sa=_.toArray(oa);
// var sc=oa.toArray();
var sc=_.sortBy(oa,'key');

console.log(sc);