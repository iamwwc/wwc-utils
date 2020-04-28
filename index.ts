export { default as only } from './src/only'
export { default as except } from './src/except'
export { default as isClass } from './src/isClass'


/**
 * 
 * @param {String} s 
 * @param  {...number} point
 * @example
 * >> splitString('0adbc0dc318a4a6fb516cc54c9af194c',7,11,15,19)
 * << ["0adbc0dc", "318a", "4a6f", "b516", "cc54c9af194c"]
 */
export function splitString(s: string, ...point: number[]): string[] {
  let last = 0
  let result = []
  point.forEach((num, idx) => {
    result[idx] = s.substring(last, num + 1)
    last = num + 1
  })
  result.push(s.substring(last))
  return result
}