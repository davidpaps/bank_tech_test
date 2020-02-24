function Bank(){
  this.balance = 0;
  this.transactions = ['date || credit || debit || balance'];
};

Bank.prototype.currentBalance = function(){
  return this.balance;
}

Bank.prototype.deposit = function(money = 0){
  this.balance += money;
  var transactionBalance =  this.currentBalance();
  this.transactions.push(`10/01/2014 || ${money.toFixed(2)} || || ${transactionBalance.toFixed(2)}`);
}

Bank.prototype.withdraw = function(money = 0){
  this.balance -= money;
  var transactionBalance =  this.currentBalance();
  this.transactions.push(`14/01/2014 || || ${money.toFixed(2)} || ${transactionBalance.toFixed(2)}`);
}

Bank.prototype.printStatement = function(){
  return (this.transactions.join('\n'))
}