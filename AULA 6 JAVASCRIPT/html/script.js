let imagemAtual = 0;
const imagens = ["../img/banner_1.webp","../img/banner_2.webp","../img/banner_3.jpg","../img/banner_4.jpg","../img/banner_5.jpg",
                 "../img/banner_6.jpg","../img/banner_7.jpg"];

function mudarImagem(direcao) {
  if (direcao == -1) {
    imagemAtual++;
    if (imagemAtual >= imagens.length) {
      imagemAtual = 0;
    }
  } else if (direcao == 1) {
    imagemAtual--;
    if (imagemAtual < 0) {
      imagemAtual = imagens.length - 1;
    }
  }
  document.getElementById('minhaImagem').src = imagens[imagemAtual];
}

function iniciarBannerFerramentas() {
    const imagens = document.querySelectorAll('.banner_container img');
    let index = 0;

    setInterval(() => {
        imagens[index].classList.remove('active');
        index = (index + 1) % imagens.length;
        imagens[index].classList.add('active');
    }, 4000); 
}