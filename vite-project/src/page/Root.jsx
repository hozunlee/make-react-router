import useRouter from "../hooks/useRouter";
const Root = () => {
    const { push } = useRouter();

    return (
        <div>
            <h1>여기는 메인페이지</h1>
            <button onClick={() => push("/about")}>about으로</button>
        </div>
    );
};

export default Root;
