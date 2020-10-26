import React from "react";
import { graphql } from "react-apollo";
import fetchGraphQLStatus from "../queries/fetchGraphQLStatus";

import { GrGraphQl } from "react-icons/gr";

const DirectLink = () => {
  return (
    <div className="codeLink">
      Direct link:{" "}
      <a href={`${process.env.REACT_APP_API_URL}/graphql`}>
        {`${process.env.REACT_APP_API_URL}/graphql`}
      </a>
      <p style={{ textAlign: "left" }}>QueryLine (copy to verify)</p>
      <div className="codeQuery">
        <p>{"{"}</p>
        <p>&nbsp;&nbsp;&nbsp;{'status(id: "1") {'}</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"id"}</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"status"}</p>
        <p>&nbsp;&nbsp;&nbsp;{"}"}</p>
        <p>{"}"}</p>
      </div>
    </div>
  );
};

const GraphQLStatus = (props) => {
  const { status } = props.data;
  if (!status) {
    return (
      <>
        <div className="diplayInline">
          <GrGraphQl size="30px" />
        </div>
        <div className="diplayInline">
          GraphQL status: <span className="fail">fail</span>
        </div>
        <DirectLink />
      </>
    );
  }

  console.log(props);
  return (
    <>
      <div className="diplayInline">
        <GrGraphQl size="30px" />
      </div>
      <div className="diplayInline">
        GraphQL status:{" "}
        {status.status === 1 ? (
          <span className="success">success</span>
        ) : (
          <span className="fail">fail</span>
        )}
      </div>
      <DirectLink />
    </>
  );
};

export default graphql(fetchGraphQLStatus)(GraphQLStatus);
