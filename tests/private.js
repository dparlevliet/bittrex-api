import assert from 'assert';
import Bittrex from '../index.js';

describe('Bittrex public API', function() {

  it('should respond with error requesting account balances using invalid api keys', function(done) {
    this.timeout(5000);

    let bittrex = new Bittrex({
      auth: {
        key: '1235',
        secret: '12345',
      }
    });

    bittrex.v1.Private.getbalances().then((response) => {
      assert.ok(response.success == false, 'Response is a failure');
      done();
    }).catch((e) => {
      assert.ok(e.success == false, 'Response is a failure');
      assert.ok(e.debug.responseJson.message == 'APIKEY_INVALID', 'Response should be invalid API key');

      done();
    });
  });

});