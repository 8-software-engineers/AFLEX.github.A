document.getElementById("error").style.display = 'none';

document.getElementById("action").onsubmit = function () {
    let username = document.getElementById("Username").value;
    let password = document.getElementById("Password").value;
    if (username == 'aflex' && password == '8ahmedinoneteam') {
    return true;
}
else{
    document.getElementById("error").style.display = 'block'

return false;
}
}
// Create a function for setting a variable value
function myFunction_set1() {
    var rs = getComputedStyle(r);
    // Set the value of variable --blue to another value (in this case "lightblue")
    r.style.setProperty('--main-color', '#dca523');
    r.style.setProperty('--main-color-more-dark2', '#a07512');
    r.style.setProperty('--main-color-more-dark1 ', '#684d0f');
    r.style.setProperty('--second-color', '#ffffff1a');
    r.style.setProperty('--background-color', '#0f0a05');
    r.style.setProperty('--second-text-color', '#fff');
    r.style.setProperty('--important-red', '#b50a0a');
}
function myFunction_set2() {
    var rs = getComputedStyle(r);
    // Set the value of variable --blue to another value (in this case "lightblue")
    r.style.setProperty('--main-color', '#FFFFFF');
    r.style.setProperty('--main-color-more-dark2', '#333');
    r.style.setProperty('--main-color-more-dark1', '#000000');
    r.style.setProperty('--second-color', '#053933');
    r.style.setProperty('--background-color', '#181D25');
    r.style.setProperty('--second-text-color', '#333');
    r.style.setProperty('--important-red', 'green');
}
