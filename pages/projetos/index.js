import styles from '../../styles/Projetos.module.css'

export default function Projetos(){
    return(
        <>
            <div className={styles.boxProjetos}>
                <div className={styles.projetos}>
                    <p>Uma aba foi aberta no repositorio GitHub, caso a aba não tenha aberto <a target='blanc' href='https://github.com/erick-sts?tab=repositories'>clique aqui!</a> </p>
                </div>
            </div>
        </>
    )
}