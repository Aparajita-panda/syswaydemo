function myfun()
{
    var a=document.getElementById('fname').Value;
    var b=a.length;
    if(b<1)
    {
        document.getElementById('use').innerHTML="first name is required.";
    }
    else
    {
        document.getElementById('use').innerHTML="";
    }

    var name=document.getElementById('lname').Value;
    var name1=name.length;
    if(name1<1)
    {
        document.getElementById('use1').innerHTML="first name is required.";
    }
    else
    {
        document.getElementById('use1').innerHTML="";
    }

    var Value=document.getElementById('ph').Value;
    var value1=Value.length;
    if(value1<1)
    {
        document.getElementById('use2').innerHTML="first name is required.";
    }
    else
    {
        document.getElementById('use2').innerHTML="";
    }

    
     
}