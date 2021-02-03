//cpmpare elements of two arrays //


var a=[1,2,3];
var b=[1,2,5];

var c=0;
for(var i=0;i<a.length;i++)
{
if(a[i]==b[i])
{
    c++;
}
}

if(c==a.length)
{
    document.write("Elements are same");
}
else
{
    document.write("the elements are different.");
}