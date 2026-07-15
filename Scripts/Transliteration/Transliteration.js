/*****************************************************************************************************************/
//Licensed to Government of Maharashtra under CoE. This tool/dll/file is for non-commercial use. For commercial license contact info.gist@cdac.in”. 
//Author : Debanarayan Das
//Version : 1.0.0.8
//File is for Enabling popup in text inputs

/*****************************************************************************************************************/
var transJSPath = "../scripts/Transliteration";
document.write("<link href='"+transJSPath+"/css/Transliteration.css' rel='stylesheet' type='text/css' />");
document.write("<div id='txtAreaClone' class='clone'></div>");
document.write("<div tabindex='-1' id='sugg' class='suggsdivcssIN' onfocus='setFocus()'></div>");
/**************************************************************************************************/
//Floating Keyboard Integration
document.write("<script language='javascript' type='text/javascript' src='"+transJSPath+"/Support.js'></script>");
document.write("<div id='keyBrd'></div>");	
/****************************************************************************************************/
var elementId="";  //To store id of input element
var languageMn=""; //To store language mnemonic
var targetId="";   //To store target element id for displaying output 
var eleLeftPos=0;
var eleTopPos=0;
var eleLength=0;
var word1 = "";

//var url = "http://gom1.in/coeapp/";
//var url = "https://cscservices.mahaonline.gov.in/Translation/";
var url = "http://localhost:58736/Translation/";
//var url = "https://mahaegs.maharashtra.gov.in/Translation/";


var suggestions1 = "";
//Input english word.
var text = "";
//index of array "arrWords[]".
var indS=0;
var indT=0;
//variable for result coming from server.
var result = "";
//global variabe to keep track of cursor position.
var globalCursorPos;
//variabe to store the current cursor position.
var cursorPos;
//variable to store the length of input word(English word).
var lenInputWord = "";
//variable to store the length of result(Hindi word).
var lenResult = "";
//variable to store the string before cursor position.
var firstPart = "";
//variable to store the string after cursor position.
var secondPart = "";
//variable to store the final result.
var strResult;
//array for storing the keycode of each key pressed.
var arrWords = new Array();
var arrWordsT = new Array();
//array for storing the suggestions of any word.
var arrSugg = new Array();
//variables for getting caret X & Y co-ordinates
var leftPos = 0, rightPos = 0,storeRP=0;
var topPos = 0, bottomPos = 0;
var flag = false;
var storeILData = "";
var storeCurrentKeyCode = 0;
var storePrevKeyCode=0;
var engWord = "";
var selCursorPos;
var isUpdated = -1;
var browserName = "";
var selectedText = "";
var selectedIndex = 0, itemCount = 2, scrolLength = 0;
var lenILWord = 0, wordCount = 0;
//declare an instance
var hashtable = new Hashtable();
var hashtable2 = new Hashtable();
var hashtableMR = new Hashtable();
var hashtableTemp = new Hashtable();
var hashtableMR2 = new Hashtable();
var hashtableMRT = new Hashtable();
var hashtableAdd2 = new Hashtable();
var hashtableMAR2 = new Hashtable();
var suggOnClick = "";
var wordC = "";
var word = "";
var storeClickedWord = "";
var suggestions = "";
var suggestionsTa = "";
var textTa="";
var flagDblClk = "0";
var selWord = "";
var lenselWord = "";
var selLang = "";
var isCtrl=false;
var isShift=false;
var storeResult="";
var displayFlag="0";
var ctrlCode=0;
var keyText="";
var gcp;
var engflag=false;
var elID="";
var trID="";
var reqCountT=0;
var transDi="";
/****************************************************************************************************/
//document.body.onload=function(){Indic_Transliteration_funLoad(null,null);};
document.body.onunload = function () {Indic_Transliteration_doUnload();};
document.body.onresize=function(){setPopup();};
if(window.onresize)
{
  window.onresize=function(){setPopup();};
}

if(window.addEventListener)
{
  
   window.addEventListener('keyup',function(e){if(!e){e=window.event;}if(ctrlCode==17 && e.keyCode==89){ctrlCode=0;g_EnableGlobalTyping=true;eventclick();openKeyboard();document.getElementById('sugg').style.visibility="hidden";}else{ctrlCode=0;}},false);
   window.addEventListener('keydown',function(e){if(!e){e=window.event;}if(e.keyCode==17){ctrlCode=17;}},false);
 }
else if(document.body.attachEvent)
{
  document.body.attachEvent('onkeyup',function(e){if(!e){e=window.event;}if(ctrlCode==17 && e.keyCode==89){ctrlCode=0;g_EnableGlobalTyping=true;eventclick();openKeyboard();document.getElementById('sugg').style.visibility="hidden";}else{ctrlCode=0;}});
  document.body.attachEvent('onkeydown',function(e){if(!e){e=window.event;}if(e.keyCode==17){ctrlCode=17}});
}


//called on body load
function Indic_Transliteration_funLoad(elementid,targetid) {
          if(elementId=="")
		  {
              hashtableMR.clear();
			  hashtableMRT.clearT();
		  }
		   //alert("in Load");
		  //Code Added by Debanarayan Das on 14/08/2012 to solve selecting by mouse click problem in chrome/safari
          if(elementId==elementid)
		  return;
          //End by Debanarayan Das on 14/08/2012
          var url1 = url + 'Transliteration.aspx?enteredText=name&selectedTrans=NAME';
          
		 if(elementId=="")
		 {
		  
				
                //Implemented AJAX.
                var httpRequest;
				
			   if (window.XMLHttpRequest)
			  {
			   
			   httpRequest = new XMLHttpRequest();
               
			  }
		     else {// code for IE6, IE5
			         
                    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
					
                }
                if (!httpRequest) {
                    alert('Cannot create an XMLHTTP instance');
                    return;
                }

                
                       try   
					   {
						   
					   httpRequest.onreadystatechange = function () {	  
                     if (httpRequest.readyState == 4 && httpRequest.status == 200) {

						 
                        //Variable for storing result coming from servlet.
                         var result = httpRequest.responseText;
                       }
                     }

                 httpRequest.open("GET",url1,true);
                 httpRequest.send();
				}
				catch(err){
				   if (XDomainRequest)
                   {
                // IE8
				
                   httpRequest= new XDomainRequest();
				   httpRequest.onload=function(){
				   var result = httpRequest.responseText;
				   
				 }
                httpRequest.open("GET", url1);
				httpRequest.send();
				
               }
				}
		        
     
			} 
        
		  elementId=elementid;
          //alert("elementId:"+elementId);
          
          if(targetid!=null&&targetid!=""&&typeof(targetid)!='undefined')
          {
		    storeCurrentIds(elementId,targetid);
			
		  }
          else{
           targetId=null;
           targetid=null;
          }
           
          languageMn='mr_in';
         
          document.getElementById('sugg').style.visibility = "hidden";
           browserName=getBrowserName();
          //Code Added by Debanarayan Das on 21/08/2012 to solve "Not able to select suggestion using keyboard in Opera."
          //opera has different behaviour on down arrow key than other browsers
          if(browserName=="opera")
          {
            var el;
            if(targetid)
            {
              el=document.getElementById(targetid);
            }
            else{
			  if(elementId)
			  {
                el=document.getElementById(elementId);
			  }
			  
            }
			if(el)
			{
             el.setAttribute("autocomplete", "off");
			}
          }
         //End on 21/08/2012
		  if(elementId!=null) {
             if (targetid) {
                 setClone(targetid);
             } else {
                 setClone(elementId);
             }
			 }
       
          
     
			 
	}
function storeCurrentIds(eid,tid)
{
 elID=eid;
 trID=tid;
}
//This method is for getting element position and setting clone
function setClone(elementid) {

    var eleHeight;
    if (elementid) {
        getElePos(elementid);
        eleHeight = document.getElementById(elementid).style.height;


        eleLeftPos = leftPos;
        eleTopPos = topPos;

        if (!eleHeight) {
            eleHeight = "15px";
        }
        eleLength = parseInt(eleHeight);
    }
    if (browserName != "msie" && elementid != null) {
        //Code to set the text area clone
        var eleWidth = "";
       
            if (elementid) {
                eleWidth = document.getElementById(elementid).style.width;
            }
        

        if (eleWidth) {
            if (eleWidth.indexOf("%") != -1) {
               
                    eleWidth = document.getElementById(elementid).offsetWidth;
                
                eleWidth = eleWidth + "px";

            }
            document.getElementById('txtAreaClone').style.width = eleWidth;


        }
        else {
            document.getElementById('txtAreaClone').style.width = "150px";
        }
        if (eleHeight) {
            document.getElementById('txtAreaClone').style.height = eleHeight;
        }
        else {
            document.getElementById('txtAreaClone').style.height = "15px";
        }


        document.getElementById('txtAreaClone').style.left = leftPos + 'px';
        document.getElementById('txtAreaClone').style.top = topPos + 'px';
        document.getElementById('txtAreaClone').style.visibility = "visible";
        storeRP = rightPos;
   }
}
//This function detects the browser and returns the browser name.
function getBrowserName() {
    var browserName = "";
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("opera") != -1) {
        browserName = "opera";
    }
    else if (ua.indexOf("msie") != -1) {
        browserName = "msie";
    }
    else if (ua.indexOf("safari") != -1) {
        browserName = "safari";
    }
    else if (ua.indexOf("mozilla") != -1) {
        if (ua.indexOf("firefox") != -1) {
            browserName = "firefox";
        }
        else {
            browserName = "mozilla";
        }
    }
    
  return browserName;
}



