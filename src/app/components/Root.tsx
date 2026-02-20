import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { Toaster } from "./ui/sonner"

export function Root() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Toaster richColors={true}/>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
