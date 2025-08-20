import CourseCard from '../components/course-card.component'
import { completedCourses, liveCourses, upcomingCourses } from '../data/courses'
import '../styles/pages/timeline.style.css'

export default function Timeline() {
  return (
    <>
      <h1
        style={{
          marginBlock: '3rem 2rem',
          fontSize: '3rem',
          color: 'gold',
          margin: 0,
        }}
      >
        Our Current Plans
      </h1>

      <div className="live-plans">
        <h2>Live</h2>
        <ul>
          {liveCourses.map((course, index) => (
            <CourseCard
              key={index}
              link={course.link}
              title={course.title}
              description={course.description}
              image={course.image}
              isLive={true}
            />
          ))}
        </ul>
      </div>
      <div className="upcoming-plans">
        <h2>Upcoming</h2>
        <ul>
          {upcomingCourses.map((course, index) => (
            <CourseCard
              key={index}
              link={course.link}
              title={course.title}
              description={course.description}
              image={course.image}
            />
          ))}
        </ul>
      </div>
      <div className="completed-plans">
        <h2>Completed</h2>
        <ul>
          {completedCourses.map((course, index) => (
            <CourseCard
              key={index}
              link={course.link}
              title={course.title}
              description={course.description}
              image={course.image}
            />
          ))}
        </ul>
      </div>
    </>
  )
}
