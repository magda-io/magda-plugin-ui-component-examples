import React from "react";
import ReactDOM from "react-dom";
import {
    user,
    headerNavItems,
    footerCopyRightItems,
    footerMediumNavs,
    footerSmallNavs,
    config
} from "./defaultData";
import MagdaPluginComponentHeader from "./MagdaPluginComponentHeader";
import MagdaPluginComponentFooter from "./MagdaPluginComponentFooter";

ReactDOM.render(
    <div>
        <div>
            <h2>Header:</h2>
            <div>
                <MagdaPluginComponentHeader
                    isFetchingWhoAmI={false}
                    whoAmIError={null}
                    user={user}
                    headerNavItems={headerNavItems}
                    config={config}
                />
            </div>
        </div>
        <br />
        <div>
            <h2>Footer:</h2>
            <div>
                <MagdaPluginComponentFooter
                    isFetchingWhoAmI={false}
                    whoAmIError={null}
                    user={user}
                    footerCopyRightItems={footerCopyRightItems}
                    footerMediumNavs={footerMediumNavs}
                    footerSmallNavs={footerSmallNavs}
                    noTopMargin={true}
                    config={config}
                />
            </div>
        </div>
    </div>,
    document.getElementById("root")
);
