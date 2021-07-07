import React from "react";
import { ProjectListScreen } from "screens/project-list";
import { useAuth } from "context/auth-context";
import styled from "@emotion/styled";
import { Row } from "components/lib";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <Container>
      {/* <PageHeader>
        <button onClick={logout}>登出</button>
      </PageHeader> */}
      <Header between={true}>
        <HeaderLeft gap={true}>
          <h3>logo</h3>
          <h3>项目</h3>
          <h3>用户</h3>
        </HeaderLeft>
        <HeaderRight>
          <button onClick={logout}>登出</button>
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

const HeaderRight = styled.div``;

const Main = styled.main`
  /* grid-area: main; */
`;
