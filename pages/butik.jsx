import Header from '../components/header'
import style from '../styles/module/butik.module.scss'

export default function butik() {
    return (
    <div className={style.Outer}>
        <Header/>
        <h1 className={style.topText}>Butik</h1>
        <div className={style.TopContainer}></div>
        
        <div className={style.container1}>
            <div className={style.item1}><img src="https://jepbe.github.io/img/basHvid.png"/></div>
            <div className={style.item2} id='container2'>test 2</div>
            <div className={style.item3}>test 3</div>
            <div className={style.item3}>test 3</div>
            <div className={style.item3}>test 3</div>
            <div className={style.item3}>test 3</div>
            <div className={style.item3}>test 3</div>
            <div className={style.item3}>test 3</div>
        </div>
    
    <script>

    </script>
    </div>
    )
}
