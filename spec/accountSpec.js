'use strict';

describe('Account', function() {

  var statement;
  var account;

  beforeEach(function(){
    statement = new Statement();
    account = new Account(statement);
  })

  it('Starting balance has £0', function(){
    expect(account.balance).toEqual(0);
  })

    describe('Deposit', function(){
      it('Adds money to the balance', function(){
        account.deposit(100);
        expect(account.balance).toEqual(100);
      })
    })

    describe('Withdraw', function(){
      it('Subtracts money from the balance', function(){
        account.withdraw(100);
        expect(account.balance).toEqual(-100)
      })
    })
      
    describe('Print Statement', function(){
      it('Prints an empty statement containing just the header', function(){
        expect(account.printStatement()).toBe('date || credit || debit || balance\n');
      })
    })

});