//This function returns the index of the cursor location in the value of the input text element.
//It is important to make sure that the sWeirdString variable contains a set of characters that
//will not be encountered normally in your text.
function getCursorPos(textElement) {

    var objRange = "";
    var sOldRange = "";
    browserName = getBrowserName();
    //save off the current value to restore it later,
    var sOldText = textElement.value;

    //Getting position of cursor base on browser type.
    if (browserName == "firefox")					//For both Firefox & Netscape
    {
        var cursorPos = textElement.selectionStart;
          
        return cursorPos;
    }
    else if (browserName == "safari") {
        var cursorPos = textElement.selectionStart;
        return cursorPos;
    }
    else if (browserName == "opera") {
        var cursorPos = textElement.selectionStart;
        return cursorPos;
    }
    else if (browserName == "msie") {
         if(flagDblClk=="1")
         {
          
         }
	     else if(textElement==document.getElementById(targetId))
         {
		   return document.getElementById(targetId).value.length;
         }
        
         //create a range object and save off it's text
        objRange = document.selection.createRange();

        sOldRange = objRange.text;

        //set this string to a small string that will not normally be encountered
        var sWeirdString = '#%~';

        //insert the weirdstring where the cursor is at
        objRange.text = sOldRange + sWeirdString;
        
        
        objRange.moveStart('character', (0 - sOldRange.length - sWeirdString.length));
         
        //save off the new string with the weirdstring in it
       
        var sNewText = textElement.value;

        //set the actual text value back to how it was
        objRange.text = sOldRange;

        //look through the new string we saved off and find the location of
        //the weirdstring that was inserted and return that value
        for (i = 0; i <= sNewText.length; i++) {
            var sTemp = sNewText.substring(i, i + sWeirdString.length);
            if (sTemp == sWeirdString) {
                var cursorPos = (i - sOldRange.length);


                return cursorPos;
            }
        }
    }
}

function setFocus()
{
  if(targetId)
  {
   document.getElementById(targetId).focus();
  }
  else{
   document.getElementById(elementId).focus();
   }
  
}
function hidePopup()
{
  document.getElementById('sugg').style.visibility = "hidden";
}

function select(e)
{

     if(targetId)
     {
       if(document.getElementById(targetId).value=="")
       {
        document.getElementById('sugg').style.visibility="hidden";
        return; 
       }
      
     }
    
    if(!e)
     {
	    e=window.event;
     }
      
     //alert(e.keyCode);
    //Storing keyCode of each key press in an array.
	 arrWordsT[indT]=e.keyCode;
	//alert(e.keyCode);
	indT++;
	
	//Variable for storing the keycode of  second last key pressed.
	var prevKeyCode=arrWordsT[indT-2];
	 storePrevKeyCode=prevKeyCode;
	//Variable for storing the keycode of last key pressed.
	var currKeyCode=arrWordsT[indT-1];
	 if(isCtrl && (currKeyCode==17))
	   {
	    isCtrl=false;
		return;
	   }
	  else if(isShift && currKeyCode==16)
	  {
	   isShift=false;
	   return;
	  }
	   if(browserName=="opera")
	  {
	    if(isCtrl && (currKeyCode==48))
		{
		 setPopup();
		 return;
		}
	  }
    if((isCtrl && (currKeyCode==107||currKeyCode==109||currKeyCode==43||currKeyCode==45))||(isCtrl && isShift && (currKeyCode==189||currKeyCode==187)))
	 {
	   if(browserName!="msie")
	  {
	   setPopup();
	  }
	   return;
	 }
	 selectSuggestion(storePrevKeyCode,currKeyCode,e);
   }
  function selectSuggestion(storePrevKeyCode,currKeyCode,e)
  {
         
	 if(currKeyCode==40||currKeyCode==38||currKeyCode==13)
      {
	     
	     if(storePrevKeyCode==40||storePrevKeyCode==38)
	     {
	      document.forms[0].onsubmit=function()
	        {return false;};
	     }
		 
		 if(currKeyCode==13)
		 {
		    
		   //alert(selectedText);
		   if(selectedText!="")
		   {
		     
		     funClick(selectedText);
			 selectedIndex =-1;
			 selectedText="";
			 //scrolLength=0;
			 document.getElementById('sugg').style.visibility="hidden";
			 return true;
		   }
		   else
		   {
		    document.getElementById(elementId).focus();
		     
		   }
		 }
		 else
		 {
		  
		   selectedText="";
		   keyPressed(e);
		   return true;
		 }
      }
      else
       {
	     selectedText="";
		 selectedIndex =-1;
		 //scrolLength=0;
		 
	   //document.getElementById("sugg").scrollTop = scrolLength;
	 }
}
//This function sets the cursor position at the modified place otherwise it remains at the end always.
function settingBackCursor(field, pos) {

    if (field.createTextRange) 
    {
        
        var body = document.body;
        var docElem = document.documentElement;
        var clientTop = docElem.clientTop || body.clientTop || 0;
        var clientLeft = docElem.clientLeft || body.clientLeft || 0;
        var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
        var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
        var range = field.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
		
		leftPos =eleLeftPos+range.offsetLeft + scrollLeft - clientLeft;
		//topPos = eleTopPos + range.offsetTop + scrollTop - clientTop;
		topPos = eleTopPos + range.offsetTop;
		//alert("eleTopPos1:" + eleTopPos);
		//alert("range.offsetTop:" + range.offsetTop);
		 //alert("leftPos:" + leftPos);

    }
    else if (field.selectionStart || field.selectionStart == '0') 
    {

        field.setSelectionRange(pos, pos);

    }
}


//This function is doing nothing ,just specified in the 'href' of anchor tags in suggestion box.
function funDoNothing()
{ 
 
}


//This function sets the global variable to keep track of the cursor position
function setGlobalCursorPos() {
    if(targetId)
    {
     globalCursorPos = getCursorPos(document.getElementById(targetId));
     
    }
    else{
     globalCursorPos = getCursorPos(document.getElementById(elementId));
	 
    }
}


