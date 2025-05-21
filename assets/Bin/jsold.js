// Floating WhatsApp Button Dragging Mechanism
const whatsappButton = document.getElementById("whatsapp-float");

let isDragging = false;
let offsetX, offsetY;

whatsappButton.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - whatsappButton.getBoundingClientRect().left;
  offsetY = e.clientY - whatsappButton.getBoundingClientRect().top;
  whatsappButton.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    whatsappButton.style.left = `${e.clientX - offsetX}px`;
    whatsappButton.style.top = `${e.clientY - offsetY}px`;
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  whatsappButton.style.cursor = "grab";
});
const announcement = document.querySelector(".announcement");

setInterval(() => {
  announcement.style.visibility = announcement.style.visibility === "hidden" ? "visible" : "hidden";
}, 500); /* Makes the text blink every 0.5 seconds */
const galleryImages = document.querySelectorAll(".gallery-container img");

galleryImages.forEach((img) => {
  img.addEventListener("click", () => {
    window.open(img.src, "_blank");
  });
});
const form = document.querySelector(".application-form");

form.addEventListener("submit", (event) => {
  const fileInput = document.getElementById("resume");
  const file = fileInput.files[0];

  if (!file || !["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file.type)) {
    alert("Please upload a valid PDF or DOC file.");
    event.preventDefault();
  }
});