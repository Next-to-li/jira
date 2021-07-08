import React from "react";
import { ProjectListScreen } from "screens/project-list";
import { useAuth } from "context/auth-context";
import styled from "@emotion/styled";
import { Row } from "components/lib";
// import softwareLogo from 'assets/software-logo.svg'
import { ReactComponent as SoftwareLogo } from "assets/software-logo.svg";
import { Button, Dropdown, Menu } from "antd";
// import userEvent from "@testing-library/user-event";

export const AuthenticatedApp = () => {
  const { logout, user } = useAuth();
  return (
    <Container>
      {/* <PageHeader>
        <button onClick={logout}>登出</button>
      </PageHeader> */}
      <Header between={true}>
        <HeaderLeft gap={true}>
          {/* <h3>logo</h3> */}
          {/* <img src={softwareLogo}/> */}
          <SoftwareLogo width={"18rem"} color={"rgb(38, 132, 255)"} />
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
      <Main>
        <ProjectListScreen />
      </Main>
    </Container>
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
