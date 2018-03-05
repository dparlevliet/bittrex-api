import assert from 'assert';
import Bittrex from '../index.js';

describe('Bittrex public API', function() {

  it('should respond with markets list', function(done) {
    this.timeout(5000);

    let bittrex = new Bittrex({});
    bittrex.v1.Public.getmarkets().then((response) => {
      assert.ok(response.success == true, 'Response is a success');
      assert.ok(response.type == 'Array', 'Response is an Array object');
      assert.ok(response.length > 0, 'Array object has results');
      assert.ok(response.length > 5, 'Array object has many results');
      done();
    }).catch((e) => {
      console.error(e);
      done();
    });
  });

  it('should respond with currencies list', function(done) {
    this.timeout(5000);

    let bittrex = new Bittrex({});
    bittrex.v1.Public.getcurrencies().then((response) => {
      assert.ok(response.success == true, 'Response is a success');
      assert.ok(response.type == 'Array', 'Response is an Array object');
      assert.ok(response.length > 0, 'Array object has results');
      assert.ok(response.length > 5, 'Array object has many results');
      done();
    }).catch((e) => {
      console.error(e);
      done();
    });
  });

  it('should respond with ticker for BTC/USDT', function(done) {
    this.timeout(5000);

    let bittrex = new Bittrex({});
    bittrex.v1.Public.getticker('BTC', 'USDT').then((response) => {
      assert.ok(response.success == true, 'Response is a success');
      assert.ok(response.type == 'Object', 'Response is an object');
      assert.ok(response.result.Bid > 0, 'Object should have Bid value');
      done();
    }).catch((e) => {
      console.error(e);
      done();
    });
  });

  it('should respond with all market summaries', function(done) {
    this.timeout(5000);

    let bittrex = new Bittrex({});
    bittrex.v1.Public.getmarketsummaries('BTC', 'USDT').then((response) => {
      assert.ok(response.success == true, 'Response is a success');
      assert.ok(response.type == 'Array', 'Response is an Array object');
      assert.ok(response.length > 0, 'Array object has results');
      assert.ok(response.length > 5, 'Array object has many results');
      done();
    }).catch((e) => {
      console.error(e);
      done();
    });
  });

  it('should respond with market summary for BTC/USDT', function(done) {
    this.timeout(5000);

    let bittrex = new Bittrex({});
    bittrex.v1.Public.getmarketsummary('BTC', 'USDT').then((response) => {
      assert.ok(response.success == true, 'Response is a success');
      assert.ok(response.type == 'Array', 'Response is an Array object');
      assert.ok(response.length > 0, 'Array object has results');
      assert.ok(response.length == 1, 'Array object should have one result');
      assert.notEqual(typeof(response.result[0].Bid), 'undefined');
      done();
    }).catch((e) => {
      console.error(e);
      done();
    });
  });

  it('should respond with the order books for both buy / sell', function(done) {
    this.timeout(5000);

    let bittrex = new Bittrex({});
    bittrex.v1.Public.getorderbook('BTC', 'USDT', 'both').then((response) => {
      assert.ok(response.success == true, 'Response is a success');
      assert.ok(response.type == 'Object', 'Response is an Object');
      assert.ok(response.result.buy.length > 0, 'Expect buy to have results');
      assert.ok(response.result.sell.length > 0, 'Expect sell to have results');
      done();
    }).catch((e) => {
      console.error(e);
      done();
    });
  });

  it('should respond with the order books for buy only', function(done) {
    this.timeout(5000);

    let bittrex = new Bittrex({});
    bittrex.v1.Public.getorderbook('BTC', 'USDT', 'buy').then((response) => {
      assert.ok(response.success == true, 'Response is a success');
      assert.ok(response.type == 'Array', 'Response is an Array object');
      assert.ok(response.length > 0, 'Expect to have results');
      done();
    }).catch((e) => {
      console.error(e);
      done();
    });
  });

  it('should respond with the order books for both sell only', function(done) {
    this.timeout(5000);

    let bittrex = new Bittrex({});
    bittrex.v1.Public.getorderbook('BTC', 'USDT', 'sell').then((response) => {
      assert.ok(response.success == true, 'Response is a success');
      assert.ok(response.type == 'Array', 'Response is an Array object');
      assert.ok(response.length > 0, 'Expect to have results');
      done();
    }).catch((e) => {
      console.error(e);
      done();
    });
  });

  it('should respond with the recent history for USDT-BTC', function(done) {
    this.timeout(5000);

    let bittrex = new Bittrex({});
    bittrex.v1.Public.getmarkethistory('BTC', 'USDT').then((response) => {
      assert.ok(response.success == true, 'Response is a success');
      assert.ok(response.type == 'Array', 'Response is an Array object');
      assert.ok(response.length > 0, 'Expect to have results');
      done();
    }).catch((e) => {
      console.error(e);
      done();
    });
  });

});