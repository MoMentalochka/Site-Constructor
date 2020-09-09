import {col, row} from '../utils';

class Block {
  constructor(value, options) {
    this.value = value
    this.options = options
  }

  toHtml() {
      throw new Error('toHtml method is not declared')
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }
  toHtml() {
    const {tag, styles} = this.options
    return `${row(col(`<${tag} style="${styles}"> ${this.value} </${tag}>`))}`
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }
  toHtml() {
    const  {tag, styles} = this.options
    return `${row(col(`<${tag} style="${styles}">${this.value}</${tag}><hr>`))}`
  }
}

export class TextColumnBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }
  toHtml() {
    const  {styles} = this.options
    const cols = this.value.map(value => {
      return `${col(` <p style="${styles}">${value}</p>`)}`
    })
    return `${row(cols.join(''))}`
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }
  toHtml() {
    const {styles} = this.options
    return `<img style="${styles}" alt="" src="${this.value}"/>`
  }
}