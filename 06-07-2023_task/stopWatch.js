var ms = 0
var sec = 0
var timer = false

function start() {
    timer = true;
    stopwatch()
}

function stop() {
    timer = false
}
function reset() {
    timer = false

    ms = 0
    sec = 0

    document.getElementById("ms").innerHTML = "00"
    document.getElementById("sec").innerHTML = "00"
}
function stopwatch() {
    if (timer == true) {
        ms = ms + 1
        if (ms == 100) {
            sec = sec + 1
            ms = 0
        }
        document.getElementById("ms").innerHTML = ms
        document.getElementById("sec").innerHTML = sec

        setTimeout("stopwatch()", 10)
    }

}