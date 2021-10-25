const NodeCache = require('node-cache');

module.exports = class Cache {
  constructor(ttlSeconds) {
    this.cache = new NodeCache({ stdTTL: ttlSeconds, checkperiod: ttlSeconds * 0.2, useClones: false});
  }

  get = async (key, storeFunction) => {
    const storedResponse = this.cache.get(key);
    if (storedResponse) {
      console.log('Retriving from cache');
      return storedResponse;
    }

    console.log('Making request');
    const result = await storeFunction();
    this.cache.set(key, result);
    return result;
  }

  del = (key) => {
    this.cache.del(key);
  }  

  flush = () => {
    this.cache.flushAll();
  }
};