let search_icon = document.querySelector('#nav-bar-right i.fa-search')
let search_bar = document.querySelector('input[type=text]')
let dark_mode_icon = document.querySelector('#nav-bar-right i.fa-moon')
let container = document.querySelector('.container-md')
let color_status = 0
//console.log(container)

search_icon.addEventListener('click',showSearchBar)
dark_mode_icon.addEventListener('click', darkMode)
function showSearchBar(){
    if(search_bar.style.width == '50%'){
        search_bar.style.width = '0px'
        search_bar.value = ''
    }
    else{
        search_bar.style.width = '50%'
    }
    
}

function darkMode(){
    if(color_status == 0){
        container.style.background = 'black'
        container.style.color = 'white'
        color_status = 1
    }
    else{
        container.style.background = 'rgb(240,240,240)'
        container.style.color = 'black'
        color_status = 0
    }
}