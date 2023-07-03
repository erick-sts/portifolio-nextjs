import styles from '../../styles/Curriculo.module.css'

export default function Curriculo() {
    return (
            <div className={styles.boxCurriculo}>
                <div className={styles.curriculo}>
                    <h2>Currículo</h2>
                    <h3>Erick Oliveira Nascimento</h3>
                    <p>
                        Casado - 25 anos <br></br> erick.sts.eo@outlook.com <br></br> erick.sts.eo@gmail.com
                    </p>
                    <h3>Formação</h3>
                    <p>
                        Técnico em Informática <br></br> Etec Fernando Prestes – Sorocaba - SP --
                        06/2014 - 12/2015 <br></br>
                        <br></br> Técnico em Contabilidade <br></br> Etec de Cotia – Cotia - SP --
                        02/2017 - 06/2018 <br></br>
                        <br></br> Desenvolvimento de Software <br></br> 07/2022 - (Cursando)
                    </p>
                    <h3>Idiomas</h3>
                    <p>Inglês - Básico <br></br> Francês - Básico</p>
                </div>
            </div>
    )
}