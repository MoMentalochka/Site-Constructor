// import {row, col} from './utils'
//
// //Заголовки
// function title(block) {
//   let {tag, styles} = block.options
//   return `${row(col(`<${tag} style="${styles}"> ${block.value} </${tag}>`))}`
// }
// //Основной
// function text(block) {
//   const  {tag, styles} = block.options
//   return `${row(col(`<${tag} style="${styles}">${block.value}</${tag}><hr>`))}`
// }
// //Карты
// function textColumns(block) {
//   let cols = block.value.map(value => {
//     return `${col(` <p>${value}</p>`)}`
//   })
//   return `${row(cols.join(''))}`
// }
//
// function image(params) {
//   let {styles} = params.options
//   return `<img style="${styles}" src="${params.value}"/>`
// }
//
// export const templates = {
//   title,
//   text,
//   textColumns,
//   image
// }