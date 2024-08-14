import style from "./card1.module.css"

function Card14(){
    return(<>
    <div className={style["main1"]}>
        <div className={style["dive"]}>
            <button className={style["btn"]}><img src="shopping.png" alt="" className={style["shop"]}/></button>
        </div>
        <img src="img16.avif" alt="" className={style["img"]}/>
        <p className={style["text1"]}>Redmi Ear...</p>
        <small className={style["text1"]}>⭐⭐⭐⭐ 19000+Sold</small><br />
        <b className={style["text2"]}>PKR</b>
        <b className={style["text3"]}>11,170</b>
        <s className={style["text4"]}>PKR22,207</s><br/>
        <p className={style["lasttext"]}><b className={style["btn11"]}>Wellcome Deal</b>🔴<b className={style["btn11"]}>Sale</b>🔴 -38%</p>
        <button className={style["btnn"]}>Choice</button><b className={style["bb"]}>Free Shipping Over</b><br /><b className={style["bbb"]}>PKR2,400</b>
    </div>
    </>)
}
export default Card14;