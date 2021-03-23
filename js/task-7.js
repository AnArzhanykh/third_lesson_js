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
        const newId =  Math.floor(Date.now() + Math.random() * (100 - 10) + 10) ;

        return {
            id: newId, 
            amount: amount,
            type: type,
        }
    },

    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
        this.balance += amount;
        const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
        this.transactions.push(transaction);
        console.log(` Вы поплнили баланс на ${amount}`);
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
        if(amount >  this.balance) {
            console.log('У Вас недостаточно средств на счету');
            return
        } 
        this.balance -= amount;
        const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
        this.transactions.push(transaction);
        console.log(` Вы сняли сумму ${amount}`);
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

        for(const transaction of this.transactions){
            if(transaction.id === id) {
                foundObject = transaction;
                console.log(foundObject);
                return foundObject
            } 
        }


        console.log('Такого id не найдено');
        return  'Такого id не найдено'
    },

    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
        let moneyTransition = 0;
        for(const transacrion of this.transactions) {
            if(transacrion.type === type){
                moneyTransition += transacrion.amount;

            }
        }
        console.log(moneyTransition);
        return moneyTransition;
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


console.log(account.createTransaction(23 , 424));
console.log(account.transactions);

account.getTransactionTotal('withdraw');

