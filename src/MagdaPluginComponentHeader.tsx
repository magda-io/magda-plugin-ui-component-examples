import React from "react";
import { HeaderComponent } from "./externalComponentDef";

const MagdaPluginComponentHeader: HeaderComponent = (props) => {
    return (
        <div>
            <div>
                <h1>Header Component</h1>
            </div>
            <div>
                isFetchingWhoAmI : {props.isFetchingWhoAmI ? "true" : "false"}
            </div>
            <div>User: {props.user ? JSON.stringify(props.user) : "N/A"}</div>
        </div>
    );
};

export default MagdaPluginComponentHeader;
