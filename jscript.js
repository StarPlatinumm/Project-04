// Declare main variables
let money, time;

// Get main variables from user
function start() {
    money = + prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = + prompt("Ваш бюджет на месяц?");
    }
}
start();

// Define appData variable
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    // Get MAIN expenses from user
    getExpenses: function() {
        for (let i=0; i<2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце (" + (i+1) + ")"),
                b = + prompt("Сколько это будет стоить?");
            if ( typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
                appData.expenses[a] = b;
                console.log("New expense added (" + (i+1) + ")");
            } else {
                alert("Статья расходов указана неверно. Попробуйте ещё раз.");
                i--;
            }
        }
    },
    // Display moneyPerDay
    detectDayBudget: function  () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Бюджет на один день: " + appData.moneyPerDay);
    },
    // Poor/OK/Rich
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Minial wage");
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay <= 2000) {
            console.log("Medium wage");
        } else if (appData.moneyPerDay > 2000) {
            console.log("High wage");
        } else {
            console.log("Error occured...");
        }
    },
    // Calculate savings interest
    checkSavings: function() {
        if (appData.savings == true) {
            let deposit = +prompt("Укажите объём сбережений"),
                interest = +prompt("Укажите годовую ставку по депозиту");
            // Display month income
            appData.monthIncome = deposit/100/12*interest;
            alert("Доход с депозита в месяц: " + appData.monthIncome);
        } 
    },
    // Get OPTIONAL expenses from user
    chooseOptExpenses: function() {
        for (let i=0; i<3; i++) {
            let a = prompt("Введите НЕобязательную статью расходов в этом месяце (" + (i+1) + ")"),
                b = + prompt("Сколько это будет стоить?");
            if ( typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
                appData.optionalExpenses[a] = b;
                console.log("New opt. expense added (" + (i+1) + ")");
            } else {
                alert("Статья расходов указана неверно. Попробуйте ещё раз.");
                i--;
            }
        }
    },
    chooseIncome: function() {
        let items;
        for (let i = 0; i<1; i++) {
            items = prompt("Что принесет дополниельный доход? (Перечислить через запятую)","");
            if ( typeof(items) != null && items != "") {
                appData.income = items.split(", ");
                appData.income.push(prompt("Может что-то ещё?", ""));
                appData.income.sort();
            } else {
                i--;
            }
        }
    }
};

// Выводим на экран способы доп.заработка
appData.chooseIncome();
console.log("Способы доп. заработка: ");
appData.income.forEach(function (item) {
    console.log(item);
});

// Выводим на экран объект appData
console.log("Наша программа включает в себя данные: ");
for (let key in appData) {
    console.log(key + ': ' + appData[key]);
}
