
// thunk(fn /*, args */) is a function that receives a function and possibly some arguments to be passed to the function and returns a function. When this returned function is called, it returns the result of execute the fnfunction. In functional programming, a thunk is a deferred expression (function). Its evaluation is postponed until it's really needed.
// trampoline(thunk) is a function that executes repeatedly the thunk argument until it returns a non function value. Then this last value is returned.


function thunk(fn /*, args */) {

}

function trampoline(thunk) {

}

function isEven(n) {
    return (n === 0 ? true : isOdd(n - 1));
}

function isOdd(n) {
    return (n === 0 ? false : isEven(n - 1));
}
