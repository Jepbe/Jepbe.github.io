import style from '../styles/module/header.module.scss'
import { FaInstagram } from 'react-icons/fa';
import { FaSoundcloud } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';

export default function header() {
    return (
        <header className={style.header}>
            <button className={style.burger}><FaBars/></button>
            <nav className={style.nav}>
            <img src="https://jepbe.github.io/img/BassLogo1 Sort 512x512.png" alt="Bassdreng logo" className={style.bassNavLogo}/>
                <ul className={`${style.navList} ${style.open}`}>
                    <li><a href="/">Hjem</a></li>
                    <li><a href="https://jepbe.github.io/butik">Butik</a></li>
                    <li>Galleri</li>
                    <li>Kontakt</li>
                </ul>
                <ul className={style.navlistSoMe}>
                    <button><a target="_blank" href="https://www.instagram.com/dj_basstian/"><FaInstagram/></a></button>
                    <button><a target="_blank" href="https://soundcloud.com/bastian-nielsen-360664195"><FaSoundcloud/></a></button>
                    <button><a target="_blank" href="https://www.youtube.com/channel/UCFjgyN5rCfz8SNGd56Lyp3Q"><FaYoutube/></a></button>
                    <button><a target="_blank" href="https://www.tiktok.com/@dj_basstian"><FaTiktok/></a></button>
                </ul>
            </nav>
        </header>
    )
}