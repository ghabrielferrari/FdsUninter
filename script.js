// adiciona um evento de clique ao botao com id 'mensagemButton'
document.getElementById('mensagemButton').addEventListener('click', function() {
    // seleciona o elemento com id 'mensagem'
    const mensagem = document.getElementById('mensagem');

    // verifica se a mensagem esta oculta (display igual a 'none')
    if (mensagem.style.display === 'none') {
        // exibe a mensagem alterando o display para 'block'
        mensagem.style.display = 'block';
    } else {
        // oculta a mensagem alterando o display para 'none'
        mensagem.style.display = 'none';
    }
});