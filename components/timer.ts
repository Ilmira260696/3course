export let timer = function getTimer() {
    let sec: number = 0
    let min: number = 0
    setTimeout(() => {
        setInterval(() => {
            sec++
            if (sec === 60) {
                min++
                sec = 0
            }
            console.log(`${min}:${sec}`)
        }, 1000)
    }, 5000)
}

