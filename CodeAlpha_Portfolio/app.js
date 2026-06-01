const lightbox = document.getElementById("lightbox");
const lighboxImage = document.getElementById("lightboxImg");
const closeBox = document.querySelector(".close");
const screenshotGallery = document.querySelectorAll(".screenshotImg");
const learnMore = document.getElementById("learnMore");
const menuBtn = document.getElementById("menuBtn");
const navList = document.querySelector(".nav-list");


 screenshotGallery.forEach(img => {
 img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lighboxImage.src = img.src;

 document.body.style.overflow = "hidden";
 })
 })

 if(closeBox) {
 closeBox.addEventListener("click", () => {
    lightbox.style.display = "none";
    document.body.style.overflow = "auto";
 })
 }


 if(lightbox) {
 lightbox.addEventListener("click", (e) => {
    if(e.target=== lightbox) {
        lightbox.style.display = "none";
         document.body.style.overflow = "auto";
    }
 })
 }

 if(learnMore) {
 learnMore.addEventListener("click", () => {
  window.location.href = "about.html";
 })
 }

 

menuBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
});


