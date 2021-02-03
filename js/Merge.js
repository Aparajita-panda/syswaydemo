var a=[1,2,3,3];
var b=[4,5];

var c;
c=a.concat(b);

document.write("The merging value is:"+c+"<br>"+"<br>");

var d=[...new Set(c)];
document.write("Removing the duplicate value:"+d);

