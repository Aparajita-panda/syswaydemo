var a=parseInt(prompt("enter an integer"));
var b;
var text="<table>";

text=text+"<tr>"+"<th>"+"value1"+"</th>";
text=text+"<th>"+"value2"+"</th>";
text=text+"<th>"+"result"+"</th>"+"</tr>";

for(var i=1;i<=10;i++)
{

   b=a*i;
   text=text+"<tr>"+"<td>"+a+"</td>";
   text=text+"<td>"+i+"</td>";
   text=text+"<td>"+b+"</td>"+"</tr>";


}
text=text+"</table>";
document.getElementById('me').innerHTML=text;





