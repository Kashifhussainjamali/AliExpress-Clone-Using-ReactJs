import style from "./fixed.module.css"

function Fixed(){
    return(<>
    <div className={style["fixedmain"]}>
    <div className={style["item"]}>
        <img src="1.png" alt="" className={style["img1"]} />
    </div>
    <div className={style["item"]}>
        <img src="2.png" alt="" className={style["img1"]}/>
    </div>
    <div className={style["item"]}>
        <img src="3.png" alt="" className={style["img2"]}/>
    </div>
    </div>
    </>)
}
export default Fixed;