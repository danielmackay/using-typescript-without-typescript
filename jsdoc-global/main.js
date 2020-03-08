(function() {
  /**
   * @typedef {Object} CreditNoteTaxRequestViewModel
   * @property {number} orderID
   * @property {number} shippingCredit
   * @property {Array<CreditNoteTaxLineViewModel>} lines
   *
   * @typedef {Object} CreditNoteTaxLineViewModel
   * @property {number} originalOrderLineID
   * @property {number} creditQuantity
   *
   * @typedef {Object} CreditNoteTaxResponseViewModel
   * @property {number} feeAmount
   * @property {number} inclGst
   * @property {number} subTotal
   * @property {number} total
   *
   * @typedef {Object} ApiResponse
   * @property {string} status
   * @property {string} message
   * @property {CreditNoteTaxResponseViewModel} response
   */

  /**
   * @param {number} shippingVal
   */
  function updateShipping(shippingVal) {
    // snip
  }

  /**
   * @param {CreditNoteTaxRequestViewModel} req
   * @returns {Promise<ApiResponse>}
   */
  function createCreditNoteTaxApiCall(req) {
    /// snip
    return;
  }

  /**
   * @param {JQuery<HTMLElement>} $itemRow
   */
  function initRow($itemRow) {
    // snip
  }
});
