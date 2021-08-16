import { Table, TableProps } from "antd";
import dayjs from "dayjs";
import React from "react";
import { User } from "screens/project-list/search-panel";
// react-router 和 react-router-dom 的关系，类似于 react 和 react-dom/react-native/react-vr。。。
import { Link } from "react-router-dom";

//TODO 把所有ID都改成number类型
export interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
  created: number;
}

interface ListProps extends TableProps<Project> {
  // list: Project[];
  users: User[];
}

export const List = ({ users, ...props }: ListProps) => {
  return (
    <Table
      pagination={false}
      columns={[
        {
          title: "名称",
          // dataIndex: "name",
          sorter: (a, b) => a.name.localeCompare(b.name),
          render(value, project) {
            return <Link to={String(project.id)}>{project.name}</Link>;
          },
        },
        {
          title: "部门",
          dataIndex: "organization",
          // sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: "负责人",
          render(value, project) {
            return (
              <span>
                {users.find((user) => user.id === project.personId)?.name ||
                  "未知"}
              </span>
            );
          },
        },
        {
          title: "创建时间",
          render(value, project) {
            return (
              <span>
                {project.created
                  ? dayjs(project.created).format("YYYY-MM-DD")
                  : ""}
              </span>
            );
          },
        },
      ]}
      // dataSource={list}
      {...props}
    />
  );
};
