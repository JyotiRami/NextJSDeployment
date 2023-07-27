import type { NextPage } from "next";
import Container from "../components/Container";
import { ApolloProvider } from "@apollo/client";
import { clientG } from "../graphql/apollo-client";

const Customers: NextPage = () => {
  return (
    <Container title="Customers">
      <ApolloProvider client={clientG}>
        <div>Customers</div>
      </ApolloProvider>
    </Container>
  );
};

export default Customers;
