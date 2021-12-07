function menu(){
    var menu_img = document.getElementById("menu")
    img = document.createElement("img")
    img.src="../image/menu.png"
    menu_img.appendChild(img)
}
function menu_show(){
    var topics = document.getElementById("topics").style
    var content = document.getElementById("content").style
    if (window.matchMedia("(max-width:60em)").matches) {
        if (topics.marginTop=="-400px"){
            topics.marginTop="0px"
            content.marginTop="350px"
        }else{
            topics.marginTop="-400px"
            content.marginTop="0px"
        }

    }
    if (window.matchMedia("(min-width:60em)").matches) {
        if (topics.marginTop=="-400px"){
            topics.marginTop="0px"
            content.marginTop="50px"
        }else{
            topics.marginTop="-400px"
            content.marginTop="0px"
        }
    }
    
}
