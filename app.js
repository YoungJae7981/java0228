const myPromise = new Promise(function (resolve, reject) {
  //기본 디폴트 값 비동기.
  if (true) {
    resolve("성공");
  } else {
    reject("실패");
  }
});
myPromise
  .then(function (a) {
    console.log(a);
  })
  .catch(function (a) {
    console.log(a);
  });
