export function throttle(func: () => void, limit: number): () => void {
  let flag = true;

  return function () {
    if (flag) {
      func();
      flag = false;
    }
    setTimeout(() => {
      flag = true;
    }, limit);
  };
}
