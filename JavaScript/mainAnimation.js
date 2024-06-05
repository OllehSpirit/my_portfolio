const p1=document.querySelectorAll('.intro p:nth-child(1)')

const p1_Observer = new IntersectionObserver((elements)=>{
    elements.forEach(element=>{
        if(element.isIntersecting){
            element.target.classList.add('letterSpacingAnimation')
            document.querySelectorAll('.listHeader div:nth-child(1)')[0].classList.add('active')
        }
    })
})

p1.forEach(element=>p1_Observer.observe(element))




const p2=document.querySelectorAll('.intro p:nth-child(2)')

const p2_Observer = new IntersectionObserver((elements)=>{
    elements.forEach(element=>{
        if(element.isIntersecting)
            element.target.classList.add('toRightAnimation')
    })
})

p2.forEach(element=>p2_Observer.observe(element))




const p3=document.querySelectorAll('.intro p:nth-child(3)')

const p3_Observer = new IntersectionObserver((elements)=>{
    elements.forEach(element=>{
        if(element.isIntersecting)
            element.target.classList.add('toLeftAnimation')
    })
})

p3.forEach(element=>p3_Observer.observe(element))




const p4=document.querySelectorAll('.endIntro')

const p4_Observer = new IntersectionObserver((elements)=>{
    elements.forEach(element=>{
        if(element.isIntersecting)
            element.target.classList.add('toTopAnimation')
    })
})

p4.forEach(element=>p4_Observer.observe(element))