
let comienzo = prompt('hola , te gustaria confirmar si tu signo del zodiaco es el correcto con tu fecha de nacimiento ? presiona (si o No )').toLowerCase()
let anoactual = 2022;

if (comienzo === "si") {


    let mes =prompt('de que mes (poner solo un digito) ?');
    switch (mes) {
        case "3":
            let dia = prompt('que dia naciste ?');
            if (dia > 18 && dia <= 30) {
                alert("aries")
                let signo = "Cries";
            } else {
                alert("Piscis")
            }
            break;
        case "4":
            let dia2 = prompt('que dia naciste ?');
            if (dia2 > 20 && dia2 <= 30) {
                alert("Tauro")
                let signo = "Tauro";
            } else {
                alert("Aries")
            }
            break;
        case "5":
            let dia3 = prompt('que dia naciste ?');
            if (dia3 > 20 && dia3 <= 31) {
                alert("Geminis")
            } else {
                alert("Tauro")
            }
            break;
        case "6":
            let dia4 = prompt('que dia naciste ?');
            if (dia4 > 22 && dia4 <= 31) {
                alert("Cancer")
            } else {
                alert("Geminis")
            }
            break;
        case "7":
            let dia5 = prompt('que dia naciste ?');
            if (dia5 > 22 && dia5 <= 31) {
                alert("Leo")
            } else {
                alert("Cancer")
            }
            break;
        case "8":
            let dia6 = prompt('que dia naciste ?');
            if (dia6 > 22 && dia6 <= 31) {
                alert("Virgo")
            } else {
                alert("Leo")
            }
            break;
        case "9":
            let dia7 = prompt('que dia naciste ?');
            if (dia7 > 22 && dia7 <= 01) {
                alert("Libra")
            } else {
                alert("Virgo")
            }
            break;
        case "10":
            let dia8 = prompt('que dia naciste ?');
            if (dia8 > 22 && dia8 <= 31) {
                alert("Escorpio")
            } else {
                alert("Libra")
            }
            break;
        case "11":
            let dia9 = prompt('que dia naciste ?');
            if (dia9 > 21 && dia9 <= 30) {
                alert("Sagitario")
            } else {
                alert("Escorpio")
            }
            break;
        case "12":
            let dia10 = prompt('que dia naciste ?');
            if (dia10 > 21 && dia10 <= 31) {
                alert("Capricornio")
            } else {
                alert("Sagitario")
            }
            break;
        case "1":
            let dia11 = prompt('que dia naciste ?');
            if (dia11 > 19 && dia11 <= 31) {
                alert("Acuario")
            } else {
                alert("Capricornio")
            }
            break;
        case "2":
            let dia12 = prompt('que dia naciste ?');
            if (dia12 > 18 && dia12 <= 28) {
                alert("Piscis")
            } else {
                alert("Acuario")
            }
            break;
        default:
            alert("el mes ingresado no existe ");
    }


} else if (comienzo == "no") {
    alert("bueno quedate con la duda ")

} else {
    alert("apretaste cualquier cosa , vamos de nuevo");
    location.reload();
}
const valoranos = () =>{
    let valoracion = prompt(
        "podrias darnos una valoracion? responder por ( si/no )").toLowerCase();
    if (valoracion == "si") {
        let estrellas = prompt("Perfecto , valoranos del 1 al 5");
        switch (estrellas) {
            case "1":
                alert("1 sola ? ok , intentaremos me jorar                     ಥ_ಥ");
                break;
            case "2":
                alert("solo 2 ? voy a intendar mejorar un poco mas              ಠ_ಠ");
                break;
            case "3":
                alert("gracias por tu valoracion             ʘ‿ʘ");
                break;
            case "4":
                alert("gracias                  ( ˇ෴ˇ )");
                break;
            case "5":
                alert("Muchas Gracias Por Tu Valoracion           ( ˘ ³˘)♥");
                break;
            default:
                alert("apretaste cualquier cosa           (╬ ಠ益ಠ) ");
        }
    } else if (valoracion !== "si" && valoracion !== "no") {
        alert("respuesta no esperada                (⊙_◎)");
    } else {
        alert("ojala tengas un mal dia             (╬ ಠ益ಠ) ");
    }
    if (respuesta !== "si" && respuesta !== "no") {
    alert("Respuesta Incorrecta                       (⊙_◎) ");
    } if (respuesta == "no") {
    alert("Vuelve cuando te sientas capas                 ಥ﹏ಥ ");

    }}
    valoranos();