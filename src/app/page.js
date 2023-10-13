
import styles from './page.module.css'
import Form from './components/Form/Form'
import GradientComp from './components/GradientComp/GradientComp'

// import spain from '../../public/flags/spain.png'


export default function Home() {
  return (
    <main className={styles.wrapper}>

      {/* <GradientComp colors='germany' n={1} text={"nemački"}/>
      <GradientComp colors='england' n={3} text={"engleski"}/>
      <GradientComp colors='spain' n={2} text={"španski"}/> */}
      <Form/>
    </main>
  )
}
