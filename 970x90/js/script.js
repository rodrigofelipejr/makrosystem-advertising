// step 1
const animate1 = () => {
    animateCSS('#s1', ['bounceIn'], animate2)
}

const animate2 = () => {
    animateCSS('#s1', ['fillText'], animate3, ['fillText'])
}

const animate3 = () => {
    animateCSS('#s1', ['fillText', 'fadeOutLeft'], animate4, ['hide'])
}

// step 2
const animate4 = () => {
    animateCSS('#s2', ['fadeInRight'], animate5)
}

const animate5 = () => {
    animateCSS('#s2', ['fillText'], animate6)
}

const animate6 = () => {
    animateCSS('#s2', ['fillText', 'bounceOut1s'], animate7, ['hide'])
}

// step 3
const animate7 = () => {
    changeClass('#wrapper', ['wrapper', 'flex-sa'])

    animateCSS('#logo', ['fadeInLeft'], null, ['fadeInLeft'])
    animateCSS('#s3', ['fadeIn'], null, ['fadeIn'])
    animateCSS('#link', ['fadeInRight'], animate9, ['fadeInRight'])
}

const animate9 = () => {
    animateCSS('#link', ['swing'], finish)
}

function animateCSS(element, animationName, callback, fixClass) {
    const node = document.querySelector(element)

    node.removeAttribute('class')
    node.classList.add('animated', ...animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', ...animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (fixClass) {
            node.removeAttribute('class')
            node.setAttribute('class', ...fixClass)
        }

        if (typeof callback === 'function') callback()
    }
    node.addEventListener('animationend', handleAnimationEnd)
}

function changeClass(element, className) {
    const node = document.querySelector(element)
    node.removeAttribute('class')
    node.classList.add(...className)
}

function finish() {
    const nodes = document.querySelectorAll('.wrapper > div, #logo, #link')
    setTimeout(function () {
        nodes.forEach(elem => {
            elem.removeAttribute('class')
            elem.setAttribute('class', 'hide')
        })
        changeClass('#wrapper', ['wrapper'])
        setTimeout(animate1(), 1000)
    }, 3000)
}

document.addEventListener('DOMContentLoaded', function () {
    animate1();
})