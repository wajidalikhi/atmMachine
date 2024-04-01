import inquirer from "inquirer";
let myBalence = 10000; //Dollar
let mypinCode = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter you pin",
        type: "number",
    },
]);
// 12345 === 1234 - false
if (pinAnswer.pin === mypinCode) {
    console.log("Correct pin code!!!");
    let operationsAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "Fast Cash"],
        },
    ]);
    //   // console.log(operationsAns);
    if (operationsAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        if (amountAns.amount <= myBalence) {
            // =, -=, +=
            myBalence -= amountAns.amount;
            console.log(`Your remaining balnce is: ${myBalence}`);
        }
        else {
            console.log("low Balance Your Account");
        }
    }
    else if (operationsAns.operation === "check balance") {
        console.log(`Your balance is: ${myBalence}`);
    }
    else {
        let fashCash = await inquirer.prompt([
            {
                name: "cash",
                message: "please select amount",
                type: "list",
                choices: ["500", "1000", "5000", "10000", "20000"]
            },
        ]);
        if (fashCash.cash <= myBalence) {
            myBalence -= fashCash.cash;
            console.log(`Your remaining balnce is: ${myBalence}`);
        }
        else {
            console.log("low Balance Your Account");
        }
    }
}
else {
    console.log("Wrong Pin");
}
