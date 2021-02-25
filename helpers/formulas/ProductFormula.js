/**
 * Price of product
 *   - Total money expect
 *   - Total items in stock
 *   = Total money expect / Total items in stock
 */

export const productPrice = (expectMoney, itemsInStock) => {
  const currentPrice = parseFloat(expectMoney) / parseFloat(itemsInStock);
  return Math.round(currentPrice);
};

/**
 * Total payment received
 *   - Total items in stock
 *   - Items remaining in stock
 *   - Price 
 *   = (Total items in stock - items remaining in stock) * price
*/

export const totalPaymentReceived = (totalItemsInStock, itemsRemainingInStock, price) => {
  const soldStock = parseInt(totalItemsInStock) - parseInt(itemsRemainingInStock);
  const totalPaymentReceived =  soldStock * parseFloat(price);
  return Math.round(totalPaymentReceived);
};

/**
 * Total payment remaining
 *   - Total money expect
 *   - Total payment received
 *   = Total money expect - Total payment received
*/

export const totalPaymentRemaining = (moneyexpect, receivedmoney) => {
  const paymentRemaining = parseFloat(moneyexpect) - parseFloat(receivedmoney);
  return Math.round(paymentRemaining);
};


/**
 * Progressbar
 *   - Total items in stock
 *   - Items remaining in stock
 *   = (Total items in stock / Items remaining in stock) * 100
*/

export const progressBarStatus = (totalItemsInStock, items_remaining_in_stock) => {
  const allItemsInStock = parseInt(totalItemsInStock);
  const allRemainsInStock = parseInt(items_remaining_in_stock);
  const quotient = allRemainsInStock /  allItemsInStock;
  const result = quotient * 100;

  // Handle result < 0
  if (result < 0) return 0;

  // handle result === 1
  if (result === 1) return 100;

  // handle result > 0
  if (result > 0) return Math.round(result);

};
