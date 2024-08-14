import style from "./rigester.module.css"

function Rigester(){
    return(<>
    <div className={style["main"]}>
        <button className={style["btn1"]}>Rigester</button><button className={style["btn2"]}>Sign Up</button>
        <p>Or continue with</p>
        <img src="logoes.png" alt="loading...."/>
    </div>
    </>)
}
export default Rigester