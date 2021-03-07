import Head from "next/head"

export default function Home({user}) {
  return (
    <div>
      <Head>
        <title>Talha's Portfolio</title>
        <meta
          name="keywords"
          content="web development, programming, portfolio, developer"
        />
      </Head>
    </div>
  )
}

export const getStaticProps = async () => {
  const response = await fetch(`https://api.github.com/users/${process.env.GITHUB_USERNAME}`)
  const user = await response.json()

  return {
    props: {
      user
    }
  }
}