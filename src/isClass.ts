
/**
 * Test where a function is a class(which is constructor) or pure function
 * @param fn 
 * 
 * For example
 * let cls = class{}
 * let fn = function(){}
 * 
 * @returns true for class, false for function
 * 
 */
export default function isClass(fn:any){
    return typeof fn === 'function'
            && /^class\s/.test(Function.prototype.toString.call(fn))
}