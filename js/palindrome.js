var a=(prompt("enter number"));
var b=parseInt(a);
var tem=b;
var c=0;
for(i=0;i<a.length;i++)
    {
var x=b%10;
var b=Math.floor(b/10);
var c=c*10+x;


}


if(c ==tem)
{
    document.write("palindrome number");
}
else
{
    document.write("not a palindrome number");
}




