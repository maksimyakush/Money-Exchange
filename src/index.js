// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let H = 0;
    let Q = 0;
    let D = 0;
    let N = 0;
    let P = 0;
    let obj = {};
    if(!currency) return {};
    if (currency >= 10000) return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    while (currency - 50 >= 0) {
        H += 1;
        currency -= 50;
    }     
    obj["H"] = H;
    while (currency - 25 >= 0) {
        Q += 1;
        currency -= 25;
    }
    obj["Q"] = Q;
    while (currency - 10 >= 0) {
        D += 1;
        currency -= 10;
    }
    obj["D"] = D;
    while (currency - 5 >= 0) {
        N += 1;
        currency -= 5;
    }
    obj["N"] = N;
    while (currency - 1 >= 0) {
        P += 1;
        currency -= 1;
    }
    obj["P"] = P;
    for(let item in obj) {
        if (obj[item] === 0) delete obj[item];  
    }
    return obj;
}
