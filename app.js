document.addEventListener('alpine:init', () => {
    Alpine.data('app', () => ({
        hello: 'hello world',
        include(el, path){
            fetch(path).then(e=>e.text()).then(function(e){
                el.insertAdjacentHTML("afterend",e)
                el.remove()
            })
        }
    }))
})