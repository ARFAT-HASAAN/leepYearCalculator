
function isLeepYear(year){
    if(year % 4 == 0 && year % 100 != 0){
        return "leep year";
    }
    return "not a leep Year"
}

var leepyar =  isLeepYear(2028);
console.log(leepyar)
