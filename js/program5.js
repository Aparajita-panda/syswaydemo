
for(var a=1;a<=100;a++)
{
    if(a%2==0)
    document.write(a+"<br>");
    
}
document.write("<hr>");

for(var b=50;b>=1;b--)
{
    
    document.write(b+"<br>");
    b=b-4;
}
document.write("<hr>");
for(let c=65;c<=90;c++)
{
    let str =String.fromCharCode(c);
    document.write(str+"<br>");
}
document.write("<hr>");

for(var d=97;d<=122;d++)
{
    var str=String.fromCharCode(d);
    document.write(str+"<br>");
}
document.write("<hr>");

for(var e=122;e>=97;e--)
{
    var str=String.fromCharCode(e);
    document.write(str+"<br>");
}
document.write("<hr>");

debugger;
sum=0;
for(var i=1;i<=5;i++)
{
    document.write(sum+"<br>");
    sum=sum+i;
}
document.write("<hr>");

 

