import {useState, Fragment, useEffect, ReactElement, useMemo} from "react";

// 배열
function App3() {
    const [img, setImg] = useState<string[]>()
    const images: string[] = [
        "https://img.megabox.co.kr/SharedImg/2025/12/26/hgy5aqAyPAISQGabYFQCfN3cQp0pVWrc_420.jpg",
        "https://img.megabox.co.kr/SharedImg/2026/01/15/xlMKoNV9stZD0rpyynZmnvRS2zDbQtyp_420.jpg",
        "https://img.megabox.co.kr/SharedImg/2026/01/28/K4tqYfZ2HDsAwAk9aWfNniZ4eJeq9S30_420.jpg",
        "https://img.megabox.co.kr/SharedImg/2025/11/26/6tAiMzbHCFRIda2pnPZxeJh7lzX2AaIB_420.jpg",
        "https://img.megabox.co.kr/SharedImg/2026/01/16/xk4bph3yX4q4iUhjvkXxbxDSLR0z5ImF_420.jpg"
    ]

    useEffect(() => {
        setImg(images)
    })
    /*
        Element

     */
    /*const html: unknown[] | undefined = img?.map((movie: string):ReactElement =>
        <img src={movie} style={{"width": "150px", "height": "200px"}} key={movie}/>*/
    const html= img?.map((movie:string):ReactElement =>
        <img src={movie} style={{"width": "150px", "height": "200px"}} key={movie}/>
    )

    return (
        <Fragment>
            {html}
        </Fragment>
    )
}

export default App3;