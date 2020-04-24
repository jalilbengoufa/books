import Head from 'next/head'
import Grid from '@material-ui/core/Grid';
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
     
      <Grid container >
        <Grid container justify="center" item xs={12}>
        <h1>My books</h1>
        </Grid>
        <Grid container justify="center" item xs={3}>
          <Link href="/books/book-1"><a><img src="https://is3-ssl.mzstatic.com/image/thumb/Publication3/v4/64/b6/cb/64b6cb46-d679-0ef2-1923-30a3064fb92d/MalyPrinc_cover_fr.jpg/268x0w.jpg"/></a></Link>
        </Grid>
        <Grid container justify="center" item xs={3}>
          <Link href="/books/book-1"><a><img src="https://is3-ssl.mzstatic.com/image/thumb/Publication3/v4/64/b6/cb/64b6cb46-d679-0ef2-1923-30a3064fb92d/MalyPrinc_cover_fr.jpg/268x0w.jpg"/></a></Link>
        </Grid>
        <Grid container justify="center" item xs={3}>
          <Link href="/books/book-1"><a><img src="https://is3-ssl.mzstatic.com/image/thumb/Publication3/v4/64/b6/cb/64b6cb46-d679-0ef2-1923-30a3064fb92d/MalyPrinc_cover_fr.jpg/268x0w.jpg"/></a></Link>
        </Grid>
        <Grid container justify="center" item xs={3}>
          <Link href="/books/book-1"><a><img src="https://is3-ssl.mzstatic.com/image/thumb/Publication3/v4/64/b6/cb/64b6cb46-d679-0ef2-1923-30a3064fb92d/MalyPrinc_cover_fr.jpg/268x0w.jpg"/></a></Link>
        </Grid>
      </Grid>
      </main>



      <style jsx>{`
        
      `}</style>
    </div>
  )
}
