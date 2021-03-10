import Head from "next/head"

export default function Home({ user }) {
  return (
    <div>
      <Head>
        <title>Talha Abbasi</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <meta
          name="keywords"
          content="web development, programming, portfolio, developer"
        />
      </Head>
    </div>
  )
}

export const getStaticProps = async () => {
  const response = await fetch(
    `https://api.github.com/users/${process.env.GITHUB_USERNAME}`
  )
  const user = await response.json()

  return {
    props: {
      user,
    },
  }
}
