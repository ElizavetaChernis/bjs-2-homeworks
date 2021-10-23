function cachingDecoratorNew(func) {
  const cash = [];
  function wrapper(...args) {
    const hash = args.join(',');
    const idx = cash.findIndex( (item) => item.hash === hash);
    if (idx !== -1) {
      console.log("Из кэша: " + idx.result); 
      return "Из кэша: " + idx.result;
    } else {
      let result = func(...args); 
      cache.push({hash, result}) ; 
      if (cache.length > 5) { 
        cache.shift();
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result; 
    }
  } 
  return wrapper;
}




function debounceDecoratorNew(func, ms) {
  let isStop = true;
  let timeout;

  return function (...args) {
    if (isStop) {
      isStop = false;
      func.apply(this, args);
  } else {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
      isFirst = true;
    }, ms)
  }
}
}

function debounceDecorator2(func) {
  let isStop = true;
  let count = 0;
  let timeout;

  return function (...args) {
    if (isStop) {
      isStop = false;
      func.apply(this, args);
  } else {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
      count += 1;
      isFirst = true;
    }, ms)
  }
}
}
