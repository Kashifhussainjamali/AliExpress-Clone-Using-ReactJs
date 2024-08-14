import style from "./Sec2.pic1.module.css"

function Sec2pic2(){
    return(<>
    <div className={style["main1"]}>
        <div className={style["dive"]}>
            <button className={style["btn"]}><img src="shopping.png" alt="" className={style["shop"]}/></button>
        </div>
        <img src="pic11.avif" alt="" className={style["img"]}/>
        <p className={style["text1"]}>Digital XYM NEW wa...</p>
        <small className={style["text1"]}>⭐⭐⭐⭐ 10,000+Sold</small><br />
        <b className={style["text2"]}>PKR</b>
        <b className={style["text3"]}>3,246</b>
        <s className={style["text4"]}>PKR6,157</s>
    </div>
    </>)
}
export default Sec2pic2;
