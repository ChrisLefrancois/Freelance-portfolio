// src/components/Contact.jsx
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="mt-4 text-center">5. Contact</h2>

        <div className="projects mt-5">
          <div className="contacts">
            <div className="get-in-touch mx-2">
              <h5>Get in Touch</h5>

              <div className="contact-box">
                <i className="fa-regular fa-envelope mail-size"></i>
                <div className="email-me">
                  <a href="mailto:chris.lefrancois1@gmail.com">
                    chris.lefrancois1@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-box mt-3">
                <p>My Social Networks</p>
                <div className="social-network">
                  <a
                    href="https://github.com/ChrisLefrancois"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/christopherlefrancois/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-area">
  <h5 className="text-center mt-2">Contact Form</h5>

  <form
    action="https://formspree.io/f/xnjvbbov"
    method="POST"
    className="simple_form contact"
  >
    <div className="form-row">
      <div className="input string required">
        <input
          className="string required"
          type="text"
          name="name"
          placeholder="Name"
          required
        />
      </div>

      <div className="input email required">
        <input
          className="email required"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
      </div>
    </div>

    <div className="input text required">
      <textarea
        className="text required"
        name="message"
        placeholder="Write your email..."
        required
      />
    </div>

    <button type="submit" className="btn button-submit">
      Send
    </button>
  </form>
</div>


          </div>
        </div>
      </div>
    </section>
  );
}
