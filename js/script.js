// 전체메뉴 모달창 활성화
const allMenu = document.querySelector(".all-menu"),
    allMenuMask = document.querySelector(".all-menu-mask"),
    allMenuWrapper = document.querySelector(".all-menu-wrapper"),
    allMenuClose = document.querySelector(".all-menu-close");
    console.log(allMenu)
    console.log(allMenuMask)
    console.log(allMenuWrapper)
    console.log(allMenuClose)

// 전체메뉴 버튼이(all-menu) 클릭되면 
allMenu.addEventListener('click',function(){
    // all-menu-mask 활성화 ==> class명(active)추가
    allMenuMask.classList.add("active")
    // all-menu-wrapper활성화 ==> class명(active)추가
    allMenuWrapper.classList.add("active")
})
// 전체메뉴 종료버튼(all-menu-close)이 클릭되면
allMenuClose.addEventListener('click',function(){
    // all-menu-mask 비활성화 ==> class명(active)제거
    allMenuMask.classList.remove("active")
    // all-menu-mask 비활성화 ==> class명(active)제거
    allMenuWrapper.classList.remove("active")
})

// 모바일 버튼이 클릭되면
const   mbBtn =document.querySelector('.mb-bt'),
        mbNav =document.querySelector('.mb-nav'),
        mbMenuMask =document.querySelector('.mb-menu-mask')
        console.log(mbBtn)
        console.log(mbNav)
        console.log(mbMenuMask)

// 요소를 담은 변수명.addEventListner("이벤트 종류",할일)        
mbBtn.addEventListener("click",function(){
    // mbBtn이 클릭되면 할일
    // mbBtn.classList.toggle("active")
    // mbNav.classList.toggle("active")
    // mbMenuMask.classList.toggle("active")
    let isActive = mbBtn.classList.contains('active')
    if(isActive==true) {//모바일 메뉴 활성화되어있는 상태
        // 클래스 active 제거
        mbBtn.classList.remove("active")
        mbNav.classList.remove("active")
        mbMenuMask.classList.remove("active")
    } else {//모바일 메뉴가 비활성화되어있는 상태
         // 클래스 active 삽입
         mbBtn.classList.add("active")
         mbNav.classList.add("active")
         mbMenuMask.classList.add("active")
        }
})
// 비주얼 슬라이드
new Swiper('.sw-visual',{
    loop: true,
    autoplay: {
        delay: 5000,
    },
    speed:2500,
    effect: "fade",
    pagination: {
        el:'.sw-pagination',
        clickable: true,
    }

})
// 배너모음 슬라이드
let swBanner=new Swiper('.sw-banner',{
    // slidesPerView: 6,
    // spaceBetween: 13,
    slidesPerView: "auto",
    navigation: {
        prevEl: '.banner-back',
        nextEl: '.banner-forward'
    },
    autoplay: true,
    rewind: true,
})

//배너슬라이드 일시멈춤 버튼
const bannerPlay = document.querySelector(".banner-play")
bannerPlay.addEventListener("click",function(){
    let isPlay = bannerPlay.classList.contains("active")
    if(isPlay) {// 지금 현재 play 상태 / pause버튼 활성화 상태
        // 할일 : 슬라이드 멈춤 / 재생버튼이미지 활성화
        swBanner.autoplay.stop();
        bannerPlay.classList.remove("active")
    }else {// 지금 현재 stop 상태 / play버튼 활성화 상태
        // 할일 : 슬라이드 재생 / 멈춤버튼이미지 활성화
        swBanner.autoplay.start();
        bannerPlay.classList.add("active")
    }
})

// 아이콘 이용한 일시멈춤버튼
// const bannerPlay = document.querySelector((".banner-play")) 
// // console.log(bannerPlay)

// bannerPlay.addEventListener("click",function(){
//     let spanEl =this.querySelector('span')
//     // console.log(spanEl)
//     let txtContent = spanEl.textContent
//     console.log(txtContent)
//     // 혹은 아래와 같이 this를 document로 하고 뒤에 banner-play 안에 있는 span임을 명시하는 것도 가능(document로 하면 document내의 모든 요소를 가리키기 때문)
//     // let spanEl =document.querySelector('.banner-play span')
//     if(txtContent == "pause") {
//         spanEl.textContent = "play_arrow"
//         swBanner.autoplay.stop()
//     }else {
//         spanEl.textContent ="pause"
//         swBanner.autoplay.start()
//     }      
// })
