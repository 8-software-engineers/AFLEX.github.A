// let error=document.getElementsByClassName("error");

// document.getElementById('action').onsubmit=function() 
// {
//     let Username = document.getElementById("Username").Value;
//     let Password = document.getElementById("Password").Value;
    
//     if( Username != 'A_flex' || Password != "123456789" )
//     {
//         error.Classlist.add('not_error');
//         return false;
//     } 

//     else
//         {
//             return true;
//         }
// }
document.getElementById("action").onsubmit = function () {
    let username = document.getElementById("Username").value;
    let Password = document.getElementById("Password").value;
    if (username != 'aflex' || Password != '8ahmedinoneteam') {
        alert('wrong user name or password');
        return false;
    }else{
    return true;
}
}

