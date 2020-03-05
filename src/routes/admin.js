import { parse } from 'url'

const Admin = (req, res) => {
  let curPath = parse(req.url).pathname
  if(curPath === '/admin'){
    res.setHeader('Content-Type','text/plain;charset=utf-8')
    res.end(`我是${curPath}页面`)
  }
}

export default Admin