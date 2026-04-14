document.addEventListener("DOMContentLoaded", function() {
    // 1. Criar o HTML do Menu Superior
    const menuSuperior = document.createElement('div');
    menuSuperior.style.cssText = `
        position: fixed; top: 0; left: 0; right: 0; 
        background: #1a1a1a; border-bottom: 1px solid #c9a84c;
        display: flex; justify-content: center; gap: 15px;
        padding: 8px; z-index: 9999; font-family: 'Oswald', sans-serif;
        box-shadow: 0 2px 10px rgba(0,0,0,0.5);
    `;

    // 2. DEFINA OS LINKS REAIS AQUI (Substitua pelos seus links do GitHub)
    const volumes = [
        { nome: 'Volume I', link: 'https://igrejamanancialdevida.github.io/li-esebd/' },
        { nome: 'Volume II', link: 'https://igrejamanancialdevida.github.io/li-esebd-v.2-/' },
        { nome: 'Volume III', link: 'https://igrejamanancialdevida.github.io/li-esebd-v.3/' }
    ];

    // 3. Gerar os botões
    volumes.forEach(vol => {
        const btn = document.createElement('a');
        btn.innerText = vol.nome;
        btn.href = vol.link;
        btn.style.cssText = `
            color: #c9a84c; text-decoration: none; font-size: 11px;
            letter-spacing: 2px; text-transform: uppercase;
            padding: 5px 12px; border: 1px solid transparent; 
            transition: 0.3s; font-weight: 400;
        `;
        
        // Efeito de destaque ao passar o mouse
        btn.onmouseover = () => {
            btn.style.borderColor = '#c9a84c';
            btn.style.background = 'rgba(201, 168, 76, 0.1)';
        };
        btn.onmouseout = () => {
            btn.style.borderColor = 'transparent';
            btn.style.background = 'transparent';
        };
        
        menuSuperior.appendChild(btn);
    });

    // 4. Inserir no topo da página
    document.body.prepend(menuSuperior);

    // 5. Ajuste de margem para o conteúdo não ficar embaixo do menu
    // Adiciona um espaço no topo do body para compensar o menu fixo
    document.body.style.paddingTop = '45px';
});