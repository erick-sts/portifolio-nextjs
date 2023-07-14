import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css' 

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Portifólio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicondev.ico" />
      </Head>
      <div className={styles.boxResumo}>
        <div className={styles.resumo}>
          <h2>Bem vindo!</h2>
          <p>
            Este é meu portifólio digital, nele você vai encontrar meu currículo na opção sobre, e em projetos, será redirecionado para o meu diretorio do GitHub.
          </p>
          <p>
            Sou Erick Oliveira Nascimento, tenho 25 anos, estudante de Desenvolvimento de Software Multiplataforma pela Fatec. Iniciei os estudos na Fatec de Cotia, no entanto estou em processo de transferência para a Fatec recem inaugurada de Votorantim.
          </p>
          <p>
            Estou em busca de um estágio em desenvolvimento, possuo conhecimentos, básicos nas tecnologias, HTML, CSS, JavaScript, React, NextJs, Jquery e JSX, todas essas utilizadas na criação deste site. Além destas já estudei rasamente Python, Java, C# e MySQL.
          </p>
        </div>
      </div>
    </>
  )
}
