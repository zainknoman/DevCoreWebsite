// src/pages/Index.tsx
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart, Code, Layers } from "lucide-react";

const Index = () => {
  return (
    <div className="space-y-24 pb-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
          Build, Launch, and Scale Your Digital Vision
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
          We are a team of expert developers crafting exceptional websites and
          applications tailored to your unique business needs.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" asChild>
            <NavLink to="/contact">Get a Quote</NavLink>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <NavLink to="/services">Our Services</NavLink>
          </Button>
        </div>
      </section>

      {/* Featured Product Section */}
      <section id="product" className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card p-8 rounded-lg border border-border flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-foreground">
              Introducing Our Queue Management App
            </h2>
            <p className="mt-4 text-muted-foreground">
              Revolutionize your customer flow and eliminate waiting times. Our
              new queue management application is designed for efficiency,
              providing a seamless experience for both your business and your
              customers.
            </p>
            <ul className="mt-6 space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <ArrowRight className="text-primary h-5 w-5" /> Join queues
                remotely or book appointments.
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="text-primary h-5 w-5" /> Real-time
                notifications and updates.
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="text-primary h-5 w-5" /> Powerful
                dashboard for business analytics.
              </li>
            </ul>
            <Button className="mt-6" asChild>
              <NavLink to="/products">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </NavLink>
            </Button>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
              alt="Queue Management App"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-foreground">
          Our Core Services
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          From concept to deployment, we provide comprehensive development
          services.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="text-left">
            <CardHeader>
              <Code className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Custom Web Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Bespoke websites built with the latest technologies to deliver
                performance and scalability.
              </p>
            </CardContent>
          </Card>
          <Card className="text-left">
            <CardHeader>
              <Layers className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Mobile App Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Engaging and intuitive mobile applications for iOS and Android
                that your users will love.
              </p>
            </CardContent>
          </Card>
          <Card className="text-left">
            <CardHeader>
              <BarChart className="h-10 w-10 text-primary mb-4" />
              <CardTitle>UI/UX & Consulting</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                User-centric design and expert consulting to ensure your product
                is a success.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-foreground">
          Trusted by Innovators
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          We're proud to have partnered with fantastic clients.
        </p>
        <div className="mt-12">
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg italic text-foreground">
                "Working with DevCore was a game-changer for our business. Their
                expertise and dedication are second to none."
              </p>
              <p className="mt-4 font-semibold">- CEO, Placeholder Inc.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
