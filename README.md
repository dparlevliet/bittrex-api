
### v1.1 Public methods
##### Public#getmarkets()
Get the available markets

```javascript
import Bittrex from 'bittrex-api';
const bittrex = new Bittrex({});
```
```javascript
 bittrex.v1.Public.getmarkets().then((response) => {
   console.log(response);
   let data = response.result;
 }).catch((e) => {
   console.error(e);
 });
```

Data Example:
```json
[ { MarketCurrency: 'LTC',
  BaseCurrency: 'BTC',
  MarketCurrencyLong: 'Litecoin',
  BaseCurrencyLong: 'Bitcoin',
  MinTradeSize: 0.01231527,
  MarketName: 'BTC-LTC',
  IsActive: true,
  Created: '2014-02-13T00:00:00',
  Notice: null,
  IsSponsored: null,
  LogoUrl: '...' },
{ MarketCurrency: 'DOGE',
  BaseCurrency: 'BTC',
  MarketCurrencyLong: 'Dogecoin',
  BaseCurrencyLong: 'Bitcoin',
  MinTradeSize: 431.03448276,
  MarketName: 'BTC-DOGE',
  IsActive: true,
  Created: '2014-02-13T00:00:00',
  Notice: null,
  IsSponsored: null,
  LogoUrl: '...' }, ... ]
```
##### Public#getcurrencies()
Get the available currencies

```javascript
import Bittrex from 'bittrex-api';
const bittrex = new Bittrex({});
```
```javascript
 bittrex.v1.Public.getcurrencies().then((response) => {
   console.log(response);
   let data = response.result;
 }).catch((e) => {
   console.error(e);
 });
```

Data Example:
```json
[ { Currency: 'BTC',
    CurrencyLong: 'Bitcoin',
    MinConfirmation: 2,
    TxFee: 0.001,
    IsActive: true,
    CoinType: 'BITCOIN',
    BaseAddress: '...',
    Notice: null },
  { Currency: 'LTC',
    CurrencyLong: 'Litecoin',
    MinConfirmation: 6,
   TxFee: 0.01,
    IsActive: true,
    CoinType: 'BITCOIN',
    BaseAddress: '...',
    Notice: null }, ... ]
```
##### Public#getticker()
Get the ticker information for a specific market

```javascript
import Bittrex from 'bittrex-api';
const bittrex = new Bittrex({});
```
```javascript
 bittrex.v1.Public.getticker('BTC', 'USDT').then((response) => {
   console.log(response);
   let data = response.result;
 }).catch((e) => {
   console.error(e);
 });
```

Data Example:
```json
{ Bid: 11200, Ask: 11200.0002, Last: 11200.0002 }
```
##### Public#getmarketsummaries()
Get all market summaries

```javascript
import Bittrex from 'bittrex-api';
const bittrex = new Bittrex({});
```
```javascript
 bittrex.v1.Public.getmarketsummaries().then((response) => {
   console.log(response);
   let data = response.result;
 }).catch((e) => {
   console.error(e);
 });
```

Data Example:
```json
[ [ { Currency: 'BTC',
   CurrencyLong: 'Bitcoin',
   MinConfirmation: 2,
   TxFee: 0.001,
   IsActive: true,
   CoinType: 'BITCOIN',
   BaseAddress: '...',
   Notice: null },
 { Currency: 'LTC',
   CurrencyLong: 'Litecoin',
   MinConfirmation: 6,
   TxFee: 0.01,
   IsActive: true,
   CoinType: 'BITCOIN',
   BaseAddress: '...',
   Notice: null }, ... ]
```
##### Public#getmarketsummary()
Get the summary information for a specific market

```javascript
import Bittrex from 'bittrex-api';
const bittrex = new Bittrex({});
```
```javascript
 bittrex.v1.Public.getmarketsummary('BTC', 'USDT').then((response) => {
   console.log(response);
   let data = response.result;
 }).catch((e) => {
   console.error(e);
 });
```

Data Example:
```json
[ { MarketName: 'USDT-BTC',
   High: 11581.43999993,
   Low: 11124.7465191,
   Volume: 2219.75703846,
   Last: 11210.48,
   BaseVolume: 25221299.32468887,
   TimeStamp: '2018-03-04T04:59:34.457',
   Bid: 11210.48,
   Ask: 11216.697915,
   OpenBuyOrders: 6488,
   OpenSellOrders: 2800,
   PrevDay: 11392.39999993,
   Created: '2015-12-11T06:31:40.633' } ]
```
##### Public#getorderbook()
Get the order book information for a specific market

```javascript
import Bittrex from 'bittrex-api';
const bittrex = new Bittrex({});
```
Get both buy and sell order books. This will return less results for each
column than a query for specific columns separately.

