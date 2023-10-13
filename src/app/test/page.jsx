import styles from './styles.module.css'
import GradientComp from '../components/GradientComp/GradientComp'
import Form from '../components/Form/Form'


//horizontal scroll

export default function Page({

}) {

    return (
        <section className={styles.section}>
            <Form/>
            <div className={styles.pinWrapSticky}>
            <h1>some text</h1>
                <div className={styles.pinWrap}>
                    <GradientComp colors='germany' n={1} text={"nemački"} />
                    <GradientComp colors='england' n={3} text={"engleski"} />
                    <GradientComp colors='spain' n={2} text={"španski"} />
                </div>
            </div>
        </section>
    )
}

