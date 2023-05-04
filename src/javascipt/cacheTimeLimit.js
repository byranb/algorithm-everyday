//编写一个类，它允许获取和设置键-值对，并且每个键都有一个 过期时间 。
//
// 该类有三个公共方法：
//
// set(key, value, duration) ：接收参数为整型键 key 、整型值 value 和以毫秒为单位的持续时间 duration 。一旦 duration 到期后，
// 这个键就无法访问。如果相同的未过期键已经存在，该方法将返回 true ，否则返回 false 。如果该键已经存在，则它的值和持续时间都应该被覆盖。
//
// get(key) ：如果存在一个未过期的键，它应该返回这个键相关的值。否则返回 -1 。
//
// count() ：返回未过期键的总数。
//

class TimeLimitedCache {

    cacheTimer;
    cacheMap;

    constructor() {
        this.cacheTimer = new Map();
        this.cacheMap = new Map();
    }

    set(key, value, duration) {
        const flag = !!this.cacheMap.get(key);
        if(flag) {
            clearTimeout(this.cacheTimer.get(key));
        }
        this.cacheMap.set(key, value);
        const timerOut = setTimeout(() => {
            this.cacheMap.delete(key);
        }, duration);
        this.cacheTimer.set(key, timerOut);
        return flag;
    }

    get(key) {
        return this.cacheMap.get(key) ?? -1;
    }

    count() {
        return this.cacheMap.size;
    }
}

const cache = new TimeLimitedCache();
console.log(cache.set(1, 1, 1000)); // false
console.log(cache.set(1, 1, 1000)); // true
console.log(cache.set(2, 2, 1000)); // false
console.log(cache.get(1)); // 1
console.log(cache.get(2)); // 2
console.log(cache.count()); // 2
setTimeout(() => {
    console.log(cache.get(1)); // -1
    console.log(cache.get(2)); // 2
    console.log(cache.count()); // 1
}, 1500);


