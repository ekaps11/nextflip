import { styled } from "styled-components";

const DashboardContainer = styled.div`
  padding: 10% 5%;
  min-height: 20vh;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <h1>Main Menu</h1>
    </DashboardContainer>
  );
};

export default Dashboard;
