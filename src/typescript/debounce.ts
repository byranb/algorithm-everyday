// 防抖函数
type Fun = (...p: any[]) => any

function debounce(fn: Fun, t: number): Fun {
    let timer: number | null = null;
    return function(...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            fn.apply(this, args);
            timer = null;
        }, t);
    }
}

 const log = debounce(console.log, 100);
 log('Hello'); // cancelled
 log('Hello'); // cancelled
 log('Hello'); // Logged at t=100ms