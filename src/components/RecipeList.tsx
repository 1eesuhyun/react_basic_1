import {useState, useEffect} from "react";
import axios, {AxiosResponse} from "axios";
import {Recipe, RecipeProps} from "../types";
/*
    필요한 interface / axios(공통으로 사용)
    ------------------------------------
    | tanStackQuery
    | bootstrap
 */
function RecipeList() {
    const [curpage, setCurpage] = useState<number>(1);
    const [data, setData] = useState<RecipeProps>();

    useEffect(() => {
        axios.get(`http://localhost/recipe/list_react/${curpage}`)
            .then((res: AxiosResponse<any>) => {
                console.log(res.data);
                setData(res.data);
            })
    }, [curpage]);
    const prev: () => void = (): void => {
        if (data) {
            setCurpage(data.startPage - 1)
        }
    }
    const next: () => void = (): void => {
        if (data) {
            setCurpage(data.endPage + 1)
        }
    }
    const pageChange: (page: number) => void = (page: number) => setCurpage(page);

    const pageArr = []
    if (data && data?.startPage > 1) {
        pageArr.push(
            <li><a className={"nav-link"} onClick={prev}>&laquo;</a></li>
        )
    }
    let i: number = 0;
    if (data) {
        for (let i: number = data.startPage; i <= data.endPage; i++) {
            pageArr.push(
                <li><a className={"nav-link"} onClick={(): void => pageChange(i)}>{i}</a></li>
            )
        }
    }
    if (data && data?.endPage < data?.totalpage) {
        pageArr.push(
            <li><a className={"nav-link"} onClick={next}>&raquo;</a></li>
        )
    }
    const html: any = data?.list.map((recipe: Recipe) =>
        <div className="col-md-3">
            <div className="thumbnail">
                <a href="#">
                    <img src={recipe.poster} style={{"width": "240px", "height": "200px"}} title={recipe.title}/>
                    <div className="caption">
                        <div className={"p"}>{recipe.chef}</div>
                    </div>
                </a>
            </div>
        </div>
    )
    return (
        <div className={"container"}>
            <div className={"row"}>
                {html}
            </div>
            <div className="row text-center" style={{"height": "20px"}}>
                <ul className={"pagination"}>
                    {pageArr}
                </ul>
            </div>
        </div>
    )
}

export default RecipeList;