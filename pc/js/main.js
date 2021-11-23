const mainVisualSlider = new Swiper("#mainVisual", {
  autoplay: true,
  speed: 1000,
  effect: "fade",
  loop: true,
  navigation: {
    prevEl: "#mainVisual .prev",
    nextEl: "#mainVisual .next",
  },
});
//f(x,y) = x+y*3; f(3,5) = 18

//document.querySelectoraAll : 배열처럼 생긴 nodelist를 return 함.
const gnbItem = document.querySelectorAll("#gnb .list > li");
const header = document.querySelector("#header");
console.log(gnbItem);
console.log(gnbItem.length);
for (let i = 0; i < 5; i++) {
  gnbItem[i].addEventListener("mouseenter", function () {
    header.classList.add("open");
  });
  gnbItem[i].addEventListener("mouseleave", function () {
    header.classList.remove("open");
  });
}
