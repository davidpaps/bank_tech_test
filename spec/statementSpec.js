'use strict';

describe('Statement', function(){

  var statement;
  var account;

  beforeEach(function(){
    statement = new Statement();
    account = new Account(statement);
  })


  describe('Print Statement', function(){
    it('Returns an empty statement containing the header', function(){
    expect(statement.printStatement()).toBe('date || credit || debit || balance\n')
  })
})



})


