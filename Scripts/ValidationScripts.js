//$(document).ready(function () {

//    $('input').keyup(function () {
//        str = $(this).val()
//        str = str.replace(/\s\s+/g, '')
//        $(this).val(str)
//    })
//    var AllTextbox = document.getElementsByTagName("input")
//    for (var i = 0; i < AllTextbox.length; i++) {
//        if (AllTextbox[i].type == 'text') {
//            $('#' + AllTextbox[i].id).change(function () { checkSpace(this) });
//            $('#' + AllTextbox[i].id).bind("cut copy paste", function (e) {
//                e.preventDefault();
//            });
//            $('#' + AllTextbox[i].id).attr('autocomplete', 'off');
//        }
//    };
//});

// @#
//function checkfields(ctrl) {
//    var str = ctrl.value
//    var isnot = "!@#$%^&*+=|\~`?><':;{[}]_.,/()-";
//    var inval = 0;
//    var x;
//    for (var i = 0; i < str.length; i++) {
//        for (x = 0; x < isnot.length; x++) {
//            if (str.charAt(i) == (isnot.charAt(x))) {
//                inval = 1;
//                alert("only alphabets,numbers allowed");
//                ctrl.value = str.substring(0, str.indexOf(str.charAt(i)));
//                ctrl.focus();
//            }
//        }
//    }
//    return (inval);
//}

//function checkfields_Utility(ctrl) {
//    var str = ctrl.value;
//    var isnot = "!#$%^&|\~`?><:;{[}]/-";
//    var inval = 0;
//    var x;
//    for (var i = 0; i < str.length; i++) {
//        for (x = 0; x < isnot.length; x++) {
//            if (str.charAt(i) == (isnot.charAt(x))) {
//                inval = 1;
//                alert("only alphabets,numbers allowed");
//                ctrl.value = str.substring(0, str.indexOf(str.charAt(i)));
//                ctrl.focus();
//            }
//        }
//    }
//    return (inval);
//}


//$(document).ready(function () {
//    
//    $('input').keyup(function () {
//        str = $(this).val()
//        str = str.replace(/\s\s+/g, '')
//        $(this).val(str)
//    })
//    var AllTextbox = document.getElementsByTagName("input")
//    for (var i = 0; i < AllTextbox.length; i++) {
//        if (AllTextbox[i].type == 'text') {
//            $('#' + AllTextbox[i].id).change(function () { checkSpace(this) });
//            $('#' + AllTextbox[i].id).bind("cut copy paste", function (e) {
//                e.preventDefault();
//            });
//            $('#' + AllTextbox[i].id).attr('autocomplete', 'off');
//        }
//    };
//});
// @#


function checkfields(ctrl) {
    var str = ctrl.value
    var isnot = "!@#$%^&*+=|\~`?><':;{[}]_.,/()-";
    var inval = 0;
    var x;
    for (var i = 0; i < str.length; i++) {
        for (x = 0; x < isnot.length; x++) {
            if (str.charAt(i) == (isnot.charAt(x))) {
                inval = 1;
                alert("only alphabets,numbers allowed");
                ctrl.value = str.substring(0, str.indexOf(str.charAt(i)));
                ctrl.focus();
            }
        }
    }
    return (inval);
}

//Mahesh
function isAlphaKey(e) {
    var k;
    document.all ? k = e.keyCode : k = e.which;
    //return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57)||k==0);
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57) || k == 0 || (k >= 40 && k <= 46));
}

//Mahesh
function isAlphaKeyNew(e) {
    var k;
    document.all ? k = e.keyCode : k = e.which;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57) || k == 0 || (k >= 40 && k <= 46));
}

function checkTextFieldsaddress(ctrl) {
    ////debugger;
    var str = ctrl.value
    var isnot = "!@#$%^&*+=|\~`?><':;{[}]_)(,./";
    var inval = 0;
    var x;
    for (var i = 0; i < str.length; i++) {
        for (x = 0; x < isnot.length; x++) {
            if (str.charAt(i) == (isnot.charAt(x))) {
                inval = 1;
                // alert("only alphabets,numbers  and {.,/()-} space allowed");
                ctrl.value = str.substring(0, str.indexOf(str.charAt(i)));
                ctrl.focus();
                return false;
            }
        }
    }
    return (inval);
}

