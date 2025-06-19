  // src/pages/products/ProductDetail.tsx
  import { useParams, useNavigate, NavLink} from "react-router-dom";
  import { useEffect, useState } from "react";
  import { motion, Variants } from "framer-motion";
  import { CheckCircle, ArrowLeft } from "lucide-react";
  import { Button } from "@/components/ui/button";
  import { allProductsData, Product } from "@/data/productsData"; 


  const ProductDetail = () => {
    const { productId } = useParams<{ productId: string }>(); // Get product ID from URL
    const navigate = useNavigate(); // For going back
    const [product, setProduct] = useState<Product | undefined>(undefined);

    useEffect(() => {
      // Find the product in your centralized data based on the ID
      const foundProduct = allProductsData.find((p) => p.id === productId);
      setProduct(foundProduct);
      // If product not found, navigate to a 404 page or the products list
      if (!foundProduct) {
        console.warn(`Product with ID "${productId}" not found. Redirecting...`);
        navigate('/products'); // Redirect to products list if not found
      }
    }, [productId, navigate]); // Re-run effect if productId changes

    // Framer Motion variants for section animations
    const sectionVariants: Variants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const itemVariants: Variants = {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
    };

    if (!product) {
      // This state is briefly shown while product is being fetched or if not found before redirect
      return (
        <div className="container mx-auto px-4 py-40 text-center text-muted-foreground">
          <h2 className="text-3xl font-bold">Loading Product...</h2>
          <p className="mt-4">If this persists, the product might not exist.</p>
          <Button onClick={() => navigate('/products')} className="mt-6">
            Back to Products
          </Button>
        </div>
      );
    }

    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="flex flex-col lg:flex-row items-center lg:items-start gap-12"
        >
          {/* Product Details - Left Column */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <Button
              variant="ghost"
              onClick={() => navigate('/products')}
              className="mb-6 flex items-center text-primary-foreground hover:text-primary-foreground/80"
            >
              <ArrowLeft className="h-5 w-5 mr-2" /> Back to Products
            </Button>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-4">
              {product.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {product.fullDescription}
            </p>

            {/* Key Features Section */}
            <motion.div initial="hidden" animate="visible" variants={sectionVariants} className="mt-8">
              <h2 className="text-2xl font-bold text-foreground">Key Features</h2>
              <ul className="mt-4 space-y-3">
                {product.features.map((feature, index) => (
                  <motion.li key={index} variants={itemVariants} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <Button asChild size="lg" className="mt-8">
              <NavLink to="/contact">Request a Demo</NavLink>
            </Button>
          </div>

          {/* Product Image - Right Column */}
          <div className="lg:w-1/2 flex-shrink-0">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto max-h-[500px] object-contain rounded-lg shadow-2xl border border-border"
            />
          </div>
        </motion.div>

        {/* Benefits Sections */}
        <div className="mt-24 grid md:grid-cols-2 gap-12">
          {/* Benefits for Businesses */}
          <motion.div initial="hidden" animate="visible" variants={sectionVariants} className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold text-center">
              Benefits for Businesses
            </h3>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              {product.benefitsForBusiness.map((benefit, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Benefits for Customers */}
          <motion.div initial="hidden" animate="visible" variants={sectionVariants} className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold text-center">
              Benefits for Customers
            </h3>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              {product.benefitsForCustomers.map((benefit, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <CheckCircle className="inline-block h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    );
  };

  export default ProductDetail