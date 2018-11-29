import { expect } from 'chai'
import isClass from '../src/isClass'

describe('isClass return false for function and return true for constructor', () => {
    it('should return false for function', done => {
        expect(isClass(testFunction)).be.false
        done()
    })

    it('should return true for class', done => {
        expect(isClass(testClass)).be.true
        done()
    })
})

function testFunction(this: any){
    this.action = 'DoNothing'
}


class testClass{
    private action : string
    constructor(){
        this.action = 'DoNothing'
    }
}