function foo() {
    console.log("call")
}
function throttle(func, ms) {
    let lastCall = this.lastCall
    if (lastCall === undefined || Date.now() - lastCall >= ms) {
        this.lastCall = Date.now()
        func()
    }
    if (lastCall === undefined || Date.now() > 0) {
        clearTimeout(this.timeOut)
    }

    this.timeOut = setTimeout(() => func(), ms)
}

function debounce(func, ms) {
    let firstCall = this.lastCall
    this.lastCall = Date.now()

    if (firstCall && this.lastCall - firstCall <= ms) {
        clearTimeout(this.lastCallTimer)
    }
    this.lastCallTimer = setTimeout(() => func(), ms)
}
