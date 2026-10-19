function pegarSelecionado(nome) {

    var opcoes = document.getElementsByName(nome);

    for (var i = 0; i < opcoes.length; i++) {

        if (opcoes[i].checked) {
            return opcoes[i].value;
        }

    }

    return "Não informado";
}


function pegarMarcados(nome) {

    var opcoes = document.getElementsByName(nome);
    var selecionados = [];

    for (var i = 0; i < opcoes.length; i++) {

        if (opcoes[i].checked) {
            selecionados.push(opcoes[i].value);
        }

    }

    if (selecionados.length == 0) {
        return "Nenhuma opção selecionada";
    }

    return selecionados.join(", ");
}


function enviarWhatsApp() {

    var tipo = pegarSelecionado("tipo");
    var paginas = pegarMarcados("paginas");
    var recursos = pegarMarcados("recursos");
    var detalhes = document.getElementById("detalhes").value;

    if (tipo == "Não informado") {
        alert("Por favor, selecione o tipo de projeto.");
        return;
    }

    if (detalhes.trim() == "") {
        detalhes = "Nenhuma informação adicional.";
    }

    var mensagem =
        "Olá, LexWeb! Gostaria de solicitar um projeto.\n\n" +
        "TIPO DE PROJETO:\n" + tipo + "\n\n" +
        "PÁGINAS DESEJADAS:\n" + paginas + "\n\n" +
        "FUNCIONALIDADES:\n" + recursos + "\n\n" +
        "INFORMAÇÕES ADICIONAIS:\n" + detalhes;

    var numero = "5511999999999";

    var link = "https://wa.me/" + numero +
        "?text=" + encodeURIComponent(mensagem);

    window.open(link, "_blank");

}