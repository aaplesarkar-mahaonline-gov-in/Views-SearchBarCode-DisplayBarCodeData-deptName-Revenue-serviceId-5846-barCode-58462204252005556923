function ValidateBasicInfo() {

    var opt = 0;
    var text = '';


    var obj_ddlSalutation = $("#BasicInformation_Salutation_Value");
    if (obj_ddlSalutation != null && obj_ddlSalutation.val() == '') {

        text += "<br /> - कृपया अर्जदाराच्या संबोधनाची निवड करा.";
        opt = 1;
    }
    



    var obj_ApplicantName = $("#BasicInformation_ApplicantName");
    if (obj_ApplicantName != null && obj_ApplicantName.val() == '') {

        text += "<br /> - कृपया अर्जदाराच्या पूर्ण नावाची (इंग्रजी) नोंद करा";
        opt = 1;
    }
   
    
  
    var obj_ApplicantNameMarathi = $("#BasicInformation_ApplicantNameMarathi");
    if (obj_ApplicantNameMarathi != null && obj_ApplicantNameMarathi.val() == '') {

        text += "<br /> - कृपया अर्जदाराच्या पूर्ण नावाची (मराठी) नोंद करा.";
        opt = 1;
    }
  


    var obj_FatherSalutation = $("#BasicInformation_Father_Salutation_Value");
    if (obj_FatherSalutation != null && obj_FatherSalutation.val() == '') {

        text += "<br /> - कृपया अर्जदाराच्या वडिलांच्या संबोधनाची निवड करा.";
        opt = 1;
    }
   

    var obj_FatherName = $("#BasicInformation_FatherName");
    if (obj_FatherName != null && obj_FatherName.val() == '') {

        text += "<br /> - कृपया अर्जदाराच्या वडिलांच्या पूर्ण नावाची (इंग्रजी) नोंद करा.";
        opt = 1;
    }
    


    var obj_FatherNameMarathi = $("#BasicInformation_FatherNameMarathi");
    if (obj_FatherNameMarathi != null && obj_FatherNameMarathi.val() == '') {

        text += "<br /> - कृपया अर्जदाराच्या वडिलांच्या पूर्ण नावाची (मराठी) नोंद करा.";
        opt = 1;
    }


    
    var obj_txtage = $("#txtage");
    if (obj_txtage != null && obj_txtage.val() == '') {

        text += "<br /> - कृपया अर्जदाराच्या वयाची नोंद करा.";
        opt = 1;
    }
   


    if (obj_txtage.val() == 0) {

        text += "<br /> - कृपया वैध वयाची नोंद करा.";
        opt = 1;
    }
  

    if (obj_txtage.val() > 125) {

        text += "<br /> - वय 125 पेक्षा कमी असावे.";
        opt = 1;
    }
  

    var obj_MobileNo = $("#BasicInformation_ApplicantMobileNo");
    if (obj_MobileNo != null && obj_MobileNo.val() != '') {

        var mobmatch = /^[789]\d{9}$/;
        if (!mobmatch.test(obj_MobileNo.val())) {
            text += "<br /> - वैध भ्रमणध्वनी क्रमांकाची नोंद करा.";
            opt = 1;
        }
    }


    var obj_gender = $("#BasicInformation_Gender_Value");
    if (obj_gender != null && obj_gender.val() == '') {

        text += "<br /> - कृपया अर्जदाराच्या लिंगाची निवड करा.";
        opt = 1;
    }
   





    var obj_Email = $("#BasicInformation_ApplicantEmail");
    if (obj_Email != null && obj_Email.val() != '') {

        var ss = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (!ss.test(obj_Email.val())) {
            text += "<br /> - वैध ई-मेल आयडी ची नोंद करा.";
            opt = 1;
        }
    }
  


    var obj_Occupation = $("#BasicInformation_Occupation_Value");
    if (obj_Occupation != null && obj_Occupation.val() == '') {

        text += "<br /> - कृपया अर्जदाराच्या व्यवसायाची नोंद करा.";
        opt = 1;
    }
    


    var obj_Address_ApplicantAddress = $("#Address_ApplicantAddress");
    if (obj_Address_ApplicantAddress != null && obj_Address_ApplicantAddress.val() == '') {

        text += "<br /> - कृपया अर्जदाराच्या पत्त्याची नोंद करा.";
        opt = 1;
    }
   





    //  var obj_Address_DistrictCode = $("#Address_DistrictCode option:selected").text();
    var obj_Address_DistrictCode = $("#Address_DistrictCode");
    if (obj_Address_DistrictCode != null && obj_Address_DistrictCode.val() == '') {
        text += "<br /> -  	कृपया अर्जदाराच्या जिल्ह्याची निवड करा.";
        var opt = 1;
    }
    


   // var obj_Address_TalukaCode = $("#Address_TalukaCode");
    var obj_Address_TalukaCode = $("#Address_TalukaCode option:selected").text();
    if (obj_Address_TalukaCode != null && (obj_Address_TalukaCode == '' || obj_Address_TalukaCode == '---निवडा---')) {
        text += "<br /> - कृपया अर्जदाराच्या तालुक्याची निवड करा.";
        var opt = 1;
    }
  


   // var obj_Address_VillageCode = $("#Address_VillageCode");
    var obj_Address_VillageCode = $("#Address_VillageCode option:selected").text();
    if (obj_Address_VillageCode != null && (obj_Address_VillageCode == '' || obj_Address_VillageCode == '---निवडा---')) {
        text += "<br /> -  	कृपया अर्जदाराच्या गावाची निवड करा.";
        var opt = 1;
    }
   



    var obj_txtpincode = $("#Address_ApplicantPincode");
    if (obj_txtpincode != null && obj_txtpincode.val() == '') {

        text += "<br /> - कृपया अर्जदाराच्या पिनकोडची नोंद करा.";
        opt = 1;
    }
    


    var pinmatch = /^[4]\d{5}$/;
    if (obj_txtpincode != null && obj_txtpincode.val() != '') {
        if (!pinmatch.test(obj_txtpincode.val())) {
            text += "<br /> - कृपया अर्जदाराच्या वैध पिनकोडची नोंद करा.";
            opt = 1;
        }
        
    }


    return opt + "~" +text;


}


