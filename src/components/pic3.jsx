import style from "./pic3.module.css"

function Pic3(){
    return(<>
     <div className={style["main"]}>
        <p className={style["pio"]}>
        <h2 className={style["h2"]}>3 From</h2>
        <h2 className={style["h22"]}>US $2.69</h2>
        </p>
        <button className={style["btnn"]}>Choice</button><b>Free Shipping</b>

        <ul className={style["ul1"]}>
                <li>
                <img src="pic5.avif" alt="" className={style["img2"]} />
                <b className={style["b2"]}>PKR787</b><s className={style["s"]}>PKR,...</s>
                </li>
                <li>
                <img src="pic6.avif" alt="" className={style["img2"]}/>
                <b className={style["b2"]}>PKR797</b><s className={style["s"]}>PKR,...</s>
                </li>
                <li>
                <img src="pic7.avif" alt="" className={style["img2"]}/>
                <b className={style["b2"]}>PKR237</b><s className={style["s"]}>PKR,...</s>
                </li>
            </ul>
    </div>
    </>)
}
export default Pic3;