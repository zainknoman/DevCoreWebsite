// ✅ File: src/pages/NotFound.tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const notfound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-background">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl text-muted-foreground mb-6">
        Oops! The page you're looking for does not exist.
      </p>
      <Link to="/">
        <Button variant="outline">Back to Home</Button>
      </Link>
    </div>
  );
};

export default notfound;
