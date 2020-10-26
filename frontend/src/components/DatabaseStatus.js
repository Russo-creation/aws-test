import React, { useEffect, useState } from "react";

import { DiMysql } from "react-icons/di";

const DatabaseStatus = () => {
  const [databaseStatus, setDatabaseStatus] = useState("fail");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/mysqlstatus`, {
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
        if (data[0].mysqlstatus === 1) {
          setDatabaseStatus("success");
        } else {
          setDatabaseStatus("fail");
        }

        console.log("mysqlstatus: ", data);
      })
      .catch((err) => {
        console.log("Error Reading data " + err);
      });
  }, []);

  return (
    <div>
      <div className="diplayInline">
        <DiMysql size="30px" />
      </div>
      <div className="diplayInline">
        MySql status:{" "}
        {databaseStatus === "fail" ? (
          <span className="fail">{databaseStatus}</span>
        ) : (
          <span className="success">{databaseStatus}</span>
        )}
      </div>
      <div className="codeLink">
        Direct link:{" "}
        <a href={`${process.env.REACT_APP_API_URL}/mysqlstatus`}>
          {`${process.env.REACT_APP_API_URL}/mysqlstatus`}
        </a>
      </div>
    </div>
  );
};

export default DatabaseStatus;
