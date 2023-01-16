let {fn} = require('../fn.js')
describe('测试不知道内部逻辑的函数',()=>{
    test("测试fn",()=>{
        let result = fn()
        let type = typeof fn
        // fn = jest.fn();
        // let result = fn(1,2,3);
        // // 断言mockFn的执行后返回undefined
        // expect(result).toBeUndefined();
        expect(type).toBe("function")
        // // 断言mockFn被调用
        // expect(fn).toBeCalled();
        // // 断言mockFn被调用了一次
        // expect(fn).toBeCalledTimes(1);
        // // 断言mockFn传入的参数为1, 2, 3
        // expect(fn).toHaveBeenCalledWith(1, 2, 3);
    })
})