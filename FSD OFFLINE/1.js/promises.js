const result = new promises(function(resolved,rejected){
var x = 10;
if(x==10){
   resolved(); 
}
if(x<=10){
    rejected();
}
});
console.log(result);