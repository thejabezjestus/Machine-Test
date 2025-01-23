function validate(){

    let Username = document.getElementById("Username").
    value;
    let Password = document.getElementById("password").
    value;

    if(Username =="webdev" && Password=="12345"){

        alert( "Login successful")

    } else{
    alert("Login failed")
    } 
}