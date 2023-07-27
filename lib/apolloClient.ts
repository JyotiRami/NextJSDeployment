import {
    ApolloClient,
    ApolloLink,
    concat,
    InMemoryCache,
    from,
  } from "@apollo/client"; 
  
  
//   const client = new ApolloClient({
//     link: concat(authMiddleware, from([errorLink, httpLink as any])),
//     cache: new InMemoryCache(),
//   });

  const client = new ApolloClient({
    uri: "http://10.37.57.113:3222/graphql", // Your running GraphQL server URL
    cache: new InMemoryCache()
  });
  
  export default client;
  