function enableAjax(e,transDirection) 
{
    
	
	 if(document.getElementById('keyBrd').style.visibility=="visible")
	  {
	    return;
	  }
	
	
	dWord="";
	dSuggestions="";
    selLang=languageMn;
	
    //for before IE9 only,because IE doesn't pass event as parameter to function.Instead,it makes Event object available
	//as the event property of the global window object.
	 if(!e)
     {
	    e=window.event;
     }
      //alert(e.keyCode);
	 
    //Storing keyCode of each key press in an array.
	 arrWords[indS]=e.keyCode;
	 
	indS++;
	
	//Variable for storing the keycode of  second last key pressed.
	var prevKeyCode=arrWords[indS-2];
	 storePrevKeyCode=prevKeyCode;
	//Variable for storing the keycode of last key pressed.
	var currKeyCode=arrWords[indS-1];
	//alert("currKeyCode:"+currKeyCode);
	//Code added to solve zoom related bug
	 if(browserName=="opera")
	  {
	    if(isCtrl && (currKeyCode==48))
		{
		 return;
		}
	  }
	 if(isCtrl && (currKeyCode==17))
	   {
	    isCtrl=false;
		return;
	   }
	  else if(isShift && currKeyCode==16)
	  {
	   isShift=false;
	   return;
	  }
	  
	 
if((isCtrl && (currKeyCode==107||currKeyCode==109||currKeyCode==43||currKeyCode==45))||(isCtrl && isShift && (currKeyCode==189||currKeyCode==187)))
	 {
	  
	  return;
	 }
	 //Ended zoom
	 //Code added to select suggs from popup
	  
     
      if(currKeyCode==40||currKeyCode==38||currKeyCode==13)
      {
	    
		var ret=selectSuggestion(storePrevKeyCode,currKeyCode,e); 
		if(ret==true)
		{
		 return;
		}
	  }
	    
	  flagDblClk="0";
      document.getElementById('sugg').style.visibility="hidden";
	  
	
	
	
	//In case of very first character & character after space,ind=1 and prevKeyCode becomes arrWords[-1],so explicitly assigning it value as 0.
	arrWords[-1]=0;

	
	//Checking that last key code is 32 ie of space bar or 13 ie of enter
	if(currKeyCode==32)
	{
	   
	    
	   //This method will set the global position of the cursor. 
	    setGlobalCursorPos();
		transDi=transDirection;
	 	
	   if(prevKeyCode==32 && currKeyCode==32)
		{
		  //Added by Debanarayan Das on 21/08/2012 to solve "Suggestion is not working after 1st attempt if the cursor position is changed by mouse."
		 //getting string before cursor position.
		        var firstPart;
		        
			    
			    firstPart = document.getElementById(elementId).value.substring(0, globalCursorPos);
			    
			    
			    firstPart=firstPart.substring(0,firstPart.lastIndexOf(" "));
			
			    var indexOfSpace=firstPart.lastIndexOf(" ");
				if(indexOfSpace!=-1)
				{
				 firstPart=firstPart.substring(indexOfSpace+1);
				}
				firstPart=trimSpace(firstPart);
			   
			   
			   var textLen=firstPart.length;
			   var isUni=false;
			   for(var i=0;i<textLen;i++)
			    {
                  if(!(firstPart.charCodeAt(i)>=0 && firstPart.charCodeAt(i)<=255))
				  {
				     isUni=true;
				     
				     break;
				  }
				  else{
				   isUni=false;
				  }
			    }
			    if(isUni||firstPart=="")
			    {
		         return false;
		        }
		       
		       //End by Debanarayan Das on 21/08/2012
		}
        else if(prevKeyCode==13 && currKeyCode==13)
        {
          
			return;
	    }		
		//else 
		//{
		    
			var enteredText = document.getElementById(elementId).value;
			//alert("enteredText:"+enteredText);
			var temp; 
			//Getting the string that is on the left side of cursor position.
			 temp=enteredText.substring(0,globalCursorPos);
			 
			if(currKeyCode==13)
			{
			  return false;
			 
			  
			 }
			else
			{//Removing the last space
			    storeCurrentKeyCode=0;
				
				//Getting index of last space in temp.
			    var indexOfSpace=temp.lastIndexOf(" ");
				if(indexOfSpace!=-1)
				{
				 temp=temp.substring(0,indexOfSpace);
				}
				else
				{
				  temp=temp;
				}
			}
			
			 
	
			//Getting the last string after space as text.
			
            
			 
				if((temp.lastIndexOf(" "))>(temp.lastIndexOf("\n")))
			    {
				  text=temp.substring(temp.lastIndexOf(" ")+1);
				 
				}
				else if((temp.lastIndexOf(" "))<(temp.lastIndexOf("\n")))
				{
				 text=temp.substring(temp.lastIndexOf("\n")+1);
				}
				else
			    {
				  text=temp;
			    }
			
               
			//Code added by Debanarayan Das on 15/03/2012
			//to solve bug id:13189(Data in 1 IL gets converted to another if new english word is typed without giving space after 1st IL word)   //and 13191(1st character of word gets disappeared on typing special character after IL word. )
		    if (transDirection == "REVERSE") {
		    if (text.charCodeAt(0) >= 0 && text.charCodeAt(0) <= 127) {

		        var pos = -1;

		        for (var i = 0; i < text.length; i++) {
		            if (!(text.charCodeAt(i) >=0 && text.charCodeAt(i) <=255)) 
				   {
		                pos = i;
		                break;
		            }
		        }


		        if (pos == -1) {

		            return;
		        }
		        else {
		            text = text.substring(pos);

		        }

		    }
			    }
			    else {

			        if (!(text.charCodeAt(0) >= 0 && text.charCodeAt(0) <= 127)) {

			            var pos = -1;

			            for (var i = 0; i < text.length; i++) {
			                if ((text.charCodeAt(i) > 64 && text.charCodeAt(i) < 91) || (text.charCodeAt(i) > 96 && text.charCodeAt(i) < 123)
				  || (text.charCodeAt(i) > 47 && text.charCodeAt(i) < 58)) {
			                    pos = i;
			                    break;
			                }
			            }


			            if (pos == -1) {

			                return;
			            }
			            else {
			                text = text.substring(pos);

			            }

			        }
			    }
				
			if(text.length>40)
			{
				alert('OOPs!!!!!!Not a valid word.Please enter a valid one!!!!!!!!!!!!!');
				 return  false;
			}
			
          //Getting length of the input word(English word).
			lenInputWord=text.length;
			if(browserName=="msie" || browserName=="opera")
			{
			  var indx=text.indexOf("\r");
			   if(indx!=-1)
			   {
			      text=text.substring(0,indx);
			      
			   }
			}
			
			
			if(selLang==languageMn)
			{
				result=hashtableMR2.get2(text);
				//alert("result from buf:"+result);
				
			}
			
			
			if(typeof(result)!='undefined' && result!="" && result!=null)
			{
				   

				funProcessing(result);
				
			}
			else
			{
			//to remove \r from text because IE adds \r with text on typing text with Enter key
			var indx=text.indexOf("\r");
			if(indx!=-1)
			{
			   text=text.substring(0,indx);
			   
			}
			//alert(text);
			text=encodeURIComponent(text);
			//selLang=encodeURIComponent(selLang);
			var url2 = "";
			if (transDirection == "REVERSE")
			    url2 = url + 'RevTrans.aspx?enteredText=' + text + '&transDirection=REVERSE';
			else
			    url2 = url + 'Transliteration.aspx?enteredText=' + text + '&selectedTrans=NAME';
			//Implemented AJAX.
			var httpRequest; 
			
			   if (window.XMLHttpRequest)
			  {
			   
			   httpRequest = new XMLHttpRequest();
              }
		     else {// code for IE6, IE5
			         
                    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
					
                }
                if (!httpRequest) {
                    alert('Cannot create an XMLHTTP instance');
                    return;
                }

                
                try  
	            {
           

			   httpRequest.onreadystatechange=function(){
			
			    
			  if(httpRequest.readyState==4 && httpRequest.status==200)
			  {
				  
				 //Variable for storing result coming from servlet.
				  var result=httpRequest.responseText;
				   //alert(result);
				  
				  //Adding in hashtable2,EngWord as key and result(cuming from servlet) as value.
				  if(result!="")
				  {
				  
				  if(selLang==languageMn)
				  {
					  
					  text=decodeURIComponent(text);
					  text=trimSpace(text);
					  result=result+text+"^";
					  hashtableMR2.put2(text,result);
				  }
				  
				  }
				

				  funProcessing(result);
				
			  }
		    };
			 
			
             httpRequest.open("GET",url2,true);
             httpRequest.send();
			}
			catch(err){
			if (XDomainRequest)
               {
                // IE8
				
                httpRequest= new XDomainRequest();
				httpRequest.onload=function(){
				  //Variable for storing result coming from servlet.
				  var result=httpRequest.responseText;
				   //alert(result);
				  
				  //Adding in hashtable2,EngWord as key and result(cuming from servlet) as value.
				  if(result!="")
				  {
				  
				  if(selLang==languageMn)
				  {
					  
					  text=decodeURIComponent(text);
					  
					  text=trimSpace(text);
					  result=result+text+"^";
					  hashtableMR2.put2(text,result);
				  }
				  
				  }
				  

				  funProcessing(result);
				 }
                httpRequest.open("GET", url2);
				httpRequest.send();
				
               }
			}
			}
		 //}
	  }
    }
    
      function enableNameTrans(elementid,targetid,transDirection) {

          //alert(targetid);


                  dWord = "";
                 dSuggestions = "";
				
				 if(document.getElementById('keyBrd').style.visibility=="visible")
			      {
				    return;
			      }
				  var enteredText = document.getElementById(elementid).value;
				  if (enteredText == "" || typeof (enteredText) == 'undefined' || enteredText == null) {

                    return false;
                  }
				  if(targetid!=null&&targetid!=""&&typeof(targetid)!='undefined')
                  {
                      //targetId = targetid;
					  clean();
                  }
                 else{
                      targetId="";
           
                     }
				
                 selLang = languageMn;
           
                document.getElementById('sugg').style.visibility = "hidden";
                  
                  text = enteredText;
				  transDi=transDirection;
                   //Getting length of the input word(English word).
                    //lenInputWord = text.length;
                        if (browserName == "msie" || browserName == "opera") {
                            var indx = text.indexOf("\r");
                            if (indx != -1) {
                                text = text.substring(0, indx);

                            }
                        }
                        //to remove \r from text because IE adds \r with text on typing text with Enter key
                        var indx = text.indexOf("\r");
                        if (indx != -1) {
                            text = text.substring(0, indx);

                        }
                        //alert(text);

                        text = encodeURIComponent(text);


                        var url2 = ""; 
                        if (transDirection == "REVERSE")
                            url2 = url + 'RevTrans.aspx?enteredText=' +text+ '&transDirection=REVERSE';
                        else
                            url2 = url + 'Transliteration.aspx?enteredText=' + text + '&selectedTrans=NAME';
                        
                        //Implemented AJAX.
                        var httpRequest;
                   
                        if (window.XMLHttpRequest) {
                           
                            httpRequest = new XMLHttpRequest();
                          }
                        else {// code for IE6, IE5

                            httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
                          
                        }
                        if (!httpRequest) {
                            alert('Cannot create an XMLHTTP instance');
                            return;
                        }

                         
                         
						 try{
						  
                           httpRequest.onreadystatechange = function () {
                                if (httpRequest.readyState == 4 && httpRequest.status == 200) {


                                    //Variable for storing result coming from servlet.
                                    var result = httpRequest.responseText;
                                    //alert("oth:"+result);

                                    //Adding in hashtable2,EngWord as key and result(cuming from servlet) as value.
                                    if (result != "") {

                                        if (selLang == languageMn) {
                                            text = decodeURIComponent(text);
                                            setResultInTarget(targetid,text, result);
                                        }

                                    }



                                }
                            }
							httpRequest.open("GET", url2, true);
                            httpRequest.send();
							}
							catch(err){
							   if (XDomainRequest) {
                                // IE8
								//alert("XDomainRequest");
								httpRequest = new XDomainRequest();
                                httpRequest.onload = function () {
								   var result = httpRequest.responseText;
                                    //alert("result:"+result);
                                    if (result != "") {
                                        text = decodeURIComponent(text);
                                        setResultInTarget(targetid,text, result);


                                    }
                                }
								httpRequest.open("GET", url2);
                                httpRequest.send();
							}
                      }

                
               }

       function setResultInTarget(targetid,text, result) {

            var tempRes = result;
            var tempText = text;
			if (reqCountT == 2) {
                hashtableMRT.clearT();
                reqCountT = 0;
            }
			reqCountT = reqCountT + 1;
            //hashtableMRT.clearT();
            var finalRes = "";
            while (tempRes.indexOf(";") != -1) {
                var txt = tempText.substring(0, tempText.indexOf(" "));
                tempText = tempText.substring(tempText.indexOf(" ") + 1);
                var tempRes1 = tempRes.substring(0, tempRes.indexOf(";"));
                tempRes1 = tempRes1 + txt + "^";
                if (hashtableMR.containsKey(txt)) {
                    tempRes1 = hashtableMR.get(txt);
                    //alert("tempRes1:" + tempRes1);
                    hashtableMRT.putT(txt, tempRes1);
                }
                else {
                    hashtableMRT.putT(txt, tempRes1);
                    
                }

                var tres = tempRes1.substring(0, tempRes1.indexOf("^"));
                finalRes += tres + " ";
                tempRes1 = tempRes1.substring(tempRes1.indexOf("^") + 1);
                hashtableMRT.putT(tres, tempRes1);
                tempRes = tempRes.substring(tempRes.indexOf(";") + 1);
            }
            tempText = trimSpace(tempText);
            tempRes = tempRes + tempText + "^";
            if (hashtableMR.containsKey(tempText)) {
                tempRes= hashtableMR.get(tempText);
                hashtableMRT.putT(tempText, tempRes);
            }
            else {
                hashtableMRT.putT(tempText, tempRes);
            }
            var tres1 = tempRes.substring(0, tempRes.indexOf("^"));
            firstPart = finalRes;
            //finalRes += tres1 + " ";
              finalRes += tres1;
            if (finalRes) {
			     //alert("finalRes:"+finalRes);
			    document.getElementById(targetid).value ="";
                document.getElementById(targetid).value = finalRes;
				//document.getElementById(targetid).focus();
				settingBackCursor(document.getElementById(targetid),finalRes.length);
            }
            tempRes = tempRes.substring(tempRes.indexOf("^") + 1);
            hashtableMRT.putT(tres1, tempRes);
         }
 

 //Method used for Address Transliteration by Debanarayan Das on 24/07/2012
 
 var storeText="";
 var storeRes="";
 function enableAddress(elementid) 
 {
		
			
			
			 if(document.getElementById('keyBrd').style.visibility=="visible")
			 {
			   return;
			 }
			var text = document.getElementById(elementid).value;
			if(text=="")
			{
			 return;
			}
			storeRes=hashtableAdd2.get2(elementid);
			var n=-1;
			
			if(storeRes!=text)
			{
			 n=text.search(storeRes);
			 
			}
			else
			{
			 
			 return;
			}
			var l=0;
			
            if(typeof(storeRes)!='undefined' && storeRes!="")
            {			 
			  
			  l=storeRes.length;
			}
			var tLen=0; 
			if(typeof(text)!='undefined' && text!="")
            {			 
			  
			  tLen=text.length;
			}
			 storeText=text;
			 
			 if(n!=-1)
			 {
			    if(n==0)
				{
				 text=text.substring(n+l);
				 
				}
				else if(n>0 &&(!(text.charCodeAt(tLen-1)>=0 && text.charCodeAt(tLen-1))<=255)&&(text.charCodeAt(0)>=0 && text.charCodeAt(0)<=127))
				{
				 text=text.substring(0,tLen-l);
				 
				
				}
				else
				{
				 return;
				}
			 }
			  var isEn=false;
               if(n==-1 && (!(text.charCodeAt(tLen-1)>=0 && text.charCodeAt(tLen-1)<=255))&&(!(text.charCodeAt(0)>=0 && text.charCodeAt(0)<=255))&&typeof(text)!='undefined' && text!="")
				{
                				 
				 text="";
				  for(var i=0;i<tLen;i++)
				  {
				   if(!(storeText.charCodeAt(i)>=0 && storeText.charCodeAt(i)<=255))
				   {
				     if(isEn)
					 {
					  break;
					 }
					 continue;
				   }
				   else
				   {
				    if(isEn==false)
					{
				     if((storeText.charCodeAt(i)>=65 && storeText.charCodeAt(i)<=90)||(storeText.charCodeAt(i)>=97 && storeText.charCodeAt(i)<=122))
					 {
					   isEn=true;
					 }
					}
					if(isEn)
					{
				     text=text+storeText.charAt(i);
					}
				   }
				  }
				   isEn=false;
				}
				
				
			var result=hashtableMAR2.get2(text);
			
			
			if(result!=null)
			{
                   if(typeof(storeRes)!='undefined' && storeRes!="")
				   {			       
				    result=storeText.replace(text,result);
				    
				    if(hashtableAdd2.containsKey(elementid))
					{
						hashtableAdd2.remove(elementid);
					}
				   }
					hashtableAdd2.put2(elementid,result);
			        document.getElementById(elementid).value=result;
			}
			else
			{
			
			text=encodeURIComponent(text);
			
			var url3=url+'Transliteration.aspx?enteredText='+text+'&selectedTrans=ADDRESS';
			//Implemented AJAX.
			var httpRequest; 
			
			 if (window.XMLHttpRequest)
			  {
			    httpRequest = new XMLHttpRequest();
              }
            else
             {// code for IE6, IE5
               httpRequest=new ActiveXObject("Microsoft.XMLHTTP");
             }
			 if (!httpRequest) {
                  alert('Cannot create an XMLHTTP instance');
                  return;
               }

			
			
			    try{   
					   
						   
			httpRequest.onreadystatechange=function(){
			
			    
			  if(httpRequest.readyState==4 && httpRequest.status==200)
			  {
				  
				 //Variable for storing result coming from servlet.
				  result=httpRequest.responseText;
				   if(typeof(result)!='undefined' && result!="")
		         {
				   text=decodeURIComponent(text);
				   hashtableMAR2.put2(text,result);
			      
				   if(typeof(storeRes)!='undefined' && storeRes!="")
				   {
				    result=storeText.replace(text,result);
					
				    
				    if(hashtableAdd2.containsKey(elementid))
					{
						hashtableAdd2.remove(elementid);
					}
					
					}
					
					hashtableAdd2.put2(elementid,result);
			        document.getElementById(elementid).value=result;
					}
			    }
			   
			   
			   
		    }
			 httpRequest.open("GET",url3,true);
             httpRequest.send();
			 }
			 catch(err){
			   if (XDomainRequest)
               {
                // IE8
				//corIE8flag=true;
                httpRequest= new XDomainRequest();
				httpRequest.onload=function(){
				 result=httpRequest.responseText;
				  if(typeof(result)!='undefined' && result!="")
		         {
				   text=decodeURIComponent(text);
				   hashtableMAR2.put2(text,result);
			      
				   if(typeof(storeRes)!='undefined' && storeRes!="")
				   {
				    result=storeText.replace(text,result);
					
				    
				    if(hashtableAdd2.containsKey(elementid))
					{
						hashtableAdd2.remove(elementid);
					}
					
					}
					
					hashtableAdd2.put2(elementid,result);
			        document.getElementById(elementid).value=result;
					}
				}
				 
                httpRequest.open("GET", url3);
				httpRequest.send();
				
               }
			 }
			
			}
			
		       
		 }



		 //code for enableAddressontarget


		 function enableAddressOnTarget(elementid, targetid) {



//		     alert(elementid);
//		     alert(targetid);



		     if (document.getElementById('keyBrd').style.visibility == "visible") {
		         return;
		     }
		     var text = document.getElementById(elementid).value;

		     //alert(text);



		     if (text == "") {
		         return;
		     }
		    

//		     var result = hashtableMAR2.get2(text);


//		     if (result != null) {
//		         if (typeof (storeRes) != 'undefined' && storeRes != "") {
//		             result = storeText.replace(text, result);

//		             if (hashtableAdd2.containsKey(elementid)) {
//		                 hashtableAdd2.remove(elementid);
//		             }
//		         }
//		         hashtableAdd2.put2(elementid, result);
//		         document.getElementById(elementid).value = result;
//		     }
		    // else {

		         text = encodeURIComponent(text);

		         var url3 = url + 'Transliteration.aspx?enteredText=' + text + '&selectedTrans=ADDRESS';
		         //Implemented AJAX.
		         var httpRequest;

		         if (window.XMLHttpRequest) {
		             httpRequest = new XMLHttpRequest();
		         }
		         else {// code for IE6, IE5
		             httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
		         }
		         if (!httpRequest) {
		             alert('Cannot create an XMLHTTP instance');
		             return;
		         }



		         try {


		             httpRequest.onreadystatechange = function () {


		                 if (httpRequest.readyState == 4 && httpRequest.status == 200) {

		                     //Variable for storing result coming from servlet.
		                     var result = httpRequest.responseText;
		                     //alert(result);


		                     if (typeof (result) != 'undefined' && result != "") {
		                         text = decodeURIComponent(text);
//		                         hashtableMAR2.put2(text, result);

//		                         if (typeof (storeRes) != 'undefined' && storeRes != "") {
//		                             result = storeText.replace(text, result);


//		                             if (hashtableAdd2.containsKey(elementid)) {
//		                                 hashtableAdd2.remove(elementid);
//		                             }

//		                         }

//		                         hashtableAdd2.put2(elementid, result);
		                         document.getElementById(targetid).value = result;
		                     }
		                 }



		             }
		             httpRequest.open("GET", url3, true);
		             httpRequest.send();
		         }
		         catch (err) {
		             if (XDomainRequest) {
		                 // IE8
		                 //corIE8flag=true;
		                 httpRequest = new XDomainRequest();
		                 httpRequest.onload = function () {
		                     result = httpRequest.responseText;
		                     if (typeof (result) != 'undefined' && result != "") {
		                         text = decodeURIComponent(text);
//		                         hashtableMAR2.put2(text, result);

//		                         if (typeof (storeRes) != 'undefined' && storeRes != "") {
//		                             result = storeText.replace(text, result);


//		                             if (hashtableAdd2.containsKey(elementid)) {
//		                                 hashtableAdd2.remove(elementid);
//		                             }

//		                         }

//		                         hashtableAdd2.put2(elementid, result);
		                         document.getElementById(targetid).value = result;
		                     }
		                 }

		                 httpRequest.open("GET", url3);
		                 httpRequest.send();

		             }
		         }
  

}



