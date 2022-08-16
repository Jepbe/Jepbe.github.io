document.getElementById("sbtn").addEventListener("click", submitbtn);
console.log("suck");

var secretPasscode = "abc69";   // secret passcode

function submitbtn() {
    var mainInput = document.getElementById("minput").value;
    if (mainInput == secretPasscode) {
        console.log("works");  //Test if works
        window.location.href = "/secret/secretpage/verrysecretpage/premiumPage/premiumppage.html"        
    }else {
        alert("WRONG CODE (POLiCE HAS BEEN NOTIFIED!")
    }
}