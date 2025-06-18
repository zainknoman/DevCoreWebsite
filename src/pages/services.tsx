// src/pages/Services.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code,
  Layers,
  BarChart,
  ShoppingCart,
  MessageCircle,
  CheckCircle,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "custom-web-development",
    icon: Code,
    title: "Custom Web Development",
    briefDescription:
      "We build high-performance, scalable, and secure web applications tailored to your specific business requirements.",
    fullDescription:
      "Our custom web development service focuses on creating bespoke digital experiences from the ground up. We leverage modern frameworks like React, Next.js, and Node.js to deliver high-performance, scalable, and secure web applications. Whether you need a complex enterprise platform, a dynamic single-page application, or a robust content management system, our team is equipped to bring your vision to life with precision and expertise.",
    features: [
      "Tailored solutions to meet unique business needs",
      "Scalable architecture for future growth",
      "Robust security implementation",
      "Responsive design for all devices",
      "Seamless third-party integrations",
      "Performance optimization for fast loading times",
    ],
  },
  {
    id: "mobile-app-development",
    icon: Layers,
    title: "Mobile App Development",
    briefDescription:
      "Our team creates intuitive and engaging native and cross-platform mobile apps for both iOS and Android.",
    fullDescription:
      "We specialize in developing intuitive and engaging mobile applications for both iOS and Android platforms. Our approach covers the entire app lifecycle, from concept and UI/UX design to development, testing, and deployment. We focus on delivering seamless user experiences, leveraging technologies like React Native or native Swift/Kotlin to build performant and feature-rich applications that delight your users.",
    features: [
      "Native iOS and Android development",
      "Cross-platform solutions (React Native)",
      "User-centric UI/UX design",
      "Robust backend integration",
      "Performance and security testing",
      "App store deployment assistance",
    ],
  },
  {
    id: "ui-ux-design",
    icon: BarChart,
    title: "UI/UX Design",
    briefDescription:
      "User-centric design and expert consulting to ensure your product is a success.",
    fullDescription:
      "Good design is good business. Our UI/UX design services are focused on creating interfaces that are not only aesthetically pleasing but also highly functional and intuitive. We conduct thorough user research, create wireframes and prototypes, and perform usability testing to ensure your product delivers an exceptional user experience, driving engagement and conversions.",
    features: [
      "Comprehensive user research and analysis",
      "Wireframing and prototyping",
      "Intuitive user interface (UI) design",
      "Seamless user experience (UX) flows",
      "Usability testing and iteration",
      "Brand consistency and guideline development",
    ],
  },
  {
    id: "e-commerce-solutions",
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    briefDescription:
      "We develop robust e-commerce platforms that provide a seamless shopping experience for your customers.",
    fullDescription:
      "Our e-commerce development services empower businesses to create powerful online stores that convert. We build robust, scalable platforms with features like product catalogs, secure payment gateways, inventory management, customer relationship management, and analytics. From custom solutions to integrations with popular platforms like Shopify or WooCommerce, we ensure a smooth shopping experience for your customers and efficient management for your business.",
    features: [
      "Custom e-commerce platform development",
      "Secure payment gateway integration",
      "Inventory and order management systems",
      "Customer account management",
      "Search engine optimization (SEO) friendly structures",
      "Analytics and reporting for sales performance",
    ],
  },
  {
    id: "technology-consulting",
    icon: MessageCircle,
    title: "Technology Consulting",
    briefDescription:
      "Leverage our expertise to make informed technology decisions. We offer consulting services to help you with architectural design, technology stack selection, and overall digital strategy.",
    fullDescription:
      "In the ever-evolving tech landscape, making the right choices is paramount. Our technology consulting services provide expert guidance on architectural design, technology stack selection, cloud strategy, and digital transformation. We help you identify optimal solutions, mitigate risks, and align technology investments with your business objectives to ensure sustainable growth and innovation.",
    features: [
      "Strategic technology roadmap development",
      "Cloud architecture and migration planning",
      "Cybersecurity and data privacy assessments",
      "Software audit and optimization",
      "Feasibility studies and technical due diligence",
      "Innovation and emerging tech advisement",
    ],
  },
];

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const openServiceModal = (service: typeof services[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeServiceModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const descriptionVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  const cardContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardItemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const [processRef, processInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const processSectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const processStepContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const processStepItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <motion.h1
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-extrabold tracking-tight"
        >
          Our Services
        </motion.h1>
        <motion.p
          variants={descriptionVariants}
          initial="hidden"
          animate="visible"
          className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground"
        >
          We offer a comprehensive suite of development services to bring your
          ideas to life. Click on any service to learn more.
        </motion.p>
      </div>

      <motion.div
        variants={cardContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={cardItemVariants}
            onClick={() => openServiceModal(service)}
            className="cursor-pointer group"
          >
            <Card className="flex flex-col h-full hover:border-primary transition-colors duration-200">
              <CardHeader>
                <service.icon className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="group-hover:text-primary transition-colors duration-200">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{service.briefDescription}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        ref={processRef}
        variants={processSectionVariants}
        initial="hidden"
        animate={processInView ? "visible" : "hidden"}
        className="mt-24 bg-card p-8 rounded-lg border border-border"
      >
        <h2 className="text-3xl font-bold text-center">
          Our Development Process
        </h2>
        <motion.div
          variants={processStepContainerVariants}
          initial="hidden"
          animate={processInView ? "visible" : "hidden"}
          className="mt-8 grid md:grid-cols-4 gap-8 text-center"
        >
          <motion.div variants={processStepItemVariants}>
            <h3 className="text-xl font-semibold text-primary">1. Discover</h3>
            <p className="text-muted-foreground mt-2">
              We start by understanding your vision, goals, and requirements.
            </p>
          </motion.div>
          <motion.div variants={processStepItemVariants}>
            <h3 className="text-xl font-semibold text-primary">2. Design</h3>
            <p className="text-muted-foreground mt-2">
              We create wireframes and mockups to visualize the user experience.
            </p>
          </motion.div>
          <motion.div variants={processStepItemVariants}>
            <h3 className="text-xl font-semibold text-primary">3. Develop</h3>
            <p className="text-muted-foreground mt-2">
              Our expert team writes clean, efficient code to build your
              product.
            </p>
          </motion.div>
          <motion.div variants={processStepItemVariants}>
            <h3 className="text-xl font-semibold text-primary">4. Deploy</h3>
            <p className="text-muted-foreground mt-2">
              We handle the launch and provide ongoing support to ensure
              success.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Service Detail Modal */}
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
            {/* FORCE CENTERING */}
            <DialogHeader className="flex flex-col items-center text-center space-y-3"> {/* <-- CHANGED CLASSNAMES */}
              <DialogTitle className="text-4xl font-extrabold text-primary">
                {selectedService.title}
              </DialogTitle>
              {/* <DialogDescription className="mt-6 text-lg text-muted-foreground mb-4">
                {selectedService.briefDescription}
              </DialogDescription> */}
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
                  <h3 className="text-2xl font-bold mt-6 mb-4 text-foreground">Key Aspects</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                    {selectedService.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
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

export default Services;