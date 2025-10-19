function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#resultado')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'kid-m-250px.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'boy-m-250px.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'man-m-250px.png')
            } else if (idade >= 60) {
                //idoso
                img.setAttribute('src', 'grandfather-m-250px.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'kid-f-250px.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'girl-f-250px.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'muie-f-250px.png')
            } else if (idade >= 60) {
                //idoso
                img.setAttribute('src', 'grandmother-f-250px.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}