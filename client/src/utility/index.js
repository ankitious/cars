import {head, join, juxt, tail, toUpper, compose} from "ramda";
import * as queryString from "query-string";

export const haveValues = (target) => {
    return !!target ? !!Object.values(target).find(v => v !== null) : "";
};

export const removeNulls = (obj) => {
    let newObj = {};
    for (let key in obj) {
        if (obj[key] !== null) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
};

export const capitalize = compose(
    join(''),
    juxt([compose(toUpper, head), tail])
);

export const sanitizeParams = (params) => {
    return(
        haveValues(params) ?
            compose(queryString.stringify,removeNulls)(params) : "");
};