function checkfields_Utility(ctrl) {
    var str = ctrl.value;
    var isnot = "!#$%^&|\~`?><:;{[}]/-";
    var inval = 0;
    var x;
    for (var i = 0; i < str.length; i++) {
        for (x = 0; x < isnot.length; x++) {
            if (str.charAt(i) == (isnot.charAt(x))) {
                inval = 1;
                alert("only alphabets,numbers allowed");
                ctrl.value = str.substring(0, str.indexOf(str.charAt(i)));
                ctrl.focus();
            }
        }
    }
    return (inval);
}


function checkTextFields(ctrl) {
    //debugger;
    var inval = 0;
    try {
        var str = ctrl.value
        var isnot = "!@#$%^&*+=|\~`?><':;{[}]_.(),/";
        var x;
        for (var i = 0; i < str.length; i++) {
            for (x = 0; x < isnot.length; x++) {
                if (str.charAt(i) == (isnot.charAt(x))) {
                    inval = 1;
                    ctrl.value = str.substring(0, str.indexOf(str.charAt(i)));
                    ctrl.value = "";
                    ctrl.focus();
                }
            }
        }
        if (inval == 1) {
            alert("only alphabets,numbers  and {.,/()-} space allowed");
        }
    }
    catch (err) {
    }
    return (inval);
}

function checkRefNo(ctrl) {
    var str = ctrl.value
    var isnot = "!@#$%^&*+=\~`?><':;{[}]_()-.,";
    var inval = 0;
    var x;
    for (var i = 0; i < str.length; i++) {
        for (x = 0; x < isnot.length; x++) {
            if (str.charAt(i) == (isnot.charAt(x))) {
                inval = 1;
                alert("only alphabets,numbers and {|/} space allowed");
                ctrl.value = str.substring(0, str.indexOf(str.charAt(i)));
                ctrl.focus();
            }
        }
    }
    return (inval);
}

function valAlphabetic(evt) {

    var charCode;
    var e = evt; // for trans-browser compatibility
    charCode = (e.which) ? e.which : event.keyCode;
    //charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode >= 97 && charCode <= 122 || charCode >= 65 && charCode <= 90 || charCode == 8 || charCode == 32) {
        return true;
    }
    else {
        return false;
    }
}

function onlyNumbers(evt) {
    var key = window.event ? evt.keyCode : evt.which;
    if ((key >= 48 && key <= 57) || key == 0 || key == 8 || key == 9) {
        return true;
    }
    else {
        return false;
    }
    //    //debugger;
    //    flag = false
    //    var e = evt; // for trans-browser compatibility
    //    var charCode = e.which || e.keyCode;
    //    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    //        //alert("Only numbers are allowed");
    //        return false;
    //    }
    //    return true;
}

function checkDate(sender, args) {
    /* works with ajax calender extender*/
    if (sender._selectedDate > new Date()) {
        alert("You cannot select a day greater than today!");
        sender._selectedDate = new Date();
        // set the date back to the current date
        sender._textbox.set_Value(sender._selectedDate.format(sender._format))
    }
}

function IsAlphabetNumeric1(evt) {
    var charCode = (e.which) ? e.which : e.keyCode;
    if (charCode == 8) return true;

    var keynum;
    var keychar;
    var charcheck = /[a-zA-Z0-9]/;
    if (window.event) // IE
    {
        keynum = e.keyCode;
    }
    else {
        if (e.which) // Netscape/Firefox/Opera
        {
            keynum = e.which;
        }
        else return true;
    }
    keychar = String.fromCharCode(keynum);
    return charcheck.test(keychar);
}

function IsAlphabetNumeric(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    var txt = String.fromCharCode(charCode)
    if (txt.match(/^[a-zA-Z0-9\_]+$/))
        return true
    return false
}

