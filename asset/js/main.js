// Back To Top
const BackToTop = document.getElementById("back_top");

window.onscroll = () => {
    if (document.documentElement.scrollTop > 600) {
        BackToTop.style.display = "block";
    } else {
        BackToTop.style.display = "none";
    }
}