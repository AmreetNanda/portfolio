import { ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'AWS Machine Learning',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop',
    link: 'https://www.credly.com/badges/a79b52c6-fdbc-446d-8542-5b0284e4d389/public_url',
  },
  {
    title: 'IBM Machine Learning',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop',
    link: 'https://www.credential.net/50fbf8a7-0ed7-4e20-af73-aa7f28ac7e78',
  },
  {
    title: 'AI for Everyone',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
    link: 'https://courses.cognitiveclass.ai/certificates/e2f839eb4bd84dc2acfc9d3310c44c3f',
  },
  {
    title: 'Advanced Excel',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
    link: 'https://www.coursera.org/account/accomplishments/verify/KAPW7R4YKSEK',
  },
  {
    title: 'SQL Masterclass: SQL for Data Analytics',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop',
    link: 'https://www.udemy.com/certificate/UC-6e8cab78-0be4-4eb2-8685-cb22e01ad4be/',
  },
  {
    title: 'Python Hands-On: 46 Hours, 210 Exercises',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop',
    link: 'https://www.udemy.com/certificate/UC-1956ca79-9ae9-4c69-9d41-84129b9d49e3/',
  },
  {
    title: 'Associate Analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    link: 'https://courses.edx.org/certificates/b82981a3de21420aa7b2914e52bdb82a',
  },
  {
    title: 'Developer Program - Accenture',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=250&fit=crop',
    link: '#',
  },
  {
    title: 'Data Science Webinar',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=250&fit=crop',
    link: '#',
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 px-4 md:px-8 bg-section-alt">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title mb-12">Certifications</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="portfolio-item bg-secondary rounded-lg overflow-hidden">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="text-foreground font-medium text-sm mb-3">{cert.title}</h4>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary text-sm hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