function IsAlphabetNumericUserName(evt) {
    //
    var charCode = (evt.which) ? evt.which : evt.keyCode
    var txt = String.fromCharCode(charCode)
        if (txt.match(/^[a-zA-Z\s\b]+$/))
        return true
    return false
}

function IsAlphabetNumericUserNameLogin(evt) {
    //
    var charCode = (evt.which) ? evt.which : evt.keyCode
    var txt = String.fromCharCode(charCode)
    if (txt.match(/^[a-zA-Z0-9_.@\b]+$/) || charCode == 9)
        return true
    return false
}

function isNumericKey(evt) {
    var key = window.event ? evt.keyCode : evt.which;
    if ((key >= 48 && key <= 57) || key == 0 || key == 8 || key == 9) {
        return true;
    }
    else {
        return false;
    }
    //    flag = false
    //    var e = evt; // for trans-browser compatibility
    //    var charCode = e.which || e.keyCode;
    //    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    //        alert("Only numbers are allowed");
    //        return false;
    //    }
    //    return true;
}

function isNumericKeyDecimal(evt) {
    flag = false
    var e = evt; // for trans-browser compatibility
    var charCode = e.which || e.keyCode;
    if (charCode == 46) {
        return true;
    }
    else if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        alert("Only numbers are allowed");
        return false;
    }
    return true;
}

function IsAlphabet(evt) {   //alphabets and dot(Name field)
    var charCode = (evt.which) ? evt.which : event.keyCode
    var txt = String.fromCharCode(charCode)
    if (txt.match(/^[a-zA-Z\b. ]+$/)) {
        return true;
    }
    return false;
}

function IsAlphaNumericOnly(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    var txt = String.fromCharCode(charCode)
    if (txt.match(/^[a-zA-Z0-9\b\\]+$/)) {
        return true;
    }
    return false;
}

function isNumericKeyWithHyphen(e) {

    if (window.event) { var charCode = window.event.keyCode; }
    else if (e) { var charCode = e.which; }
    else { return true; }
    if (charCode == 45)
    { return true; }
    else if (charCode > 31 && (charCode < 48 || charCode > 57)) { return false; }
    return true;
}

//function which checks and allows date less than and equal to today
function checkDateLessThanToday(control) {
    var txt = control;
    var arraydate = txt.value.split("-");

    var txttoday = new Date();
    var curr_date = txttoday.getDate();
    var curr_month = txttoday.getMonth() + 1; //Months are zero based
    var curr_year = txttoday.getFullYear();
    var a = curr_date + "-" + curr_month + "-" + curr_year;

    var val = txt.value;
    var isvalidate = false;
    if (val.length == 10) {
        var splits = val.split("-");
        var dt = new Date(splits[1] + "-" + splits[0] + "-" + splits[2]);
        //Validation for Dates
        if (dt.getDate() == splits[0] && dt.getMonth() + 1 == splits[1] && dt.getFullYear() == splits[2]) {
            isvalidate = true;
        }
        else {
            if (val != "__-__-____") {
                alert("InValid Date.");
                txt.value = "";
                isvalidate = false;
            }
        }
    }
    else {
        if (val != "__-__-____") {
            alert("InValid Date.");
            isvalidate = false;
        }
    }

    if (isvalidate == true) {
        if (arraydate[2] > curr_year) {
            alert("You cannot select a day Greater than today!");
            txt.value = "";
        }
        else if (arraydate[2] == curr_year) {
            if (arraydate[1] > curr_month) {
                alert("You cannot select a day Greater than today!");
                txt.value = "";
            }
            else if (arraydate[1] == curr_month) {
                if (arraydate[0] > curr_date) {
                    alert("You cannot select a day Greater than today!");
                    txt.value = "";
                }
            }
            else {
                if (txt.value > a) {
                    alert("You cannot select a day Greater than today!");
                    txt.value = "";
                }
            }
        }
    }
    return isvalidate;
}

