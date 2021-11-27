const sleep = (seconds) => {
  return new Promise((resolve) => setTimeout(resolve, seconds));
}

const getSecondsToSleep = (retryAfter) => {
  const secondsToSleep = parseInt(retryAfter) * 1000;
  return secondsToSleep;
}

const fetchAndRetryIfNecessary = async (apiCall) => {

  try {
    const data = await apiCall();
    return data;
  }

  catch(error) {
    if (error.response.status === 429) {
      console.log(error.response.statusText);
      const retryAfter = error.response.headers['retry-after'];
      const secondsToSleep = getSecondsToSleep(retryAfter);
      await sleep(secondsToSleep);
      return fetchAndRetryIfNecessary(apiCall);
    }
  
    else if (error.response.status === 404) {
      throw 'Match does not exist';
    }
  
  }
  

}

module.exports = fetchAndRetryIfNecessary;