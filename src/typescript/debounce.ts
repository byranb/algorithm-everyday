// 防抖函数
type F = (...p: any[]) => any

function debounce(fn: F, t: number): F {
    let timer: any = null;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return function(...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this, args);
            timer = null;
        }, t);
    }
}

 const log = debounce(console.log, 100);
 log('Hello'); // cancelled
 log('Hello'); // cancelled
 log('Hello'); // Logged at t=100ms