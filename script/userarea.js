/*=====================================
    MENU MOBILE (mesmo padrão da index)
=====================================*/

const menuButton = document.querySelector(".menu-mobile");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("active");

    const icon = menuButton.querySelector("i");

    if (nav.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

/*=====================================
    FECHAR MENU AO CLICAR NUM LINK
=====================================*/

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        const icon = menuButton.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});

// Massa de dados baseada exatamente na tabela da imagem
const contributionsData = [
    { type: 'recycling', text: 'Reciclagem', pts: 10, positive: true },
    { type: 'invite', text: 'Convidar amigos', pts: 50, positive: true },
    { type: 'recycling', text: 'Reciclagem', pts: 10, positive: true },
    { type: 'recycling', text: 'Reciclagem', pts: 10, positive: true },
    { type: 'report', text: 'Denúncia finalizada', pts: 45, positive: true },
    { type: 'recycling', text: 'Reciclagem', pts: 10, positive: true },
    { type: 'recycling', text: 'Reciclagem', pts: 10, positive: true }
];

// Mapeamento de ícones do Material Symbols
const iconMap = {
    recycling: 'delete',
    invite: 'person_add',
    report: 'campaign' // Representa o ícone de denúncia (mega-fone/alerta)
};

// Renderiza a lista de contribuições na tela
function renderContributions() {
    const container = document.getElementById('contributions-container');
    if (!container) return;
    container.innerHTML = '';

    contributionsData.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'contribution-item';
        
        // Define a classe de cor e formatação do sinal de mais
        const pointColorClass = item.type === 'report' ? 'points-orange' : 'points-green';
        const iconName = iconMap[item.type] || 'star';

        itemDiv.innerHTML = `
            <div class="item-label">
                <span class="material-symbols-outlined">${iconName}</span>
                <span>${item.text}</span>
            </div>
            <div class="item-points ${pointColorClass}">
                +${item.pts} pts
            </div>
        `;

        // Efeito visual ao clicar em uma contribuição
        itemDiv.addEventListener('click', () => {
            alert(`Você clicou em: ${item.text} (${item.pts} pontos adicionados anteriormente)`);
        });

        container.appendChild(itemDiv);
    });
}

// Simulação do clique em "Minha Conta"
function handleAccountClick() {
    alert('Acessando configurações da conta de @Usuário...');
}

// Inicializador
window.addEventListener('DOMContentLoaded', () => {
    renderContributions();
});
