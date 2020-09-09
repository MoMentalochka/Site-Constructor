import test from './assets/test.jpg'
import {ImageBlock, TextBlock, TextColumnBlock, TitleBlock} from './Classes/Blocks';
import { css } from './utils';

export const model = [
  new TitleBlock('Title',{
    tag: `h1`,
    styles: css({
        background: `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 40%, rgba(0,212,255,1) 100%)`,
        color: `#e6ecec`,
        'text-align': `center`,
          })

  }),
  new TextBlock(
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. L
    'abore odio odit possimus quos recusandae voluptas, voluptate voluptatibus. 
    'Accusantium consequuntur cumque dolorem esse ex inventore iusto nobis possimus 
    'praesentium, reprehenderit veniam!textLorem ipsum dolor sit amet, consectetur adipisicing elit. L
    'abore odio odit possimus quos recusandae voluptas, voluptate voluptatibus. 
    'Accusantium consequuntur cumque dolorem esse ex inventore iusto nobis possimus
    'praesentium, reprehenderit veniam!textLorem ipsum dolor sit amet, consectetur adipisicing elit. L
    'abore odio odit possimus quos recusandae voluptas, voluptate voluptatibus.
    'Accusantium consequuntur cumque dolorem esse ex inventore iusto nobis possimus
    'praesentium, reprehenderit veniam!`,
    {
      styles: css({
        background: `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,105,1) 40%, rgba(200,0,36,1) 93%)`,
        padding: `10px`,
        color: `#e6ecec`,
      }),
      tag: `div`,
    }
    ),
  new TextBlock(
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. L
    'abore odio odit possimus quos recusandae voluptas, voluptate voluptatibus. 
    'Accusantium consequuntur cumque dolorem esse ex inventore iusto nobis possimus 
    'praesentium, reprehenderit veniam!textLorem ipsum dolor sit amet, consectetur adipisicing elit. L
    'abore odio odit possimus quos recusandae voluptas, voluptate voluptatibus. 
    'Accusantium consequuntur cumque dolorem esse ex inventore iusto nobis possimus
    'praesentium, reprehenderit veniam!textLorem ipsum dolor sit amet, consectetur adipisicing elit. L
    'abore odio odit possimus quos recusandae voluptas, voluptate voluptatibus.
    'Accusantium consequuntur cumque dolorem esse ex inventore iusto nobis possimus
    'praesentium, reprehenderit veniam!`,
    {
      tag: `div`,
      styles: css({
        background: `linear-gradient(90deg, rgba(200,0,36,1) 0%, rgba(9,9,121,1) 60%, rgba(0,212,255,1) 100%)`,
        color: `#e6ecec`,
        padding: `10px`,
      })
    }
    ),
  new TextColumnBlock(
    [
      '1 text',
      '2 text',
      '3 text',
      '4 text',
    ],
    {
      styles: css({
        color: `#ddaa11`,
      })
    }
    ),
  new ImageBlock(
    test,
    {
      tag: `img`,
      styles: css({
        margin: `20px`,
      }),
    }
  ),
]