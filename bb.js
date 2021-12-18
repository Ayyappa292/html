var _=require("underscore");
 var student = [
    {name: 'Sara', age:24},
    {name: 'John', age:22}, 
    {name: 'Jack', age:25},
    {name: 'John', age: 26}
];
console.log(_.min(student,"age"));
var na=2;