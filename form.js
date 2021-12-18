//    this function is used for Validation of full name 
function fullname(){
    var name=document.getElementById("name").value;
    var namepattern=/^[A-Z][A-Z\s]*$/;
    namepattern.test(name)?document.getElementById("name").style.backgroundColor='white':document.getElementById("name").style.backgroundColor='red'
   }
    //    this function is used for Validation of username 
    function username()
    {
    var uname=document.getElementById("uname").value;
    var unamepattern=/^[a-zA-Z0-9_]{3,15}$/;
    unamepattern.test(uname)?document.getElementById("uname").style.backgroundColor='white':document.getElementById("uname").style.backgroundColor='red'
    }

    //    this function is used for Validation of emailid
    function emailid()
    {
    var email=document.getElementById("email").value;
    var emailpattern=/^([A-Za-z0-9_\-\.])+\@([gmail|GMAIL])+\.(com)$/;
    emailpattern.test(email)?document.getElementById("email").style.backgroundColor='white':document.getElementById("email").style.backgroundColor='red'
    }
//    this function is used for Validation of password
    function password()
    {
    var pass=document.getElementById("pass").value;
    var passpattern=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    passpattern.test(pass)?document.getElementById("pass").style.backgroundColor='white':document.getElementById("pass").style.backgroundColor='red'
    }
    //    this function is used for Validation of mobile number
    function number()
    {
    var no=document.getElementById("no").value;
    var nopattern=/^[0-9]{10}$/;
    nopattern.test(no)?document.getElementById("no").style.backgroundColor='white':document.getElementById("no").style.backgroundColor='red'
    }
        // this function is to show the entered data in table
    function show(){
    document.getElementById("display1").innerHTML=document.getElementById("name").value;
    document.getElementById("display2").innerHTML=document.getElementById("uname").value;
    document.getElementById("display3").innerHTML=document.getElementById("email").value;
    document.getElementById("display4").innerHTML=document.getElementById("pass").value;
    document.getElementById("display5").innerHTML=document.getElementById("no").value;
    var name=document.getElementById("name").value;
    var uname=document.getElementById("uname").value;
    var email=document.getElementById("email").value;
    var pass=document.getElementById("pass").value;
    var no=document.getElementById("no").value;
    if(name==""||uname==""||email==""||pass==""||no=="")
    {
        alert("please enter all the details");
    }
    $(document).ready(function(){
        $("#submit").click(function(){
        $("#1").fadeOut();
        $("#2").fadeIn(5000);
        });
        $("#back").click(function(){
        $("#2").fadeOut(1000);
        $("#1").fadeIn(5000);
        });
        });
} 
function visiblepassword(){
        var vp=document.getElementById("pass");
        if(vp.type==="password")
        {
            vp.type="text";
        }
        else
        {
            vp.type="password";
        }
    }  