//End code for enableAddressontarget



function ValTar(evt){

//    alert(e.keyCode);
//    var code = e.keyCode;
//    var kcode=0;

    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode >=65 && charCode <= 122){
        return false;
    }
    return true;
}




function funProcessing(result)
{
	
	var tempWord="";
	var tempSuggestion="";
				   
	
		//DD code start
		if(tempSuggestion=="")
		{
		   tempSuggestion=result;
		}
		//DD code end
		
         
		//Removing the last extra ^	from the suggestions.
		if(tempSuggestion.lastIndexOf("^")==tempSuggestion.length-1)
		{
			tempSuggestion=tempSuggestion.substring(0,tempSuggestion.lastIndexOf("^"));
			word=tempSuggestion.substring(0,tempSuggestion.indexOf("^"));
			suggestions=tempSuggestion.substring(tempSuggestion.indexOf("^")+1);
			//alert("suggestions1:"+suggestions);
			word=trimSpace(word);
			if(word=="")
			{
              word=tempSuggestion;
			}
			  
			 setResult(word);
			
		}
		else if(result=="")
		{
		  
		  setResult(text);
		}
		else
		{
		   
		  word=tempSuggestion.substring(0,tempSuggestion.indexOf("^"));
		  //suggestions=tempSuggestion;//+"^"+text;
		  suggestions=tempSuggestion.substring(tempSuggestion.indexOf("^")+1);
		  //alert("suggestions2:"+suggestions);
		  setResult(word);
		  
		}
        if(tempSuggestion==decodeURIComponent(text))
        {
	     
	     document.getElementById('sugg').style.visibility="hidden";
	     return;
	   }
		
	if(suggestions=="")
	{
		suggestions=decodeURIComponent(text);
	}
	

	suggOnClick=suggestions;
	//Adding Hindi word as key and suggestions as value in hashtable.
	
	
	if(selLang==languageMn)
	{
		
		hashtableMR.put(word,suggOnClick);    //adding key-value pair in hashtable.
		
	}
	
	setCaretPos();
	if(selectedIndex!=-1)
	{
	 selectedIndex =-1;
	}
	showSuggestions(suggestions);
	word1=word;
	suggestions1=suggestions;
	
}

