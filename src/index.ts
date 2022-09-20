import { createServer, Server, plugins } from "restify"
import dummyRouter from "@routes/dummy"

const initApp = async () => {
  const app: Server = createServer({
    name: "com.github.node.kickstarter",
    version: "1.0.0",
  })

  app.use(plugins.queryParser())
  app.use(plugins.bodyParser())
  dummyRouter(app)

  // Start server
  try {
    app.listen(5000, () => {
      console.info(`Server started at port: HTTP - ${5000}`)
    })
  } catch (err) {
    console.error(`Server not started | ${err}`)
    process.exit(2)
  }
}

initApp()
