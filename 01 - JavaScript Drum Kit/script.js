panels = document.querySelectorAll("div.panel")
sound = ["clap", "hihat", "kick", "openhat", "boom", "ride", "snare", "tom", "tink"]
keys = ['a','s','d','f','g','h','j','k','l']

function hit(sound){
    document.querySelector("."+sound+"-audio").play()
    document.querySelector("."+sound).classList.add("hit")
    window.setTimeout(() => {document.querySelector("."+sound).classList.remove("hit")},100)
}

window.onload = () =>{
    for(let i = 0; i < panels.length; i++){
        panels[i].addEventListener('click',hit(sound))
    }
}

document.addEventListener('keypress', (e) => {
    switch(e.key){
        case 'a':
            hit(sound[0])
            break;
        case 's':
            hit(sound[1])
            break;
        case 'd':
            hit(sound[2])
            break;
        case 'f':
            hit(sound[3])
            break;
        case 'g':
            hit(sound[4])
            break;
        case 'h':
            hit(sound[5])
            break;
        case 'j':
            hit(sound[6])
            break;
        case 'k':
            hit(sound[7])
            break;
        case 'l':
            hit(sound[8])
            break;
    }
})