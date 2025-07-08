
import { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { toast } from "@/components/ui/sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast.success("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-secondary transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-modern-text dark:text-foreground mb-6">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-dark-grey dark:text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas or opportunities and learning new things.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-modern-text dark:text-foreground mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <a 
                href="https://www.linkedin.com/in/santhosh-kumar-skprofile/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-card rounded-lg shadow-sm border border-border hover:shadow-md transition-all group"
              >
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                  <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">LinkedIn</p>
                  <p className="text-dark-grey dark:text-muted-foreground">Connect with me</p>
                </div>
              </a>
              
              <a 
                href="https://github.com/santygit1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-card rounded-lg shadow-sm border border-border hover:shadow-md transition-all group"
              >
                <div className="bg-muted p-3 rounded-full mr-4 group-hover:bg-muted/80 transition-colors">
                  <Github className="w-6 h-6 text-dark-grey dark:text-muted-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">GitHub</p>
                  <p className="text-dark-grey dark:text-muted-foreground">View my projects</p>
                </div>
              </a>
              
              <a 
                href="mailto:santhosh2027ug@buildwithivb.com"
                className="flex items-center p-4 bg-card rounded-lg shadow-sm border border-border hover:shadow-md transition-all group"
              >
                <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full mr-4 group-hover:bg-red-200 dark:group-hover:bg-red-900/50 transition-colors">
                  <Mail className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">Email</p>
                  <p className="text-dark-grey dark:text-muted-foreground">santhosh2027ug@buildwithivb.com</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border transition-colors">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring bg-background text-foreground transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring bg-background text-foreground transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring bg-background text-foreground transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-accent-foreground font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 flex justify-center items-center gap-2 disabled:opacity-50 disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin w-5 h-5 border-2 border-accent-foreground border-t-transparent rounded-full"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
