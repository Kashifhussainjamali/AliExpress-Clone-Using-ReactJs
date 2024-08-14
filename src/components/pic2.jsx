import style from "./pic2.module.css"
function Pic2(){
    return(<>
    <div className={style["main"]}>
        <h2>First come, 50% off</h2>
        <button className={style["btnn"]}>Choice</button><b className={style["bb"]}>Free Shipping</b>
        <div className={style["div"]}>
        <div>
        <img src="pic2.avif" alt="" className={style["img1"]}/>
        <b className={style["b1"]}>PKR887</b><b className={style["b"]}>-76%</b>
        </div>
            <ul className={style["ul1"]}>
                <li>
                <img src="pic3.avif" alt="" className={style["img2"]} />
                <b className={style["b2"]}>PKR437</b><b className={style["b"]}>-67%</b>
                </li>
                <li>
                <img src="pic4.avif" alt="" className={style["img2"]}/>
                <b className={style["b2"]}>PKR677</b><b className={style["b"]}>-73%</b>
                </li>
            </ul>
        </div>
    </div>
    </>)
}
export default Pic2