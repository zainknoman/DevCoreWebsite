// src/data/productsData.ts
import { Code, BarChart, Layers, LucideIcon } from "lucide-react";

// Define a type for your product structure for better type safety
export interface Product {
  id: string;
  icon: LucideIcon; // Use LucideIcon type for dynamic icons
  title: string;
  briefDescription: string;
  image: string;
  fullDescription: string;
  features: string[];
  benefitsForBusiness: string[]; // Specific benefits for businesses
  benefitsForCustomers: string[]; // Specific benefits for customers
  // You can add more fields here like screenshots, pricing, testimonials, etc.
}

export const allProductsData: Product[] = [
  {
    id: "queue-management-system",
    icon: Code,
    title: "Queue Management System",
    briefDescription:
      "Manage customer flow efficiently with real-time queue tracking and smart scheduling. Reduce wait times, improve service, and enhance the customer experience.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    fullDescription:
      "A powerful, intuitive application designed to eliminate waiting lines and enhance customer satisfaction. Perfect for clinics, salons, government offices, and any service-based business.",
    features: [
      "Search for service providers",
      "Join a live queue or book future appointments",
      "Real-time SMS/email notifications",
      "Provider dashboard with basic analytics",
      "Easy cancellation and rescheduling system",
      "Secure admin panel for management",
    ],
    benefitsForBusiness: [
      "Increased efficiency and staff productivity.",
      "Valuable insights from customer data analytics.",
      "Reduced customer no-shows with automated reminders.",
      "Improved overall customer satisfaction and loyalty.",
    ],
    benefitsForCustomers: [
      "No more physical waiting in lines.",
      "Freedom to join queues from anywhere.",
      "Transparent view of their position in the queue.",
      "Convenient appointment booking and management.",
    ],
  },
  {
    id: "ai-analytics-dashboard",
    icon: BarChart,
    title: "AI-Powered Analytics Dashboard",
    briefDescription:
      "Gain actionable insights from your data with our intelligent analytics platform. Leverage machine learning to predict trends, optimize operations, and make data-driven decisions with confidence.",
    image: "https://images.unsplash.com/photo-1551288259-cd19680327f3?q=80&w=2070&auto=format&fit=crop",
    fullDescription:
      "Unlock the true potential of your business data with our AI-Powered Analytics Dashboard. This sophisticated platform leverages advanced machine learning algorithms to process vast datasets, identify hidden patterns, and provide predictive insights. From sales forecasting and customer behavior analysis to operational bottlenecks and market trends, our dashboard offers intuitive visualizations and customizable reports, enabling you to make proactive, data-driven decisions that drive growth and efficiency.",
    features: [
      "Predictive Analytics & Forecasting",
      "Real-time Data Visualization",
      "Customizable Dashboards & Reports",
      "Anomaly Detection & Alerts",
      "Integration with Multiple Data Sources",
      "User Behavior & Customer Segmentation",
    ],
    benefitsForBusiness: [
      "Enhanced Decision Making with predictive insights.",
      "Optimized Resource Allocation through data analysis.",
      "Proactive Problem Solving with early alerts.",
      "Identified Growth Opportunities from market trends.",
    ],
    benefitsForCustomers: [
      "Personalized recommendations and offers.",
      "Faster service based on predicted needs.",
      "Seamless experience from data-driven optimizations.",
      "Improved product relevance through smarter insights.",
    ],
  },
  {
    id: "secure-document-management",
    icon: Layers,
    title: "Secure Document Management System",
    briefDescription:
      "Streamline your workflow and ensure data integrity with our robust document management solution. Securely store, share, and collaborate on documents with advanced access controls and versioning.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
    fullDescription:
      "Our Secure Document Management System is a comprehensive solution for organizing, securing, and collaborating on your critical business documents. It offers robust features like version control, granular access permissions, audit trails, and secure cloud storage. Eliminate paper clutter, reduce manual errors, and enhance team collaboration while ensuring compliance with industry regulations. Access your documents anytime, anywhere, with confidence in their security and integrity.",
    features: [
      "Centralized Document Storage",
      "Version Control & Audit Trails",
      "Granular Access Permissions",
      "Full-Text Search & Indexing",
      "Secure File Sharing & Collaboration",
      "Automated Workflow & Approval Processes",
    ],
    benefitsForBusiness: [
      "Improved Data Security & Compliance.",
      "Increased Operational Efficiency and reduced manual errors.",
      "Streamlined Workflow with automated processes.",
      "Enhanced Team Collaboration on documents.",
    ],
    benefitsForCustomers: [
      "Easy and secure access to shared documents.",
      "Confidence in data integrity and versioning.",
      "Faster approvals and document processing.",
      "Reduced paperwork and environmental impact.",
    ],
  },
  
];