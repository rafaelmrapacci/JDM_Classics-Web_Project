function abrirModal() {
    id_modal.style.display = "block"
    setTimeout(() => {
        id_modal.style.opacity = 1
        id_modal.style.top = "-100vh"
    }, 10);
}

function fecharModal() {
    id_modal.style.opacity = 0
    id_modal.style.top = "-200vh"
    setTimeout(() => {
        id_modal.style.display = "none"
        id_modal.style.top = "0"
    }, 300);
}

function goTo(site) {
    window.open(site)
}

function goToPage(pagina) {
    window.location = `${pagina}.html`
}

function sair() {
    window.location = "index.html"
    sessionStorage.emailUser = ""
    sessionStorage.nomeUser = ""
    sessionStorage.fotoUser = ""
}