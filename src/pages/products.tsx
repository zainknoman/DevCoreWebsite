// src/pages/Products.tsx
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
import { NavLink } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; 
import Autoplay from "embla-carousel-autoplay"; 

const products = [
  {
    id: "queue-management-system",
    icon: Code,
    title: "Queue Management System",
    description:
      "Manage customer flow efficiently with real-time queue tracking and smart scheduling. Reduce wait times, improve service, and enhance the customer experience.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  {
    id: "ai-analytics-dashboard",
    icon: BarChart,
    title: "AI-Powered Analytics Dashboard",
    description:
      "Gain actionable insights from your data with our intelligent analytics platform. Leverage machine learning to predict trends, optimize operations, and make data-driven decisions with confidence.",
    image: "https://images.unsplash.com/photo-1551288259-cd19680327f3?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "secure-document-management",
    icon: Layers,
    title: "Secure Document Management System",
    description:
      "Streamline your workflow and ensure data integrity with our robust document management solution. Securely store, share, and collaborate on documents with advanced access controls and versioning.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
  },
];

// Define your process steps in a structured array
const productProcessSteps = [
  {
    step: "1. Discovery",
    description: "Understanding your needs and defining product scope.",
  },
  {
    step: "2. Design",
    description: "Crafting intuitive UI/UX for optimal user experience.",
  },
  {
    step: "3. Development",
    description: "Building robust and scalable product features.",
  },
  {
    step: "4. Deployment",
    description: "Launching and providing ongoing support for your product.",
  },
  {
    step: "5. Feedback & Iteration", // Added an extra step for more slider content
    description: "Continuously improving based on user feedback and performance.",
  },
  {
    step: "6. Scalability", // Added another step
    description: "Ensuring the product can grow with your business demands.",
  },
];

const Products = () => {
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

  // Removed processStepContainerVariants and processStepItemVariants as Carousel handles layout

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <motion.h1
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-extrabold tracking-tight"
        >
          Our Products
        </motion.h1>
        <motion.p
          variants={descriptionVariants}
          initial="hidden"
          animate="visible"
          className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground"
        >
          Explore the powerful tools we've built to streamline business operations and enhance customer experiences. Click on any product to learn more about its features and benefits.
        </motion.p>
      </div>

      <motion.div
        variants={cardContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={cardItemVariants}
          >
            <NavLink
              to={`/products/${product.id}`}
              className="block h-full group"
            >
              <Card className="flex flex-col h-full hover:border-primary transition-colors duration-200">
                <CardHeader className="relative">
                  {product.image && (
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-40 object-cover rounded-md mb-4"
                    />
                  )}
                  <product.icon className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="group-hover:text-primary transition-colors duration-200">{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{product.description}</p>
                </CardContent>
                <div className="px-6 pb-6 pt-0">
                  <span className="text-primary font-semibold text-sm inline-flex items-center">
                    Learn More
                    <svg className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </span>
                </div>
              </Card>
            </NavLink>
          </motion.div>
        ))}
      </motion.div>

      {/* Our Product Delivery Process - Now a Carousel */}
      <motion.div
        ref={processRef}
        variants={processSectionVariants}
        initial="hidden"
        animate={processInView ? "visible" : "hidden"}
        className="mt-24 bg-card p-8 rounded-lg border border-border"
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Product Delivery Process
        </h2>
        {/* Carousel implementation */}
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000, // Auto-play every 3 seconds
              stopOnInteraction: true, // Stop autoplay on user interaction
              stopOnMouseEnter: true, // Stop autoplay when mouse enters
            }),
          ]}
          opts={{
            align: "start",
            loop: true, // Loop the carousel
          }}
          className="w-full max-w-5xl mx-auto" // Adjust max-width as needed
        >
          <CarouselContent className="-ml-4"> {/* Added -ml-4 for correct spacing */}
            {productProcessSteps.map((item, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3"> {/* Adjust basis for number of visible items */}
                <div className="p-1">
                  <Card className="h-full">
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                      <h3 className="text-xl font-semibold text-primary">{item.step}</h3>
                      <p className="text-muted-foreground mt-2">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </motion.div>
    </div>
  );
};

export default Products;