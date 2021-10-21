// function myModule() {
//   var name = 'dwj'
//   function f1() {
//     console.log(`${name}，你好`)
//   }
//   function f2() {
//     console.log(`${name}，加油`)
//   }

//   return {
//     f1,
//     f2,
//   }
// }

;(function () {
  var name = 'dwj'
  function f1() {
    console.log(`${name}，你好`)
  }
  function f2() {
    console.log(`${name}，加油`)
  }

  window.module = {
    f1,
    f2,
  }
})()
