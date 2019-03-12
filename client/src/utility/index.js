export function haveValues(target) {
    return !!Object.values(target).find(v => v !== null);
}

export function removeNulls(obj) {
    let newObj = {};
    for (let key in obj) {
        if (obj[key] !== null) {
            newObj[key] = obj[key];
        }

    }
    return newObj;
}
