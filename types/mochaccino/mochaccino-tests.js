"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mochaccino_1 = require("mochaccino");
/**
 * spy test
 *
 */
const obj = {
    funcName: () => {
    }
};
let s = mochaccino_1.spy();
s(1, 2);
mochaccino_1.expect(s).toHaveBeenCalledWith(1, 2);
mochaccino_1.spy(obj, 'funcName');
obj.funcName();
mochaccino_1.expect(obj.funcName).toHaveBeenCalled();
/***********************/
s = mochaccino_1.spy();
s();
mochaccino_1.expect(s).toHaveBeenCalled();
/***********************/
s(obj, 'funcName').and.callFake(() => {
    return 123;
});
mochaccino_1.expect(obj.funcName()).toEqual(123);
mochaccino_1.spy(obj, 'funcName');
mochaccino_1.expect(obj.funcName).toHaveBeenCalled();
/***********************/
s(obj, 'funcName').and.callThrough();
/***********************/
s(obj, 'funcName').and.returnValue(5);
/***********************/
/**
 * dom test
 */
mochaccino_1.dom.create();
mochaccino_1.dom.destroy();
mochaccino_1.dom.clear();
/**
 * expect test
 *
 */
const a = 1;
const b = true;
const c = 2;
const f = () => {
};
const ErrorType = new Error();
const regexp = /123/;
mochaccino_1.expect(true).toBeTruthy();
mochaccino_1.expect(a).toBe(b);
mochaccino_1.expect(a).toEqual(b);
mochaccino_1.expect(a).toBeTruthy();
mochaccino_1.expect(a).toBeFalsy();
mochaccino_1.expect(a).toBeDefined();
mochaccino_1.expect(a).toBeUndefined();
mochaccino_1.expect(a).toBeNull();
mochaccino_1.expect(a).toBeLessThan(c);
mochaccino_1.expect(a).toBeGreaterThan(c);
mochaccino_1.expect([1, 2]).toContain(1);
mochaccino_1.expect(f).toThrow();
mochaccino_1.expect(f).toThrowError(ErrorType);
mochaccino_1.expect(s).toMatch(regexp);
mochaccino_1.expect(s).toHaveBeenCalled();
mochaccino_1.expect(s).toHaveBeenCalledWith(1, '23');
mochaccino_1.expect(s).toHaveBeenCalledTimes(55);
//# sourceMappingURL=mochaccino-tests.js.map