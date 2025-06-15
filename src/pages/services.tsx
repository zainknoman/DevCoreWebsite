// src / pages / Services.tsx;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code,
  Layers,
  BarChart,
  ShoppingCart,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Web Development",
    description:
      "We build high-performance, scalable, and secure web applications tailored to your specific business requirements. From dynamic single-page applications to complex enterprise platforms, we've got you covered.",
  },
  {
    icon: Layers,
    title: "Mobile App Development",
    description:
      "Our team creates intuitive and engaging native and cross-platform mobile apps for both iOS and Android. We focus on user experience to ensure your app is not only functional but also delightful to use.",
  },
  {
    icon: BarChart,
    title: "UI/UX Design",
    description:
      "Good design is good business. We provide user-centric UI/UX design services, creating interfaces that are beautiful, easy to navigate, and conversion-optimized. We conduct thorough research to understand your users' needs.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description:
      "We develop robust e-commerce platforms that provide a seamless shopping experience for your customers. Our solutions include everything from product catalogs and payment gateways to inventory management.",
  },
  {
    icon: MessageCircle,
    title: "Technology Consulting",
    description:
      "Leverage our expertise to make informed technology decisions. We offer consulting services to help you with architectural design, technology stack selection, and overall digital strategy.",
  },
];

const Services = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Our Services
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          We offer a comprehensive suite of development services to bring your
          ideas to life.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <service.icon className="h-10 w-10 text-primary mb-4" />
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-24 bg-card p-8 rounded-lg border border-border">
        <h2 className="text-3xl font-bold text-center">
          Our Development Process
        </h2>
        <div className="mt-8 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold text-primary">1. Discover</h3>
            <p className="text-muted-foreground mt-2">
              We start by understanding your vision, goals, and requirements.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary">2. Design</h3>
            <p className="text-muted-foreground mt-2">
              We create wireframes and mockups to visualize the user experience.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary">3. Develop</h3>
            <p className="text-muted-foreground mt-2">
              Our expert team writes clean, efficient code to build your
              product.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary">4. Deploy</h3>
            <p className="text-muted-foreground mt-2">
              We handle the launch and provide ongoing support to ensure
              success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
