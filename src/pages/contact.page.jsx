import { LocationEdit, Mail } from 'lucide-react'
import { SocialIcon } from 'react-social-icons'
import '../styles/pages/contact.style.css'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.elements.name.value
    const email = e.target.elements.email.value
    const subject = e.target.elements.subject.value
    const message = e.target.elements.message.value
    const mailtoLink = `mailto:mmtcommunityguide@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    )}`
    window.location.href = mailtoLink
    e.target.reset() // Reset the form after submission
  }

  // Detect theme (light/dark) using prefers-color-scheme or a custom hook/context if you have one
  const isDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches

  // Set icon colors based on theme
  const iconBgColor = isDark ? 'white' : '#222'
  const iconFgColor = isDark ? 'black' : 'white'

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>If you have any questions or feedback, feel free to reach out!</p>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={6}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="social-media">
        <h2>Connect With Us</h2>
        <p>Follow us on our social media channels for the latest updates!</p>
        <ul>
          <li>
            <SocialIcon
              url="https://www.youtube.com/@MMT-Community"
              bgColor={iconBgColor}
              fgColor={iconFgColor}
              target="_blank"
              rel="noopener noreferrer"
            />
            <p>YouTube</p>
          </li>
          <li>
            <SocialIcon
              url="https://www.facebook.com/MMTsCommunity"
              bgColor={iconBgColor}
              fgColor={iconFgColor}
              target="_blank"
              rel="noopener noreferrer"
            />
            <p>Facebook</p>
          </li>
          <li>
            <SocialIcon
              url="hhttps://www.whatsapp.com/channel/0029VakpdPzDZ4LcLHj17Z38"
              bgColor={iconBgColor}
              fgColor={iconFgColor}
              target="_blank"
              rel="noopener noreferrer"
            />
            <p>
              WhatsApp
              <br /> Channel
            </p>
          </li>
          <li>
            <SocialIcon
              url="https://github.com/mmt-community"
              bgColor={iconBgColor}
              fgColor={iconFgColor}
              target="_blank"
              rel="noopener noreferrer"
            />
            <p>GitHub</p>
          </li>
        </ul>
      </div>
      <div className="contact-info">
        <h2>Direct Contact</h2>
        <p>
          For specific inquiries, you can reach us directly via email or visit
          our office
        </p>
        <div className="dc-info">
          <a
            href="mailto:mmtcommunityguide@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail color={iconFgColor} />
          </a>
          <div>
            <h3>Email</h3>
            <p>mmtcommunityguide@gmail.com</p>
          </div>
        </div>
        <div className="dc-info">
          <a
            href="https://maps.app.goo.gl/9929daxEFMCpZGXk6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LocationEdit color={iconFgColor} />
          </a>
          <div>
            <h3>Address</h3>
            <p>Damietta 1st, Damietta, Egypt</p>
          </div>
        </div>
      </div>
    </div>
  )
}
