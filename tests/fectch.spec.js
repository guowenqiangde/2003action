const { getData } = require("../fetch")
const axios = require("axios")

jest.mock("axios")
it("fecth",async ()=>{
    //模拟第一次接受到的数据
    axios.post.mockResolvedValueOnce("123")
    //模拟每一次接收到的数据
    axios.post.mockResolvedValue("456")
    const data1 = await getData();
    const data2 = await getData();
    expect(data1).toBe("123");
    expect(data2).toBe("456");
})