import React, { useEffect, useState } from "react";
import { useMount } from "utils";

//react hook 与 闭包，hook 与 闭包经典的坑
export const Test = () => {
  const [num, setNum] = useState(0);

  const add = () => {
    setNum(num + 1);
  };
  useMount(() => {
    // setInterval(()=>{
    //     console.log('num is setInterval',num)
    // },1000)
  });

  useEffect(() => {
    return () => {
      console.log("test", num);
    };
  }, []);
  return (
    <div>
      <button onClick={add}>add</button>
      <p>number:{num}</p>
    </div>
  );
};
