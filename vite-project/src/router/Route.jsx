import React from "react";
import { useContext } from "react";
import routeContext from "./Context";

const Route = ({ path, component }) => {
    const { nowHere } = useContext(routeContext);
    // console.log("nowHere === path :>> ", nowHere, path, nowHere === path);
    if (nowHere === path) return <div>{component}</div>;
};

export default Route;
