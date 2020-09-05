'use strict';
var Home = function () {

    var IsValidMobile = true;
    var IsValidEmail = true;
    
    return {
        init: function () {
            $(document).ready(function () {

                Home.CreateRequestFordemo();
                
                $(".modal-body_succsess").hide();
                
                $(".modal-body_Failure").hide();
                
                $("#Submit_Registration_succsess").hide();
                
                $("#Submit_Registration_Failure").hide();
                
                Home.CloseModel();
                Home.DismissModel();
                Home.DismissFailureModel();
                Home.EmailValidation();
                Home.MobileValidation();
            });
        },

        CreateRequestFordemo: function () {
            $('body').on('click', '#Submit_Registration', function () {

                var RegObj = {
                    "Contact_Name": $("#contactname").val(),
                    "Company_Name": $("#companyname").val(),
                    "Email": $("#email").val(),
                    "Job_Title": $("#jobtitle").val(),
                    "MobileNo": $("#mobileno").val(),
                    "Comments": $("#Comments").val()
                }
                
                var checkvalidator = true;

                if ($("#contactname").val() == "" || $("#contactname").val() == null || $("#contactname").val() == undefined) {
                    $("#contactnameId").text("Please Enter Contact Name");
                    checkvalidator = false;
                }else{
                    $("#contactnameId").text("");
                }
                if ($("#companyname").val() == "" || $("#companyname").val() == null || $("#companyname").val() == undefined) {
                    $("#companynameId").text("Please Enter Company Name");
                    checkvalidator = false;
                }else{
                    $("#companynameId").text("");
                }
                if ($("#jobtitle").val() == "" || $("#jobtitle").val() == null || $("#jobtitle").val() == undefined) {
                    $("#jobtitleId").text("Please Enter Job Title");
                     checkvalidator = false;
                }else{
                    $("#jobtitleId").text("");
                }
                if ($("#mobileno").val() == "" || $("#mobileno").val() == null || $("#mobileno").val() == undefined) {
                    $("#mobilenoId").text("Please Enter Contact Number");
                     checkvalidator = false;
                }else{
                    $("#mobilenoId").text("");
                }
                if ($("#email").val() == "" || $("#email").val() == null || $("#email").val() == undefined) {
                    $("#emailId").text("Please Enter Email");
                     checkvalidator = false;
                }else{
                    $("#emailId").text("");
                }
                if(!IsValidEmail){
                    $("#validemailId").text("Please Enter valid Email");
                     checkvalidator = false;
                   }else{
                       $("#validemailId").text("");
                   }
                
                             if(!IsValidMobile){
                    $("#validmobileId").text("Please Enter valid Mobile No");
                     checkvalidator = false;
                   }else{
                       $("#validmobileId").text("");
                   }
     
                if(!checkvalidator){
                    return;
                }
    

                $.ajax({
                    url: 'http://localhost:54428/api/Customer/CreateRequestForDemo',
                    type: 'POST',
                    data: RegObj,
                    headers: {
                        "APICODE":"123456789"
                    },
                    cache: false,
                    async: false,
                    dataType: 'json',
                    success: function (response) {
                        debugger
                        if (response.isSuccess) {
                            
                            $(".modal-body").hide();
                            $(".modal-body_succsess").show();
                             $("#Submit_Registration_succsess").show();
                            $("#Submit_Registration").hide();
                            //document.getElementById("closeModalpopup").click();
                        }
                        else {
                            $("#Submit_Registration_Failure").show();
                            $(".modal-body_Failure").show();
                            $("#Submit_Registration").hide();
                            $(".modal-body").hide();
                            //alert(response.Message);
                            processData: false;
                        }
                    },
                    error: function (xhr, desc, error) {
                        //debugger
                        //alert("There is some technical issue.please try again");

                    }
                });
            });
        },
        
        CloseModel : function(){
        $('body').on('click', '#closeModalpopup', function () {
            document.forms["myForm"].reset();
             $(".modal-body").show();
             $(".modal-body_Failure").hide();
            $(".modal-body_succsess").hide();
            });
            },
        DismissModel : function(){
        $('body').on('click', '#Submit_Registration_succsess', function () {
            document.forms["myForm"].reset();
             $(".modal-body").show();
            $("#Submit_Registration").show();
            $("#Submit_Registration_succsess").hide();
            $("#Submit_Registration_Failure").hide();
             $(".modal-body_Failure").hide();
            $(".modal-body_succsess").hide();
            });
            },
        DismissFailureModel : function(){
        $('body').on('click', '#Submit_Registration_Failure', function () {
            document.forms["myForm"].reset();
             $(".modal-body").show();
            $("#Submit_Registration").show();
            $("#Submit_Registration_succsess").hide();
            $("#Submit_Registration_Failure").hide();
             $(".modal-body_Failure").hide();
            $(".modal-body_succsess").hide();
            });
            },
        
        EmailValidation : function(email){
            $("#email").on("input", function(){
            var email = $("#email").val();
            var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
            if (!filter.test(email)) {
                IsValidEmail = false;
            } else {
                IsValidEmail = true;
           }
          });
        },
        
        MobileValidation : function(mobile){
            $("#mobileno").on("input", function(){
            var mobileno = $("#mobileno").val();
            var filter = /^[6-9][0-9]{9}$/;
            if (!filter.test(mobileno)) {
                IsValidMobile = false;
            } else {
                IsValidMobile = true;

           }
          });
        }
    
        
          
       
    }
}();
// Call main organisation init
Home.init();
