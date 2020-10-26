import gql from "graphql-tag";

export default gql`
  {
    status(id: "1") {
      id
      status
    }
  }
`;
