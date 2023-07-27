import type { NextPage } from "next";
import Container from "../components/Container";
import Dashboard from "./dashboard";
import AppToDo from "./todo";

const Home: NextPage = () => {
  return (
    <Container title="Dashboard">
      {/* <Dashboard /> */}
      <AppToDo />
    </Container>
  );
};

export default Home;
