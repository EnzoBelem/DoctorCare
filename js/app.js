window.addEventListener('scroll', on_scroll)

function on_scroll(){
    show_nav_on_scroll()
    show_back_to_top_on_scroll()
    active_menu_on_scroll("home")
    active_menu_on_scroll("services")
    active_menu_on_scroll("about")

}

function active_menu_on_scroll(id){
    //linha fixada no centro da pagina
    const target= scrollY + innerHeight / 2
    //usando o top e o comprimento dos elementos determina o intervalo de cada secao da pagina
    const sectionTop= document.getElementById(id).offsetTop
    const sectionHeight= document.getElementById(id).offsetHeight
    //caso a linha esteja no intervalo do inicio ao fim da secao entao o link deve ser ativado
    if(target>= sectionTop && target<=(sectionHeight+sectionTop)){
        document.querySelector(`.menu a[href *= ${id}]`).classList.add("active")
    }else{
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

function show_back_to_top_on_scroll(){
    if (scrollY > 1100) {
        document.getElementById("back_to_top").classList.add("btn_back_to_top_show")
    }else  {
        document.getElementById("back_to_top").classList.remove("btn_back_to_top_show")
    }
}

function menu_expend(){
    document.body.classList.add("menu_expended")
}

function menu_retract(){
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
