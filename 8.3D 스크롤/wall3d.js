// 전역변수 사용 방지
(function () {
  const houseElem = document.querySelector('.house');
  const barElem = document.querySelector('.progress-bar');
  let maxScrollValue;

  const scrollEvent = () => {
    // console.log('innerHeight', window.innerHeight);
    // console.log('scrollY', scrollY);
    // console.log('bodyoffsetheight', document.body.offsetHeight);
    // console.log(maxScrollValue);
    // console.log('maxScroll', maxScrollValue);
    // console.log('Y/max', screenY / maxScrollValue);

    // pageYOffset === scrollY
    const scrollPer = scrollY / maxScrollValue;
    const zMove = scrollPer * 950 - 490;
    houseElem.style.transform = `translateZ(${zMove}vw)`;

    barElem.style.width = `${scrollPer * 100}%`;
  };

  window.addEventListener('scroll', scrollEvent);

  const resizeHandler = () => {
    // 최대 스크롤 새로 세팅
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
  };

  // 창의 크기가 바뀔 때 발생하는 이벤트
  window.addEventListener('resize', resizeHandler);

  resizeHandler();
})();
