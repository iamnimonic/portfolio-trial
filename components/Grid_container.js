import styles from '../styles/Grid_container.module.css'
import Block from './Block'

export default function Grid_container() {
    return (
        <div className={styles.container}>
            <Block></Block>
            <Block></Block>
            <Block></Block>
            <Block>
                <div>This is it</div>
            </Block>
            <Block></Block>

        </div>
    )
}