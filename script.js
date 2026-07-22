// เลื่อนหน้าเว็บแบบ Smooth

document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function(e){

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            e.preventDefault();

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});




// Animation ตอนเลื่อนลง

const items = document.querySelectorAll(
    "section, .card, .box"
);


const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});



items.forEach(item=>{

    item.classList.add("hidden");

    observer.observe(item);

});




// ปุ่มหรือรูปโปรไฟล์เรืองแสง

const profile = document.querySelector(".profile img");


profile.addEventListener("mouseover",()=>{

    profile.style.transform="scale(1.05)";

});


profile.addEventListener("mouseout",()=>{

    profile.style.transform="scale(1)";

});
