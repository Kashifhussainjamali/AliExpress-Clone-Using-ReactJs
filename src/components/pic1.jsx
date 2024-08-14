import style from "./pic1.module.css"

function Pic1(){
    return (<>
    <div className={style["main"]}>
        <h2>Wellcome Deal</h2>
        <p>Your exclusive price</p>
        <img src="pic1.avif" alt="" />
        <b className={style["b"]}>PKR1702</b><s className={style["s"]}>3835</s>
    </div>
    </>)
}
export default Pic1