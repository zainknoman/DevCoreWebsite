// src / pages / Contact.tsx;
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Get in Touch
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Have a project in mind or just want to say hello? We'd love to hear
          from you.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div className="flex items-center gap-4">
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
          </div>
          <div className="flex items-center gap-4">
            <Phone className="h-8 w-8 text-primary" />
            <div>
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="h-8 w-8 text-primary" />
            <div>
              <h3 className="text-xl font-semibold">Location</h3>
              <p className="text-muted-foreground">
                Remote-First Company, Global Reach
              </p>
            </div>
          </div>
        </div>

        <div>
          <form className="space-y-6 bg-card p-8 rounded-lg border border-border">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="Your Name" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" type="text" placeholder="Project Inquiry" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your project..."
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
