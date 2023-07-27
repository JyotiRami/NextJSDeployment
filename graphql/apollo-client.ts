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

export const clientG = new ApolloClient({
    uri: "http://101.37.57.113:3222/graphql", // Your running GraphQL server URL
    cache: new InMemoryCache()
  });
  

  