```javascript
 bittrex.v1.Public.getmarketsummary('BTC', 'USDT', 'both').then((response) => {
   console.log(response);
   let data = response.result;
 }).catch((e) => {
   console.error(e);
 });
```

Data Example:
```json
{ buy:
  [ { Quantity: 0.48814705, Rate: 11192 },
    { Quantity: 0.72519726, Rate: 11190 }, ... ],
 sell:
  [ { Quantity: 0.17537503, Rate: 11208.5148 },
    { Quantity: 1, Rate: 11210.692455 }, ... ] }
```
```javascript
import Bittrex from 'bittrex-api';
const bittrex = new Bittrex({});
```
Get buy order book. This will return more results than a request for
both buy and sell.

```javascript
 bittrex.v1.Public.getmarketsummary('BTC', 'USDT', 'buy').then((response) => {
   console.log(response);
   let data = response.result;
 }).catch((e) => {
   console.error(e);
 });
```

Data Example:
```json
[ { Quantity: 0.48814705, Rate: 11192 },
  { Quantity: 0.72519726, Rate: 11190 }, ... ]
```
```javascript
import Bittrex from 'bittrex-api';
const bittrex = new Bittrex({});
```
Get sell order book. This will return more results than a request for
both buy and sell.

```javascript
 bittrex.v1.Public.getmarketsummary('BTC', 'USDT', 'sell').then((response) => {
   console.log(response);
   let data = response.result;
 }).catch((e) => {
   console.error(e);
 });
```

Data Example:
```json
[ { Quantity: 0.00535623, Rate: 11465.2102 },
   { Quantity: 0.00059885, Rate: 11469.30022096 }, ... ]
```
##### Public#getmarkethistory()
Get the recent history information for a specific market

```javascript
import Bittrex from 'bittrex-api';
const bittrex = new Bittrex({});
```
```javascript
 bittrex.v1.Public.getmarkethistory('BTC', 'USDT').then((response) => {
   console.log(response);
   let data = response.result;
 }).catch((e) => {
   console.error(e);
 });
```

Data Example:
```json
[ { Id: 42777440,
   TimeStamp: '2018-03-04T06:39:16.79',
   Quantity: 0.04449413,
   Price: 11208.5148,
   Total: 498.71311461,
   FillType: 'FILL',
   OrderType: 'BUY' },
 { Id: 42777438,
   TimeStamp: '2018-03-04T06:39:06.74',
   Quantity: 0.04800243,
   Price: 11208.5148,
   Total: 538.03594709,
   FillType: 'FILL',
   OrderType: 'BUY' }, ... ]
```

### v1.1 Private (api key required) methods
##### Private#buylimit()
buylimit

```javascript
import Bittrex from 'bittrex-api';
const bittrex = new Bittrex({});
```
```javascript
 bittrex.v1.Private.buylimit('BTC', 'USDT', '1.00000000', '1004.00000000').then((response) => {
   console.log(response);
   let data = response.result;
 }).catch((e) => {
   console.error(e);
 });
```

Data Example:
```json
{
   "uuid" : "e606d53c-8d70-11e3-94b5-425861b86ab6"
 }
```
##### Private#selllimit()
selllimit

```javascript
import Bittrex from 'bittrex-api';
const bittrex = new Bittrex({});
```
```javascript
 bittrex.v1.Private.selllimit('BTC', 'USDT', '1.00000000', '1004.00000000').then((response) => {
   console.log(response);
   let data = response.result;
 }).catch((e) => {
   console.error(e);
 });
```

Data Example:
```json
{
  "uuid" : "614c34e4-8d71-11e3-94b5-425861b86ab6"
}
```
##### Private#cancel()
cancel

```javascript
import Bittrex from 'bittrex-api';
const bittrex = new Bittrex({});
```
```javascript
 bittrex.v1.Private.cancel('XXXXXX-XXXX-XXXX-XXXX-XXXXXX').then((response) => {
   console.log(response);
   let data = response.result;
 }).catch((e) => {
   console.error(e);
 });
```

Data Example:
```json
null
```
##### Private#getopenorders()
getopenorders

```javascript
import Bittrex from 'bittrex-api';
const bittrex = new Bittrex({});
```
```javascript
 bittrex.v1.Private.getopenorders('BTC', 'USDT').then((response) => {
   console.log(response);
   let data = response.result;
 }).catch((e) => {
   console.error(e);
 });
```

