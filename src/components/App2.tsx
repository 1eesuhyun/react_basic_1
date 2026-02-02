import { useState,useEffect,Fragment } from "react";
/*
    useState : 데이터가 변경 시 HTML에 적용
    useEffect : 한번 or 반복 실행 시 사용
    Fragment : <> </> : 가상 루트 태그 제작

    CSS가 존재 할 때
    <div class="container"> : 적용 X
    <div className="container"> : 적용 O
 */
function App2() {
    let name:string="홍길동"
    let age:number = 20

    useEffect(() => {
        name="심청이"
        age=25
    }, []);
    return (
        <Fragment>
            <div>
                <h3>{name}</h3>
            </div>
            <div>
                <h3>{age}</h3>
            </div>
        </Fragment>
    )
}
export default App2
