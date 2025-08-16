import {
  BookOpen,
  Calendar1,
  Globe,
  HandFist,
  Users,
  UsersRound,
  Video,
} from 'lucide-react'

export default function About() {
  return (
    <div className="about-page">
      <h1>About MMT</h1>
      <p>
        MMT Community is a space where learning, sharing, and collaboration come
        together. We believe knowledge should be free, accessible, and enjoyable
        for everyone. Our community focuses on technology and programming,
        offering free, high-quality courses and a safe environment where
        learners and creators can grow together.
      </p>
      <h2>Our Story</h2>
      <p>
        The idea of MMT Community started long before its official launch on 14
        July 2024. The first version of MMT was a youth education initiative for
        high school students. While it faced challenges and lacked resources, it
        proved one thing: people are hungry for knowledge when it is shared
        honestly and freely. From this lesson, the current MMT Community was
        born. What began as a small circle of learners and mentors grew into a
        movement dedicated to breaking the cycle of low-value, paid courses and
        replacing them with free resources, genuine mentorship, and—most
        importantly—a supportive community.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is simple yet ambitious:
        <br />
        1. To provide free, high-quality education in technology and programming
        for Arabic speakers everywhere.
        <br />
        2. To build a safe and open community where anyone can ask questions,
        share ideas, and collaborate without fear of judgment.
        <br />
        3. To fight misinformation and shallow teaching by localizing real
        knowledge and making it accessible both online and, in the future,
        through on-site courses and events.
        <br />
        4. To inspire learners to believe that nothing is impossible when
        knowledge, community, and persistence come together.
      </p>

      <h2>Core Values</h2>
      <div className="values-container">
        <div className="box">
          <UsersRound />
          <h3>Community First</h3>
          <p>
            Learning isn’t a solo journey—we grow stronger by sharing,
            supporting, and building together.
          </p>
        </div>
        <div className="box">
          <BookOpen />
          <h3>Open Knowledge</h3>
          <p>
            We believe education should be free, accessible, and empowering for
            everyone.
          </p>
        </div>
        <div className="box">
          {/* <BicepsFlexed /> */}
          <HandFist />
          <h3>Empowerment</h3>
          <p>
            We believe in helping people achieve goals they once thought were
            impossible, by giving them tools, guidance, and belief in
            themselves.
          </p>
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
            <h3>+1K YouTube Subscriber & +900 Community Member</h3>
            <p>3 Aug 2025</p>
          </div>
        </div>
        <div className="milestone">
          <Globe />
          <div className="milestone-details">
            <h3>Community Platform Launch</h3>
            <p>20 Aug 2025</p>
          </div>
        </div>
      </div>
    </div>
  )
}
