//Grabbing Elements by their id or classes
const images = document.querySelectorAll(".galleryImg");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImg");
const close = document.querySelector(".closeLightBox");
const previous = document.querySelectorAll(".previous");
const next = document.querySelector(".next");
const filterButtons = document.querySelectorAll("[data-filter]");



let currentIndex = 0;

//Open the Lightbox
images.forEach((img, index) => {
    img.addEventListener("click", () => {
 currentIndex = index;
 lightbox.style.display = "flex";
    lightboxImage.src = img.src;
    });
});


//Close the Lightbox
close.addEventListener("click", () => {
    lightbox.style.display = "none";
});


//Next Image
next.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImage.src = images[currentIndex].src;
});



filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        images.forEach(img => {
            if(filter === "all" || img.dataset.category === filter) {
                img.style.display = "block";  
            }
            else {
                img.style.display = "none";
            }
        });
    });
});
