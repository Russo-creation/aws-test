import React from "react";
import "../style/App.css";
import FrontendStatus from "./FrontendStatus";
import NodeStatus from "./NodeStatus";
import GraphQLStatus from "./GraphQLStatus";
import DatabaseStatus from "./DatabaseStatus";

import 'cross-fetch/polyfill'

import ApolloClient from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import { ApolloProvider } from "react-apollo";

// Instantiate required constructor fields
const cache = new InMemoryCache();


const client = new ApolloClient({
  // Provide required constructor fields
  cache: cache,

  link: createHttpLink({
    uri: `${process.env.REACT_APP_API_URL}/graphql`
  }),

  // Provide some optional constructor fields
  name: "react-web-client",
  version: "1.3",
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
  },
  dataIdFromObject: (o) => o.id,
});

const App = () => {
console.log(process.env.REACT_APP_API_URL);

  return (
    <ApolloProvider client={client}>
      <div className="Wrapper">
        <header className="App-header">Docker stack test (AWS deployment)</header>
        <div className="section">-Frontend-</div>
        <FrontendStatus />
        <div className="section">-Backend-</div>
        <NodeStatus />
        <GraphQLStatus />
        <div className="section">-Database-</div>
        <DatabaseStatus />
        <input name="myinput" id="myinput"></input>
        <div style={{ height: "4000px" }}></div>
        <div>DirtyTest</div>

      </div>
    </ApolloProvider>
  );
};

export default App;
