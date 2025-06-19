// src/pages/Index.tsx
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart, Code, Layers, CheckCircle } from "lucide-react"; // Added CheckCircle for features
import { motion, Variants, Transition } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react"; // Import useState
import {
  Dialog,
  DialogContent,
  DialogDescription, // Keeping for potential future use, though not used in title block
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"; // Import Dialog components

// Define the service data directly in Index.tsx, or import from a shared file
const coreServices = [
  {
    id: "custom-web-development",
    icon: Code,
    title: "Custom Web Development",
    briefDescription:
      "Bespoke websites built with the latest technologies to deliver performance and scalability.",
    fullDescription:
      "Our custom web development service focuses on creating bespoke digital experiences from the ground up. We leverage modern frameworks like React, Next.js, and Node.js to deliver high-performance, scalable, and secure web applications. Whether you need a complex enterprise platform, a dynamic single-page application, or a robust content management system, our team is equipped to bring your vision to life with precision and expertise.",
    features: [
      "Tailored solutions to meet unique business needs",
      "Scalable architecture for future growth",
      "Robust security implementation",
      "Responsive design for all devices",
    ],
  },
  {
    id: "mobile-app-development",
    icon: Layers,
    title: "Mobile App Development",
    briefDescription:
      "Engaging and intuitive mobile applications for iOS and Android that your users will love.",
    fullDescription:
      "We specialize in developing intuitive and engaging mobile applications for both iOS and Android platforms. Our approach covers the entire app lifecycle, from concept and UI/UX design to development, testing, and deployment. We focus on delivering seamless user experiences, leveraging technologies like React Native or native Swift/Kotlin to build performant and feature-rich applications that delight your users.",
    features: [
      "Native iOS and Android development",
      "Cross-platform solutions (React Native)",
      "User-centric UI/UX design",
      "App store deployment assistance",
    ],
  },
  {
    id: "ui-ux-consulting",
    icon: BarChart,
    title: "UI/UX & Consulting",
    briefDescription:
      "User-centric design and expert consulting to ensure your product is a success.",
    fullDescription:
      "Good design is good business. Our UI/UX design services are focused on creating interfaces that are not only aesthetically pleasing but also highly functional and intuitive. We conduct thorough user research, create wireframes and prototypes, and perform usability testing to ensure your product delivers an exceptional user experience, driving engagement and conversions. Our consulting helps align technology with your business goals.",
    features: [
      "Comprehensive user research and analysis",
      "Wireframing and prototyping",
      "Intuitive user interface (UI) design",
      "Strategic technology roadmap development",
    ],
  },
];

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<typeof coreServices[0] | null>(null);

  const openServiceModal = (service: typeof coreServices[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeServiceModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  // Define variants for staggered hero animation
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // useInView hooks for scroll-triggered sections
  const [productRef, productInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // New useInView hooks for the two new product sections
  const [productTwoRef, productTwoInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [productThreeRef, productThreeInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Variants for scroll-triggered sections
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as Transition["ease"],
      },
    },
  };

  return (
    <div className="space-y-24 pb-16">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 text-center min-h-[calc(100vh-120px)] flex flex-col justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground"
          >
            Build, Launch, and Scale Your Digital Vision
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground"
          >
            We are a team of expert developers crafting exceptional websites and
            applications tailored to your unique business needs.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-8 flex justify-center gap-4"
          >
            <Button size="lg" asChild>
              <NavLink to="/contact">Get a Quote</NavLink>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <NavLink to="/services">Our Services</NavLink>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <motion.section
        ref={productRef}
        variants={sectionVariants}
        initial="hidden"
        animate={productInView ? "visible" : "hidden"}
        id="product-one"
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
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
              <NavLink to="/products/queue-management-system">
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
      </motion.section>

      <motion.section
        ref={productTwoRef}
        variants={sectionVariants}
        initial="hidden"
        animate={productTwoInView ? "visible" : "hidden"}
        id="product-two"
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-card p-8 rounded-lg border border-border flex flex-col md:flex-row-reverse items-center gap-8">
          {" "}
          {/* md:flex-row-reverse for alternating layout */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-foreground">
              Custom Web Development
            </h2>
            <p className="mt-4 text-muted-foreground">
              We build high-performance, scalable, and secure web applications
              tailored to your specific business requirements. From dynamic
              single-page applications to complex enterprise platforms, we've
              got you covered.
            </p>
            <ul className="mt-6 space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <ArrowRight className="text-primary h-5 w-5" /> Optimized for
                speed and performance
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="text-primary h-5 w-5" /> Secure
                architecture with best practices
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="text-primary h-5 w-5" /> Cross-platform
                & responsive design
              </li>
            </ul>
            <Button className="mt-6" asChild>
              <NavLink to="/services">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </NavLink>
            </Button>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
              alt="Custom Web Development"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </motion.section>

      <motion.section
        ref={productThreeRef}
        variants={sectionVariants}
        initial="hidden"
        animate={productThreeInView ? "visible" : "hidden"}
        id="product-three"
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-card p-8 rounded-lg border border-border flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-foreground">
              Mobile App Development
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our team creates intuitive and engaging native and cross-platform
              mobile apps for both iOS and Android. We focus on user experience
              to ensure your app is not only functional but also delightful to
              use.
            </p>
            <ul className="mt-6 space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <ArrowRight className="text-primary h-5 w-5" /> Native &
                cross-platform compatibility
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="text-primary h-5 w-5" /> Focused on user
                experience (UX) and delight.
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="text-primary h-5 w-5" /> Delivering apps
                that work great and are enjoyable to use.
              </li>
            </ul>
            <Button className="mt-6" asChild>
              <NavLink to="/services">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </NavLink>
            </Button>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
              alt="Mobile App Development"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </motion.section>

      {/* Services Overview */}
      <motion.section
        ref={servicesRef}
        variants={sectionVariants}
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="text-3xl font-bold text-foreground">
          Our Core Services
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          From concept to deployment, we provide comprehensive development
          services.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {coreServices.map((service) => (
            <Card
              key={service.id}
              className="text-left cursor-pointer group flex flex-col h-full hover:border-primary transition-colors duration-200" // Added cursor-pointer, group, flexbox, and hover effects
              onClick={() => openServiceModal(service)} 
            >
              <CardHeader>
                <service.icon className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="group-hover:text-primary transition-colors duration-200">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                {" "}
                {/* flex-grow to push content down */}
                <p className="text-muted-foreground">
                  {service.briefDescription}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      <motion.section
        ref={testimonialsRef}
        variants={sectionVariants}
        initial="hidden"
        animate={testimonialsInView ? "visible" : "hidden"}
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
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
      </motion.section>

      {/* Service Detail Modal - Added here */}
      {selectedService && (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent
            className="
              sm:max-w-4xl
              md:max-w-5xl
              lg:max-w-6xl
              p-8
              rounded-2xl
              border-2
              border-primary/20
              shadow-2xl
              shadow-primary/10
              gap-y-6
              overflow-y-auto
              max-h-[90vh]
              flex flex-col
            "
          >
            <DialogHeader className="flex flex-col items-center text-center space-y-3">
              <DialogTitle className="text-4xl font-extrabold text-primary">
                {selectedService.title}
              </DialogTitle>
            </DialogHeader>

            <div className="flex-grow space-y-6 text-left">
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg mt-8">
                {selectedService.briefDescription}
              </p>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg mt-8">
                {selectedService.fullDescription}
              </p>
              {selectedService.features && selectedService.features.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold mt-6 mb-4 text-foreground">
                    Key Aspects
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                    {selectedService.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <DialogFooter className="flex items-center justify-center pt-6 mt-auto">
              <Button onClick={closeServiceModal} className="w-full sm:w-auto px-8 py-3 text-lg">
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Index;