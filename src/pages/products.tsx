// src/pages/Products.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code,
  Layers,
  BarChart, // BarChart icon is not used in products, but keeping it as it was in original imports
  ShoppingCart,
  MessageCircle, // MessageCircle icon is not used in products, but keeping it as it was in original imports
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom"; // Import NavLink

// Updated products array with unique IDs and refined descriptions
const products = [
  {
    id: "queue-management-system", // Unique ID for routing
    icon: Code,
    title: "Queue Management System",
    description:
      "Manage customer flow efficiently with real-time queue tracking and smart scheduling. Reduce wait times, improve service, and enhance the customer experience.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  {
    id: "ai-analytics-dashboard", // Unique ID for routing
    icon: BarChart, // Changed icon for better representation
    title: "AI-Powered Analytics Dashboard",
    description:
      "Gain actionable insights from your data with our intelligent analytics platform. Leverage machine learning to predict trends, optimize operations, and make data-driven decisions with confidence.",
    image: "https://images.unsplash.com/photo-1551288259-cd19680327f3?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "secure-document-management", // Unique ID for routing
    icon: Layers, // Changed icon for better representation
    title: "Secure Document Management System",
    description:
      "Streamline your workflow and ensure data integrity with our robust document management solution. Securely store, share, and collaborate on documents with advanced access controls and versioning.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
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

  // Note: The processRef and related variants/props were likely for a different section or
  // were placeholders from a previous context. For a pure product listing page,
  // these might not be directly relevant unless you have another section below the cards.
  // I've kept them for now if they are used elsewhere in your app outside of the snippet.
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
        {products.map((product) => ( // Removed `index` from map as `key` is now `product.id`
          <motion.div
            key={product.id} // Use product.id as key for better performance and stability
            variants={cardItemVariants}
          >
            {/* NavLink wraps the entire card to make it clickable */}
            <NavLink
              to={`/products/${product.id}`} // Dynamic route to product details page
              className="block h-full group" // 'block' makes NavLink fill its parent, 'h-full' ensures card height, 'group' for hover effects
            >
              <Card className="flex flex-col h-full hover:border-primary transition-colors duration-200">
                <CardHeader className="relative">
                  {/* Optionally add an image here for visual appeal like on Index.tsx */}
                  {product.image && (
                     <img
                       src={product.image}
                       alt={product.title}
                       className="w-full h-40 object-cover rounded-md mb-4"
                     />
                  )}
                  {/* If you prefer icon on top of image, adjust positioning */}
                  <product.icon className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="group-hover:text-primary transition-colors duration-200">{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{product.description}</p>
                </CardContent>
                {/* Optional: Add a subtle "Learn More" link/arrow at the bottom */}
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

      {/* The process section seems out of place for a products *listing* page. */}
      {/* If this section is meant for the *product details* page, we'll move it there. */}
      {/* If it's a general process section for the products overview, ensure its content is generic. */}
      {/* For now, keeping it as-is, but flagged for review based on your overall site structure. */}
      <motion.div
        ref={processRef}
        variants={processSectionVariants}
        initial="hidden"
        animate={processInView ? "visible" : "hidden"}
        className="mt-24 bg-card p-8 rounded-lg border border-border"
      >
        <h2 className="text-3xl font-bold text-center">
          Our Product Delivery Process
        </h2>
        <motion.div
          variants={processStepContainerVariants}
          initial="hidden"
          animate={processInView ? "visible" : "hidden"}
          className="mt-8 grid md:grid-cols-4 gap-8 text-center"
        >
          <motion.div variants={processStepItemVariants}>
            <h3 className="text-xl font-semibold text-primary">1. Discovery</h3>
            <p className="text-muted-foreground mt-2">
              Understanding your needs and defining product scope.
            </p>
          </motion.div>
          <motion.div variants={processStepItemVariants}>
            <h3 className="text-xl font-semibold text-primary">2. Design</h3>
            <p className="text-muted-foreground mt-2">
              Crafting intuitive UI/UX for optimal user experience.
            </p>
          </motion.div>
          <motion.div variants={processStepItemVariants}>
            <h3 className="text-xl font-semibold text-primary">3. Development</h3>
            <p className="text-muted-foreground mt-2">
              Building robust and scalable product features.
            </p>
          </motion.div>
          <motion.div variants={processStepItemVariants}>
            <h3 className="text-xl font-semibold text-primary">4. Deployment</h3>
            <p className="text-muted-foreground mt-2">
              Launching and providing ongoing support for your product.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Products