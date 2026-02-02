import {useState, useEffect} from "react";
import axios from "axios";

interface Food {
    fno: number;
    name: string;
    poster: string;
}

interface FoodListProps {
    list: Food[];
    curpage: number;
    totalpage: number;
    startPage: number;
    endPage: number;
}

function FoodList() {
    const [curpage, setCurpage] = useState<number>(1);
    const [data, setData] = useState<FoodListProps>();
    useEffect(() => {
        axios.get(`http://localhost:/food/list_react/${curpage}`)
            .then(res => {
                console.log(res.data);
                setData(res.data);
            })
    }, [curpage]) // 재호출 [] : mounted() [변수] => 재호출
    const prev:()=>void=():void => {
        if(data){
            setCurpage(data.startPage-1)
        }
    }
    const next:()=>void=():void => {
        if(data){
            setCurpage(data.endPage+1)
        }
    }
    const pageChange:(page:number)=>void=(page:number)=>setCurpage(page);

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
                <li><a className={"nav-link"} onClick={():void=>pageChange(i)}>{i}</a></li>
            )
        }
    }
    if (data && data?.endPage < data?.totalpage) {
        pageArr.push(
            <li><a className={"nav-link"} onClick={next}>&raquo;</a></li>
        )
    }

    const html: any = data?.list.map((food: Food) =>
        <div className="col-md-3">
            <div className="thumbnail">
                <a href="#">
                    <img src={food.poster} style={{"width": "240px", "height": "200px"}}/>
                    <div className="caption">
                        <div className={"p"} >{food.name}</div>
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

export default FoodList;