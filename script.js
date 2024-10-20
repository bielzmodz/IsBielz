function gerar() {
    // Obtém a quantidade de links a serem gerados (máximo 1000)
    const quantidade = Math.min(document.getElementById('quantidade').value, 1000);
    const container = document.getElementById('linksContainer');
    container.innerHTML = ''; // Limpa os links anteriores

    // Gera os links e os adiciona ao container
    const links = gay(quantidade);
    links.forEach(link => {
        const div = document.createElement('div');
        div.classList.add('link');
        div.textContent = link;
        container.appendChild(div);
    });

    container.classList.add('fade-in'); // Adiciona a animação de entrada
    setTimeout(() => container.classList.remove('fade-in'), 1000); // Remove a animação após 1 segundo
}

function gay(quantidade) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const tamanho = 24; // Tamanho da string aleatória
    const prefixo = 'discord.gift/'; // Prefixo para os links
    const links = [];

    for (let i = 0; i < quantidade; i++) {
        let randomString = '';
        // Gera uma string aleatória de 24 caracteres
        for (let j = 0; j < tamanho; j++) {
            randomString += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        links.push(`${prefixo}${randomString}`); // Adiciona o link gerado ao array
    }

    return links; // Retorna os links gerados
}

function copiar() {
    const container = document.getElementById('linksContainer');
    const text = Array.from(container.children).map(div => div.textContent).join('\n'); // Cria uma string com os links
    navigator.clipboard.writeText(text); // Copia os links para a área de transferência
    alert('Códigos copiados!'); // Alerta o usuário
}

function baixar() {
    const container = document.getElementById('linksContainer');
    const text = Array.from(container.children).map(div => div.textContent).join('\n'); // Cria uma string com os links
    const blob = new Blob([text], { type: 'text/plain' }); // Cria um blob com os links
    const link = document.createElement('a'); // Cria um elemento <a> para download
    link.href = URL.createObjectURL(blob); // Cria um URL para o blob
    link.download = 'codigos.txt'; // Define o nome do arquivo para download
    link.click(); // Simula um clique para iniciar o download
}

function toggleSettings() {
    const generatorContainer = document.getElementById('generatorContainer');
    const settingsContainer = document.getElementById('settingsContainer');
    const tituloGerador = document.getElementById('tituloGerador');
    const tituloConfiguracoes = document.getElementById('tituloConfiguracoes');
    const settingsIcon = document.getElementById('settingsIcon');

    if (settingsContainer.classList.contains('active')) {
        // Volta para o gerador
        settingsContainer.classList.remove('active');
        generatorContainer.classList.remove('fade-out'); // Remove a animação de saída
        generatorContainer.classList.add('fade-in'); // Adiciona a animação de entrada
        tituloGerador.classList.add('fade-in'); // Animação para o título do gerador
        tituloConfiguracoes.classList.remove('fade-in'); // Remove a animação do título de configurações
        tituloGerador.style.display = 'block'; // Mostra o título do gerador
        tituloConfiguracoes.style.display = 'none'; // Esconde o título de configurações
        settingsIcon.style.pointerEvents = 'auto'; // Permite clicar no ícone de configurações novamente
        generatorContainer.style.display = 'block'; // Garante que o gerador seja exibido
        setTimeout(() => {
            generatorContainer.classList.remove('fade-in'); // Remove a animação de fade in após a animação
        }, 300);
    } else {
        // Vai para as configurações
        generatorContainer.classList.add('fade-out');
        settingsIcon.style.pointerEvents = 'none'; // Desabilita o ícone de configurações enquanto a seção está aberta
        setTimeout(() => {
            generatorContainer.style.display = 'none'; // Esconde o gerador
            settingsContainer.classList.add('active');
            tituloGerador.classList.remove('fade-in'); // Remove a animação do título do gerador
            tituloConfiguracoes.classList.add('fade-in'); // Adiciona a animação para o título de configurações
            tituloGerador.style.display = 'none'; // Esconde o título do gerador
            tituloConfiguracoes.style.display = 'block'; // Mostra o título de configurações
        }, 300);
    }
}
