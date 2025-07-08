export const logExucution = (fn) =>{
    return (...args) =>{
        console.log('Start');
        const result = fn(...args);
        console.log("Done");
        return result
    }
}