Data Example:
```json
[{
   "Uuid" : null,
   "OrderUuid" : "09aa5bb6-8232-41aa-9b78-a5a1093e0211",
   "Exchange" : "BTC-LTC",
   "OrderType" : "LIMIT_SELL",
   "Quantity" : 5.00000000,
   "QuantityRemaining" : 5.00000000,
   "Limit" : 2.00000000,
   "CommissionPaid" : 0.00000000,
   "Price" : 0.00000000,
   "PricePerUnit" : null,
   "Opened" : "2014-07-09T03:55:48.77",
   "Closed" : null,
   "CancelInitiated" : false,
   "ImmediateOrCancel" : false,
   "IsConditional" : false,
   "Condition" : null,
   "ConditionTarget" : null
 }, {
   "Uuid" : null,
   "OrderUuid" : "8925d746-bc9f-4684-b1aa-e507467aaa99",
   "Exchange" : "BTC-LTC",
   "OrderType" : "LIMIT_BUY",
   "Quantity" : 100000.00000000,
   "QuantityRemaining" : 100000.00000000,
   "Limit" : 0.00000001,
   "CommissionPaid" : 0.00000000,
   "Price" : 0.00000000,
   "PricePerUnit" : null,
   "Opened" : "2014-07-09T03:55:48.583",
   "Closed" : null,
   "CancelInitiated" : false,
   "ImmediateOrCancel" : false,
   "IsConditional" : false,
   "Condition" : null,
   "ConditionTarget" : null
 }, ...]
```
##### Private#getbalances()
getbalances

```javascript
import Bittrex from 'bittrex-api';
const bittrex = new Bittrex({});
```
```javascript
 bittrex.v1.Private.getbalances().then((response) => {
   console.log(response);
   let data = response.result;
 }).catch((e) => {
   console.error(e);
 });
```

Data Example:
```json
[{
   "Currency" : "DOGE",
   "Balance" : 0.00000000,
   "Available" : 0.00000000,
   "Pending" : 0.00000000,
   "CryptoAddress" : "...",
   "Requested" : false,
   "Uuid" : null
 }, {
   "Currency" : "BTC",
   "Balance" : 14.21549076,
   "Available" : 14.21549076,
   "Pending" : 0.00000000,
   "CryptoAddress" : "...",
   "Requested" : false,
   "Uuid" : null
 }, ... ]
```
##### Private#getbalance()
getbalance

```javascript
import Bittrex from 'bittrex-api';
const bittrex = new Bittrex({});
```
```javascript
 bittrex.v1.Private.getbalance('BTC').then((response) => {
   console.log(response);
   let data = response.result;
 }).catch((e) => {
   console.error(e);
 });
```

Data Example:
```json
{
   "Currency" : "BTC",
   "Balance" : 4.21549076,
   "Available" : 4.21549076,
   "Pending" : 0.00000000,
   "CryptoAddress" : "...",
   "Requested" : false,
   "Uuid" : null
 }
```
##### Private#getwithdrawalhistory()
getwithdrawalhistory

```javascript
import Bittrex from 'bittrex-api';
const bittrex = new Bittrex({});
```
```javascript
 bittrex.v1.Private.getwithdrawalhistory('BTC').then((response) => {
   console.log(response);
   let data = response.result;
 }).catch((e) => {
   console.error(e);
 });
```

Data Example:
```json
[{
     "PaymentUuid" : "b52c7a5c-90c6-4c6e-835c-e16df12708b1",
     "Currency" : "BTC",
     "Amount" : 17.00000000,
     "Address" : "...",
     "Opened" : "2014-07-09T04:24:47.217",
     "Authorized" : true,
     "PendingPayment" : false,
     "TxCost" : 0.00020000,
     "TxId" : null,
     "Canceled" : true,
     "InvalidAddress" : false
   }, {
     "PaymentUuid" : "f293da98-788c-4188-a8f9-8ec2c33fdfcf",
     "Currency" : "XC",
     "Amount" : 7513.75121715,
     "Address" : "...",
     "Opened" : "2014-07-08T23:13:31.83",
     "Authorized" : true,
     "PendingPayment" : false,
     "TxCost" : 0.00002000,
     "TxId" : "...",
     "Canceled" : false,
     "InvalidAddress" : false
   }
 ]
```
##### Private#getdepositaddress()
getdepositaddress

```javascript
import Bittrex from 'bittrex-api';
const bittrex = new Bittrex({});
```
```javascript
 bittrex.v1.Private.getdepositaddress('BTC').then((response) => {
   console.log(response);
   let data = response.result;
 }).catch((e) => {
   console.error(e);
 });
```

Data Example:
```json
{
   "Currency" : "BTC",
   "Address" : "..."
 }
```
##### Private#getdeposithistory()
getdeposithistory

```javascript
import Bittrex from 'bittrex-api';
const bittrex = new Bittrex({});
```
```javascript
 bittrex.v1.Private.getdeposithistory('BTC').then((response) => {
   console.log(response);
   let data = response.result;
 }).catch((e) => {
   console.error(e);
 });
```

