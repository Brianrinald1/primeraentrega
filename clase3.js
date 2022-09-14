


function sesionOn(){
    let contra = "admin";
    let user ="admin";
    if (document.form.password.value == contra && document.form.login.value == user){
    alert("bienvenido!!!!");
    window.location="index.html";
    location.href ="signos.html";
    }else
    alert("usuario o contraseña incorrecto");
}

