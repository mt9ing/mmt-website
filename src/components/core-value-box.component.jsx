export default function ValueBox({ icon, title, description }) {
  return (
    <div className="box">
      {icon}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
