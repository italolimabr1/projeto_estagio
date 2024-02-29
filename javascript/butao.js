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