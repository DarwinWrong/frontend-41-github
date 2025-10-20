const startCameraBtn = document.getElementById("startCamera");
const video = document.getElementById("camera");
let stream,
  recorder,
  chunks = [];
startCameraBtn.onclick = () => {
  navigator.mediaDevices.getUserMedia({ video: true }).then((s) => {
    stream = s;
    video.srcObject = stream;
    setTimeout(() => {
      stream.getTracks().forEach((t) => t.stop());
      video.srcObject = null;
    }, 3000);
  });
};
document.getElementById("playAudio").onclick = () => {
  document.querySelector("audio").play();
};
const saveVideoBtn = document.getElementById("saveVideo");
document.getElementById("startRecord").onclick = () => {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then((s) => {
      stream = s;
      video.srcObject = stream;
      chunks = [];
      recorder = new MediaRecorder(stream);
      recorder.ondataavailable = (e) => chunks.push(e.data);
      recorder.start();
      setTimeout(() => {
        recorder.stop();
        stream.getTracks().forEach((t) => t.stop());
        video.srcObject = null;
        saveVideoBtn.style.display = "inline-block";
      }, 5000);
    });
};
saveVideoBtn.onclick = () => {
  const blob = new Blob(chunks, { type: "video/webm" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "recorded.webm";
  a.click();
  URL.revokeObjectURL(url);
  saveVideoBtn.style.display = "none";
};
