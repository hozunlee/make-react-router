import React, { useContext } from "react";
import routeContext from "../router/Context";

const useRouter = () => {
    const { nowHere, setNowHere } = useContext(routeContext);

    const push = (to) => {
        console.log("to :>> ", to);
        if (nowHere == to) return;
        window.history.pushState(null, "", to); //주소 바꾸기
        setNowHere(to); // 페이지 바꾸기
    };
    return { push };
};

export default useRouter;
