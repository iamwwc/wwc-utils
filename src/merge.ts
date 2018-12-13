

/**
 * merge multiple objects, merge rules respect Object.assign
 * @param args 
 */
export default function merge(...args: Array<any>) {
    return Object.assign({}, ...args)
}