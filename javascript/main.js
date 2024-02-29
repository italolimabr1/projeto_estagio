// CARROSSEL
$('.carousel').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidestoshow: 3,
    adaptiveHeight: true
});
// BUTAO
function toggleOpcoes() {
    const opcoes = document.querySelector('.opcoes');
    if (opcoes.style.display === 'none') {
      opcoes.style.display = 'block';
    } else {
      opcoes.style.display = 'none';
    }
  }

  function escolha(opcao) {
    alert('Opção selecionada: ' + opcao);
  }