function MobileNoValidation() {
    var MobileNo = $("#BasicInformation_ApplicantMobileNo");
    var sssss = MobileNo.val();
    var isError = 0;
    if (MobileNo.val() != "") {
        if (MobileNo.val().length < 10) {
            MobileNo.val('');
            alertPopup("Alert", "वैध भ्रमणध्वनी क्रमांकाची नोंद करा.");
            return false;
        }
        else if (sssss.charAt(0) == "0") {
            alertPopup("Alert", "वैध भ्रमणध्वनी क्रमांकाची नोंद करा.");
            MobileNo.val('');
            return false;
        }
        else {
            for (var i = 0; i < MobileNo.val().length; i++) {
                if (sssss.charAt(i) == "0") {
                    isError = 1;
                }
                else {
                    return true;
                }
            }
            if (isError == "1") {
                alertPopup("Alert", "वैध भ्रमणध्वनी क्रमांकाची नोंद करा.");
                MobileNo.val('');
                return false;
            }
        }
    }
}

$(document).ready(function () {

// name on uppercase
    $("#BasicInformation_FatherName").change(function () {
        var obj_FatherName = $("#BasicInformation_FatherName");
        obj_FatherName.val(toProperCase(obj_FatherName.val()));
    });



    $("#BasicInformation_ApplicantName").change(function () {
        var obj_ApplicantName = $("#BasicInformation_ApplicantName");
        obj_ApplicantName.val(toProperCase(obj_ApplicantName.val()));
    });


    $("#DeceseDetails_DeceseFullName").change(function () {
        var obj_ApplicantName = $("#DeceseDetails_DeceseFullName");
        obj_ApplicantName.val(toProperCase(obj_ApplicantName.val()));
    });
    //end here

});

function toProperCase(s) {
return s.toLowerCase().replace(/^(.)|\s(.)/g,
    function ($1) { return $1.toUpperCase(); });
}



//Calculate Age

function checkDate(input) {

    
    var date1 = new Date();
    var dob = $("#" + input.id).val(); //$('#txtOrganiserDOB').val();
    if (dob != '') {
        var obj_txtage = $("#txtage");

     }

    //alert(dob);
    var d = dob.split("/");
    var dateTimeInput = new Date(d[1] + "/" + d[0] + "/" + d[2]);
    var date2 = new Date(dateTimeInput);
    var pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/; //Regex to validate date format (dd/mm/yyyy)
    if (pattern.test(dob)) {
        var y1 = date1.getFullYear(); //getting current year
        var y2 = date2.getFullYear(); //getting dob year
        var age = y1 - y2; //calculating age
        //$('#txtOrganiserDOB').val(dob);
        alert(age);
        if (age < 126) {
            alert("Maximum age should not exceed 125 years");
            //$('#txtOrganiserDOB').val('');
            $("#" + input.id).val('');
            //$('#txtOrganiserDOB').focus();
            return false;
        }
        else {
            return true;
        }
    }
    else {
        if ($("#" + input.id).val() != '')//$('#txtOrganiserDOB').val()
        {
            //$('#txtOrganiserDOB').val('');    
            $("#" + input.id).val('');
            alert("Invalid Date. Please enter correct date format (dd/mm/yyyy)!");
        }
    }
    return false;
}
//end here