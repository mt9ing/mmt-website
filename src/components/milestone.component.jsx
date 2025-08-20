export default function Milestone({ icon, title, date }) {
  return (
    <div className="milestone">
      {icon}
      <div className="milestone-details">
        <h3>{title}</h3>
        <p>{date}</p>
      </div>
    </div>
  )
}