//function which checks only correct date format
function checkValidDate(control) {
    var txt = control;
    var val = txt.value;
    var isvalidate = false;
    if (val.length == 10) {
        var splits = val.split("/");
        var dt = new Date(splits[1] + "/" + splits[0] + "/" + splits[2]);
        //Validation for Dates
        if (dt.getDate() == splits[0] && dt.getMonth() + 1 == splits[1] && dt.getFullYear() == splits[2]) {
            isvalidate = true;
        }
        else {
            if (val != "__/__/____") {
                alert("InValid Date.");
                txt.value = "";
                isvalidate = false;
            }
        }
    }
    else {
        if (val != "__/__/____") {
            alert("InValid Date.");
            isvalidate = false;
        }
    }
}
function OnlyAlphaName(evt) {   //alphabets and dot(Name field)
    var charCode = (evt.which) ? evt.which : event.keyCode
    var txt = String.fromCharCode(charCode)
    //    if (txt.match(/^[a-zA-Z]+$/)) {
    if (txt.match(/^[a-zA-Z ]*$/)) {
        return true;
    }
    return false;
}
//function OnlyAlphaName(evt) {

//    var charCode = (evt.which) ? evt.which : event.keyCode
//    if (charCode > 31 && (charCode < 48 || charCode > 57) || charCode == 8)
//        return true;

//    return false;
//}
//function which checks and allows date greater than and equal to today
function checkDateGreaterThanToday(control) {
    var txt = control;
    var arraydate = txt.value.split("/");

    var txttoday = new Date();
    var curr_date = txttoday.getDate();
    var curr_month = txttoday.getMonth() + 1; //Months are zero based
    var curr_year = txttoday.getFullYear();
    var a = curr_date + "/" + curr_month + "/" + curr_year;

    var val = txt.value;
    var isvalidate = false;
    if (val.length == 10) {
        var splits = val.split("/");
        var dt = new Date(splits[1] + "/" + splits[0] + "/" + splits[2]);
        //Validation for Dates
        if (dt.getDate() == splits[0] && dt.getMonth() + 1 == splits[1] && dt.getFullYear() == splits[2]) {
            isvalidate = true;
        }
        else {
            if (val != "__/__/____") {
                alert("InValid Date.");
                txt.value = "";
                isvalidate = false;
            }
        }
    }
    else {
        if (val != "__/__/____") {
            alert("InValid Date.");
            isvalidate = false;
        }
    }

    if (isvalidate == true) {
        if (arraydate[2] < curr_year) {
            alert("You cannot select a day Lesser than today!");
            txt.value = "";
        }
        else if (arraydate[2] == curr_year) {
            if (arraydate[1] < curr_month) {
                alert("You cannot select a day Lesser than today!");
                txt.value = "";
            }
            else {
                if (txt.value < a) {
                    alert("You cannot select a day Lesser than today!");
                    txt.value = "";
                }
            }
        }
    }
}

//Jaydeep 02 April 2014 START: removes leading and trailing spaces
function checkSpace(ctrl) {
    var str = ctrl.value;
    var newstr = str.replace(/(^\s*)|(\s*$)/gi, '') // removes leading and trailing spaces
    ctrl.value = newstr;
}

function checkEmailIDSpace() {
    var txtUsername = document.getElementById('<%=txtUsername.ClientID %>');
    var RegularExpressionValidator1 = document.getElementById('<%=RegularExpressionValidator1.ClientID %>');
    var str = txtUsername.value;
    var newstr = str.replace(/(^\s*)|(\s*$)/gi, '') // removes leading and trailing spaces
    txtUsername.value = newstr;
    //ValidatorEnable(document.getElementById('<%= RegularExpressionValidator1.ClientID %>'), false);
}

//Kiran 04 April 2014 START
function isValidKey(e) {
    var charCode = e.keyCode || e.which;
    if (charCode == 8 || charCode == 46)
        return true;

    return false;
}

function UIDLength(srcControl) {

    var uid = srcControl.value;
    if (uid.length < 12) {
        alert('Please enter valid Aadhar Number !!');
        //$('#UIDNO').focus();
        //srcControl.focus();
        return false;
    }
    return true;
}

