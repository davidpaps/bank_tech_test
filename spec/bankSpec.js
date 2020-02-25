'use strict';

describe('Bank', function() {

  var bank;

  beforeEach(function(){
    bank = new Bank();
  });
  
    it('Starting balance has £0', function(){
      expect(bank.currentBalance()).toEqual(0);
    });

      describe('Deposit', function(){
        it('Can deposit £100', function(){
          bank.deposit(100);
          expect(bank.currentBalance()).toEqual(100);
        })

        it('Can deposit 2 x £100 and keep track of the current balance', function(){
          bank.deposit(100);
          bank.deposit(100);
          expect(bank.currentBalance()).toEqual(200);
        })
      })

      describe('Withdraw', function(){
        it('Can withdraw £100', function(){
          bank.withdraw(100);
          expect(bank.currentBalance()).toEqual(-100);
        })

        it('Can withdraw 2 x £100 and keep track of the current balance', function(){
          bank.withdraw(100);
          bank.withdraw(100);
          expect(bank.currentBalance()).toEqual(-200);
        })
      })

    it('Can calculate and keep track of deposit and withdrawals', function(){
      bank.deposit(1000);
      bank.withdraw(500);
      expect(bank.currentBalance()).toEqual(500);
    })

      describe('Print Statement', function(){
        it('Can print the header of the statement', function(){
          expect(bank.printStatement()).toBe('date || credit || debit || balance\n');
        })
    
        it('Can print a deposit transaction', function(){
          bank.deposit(1000);
          expect(bank.printStatement()).toBe('date || credit || debit || balance\n25/02/2020 || 1000.00 || || 1000.00');
        })
    
        it('Can print a withdrawal transaction', function(){
          bank.withdraw(500);
          expect(bank.printStatement()).toBe('date || credit || debit || balance\n25/02/2020 || || 500.00 || -500.00');
        })
    
        it('Can print deposit and withdrawal transactions', function(){
          bank.deposit(1000);
          bank.withdraw(500);
          expect(bank.printStatement()).toBe('date || credit || debit || balance\n25/02/2020 || || 500.00 || 500.00\n25/02/2020 || 1000.00 || || 1000.00');
        })
    
        it('Can print out a full statement in reverse order', function(){
          bank.deposit(1000);
          bank.deposit(2000);
          bank.withdraw(500);
          expect(bank.printStatement()).toBe('date || credit || debit || balance\n25/02/2020 || || 500.00 || 2500.00\n25/02/2020 || 2000.00 || || 3000.00\n25/02/2020 || 1000.00 || || 1000.00')
        })
      })

});