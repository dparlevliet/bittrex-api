/**
 * Module for v1 private methods
 * @module v1-private
 */

import Base from './bin/base.js';

class Private extends Base {

  constructor(settings, Request) {
    super(settings);

    this.baseUrl = 'https://bittrex.com/api/v1.1';
    this.Request = Request;
  }

  /**
   * buylimit
   *
   * @alias module:v1-private
   * @example
   * ```javascript
   *  bittrex.v1.Private.buylimit('BTC', 'USDT', '1.00000000', '1004.00000000').then((response) => {
   *    console.log(response);
   *    let data = response.result;
   *  }).catch((e) => {
   *    console.error(e);
   *  });
   * ```
   *
   * Data Example:
   * ```json
   * {
   *    "uuid" : "e606d53c-8d70-11e3-94b5-425861b86ab6"
   *  }
   * ```
   *
   * @returns {Promise} - ``RequestSuccess`` object on success or ``RequestError`` on error.
   */
  buylimit(currency, pair, quantity, price) {
    return this.Request.sendPrivate(this.baseUrl + '/account/buylimit', {
      market: this.makeMarketString(currency, pair),
      quantity: quantity,
      rate: price,
    });
  }

  /**
   * selllimit
   *
   * @alias module:v1-private
   * @example
   * ```javascript
   *  bittrex.v1.Private.selllimit('BTC', 'USDT', '1.00000000', '1004.00000000').then((response) => {
   *    console.log(response);
   *    let data = response.result;
   *  }).catch((e) => {
   *    console.error(e);
   *  });
   * ```
   *
   * Data Example:
   * ```json
   * {
   *   "uuid" : "614c34e4-8d71-11e3-94b5-425861b86ab6"
   * }
   * ```
   *
   * @returns {Promise} - ``RequestSuccess`` object on success or ``RequestError`` on error.
   */
  selllimit(currency, pair, quantity, price) {
    return this.Request.sendPrivate(this.baseUrl + '/account/selllimit', {
      market: this.makeMarketString(currency, pair),
      quantity: quantity,
      rate: price,
    });
  }

  /**
   * cancel
   *
   * @alias module:v1-private
   * @example
   * ```javascript
   *  bittrex.v1.Private.cancel('XXXXXX-XXXX-XXXX-XXXX-XXXXXX').then((response) => {
   *    console.log(response);
   *    let data = response.result;
   *  }).catch((e) => {
   *    console.error(e);
   *  });
   * ```
   *
   * Data Example:
   * ```json
   * null
   * ```
   *
   * @returns {Promise} - ``RequestSuccess`` object on success or ``RequestError`` on error.
   */
  cancel(uuid) {
    return this.Request.sendPrivate(this.baseUrl + '/account/cancel', {
      uuid: uuid
    });
  }

  /**
   * getopenorders
   *
   * @alias module:v1-private
   * @example
   * ```javascript
   *  bittrex.v1.Private.getopenorders('BTC', 'USDT').then((response) => {
   *    console.log(response);
   *    let data = response.result;
   *  }).catch((e) => {
   *    console.error(e);
   *  });
   * ```
   *
   * Data Example:
   * ```json
   * [{
   *    "Uuid" : null,
   *    "OrderUuid" : "09aa5bb6-8232-41aa-9b78-a5a1093e0211",
   *    "Exchange" : "BTC-LTC",
   *    "OrderType" : "LIMIT_SELL",
   *    "Quantity" : 5.00000000,
   *    "QuantityRemaining" : 5.00000000,
   *    "Limit" : 2.00000000,
   *    "CommissionPaid" : 0.00000000,
   *    "Price" : 0.00000000,
   *    "PricePerUnit" : null,
   *    "Opened" : "2014-07-09T03:55:48.77",
   *    "Closed" : null,
   *    "CancelInitiated" : false,
   *    "ImmediateOrCancel" : false,
   *    "IsConditional" : false,
   *    "Condition" : null,
   *    "ConditionTarget" : null
   *  }, {
   *    "Uuid" : null,
   *    "OrderUuid" : "8925d746-bc9f-4684-b1aa-e507467aaa99",
   *    "Exchange" : "BTC-LTC",
   *    "OrderType" : "LIMIT_BUY",
   *    "Quantity" : 100000.00000000,
   *    "QuantityRemaining" : 100000.00000000,
   *    "Limit" : 0.00000001,
   *    "CommissionPaid" : 0.00000000,
   *    "Price" : 0.00000000,
   *    "PricePerUnit" : null,
   *    "Opened" : "2014-07-09T03:55:48.583",
   *    "Closed" : null,
   *    "CancelInitiated" : false,
   *    "ImmediateOrCancel" : false,
   *    "IsConditional" : false,
   *    "Condition" : null,
   *    "ConditionTarget" : null
   *  }, ...]
   * ```
   *
   * @returns {Promise} - ``RequestSuccess`` object on success or ``RequestError`` on error.
   */
  getopenorders(currency, pair) {
    return this.Request.sendPrivate(this.baseUrl + '/account/getopenorders', {
      market: this.makeMarketString(currency, pair)
    });
  }

