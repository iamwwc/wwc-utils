
/**
 *  except return object except index in keys
 * @param obj object to except
 * @param keys keys want to remove
 */
export default function except(obj: { [index: string]: any }, keys: string | Array<string>) {
    obj || (obj = {})
    if (typeof keys === 'string') {
        keys = keys.split(/ +/)
    }

    return Object.keys(obj).reduce((prev, curr) => {
        if(keys.indexOf(curr) < 0){
            prev[curr] = obj[curr]
        }
        return prev
    },{} as {[index: string]:any})
}