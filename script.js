// Verifica se há uma preferência salva no localStorage
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

// Define o texto inicial do botão
const themeToggleBtn = document.getElementById('theme-toggle');
updateButtonText();

// Função para atualizar o texto do botão
function updateButtonText() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        themeToggleBtn.textContent = '☀️ Light Mode';
    } else {
        themeToggleBtn.textContent = '🌙 Dark Mode';
    }
}

// Adiciona evento de clique ao botão
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Altera o tema
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Salva a preferência no localStorage
    localStorage.setItem('theme', newTheme);
    
    // Atualiza o texto do botão
    updateButtonText();
});
