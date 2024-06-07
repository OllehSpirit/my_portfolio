const p1_About = document.querySelectorAll('.about p:nth-child(1)')

const p1_About_Observer = new IntersectionObserver((elements) => {
    elements.forEach(element => {
        if (element.isIntersecting) {
            element.target.classList.add('letterSpacingAnimation')
            document.querySelectorAll('.listHeader div').forEach(element=>{
                element.classList.remove('active')
            })
            document.querySelectorAll('.listHeader div:nth-child(2)')[0].classList.add('active')
        }
        else {
            document.querySelectorAll('.listHeader div:nth-child(2)')[0].classList.remove('active')
        }
    })
})

p1_About.forEach(element => p1_About_Observer.observe(element))




const p2_About = document.querySelectorAll('.about p:nth-child(2)')

const p2_About_Observer = new IntersectionObserver((elements) => {
    elements.forEach(element => {
        if (element.isIntersecting)
            element.target.classList.add('toRightAnimation')

    })
})

p2_About.forEach(element => p2_About_Observer.observe(element))



const picAbout = document.querySelectorAll('.picAbout')

const picAbout_Observer = new IntersectionObserver((elements) => {
    elements.forEach(element => {
        if (element.isIntersecting)
            element.target.classList.add('opacityAnimation')
            element.target.style=`animation-delay: 2s`

    })
})

picAbout.forEach(element => picAbout_Observer.observe(element))