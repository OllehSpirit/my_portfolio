const titleContact = document.querySelectorAll('.titleContact')

const titleContact_Observer = new IntersectionObserver((elements) => {
    elements.forEach(element => {
        if (element.isIntersecting) {
            element.target.classList.add('letterSpacingAnimation')
            document.querySelectorAll('.listHeader div').forEach(element=>{
                element.classList.remove('active')
            })
            document.querySelectorAll('.listHeader div:nth-child(5)')[0].classList.add('active')
        }
        else {
            document.querySelectorAll('.listHeader div:nth-child(5)')[0].classList.remove('active')
        }
    })
})

titleContact.forEach(element => titleContact_Observer.observe(element))
