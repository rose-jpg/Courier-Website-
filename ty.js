
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true
const timeInterval = 5000;
let slideInterval;


const nextSlide = ()=>{
    const active = document.querySelector('.active')
    active.classList.remove('active')
    if(active.nextElementSibling){
        active.nextElementSibling.classList.add('active')
    }else{
        slides[0].classList.add('active');

         setTimeout(()=>active.classList.remove('active'))

    }

   
    if(auto){
        clearInterval(slideInterval)
        slideInterval = setInterval(nextSlide,timeInterval)
    }
}


const prevSlide = ()=>{
    const active = document.querySelector('.active')
    active.classList.remove('active')
    if(active.previousElementSibling){
        active.previousElementSibling.classList.add('active')
    }else{
        slides[slides.length-1].classList.add('active');

    }
    setTimeout(()=>active.classList.remove('active'))
    if(auto){
        clearInterval(slideInterval)
        slideInterval = setInterval(nextSlide,timeInterval)
    }
}


next.addEventListener('click',()=>{
  
    nextSlide();
})
prev.addEventListener('click',e=>{
    prevSlide()
})

if(auto){
    slideInterval = setInterval(nextSlide,timeInterval)
}

const images = document.querySelectorAll('.anim');

observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim1 2s ${entry.target.dataset.delay} forwards ease-out`;
        }
        else {
            entry.target.style.animation = 'none';
        }
    })

})

images.forEach(image => {
    observer.observe(image)
})
