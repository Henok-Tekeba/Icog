import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center border border-border p-10">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">404</p>
        <h1 className="text-3xl font-light mb-3">Page not found</h1>
        <p className="text-muted-foreground text-sm mb-8">
          The page you’re looking for doesn’t exist (or was moved).
        </p>
        <Button asChild variant="outline">
          <Link to="/">Back to home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

