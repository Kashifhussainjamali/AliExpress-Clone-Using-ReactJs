import style from "./footer.module.css"

function Footer(){
    return(<>
    <table className={style["main"]}>
        <tr>
        <th>Customer service</th>
        <th>Shopping with us</th>
        <th>Collaborate with us</th>
        <th>Pay with</th>
        <th>Stay connected</th>
        </tr>
        <tr>
            <td>Help Center</td>
            <td>Making payments</td>
            <td>Partnerships</td>
            <td rowSpan={5}><img src="footerimg.png" alt="" className={style["img1"]}/></td>
            <td  rowSpan={5}><img src="footer2.png" alt=""  className={style["img2"]}/></td>
        </tr>
        <tr>
            <td>Transaction Services</td>
            <td>Delivery options</td>
            <td>Affiliate program</td>
        </tr>
        <tr>
            <td>Agreement for non-</td>
            <td>Buyer Protection</td>
            <td>DS Center</td>
        </tr>

        <tr>
            <td colSpan={2}>EU/UK Consumers</td>
            <td>Seller Log In</td>
        </tr>
        <tr>
            <td colSpan={2}>Terms and Conditions for</td>
            <td>中国卖家入驻</td>
        </tr>
        <tr>
            <td colSpan={2}>EU/EEA/UK Consumers</td>
            <td>Non-Chinese Seller</td>
        </tr>
        <tr>
            <td colSpan={2}>(Transactions)</td>
            <td>Registration</td>
        </tr>
        <tr>
            <td colSpan={3}>Take our feedback survey</td>
        </tr>

    </table>
    <div className={style["last"]}>
        <ul className={style["lastul"]}>
            <li className={style["lastli"]}>
                <h3>Help</h3>
                <p className={style["p"]}>Help Center, Disputes & Reports, Buyer Protection, Report IPR infringement, Regulated Information, Integrity Compliance, Transparency Center, Submit report (non-registered users)</p>
            </li>
            <li className={style["lastli"]}>
                <h3>AliExpress Multi-Language Sites</h3>
                <p className={style["p"]}>Russian, Portuguese, Spanish, French, German, Italian, Dutch, Turkish, Japanese, Korean, Thai, Vietnamese, Arabic, Hebrew, Polish</p>
            </li>
        </ul>
        <ul className={style["lastul"]}>
            <li className={style["lastli"]}>
                <h3>Browse by Category</h3>
                <p className={style["p"]}>All Popular, Product, Promotion, Low Price, Great Value, Reviews</p>
            </li >
            <li className={style["lastli"]}>
                <h3>Alibaba Group</h3>
                <p className={style["p"]}>Alibaba Group Website, AliExpress, Alimama, Alipay, Fliggy, Alibaba Cloud, Alibaba International, AliTelecom, DingTalk, Juhuasuan, Taobao Marketplace, Tmall, Taobao Global, AliOS, 1688</p>

            </li>
        </ul>
        </div>

        <div className={style["lastdiv"]}>
            <p className={style["lastp"]}>Intellectual Property Protection - Privacy Policy - Sitemap - Terms of Use - Information for EU consumers - Imprint - Transaction Services Agreement for non-EU/UK Consumers - Terms and Conditions for EU/EEA/UK Consumers - User Information Legal Enquiry Guide ©️2010-2024 AliExpress.com. All rights reserved. <img src="one.png" alt="" /> 增值电信业务经营许可证 增值电信业务经营许可证 浙B2-20120091-8 <img src="two.png" alt="" className={style["lastimg"]}/> 浙公网安备 浙公网安备 33010802002248号</p>
        </div>


    </>)
    }
export default Footer;