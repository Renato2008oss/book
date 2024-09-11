let currentPage = 0; // Índice da página atual
const totalPages = 8; // Número total de páginas (ajuste conforme necessário). Para Manutenção sempre coloque uma página a mais

function changePage(direction) {
    // Remove a classe 'active' da página atual
    document.getElementById('page' + currentPage).classList.remove('active');

    // Atualiza o índice da página atual com base na direção
    currentPage += direction;

    // Garante que o índice da página fique dentro dos limites
    if (currentPage < 0) {
        currentPage = 0;
    } else if (currentPage >= totalPages) {
        currentPage = totalPages - 1;
    }

    // Adiciona a classe 'active' à nova página atual
    document.getElementById('page' + currentPage).classList.add('active');

    // Rola para o topo da página
    window.scrollTo(0, 0);

    // Seleciona os botões de navegação
    const prevButton = document.querySelector('.nav-buttons button:nth-child(1)');
    const nextButton = document.querySelector('.nav-buttons button:nth-child(2)');

    // Verifica se está na primeira página para desativar o botão "Anterior"
    if (currentPage === 0) {
        prevButton.disabled = true;
        prevButton.style.opacity = '0.5'; // Ajusta a aparência do botão
        prevButton.style.cursor = 'not-allowed'; // Indica que não é clicável
    } else {
        prevButton.disabled = false;
        prevButton.style.opacity = '1';
        prevButton.style.cursor = 'pointer';
    }

    // Verifica se está na última página para desativar o botão "Próxima"
    if (currentPage === totalPages - 1) {
        nextButton.disabled = true;
        nextButton.style.opacity = '0.5'; // Ajusta a aparência do botão
        nextButton.style.cursor = 'not-allowed'; // Indica que não é clicável
    } else {
        nextButton.disabled = false;
        nextButton.style.opacity = '1';
        nextButton.style.cursor = 'pointer';
    }
}


// Inicializa o estado dos botões quando a página carrega
window.onload = () => changePage(0);
