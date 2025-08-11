import {
  BookOpen,
  Calendar1,
  Globe,
  Heart,
  Users,
  UsersRound,
  Video,
} from 'lucide-react'

export default function About() {
  return (
    <div className="about-page">
      <h1>About MMT</h1>
      <p>
        MMT is a learning community built for dreamers, doers, and makers. We
        believe that knowledge should be practical, accessible, and fun. Our
        members explore skills in technology, creativity, and personal growth
        through collaborative learning, real projects, and open discussions.
        Whether you’re taking your first steps into coding, improving your
        communication skills, or sharing your expertise, MMT is the space where
        curiosity meets action.
      </p>
      <h2>Our Story</h2>
      <p>
        It all started with a small group of friends who loved learning and
        helping others learn. We saw a gap: so many people wanted to grow but
        didn’t have a supportive, interactive environment that mixed tech
        skills, soft skills, and community spirit. So, we began — meeting
        online, exchanging knowledge, and creating challenges for ourselves.
        Over time, more people joined, from different backgrounds and cities,
        each bringing new ideas and energy. What started as casual study
        sessions became a movement — a place where everyone can learn something
        new, teach something they know, and feel part of something bigger.
        Today, MMT runs courses, workshops, and events in multiple topics — from
        programming and AI to language learning and personal development — all
        while keeping the same welcoming, supportive vibe that started it all.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is simple: Make learning exciting – Break the idea that
        learning is boring or limited to classrooms. Empower everyone – Provide
        tools, guidance, and a community for anyone to grow their skills and
        confidence. Build together – Encourage collaboration so learning becomes
        a shared adventure, not a solo struggle. We’re here to inspire action,
        encourage creativity, and make personal and professional growth
        something you actually look forward to.
      </p>

      <h2>Core Values</h2>
      <div className="values-container">
        <div className="box">
          <UsersRound />
          <h3>Community</h3>
          <p>We believe in the power of community and collaboration.</p>
        </div>
        <div className="box">
          <BookOpen />
          <h3>Learning</h3>
          <p>We believe in the power of community and collaboration.</p>
        </div>
        <div className="box">
          <Heart />
          <h3>Support</h3>
          <p>We believe in the power of community and collaboration.</p>
        </div>
      </div>
      <h2>Milestones</h2>
      <div className="milestones-container">
        <div className="milestone">
          <Calendar1 />
          <div className="milestone-details">
            <h3>Launched MMT</h3>
            <p>14 Jul 2024</p>
          </div>
        </div>
        <div className="milestone">
          <Video />
          <div className="milestone-details">
            <h3>First Online Course</h3>
            <p>3 Aug 2024</p>
          </div>
        </div>
        <div className="milestone">
          <Users />
          <div className="milestone-details">
            <h3>1K YouTube Subscriber & 900 Communiy Member</h3>
            <p>3 Aug 2025</p>
          </div>
        </div>
        <div className="milestone">
          <Globe />
          <div className="milestone-details">
            <h3>New Learning Platform</h3>
            <p>15 Aug 2025</p>
          </div>
        </div>
      </div>
    </div>
  )
}
