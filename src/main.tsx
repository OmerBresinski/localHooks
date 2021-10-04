import React from "react";
import ReactDOM from "react-dom";
import AccountsWithoutHooks from "./AccountsWithoutHooks";
import AccountsWithHooks from "./AccountsWithHooks";

ReactDOM.render(
    <React.StrictMode>
        <AccountsWithoutHooks />
        {/* <AccountsWithHooks /> */}
    </React.StrictMode>,
    document.getElementById("root")
);
