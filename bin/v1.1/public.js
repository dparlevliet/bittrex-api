/**
 * Module for v1 public methods
 * @module v1-public
 */

import Base from './bin/base.js';

class Public extends Base {

  constructor(settings, Request) {
    super(settings);

    this.baseUrl = 'https://bittrex.com/api/v1.1';
    this.Request = Request;
  }

  /**
   * Get the available markets
   *
   * @kind function
   * @alias module:v1-public
   * @example
   * ```javascript
   *  bittrex.v1.Public.getmarkets().then((response) => {
   *    console.log(response);
   *    let data = response.result;
   *  }).catch((e) => {
   *    console.error(e);
   *  });
   * ```
   *
   * Data Example:
   * ```json
   * [ { MarketCurrency: 'LTC',
   *   BaseCurrency: 'BTC',
   *   MarketCurrencyLong: 'Litecoin',
   *   BaseCurrencyLong: 'Bitcoin',
   *   MinTradeSize: 0.01231527,
   *   MarketName: 'BTC-LTC',
   *   IsActive: true,
   *   Created: '2014-02-13T00:00:00',
   *   Notice: null,
   *   IsSponsored: null,
   *   LogoUrl: '...' },
   * { MarketCurrency: 'DOGE',
   *   BaseCurrency: 'BTC',
   *   MarketCurrencyLong: 'Dogecoin',
   *   BaseCurrencyLong: 'Bitcoin',
   *   MinTradeSize: 431.03448276,
   *   MarketName: 'BTC-DOGE',
   *   IsActive: true,
   *   Created: '2014-02-13T00:00:00',
   *   Notice: null,
   *   IsSponsored: null,
   *   LogoUrl: '...' }, ... ]
   * ```
   *
   * @returns {Promise} - ``RequestSuccess`` object on success or ``RequestError`` on error.
   */
  getmarkets() {
    return this.Request.sendPublic(this.baseUrl + '/public/getmarkets');
  }

  /**
   * Get the available currencies
   *
   * @kind function
   * @alias module:v1-public
   * @example
   * ```javascript
   *  bittrex.v1.Public.getcurrencies().then((response) => {
   *    console.log(response);
   *    let data = response.result;
   *  }).catch((e) => {
   *    console.error(e);
   *  });
   * ```
   *
   * Data Example:
   * ```json
   * [ { Currency: 'BTC',
   *     CurrencyLong: 'Bitcoin',
   *     MinConfirmation: 2,
   *     TxFee: 0.001,
   *     IsActive: true,
   *     CoinType: 'BITCOIN',
   *     BaseAddress: '...',
   *     Notice: null },
   *   { Currency: 'LTC',
   *     CurrencyLong: 'Litecoin',
   *     MinConfirmation: 6,
   *    TxFee: 0.01,
   *     IsActive: true,
   *     CoinType: 'BITCOIN',
   *     BaseAddress: '...',
   *     Notice: null }, ... ]
   * ```
   *
   * @returns {Promise} - ``RequestSuccess`` object on success or ``RequestError`` on error.
   */
  getcurrencies() {
    return this.Request.sendPublic(this.baseUrl + '/public/getcurrencies');
  }

  /**
   * Get the ticker information for a specific market
   *
   * @param {string} code - The code for the coin's market. eg. BTC
   * @param {string} pair - The pair for the coin's market. eg. USDT
   *
   * @kind function
   * @alias module:v1-public
   * @example
   * ```javascript
   *  bittrex.v1.Public.getticker('BTC', 'USDT').then((response) => {
   *    console.log(response);
   *    let data = response.result;
   *  }).catch((e) => {
   *    console.error(e);
   *  });
   * ```
   *
   * Data Example:
   * ```json
   * { Bid: 11200, Ask: 11200.0002, Last: 11200.0002 }
   * ```
   *
   * @returns {Promise} - ``RequestSuccess`` object on success or ``RequestError`` on error.
   */
  getticker(code, pair) {
    return this.Request.sendPublic(this.baseUrl + '/public/getticker', {
      market: this.makeMarketString(code, pair)
    });
  }

  /**
   * Get all market summaries
   *
   * @kind function
   * @alias module:v1-public
   * @example
   * ```javascript
   *  bittrex.v1.Public.getmarketsummaries().then((response) => {
   *    console.log(response);
   *    let data = response.result;
   *  }).catch((e) => {
   *    console.error(e);
   *  });
   * ```
   *
   * Data Example:
   * ```json
   * [ [ { Currency: 'BTC',
   *    CurrencyLong: 'Bitcoin',
   *    MinConfirmation: 2,
   *    TxFee: 0.001,
   *    IsActive: true,
   *    CoinType: 'BITCOIN',
   *    BaseAddress: '...',
   *    Notice: null },
   *  { Currency: 'LTC',
   *    CurrencyLong: 'Litecoin',
   *    MinConfirmation: 6,
   *    TxFee: 0.01,
   *    IsActive: true,
   *    CoinType: 'BITCOIN',
   *    BaseAddress: '...',
   *    Notice: null }, ... ]
   * ```
   *
   * @returns {Promise} - ``RequestSuccess`` object on success or ``RequestError`` on error.
   */
  getmarketsummaries() {
    return this.Request.sendPublic(this.baseUrl + '/public/getcurrencies');
  }

