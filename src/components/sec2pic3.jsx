import style from "./Sec2.pic1.module.css"

function Sec2pic3(){
    return(<>
    <div className={style["main1"]}>
        <div className={style["dive"]}>
            <button className={style["btn"]}><img src="shopping.png" alt="" className={style["shop"]}/></button>
        </div>
        <img src="pic12.avif" alt="" className={style["img"]}/>
        <p className={style["text1"]}>Keyboard Collered by...</p>
        <small className={style["text1"]}>⭐⭐⭐⭐⭐ 8,000+Sold</small><br />
        <b className={style["text2"]}>PKR</b>
        <b className={style["text3"]}>2,246</b>
        <s className={style["text4"]}>PKR5,157</s>
    </div>
    </>)
}
export default Sec2pic3;