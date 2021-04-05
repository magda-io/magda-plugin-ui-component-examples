import React from "react";
import { FooterComponent } from "./externalComponentDef";

const MagdaPluginComponentFooter: FooterComponent = (props) => {
    return (
        <div>
            <div>
                <h1>Footer Component</h1>
            </div>
            <div>
                isFetchingWhoAmI : {props.isFetchingWhoAmI ? "true" : "false"}
            </div>
            <div>User: {props.user ? JSON.stringify(props.user) : "N/A"}</div>
        </div>
    );
};

export default MagdaPluginComponentFooter;
