import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
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
    <BrowserRouter>
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
                        requestSignOut={() => Promise.resolve()}
                        requestWhoAmI={() => Promise.resolve()}
                        fetchContent={() => Promise.resolve()}
                        history={{} as any}
                        location={{} as any}
                        match={{} as any}
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
                        requestSignOut={() => Promise.resolve()}
                        requestWhoAmI={() => Promise.resolve()}
                        fetchContent={() => Promise.resolve()}
                        history={{} as any}
                        location={{} as any}
                        match={{} as any}
                    />
                </div>
            </div>
        </div>
    </BrowserRouter>,
    document.getElementById("root")
);
