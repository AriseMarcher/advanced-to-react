// export default function (store) {
//   return function (next) {
//     return function (action) {

//     }
//   }
// }

// eslint-disable-next-line import/no-anonymous-default-export
export default store => next => action => {
  // 我需要打印下 action 的信息
  console.log(store)
  console.log(action)
  next(action)
}