let findName = (type) => {
    const animalsName = {
        [type === `cat` && type]: "Barsik",
        [type === `dog` && type]: "Stasik", // if type equal dog return type
        [type === `rabbit` && type]: "Vasik",
    }
    return animalsName?.[type] || "Unknown";
}

console.log(findName('dog'));