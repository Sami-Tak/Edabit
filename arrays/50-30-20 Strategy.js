// The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.

// Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.

// function fiftyThirtyTwenty(ati) {
    // const obj = {
        // "Needs": ati * 0.50,
        // "Wants": ati * 0.30,
        // "Savings": ati * 0.20
    // }
    // return JSON.stringify(obj);
// }
// console.log(fiftyThirtyTwenty(10000));
// console.log(fiftyThirtyTwenty(50000));
// console.log(fiftyThirtyTwenty(13450));

// function fiftyThirtyTwenty(ati) {
    // let persent = [50, 30, 20];

    // return {
        // Needs: ati * persent[0] / 100,
        // Wants: ati * persent[1] / 100,
        // Savings: ati * persent[2] / 100
    // };
// }

// console.log(fiftyThirtyTwenty(10000));
// console.log(fiftyThirtyTwenty(50000));
// console.log(fiftyThirtyTwenty(13450));

// function fiftyThirtyTwenty(ati) {
    // let percent = [50, 30, 20];
    // let result = percent.map(p => ati * p / 100);

    // return {
    //   Needs: result[0],
    //   Wants: result[1],
    //   Savings: result[2]
    // };
// }

// console.log(fiftyThirtyTwenty(10000));
// console.log(fiftyThirtyTwenty(50000));
// console.log(fiftyThirtyTwenty(13450));
 
let marks = [30, 50, 70, 90];
console.log(marks);
 
let mar = [30, 50, 70, 90, null];
console.log(mar);

let mark = [30, 50, 70, 90, false];
console.log(mark);

let num = [30, 50, 70, 90, "absent"];
console.log(num);