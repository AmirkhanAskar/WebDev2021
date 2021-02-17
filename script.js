let idOfparent = 2
let idOftick = 500
let idOftrash = 1000


function MakeAnote() {

    let textOftextarea = document.querySelector('textarea').value

    if (textOftextarea === ''){
        alert('You need to write something before saving')
    } else {
        let main = document.createElement('div')
        main.className = 'anExampleForTheNotes'

        let tick = document.createElement('i')
        tick.className = 'far fa-check-square'
        tick.id = idOftick
        idOftick++
        tick.onclick = function() {
            if (this.parentElement.style.textDecoration === 'line-through') {
                this.parentElement.style.textDecoration = 'none';
            } else { 
                this.parentElement.style.textDecoration = 'line-through';
            }
            
        }

        main.appendChild(tick)

        let text = document.createElement('p')
        let node = document.createTextNode(textOftextarea)
        text.appendChild(node)
        main.appendChild(text)

        let trash = document.createElement('i')
        trash.className = 'fas fa-trash-alt'
        trash.id = idOftrash
        idOftrash++
        trash.onclick = function() {this.parentElement.style.display = 'none';}
    

        main.appendChild(trash)
        main.id = idOfparent
        idOfparent++

    document.querySelector('.second-section').appendChild(main);

    document.querySelector('textarea').value = ''
    }


}

function made(e){

    if (e.parentElement.style.textDecoration === 'line-through') {
        e.parentElement.style.textDecoration = 'none';
    } else { 
        e.parentElement.style.textDecoration = 'line-through';
    }

}