  /**
   * Get the summary information for a specific market
   *
   * @param {string} code - The code for the coin's market. eg. BTC
   * @param {string} pair - The pair for the coin's market. eg. USDT
   *
   * @kind function
   * @alias module:v1-public
   * @example
   * ```javascript
   *  bittrex.v1.Public.getmarketsummary('BTC', 'USDT').then((response) => {
   *    console.log(response);
   *    let data = response.result;
   *  }).catch((e) => {
   *    console.error(e);
   *  });
   * ```
   *
   * Data Example:
   * ```json
   * [ { MarketName: 'USDT-BTC',
   *    High: 11581.43999993,
   *    Low: 11124.7465191,
   *    Volume: 2219.75703846,
   *    Last: 11210.48,
   *    BaseVolume: 25221299.32468887,
   *    TimeStamp: '2018-03-04T04:59:34.457',
   *    Bid: 11210.48,
   *    Ask: 11216.697915,
   *    OpenBuyOrders: 6488,
   *    OpenSellOrders: 2800,
   *    PrevDay: 11392.39999993,
   *    Created: '2015-12-11T06:31:40.633' } ]
   * ```
   *
   * @returns {Promise} - ``RequestSuccess`` object on success or ``RequestError`` on error.
   */
  getmarketsummary(code, pair) {
    return this.Request.sendPublic(this.baseUrl + '/public/getmarketsummary', {
      market: this.makeMarketString(code, pair)
    });
  }

  /**
   * Get the order book information for a specific market
   *
   * @param {string} code - The code for the coin's market. eg. BTC
   * @param {string} pair - The pair for the coin's market. eg. USDT
   * @param {string} type - The order book result type: 'both' or 'buy' or 'sell',
   *
   * @kind function
   * @alias module:v1-public
   * @example
   * Get both buy and sell order books. This will return less results for each
   * column than a query for specific columns separately.
   *
   * ```javascript
   *  bittrex.v1.Public.getmarketsummary('BTC', 'USDT', 'both').then((response) => {
   *    console.log(response);
   *    let data = response.result;
   *  }).catch((e) => {
   *    console.error(e);
   *  });
   * ```
   *
   * Data Example:
   * ```json
   * { buy:
   *   [ { Quantity: 0.48814705, Rate: 11192 },
   *     { Quantity: 0.72519726, Rate: 11190 }, ... ],
   *  sell:
   *   [ { Quantity: 0.17537503, Rate: 11208.5148 },
   *     { Quantity: 1, Rate: 11210.692455 }, ... ] }
   * ```
   *
   * @example
   * Get buy order book. This will return more results than a request for
   * both buy and sell.
   *
   * ```javascript
   *  bittrex.v1.Public.getmarketsummary('BTC', 'USDT', 'buy').then((response) => {
   *    console.log(response);
   *    let data = response.result;
   *  }).catch((e) => {
   *    console.error(e);
   *  });
   * ```
   *
   * Data Example:
   * ```json
   * [ { Quantity: 0.48814705, Rate: 11192 },
   *   { Quantity: 0.72519726, Rate: 11190 }, ... ]
   * ```
   *
   * @example
   * Get sell order book. This will return more results than a request for
   * both buy and sell.
   *
   * ```javascript
   *  bittrex.v1.Public.getmarketsummary('BTC', 'USDT', 'sell').then((response) => {
   *    console.log(response);
   *    let data = response.result;
   *  }).catch((e) => {
   *    console.error(e);
   *  });
   * ```
   *
   * Data Example:
   * ```json
   * [ { Quantity: 0.00535623, Rate: 11465.2102 },
   *    { Quantity: 0.00059885, Rate: 11469.30022096 }, ... ]
   * ```
   *
   * @returns {Promise} - ``RequestSuccess`` object on success or ``RequestError`` on error.
   */
  getorderbook(code, pair, type) {
    return this.Request.sendPublic(this.baseUrl + '/public/getorderbook', {
      market: this.makeMarketString(code, pair),
      type: type,
    });
  }

  /**
   * Get the recent history information for a specific market
   *
   * @param {string} code - The code for the coin's market. eg. BTC
   * @param {string} pair - The pair for the coin's market. eg. USDT
   *
   * @kind function
   * @alias module:v1-public
   * @example
   * ```javascript
   *  bittrex.v1.Public.getmarkethistory('BTC', 'USDT').then((response) => {
   *    console.log(response);
   *    let data = response.result;
   *  }).catch((e) => {
   *    console.error(e);
   *  });
   * ```
   *
   * Data Example:
   * ```json
   * [ { Id: 42777440,
   *    TimeStamp: '2018-03-04T06:39:16.79',
   *    Quantity: 0.04449413,
   *    Price: 11208.5148,
   *    Total: 498.71311461,
   *    FillType: 'FILL',
   *    OrderType: 'BUY' },
   *  { Id: 42777438,
   *    TimeStamp: '2018-03-04T06:39:06.74',
   *    Quantity: 0.04800243,
   *    Price: 11208.5148,
   *    Total: 538.03594709,
   *    FillType: 'FILL',
   *    OrderType: 'BUY' }, ... ]
   * ```
   *
   * @returns {Promise} - ``RequestSuccess`` object on success or ``RequestError`` on error.
   */
  getmarkethistory(code, pair) {
    return this.Request.sendPublic(this.baseUrl + '/public/getmarkethistory', {
      market: this.makeMarketString(code, pair)
    });
  }

}

export default Public;