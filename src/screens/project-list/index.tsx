import React from "react";
import { SearchPanel } from "screens/project-list/search-panel";
import { List, Project } from "screens/project-list/list";
import { useEffect, useState } from "react";
import { cleanObject, useDebounce, useMount } from "../../utils";
// import * as qs from "qs";
import { useHttp } from "utils/http";
import styled from "@emotion/styled";
import { Typography } from "antd";
import { useAsync } from "utils/use-async";
import { useProjects } from "utils/project";
import { useUsers } from "utils/user";

// 使用 JS 的同学，大部分的错误都是在 runtime(运行时) 的时候发现的
// 我们希望，在静态代码中，就能找到其中的一些错误 -> 强类型
// const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  // const [users, setUsers] = useState([]);

  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const debouncedParam = useDebounce(param, 200);
  // const [list, setList] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<null | Error>(null);
  // const client = useHttp();
  const { data: list, isLoading, error } = useProjects(debouncedParam);
  const { data: users } = useUsers();
  // useEffect(() => {
  //   run(client("projects", { data: cleanObject(debouncedParam) }))
  //   // setLoading(true);
  //   // client("projects", { data: cleanObject(debouncedParam) })
  //   // .then(setList)
  //   // .catch((err)=>{
  //   //   setList([])
  //   //   setError(err)
  //   // })
  //   // .finally(()=>{
  //   //   setLoading(false)
  //   // });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [debouncedParam]);

  // useMount(() => {
  //   client("users").then(setUsers);
  // });

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel users={users || []} param={param} setParam={setParam} />
      {error ? (
        <Typography.Text type={"danger"}>{error.message}</Typography.Text>
      ) : null}
      <List loading={isLoading} users={users || []} dataSource={list || []} />
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;
