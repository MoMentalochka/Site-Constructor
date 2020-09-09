import './styles/main.css'
import {model} from './model';
import {Site} from './Classes/Site';
import {SideBar} from './Classes/SideBar';

const site = new Site('#site')

const updateCallBack = newBlock => {
  debugger
  model.push(newBlock)
  site.render(model)
}
new SideBar('#panel', updateCallBack)


site.render(model)