  /**
   * getbalances
   *
   * @alias module:v1-private
   * @example
   * ```javascript
   *  bittrex.v1.Private.getbalances().then((response) => {
   *    console.log(response);
   *    let data = response.result;
   *  }).catch((e) => {
   *    console.error(e);
   *  });
   * ```
   *
   * Data Example:
   * ```json
   * [{
   *    "Currency" : "DOGE",
   *    "Balance" : 0.00000000,
   *    "Available" : 0.00000000,
   *    "Pending" : 0.00000000,
   *    "CryptoAddress" : "...",
   *    "Requested" : false,
   *    "Uuid" : null
   *  }, {
   *    "Currency" : "BTC",
   *    "Balance" : 14.21549076,
   *    "Available" : 14.21549076,
   *    "Pending" : 0.00000000,
   *    "CryptoAddress" : "...",
   *    "Requested" : false,
   *    "Uuid" : null
   *  }, ... ]
   * ```
   *
   * @returns {Promise} - ``RequestSuccess`` object on success or ``RequestError`` on error.
   */
  getbalances() {
    return this.Request.sendPrivate(this.baseUrl + '/account/getbalances');
  }

  /**
   * getbalance
   *
   * @alias module:v1-private
   * @example
   * ```javascript
   *  bittrex.v1.Private.getbalance('BTC').then((response) => {
   *    console.log(response);
   *    let data = response.result;
   *  }).catch((e) => {
   *    console.error(e);
   *  });
   * ```
   *
   * Data Example:
   * ```json
   * {
   *    "Currency" : "BTC",
   *    "Balance" : 4.21549076,
   *    "Available" : 4.21549076,
   *    "Pending" : 0.00000000,
   *    "CryptoAddress" : "...",
   *    "Requested" : false,
   *    "Uuid" : null
   *  }
   * ```
   *
   * @returns {Promise} - ``RequestSuccess`` object on success or ``RequestError`` on error.
   */
  getbalance(currency) {
    return this.Request.sendPrivate(this.baseUrl + '/account/getbalance', {
      currency: currency
    });
  }

  /**
   * getwithdrawalhistory
   *
   * @alias module:v1-private
   * @example
   * ```javascript
   *  bittrex.v1.Private.getwithdrawalhistory('BTC').then((response) => {
   *    console.log(response);
   *    let data = response.result;
   *  }).catch((e) => {
   *    console.error(e);
   *  });
   * ```
   *
   * Data Example:
   * ```json
   * [{
   *      "PaymentUuid" : "b52c7a5c-90c6-4c6e-835c-e16df12708b1",
   *      "Currency" : "BTC",
   *      "Amount" : 17.00000000,
   *      "Address" : "...",
   *      "Opened" : "2014-07-09T04:24:47.217",
   *      "Authorized" : true,
   *      "PendingPayment" : false,
   *      "TxCost" : 0.00020000,
   *      "TxId" : null,
   *      "Canceled" : true,
   *      "InvalidAddress" : false
   *    }, {
   *      "PaymentUuid" : "f293da98-788c-4188-a8f9-8ec2c33fdfcf",
   *      "Currency" : "XC",
   *      "Amount" : 7513.75121715,
   *      "Address" : "...",
   *      "Opened" : "2014-07-08T23:13:31.83",
   *      "Authorized" : true,
   *      "PendingPayment" : false,
   *      "TxCost" : 0.00002000,
   *      "TxId" : "...",
   *      "Canceled" : false,
   *      "InvalidAddress" : false
   *    }
   *  ]
   * ```
   *
   * @returns {Promise} - ``RequestSuccess`` object on success or ``RequestError`` on error.
   */
  getwithdrawalhistory(currency) {
    return this.Request.sendPrivate(this.baseUrl + '/account/getwithdrawalhistory', {
      currency: currency
    });
  }

