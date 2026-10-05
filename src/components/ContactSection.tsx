import { useState } from 'react';
import { MapPin, Mail, Linkedin, Github, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Create a free form at https://formspree.io, then paste your form ID here (e.g. 'xyzabcde').
const FORMSPREE_ID = 'https://formspree.io/f/mbgdjrrn';

const EMAIL = 'amreetnanda321@gmail.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/amreet-nanda-5a2507241/';
const GITHUB_URL = 'https://github.com/AmreetNanda';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Request failed');

      toast({
        title: 'Message sent',
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      toast({
        title: 'Could not send message',
        description: `Please email me directly at ${EMAIL}.`,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
