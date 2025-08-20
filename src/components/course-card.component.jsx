import { Video } from 'lucide-react'

export default function CourseCard({
  link,
  title,
  description,
  image,
  isLive,
}) {
  if (isLive) {
    return (
      <li>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Video />
        </a>

        <div>
          <img src={image} alt={title} loading="lazy" />
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </li>
    )
  }
  return (
    <li>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Video />
      </a>
      <img src={image} alt={title} loading="lazy" />
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </li>
  )
}
