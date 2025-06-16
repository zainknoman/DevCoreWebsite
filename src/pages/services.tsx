import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code,
  Layers,
  BarChart,
  ShoppingCart,
  MessageCircle,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-40">
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
          ideas to life.
        </motion.p>
      </div>

      <motion.div
        variants={cardContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardItemVariants}
          >
            <Card className="flex flex-col h-full">
              <CardHeader>
                <service.icon className="h-10 w-10 text-primary mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{service.description}</p>
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
    </div>
  );
};

export default Services