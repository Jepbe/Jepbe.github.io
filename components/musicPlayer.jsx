import style from '../styles/module/musicPlayer.module.scss'

import { FaBackward } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaForward } from "react-icons/fa";

export default function musicPlayer() {
    return (
        <div className={style.tester}>
<div className={style.Outer}>

        <div className={style.container1}>
            <div className={style.cont1Img}>
                <img src="https://jepbe.github.io/img/DJBASS_F--K_DJ.jpg" alt="Bass Logo" />
            </div>
            <div className={style.cont1Info}>
                <p className={style.cont1T1}>DJ BASStian mixtape</p>
                <p className={style.cont1T2}>Fuck the Dj "Episode 1"</p>
            </div>
        </div>
        <div className={style.container2}>
            <button id='prev' className={style.actionBtn}><FaBackward/></button>
            <button id='play' className={`${style.actionBtn} ${style.actionBtnBig}`}><FaPlay/></button>
            <button id='next' className={style.actionBtn}><FaForward/></button>
        </div>
        <div className={style.container3}>
           
        </div>


    </div>
</div>

    )
}