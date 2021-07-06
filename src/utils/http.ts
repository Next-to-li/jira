import qs from "qs";
import * as auth from "auth-provider";
import { useAuth } from "context/auth-context";

const apiUrl = process.env.REACT_APP_API_URL;

interface Config extends RequestInit {
  token?: string;
  data?: object;
}

export const http = async (
  endpoint: string,
  { data, token, headers, ...customConfig }: Config = {}
) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...customConfig,
  };

  if (config.method.toUpperCase() === "GET") {
    endpoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }

  // axios 和 fetch 的表现不一样，axios可以直接在返回状态不为2xx的时候抛出异常
  return window
    .fetch(`${apiUrl}/${endpoint}`, config)
    .then(async (response) => {
      if (response.status === 401) {
        await auth.logout();
        window.location.reload();
        return Promise.reject({ message: "请重新登录" });
      }
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
};

// js中的typeof是在runtime时运行的
// ts中的typeof是在静态环境运行的
export const useHttp = () => {
  const { user } = useAuth();
  // TODO 讲解 TS 操作符 TS Utility Types// typeof 的类型
  return (...[endpoint, config]: Parameters<typeof http>) =>
    http(endpoint, { ...config, token: user?.token });
};

// // 联合类型
// let my: string|number

// my = 'seven'
// my = 7
// // my = {}
// // 不能将类型“{}”分配给类型“string | number”。
// // 不能将类型“{}”分配给类型“number”。ts(2322)

// // 类型别名
// // 类型别名和interface 在很多情况下可以互换
// // 区别：interface在这种情况下无法替代类型别名
// type FavoriteNumber = string|number
// let rese:FavoriteNumber = '6'
// rese = 6

// //interface 也没法实现Utility type

// type Person = {
//   name:string,
//   age:number
// }
// const xiaoming:Partial<Person> ={}//使接口参数都变成可选
// const shenmiren:Omit<Person,'name'|'age'> ={} //删除接口里的定义
