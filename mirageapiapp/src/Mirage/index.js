import { createServer } from "miragejs"

export default function () {
    let arr=[{'id':1,'text':'Hello Boy'}]
  createServer({
    routes() {
        this.namespace='/fakeapi'
      this.get("/getTodo",{todo:arr})
    },
  })
}