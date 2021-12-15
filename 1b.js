console.time("2")
var sa=["array","pivox","rama","night"];
for(var i = 0; i < sa.length; i++)
{
    if(sa[i].indexOf('p') != -1){
        console.log(sa[i]);
    }
}
console.timeEnd("2");