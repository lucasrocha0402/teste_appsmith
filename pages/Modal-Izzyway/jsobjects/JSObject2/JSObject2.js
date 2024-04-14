export default { 
function trocarConteiner() {
    const containerAtual = document.getElementById('containerAtual');
    const containerDesejado = document.getElementById('containerDesejado');

    if (containerAtual && containerDesejado) {
        containerAtual.style.display = 'none';

        containerDesejado.style.display = 'block';
    }
}

const botaoPesquisar = document.getElementById('botaoPesquisar');
botaoPesquisar.addEventListener('click', trocarConteiner);
}