function setResult(strWord)
{	
  //var isPrev=false;
	
	if(strWord!="")
	{
	 
	//Finding the cursor position to find the first part.
	 cursorPos=globalCursorPos-lenInputWord-1;
	 firstPart = document.getElementById(elementId).value.substring(0, cursorPos);
	 //Finding the cursor position to find the second part.
	cursorPos=globalCursorPos;
	secondPart = document.getElementById(elementId).value.substring(globalCursorPos, document.getElementById(elementId).value.length);
    //Getting length of the output Hindi word.
	lenResult=strWord.length;
	strResult = firstPart + strWord +" "+ secondPart;
    lenText=strResult.length;
	lenILWord=strWord.length;
	storeResult=strWord;
	//Setting result in text area.
	document.getElementById(elementId).value=strResult ;
	}
   else
   {
     return;
   }
	
}
//This function is added to get the coordinates of an element
function getElePos(elem) {

      var ele;
	  var rect;
    if(elem)
	 ele=document.getElementById(elem);
     if(ele)
	  rect=ele.getBoundingClientRect();
     var body = document.body;
     var docElem = document.documentElement;
	 var clientTop=docElem.clientTop||body.clientTop||0;
     var clientLeft=docElem.clientLeft||body.clientLeft||0;
     var clientRight=docElem.clientRight||body.clientRight||0;
     var scrollTop=window.pageYOffset||docElem.scrollTop||body.scrollTop; 
     var scrollLeft=window.pageXOffset||docElem.scrollLeft||body.scrollLeft;
     if(rect)
	 {
	 if(elem!='txtAreaClone')
	 {
	   leftPos=rect.left+scrollLeft-clientLeft;
	   topPos=rect.top+scrollTop-clientTop;
	   rightPos = rect.right;// - clientRight;
	   
	 }
	 else
	 {
	
	  bottomPos=rect.bottom+scrollTop-clientTop;
	  
	 }
	 }
	 
}
//This function is added to get the coordinates of span in case of all browsers except IE        
function getXYPosOfCaret(elemId){
      
	  var strIL;
	  if(elemId)
         strIL=document.getElementById(elemId).value;
      
      if (targetId) {
          setGlobalCursorPos();
      }
	  if(strIL)
	  {
       strIL=strIL.substring(0,globalCursorPos);
	     
	   //Removing the last space from string
	   strIL=strIL.substring(0,strIL.lastIndexOf(" "));
	   //Adding span to resultant string and set to div(txtAreaClone)
	   document.getElementById("txtAreaClone").innerHTML = "";
	   document.getElementById("txtAreaClone").innerHTML = strIL + '<span id="spn"/>';
	   //Getting the left and top position of span
	    getElePos("spn");
	}
	  
}
//This method is called to reset popup when browser will be resized
function setPopup()
{
  
	if(browserName=="msie")
    {
     
 	 
	    
	 if(targetId)
      {
        globalCursorPos = getCursorPos(document.getElementById(targetId));
		getElePos(targetId);
		eleLeftPos=leftPos;
		settingBackCursor(document.getElementById(targetId),globalCursorPos);
	  }
      else{
          if (elementId) {
              globalCursorPos = getCursorPos(document.getElementById(elementId));
              getElePos(elementId);
              eleLeftPos = leftPos;
              settingBackCursor(document.getElementById(elementId), globalCursorPos);
          }
       }
	   
	     topPos=topPos+eleLength+5;
    }
   else
    {
	   if(targetId)
	   {
	    getElePos(targetId);
	    }
	    else{
	    getElePos(elementId);
	    }
	   document.getElementById('txtAreaClone').style.left=leftPos+"px";
	   document.getElementById('txtAreaClone').style.top=topPos+"px";
	   if(targetId)
	   {
	    getXYPosOfCaret(targetId);
	   }
	   else{
	    getXYPosOfCaret(elementId);
	    }
	   
	   getElePos('txtAreaClone');
	   topPos=topPos+eleLength+10;
	   if(topPos>bottomPos)
		 topPos=bottomPos;
	 
	}
    if(document.getElementById('sugg').innerHTML && document.getElementById('sugg').style.visibility=="visible")
	{
      //alert("leftPos:"+leftPos);
	 document.getElementById('sugg').style.left=leftPos+"px";
     document.getElementById('sugg').style.top=topPos+"px";
     document.getElementById('sugg').style.visibility="visible";
     document.getElementById("txtAreaClone").innerHTML="";   
	}
	
	}

