'use strict';
var Home = function () {

    return {
        init: function () {
            $(document).ready(function () {

                Home.CreateRequestFordemo();
                Home.CloseModel();
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

                if ($("#contactname").val() == "" || $("#contactname").val() == null || $("#contactname").val() == undefined) {
                    $("#contactnameId").text("Please Enter Contact Name");
                    return;
                }else{
                    $("#contactnameId").text("");
                }
                if ($("#companyname").val() == "" || $("#companyname").val() == null || $("#companyname").val() == undefined) {
                    $("#companynameId").text("Please Enter Company Name");
                    return;
                }else{
                    $("#companynameId").text("");
                }
                if ($("#jobtitle").val() == "" || $("#jobtitle").val() == null || $("#jobtitle").val() == undefined) {
                    $("#jobtitleId").text("Please Enter Job Title");
                    return;
                }else{
                    $("#jobtitleId").text("");
                }
                if ($("#mobileno").val() == "" || $("#mobileno").val() == null || $("#mobileno").val() == undefined) {
                    $("#mobilenoId").text("Please Enter Contact Number");
                    return;
                }else{
                    $("#mobilenoId").text("");
                }
                if ($("#email").val() == "" || $("#email").val() == null || $("#email").val() == undefined) {
                    $("#emailId").text("Please Enter Email");
                    return;
                }else{
                    $("#emailId").text("");
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
                            document.getElementById("closeModalpopup").click();
                        }
                        else {
                            alert(response.Message);
                            processData: false;
                        }
                    },
                    error: function (xhr, desc, error) {
                        debugger
                        alert("There is some technical issue.please try again");

                    }
                });
            });
        },
        
        CloseModel : function(){
        $('body').on('click', '#closeModalpopup', function () {
            location.reload(true);
            });
    }
       
    }
}();
// Call main organisation init
Home.init();
