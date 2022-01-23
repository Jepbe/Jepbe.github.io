import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/module/Home.module.scss'
import Header from '../components/header'
import MusicPlayer from '../components/musicPlayer'
import style from '../styles/module/main.module.scss'

export default function Home() {
  return (
      <div>
        {/*  Header component */}
        <Header/>
        
      
      <div className={style.mainContent}>
        <div className={style.box1}>
            <h1>Dj til din næste fest!</h1>
            <div className={style.box1Buttons}>
              <button>Køb mertch</button>
              <button>Book</button>
            </div>
        </div>
        <div className={style.box2}></div>

      </div>


      {/* Music player component */}
        <MusicPlayer/>
      </div>
  )
}
