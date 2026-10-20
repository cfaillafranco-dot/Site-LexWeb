const menuFlutuante = document.getElementById('menu-flutuante');
const botaoMenu = document.getElementById('botao-menu');
const cabecalho = document.querySelector('header');

    // Mostra o menu só depois de passar da altura do cabeçalho
    window.addEventListener('scroll', function () {
    if (window.scrollY > cabecalho.offsetHeight) {
        menuFlutuante.classList.add('visivel');
    } else {
        menuFlutuante.classList.remove('visivel');
        menuFlutuante.classList.remove('aberto');   // se voltou ao topo, fecha a lista
    }
    });

    // Abre e fecha a lista ao clicar no botão
    botaoMenu.addEventListener('click', function () {
        const aberto = menuFlutuante.classList.toggle('aberto');
        botaoMenu.setAttribute('aria-expanded', aberto);   // avisa leitores de tela se está aberto
    });

    // Fecha a lista depois de clicar em um link
    document.querySelectorAll('.lista-menu a').forEach(function (link) {
    link.addEventListener('click', function () {
    menuFlutuante.classList.remove('aberto');
});});
  