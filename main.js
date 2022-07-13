window.addEventListener('load', (e)=> {
    let conteiner = document.querySelector('.conteiner')
    start()
    function start() {
        let buttonStart = document.createElement('div')
        buttonStart.className = 'start'
        buttonStart.textContent = "START"
        conteiner.append(buttonStart)
    }
    function end() {
        let buttonEnd = document.createElement('div')
        let ciraim = document.querySelectorAll('.circle')
        buttonEnd.className = 'end'
        buttonEnd.textContent = "GAME OVER"
        conteiner.append(buttonEnd)
        ciraim.forEach(item => {
            item.remove()
        })
        setTimeout(()=> {
            buttonEnd.remove()
            start()
        }, 3000)
    }
    function aim() {
        let wid = document.documentElement.clientWidth
        let hei = document.documentElement.clientHeight
        let time = 700
        let timeId = setInterval(function cir() {
                let circle = document.createElement('div')
                let ciraim = document.querySelectorAll('.circle')
                circle.className = 'circle'
                conteiner.append(circle)
                circle.style.top = `${random(0, hei - 60)}px`
                circle.style.left = `${random(0, wid - 60)}px`
                time -= 10
                if(ciraim.length == 10) {
                    clearTimeout(timeId)
                    end()
                }
        }, time)
        
    }
    
    document.addEventListener('click', (e)=> {
        let button = document.querySelector('.start')
        let ciraim = document.querySelectorAll('.circle')
        if(e.target == button) {
            button.remove()
            aim()
        }
        ciraim.forEach(item => {
            if(e.target == item) {
                item.remove()
            }
        })
        
    })

    document.addEventListener('dblclick', e => {
        e.preventDefault()
    })

    function random(min, max) {
        let rand = Math.round(min - 0.5 + Math.random() * (max - min + 1))
        return rand
    }
    
})