  /**
   * getdepositaddress
   *
   * @alias module:v1-private
   * @example
   * ```javascript
   *  bittrex.v1.Private.getdepositaddress('BTC').then((response) => {
   *    console.log(response);
   *    let data = response.result;
   *  }).catch((e) => {
   *    console.error(e);
   *  });
   * ```
   *
   * Data Example:
   * ```json
   * {
   *    "Currency" : "BTC",
   *    "Address" : "..."
   *  }
   * ```
   *
   * @returns {Promise} - ``RequestSuccess`` object on success or ``RequestError`` on error.
   */
  getdepositaddress(currency) {
    return this.Request.sendPrivate(this.baseUrl + '/account/getdepositaddress', {
      currency: currency
    });
  }

  /**
   * getdeposithistory
   *
   * @alias module:v1-private
   * @example
   * ```javascript
   *  bittrex.v1.Private.getdeposithistory('BTC').then((response) => {
   *    console.log(response);
   *    let data = response.result;
   *  }).catch((e) => {
   *    console.error(e);
   *  });
   * ```
   *
   * Data Example:
   * ```json
   * [{
   *    "PaymentUuid" : "554ec664-8842-4fe9-b491-06225becbd59",
   *    "Currency" : "BTC",
   *    "Amount" : 0.00156121,
   *    "Address" : "...",
   *    "Opened" : "2014-07-11T03:41:25.323",
   *    "Authorized" : true,
   *    "PendingPayment" : false,
   *    "TxCost" : 0.00020000,
   *    "TxId" : "...",
   *    "Canceled" : false,
   *    "InvalidAddress" : false
   *  }, {
   *    "PaymentUuid" : "d3fdf168-3d8e-40b6-8fe4-f46e2a7035ea",
   *    "Currency" : "BTC",
   *    "Amount" : 0.11800000,
   *    "Address" : "...",
   *    "Opened" : "2014-07-03T20:27:07.163",
   *    "Authorized" : true,
   *    "PendingPayment" : false,
   *    "TxCost" : 0.00020000,
   *    "TxId" : "...",
   *    "Canceled" : false,
   *    "InvalidAddress" : false
   *  }, ...]
   * ```
   *
   * @returns {Promise} - ``RequestSuccess`` object on success or ``RequestError`` on error.
   */
  getdeposithistory(currency) {
    return this.Request.sendPrivate(this.baseUrl + '/account/getdeposithistory', {
      currency: currency
    });
  }

