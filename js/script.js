const animate1 = () => {
    animateCSS('#s1', ['bounceIn'], animate2)
}

const animate2 = () => {
    animateCSS('#s1', ['fillText'], animate3)
}

const animate3 = () => {
    animateCSS('#s1', ['fillText', 'bounceOutLeft2s'], animate4)
}

const animate4 = () => {
    animateCSS('#s1', ['hide'])
    animate5();
}

const animate5 = () => {
    animateCSS('#s2', ['bounceInRight'], animate6)
}

const animate6 = () => {
    animateCSS('#s2', ['fillTextReverse'], animate7)
}

const animate7 = () => {
    animateCSS('#s2', ['fillTextReverse', 'bounceOut2s'], animate8)
}

const animate8 = () => {
    animateCSS('#s2', ['hide'])
    animate9();
}

// logo center
const animate9 = () => {
    animateCSS('#logo', ['logoToCenter'], animate10)
    animateCSS('#s3', ['slideInUp'], animate10)
}

const animate10 = () => {
    animateCSS('#logo', ['logoToCenter', 'hideEnd'])
    animateCSS('#s3', ['logoToCenter', 'hideEnd'])
}


function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)

    node.classList.remove('hide')
    node.classList.add('animated', ...animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', ...animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }
    node.addEventListener('animationend', handleAnimationEnd)
}

document.addEventListener('DOMContentLoaded', function () {
    animate1();
    // animate4();
    // animate9();
})