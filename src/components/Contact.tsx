
import { useState } from 'react';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';
import { toast } from "@/components/ui/sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you for your message! I'll get back to you soon.", {
        description: "Your message has been received successfully."
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-warmCoral mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out to me directly.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-modernBlue text-white p-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-blue-400 bg-opacity-30 p-2.5 rounded-full mr-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm opacity-75">Phone</p>
                    <p className="font-medium">+91 730-557-0956</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-blue-400 bg-opacity-30 p-2.5 rounded-full mr-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm opacity-75">Email</p>
                    <p className="font-medium">santy.santhoshkumar5002@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-blue-400 bg-opacity-30 p-2.5 rounded-full mr-4">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm opacity-75">LinkedIn</p>
                    <p className="font-medium">Santhosh Kumar</p>
                  </div>
                </div>
              </div>
              
              <div className="w-32 h-32 bg-blue-400 bg-opacity-20 rounded-full absolute -bottom-16 -right-16"></div>
              <div className="w-24 h-24 bg-blue-400 bg-opacity-20 rounded-full absolute -top-12 -left-12"></div>
            </div>
            
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
              <p className="text-gray-600 mb-6">
                I'm always open to discussing new opportunities, projects, or partnerships.
                Reach out and I'll respond as soon as possible.
              </p>
              
              <div className="flex items-center justify-center space-x-6 pt-4 border-t border-gray-100">
                <a href="mailto:santy.santhoshkumar5002@gmail.com" className="social-icon">
                  <Mail className="w-6 h-6" />
                </a>
                <a href="tel:+917305570956" className="social-icon">
                  <Phone className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/santhosh-kumar" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-modernBlue focus:border-modernBlue transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-modernBlue focus:border-modernBlue transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-modernBlue focus:border-modernBlue transition-all"
                  placeholder="How can I help you?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-modernBlue focus:border-modernBlue transition-all resize-none"
                  placeholder="I'd like to discuss..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-modernBlue hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all flex justify-center items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
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

export default Contact;
