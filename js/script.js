// step 1
const animate1 = () => {
    animateCSS('#s1', ['bounceIn'], animate2)
    animateCSS('#logo', ['fadeIn'], null, ['show'])
}

const animate2 = () => {
    animateCSS('#s1', ['fillText'], animate3, ['fillText'])
}

const animate3 = () => {
    animateCSS('#s1', ['fadeOutLeft'], animate4, ['hide'])
}

// step 2
const animate4 = () => {
    animateCSS('#s2', ['fadeInRight'], animate5)
}

const animate5 = () => {
    animateCSS('#s2', ['fillTextReverse'], animate6)
}

const animate6 = () => {
    animateCSS('#s2', ['fillTextReverse', 'bounceOut2s'], animate8, ['hide'])
}

// step 3
const animate8 = () => {
    animateCSS('#logo', ['logoToCenter'], null, ['logoToCenter'])
    animateCSS('#s3', ['slideInUp'], endAnimation, ['fadeInUp'])
}

function animateCSS(element, animationName, callback, fixClass) {
    const node = document.querySelector(element)

    node.classList.remove('hide')
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

function hideElements(element, fixClass) {
    const node = document.querySelector(element)
    node.removeAttribute('class')
    node.setAttribute('class', ...fixClass)
}

function endAnimation() {
    const nodes = document.querySelectorAll('.inline-rectangle > div, #logo')
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