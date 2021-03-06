export function row(content) {
  return  `
     <div class="row">
           ${content}
     </div>
  `
}

export function col(content) {
  return  `
     <div class="col-sm">
           ${content}
     </div>
  `
}

export function css(styles) {
    return (
      (Object.keys(styles).map( i => {
        return `${i} : ${styles[i]};`
      }).join(''))
    )
}