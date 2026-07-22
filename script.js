// Smooth scroll animation

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e){

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });
});


// Fade in animation เมื่อเลื่อน

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

});


sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "1s";

    observer.observe(section);

});


// ปุ่ม View Portfolio

const button = document.querySelector("button");

button.addEventListener("click", () => {

    document.querySelector("#about")
    .scrollIntoView({
        behavior:"smooth"
    });

});
