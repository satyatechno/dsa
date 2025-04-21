// throttle a function
const throttle = (func, delay) => {
  let last = 0;
  return () => {
    let now = new Date().getTime();
    if (now - last >= delay) {
      last = now;
      func();
    }
  };
};

const aa = throttle(() => console.log('hiii'), 2000);
aa();
aa();
aa();
aa();
setTimeout(() => aa(), 2000);

// node throttle.js
