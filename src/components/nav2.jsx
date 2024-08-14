import style from "./nav2.module.css"
function Nav2(){
    return(<>
    <ul className={style["ulmain"]}>
        <li className={style["input"]}><img src="line.png" alt="" /><p>All Categories</p></li>
        <li className={style["textred"]}>3 from US $2.99</li>
        <li className={style["text"]}>Choice</li>
        <li className={style["text"]}>SuperDeals</li>
        <li className={style["text"]}>Plus</li>
        <li className={style["text"]}>AliExpress Business</li>
        <li className={style["text"]}>Home & Garden</li>
        <li className={style["text"]}>Hair Ext</li>
        <li className={style["text"]}>More</li>
    </ul>
    </>)    
}
export default Nav2