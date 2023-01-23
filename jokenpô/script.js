    let jogador = 0
    let  computador = 0
    currentimagemIndex = 0 

    let img = ['./img/papel.png','./img/pedra.png','./img/tesoura.png']
    max = img.length;

  // inserir imagens 
function insert(escolha){
 let ale = aleatorio()
  setarimg(escolha,ale)
  vitorias(escolha,ale)

}

//adicionar as imagens
function setarimg(set, set2){
  document.getElementById('img1').setAttribute('src',img[set])
  document.getElementById('img2').setAttribute('src',img[set2])
}

// gerar numeros aleatorios 
function aleatorio(){
  return Math.floor((Math.random() *(2 - 0 + 1))) + 0;
 
}
//papel - 0
// pedra -1
//tesoura - 2 
function vitorias(user, userpc){
  if(user == 0 && userpc == 1 || user == 1 && userpc == 2 || user == 2 && userpc == 0){
    if(jogador == 3){
      alert('venceu!')
      location.reload()
    }
    document.getElementById('cont1').innerHTML = jogador++
  }else if(user == 0 && userpc == 2 || user == 1 && userpc == 0 || user == 2 && userpc == 1){
    if(computador == 3){
     alert('perdeu!')
      location.reload()
    }
    document.getElementById('cont2').innerHTML = computador++
  }
}
function next(){
  currentimagemindex++
  if(currentimagem >= max){
    currentimagem =0
    img[currentimagemIndex].classList.add("selected")
  }
    img[currentimagemIndex].classList.add("selected")
}
function start(){
 setInterval(() => {
   next()
 }, 1000);
}
window.addEventListener('load', start)


