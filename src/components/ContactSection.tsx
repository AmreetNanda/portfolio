import { MapPin, Mail, Linkedin, Github, Send } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const FORMSPREE_ID = 'mbgdjrrn';
const EMAIL = 'amreetnanda321@gmail.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/amreet-nanda-5a2507241/';
const GITHUB_URL = 'https://github.com/AmreetNanda';

const inputClass =
  'w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary';

const ContactSection = () => {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);

  return (
    <section id="contact" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title mb-6">Contact</h2>

        <p className="text-muted-foreground mb-8 max-w-6xl">
          Open to AI/ML Engineer and GenAI Engineer roles in Bengaluru. If you are building
          agentic AI, RAG or LLM systems, I would like to hear from you.
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="contact-info-box">
              <div className="info-icon">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-foreground font-semibold mb-1">Location:</h4>
                <p className="text-muted-foreground">Bengaluru, India</p>
              </div>
            </div>

            <div className="contact-info-box">
              <div className="info-icon">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-foreground font-semibold mb-1">Email:</h4>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {EMAIL}
                </a>
              </div>
            </div>

            <div className="contact-info-box">
              <div className="info-icon">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-foreground font-semibold mb-1">LinkedIn:</h4>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  amreet-nanda
                </a>
              </div>
            </div>

            <div className="contact-info-box">
              <div className="info-icon">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-foreground font-semibold mb-1">GitHub:</h4>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  AmreetNanda
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {state.succeeded ? (
              <div className="rounded-lg border border-border bg-secondary/30 p-8 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-2">Message sent</h3>
                <p className="text-muted-foreground">
                  Thank you for your message. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className={inputClass}
                    />
                    <ValidationError
                      field="name"
                      prefix="Name"
                      errors={state.errors}
                      className="text-sm text-destructive mt-1"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className={inputClass}
                    />
                    <ValidationError
                      field="email"
                      prefix="Email"
                      errors={state.errors}
                      className="text-sm text-destructive mt-1"
                    />
                  </div>
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className={inputClass}
                />

                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={6}
                    required
                    className={`${inputClass} resize-none`}
                  />
                  <ValidationError
                    field="message"
                    prefix="Message"
                    errors={state.errors}
                    className="text-sm text-destructive mt-1"
                  />
                </div>

                <ValidationError errors={state.errors} className="text-sm text-destructive" />

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
