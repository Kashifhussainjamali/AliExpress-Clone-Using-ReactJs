import style from "./card1.module.css"

function Card15(){
    return(<>
    <div className={style["main1"]}>
        <div className={style["dive"]}>
            <button className={style["btn"]}><img src="shopping.png" alt="" className={style["shop"]}/></button>
        </div>
        <img src="img17.webp" alt="" className={style["img"]}/>
        <p className={style["text1"]}>Shoes For...</p>
        <small className={style["text1"]}>⭐⭐⭐⭐ 9000+Sold</small><br />
        <b className={style["text2"]}>PKR</b>
        <b className={style["text3"]}>1,188</b>
        <s className={style["text4"]}>PKR2,287</s><br/>
        <p className={style["lasttext"]}><b className={style["btn11"]}>Wellcome Deal</b>🔴<b className={style["btn11"]}>Sale</b>🔴 -28%</p>
        <button className={style["btnn"]}>Choice</button><b className={style["bb"]}>Free Shipping Over</b><br /><b className={style["bbb"]}>PKR2,400</b>
    </div>
    </>)
}
export default Card15;