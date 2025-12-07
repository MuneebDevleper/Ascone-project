const element = document.querySelectorAll(".about-anim, .anime, .anim, .ani, .animi");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        } else{
             entry.target.classList.remove('animate');
        }
    })

}, {

    threshold: 0.5
});

 for (let i = 0; i < element.length; i++) {
     const el = element[i];
     observer.observe(el);
 }



 
    
        let bar = document.querySelector(".bar");
        let nemu = document.querySelector(".inner-menu");
        bar.addEventListener('click', () => {
            console.log("active");
            bar.classList.toggle('active');
            nemu.classList.toggle('active');
        });
