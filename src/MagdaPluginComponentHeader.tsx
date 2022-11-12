import React from "react";
import { HeaderComponentType } from "@magda/external-ui-plugin-sdk";

const MagdaPluginComponentHeader: HeaderComponentType = (props) => {
    return (
        <div>
            <div>
                <h1>Header Component</h1>
            </div>
            <div>
                isFetchingWhoAmI : {props.isFetchingWhoAmI ? "true" : "false"}
            </div>
            <div>User: {props.user ? JSON.stringify(props.user) : "N/A"}</div>
            <div>
                Magda Config:{" "}
                {props.config ? JSON.stringify(props.config) : "N/A"}
            </div>
        </div>
    );
};

export default MagdaPluginComponentHeader;
