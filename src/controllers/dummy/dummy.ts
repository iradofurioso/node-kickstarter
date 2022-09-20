import { Next, Request, Response } from "restify"

class DummyController {
  public async home(req: Request, res: Response, next: Next) {
    console.log('WORKING WORKING WORKING WORKING WORKING WORKING')
    return next()
  }
}

export default new DummyController()
