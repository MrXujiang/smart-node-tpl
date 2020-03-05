import { parse } from 'url'
import getData from '../service/home'

const Home = (req, res) => {
  let curPath = parse(req.url).pathname
  if(curPath === '/home'){
    res.setHeader('Content-Type','text/html;charset=utf-8')
    let data = getData()
    res.end(
      `
       <h1>我是${curPath}页面</h1>
       <p>${data.name}</p>
       <p>${data.author}</p>
       <p>${data.cate}</p>
      `
    )
  }
}

export default Home