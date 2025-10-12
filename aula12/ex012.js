var Agora = new Date()
var hora = Agora.getHours()
console.log(`Agora são exatamente ${hora} horas!`)
if (hora < 12){
    console.log('Bom dia')
}else if(hora <= 18) {
    console.log('Boa tarde')
}else if (hora > 18 && hora < 24){
    console.log('Boa Noite')
}
if(hora > 24){
        console.log('essa hora não existe doido kkkkkkkkkk')
}