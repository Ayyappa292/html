 //    this function is used for Validation of full name 
 function fullname(){
    var name=document.getElementById("name").value;
    var namepattern=/^[A-Z][A-Z\s]*$/;
    localStorage.setItem("name",name);
    namepattern.test(name)?document.getElementById("name").style.backgroundColor='white':document.getElementById("name").style.backgroundColor='red'
    }
    
    //    this function is used for Validation of username 
    function username()
    {
    var uname=document.getElementById("uname").value;
    var unamepattern=/^[a-zA-Z0-9_]{3,15}$/;
    localStorage.setItem("uname",uname);
    unamepattern.test(uname)?document.getElementById("uname").style.backgroundColor='white':document.getElementById("uname").style.backgroundColor='red'
    }

    //    this function is used for Validation of emailid
    function emailid()
    {
    var email=document.getElementById("email").value;
    var emailpattern=/^([A-Za-z0-9_\-\.])+\@([gmail|GMAIL])+\.(com)$/;
    localStorage.setItem("email",email);
    emailpattern.test(email)?document.getElementById("email").style.backgroundColor='white':document.getElementById("email").style.backgroundColor='red'
    }

//    this function is used for Validation of password
    function password()
    {
    var pass=document.getElementById("pass").value;
    var passpattern=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    localStorage.setItem("pass",pass);
    passpattern.test(pass)?document.getElementById("pass").style.backgroundColor='white':document.getElementById("pass").style.backgroundColor='red'
    }

    //    this function is used for Validation of mobile number
    function number()
    {
    var no=document.getElementById("no").value;
    var nopattern=/^[0-9]{10}$/;
    localStorage.setItem("no",no);
    nopattern.test(no)?document.getElementById("no").style.backgroundColor='white':document.getElementById("no").style.backgroundColor='red'   
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
    function check(){
    var name=document.getElementById("name").value;
    var uname=document.getElementById("uname").value;
    var email=document.getElementById("email").value;
    var pass=document.getElementById("pass").value;
    var no=document.getElementById("no").value; 
        if(name==""||uname==""||email==""||pass==""||no=="")
    {
        alert("please enter all the details");
    }
    else
    {
        alert("your details are submitted successfully");
    }
    }
    