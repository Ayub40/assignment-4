function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
        return "Invalid Number";
    }
    const ticketPrice = 120;
    const gatemanSalary = 500;
    const staffLaunchBill = 50 * 8;

    let totalTicketCoast = (ticketSale * ticketPrice);
    let gatemanStaffCoast = (gatemanSalary + staffLaunchBill);
    let remain = totalTicketCoast - gatemanStaffCoast;
    return remain;
}


function checkName(name) {
    if (typeof name !== 'string') {
        return "invalid";
    }
    const nameLastLetter = name.toLowerCase()[name.length - 1];
    const nameGoodLetter = ["a", "y", "i", "e", "o", "u", "w"];
    for (let i = 0; i < nameGoodLetter.length; i++) {
        if (nameLastLetter === nameGoodLetter[i]) {
            return "Good Name";
        }
        // else {
        //     return "Bad Name";
        // }
    }
    return "Bad Name";
}


function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return "Invalid Array";
    }
    let num = [];

    for (let x = 0; x < array.length; x++) {
        if (typeof array[x] === 'number' && !isNaN(array[x])) {
            num.push(array[x]);
        }
        // return num;
    }
    return num;
}


function password(object) {
    const { name, birthYear, siteName } = object;

    if (object.birthYear.toString().length < 4) {
        return "invalid";
    }

    if (!name || !birthYear || !siteName) {
        return "invalid";
    }

    const websiteName = siteName.charAt(0).toUpperCase() + siteName.slice(1);
    const passwordGenerate = `${websiteName}#${name}@${birthYear}`;
    return passwordGenerate;
}


function monthlySavings(allPayments, livingCost) {
    if (!Array.isArray(allPayments) && typeof livingCost !== "number") {
        return "invalid input";
    }


    let income = 0;
    for (const payment of allPayments) {
        if (payment >= 3000) {
            const allTax = payment - (payment * 20) / 100;
            income = income + allTax;
        } else {
            income = income + payment;
        }
    }

    const savings = income - livingCost;

    if (savings < 0) {
        return "earn more";
    }

    return savings;
}
