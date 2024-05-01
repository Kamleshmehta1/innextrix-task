export function handleDebounce(cb: () => void, delay: number): () => void {
  let timer: ReturnType<typeof setTimeout>;
  return function (...params: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...params);
    }, delay);
  };
}
