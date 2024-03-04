var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var plces = ['cape town', 'delhi', 'faisalabad', 'karachi'];
// console.log('original' + plces);
//print your array in alphabatical order without modifiying the actual list.
// console.log('copy' + [...plces].sort());
//show that your array is in original order by printing it.
// console.log('original' + plces);
//show your array in reverse order without changing the original list.
console.log('copy' + __spreadArray([], plces, true).sort().reverse());
//show that your array is in original order by printing it again.
console.log('copy' + __spreadArray([], plces, true).sort().reverse());
//reverse the order of your list.Print the array to show that its order is changed.
console.log('original' + plces.sort());
//reverse the order of your list again in its original order.
console.log('original' + plces.sort().reverse());
