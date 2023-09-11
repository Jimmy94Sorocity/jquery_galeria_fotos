$(document).ready(function() {
    $("header button").click(function() { // primeira forma $("").click(function()); usando JQuery
        $("form").slideDown(); // adicionando o efeito de deslizar o formulário para baixo
    });

    $("#botao-cancelar").click(function() {
        $("form").slideUp(); // adicionando o efeito de deslizar o formulário para cima
    });

    $("form").on("submit", function(e) { // segunda forma $("").on("", function(e)); usando JQuery
        e.preventDefault();
        const endereco_novaimagem = $("#endereco-imagem-nova").val(); // no jquery usa val() ao inves do value, lembrar de usar # antes do Id
        const novo_item = $('<li style="display: none"></li>');
        $(`<img src="${endereco_novaimagem}" />`).appendTo(novo_item); //appendTo insere o elemento entre{} nas li
        $(`
            <div class="overlay-imagem-link">
                <a href="${endereco_novaimagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novo_item); 
        $(novo_item).appendTo("ul");
        $(novo_item).fadeIn(1000); /*fadeIn é usado para criar o efeito de surgir devagar da imagem*/
        $("#endereco-imagem-nova").val(""); /*usa #em elementos Id*/
    });
});