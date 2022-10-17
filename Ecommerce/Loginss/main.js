var card = document.getElementById("card");

function openRegister(){
    card.style.transform = "rotateY(-180deg)";
}
function openLOGIN(){
    card.style.transform = "rotateY(0deg)";
}


var nature= false;
function toggle1(){
    if(nature){
        document.getElementById("password").setAttribute("type","password");
        nature = false;
    }
    else{
        document.getElementById("password").setAttribute("type","text","number");
        nature = true;
    }
}


var nature= false;
function toggle(){
    if(nature){
        document.getElementById("pswd").setAttribute("type","password");
        nature = false;
    }
    else{
        document.getElementById("pswd").setAttribute("type","text","number");
        nature = true;
    }
}


$(document).ready(function(){
    $('#cpswd').keyup(function(){

        var pass = $('#pswd').val();
        var cpass = $('#cpswd').val();

        if(pass!=cpass){
             $('#epwd').html('Password is not matching');
             $('#epwd').css('color','red','font-size','5px');
             $('#epwd').css('font-size','13px');
             $('#epwd').css('font-family','Candara');
             return false;
        }
        else{
            $('#epwd').html('');
            return true;
        }
    })
})