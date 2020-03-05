import { createServer } from 'http'

class Xoa {
  constructor() {
    // 初始化中间键数组
    this.middleware = []
  }
  // 维持中间键数组
  use(func) {
    this.middleware.push(func)
  }
  // 创建服务器实例,并执行相应任务
  createServer() {
    const server = createServer((req, res) => {
      // 应用中间件
      this.middleware.forEach((fn) => fn(req, res))
    })
    return server
  }
  // 服务器监听
  listen(port = 3000, cb) {
    this.createServer().listen(port, cb)
  }
}

export default Xoa