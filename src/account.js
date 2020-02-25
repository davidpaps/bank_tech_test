'use strict';

function Account(statement){
  this.statement = statement;
  this.balance = 0;
}

Account.prototype.deposit = function(money){
  this.balance += money;
  this.statement.updateDepositStatement(money, this.balance)
}

Account.prototype.withdraw = function(money){
  this.balance -= money;
  this.statement.updateWithdrawStatement(money, this.balance);
}

Account.prototype.printStatement = function(){
  return this.statement.printStatement();
}