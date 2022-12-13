const input = document.querySelector('input');
const qrCode = document.querySelector('#qrCode');

// Eventos
document.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        gerarQRCode();
    }
});

// Funções
const gerarQRCode = () => {
    if(!input.value) return;

    qrCode.src = `https://api.server.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
}