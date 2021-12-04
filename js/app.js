/*
author: naranja15
*/

let inputForm = document.querySelector("#inputForm");
let boughtDate,expirationDebt,headerDate,feesQty,payPerMonth;
let budgetCalcTab = document.querySelector('#budgetCalc').getElementsByTagName('thead')[0].getElementsByTagName('tr')[0];
let dates = new Array();
let transactionsDebt = document.querySelector('#budgetCalc').getElementsByTagName('tbody')[0];

const addTransaction = () => {

    let inputs = document.querySelectorAll('input');
    
    boughtDate = new Date(inputs[0].value);
    feesQty = parseInt(inputs[1].value);
    totalCost = inputs[2].value;
    payPerMonth = parseInt(totalCost / feesQty);
    ccNum = inputs[3].value;

    expirationDebt = new Date(boughtDate).add(feesQty).month();


    let transactions = document.querySelector('#transactions').getElementsByTagName('tbody')[0];
    

    transactions.innerHTML+= `
    <tr>
        <th scope="row">1</th>
        <td>${totalCost}</td>
        <td>${feesQty}</td>
        <td>${payPerMonth}</td>
        <td>${ccNum}</td>   
        <td>${boughtDate.toString("d-MMM-yyyy")}</td>
        <td>${expirationDebt.toString("d-MMM-yyyy")}</td>
    </tr>
    `

    let tr = document.createElement('tr');
    transactionsDebt = transactionsDebt.appendChild(tr);
    comparacionDeFechas();
    transactionsDebt = document.querySelector('#budgetCalc').getElementsByTagName('tbody')[0];

}

const comparacionDeFechas = () => {
    let resultado;

    expirationDebt = Date.parse(expirationDebt).toString("d-MMM-yyyy");
    dates.forEach(element => {
        if(Date.parse(element).compareTo(Date.parse(expirationDebt)) == -1) {
            resultado = -1; // $payPerMonth
            transactionsDebt.innerHTML+=`<td>${payPerMonth}</td>`
            console.log(element+": MENOR QUE "+expirationDebt)
        }

        else if(Date.parse(element).compareTo(Date.parse(expirationDebt)) == 0) {
            resultado = 0; // $payPerMonth
            transactionsDebt.innerHTML+=`<td>${payPerMonth}</td>`
            console.log(element+": IGUAL QUE "+expirationDebt)
        }

        else if(Date.parse(element).compareTo(Date.parse(expirationDebt)) == 1) {
            resultado = 1; // $0
            transactionsDebt.innerHTML+=`<td>0</td>`
            console.log(element+": MAYOR QUE "+expirationDebt)
        }

    })
    return resultado;

}

// Agrega 12 meses consecutivos al array fechas

const addTodayPlusOne = () => {

    for(let i=0; i<12;i++) {
       dates.push(Date.today().add(i).month().toString("d-MMM-yyyy"));
    }

    dates.forEach(date => {
        budgetCalcTab.innerHTML+= `<th scope="col">${date}</th>`
    });

    return sth;
}  



// Genera la tabla de deudas
const debtHistory = () => {
    budgetCalcTab.innerHTML+= `${addTodayPlusOne()}`
}
window.onload = debtHistory;



