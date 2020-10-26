import React, { useEffect, useState } from "react";
import { FaNodeJs } from "react-icons/fa";

const NodeStatus = () => {
  const [nodeStatus, setNodeStatus] = useState("fail");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/nodestatus`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        if (data.status === 1) {
          setNodeStatus("success");
        } else {
          setNodeStatus("fail");
        }

        console.log("nodestatus: ", data);
      })
      .catch((err) => {
        console.log("Error Reading data " + err);
      });
  }, []);

  return (
    <div>
      <div className="diplayInline">
        <FaNodeJs size="30px" />
      </div>
      <div className="diplayInline">
        Node status:{" "}
        {nodeStatus === "fail" ? (
          <span className="fail">{nodeStatus}</span>
        ) : (
          <span className="success">{nodeStatus}</span>
        )}
      </div>
      <div className="codeLink">
        Direct link:{" "}
        <a href={`${process.env.REACT_APP_API_URL}/nodestatus`}>
          {`${process.env.REACT_APP_API_URL}/nodestatus`}
        </a>
      </div>
    </div>
  );

  //http://localhost:4008/nodestatus
};

export default NodeStatus;
