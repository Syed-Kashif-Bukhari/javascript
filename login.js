var y = ("Welcome To Bukhari Project");
alert(y);







function myFunction() {
    var person = prompt("Please enter your name", "Syed Kashif Bukhari");
    
    if (person != null) {
        document.getElementById("demo1").innerHTML =
        "Hello " + person + "! How are you today?";
    }
}