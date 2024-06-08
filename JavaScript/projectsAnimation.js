const titleProjects = document.querySelectorAll('.titleProjects')

const titleProjects_Observer = new IntersectionObserver((elements) => {
    elements.forEach(element => {
        if (element.isIntersecting) {
            element.target.classList.add('letterSpacingAnimation')
            document.querySelectorAll('.listHeader div').forEach(element=>{
                element.classList.remove('active')
            })
            document.querySelectorAll('.listHeader div:nth-child(4)')[0].classList.add('active')
        }
        else {
            document.querySelectorAll('.listHeader div:nth-child(4)')[0].classList.remove('active')
        }
    })
})

titleProjects.forEach(element => titleProjects_Observer.observe(element))




const cardProjects = document.querySelectorAll('.cardProjects')

const cardProjects_Observer = new IntersectionObserver((elements) => {
    elements.forEach(element => {
        if (element.isIntersecting)
            element.target.classList.add('moveProjectsAnimation')
    })
})

cardProjects.forEach(element => cardProjects_Observer.observe(element))