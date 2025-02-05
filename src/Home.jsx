import BusinessCard from './components/BusinessCard'
import Gallery from './components/Gallery'

export default function Home() {
  return (
    <main>
      <BusinessCard name = "Michel Adelien" email = "mha57@cornell.edu" />

      <Gallery />

      <h2>Rendered Date</h2>
      <p>{new Date().toLocaleString()}</p>
    </main>
  )
}
