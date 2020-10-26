import React from "react";

import { SiNginx, SiReact } from "react-icons/si";

const FrontendStatus = () => {
  return (
    <>
      <div>
        <div className="diplayInline">
          <SiNginx size="30px" />
        </div>
        <div className="diplayInline">
          Nginex status: <span className="success">success</span>
        </div>
      </div>
      <div style={{ marginTop: "10px" }}>
        <div className="diplayInline">
          <SiReact size="30px" />
        </div>
        <div className="diplayInline">
          React status: <span className="success">success</span>
        </div>
      </div>
    </>
  );
};

export default FrontendStatus;
