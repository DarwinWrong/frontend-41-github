const trackbar = document.getElementById("trackbar");
const indicator = document.getElementById("indicator");

let isDragging = false;

indicator.addEventListener('mousedown', () => {
    isDragging = true
})

indicator.addEventListener('mouseup', () => {
    isDragging = false
})

document.addEventListener('mousemove', (event) => {
    if (isDragging) {
        const trackbarRect = trackbar.getBoundingClientRect()
        let newLeft = event.clientX - trackbarRect.left - (indicator.offsetWidth / 2)
        if (newLeft < 0) newLeft = 0
        if (newLeft > trackbar.offsetWidth - indicator.offsetWidth)
            newLeft = trackbar.offsetWidth - indicator.offsetWidth
        
        indicator.style.left = newLeft + 'px'
    }
})