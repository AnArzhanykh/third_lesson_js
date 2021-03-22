/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

/*
   * Каждая транзакция это объект со свойствами: id, type и amount
   */

const account = {
    // Текущий баланс счета
    balance: 0,

    // История транзакций
    transactions: [],

    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) {
        // const newId =  Math.floor(Date.now() + Math.random() * (100 - 10) + 10) ;
        let newId = 2;
        (type === 'deposit') ? newId = newId+ 1: newId;
        
        const newTransaction = {
            id: newId, 
            amount: amount,
            type: type,
        }
        this.transactions.push(newTransaction);
    },

    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
        this.balance += amount;
        this.createTransaction(amount, Transaction.DEPOSIT);
        return console.log(` Вы поплнили баланс на ${amount}`);
    },

    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {
        if(amount >  this.balance) console.log('У Вас недостаточно средств на счету');
        this.balance -= amount;
        this.createTransaction(amount, Transaction.WITHDRAW);
        return console.log(` Вы сняли сумму ${amount}`);
    },

    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
        return this.balance;
    },

    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {
        let foundObject = null

        for(const idKey of this.transactions){
            if(idKey.id === id) {
                foundObject = idKey;
                console.log(foundObject);
                break
            } 
        }

        if(foundObject === null){
            console.log('Такого id не найдено');
        } 

        return foundObject
    },

    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
        let moneyTransition = 0;
        for(const value of this.transactions) {
            if(value.type === type){
                moneyTransition += value.amount;
            }
        }
        console.log(moneyTransition);
    },
};

account.deposit(100);
account.deposit(100);
account.deposit(100);

account.withdraw(100);

console.log(account.getBalance());

account.getTransactionDetails(2);
account.getTransactionDetails(5);

console.log(account.transactions);

account.getTransactionTotal('deposit')
account.getTransactionTotal('withdraw')


