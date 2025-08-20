import { LocationEdit, Mail } from 'lucide-react'
import { SocialIcon } from 'react-social-icons'
import '../styles/pages/contact.style.css'

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>If you have any questions or feedback, feel free to reach out!</p>
      </div>
      <form action="mailto:mmtcommunityguide@gmail.com">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows={6} required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="social-media">
        <h2>Connect With Us</h2>
        <p>Follow us on our social media channels for the latest updates!</p>
        <ul>
          <li>
            <SocialIcon
              url="https://www.youtube.com/@MMT-Community"
              bgColor="white"
              fgColor="black"
              target="_blank"
              rel="noopener noreferrer"
            />
            <p>YouTube</p>
          </li>
          <li>
            <SocialIcon
              url="https://www.facebook.com/MMTsCommunity"
              bgColor="white"
              fgColor="black"
              target="_blank"
              rel="noopener noreferrer"
            />
            <p>Facebook</p>
          </li>
          <li>
            <SocialIcon
              url="hhttps://www.whatsapp.com/channel/0029VakpdPzDZ4LcLHj17Z38"
              bgColor="white"
              fgColor="black"
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
              bgColor="white"
              fgColor="black"
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
            <Mail />
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
            <LocationEdit />
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
