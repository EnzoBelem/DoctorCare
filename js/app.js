/*Funcoes on scroll pagina principal*/
window.addEventListener('scroll', on_scroll)

function on_scroll() {
    show_nav_on_scroll()
    show_back_to_top_on_scroll()
    active_menu_on_scroll("home")
    active_menu_on_scroll("services")
    active_menu_on_scroll("about")
    active_menu_on_scroll("testemony")
}

function active_menu_on_scroll(id) {
    //linha fixada no centro da pagina
    const target = scrollY + innerHeight / 2
    //usando o top e o comprimento dos elementos determina o intervalo de cada secao da pagina
    const sectionTop = document.getElementById(id).offsetTop
    const sectionHeight = document.getElementById(id).offsetHeight
    //caso a linha esteja no intervalo do inicio ao fim da secao entao o link deve ser ativado
    if (target >= sectionTop && target <= (sectionHeight + sectionTop)) {
        document.querySelector(`.menu a[href *= ${id}]`).classList.add("active")
    } else {
        document.querySelector(`.menu a[href *= ${id}]`).classList.remove("active")
    }
}

function show_nav_on_scroll() {
    if (scrollY > 0) {
        document.getElementById("navigation").classList.add("scroll")
    } else {
        document.getElementById("navigation").classList.remove("scroll")
    }
}

function show_back_to_top_on_scroll() {
    if (scrollY > 1100) {
        document.getElementById("back_to_top").classList.add("btn_back_to_top_show")
    } else {
        document.getElementById("back_to_top").classList.remove("btn_back_to_top_show")
    }
}

/*funcoes grad slider depoimentos*/
const testemony_container = document.getElementById("testemony_slide")
const testemony_cards = document.querySelector("#testemony_slide > .cards")

let isPressDown = false
let cursorXSpace

testemony_container.addEventListener('mousedown', (e) => {
    if(innerWidth>=1024) isPressDown = true
    cursorXSpace = e.offsetX - testemony_cards.offsetLeft
})

window.addEventListener('mouseup', () => {
    isPressDown = false
})

testemony_container.addEventListener('mousemove', (e) => {
    if (!isPressDown) return
    e.preventDefault()
    testemony_cards.style.left = `${e.offsetX - cursorXSpace}px`
    boundTestemonyCards()
    show_testemony_page_on_slide()
})

function boundTestemonyCards() {
    const testemony_container_rect = testemony_container.getBoundingClientRect()
    const testemony_cards_rect = testemony_cards.getBoundingClientRect()

    if (parseInt(testemony_cards.style.left) > 0) {
        testemony_cards.style.left = 0
    } else if (testemony_cards_rect.right < testemony_container_rect.right) {
        testemony_cards.style.left = `-${testemony_cards_rect.width - testemony_container_rect.width}px`
    }
}


function show_testemony_page_on_slide() {

    const testemony_cards_rect = testemony_cards.getBoundingClientRect()
    let cardWidth = testemony_cards_rect.width / 4
    let leftPosition = parseInt(testemony_cards.style.left) * -1


    document.querySelector(`.dots`).classList.remove("page_01", "page_02", "page_03")

    if (leftPosition <= cardWidth) {
        document.querySelector(`.dots`).classList.add("page_01")
    } else if (leftPosition <= cardWidth * 2) {
        document.querySelector(`.dots`).classList.add("page_02")
    } else if (leftPosition <= cardWidth * 3) {
        document.querySelector(`.dots`).classList.add("page_03")
    }
}

function menu_expend() {
    document.body.classList.add("menu_expended")
}

function menu_retract() {
    document.body.classList.remove("menu_expended")
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700
}).reveal(`
    #home, #home .img_header, #home .stats_header, 
    #services, #services header, #services .cards`)

// function change_color(value){
//     document.documentElement.style.setProperty('--hue', value)
// }
