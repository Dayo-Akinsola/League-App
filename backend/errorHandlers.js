const sleep = (seconds) => {
  return new Promise((resolve) => setTimeout(resolve, seconds));
}

const getSecondsToSleep = (retryAfter) => {
  const secondsToSleep = parseInt(retryAfter) * 1000;
  return secondsToSleep;
}

const fetchAndRetryIfNecessary = async (apiCall) => {
  const response = await apiCall();
  if (response.status === 429) {
    console.log(response.status);
    const retryAfter = response.headers['retry-after'];
    const secondsToSleep = getSecondsToSleep(retryAfter);
    await sleep(secondsToSleep);
    return fetchAndRetryIfNecessary(apiCall);
  }

  else if (response.status === 404) {
    throw 'Match does not exist';
  }

  return response;
}

module.exports = fetchAndRetryIfNecessary;