//This function is added to tokennize the suggestion list and add to div popup ,then display the popup
function showSuggestions(suggs)
{
   	     
		 if(suggs)
		  {
		   var str=suggs.substring(0,suggs.lastIndexOf("^"));
		   if(storeResult==str)
	       {
	         suggs=suggs.substring(suggs.lastIndexOf("^")+1);
	       }
		 }
		  //alert("suggs2:"+suggs);
	//Code for dynamically creating the div tag and corresponding anchor tags in it for displaying suggestion box.
	var divIdName;
	var ni = document.getElementById('sugg');
	//Clearing the previous value otherwise it keeps on appending suggestion in previous div instead of creating new one.
	ni.innerHTML="";
	var index=0;
	var suggCount = 0;
									
	//Creating anchor tag dynamically & setting in div until suggestions contain comma ie for each suggestion except the last one.
	
	if(suggs =="" || suggs==null)
	{
		 
		document.getElementById('sugg').style.visibility="hidden";
	}
	else
	{
	    var maxLenSugg = 0;
			 
	   while(suggs.indexOf("^")!=-1)
		{
			arrSugg[index]=suggs.substring(0,suggs.indexOf("^"));
			
			//var ni = document.getElementById('sugg');
			
			//var newdiv = document.createElement('suggestions');
			var newdiv = document.createElement('div');
			divIdName = arrSugg[index];
			if (maxLenSugg < divIdName.length)
			    maxLenSugg = divIdName.length;
			newdiv.setAttribute('id',divIdName);
			
			/*newdiv.innerHTML = '<font face="" size="3pt"><b>'+divIdName+'</b></font>';
			commented and written above for selecting sugg from popup using arrow keys */
			newdiv.innerHTML = '<center><a href="javascript:funDoNothing()" onclick="funClick(this)" style="font-size:11pt;font-weight:normal;text-decoration:none;color:black;">' + divIdName + '</a></center>';
			ni.appendChild(newdiv);
			suggs=suggs.substring(suggs.indexOf("^")+1);
			index++;
			if (index == 9)
			    break;
		}

        //alert("suggs:" + suggs);
        //Creating anchor tag dynamically & setting in div for last suggestion.

        if (suggs.lastIndexOf("^")==suggs.length - 1)
            suggs = suggs.substring(0, suggs.lastIndexOf("^"));
		arrSugg[index]=suggs.substring(suggs.lastIndexOf("^")+1);
		var noSugg=index+1;
		divIdName = arrSugg[index];
		if (maxLenSugg < divIdName.length)
		    maxLenSugg = divIdName.length;
		//var newdiv = document.createElement('suggestions');
		var newdiv = document.createElement('div');
		newdiv.setAttribute('id',divIdName);
		
		/*newdiv.innerHTML = '<font face="" size="3pt"><b>'+divIdName+'</b></font><br>';
		commented and written above for selecting sugg from popup using arrow keys*/ 
	   newdiv.innerHTML = '<center><a href="javascript:funDoNothing()" onclick=\'funClick(this)\' style="font-size:11pt;font-weight:normal;text-decoration:none;color:black;">'+divIdName+'</a></center>';
		//var ni = document.getElementById('sugg');
		ni.appendChild(newdiv);
		var newdiv1 = document.createElement('div');
		newdiv1.setAttribute('id','imgcg');
		newdiv1.innerHTML="<hr/><img src='"+transJSPath+"/images/CDAC-GIST.bmp' alt='CDAC Gist' width='55' height='20'></img>";			
		ni.appendChild(newdiv1);
	}
	if(document.getElementById('sugg').innerHTML)
	{
	  
	  //Setting left and top position of pop-up  
          var eleid;
	    if (targetId)
	        eleid = targetId;
	    else {
	        eleid = "";
	        eleid = elementId;
	    }
			if(getBrowserName()=="msie")
			{
			    if (document.getElementById(eleid).type == "textarea")//Multiline Textbox
                {
                
                 topPos = (topPos - eleTopPos) + 15;
                 document.getElementById('sugg').style.left = leftPos - eleLeftPos + "px";
                 document.getElementById('sugg').style.top = topPos + "px";
				}
	           else {
                
                 //Singleline
	            //alert("singleline");

	             topPos = topPos + eleLength + 5;
	             leftPos = leftPos + 3;
	             document.getElementById('sugg').style.left = leftPos + "px";
	             document.getElementById('sugg').style.top = topPos + "px";
	            }
			     if (maxLenSugg < lenInputWord)
	                maxLenSugg = lenInputWord;
	             document.getElementById('sugg').style.width = (maxLenSugg * 11) + "px";
			    
			}
			else
			{
			    
	           getXYPosOfCaret(eleid);
	           if (document.getElementById(eleid).type == "textarea") {
                
	            //getXYPosOfCaret(elementId);
	            topPos = topPos + 15;
	            //leftPos = leftPos + 10;
	            getElePos('txtAreaClone');
	            //alert("top:" + topPos);
	            //alert("eleTopPos:" + eleTopPos);
	            //alert("bottomPos:" + bottomPos);
	            if (topPos > bottomPos)
	                topPos = bottomPos + 3;
                document.getElementById('sugg').style.left =leftPos+ "px";
	            document.getElementById('sugg').style.top = topPos + "px";

	           }
               else {
	            //alert("Singleline");
	            topPos = topPos + eleLength + 5;
	            //alert("topPos" + topPos);
	            getElePos('txtAreaClone');

	            if (topPos > bottomPos)
	                topPos = bottomPos + 3;
	           if (document.getElementById(eleid).getAttribute("type") == "text") {
	               
	                if (leftPos >= storeRP - 25) {
	                    gcp = globalCursorPos;
	                }

	                if (gcp <= globalCursorPos) {
	                    leftPos = storeRP - 10;
	                }
	            }

	            //alert("leftPos1:" + leftPos);
	            document.getElementById('sugg').style.left = leftPos + "px";
	            document.getElementById('sugg').style.top = topPos + "px";

	            }

	    }

	    
	   document.getElementById('sugg').style.visibility="visible";
	   document.getElementById("txtAreaClone").innerHTML="";
	  
	   
	  }
	  
	   if(targetId)
	  {
	    
	     //settingBackCursor(document.getElementById(targetId), document.getElementById(targetId).value.length);
	      document.getElementById(targetId).focus();
	  }	 
	
}

function setCaretPos()
{
	

	 //This function sets the cursor position.
	 
    
    if(targetId)
    {
     settingBackCursor(document.getElementById(targetId),globalCursorPos);
    }
    else{
    //Variable for storing the differnce between the length of input word and the length of result. 
	var diff=0;
	
	//If length of input word > length of result then their diff. should be subtracted from the position of cursor.
	if(lenInputWord>lenResult)
	 {  
			diff=lenInputWord-lenResult;
			globalCursorPos=globalCursorPos-diff;
	 }
	 //If length of result > length of input word then their diff. should get added to the position of cursor.
	else if(lenResult>lenInputWord)
	 {
		diff=lenResult-lenInputWord;
		globalCursorPos=globalCursorPos+diff;
	 }
	 settingBackCursor(document.getElementById(elementId),globalCursorPos);
	 }
}

