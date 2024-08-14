import style from "./section1.module.css"
import Rigester from "./regester"
import Pic1 from "./pic1"
import Pic2 from "./pic2"
import Pic3 from "./pic3"
import Pic4 from "./pic4"

function Section1(){
    return (<>
    <div className={style["main"]}>
        <div>
    <Rigester> </Rigester>   
    <Pic1></Pic1>
    </div>
    <Pic2></Pic2>
    <div>
    <Pic3></Pic3>
    <Pic4></Pic4>
    </div>
    </div>
    </>)
}
export default Section1