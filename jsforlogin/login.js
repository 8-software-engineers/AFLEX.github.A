document.getElementById("error").style.display = 'none';

document.getElementById("action").onsubmit = function () {
    let username = document.getElementById("Username").value;
    let password = document.getElementById("Password").value;
    if ((username == 'aflex' && password == '8ahmedinoneteam')||(username == 'ahmed' && password == '123456789')||(username == 'Bishoy' && password == '20 deg for every one')) {
    return true;
}
else{
    document.getElementById("error").style.display = 'block'

return false;
}
}
