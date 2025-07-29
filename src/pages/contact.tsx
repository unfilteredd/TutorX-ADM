import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import contactService from '@/services/contactService';

const ContactPage: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await contactService.submitContact(formData);
      
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
    } catch (error: any) {
      toast({
        title: "Failed to send message",
        description: error.response?.data?.message || "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-muted/30 py-16 mt-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Get in <span className="bg-hero-gradient bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We're here to help. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-card/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/30 shadow-elegant">
              <div className="grid md:grid-cols-2">
                {/* Contact Form */}
                <div className="p-8 md:p-10">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <Input 
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input 
                        id="phone"
                        name="phone"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Your Message
                      </label>
                      <Textarea 
                        id="message"
                        name="message"
                        placeholder="Write your message here..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full min-h-[120px]"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2">
                      Submit Message
                    </Button>
                  </form>
                </div>
                
                {/* Contact Information */}
                <div className="bg-card-gradient p-8 md:p-10 relative overflow-hidden">
                  {/* Background decorative elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                  
                  <div className="relative">
                    <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
                    
                    <div className="space-y-8">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-glass-bg backdrop-blur-sm border border-glass-border rounded-full flex items-center justify-center mt-0.5">
                          <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Email</p>
                          <a href="mailto:info@admtutorx.com" className="text-foreground hover:text-primary transition-colors text-lg">
                            info@admtutorx.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-glass-bg backdrop-blur-sm border border-glass-border rounded-full flex items-center justify-center mt-0.5">
                          <Phone className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Phone</p>
                          <a href="tel:+917667078323" className="text-foreground hover:text-primary transition-colors text-lg">
                            +91 76670 78323
                          </a>
                          <br></br>
                          <a href="tel:+917970802199" className="text-foreground hover:text-primary transition-colors text-lg">
                            +91 79708 02199
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-glass-bg backdrop-blur-sm border border-glass-border rounded-full flex items-center justify-center mt-0.5">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Address</p>
                          <p className="text-foreground text-lg">India</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage; 