'use strict';

describe('Statement', function(){

  var statement;
  var date;

  beforeEach(function(){
    statement = new Statement();
    date = '25/02/2020';
  })

  it('Transactions start empty', function(){
    expect(statement.transactions.length).toEqual(0);
  })

    describe('Print Statement', function(){
      it('Returns an empty statement containing the header', function(){
        expect(statement.printStatement()).toBe('date || credit || debit || balance\n')
      })
    })

    describe('Update Deposit Statement', function(){
      it('Returns the printed deposit statement', function(){
      statement.updateDepositStatement(1000, 1000, date)
      expect(statement.transactions[0]).toEqual('25/02/2020 || 1000.00 || || 1000.00')
      })
    })

    describe('Update Withdraw Statement', function(){
      it('Returns the printed withdraw statement', function(){
      statement.updateWithdrawStatement(1000, -1000, date)
      expect(statement.transactions[0]).toEqual('25/02/2020 || || 1000.00 || -1000.00')
      })
    })
})

