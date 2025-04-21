// call a function only once

function once(func) {
  var a = 0;
  return () => {
    if (!a) {
      a++;
      func();
    }
  };
}

const initialize = once(() => console.log('Init!'));
initialize(); // logs "Init!"
initialize(); // does nothing
initialize(); // does nothing
initialize(); // does nothing

// node onceCallFun.js
