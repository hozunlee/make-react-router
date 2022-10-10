import React, { useEffect, useState } from "react";

import routeContext from "./Context";

const Router = ({ children }) => {
    const [nowHere, setNowHere] = useState(location.pathname);
    console.log("Now=>>>", nowHere);

    // useEffect(() => {
    //     window.onpopstate = (e) => {
    //         if (e.state === null) return setNowHere("/");
    //         setNowHere(e.state);
    //     };
    // }, []);
    return (
        <routeContext.Provider value={{ nowHere, setNowHere }}>
            {children}
        </routeContext.Provider>
    );
};

export default Router;
