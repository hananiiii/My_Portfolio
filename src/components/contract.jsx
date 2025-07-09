import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    setIsSubmitting(true);

    // Basic validation
    if (!firstName || !email || !message) {
      setStatus('Please fill in all fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      const templateParams = {
        from_name: firstName,
        from_email: email,
        message: message
      };

      await emailjs.send(
        'service_v8v152u', // Your EmailJS Service ID
        'template_xalqkv8', // Your EmailJS Template ID
        templateParams,
        'UT5i_PfIZKZMFKxKU' // Your EmailJS Public Key
      );

      setStatus('Message sent successfully!');
      setFirstName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
      console.error('EmailJS error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contacts = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'E-mail',
      text: 'hananelachoub03@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone number',
      text: '+213 553768349'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: 'LinkedIn',
      text: 'LACHOUB Hanane',
      link: 'https://www.linkedin.com/in/lachoub-hanane-8a524a28a/'
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: 'GitHub',
      text: 'hananiiii',
      link: 'https://github.com/hananiiii'
    }
  ];

  return (
    <section id="contact" className="py-12 font-custom bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-title_color text-center mb-16 animate-fade-in">
          Contact Me
        </h1>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info Card */}
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200 animate-fade-in-up">
            <h2 className="text-2xl font-semibold text-title_color mb-6">
              Get in Touch
            </h2>
            <div className="grid sm:grid-cols-1 grid-cols-1 gap-6">
              {contacts.map((contact, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  <span className="flex items-center justify-center w-12 h-12 bg-yelow/10 rounded-full text-yelow">
                    {contact.icon}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-title_color">
                      {contact.title}
                    </h3>
                    {contact.link ? (
                      <a
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-title_color/60 hover:text-yelow hover:underline transition-colors duration-300"
                      >
                        {contact.text}
                      </a>
                    ) : (
                      <p className="text-sm text-title_color/60">
                        {contact.text}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200 animate-fade-in-up animation-delay-200">
            <h2 className="text-2xl font-semibold text-title_color mb-6">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label
                  htmlFor="firstName"
                  className="text-sm font-medium text-title_color"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Your name"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yelow focus:border-yelow transition-all duration-300"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-title_color"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yelow focus:border-yelow transition-all duration-300"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-title_color"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yelow focus:border-yelow transition-all duration-300 h-32 resize-none"
                ></textarea>
              </div>

              {status && (
                <p
                  className={`text-sm p-3 rounded-md border ${
                    status.includes('successfully')
                      ? 'text-green-600 border-green-200 bg-green-50'
                      : 'text-red-600 border-red-200 bg-red-50'
                  } text-center animate-fade-in`}
                >
                  {status}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-4 py-3 rounded-md text-white font-medium bg-gradient-to-r from-yelow to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:-translate-y-1 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;