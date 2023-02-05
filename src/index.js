import {getCount} from "./m1";
import '@/assets/css/index.css'
import url  from '@/assets/imgs/1.jpg'
const img = document.createElement('img')
img.src=url
document.body.appendChild(img)
const res =getCount(5, 5)
console.log(res);