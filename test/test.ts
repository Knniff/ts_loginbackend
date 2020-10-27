const request = require("supertest");
const app = require("../server.ts");

describe("/",function() {
    it("200", async function(){
        await request(app).get("/").expect(200)
    })
})