//This function gets called when user clicks on any one of the suggestions.
function funClick(anchorTag)
{ 
	//Variable for storing the value of clicked word.
	
	var clickedWord="";
	  if(anchorTag.innerHTML)
	  {
	    clickedWord=anchorTag.textContent || anchorTag.innerText;
		//fcFlag=true;
      }
	 else
	 {
	   clickedWord=anchorTag;
	 }
	 
	wordC=trimSpace(clickedWord);

	clickedWord=trimSpace(clickedWord);
	
	clickedWord=clickedWord.replace(/&amp;/gi,"&");
	clickedWord=clickedWord.replace(/&gt;/gi,">");
	clickedWord=clickedWord.replace(/&lt;/gi,"<");
	 
	
    
	//Set the clicked value to be reflected in textarea
      storeClickedWord=clickedWord;
	
      if(flagDblClk=="1")
	  {
	   strResult = firstPart + clickedWord+ secondPart;
	  }
	  else{
	  strResult = firstPart + clickedWord +" "+ secondPart;
	  }
	//Setting the result as value of text area.
	if(targetId)
	{
	 document.getElementById(targetId).value=strResult;
	}
	else{
	 document.getElementById(elementId).value=strResult;
	 //document.getElementById(elementId).focus();
	 }
	var lenNewVal=clickedWord.length;
	var diffr;
	
	if(flagDblClk=="1")
	{
		//alert("globalCursorPos:"+globalCursorPos);
		globalCursorPos=globalCursorPos+lenSelWord+1; //for selected word.
		flagDblClk=-1;
	}
	
	cursorPos=globalCursorPos;
    
	//Same logic of add/sub the diff that implemented above.
	if(lenNewVal>lenResult)
	 {
		
		diffr=lenNewVal-lenResult;
		//alert("diffr:"+diffr);
		cursorPos=cursorPos+diffr;
		//alert("cursorPos:"+cursorPos);
	 }
    else if(lenResult>lenNewVal)
     {
		diffr=lenResult-lenNewVal;
		cursorPos=cursorPos-diffr;
     }
	
	if(wordC!="")
	{
	    
		putSuggInHashTable();
	}
	
	if(targetId)
	{
	 //settingBackCursor(document.getElementById(elementId),document.getElementById(elementId).value.length);
	  document.getElementById(targetId).focus();
	}
	else{
	 
	 settingBackCursor(document.getElementById(elementId),cursorPos);
	}
	 
    document.getElementById('sugg').style.visibility="hidden";
   
}

function putSuggInHashTable()
{
	
	var tempSugg="";
	if(dWord!="" && dSuggestions!="" )
	{
		tempSugg=dWord+"^"+dSuggestions;	
		
		dWord="";
		dSuggestions="";

	}
	else
	{
		tempSugg=word1+"^"+suggestions1;

}

if (tempSugg) {
      if(engflag)
	  {
	    text=tempSugg.substring(0,tempSugg.indexOf("^"));
		tempSugg=tempSugg.substring(tempSugg.indexOf("^")+1)+"^"+text;
		engflag=false;
	  }
	  else
	  {
       text = tempSugg.substring(tempSugg.lastIndexOf("^") + 1);
	  }
}

    //alert("text:" + text);
	clickedWord=wordC;
	wordC="";
	clickedWord=trimSpace(clickedWord);
    clickedWord=clickedWord.replace(/&amp;/gi,"&");
	clickedWord=clickedWord.replace(/&gt;/gi,">");
	clickedWord=clickedWord.replace(/&lt;/gi,"<");
	
	var sug2Match="";
	var finalSugg="";
	if(targetId)
	{
	if (!text) {
	 tempSugg=tempSugg.substring(0,tempSugg.lastIndexOf("^"));
     text = tempSugg.substring(tempSugg.lastIndexOf("^") + 1);
    }
	}
	
	while(tempSugg.indexOf("^")!=-1)
	{
		var sug2Match=tempSugg.substring(0,tempSugg.indexOf("^"));
		
		if(clickedWord==sug2Match)
		{
			finalSugg=finalSugg;
			//alert("finalSugg:"+finalSugg);
			tempSugg=tempSugg.substring(tempSugg.indexOf("^")+1);
			
		}
		else
		{
			if(finalSugg=="")
			{
			 finalSugg=sug2Match;
			}
			else
			{
			 finalSugg=finalSugg+"^"+sug2Match;
			}
			tempSugg=tempSugg.substring(tempSugg.indexOf("^")+1);
			
		}
	}
   
	if(clickedWord!=tempSugg)
		finalSugg=finalSugg+"^"+tempSugg;

	
	tempSugg=finalSugg;
	
	
	
	if(selLang==languageMn)
	{
	    
		text = trimSpace(text);
		var updateResult=clickedWord+"^"+tempSugg;
		
		 if(text==clickedWord)
		 {
		  if(transDi=="REVERSE")
		  {
		   if(!(clickedWord.charCodeAt(0)>=0 && clickedWord.charCodeAt(0)<=255))
		   {
		     engflag=true;
		   }
		  }
		  else
		  {
		   if((clickedWord.charCodeAt(0)>=0 && clickedWord.charCodeAt(0)<=127))
		   {
		     engflag=true;
		   }
		  }
		  
		 }
		
		
		
		if(updateResult)
		{
	    if (targetId) {
	        hashtableMRT.putT(clickedWord, tempSugg);
			if (hashtableMR.containsKey(text)) 
			{
			   hashtableMR.remove(text);
               hashtableMR.put(text, updateResult);
            }
            else {
                   hashtableMR.put(text, updateResult);
                 }
	        
	    }
	    else {
	        hashtableMR.put(clickedWord, tempSugg);
			          if (hashtableMR2.containsKey2(text)) {
                                 hashtableMR2.remove2(text);
                                 hashtableMR2.put2(text, updateResult);

                             }
							 else
							 {
							 hashtableMR2.put2(text, updateResult);
							 }
	    }   //adding key-value pair in hashtable.
	}
	
	}
	
	
        
}

var dWord="";
var dSuggestions="";

function funShowSuggOfSelWord(currCtrlId,isTarget)
{
	
	if(isTarget == "True") 
	 {
	     targetId = currCtrlId;
	     
     }
	 else
	 {
       targetId="";
       elementId = currCtrlId;
       
     }
     
    dWord="";
	dSuggestion="";
	if(wordC!="")
	{
		putSuggInHashTable();
	}
	
	flagDblClk="1";
	
	if(selectedIndex!=-1)
	{
	 selectedIndex =-1;
	}
	
	setGlobalCursorPos();
    var sugg2Display="";
	selWord=getSelText();
	if(targetId)
	{
	 if(selWord=="")
	 {
	   
	   if(globalCursorPos==0)
	   {
	     var str1=document.getElementById(targetId).value;
	     selWord=str1.substring(0,str1.indexOf(" "));
	   }
	  
	 }
	 }
	selWord=trimSpace(selWord);
	dWord=selWord;
	word1=selWord;
    lenSelWord=selWord.length;
	lenResult=lenSelWord; //for using dis value in funClick();

	//Finding the cursor position to find the first part.
     if(browserName=="msie")
     {
      cursorPos=globalCursorPos+lenSelWord;
     }
     else{
       cursorPos=globalCursorPos;
     }
	
	if(targetId)
	{
	 firstPart = document.getElementById(targetId).value.substring(0, cursorPos);
	}
	else{
	 firstPart = document.getElementById(elementId).value.substring(0, cursorPos);
	}
	
	//Finding the cursor position to find the second part.
	cursorPos=globalCursorPos+lenSelWord;
	if(targetId)
	{
	 secondPart = document.getElementById(targetId).value.substring(cursorPos, document.getElementById(targetId).value.length);
	}
	else{
	 secondPart = document.getElementById(elementId).value.substring(cursorPos, document.getElementById(elementId).value.length);
	 }
	
	
	if(selLang==languageMn)
	{
	      if (targetId)
		  {

		      sugg2Display = hashtableMRT.getT(selWord);
		      
		  }
		  else
		  {
	        sugg2Display = hashtableMR.get(selWord);
		   
		  }
	   
	}
	
    dSuggestions=sugg2Display;
	suggestions1=sugg2Display;
	//***************************************
	 //if(browserName=="msie")
     //{
      
      if(targetId)
      {
        setClone(targetId);  
		firstPart = document.getElementById(targetId).value.substring(0,globalCursorPos);
        settingBackCursor(document.getElementById(targetId),cursorPos);
		
      }
    else {
         setClone(elementId);  
         firstPart = document.getElementById(elementId).value.substring(0,globalCursorPos);
         settingBackCursor(document.getElementById(elementId),cursorPos);
	    }
    // }
	 if(sugg2Display)
	 {
	  
	   var strSug=sugg2Display.substring(0,sugg2Display.lastIndexOf("^"));
	   if(selWord==strSug)
	   {
	    storeResult=strSug;
	   }
	  
	 }
	  showSuggestions(sugg2Display);
}

function getSelText()
{
  if (document.getSelection) 
  {
        var elementID="";
			if(targetId)
			{
			 elementID=targetId;
			 }
			 else{
			 elementID=elementId;
			 }
		if(document.getElementById(elementID).selectionStart ||document.getElementById(elementID).selectionStart=='0')
		{
			
			
			var startTa = document.getElementById(elementID).selectionStart;
			var endTa =document.getElementById(elementID).selectionEnd;
			var str = document.getElementById(elementID).value;
			str=str.substring(startTa,endTa);
		}
		else
		{
			var str = document.getSelection();
			if (window.RegExp)
			{
			  var regstr = unescape("%20%20%20%20%20");	
			  var regexp = new RegExp(regstr, "g");
			  var str = str.replace(regexp, "");
			}
		 }
  }
  else if (document.selection && document.selection.createRange)
  {
    
    var range = document.selection.createRange();
    var str = range.text;
  }
  else 
  {
    var str = "Sorry, this is not possible with your browser.";
  }
   if(str.indexOf(" ")!=-1)
		str = str.substring(0,str.indexOf(" "));	//Trimming
   return str;
}

