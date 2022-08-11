

let todos = document.querySelector('.to-do')

let form = document.querySelector(".form")


form.addEventListener('submit',play)
let keys
if (localStorage.getItem('데이터') === null){
    keys = []
}
else{
    if (localStorage.getItem('데이터').length === 0){
        keys = []
    }
    else{
        keys = localStorage.getItem('데이터').split(',')
        for (i = 0; i < keys.length; i++){
            todos.appendChild(make(keys[i]))
        }
    }
}


function load(){
    make()
}

function make(i){
    let newDiv = document.createElement("div")
    let newUl = document.createElement("ul")
    let newBtn = document.createElement("button")
    newBtn.innerText = "X"
    newUl.innerText = i
    newBtn.addEventListener('click',remove)
    newUl.addEventListener('click',touch)
    newUl.setAttribute('class','task')
    newDiv.appendChild(newUl)
    newDiv.appendChild(newBtn)
    return newDiv
}

function play(e){
    e.preventDefault()
    let text = e.target.firstElementChild.value
    if (text === ""){
        return 0
    }
    todos.appendChild(make(text))
    keys.push(`${text}`)
    localStorage.setItem('데이터',`${keys}`)
    e.target.firstElementChild.value = ""
}

function remove(e){
    e.composedPath()[1].remove()
    for(var i = 0; i < keys.length; i++){ 
        if (keys[i] === e.composedPath()[1].firstElementChild.innerText) { 
          keys.splice(i, 1); 
          i--; 
        }
      }
    localStorage.setItem('데이터',`${keys}`)

}

function touch(e){
    if (e.composedPath()[0].style.color == "red"){
        e.composedPath()[0].style.color="black"
    }else{
        e.composedPath()[0].style.color="red"

    }
}

console.log(keys)
