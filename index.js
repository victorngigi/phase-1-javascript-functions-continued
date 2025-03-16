// code your solution here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`;
}
function wrapAdjective(flair="*"){
    return function inner(param="special"){
        return `You are ${flair}${param}${flair}!`
    }
}

console.log(saturdayFun("watch F1"));
console.log(mondayWork("make 1 million chappatis"));
console.log(wrapAdjective("*")("eating too much"));

