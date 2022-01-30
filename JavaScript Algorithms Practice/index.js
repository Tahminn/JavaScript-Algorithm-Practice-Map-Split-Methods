//Task-2
const arr = [3, 50, 40, 112, 43, 25];
document.getElementById("array").innerHTML = arr;

function arrOrderBttn() {
    const newArr = arr.sort(function (a, b) { return b - a })
    document.getElementById("descending-new-array").innerHTML = newArr;
}


//Task-3
const arrMonths = ["January", "February", "March", "April",]
document.getElementById("array-months").innerHTML = arrMonths;

const newArrMonths = arrMonths.map(monthsByNums);

function monthsByNums(months, index){
    let count = index + 1;
    let monthByNum = months + "-" + count;
    return monthByNum;
}

function monthsByNumsBttn() {
    let maxCount = newArrMonths.length;
    let listMonths = "<ubl>";
    for (let i = 0; i < maxCount; i++) {
        listMonths += "<li>" + newArrMonths[i] + "</li>";
    }
    listMonths += "</ul>";
    document.getElementById("array-months-by-order").innerHTML = listMonths;
}

//Task-4

let string = document.getElementById("stext").value; 

function stringItemLengthBttn(){
    let stringItems = string.split(" ");
    const itemLenghtArr = stringItems.map(m => m.length) 
    document.getElementById("strings-length-array").innerHTML = itemLenghtArr;
}





