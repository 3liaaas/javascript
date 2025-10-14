function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'manha-redondo-img.png'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'tarde-redondo-img.png'
    } else if (hora >= 18 && hora < 24) {
        //boa noite
        img.src = 'noite-redondo-img.png'
    } else if (hora > 24) {
        //hora inválida
    }
}

//volte no minuto 13:20 do exercicios javascipt pt2
