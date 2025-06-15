import { Code, Github, Linkedin, Twitter } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary/20 border-t border-border mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <NavLink to="/" className="flex items-center gap-2">
              <Code className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">DevCore</span>
            </NavLink>
            <p className="text-muted-foreground">
              Crafting digital experiences, one line of code at a time.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/about"
                  className="text-muted-foreground hover:text-primary"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="text-muted-foreground hover:text-primary"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className="text-muted-foreground hover:text-primary"
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-muted-foreground hover:text-primary"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>contact@devcore.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Online-based Company</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Github />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>
            &copy; {new Date().getFullYear()} DevCore Solutions. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
