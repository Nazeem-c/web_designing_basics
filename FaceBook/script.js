$(document).ready(function(){
    $(".sign-up-field").validate({
        rules:{
        fname:{
            required:true,
            minlength:6
        },
        sname:{  required:true,
        minlength:6,
        maxlength:9,
    },
        emailaddress:{
            required:true,
            email:true
        }, 
        password:{
            required:true,
            alphaneumeric:true
        },
        messages:{
            required:"enter first name"
        }} 


       
    })
})



