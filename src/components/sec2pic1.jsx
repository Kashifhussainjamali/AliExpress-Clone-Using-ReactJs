import style from "./Sec2.pic1.module.css"
// import { value_1 } from "./navbar";

function Sec2pic1(){
    return(<>
    <div className={style["main1"]}>
        <div className={style["dive"]}>
            <button className={style["btn"]}><img src="shopping.png" alt="" className={style["shop"]}/></button>
        </div>
        <img src="pic10.avif" alt="" className={style["img"]}/>
        <p className={style["text1"]}>Magcubic HY320 Mini Ne...</p>
        <small className={style["text1"]}>⭐⭐⭐⭐⭐ 10,000+Sold</small><br />
        <b className={style["text2"]}>PKR</b>
        <b className={style["text3"]}>13,246</b>
        <s className={style["text4"]}>PKR46,157</s>
    </div>
    </>)
}
export default Sec2pic1;
