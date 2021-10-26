const throttledQueue = require('throttled-queue');

module.exports = class Throttle {
  constructor(requestLimit, requestsTimeInterval) {
    this.throttle = throttledQueue(requestLimit, requestsTimeInterval * 1000, true);
  }

  getRequestResponse =  async (apiCall) => {
    this.throttle( async () => {
      const response = await apiCall();
    });
    

    return response;
  }
}