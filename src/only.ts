
/**
 * Only will return an object where key only contains oly Array 
 * @param obj Object
 * @param oly keys
 */
export default function only(obj: { [key: string]: any }, oly: string | Array<string>): any {
    obj || (obj = {})
    if (typeof oly === 'string') {
        oly = oly.split(/ +/)
    }
    return oly.reduce((prev, curr) => {
        if (typeof obj[curr] !== 'undefined') {
            prev[curr] = obj[curr]
        }
        return prev
    }, {} as { [index: string]: any })
}