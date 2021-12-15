var sa=["zarray5","pivox","ramu1","sita","rama4","night","abc","hello"];
var num=/[a-z][0-9]/;
var alp=/^[^0-9]+$/;
var aa = new RegExp(num, "gi");
var bb = new RegExp(alp,"i");
var sb= sa.filter((elem)=> aa.test(elem));
var sc= sa.filter((elem)=>bb.test(elem));
sc.sort();
sa.sort(function(b,a) {return b-a});
var sd= (a,b) => a.localeCompare(b,'en', { numeric: true })
sb.sort(sd);
console.log(sb);
console.log(sc);
