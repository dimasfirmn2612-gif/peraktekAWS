// Navigasi
document.querySelectorAll(".nav").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById(btn.dataset.target).classList.add("active");
  });
});

// Mata mengikuti kursor
document.addEventListener("mousemove", e => {
  document.querySelectorAll(".pupil").forEach(pupil => {
    const eye = pupil.parentElement.getBoundingClientRect();
    const x = e.clientX - (eye.left + eye.width / 2);
    const y = e.clientY - (eye.top + eye.height / 2);
    const angle = Math.atan2(y, x);
    pupil.style.transform =
      `translate(${Math.cos(angle) * 15}px, ${Math.sin(angle) * 15}px)`;
  });
});