Data Example:
```json
[{
   "PaymentUuid" : "554ec664-8842-4fe9-b491-06225becbd59",
   "Currency" : "BTC",
   "Amount" : 0.00156121,
   "Address" : "...",
   "Opened" : "2014-07-11T03:41:25.323",
   "Authorized" : true,
   "PendingPayment" : false,
   "TxCost" : 0.00020000,
   "TxId" : "...",
   "Canceled" : false,
   "InvalidAddress" : false
 }, {
   "PaymentUuid" : "d3fdf168-3d8e-40b6-8fe4-f46e2a7035ea",
   "Currency" : "BTC",
   "Amount" : 0.11800000,
   "Address" : "...",
   "Opened" : "2014-07-03T20:27:07.163",
   "Authorized" : true,
   "PendingPayment" : false,
   "TxCost" : 0.00020000,
   "TxId" : "...",
   "Canceled" : false,
   "InvalidAddress" : false
 }, ...]
```
##### Private#getorderhistory()
getorderhistory

```javascript
import Bittrex from 'bittrex-api';
const bittrex = new Bittrex({});
```
```javascript
 bittrex.v1.Private.getorderhistory('BTC').then((response) => {
   console.log(response);
   let data = response.result;
 }).catch((e) => {
   console.error(e);
 });
```

Data Example:
```json
[{
     "OrderUuid" : "fd97d393-e9b9-4dd1-9dbf-f288fc72a185",
     "Exchange" : "BTC-LTC",
     "TimeStamp" : "2014-07-09T04:01:00.667",
     "OrderType" : "LIMIT_BUY",
     "Limit" : 0.00000001,
     "Quantity" : 100000.00000000,
     "QuantityRemaining" : 100000.00000000,
     "Commission" : 0.00000000,
     "Price" : 0.00000000,
     "PricePerUnit" : null,
     "IsConditional" : false,
     "Condition" : null,
     "ConditionTarget" : null,
     "ImmediateOrCancel" : false
   }, {
     "OrderUuid" : "17fd64d1-f4bd-4fb6-adb9-42ec68b8697d",
     "Exchange" : "BTC-ZS",
     "TimeStamp" : "2014-07-08T20:38:58.317",
     "OrderType" : "LIMIT_SELL",
     "Limit" : 0.00002950,
     "Quantity" : 667.03644955,
     "QuantityRemaining" : 0.00000000,
     "Commission" : 0.00004921,
     "Price" : 0.01968424,
     "PricePerUnit" : 0.00002950,
     "IsConditional" : false,
     "Condition" : null,
     "ConditionTarget" : null,
     "ImmediateOrCancel" : false
   }
 ]
```
##### Private#getorder()
getorder

```javascript
import Bittrex from 'bittrex-api';
const bittrex = new Bittrex({});
```
```javascript
 bittrex.v1.Private.getorder('XXXXXX-XXXX-XXXX-XXXX-XXXXXX').then((response) => {
   console.log(response);
   let data = response.result;
 }).catch((e) => {
   console.error(e);
 });
```

Data Example:
```json
{
   "AccountId" : null,
   "OrderUuid" : "0cb4c4e4-bdc7-4e13-8c13-430e587d2cc1",
   "Exchange" : "BTC-SHLD",
   "Type" : "LIMIT_BUY",
   "Quantity" : 1000.00000000,
   "QuantityRemaining" : 1000.00000000,
   "Limit" : 0.00000001,
   "Reserved" : 0.00001000,
   "ReserveRemaining" : 0.00001000,
   "CommissionReserved" : 0.00000002,
   "CommissionReserveRemaining" : 0.00000002,
   "CommissionPaid" : 0.00000000,
   "Price" : 0.00000000,
   "PricePerUnit" : null,
   "Opened" : "2014-07-13T07:45:46.27",
   "Closed" : null,
   "IsOpen" : true,
   "Sentinel" : "6c454604-22e2-4fb4-892e-179eede20972",
   "CancelInitiated" : false,
   "ImmediateOrCancel" : false,
   "IsConditional" : false,
   "Condition" : "NONE",
   "ConditionTarget" : null
 }
```
##### Private#withdraw()
withdraw

```javascript
import Bittrex from 'bittrex-api';
const bittrex = new Bittrex({});
```
```javascript
 bittrex.v1.Private.withdraw('BTC', '1.00000000', 'THE_ADDRESS').then((response) => {
   console.log(response);
   let data = response.result;
 }).catch((e) => {
   console.error(e);
 });
```

Data Example:
```json
{
   "uuid" : "68b5a16c-92de-11e3-ba3b-425861b86ab6"
 }
```



Testing
----

Installing test gear
```bash
npm install --only=dev
```

Running all tests
```bash
npm test tests
```

or individually
```bash
npm test tests/public.js
npm test tests/private.js
```

##### Testing private methods

Testing private method endpoints requires an api key/secret which should be
installed in to ``tests/config.json`` - you will find an example file in
``tests/config_example.json``.

```bash
cp tests/tests_example.json tests/config.json
vim tests/config.json
```

