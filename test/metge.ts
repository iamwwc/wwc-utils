import {expect} from 'chai'
import merge from '../src/merge'

describe('merge action like object assign', () => {
    it('should merge', done => {
        let fakeData = {
            name: 'wwc'
        }
        let fakeData1 = {
            title: 'test'
        }
        let fakeData2 = {
            bigObject: {
                path: 'testpath',
                title: 'testtitle',
                where: {
                    city: 'china'
                }
            }
        }

        expect(merge(fakeData,fakeData1,fakeData2)).eqls({
            name:'wwc',
            title:'test',
            bigObject: {
                path: 'testpath',
                title: 'testtitle',
                where: {
                    city: 'china'
                }
            }
        })

        done()
    })
})