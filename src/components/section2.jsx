import style from "./section2.module.css"
import Sec2pic1 from "./sec2pic1"
import Sec2pic2 from "./sec2pic2"
import Sec2pic3 from "./sec2pic3"
import Sec2pic4 from "./sec2pic4"
import Sec2pic5 from "./sec2pic5"

function Section2(){
    return(<>
    <h2 className={style["h2"]}>Big Save</h2>
    <div className={style["main"]}>
        <Sec2pic1></Sec2pic1>
        <Sec2pic2></Sec2pic2>
        <Sec2pic3></Sec2pic3>
        <Sec2pic4></Sec2pic4>
        <Sec2pic5></Sec2pic5>
    </div>
    </>)
}
export default Section2