  /**
   * getorderhistory
   *
   * @alias module:v1-private
   * @example
   * ```javascript
   *  bittrex.v1.Private.getorderhistory('BTC').then((response) => {
   *    console.log(response);
   *    let data = response.result;
   *  }).catch((e) => {
   *    console.error(e);
   *  });
   * ```
   *
   * Data Example:
   * ```json
   * [{
   *      "OrderUuid" : "fd97d393-e9b9-4dd1-9dbf-f288fc72a185",
   *      "Exchange" : "BTC-LTC",
   *      "TimeStamp" : "2014-07-09T04:01:00.667",
   *      "OrderType" : "LIMIT_BUY",
   *      "Limit" : 0.00000001,
   *      "Quantity" : 100000.00000000,
   *      "QuantityRemaining" : 100000.00000000,
   *      "Commission" : 0.00000000,
   *      "Price" : 0.00000000,
   *      "PricePerUnit" : null,
   *      "IsConditional" : false,
   *      "Condition" : null,
   *      "ConditionTarget" : null,
   *      "ImmediateOrCancel" : false
   *    }, {
   *      "OrderUuid" : "17fd64d1-f4bd-4fb6-adb9-42ec68b8697d",
   *      "Exchange" : "BTC-ZS",
   *      "TimeStamp" : "2014-07-08T20:38:58.317",
   *      "OrderType" : "LIMIT_SELL",
   *      "Limit" : 0.00002950,
   *      "Quantity" : 667.03644955,
   *      "QuantityRemaining" : 0.00000000,
   *      "Commission" : 0.00004921,
   *      "Price" : 0.01968424,
   *      "PricePerUnit" : 0.00002950,
   *      "IsConditional" : false,
   *      "Condition" : null,
   *      "ConditionTarget" : null,
   *      "ImmediateOrCancel" : false
   *    }
   *  ]
   * ```
   *
   * @returns {Promise} - ``RequestSuccess`` object on success or ``RequestError`` on error.
   */
  getorderhistory(currency, pair) {
    return this.Request.sendPrivate(this.baseUrl + '/account/getorderhistory', {
      market: this.makeMarketString(currency, pair)
    });
  }

  /**
   * getorder
   *
   * @alias module:v1-private
   * @example
   * ```javascript
   *  bittrex.v1.Private.getorder('XXXXXX-XXXX-XXXX-XXXX-XXXXXX').then((response) => {
   *    console.log(response);
   *    let data = response.result;
   *  }).catch((e) => {
   *    console.error(e);
   *  });
   * ```
   *
   * Data Example:
   * ```json
   * {
   *    "AccountId" : null,
   *    "OrderUuid" : "0cb4c4e4-bdc7-4e13-8c13-430e587d2cc1",
   *    "Exchange" : "BTC-SHLD",
   *    "Type" : "LIMIT_BUY",
   *    "Quantity" : 1000.00000000,
   *    "QuantityRemaining" : 1000.00000000,
   *    "Limit" : 0.00000001,
   *    "Reserved" : 0.00001000,
   *    "ReserveRemaining" : 0.00001000,
   *    "CommissionReserved" : 0.00000002,
   *    "CommissionReserveRemaining" : 0.00000002,
   *    "CommissionPaid" : 0.00000000,
   *    "Price" : 0.00000000,
   *    "PricePerUnit" : null,
   *    "Opened" : "2014-07-13T07:45:46.27",
   *    "Closed" : null,
   *    "IsOpen" : true,
   *    "Sentinel" : "6c454604-22e2-4fb4-892e-179eede20972",
   *    "CancelInitiated" : false,
   *    "ImmediateOrCancel" : false,
   *    "IsConditional" : false,
   *    "Condition" : "NONE",
   *    "ConditionTarget" : null
   *  }
   * ```
   *
   * @returns {Promise} - ``RequestSuccess`` object on success or ``RequestError`` on error.
   */
  getorder(uuid) {
    return this.Request.sendPrivate(this.baseUrl + '/account/getorder', {
      uuid: uuid
    });
  }

  /**
   * withdraw
   *
   * @alias module:v1-private
   * @example
   * ```javascript
   *  bittrex.v1.Private.withdraw('BTC', '1.00000000', 'THE_ADDRESS').then((response) => {
   *    console.log(response);
   *    let data = response.result;
   *  }).catch((e) => {
   *    console.error(e);
   *  });
   * ```
   *
   * Data Example:
   * ```json
   * {
   *    "uuid" : "68b5a16c-92de-11e3-ba3b-425861b86ab6"
   *  }
   * ```
   *
   * @returns {Promise} - ``RequestSuccess`` object on success or ``RequestError`` on error.
   */
  withdraw(currency, quantity, address) {
    return this.Request.sendPrivate(this.baseUrl + '/account/withdraw', {
      currency: currency,
      quantity: quantity,
      address: address,
    });
  }

}

export default Private;