// Promise 对象池

var promisePool = async function(functions, n) {

    await Promise.allSettled(Array.from({length: n}).map(async (p,_index) => {
        while(functions.length) {
           await functions.shift()();
        }
        return `线程${_index}执行完毕`
    }));
}



 const sleep = (t) => new Promise(res => setTimeout(res, t));
 promisePool([() => sleep(500), () => sleep(400)], 1)
  .then(console.log) // After 900ms
