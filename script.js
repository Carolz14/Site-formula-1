const img = document.querySelectorAll('.img');
const btn1 = document.getElementById('botao1');
const btn2 = document.getElementById('botao2');

let imgAtual = 0;

function esconderImg() {
    img.forEach(item => item.classList.remove('on'))
}

function mostrarImg() {
    img[imgAtual].classList.add('on')
}

function proximaImg() {
    esconderImg()
    if (imgAtual == img.length - 1) {
        imgAtual = 0
    }
    else {
        imgAtual++
    }
    mostrarImg()
}

function anteriorImg() {
    esconderImg()
    if (imgAtual == 0) {
        imgAtual = img.length -1
    } else {
        imgAtual--
    }
    mostrarImg()
}


btn2.addEventListener('click', proximaImg);
btn1.addEventListener('click', anteriorImg);