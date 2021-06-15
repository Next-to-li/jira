import { useEffect, useState } from "react";

export const isFalsy = (value: any) => (value === 0 ? false : !value);

export const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  // use开头是hook
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const useDebounce = (value: any, delay?: number) => {
  //需要使用hook时需要写成hook
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    //每次在vlaue变化之后设置定时器
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    //每次在上一个useEffect处理完以后再运行，（个人理解：useEffect会监听一个状态，每次状态改变了就会触发内部函数，再次改变会触发return里的函数，并重新触发新的useEffect？？）
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};

// export const debounce = (func, delay) => {
//   let timeout;
//   return (...param) => {
//     if (timeout) {
//       clearTimeout(timeout);
//     }
//     timeout = setTimeout(function () {
//       func(...param);
//     }, delay);
//   };
// };
