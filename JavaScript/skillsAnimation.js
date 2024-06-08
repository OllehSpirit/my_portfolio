const titleSkills = document.querySelectorAll('.titleSkills')

const titleSkills_Observer = new IntersectionObserver((elements) => {
    elements.forEach(element => {
        if (element.isIntersecting) {
            element.target.classList.add('letterSpacingAnimation')
            document.querySelectorAll('.listHeader div').forEach(element=>{
                element.classList.remove('active')
            })
            document.querySelectorAll('.listHeader div:nth-child(3)')[0].classList.add('active')
        }
        else {
            document.querySelectorAll('.listHeader div:nth-child(3)')[0].classList.remove('active')
        }
    })
})

titleSkills.forEach(element => titleSkills_Observer.observe(element))




const cardSkills = document.querySelectorAll('.cardSkill')

const cardSkills_Observer = new IntersectionObserver((elements) => {
    elements.forEach(element => {
        if (element.isIntersecting)
            element.target.classList.add('scaleAnimation')
    })
})

cardSkills.forEach(element => cardSkills_Observer.observe(element))