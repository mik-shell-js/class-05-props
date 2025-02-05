import Card from './ui/Card'

export default function Gallery() {
  return (
    <div className="gallery">
      <Card imgUri="/images/galaxy.webp" altText="an AI generated galaxy" />
      <Card imgUri="/images/moon.webp" altText="an AI generated moon" />
      <Card imgUri="/images/pulsar.webp" altText="an AI generated pulsar" />
    </div>
  )
}
