// Modal Banner

function showMore() {
    modal.style.display = "block"
    setTimeout (()=> {modal.style.left = "30%"}, 10)
    textShadow.style.left = "-50vw"
    title.style.left = "-50vw"
    more.style.left = "-50vw"
    video_jdm.pause()
}

function showLess() {
    modal.style.left = "100vw"
    setTimeout (()=> {modal.style.display = "none"}, 500)
    textShadow.style.left = "17vw"
    title.style.left = "20vw"
    more.style.left = "62vw"
    video_jdm.play()
}

// "Carrosel" Supra

function supra2() {
    stockSupra.style.opacity = "0"
    stockSupra.style.width = "0"
    iconicSupra.style.opacity = "1"
    iconicSupra.style.width = "70%"
    btn_stock_supra.style.color = "white"
    btn_iconic_supra.style.color = "red"
    topSupra.style.display = "block"
    topSupra.style.opacity = "1"
    setTimeout(() => {
        topSupra.style.fontSize = "3.8vh"
    }, 10);
}

function supra1() {
    stockSupra.style.opacity = "1"
    stockSupra.style.width = "70%"
    iconicSupra.style.opacity = "0"
    iconicSupra.style.width = "0"
    btn_stock_supra.style.color = "red"
    btn_iconic_supra.style.color = "white"
    topSupra.style.opacity = "0"
    setTimeout(() => {
        topSupra.style.fontSize = "10vh"
        topSupra.style.display = "none"
    }, 300);}

// "Carrosel" Trueno

function trueno2() {
    stockTrueno.style.opacity = "0"
    stockTrueno.style.width = "0"
    iconicTrueno.style.opacity = "1"
    iconicTrueno.style.width = "70%"
    btn_stock_trueno.style.color = "white"
    btn_iconic_trueno.style.color = "red"
}

function trueno1() {
    stockTrueno.style.opacity = "1"
    stockTrueno.style.width = "70%"
    iconicTrueno.style.opacity = "0"
    iconicTrueno.style.width = "0"
    btn_stock_trueno.style.color = "red"
    btn_iconic_trueno.style.color = "white"
}

// "Carrosel" Rx7

function rx72() {
    stockRx7.style.opacity = "0"
    stockRx7.style.width = "0"
    iconicRx7.style.opacity = "1"
    iconicRx7.style.width = "70%"
    btn_stock_rx7.style.color = "white"
    btn_iconic_rx7.style.color = "red"
}

function rx71() {
    stockRx7.style.opacity = "1"
    stockRx7.style.width = "70%"
    iconicRx7.style.opacity = "0"
    iconicRx7.style.width = "0"
    btn_stock_rx7.style.color = "red"
    btn_iconic_rx7.style.color = "white"
}

// "Carrosel" GTR

function gtr2() {
    stockGtr.style.opacity = "0"
    stockGtr.style.width = "0"
    iconicGtr.style.opacity = "1"
    iconicGtr.style.width = "70%"
    btn_stock_gtr.style.color = "white"
    btn_iconic_gtr.style.color = "red"
}

function gtr1() {
    stockGtr.style.opacity = "1"
    stockGtr.style.width = "70%"
    iconicGtr.style.opacity = "0"
    iconicGtr.style.width = "0"
    btn_stock_gtr.style.color = "red"
    btn_iconic_gtr.style.color = "white"
}