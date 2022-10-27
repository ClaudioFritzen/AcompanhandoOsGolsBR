
function showConfetti(el) {
    party.confetti(el)
}

function playEffect(name) {
    const effect = new Audio(`/assets/audio/${name}.mp3`)
    effect.playbackRate = 1.5
    effect.play()
}

export function updateScore(match, br, other) {
    const newScore = `${br} x ${other}`
    console.log(`Updating score from ${match} to ${newScore}`)

    const scoreEl = document.getElementById(match)
    scoreEl.innerText = newScore

    if (br > 0) {
        showConfetti(scoreEl)
        playEffect('gol')
    }
}
