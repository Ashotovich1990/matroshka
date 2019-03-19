export const throttle = (func,interval) => {
   let timeout;
  return function() {
   let context = this, args = arguments;
   let later = function () {
      timeout = false;
    };
    if (!timeout) {
      func.apply(context, args)
      timeout = true;
      setTimeout(later, interval)
    }
  }
}
