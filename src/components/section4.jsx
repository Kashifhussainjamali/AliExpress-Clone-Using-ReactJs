import style from "./section4.module.css"
import Card1 from "./card1";
import Card2 from "./card2";
import Card3 from "./card3";
import Card4 from "./card4";
import Card5 from "./card5";
import Card6 from "./card6";
import Card7 from "./card7";
import Card8 from "./card8";
import Card9 from "./card9";
import Card10 from "./card10";
import Card11 from "./card11";
import Card12 from "./card12";
import Card13 from "./card13";
import Card14 from "./card14";
import Card15 from "./card15";

function Section4(){
    return(<>
     <div>
        <h2 className={style["hh2"]}>More to love</h2>
        <div className={style["div"]}>
        <Card1></Card1>
        <Card2></Card2>
        <Card3></Card3>
        <Card4></Card4>
        <Card5></Card5>
        </div>
        <div className={style["div"]}>
        <Card6></Card6>
        <Card7></Card7>
        <Card8></Card8>
        <Card9></Card9>
        <Card10></Card10>
        </div>
        <div className={style["div"]}>
        <Card11></Card11>
        <Card12></Card12>
        <Card13></Card13>
        <Card14></Card14>
        <Card15></Card15>
        </div>
        <div className={style["div"]}>
        <Card5></Card5>
        <Card2></Card2>
        <Card4></Card4>
        <Card6></Card6>
        <Card10></Card10>
        </div>
     </div>
    
    </>)
}
export default Section4;