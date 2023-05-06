//请你编写一个函数，它的参数为一个整数数组 nums 、一个计算函数 fn 和初始值 init 。返回一个数组 归约后 的值。
//
// 你可以定义一个数组 归约后 的值，然后应用以下操作： val = fn(init, nums[0]) ，
// val = fn(val, nums[1]) ， val = fn(val, arr[2]) ，... 直到数组中的每个元素都被处理完毕。返回 val 的最终值。
//
// 如果数组的长度为 0，它应该返回 init 的值。
//
// 请你在不使用内置数组方法的 Array.reduce 前提下解决这个问题。
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/array-reduce-transformation
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let result = init
    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i])
    }
    return result;
}