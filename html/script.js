// Hamburger Menu Toggle

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


<!-- Video Slider Script -->
<script>

const videos =
document.querySelectorAll('.video-slide');

let current = 0;

setInterval(() => {

videos[current].classList.remove('active');

current =
(current + 1) % videos.length;

videos[current].classList.add('active');

}, 3000);

</script>