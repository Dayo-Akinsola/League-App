const Pubsub = (() => {
  const events = {};

  const subscribe = (event, handler) => {
    if (!events[event]) {
      events[event] = [];
    }
    events[event].push(handler);
  };

  const publish = (event, data) => {
    if (!events[event]) {
      return false;
    }

    const subscribers = events[event];
    subscribers.forEach((handler) => {
      handler(data);
    });
    return true;
  };

  return {
    subscribe,
    publish,
  };
})();

export default Pubsub;
