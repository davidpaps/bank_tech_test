'use strict';

describe('Feature', function(){

  var statement;
  var account;

  beforeEach(function(){
    statement = new Statement();
    account = new Account(statement);
  })


  it('Can print a deposit transaction', function(){
    account.deposit(1000);
    expect(account.printStatement()).toBe('date || credit || debit || balance\n25/02/2020 || 1000.00 || || 1000.00');
  })

  it('Can print a withdrawal transaction', function(){
    account.withdraw(500);
    expect(account.printStatement()).toBe('date || credit || debit || balance\n25/02/2020 || || 500.00 || -500.00');
  })

  it('Can print deposit and withdrawal transactions', function(){
    account.deposit(1000);
    account.withdraw(500);
    expect(account.printStatement()).toBe('date || credit || debit || balance\n25/02/2020 || || 500.00 || 500.00\n25/02/2020 || 1000.00 || || 1000.00');
  })

  it('Can print out a full statement in reverse order', function(){
    account.deposit(1000);
    account.deposit(2000);
    account.withdraw(500);
    expect(account.printStatement()).toBe('date || credit || debit || balance\n25/02/2020 || || 500.00 || 2500.00\n25/02/2020 || 2000.00 || || 3000.00\n25/02/2020 || 1000.00 || || 1000.00')
  })
})



    //   describe('Deposit', function(){
    //     it('Can deposit £100', function(){
    //       account.deposit(100);
    //       expect(account.balance).toEqual(100);
    //     })

    //     it('Can deposit 2 x £100 and keep track of the current balance', function(){
    //       account.deposit(100);
    //       account.deposit(100);
    //       expect(account.balance).toEqual(200);
    //     })
    //   })

    //   describe('Withdraw', function(){
    //     it('Can withdraw £100', function(){
    //       account.withdraw(100);
    //       expect(account.balance).toEqual(-100);
    //     })

    //     it('Can withdraw 2 x £100 and keep track of the current balance', function(){
    //       account.withdraw(100);
    //       account.withdraw(100);
    //       expect(account.balance).toEqual(-200);
    //     })
    //   })

    // it('Can calculate and keep track of deposit and withdrawals', function(){
    //   account.deposit(1000);
    //   account.withdraw(500);
    //   expect(account.balance).toEqual(500);
    // })

    

