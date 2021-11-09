const ElementCreation = (() => {
  const createChildElementWithClass = (tag, className, parentElement) => {
    const element = document.createElement(tag);
    element.className = className;
    parentElement.appendChild(element);

    return element;
  };

  const createChildElementWithId = (tag, id, parentElement) => {
    const element = document.createElement(tag);
    element.id = id;
    parentElement.appendChild(element);

    return element;
  };

  const createChildElementWithClassAndId = (tag, className, id, parentElement) => {
    const element = document.createElement(tag);
    element.className = className;
    element.id = id;
    parentElement.appendChild(element);

    return element;
  };

  const createChildImageElementWithClass = (className, parentElement, src, alt) => {
    const imageElement = createChildElementWithClass('img', className, parentElement);
    imageElement.src = src;
    imageElement.alt = alt;
  };

  return {
    createChildElementWithClass,
    createChildElementWithId,
    createChildElementWithClassAndId,
    createChildImageElementWithClass,
  };
})();

export default ElementCreation;
