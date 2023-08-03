import s from "./mainpage.module.scss"
import cn from "classnames"

function mainpage() {
    return (
        <div className={s.mainContainer}>
            <div className={cn(s.leftColumn, s.mainColumn)}>
                <div className={s.logo}>
                    <img src="/img/logo.svg" alt="" />
                </div>
                <div className={s.slogan}>
                    <h1>YOUR <span>PERSONALIZED</span> COFFEE</h1>
                </div>
            </div>
            <div className={cn(s.mainColumn, s.centerColumn)}>
            </div>
            <div className={cn(s.menu, s.rightColumn)}>
                <div className={s.menu}>
                    <ul className={s.iconMenu}>
                        <li>Bucket</li>
                        <li></li>
                    </ul>
                    <h4 className={cn(s.menu, s.textMenu)}>TRANG CHỦ</h4>
                    <ul className={cn(s.menu, s.textMenu)}>
                        <li>COFFEE</li>
                        <li>PHIN MẠ MÀU</li>
                        <li>COMBO PHIN PHÊ</li>
                        <li>GIFTSET</li>
                        <li>LIÊN HỆ</li>
                    </ul>
                </div>
            </div>

        </div>

    )
}

export default mainpage

