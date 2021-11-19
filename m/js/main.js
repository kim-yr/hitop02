const mainVisualSlider = new Swiper("#mainVisual", {
  autoplay: true,
  speed: 1000,
  effect: "cube",
  loop: true,
  navigation: {
    prevEl: "#mainVisual .prev",
    nextEl: "#mainVisual .next",
  },
});

const newsSlider = new Swiper("#news .listBox", {
  loop: true, //무한재생
  spaceBetween: 10, //스와이퍼는 여백을 무조건 이걸루
  slidesPerView: 2, //한 번에 보여지는 갯수
  centeredSlides: true,
});
//f(x,y) = x+y*3; f(3,5) = 18

//btnAll 변수로 인식시키게 함, 변수 정의, 값 변경x(상수), 값 바꾸면 오류 뜸.
//let x = 10; 변수에 값을 담아둠, 값 바꾸기 가능, 중복선언 불가능(오류 뜸)
const pi = 3.14;

let x = 10;
let myweight = 60;

myweight = myweight + 10;
x = x + 10;
//pi = pi + 10; //오류
x = pi + 10;
console.log(x);
//콘솔창에서 확인 가능

/*
1. 찾기
2. 찾은 태그에 이벤트 걸기
3. gnb에 on 클래스 달기
*움직이는 내용은(left:100%에서 left:0으로) css에서 정의, 자바에서는 클래스이름 달기 등등
*/
const btnAll = document.querySelector(".all"); //document(=html문서)에서 .all 이라는 클라스 찾기
const gnb = document.querySelector("#gnb");
console.log(btnAll);
btnAll.addEventListener("click", function () {
  //사용자가 click이벤트 받으면 함수 실행
  // alert("all 을 눌렀습니다.");
  gnb.classList.toggle("on");
  btnAll.classList.toggle("on");
  //toggle: add와 remove를 동시에, 있으면 빼고 없으면 붙임
});
//alert("나는 바로 뜨는 경고창입니다.");//함수 밖에 쓰면 페이지 새로고침 할 때마다 뜸

const menu = document.querySelector("#gnb .list li a");
console.log(menu);
const depth02 = document.querySelector(".depth02");
console.log(depth02);
menu.addEventListener("click", function () {
  depth02.classList.toggle("on");
});
