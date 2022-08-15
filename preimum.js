

// function initInput() {
//     var variable = "asdodih127faasdiu2261238dsakj";
//     document.forms[0].fid_17.variable = variable;
//     if (document.forms[0].fid_17.variable == variable) {
//         console.log("works")
//     }
//     else {
//         print("WRONG")
//     }
// }

console.log("suck");



document.getElementById("sbtn").addEventListener("click", submitbtn);


var secretPasscode = "abc69";

function submitbtn() {
    var mainInput = document.getElementById("minput").value;

    if (mainInput == secretPasscode) {
        console.log("works");
        window.location.href = "/secret/secretpage/verrysecretpage/premiumPage/premiumppage.html"        
    }else {
        alert("WRONG CODE (POLiCE HAS BEEN NOTIFIED!")
    }

}