/****************************************************************************************/

function Hashtable(){
    this.clear = hashtable_clear;
    this.containsKey = hashtable_containsKey;
    this.containsValue = hashtable_containsValue;
    this.get = hashtable_get;
    this.isEmpty = hashtable_isEmpty;
    this.keys = hashtable_keys;
    this.put = hashtable_put;
    this.remove = hashtable_remove;
    this.size = hashtable_size;
    this.toString = hashtable_toString;
    this.values = hashtable_values;
    this.hashtable = new Array();
    this.hashtable2 = new Array();
    this.hashtableT = new Array();
	this.get2=hashtable2_get;
	this.put2 = hashtable2_put;
    this.remove2=hashtable2_remove;
	this.containsKey2 = hashtable2_containsKey;
	this.getT = hashtableT_get;
	this.putT = hashtableT_put;
	this.clearT = hashtableT_clear;
	this.removeT = hashtableT_remove;
	this.containsKeyT = hashtableT_containsKey;
}

/*=======Private methods for internal use only========*/

function hashtable_clear(){
    this.hashtable = new Array();
	this.hashtable2=new Array();
}
function hashtableT_clear() {
    this.hashtableT = new Array();
}
function hashtable_containsKey(key){
    var exists = false;
    for (var i in this.hashtable) {
        if (i == key && this.hashtable[i] != null) {
            exists = true;
            break;
        }
    }
    //alert("exists:" + exists);
    return exists;
}
function hashtable2_containsKey(key){
    var exists = false;
    for (var i in this.hashtable2) {
        if (i == key && this.hashtable2[i] != null) {
            exists = true;
            break;
        }
    }
	
    return exists;
}
function hashtableT_containsKey(key) {
    var exists = false;
    for (var i in this.hashtableT) {
        if (i == key && this.hashtableT[i] != null) {
            exists = true;
            break;
        }
    }
    
    return exists;
}

function hashtable_containsValue(value){
    var contains = false;
    if (value != null) {
        for (var i in this.hashtable) {
            if (this.hashtable[i] == value) {
                contains = true;
                break;
            }
        }
    }
    return contains;
}

function hashtable_get(key){
    return this.hashtable[key];
}

function hashtable_isEmpty(){
    return (parseInt(this.size()) == 0) ? true : false;
}

function hashtable_keys(){
    var keys = new Array();
    for (var i in this.hashtable) {
        if (this.hashtable[i] != null) 
            keys.push(i);
    }
    return keys;
}

function hashtable_put(key, value){
	if (key == null || value == null) {
        this.hashtable[key] = value;
    }else{
	
        this.hashtable[key] = value;
    }
}
//Key is English word and value is word*suggestion.
function hashtable2_put(key, value){
	if (key == null || value == null) {
        this.hashtable2[key] = value;
    }else{
	
        this.hashtable2[key] = value;
      
	}
}

function hashtable2_get(key){
	
    return this.hashtable2[key];
}
function hashtableT_put(key, value) {
    if (key == null || value == null) {
        this.hashtableT[key] = value;
    } else {

        this.hashtableT[key] = value;

    }
}

function hashtableT_get(key) {

    return this.hashtableT[key];
}

function hashtable_remove(key){
    var rtn = this.hashtable[key];
    this.hashtable[key] = null;
    return rtn;
}

function hashtable2_remove(key){
    var rtn = this.hashtable2[key];
    this.hashtable2[key] = null;
    return rtn;
}

function hashtableT_remove(key) {
    var rtn = this.hashtableT[key];
    this.hashtableT[key] = null;
    return rtn;
}

function hashtable_size(){
    var size = 0;
    for (var i in this.hashtable) {
        if (this.hashtable[i] != null) 
            size ++;
    }
    return size;
}

function hashtable_toString(){
    var result = "";
    for (var i in this.hashtable)
    {      
        if (this.hashtable[i] != null) 
            result += "{" + i + "},{" + this.hashtable[i] + "}\n";   
    }
    return result;
}

function hashtable_values(){
    var values = new Array();
    for (var i in this.hashtable) {
        if (this.hashtable[i] != null) 
            values.push(this.hashtable[i]);
    }
    return values;
}

function trimSpace(tWord)
{
	if(tWord.indexOf(" ")!=-1)
	 {
		
		if(tWord.indexOf(" ")==0)
		 {
			//Trimming leading spaces
			tWord = tWord.substring(tWord.indexOf(" ")+1);	
		 }
		 if(tWord.lastIndexOf(" ")==tWord.length-1)
		 {
			 //Trimming trailing spaces
			tWord = tWord.substring(0,tWord.lastIndexOf(" "));
		 }
	 }
  return tWord;
}


//This function is being called on body unload event to delete all the .jpg files that have been created during text to image processing.

function Indic_Transliteration_doUnload()
{  
    	  
	document.getElementById('sugg').style.visibility="hidden";
	hashtableMRT.clearT();
	hashtableMR.clear();
}


//****************************************************************CODE TO SELECT FROM POPUP*******************************************************

       
        function keyPressed(evt) 
		{
		    
		    
            switch (evt.charCode || evt.keyCode) 
			{
                case 38: // UP
                    if (--selectedIndex < 0)
                        selectedIndex = 0;
						//alert("Up:"+selectedIndex);
                        updateSelection(38);
                        break;
                case 40: // DOWN
                    if (++selectedIndex >=(itemCount-1))
				        selectedIndex = itemCount - 2;
					   //alert("Down:"+selectedIndex)
					 updateSelection(40);
                     break;
            }
            return true;
        }
        function updateSelection(key) 
		{
            var div = document.getElementById('sugg');
            if(div.childNodes[selectedIndex].id=='imgcg')
		    {
			   
			  return;
			}
            itemCount = 0;
			var isSelected=false;
            
            var item = div.firstChild;
            
            while (item) 
			{
                if (item.nodeName =='DIV') 
				{
				   
				    if(itemCount == selectedIndex)
					{
					   item.className='selected';
				       selectedText=item.textContent || item.innerText;
					   itemCount=div.childNodes.length-1;
					   
					
					   isSelected=true;
					   
					}
					else if(isSelected)
					{
					  
					 item.className ='';
					 break;
					}
					else
					{
					 
					 item.className ='';
					}
                    ++itemCount;
					//alert(itemCount);
                }
                item = item.nextSibling;
            }
        }
//************************************************************************************************************************************************

 //This function counts the number of words in text area
function WordCount()
{
 var wcText=document.getElementById(elementId).value;
 var r = 0;
 wcText=wcText.replace(/\s/g,' ');
 wcText=wcText.split(' ');
 for (z=0; z<wcText.length; z++) 
 {
   if(wcText[z].length > 0) 
     r++;
 }
  return r;
}
function WordCount1(engtext)
{
 var wcText=engtext;
 var r = 0;
 wcText=wcText.replace(/\s/g,' ');
 wcText=wcText.split(' ');
 for (z=0; z<wcText.length; z++) 
 {
   if(wcText[z].length > 0) 
     r++;
 }
  return r;
}
function CheckArrowKey(e)
{
    
  
	if(!e)
     {
	    e=window.event;
     }
     
	  
	 if(e.keyCode==9){
	 document.getElementById('sugg').style.visibility='hidden';
}	 
     if (e.keyCode == 27) {
	    document.getElementById('sugg').style.visibility='hidden';
	    if(browserName=="msie")
		{
	     e.returnValue=false;
		}
		else
		{
		  
		  e.preventDefault();
		}
	 }
	 if(e.keyCode==17)
	 {
	   isCtrl=true;
	   
	   return;
	 }
	 else if(e.keyCode==16)
	 {
	   isShift=true;
	   return;
	 }
	 
	 
	//Code added to select suggs from popup
	  if(e.keyCode==13 && document.getElementById('sugg').style.visibility=='visible')
	  {
	    
		
		  if(e.preventDefault)
			 e.preventDefault();
		 else{
		    e.cancelBubble = true;
			e.returnValue=false;
		 }
	  }
        if(e.keyCode==38 && document.getElementById('sugg').style.visibility=='visible')
	    {
	        if(e.preventDefault)
			   e.preventDefault();
		  
	    }
	   if(document.getElementById('keyBrd').style.visibility=="visible")
	    {
		  return;
	    }
		else
		{
	     clean();
		}
     
}
function clean()
{
  if(trID)
	 {
	    if(elID)
		{
	   if(document.getElementById(elID).value=="")
	   {
	     document.getElementById(trID).value="";
         if (targetId == trID)
		 document.getElementById('sugg').style.visibility="hidden";
	   }
	   }
	 }
}
//Licensed to Government of Maharashtra under CoE. This tool/dll/file is for non-commercial use. For commercial license contact info.gist@cdac.in”. 