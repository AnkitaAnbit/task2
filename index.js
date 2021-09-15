function validate(){
    var title = document.getElementById('title').value;
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var position = document.getElementById('position').value;
    var company = document.getElementById('company').value;
    var arena = document.getElementById('arena').value;
    var employ = document.getElementById('employ').value;
    var street = document.getElementById('street').value;
    var info = document.getElementById('info').value;
    var zip = document.getElementById('zip').value;
    var place = document.getElementById('place').value;
    var country = document.getElementById('country').value;
    var code = document.getElementById('code').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('mail').value;
    var terms = document.getElementById('terms').value;
    


    if (title == "Select"){
        document.getElementById('Title').innerHTML = "**Please choose an Option";
        return false;
    }
    if (fname==null || fname==""){
        document.getElementById('name').innerHTML = "**Please fill the first name field";
        return false;
    }
    if (lname==null || lname==""){
        document.getElementById('name1').innerHTML = "**Please fill the last name field";
        return false;
    }
    if (position == "position"){
        document.getElementById('Position').innerHTML = "**Please choose an Option";
        return false;
    }
    if (company == ""){
        document.getElementById('Company').innerHTML = "**Please fill the company field";
        return false;
    }
    if (arena == ""){
        document.getElementById('Arena').innerHTML = "**Please fill the company field";
        return false;
    }
    if (employ == "employ"){
        document.getElementById('Employ').innerHTML = "**Please choose an Option";
        return false;
    }
    if (street == ""){
        document.getElementById('Street').innerHTML = "**Please fill the street Number";
        return false;
    }
    if (info == ""){
        document.getElementById('Info').innerHTML = "**Please fill Information field";
        return false;
    }
    if (zip == ""){
        document.getElementById('Zip').innerHTML = "**Please fill the Zip code";
        return false;
    }
    if (zip.length<=3 ){
        document.getElementById('Zip').innerHTML = "**Please fill valid code";
        return false;
    }
    if (place == "Place"){
        document.getElementById('Place').innerHTML = "**Please choose an option";
        return false;
    }
    if (country == "country"){
        document.getElementById('Country').innerHTML = "**Please choose an option";
        return false;
    }
    if (code.length == ""){
        document.getElementById('Code').innerHTML = "**Please fill the code";
        return false;
    }
    if (code.length=2){
        document.getElementById('Code').innerHTML = "**Please fill valid code";
        return false;
    }
    if (phone==""){
        document.getElementById('Phone').innerHTML = "**Please fill the Mobile field";
        return false;
    }
    if (isNaN(phone) || phone.length!=10 ){
        document.getElementById('Phone').innerHTML = "**Please fill a valid mobile number";
        return false;
    }
    if (email==""){
        document.getElementById('Mail').innerHTML = "**Please fill the email field";
        return false;
    }
    if (email.indexOf('@') <= 0){
        document.getElementById('Mail').innerHTML = "**Please fill the a valid email";
        return false;
    }
    if ((email.charAt(email.length-4) != '.') && (email.charAt(email.length-3) != '.') ){
        document.getElementById('Mail').innerHTML = "**Please fill the a valid email";
        return false;
    }
    if (terms.checked != true ){
        document.getElementById('Terms').innerHTML = "**agree to terms and condition to register";
        return false;
    }


}
