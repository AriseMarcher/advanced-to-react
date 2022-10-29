import app from './http'
import Home from '../share/pages/Home'
import { renderToString } from 'react-dom/server'

// 接受客户端的请求
app.get('/', (req, res) => {
  const content = renderToString(<Home />)
  res.send(`
    <html>
      <head>
        <title>React SSR</title>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
    </html>
  `)
})
