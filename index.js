// code your solution here
function saturdayFun(fun = 'roller-skate') {
    return `This Saturday, I want to ${fun}!`;
}
saturdayFun();

function mondayWork(work = 'go to the office') {
    return `This Monday, I will ${work}.`;
}
mondayWork();

function wrapAdjective(symb) {
    return function (msg) {
        return `You are ${symb}${msg}${symb}!`;
    }    
}
wrapAdjective('*')("a hard worker");

