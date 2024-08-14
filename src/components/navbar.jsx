// import style from "./navbar.module.css"

// function Navbar(){
//     let value_1=2
//     return(<>
    
//     <ul className={style["main"]}>
//         <li><img src="logo.png" alt="" className={style["logoimg"]}/></li>
//         <li className={style["searchmain"]}><input className={style["searcinput"]} type="text" placeholder="7 watch straps new s100 ultra" /><img src="search.png" alt="" className={style["searcicon"]}/></li>
//         <li className={style["download"]}><img src="download.png" alt="" className={style["downloadimg"]}/><p>Download the <br />AliExpress app</p></li>
//         <li className={style["pak"]}>
//             <img src="icons8-pakistan-48.png" alt="" className={style["pakimg"]} /><p>PKR</p>
//             </li>
//         <li className={style["id"]}>
//             <img src="id.png" alt="" className={style["idimg"]}/>
//             <p>
//                 <a href="nextpage.html"></a>
//             <button className={style["idbtn"]} 
//             onClick={()=>value_1=(value_1+1)}>Sign In </button><br />
//             <button className={style["idbtn"]}>Rigester</button>
//             </p>
//         </li>
//         <li className={style["cart"]}>
//             <img src="cart.png" alt="" className={style["cartimg"]}/>
//             <p>
//             <b className={style["cartvalue"]}>{value_1}</b>
//             <p>Cart</p>
//             </p>
//         </li>
//     </ul>
//     </>)
// }
// export default Navbar;






import { useState } from "react";
import style from "./navbar.module.css";

function Navbar() {
    const [value1, setValue1] = useState(0);

    return (
        <>
            <ul className={style.main}>
                <li>
                    <img src="logo.png" alt="Logo" className={style.logoimg} />
                </li>
                <li className={style.searchmain}>
                    <input
                        className={style.searcinput}
                        type="text"
                        placeholder="7 watch straps new s100 ultra"
                    />
                    <img src="search.png" alt="Search" className={style.searcicon} />
                </li>
                <li className={style.download}>
                    <img src="download.png" alt="Download" className={style.downloadimg} />
                    <p>Download the <br />AliExpress app</p>
                </li>
                <li className={style.pak}>
                    <img src="icons8-pakistan-48.png" alt="Pakistan" className={style.pakimg} />
                    <p>PKR</p>
                </li>
                <li className={style.id}>
                    <img src="id.png" alt="ID" className={style.idimg} />
                    <p>
                        <a href="nextpage.html"></a>
                        <button
                            className={style.idbtn}
                            onClick={() => setValue1(value1 + 1)}
                        >
                            Sign In
                        </button>
                        <br />
                        <button className={style.idbtn}>Register</button>
                    </p>
                </li>
                <li className={style.cart}>
                    <img src="cart.png" alt="Cart" className={style.cartimg} />
                    <p>
                        <b className={style.cartvalue}>{value1}</b>
                        <p>Cart</p>
                    </p>
                </li>
            </ul>
        </>
    );
}

export default Navbar;
