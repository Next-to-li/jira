import React from "react";
import { ProjectListScreen } from "screens/project-list";
import { useAuth } from "context/auth-context";
import styled from "@emotion/styled";
import { Row } from "components/lib";
// import softwareLogo from 'assets/software-logo.svg'
import { ReactComponent as SoftwareLogo } from "assets/software-logo.svg";
import { Button, Dropdown, Menu } from "antd";
import { Route, Routes, Navigate } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { ProjectScreen } from "screens/project";
import { resetRoute } from "utils";
// import userEvent from "@testing-library/user-event";

export const AuthenticatedApp = () => {
  return (
    <Container>
      {/* <PageHeader>
        <button onClick={logout}>登出</button>
      </PageHeader> */}
      <PageHeader />
      <Main>
        <Router>
          <Routes>
            <Navigate to={"/projects"} />
            <Route path={"/projects"} element={<ProjectListScreen />}></Route>
            <Route
              path={"/projects/:projectId/*"}
              element={<ProjectScreen />}
            />
            {/* <Route path={'/projects'} element={<ProjectListScreen />} /> */}
            {/* <Route path={'/projects'} element={<ProjectScreen />} /> */}
          </Routes>
        </Router>
      </Main>
    </Container>
  );
};

export const PageHeader = () => {
  const { logout, user } = useAuth();
  return (
    <Header between={true}>
      <HeaderLeft gap={true}>
        {/* <h3>logo</h3> */}
        {/* <img src={softwareLogo}/> */}
        <Button type={"link"} onClick={resetRoute}>
          <SoftwareLogo width={"18rem"} color={"rgb(38, 132, 255)"} />
        </Button>
        <h3>项目</h3>
        <h3>用户</h3>
      </HeaderLeft>
      <HeaderRight>
        {/* <button onClick={logout}>登出</button> */}
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key={"logout"}>
                <Button type={"link"} onClick={logout}>
                  登出
                </Button>
              </Menu.Item>
            </Menu>
          }
        >
          <Button type={"link"} onClick={(e) => e.preventDefault()}>
            Hi,{user?.name}
          </Button>
        </Dropdown>
      </HeaderRight>
    </Header>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr 6rem;
  /* grid-template-columns: 20rem 1fr 20rem; */
  height: 100vh;
`;

// const PageHeader = styled.header`
// height: 6rem;
// background-color: grey;
// `
const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
  /* height: 6rem; */
  /* grid-area: header; */
  /* display: flex;
flex-direction: row;
align-items: center; */
  /* justify-content: space-between; */
`;
const HeaderLeft = styled(Row)`
  /* display: flex;
align-items:center; */
`;

const HeaderRight = styled(Row)``;

const Main = styled.main`
  /* grid-area: main; */
`;
