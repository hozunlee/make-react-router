import React from "react";
import useRouter from "../hooks/useRouter";

const About = () => {
    const { push } = useRouter();
    return (
        <div>
            <h1>여기는 소개페이지</h1>{" "}
            <button onClick={() => push("/")}>go Main</button>
        </div>
    );
};

export default About;
