console.time("2")
var a=["array","pivox","rama","night"];
for(var i = 0; i < a.length; i++)
{
    if(a[i].indexOf('p') != -1){
        console.log(a[i]);
    }
}
console.timeEnd("2");