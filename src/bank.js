function Bank(){
  this.balance = 0;
};

Bank.prototype.currentBalance = function(){
  return this.balance;
}

Bank.prototype.deposit = function(money){
  this.balance += money;
}

Bank.prototype.withdraw = function(money){
  this.balance -= money;
}