//Jaydeep(03-02-2015)
function validEmailID(val) {
    var txt = val;
    if (txt.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/)) {
        return true;
    }
    else {
        return false;
    }
}

function validPassword(val) {
    var txt = val;
    if (txt.match(/^^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/)) {
        return true;
    }
    else {
        return false;
    }
}

//Pan Card - Mahesh
function validPanCardNumberdata(obj) {
    var txt = $(obj).val();
    if (txt.match(/[A-Za-z]{5}\d{4}[A-Za-z]{1}/) || txt == "") {
        var str = obj.value
        obj.value = str.toUpperCase();
        return true;
    }
    else {
        $(obj).val('');
        alert("Invalid Pan Card number");
        return false;
    }
}

//Pan Card - Kiran
function validPanCardNumber(obj) {
    var txt = $(obj).val();
    if (txt.match(/[A-Za-z]{5}\d{4}[A-Za-z]{1}/)) {
        return true;
    }
    else {
        $(obj).val('');
        return false;
    }
}

//Establishmentname 
function IsShopName(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    var txt = String.fromCharCode(charCode)
    if (txt.match(/^[a-zA-Z0-9\b]+$/))
        return true
    return false
}

function ToUppercase(ctrl) {
    var str = ctrl.value
    ctrl.value = str.toUpperCase();
    return true;
}

function checkOnlyNumber(e) {


    //var key = window.event ? e.keyCode : e.which;
    var key = (e.which) ? e.which : e.keyCode;
    if ((key == 38 || key == 39 || key == 40) || (key >= 48 && key <= 57) || key == 0 || key == 8 || key == 9) {
        return true;
    }
    else {
        return false;
    }
}

////Mahesh Dhanavade

////--- Datetime picker

////function logic() {
////    var today = new Date();
////    var dateObj = new Date();
////    var month = dateObj.getUTCMonth() + 1;
////    var day = dateObj.getUTCDate();
////    var year = dateObj.getUTCFullYear();
////    return year;
////};

////--- End Datetime picker

////--- Age Calculation

//var dat = new Date();
//var curday = dat.getDate();
//var curmon = dat.getMonth() + 1;
//var curyear = dat.getFullYear();
//function checkleapyear(datea) {
//    if (datea.getYear() % 4 == 0) {
//        if (datea.getYear() % 10 != 0) {
//            return true;
//        }
//        else {
//            if (datea.getYear() % 400 == 0)
//                return true;
//            else
//                return false;
//        }
//    }
//    return false;
//}
//function DaysInMonth(Y, M) {
//    with (new Date(Y, M, 1, 12)) {
//        setDate(0);
//        return getDate();
//    }
//}
//function datediff(date1, date2) {
//    var y1 = date1.getFullYear(), m1 = date1.getMonth(), d1 = date1.getDate(),
//            y2 = date2.getFullYear(), m2 = date2.getMonth(), d2 = date2.getDate();
//    if (d1 < d2) {
//        m1--;
//        d1 += DaysInMonth(y2, m2);
//    }
//    if (m1 < m2) {
//        y1--;
//        m1 += 12;
//    }
//    return [y1 - y2, m1 - m2, d1 - d2];
//}

//function calage(dob) {

//    var D1 = dob.split('/');
//    var calday = D1[0];
//    var calmon = D1[1];
//    var calyear = D1[2];
//    var curd = new Date(curyear, curmon - 1, curday);
//    var cald = new Date(calyear, calmon - 1, calday);
//    var diff = Date.UTC(curyear, curmon, curday, 0, 0, 0) - Date.UTC(calyear, calmon, calday, 0, 0, 0);
//    var dife = datediff(curd, cald);
//    return dife[0];
//}

//function ValidateDate(ctrl) {
//    var date1 = ctrl.value;
//    if (date1 != "") {
//        var Age = calage(date1);
//        if (Age <= 0) {
//            alert("Invalid Birthdate");
//        }
//    }
//}

////--- End Age Calculation