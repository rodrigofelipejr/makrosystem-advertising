// step 1
const animate1 = () => {
    animateCSS('#s1', ['bounceIn'], animate2)
    animateCSS('#logo', ['fadeIn'], null, ['show'])
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
    animateCSS('#s2', ['fillText', 'bounceOut2s'], animate7, ['hide'])
}

// step 3
const animate7 = () => {
    animateCSS('#logo', ['logoToCenter'], animate8, ['logoToCenter'])
}

const animate8 = () => {
    animateCSS('#s3', ['fadeInUp'], animate9, ['fadeInUp'])
}

const animate9 = () => {
    animateCSS('#link', ['fadeIn'], animate10, ['fadeIn'])
}

const animate10 = () => {
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

function finish() {
    console.log('end');
    const nodes = document.querySelectorAll('.wrapper > div, #logo, #link')
    setTimeout(function () {
        nodes.forEach(elem => {
            elem.removeAttribute('class')
            elem.setAttribute('class', 'hide')
        })
        setTimeout(animate1(), 1000)
    }, 3000)
}

document.addEventListener('DOMContentLoaded', function () {
    animate1();
})