const drums=document.querySelectorAll(".drum")

drums.forEach(function(item){
  item.addEventListener("click",function(){
    playSound(item.classList[0])
    toggleClass(item)
  })  
})

document.addEventListener("keypress",function(e){
    playSound(e.key)
    toggleClass(document.querySelector(`.${e.key}`))
})

function toggleClass(param){
    param.classList.add("pressed")
    setTimeout(()=>{
        param.classList.remove("pressed")

    },100);
}

function playSound(param){
    let audio
    switch(param){
        case "w":
        audio = new Audio("sounds/crash.mp3")
        break

        case "a":
        audio = new Audio("sounds/kick-bass.mp3")
        break

        case "s":
            audio = new Audio("sounds/snare.mp3")
            break
    
        case "d":
        audio = new Audio("sounds/tom-1.mp3")
        break

        case "j":
        audio = new Audio("sounds/tom-2.mp3")
        break

        case "k":
        audio = new Audio("sounds/tom-3.mp3")
        break

        case "l":
        audio = new Audio("sounds/tom-4.mp3")
        break
    }

    audio.play()
}