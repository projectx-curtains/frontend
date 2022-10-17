import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import TagCloud from '../src/common/catalog/components/TagCloud'
import { sampleDataTags } from '../src/common/catalog/components/TagCloud/sampleDataTags'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <TagCloud tagsData={sampleDataTags} />

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
