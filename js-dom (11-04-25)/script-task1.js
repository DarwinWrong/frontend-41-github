const track = document.getElementById('track');
const thumb = document.getElementById('thumb');
let dragging = false;
let shiftX = 0;

thumb.addEventListener('mousedown', (e) => {
  dragging = true;
  shiftX = e.clientX - thumb.getBoundingClientRect().left;
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
  e.preventDefault();
});

function onMouseMove(e) {
  if (!dragging) return;
  const trackRect = track.getBoundingClientRect();
  let newLeft = e.clientX - shiftX - trackRect.left;
  if (newLeft < 0) newLeft = 0;
  const rightEdge = track.offsetWidth - thumb.offsetWidth;
  if (newLeft > rightEdge) newLeft = rightEdge;
  thumb.style.left = newLeft + 'px';
}

function onMouseUp() {
  dragging = false;
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', onMouseUp);
}

thumb.ondragstart = () => false;
