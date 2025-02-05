export default function Card({source, altText, citation}) {
  return (
    <div className="card">
      <img src={source} alt={altText} />
      {citation}
    </div>
  )
}
