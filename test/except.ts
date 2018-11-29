import except from '../src/except'
import { expect } from 'chai'

describe('except should reserve index except *keys in except*', () => {
    let fakeData = {
        name: 'wwc',
        where: 'nowhere',
        age: 666,
        bigObject: {
            title: 'testtitle',
            path: 'testpath'
        }
    }

    it('should receive Array', done => {
        let fake = { ...fakeData }
        expect(except(fake, ['name', 'where', 'bigObject'])).eqls({
            age: 666
        })
        done()
    })

    it('should receive strings', done => {
        let fake = { ...fakeData }
        expect(except(fake, 'name where bigObject')).eqls({
            age: 666
        })
        done()
    })
})