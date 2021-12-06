import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "ant-design-vue/dist/antd.css";
import './main.scss'
import dayjs from "dayjs";
import 'dayjs/locale/zh-cn'

dayjs().locale('zh-cn')

const app = createApp(App);


app.use(router)
/*app.use(Icon)*/

/*const p = [
  Checkbox, Collapse,CollapsePanel
]
p.forEach((item)=>{
  // @ts-ignore
  app.use(item)
})*/



app.mount('#app')


