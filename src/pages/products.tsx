// src/pages/Products.tsx
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { NavLink } from "react-router-dom";

const mvpFeatures = [
  "Search for service providers",
  "Join a live queue or book future appointments",
  "Real-time SMS/email notifications",
  "Provider dashboard with basic analytics",
  "Easy cancellation and rescheduling system",
  "Secure admin panel for management",
];

const Products = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            The Queue Management System
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A powerful, intuitive application designed to eliminate waiting
            lines and enhance customer satisfaction. Perfect for clinics,
            salons, government offices, and any service-based business.
          </p>

          <div className="mt-8">
            <h2 className="text-2xl font-bold">Key Features</h2>
            <ul className="mt-4 space-y-3">
              {mvpFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <Button asChild size="lg" className="mt-8">
            <NavLink to="/contact">Request a Demo</NavLink>
          </Button>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
            alt="Dashboard mockup"
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>

      <div className="mt-24 grid md:grid-cols-2 gap-12">
        <div className="bg-card p-8 rounded-lg border border-border">
          <h3 className="text-2xl font-bold text-center">
            Benefits for Businesses
          </h3>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>✓ Increased efficiency and staff productivity.</li>
            <li>✓ Valuable insights from customer data analytics.</li>
            <li>✓ Reduced customer no-shows with automated reminders.</li>
            <li>✓ Improved overall customer satisfaction and loyalty.</li>
          </ul>
        </div>
        <div className="bg-card p-8 rounded-lg border border-border">
          <h3 className="text-2xl font-bold text-center">
            Benefits for Customers
          </h3>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>✓ No more physical waiting in lines.</li>
            <li>✓ Freedom to join queues from anywhere.</li>
            <li>✓ Transparent view of their position in the queue.</li>
            <li>✓ Convenient appointment booking and management.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Products;
