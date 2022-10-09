let sum = function(a,b){
    return a+b;
}

let mul = ((a,b)=>{
    return a*b;
})

let sub = ((a,b)=>{
    return a-b;
})
//module.exports = sum;
//module.exports = mul;
//this.funct = sum;
// for multiple exports from a single source
module.exports = {sumExport : sum, mulExport : mul ,subExport : sub};
