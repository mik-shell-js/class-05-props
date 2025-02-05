import Citation from './Citation'
import Card from './ui/Card'

export default function Gallery() {
  return (
    <div className="gallery">
      <Card source="/images/asteroid.webp" altText={"Asteroid"} citation={<Citation/>}/>
      <Card source="/images/black-hole.webp" altText={"Black Hole"} citation={<Citation/>}/>
      <Card source="/images/cloud-nebulae.webp" altText={"Cloud Nebulae"} citation={<Citation/>}/>
      <Card source="/images/distant-space.webp" altText={"Distant Space"} citation={<Citation/>}/>
      <Card source="/images/galaxy-collision.webp" altText={"Galaxy Collision"} citation={<Citation/>}/>
      <Card source="/images/galaxy.webp" altText={"Galaxy"} citation={<Citation/>}/>
      <Card source="/images/moon.webp" altText={"Moon"} citation={<Citation/>}/>
      <Card source="/images/pulsar.webp" altText={"Pulsar"} citation={<Citation/>}/>
      <Card source="/images/star-death.webp" altText={"Star Death"} citation={<Citation/>}/>
      <Card source="/images/sun.webp" altText={"Sun"} citation={<Citation/>}/>
    </div>
  )
}
