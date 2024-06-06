const p1_Main = document.querySelectorAll('.intro p:nth-child(1)')

const p1_Main_Observer = new IntersectionObserver((elements) => {
    elements.forEach(element => {
        if (element.isIntersecting) {
            element.target.classList.add('toRightAnimation')
                
            document.querySelectorAll('.listHeader div').forEach(element=>{
                element.classList.remove('active')
            })
            document.querySelectorAll('.listHeader div:nth-child(1)')[0].classList.add('active')
        }
        else {
            document.querySelectorAll('.listHeader div:nth-child(1)')[0].classList.remove('active')
        }
    })
})

p1_Main.forEach(element => p1_Main_Observer.observe(element))




const p2_Main = document.querySelectorAll('.endIntro')

const p2_Main_Observer = new IntersectionObserver((elements) => {
    elements.forEach(element => {
        if (element.isIntersecting)
            element.target.classList.add('toTopAnimation')
    })
})

p2_Main.forEach(element => p2_Main_Observer.observe(element))