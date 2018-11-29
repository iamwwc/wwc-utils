import { expect } from 'chai'
import only from '../src/only'

describe('only should works', () => {
    let fakeData = {
        name: 'wwc',
        bigObject: {
            title: 'test',
            path: 's'
        },
        where: 'nowhere'
    }

    it('only receive Array and should remove necessary objects', done => {
        let fake = { ...fakeData }
        let res = only(fake, ['bigObject', 'where'])
        expect(res).eqls({
            bigObject: {
                title: 'test',
                path: 's'
            },
            where: 'nowhere'
        })
        done()
    })

    it('only receive strings and should remove necessary objects', done => {
        let fake = { ...fakeData }
        let res = only(fake, 'name bigObject')
        expect(res).eqls({
            name: 'wwc',
            bigObject: {
                title: 'test',
                path: 's'
            },
        })
        done()
    })
})