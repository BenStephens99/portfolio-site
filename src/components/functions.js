export function scrollIntoViewWithOffset (selector, offset) {
    window.scrollTo({
        behavior: 'smooth',
        top:
            document.getElementById(selector).getBoundingClientRect().top -
            document.body.getBoundingClientRect().top -
            offset,
    })
}

export function wait(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    });
}

export function scrollToTop () {
    window.scrollTo(0,0)
}


