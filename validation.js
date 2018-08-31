var formValues = (localStorage.formValues && localStorage.formValues.length) ? JSON.parse(localStorage.formValues) : [];

//localStorage.formValues = "[]"; 
 
//display(formValues);
display(formValues); 
submit.addEventListener('click', function(){
    
var uname = document.getElementById("uname");
var pwd =   document.getElementById("password");
var firstn =   document.getElementById("fname");
var lastn =   document.getElementById("lname");
var emailid_ =   document.getElementById("email");
var submit = document.getElementById("submit");
var radio=document.getElementsByName("gender");
var radiodiv = document.getElementById("radiodiv");
var locn = document.getElementById("location");
    
    
    checkText();
    var p;
 valid=true;
function checkText(){
   p=document.getElementsByClassName('p');
    for(i=0; i<p.length; i++){
         if(p[i].innerText!=""){
       p[i].innerText="";
         };
    };
};
   
    if(uname.value == ""){
      uname.insertAdjacentHTML('afterend', '<p class = "p" id = "p1" style="color:Red; display:inline;">Please enter username</p>');
        valid=false;
    }
     
            
     
     if(pwd.value == ""){
     pwd.insertAdjacentHTML('afterend', '<p class = "p" id = "p2" style="color:Red; display:inline;">Please enter password</p>');
         valid=false;
    }
     
     
       if(firstn.value == ""){

           firstn.insertAdjacentHTML('afterend', '<p class = "p" id = "p3" style="color:Red; display:inline;">Please enter First Name</p>');
           
            valid=false;
           
    }
    
    
       if(lastn.value == "" ){
              //   var newText = document.createElement('p');
         //newText.innerHTML = "Please enter Last Name";
    
       //div4.appendChild(newText);
           
           lastn.insertAdjacentHTML('afterend', '<p class = "p" id = "p4" style="color:Red; display:inline;">Please enter Last Name</p>');
          valid=false;
    }
    
     
       if(emailid_.value == ""){
       // alert("Please enter Email");
       // var newText = document.createElement('p');
         //newText.innerHTML = "Please enter Email";
    
       //div5.appendChild(newText);
           emailid_.insertAdjacentHTML('afterend', '<p class = "p" id = "p5" style="color:Red; display:inline;">Please enter Email</p>');
           
           valid=false;
    }
    
    
    if(locn.value == ""){
      
             locn.insertAdjacentHTML('afterend', '<p class = "p" id = "p6" style="color:Red; display:inline;">Please enter location</p>');
            valid=false;
    }
    if (!(radio[0].checked || radio[1].checked)){
      //   var newText = document.createElement('p');
         //newText.innerHTML = "Please select gender";
        //div6.appendChild(newText);
           radiodiv.innerHTML="Please select gender";
        valid=false;
        
    }
    else if((radio[0].checked || radio[1].checked)){
        
     radiodiv.innerHTML="";
     
    }
    
     
   if(valid  ) {
        var user = uname.value;
          var pw = password.value;
          var firstname = fname.value;
          var lastname = lname.value;
         var emailadd=email.value;
         var loc=locn.value;
       var gendersel= document.querySelector('input[name="gender"]:checked').value;
         radiodiv.innerHTML="";
        
        saveData();
         }
     

    function saveData(){
        var values = {
        name: user,
        pwd: pw,
        firstname: firstname,
        lastname: lastname,
        email: emailadd,
        gender: gendersel,
        location: loc
        
    }; //create object
       
    formValues.push(values); //push object into array
   
    localStorage.formValues = JSON.stringify(formValues);  // Write to localStorage in string form
       
       if(localStorage.formValues){
      formValues = JSON.parse(localStorage.formValues);
          display(formValues); 
       }
    }

});
    
  
           function display(formValues){
       var html = "<table border='1'><h3 > USER DETAILS </h3>";

						html += "<tr>" ;
						html += "<td> USERNAME </td>" ;
						html += "<td> PASSWORD </td>" ;
						html += "<td> FIRST NAME </td>" ;
						html += "<td> LAST NAME </td>" ;
						html += "<td> EMAIL </td>" ;
						html += "<td> GENDER </td>" ;
                        html += "<td> LOCATION </td>" ;

						for (var i = 0; i < formValues.length; i++) {

					    html += "<tr>" ;
					    html += "<td>" + formValues[i].name+"</td>";
					    html += "<td>" + formValues[i].pwd + "</td>";
					    html +=	"<td>" + formValues[i].firstname + "</td>" ;
					    html +=	"<td>" + formValues[i].lastname + "</td>" ;
					    html +=	"<td>" + formValues[i].email + "</td>" ;
					    html +=	"<td>" + formValues[i].gender + "</td>" ; 
                        html +=	"<td>" + formValues[i].location + "</td>" ;   
					    html+="</tr>";
   }
       html+="</table>";
        document.getElementById("table").innerHTML = html;
   
   }
       
       
   