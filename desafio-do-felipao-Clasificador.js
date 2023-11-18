//Olá meu nome é Arthur, e estarei fazendo o Desafio Classificador de nível de Herói
let nomeHero = "Tutubarão"
let xp = 9000

if (xp < 1000) {
    // adicionei os sinais de iguais para não ter vão
    console.log("O Herói de nome " + nomeHero  + " está no nível de Ferro")
}else if ((xp >= 1001) && (xp <= 2000)){
    console.log("O Herói de nome " + nomeHero  + " está no nível de Bronze")
}else if ((xp >= 2001) && (xp <= 5000)){
    console.log("O Herói de nome " + nomeHero  + " está no nível de Prata")
}else if ((xp >= 5001) && (xp <= 7000)){
    //O motivo de eu colocar 5001 é para não ficar um vazio não rankeavel
    console.log("O Herói de nome " + nomeHero  + " está no nível de Ouro")
}else if ((xp >= 7001) && (xp <= 8000)){
    console.log("O Herói de nome " + nomeHero  + " está no nível de Platina")
}else if ((xp >= 8001) && (xp <= 9000)){
    console.log("O Herói de nome " + nomeHero  + " está no nível de Ascendente")
}else if ((xp >= 9001) && (xp <= 10000)){
    console.log("O Herói de nome " + nomeHero  + " está no nível de Imortal")
}else if (xp >= 10001){
    console.log("O Herói de nome " + nomeHero  + " está no nível de Radiante")
}
//Desculpe não descubri como colocar  Laços de repetição neste codigo
