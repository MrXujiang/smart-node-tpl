import glob from 'glob'
import { resolve } from 'path'
import Xoa from './lib/xoa.js'
import config from './config'

const a = "3"

const app = new Xoa()

app.use((req, res) => {
  console.log(req.url, req.method)
})

// 全局注册业务接口
// function autoRegister(path, )
glob.sync(resolve(__dirname, './routes/*.js')).forEach(item => {
  app.use(require(item).default)
})

app.listen(config.serverPort, () => {
  console.log(`服务器地址:${config.protocol}//${config.host}:${config.serverPort}`)
})

