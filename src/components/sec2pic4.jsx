import style from "./Sec2.pic1.module.css"

function Sec2pic4(){
    return(<>
    <div className={style["main1"]}>
        <div className={style["dive"]}>
            <button className={style["btn"]}><img src="shopping.png" alt="" className={style["shop"]}/></button>
        </div>
        <img src="pic13.avif" alt="" className={style["img"]}/>
        <p className={style["text1"]}>Remote Controll Plane by...</p>
        <small className={style["text1"]}>⭐⭐⭐⭐ 9,000+Sold</small><br />
        <b className={style["text2"]}>PKR</b>
        <b className={style["text3"]}>4,276</b>
        <s className={style["text4"]}>PKR7,107</s>
    </div>
    </>)
}
export default Sec2pic4;