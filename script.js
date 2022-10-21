gsap.registerPlugin(ScrollTrigger);

gsap.to('.welcome-eng', {
  text: `Hello! My name is Lena. Welcome to my portfolio!`,
  duration: 7,
  repeatDelay:.7,
  repeat:-1,
  yoyo: true,
  delay: 1,
  ease: 'power1.in',
})

gsap.from(".skills-icon", {
  scrollTrigger: {
    trigger: ".skills-icon",
    toggleAction: "play",
    start: "top 80%"
  },
  y: -50,
  opacity: 0,
  rotation: 360,
  duration: 2,
  delay: 1,
  stagger: 1,
  repeat: -1
})

const buttonUp = document.querySelector('#btnUp');

window.onscroll = function() {
  let scroll = window.pageYOffset || document.documentElement.scrollTop;
  let result = scroll > 450 ? buttonUp.style.opacity = '1' : buttonUp.style.opacity = '0'
}

buttonUp.addEventListener('click', scrollStart)

function scrollStart() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });

}
