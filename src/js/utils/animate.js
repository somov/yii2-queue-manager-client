7

/**
 * @param timing
 * @param draw
 * @param duration
 * @param onEnd
 */
function animate({timing, draw, duration}, onEnd) {

    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        // timeFraction изменяется от 0 до 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        // вычисление текущего состояния анимации
        let progress = timing(timeFraction);

        draw(progress); // отрисовать её

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        } else {
            if (onEnd) {
                onEnd();
            }
        }

    });
}


const timings = {
    linear(timeFraction) {
        return timeFraction;
    },
    quad(timeFraction) {
        return Math.pow(timeFraction, 2)
    },
    circ(timeFraction) {
        return 1 - Math.sin(Math.acos(timeFraction));
    },
    back(x = 1.5, timeFraction) {
        return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x)
    },
};


const animationsDraw = {
    'fadeOut': function (progress) {
        this.style.opacity = 1 - (Math.round(progress * 100) / 100);
    },
    'fadeIn': function (progress) {

        if (this.style.display === 'none') {
            this.style.display = null;
        }
        this.style.opacity = (Math.round(progress * 100) / 100);
    }
};

/**
 * @param {Element|Object} el
 * @param {Object} animationConfig
 * @return Promise
 */
export default function animateEl(el, animationConfig = {
    name: 'fadeOut',
    timing: timings.linear,
    duration: 500,
    delay: 0
}) {
    let animation = Object.assign({}, animationConfig);

    if (typeof animation.draw === 'function') {
        animation.draw.bind(el)
    } else if (typeof animation.name === 'string' && typeof animationsDraw[animation.name] === 'function') {
        animation.draw = animationsDraw[animation.name].bind(el)
    } else {
        throw new Error('Unknown animation ');
    }

    if (typeof animation.delay !== "number") {
        animation.delay = 0;
    }

    animation.timing = (typeof animation.timing == "string" && typeof timings[animation.timing] === 'function')
        ? timings[animation.timing] : timings.linear;

    return new Promise(function (resolve) {
        setTimeout(() => animate(animation, () => {
            resolve(el)
        }), animation.delay);
    });

}


/**
 *
 * @param {Element} el
 * @param {string|function}timing
 * @param {number} duration
 * @param delay
 * @return {Promise}
 */
export function fadeIn(el, timing = 'linear', duration = 1000, delay = 0) {
    return animateEl(el, {
        name: 'fadeIn',
        timing: timing,
        duration: duration
    });
}

/**
 *
 * @param el
 * @param timing
 * @param duration
 * @param delay
 * @return {Promise}
 */
export function fadeOut(el, timing = 'linear', duration = 1000, delay = 0) {
    return animateEl(el, {
        name: 'FadeOut',
        timing: timing,
        duration: duration
    });
}