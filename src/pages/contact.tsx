// src/pages/Contact.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion, Variants } from "framer-motion"; // Import motion and Variants
import { useInView } from "react-intersection-observer"; // Import useInView

const Contact = () => {
  // Variants for the initial "Get in Touch" heading and description
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const descriptionVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  // useInView hook for the main content grid (contact info & form)
  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 20% of the element is in view
  });

  // Variants for the left side (Contact Info) - slides from left
  const contactInfoVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  // Variants for the right side (Contact Form) - slides from right
  const contactFormVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut", delay: 0.1 } }, // Slightly delayed from info
  };

  // Variants for individual contact items (Mail, Phone, MapPin)
  const contactItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // Variants for form elements (staggered)
  const formElementContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger delay for each input/textarea/button
      },
    },
  };

  const formItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        {/* Animated heading */}
        <motion.h1
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-extrabold tracking-tight"
        >
          Get in Touch
        </motion.h1>
        {/* Animated description */}
        <motion.p
          variants={descriptionVariants}
          initial="hidden"
          animate="visible"
          className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground"
        >
          Have a project in mind or just want to say hello? We'd love to hear
          from you.
        </motion.p>
      </div>

      {/* Main content grid with scroll-triggered animations */}
      <div className="mt-16 grid md:grid-cols-2 gap-16" ref={contentRef}>
        {/* Contact Information Section - Animates from left */}
        <motion.div
          variants={contactInfoVariants}
          initial="hidden"
          animate={contentInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          <motion.div variants={contactItemVariants} className="flex items-center gap-4">
            <Mail className="h-8 w-8 text-primary" />
            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <a
                href="mailto:contact@devcore.com"
                className="text-muted-foreground hover:text-primary"
              >
                contact@devcore.com
              </a>
            </div>
          </motion.div>
          <motion.div variants={contactItemVariants} className="flex items-center gap-4">
            <Phone className="h-8 w-8 text-primary" />
            <div>
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>
          </motion.div>
          <motion.div variants={contactItemVariants} className="flex items-center gap-4">
            <MapPin className="h-8 w-8 text-primary" />
            <div>
              <h3 className="text-xl font-semibold">Location</h3>
              <p className="text-muted-foreground">
                Remote-First Company, Global Reach
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form Section - Animates from right */}
        <motion.div
          variants={contactFormVariants}
          initial="hidden"
          animate={contentInView ? "visible" : "hidden"}
        >
          <motion.form
            variants={formElementContainerVariants} // Apply container variant to the form
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"} // Animate children when form is in view
            className="space-y-6 bg-card p-8 rounded-lg border border-border"
          >
            <motion.div variants={formItemVariants}>
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="Your Name" />
            </motion.div>
            <motion.div variants={formItemVariants}>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </motion.div>
            <motion.div variants={formItemVariants}>
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" type="text" placeholder="Project Inquiry" />
            </motion.div>
            <motion.div variants={formItemVariants}>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your project..."
              />
            </motion.div>
            <motion.div variants={formItemVariants}>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;