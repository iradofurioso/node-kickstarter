import DummyController from "@controllers/dummy/dummy"

const dummyRouter = (server: any) => {
    server.get(
        "/home",
        [],
        DummyController.home
    )
}

export default dummyRouter
