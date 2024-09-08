import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CarIcon, WrenchIcon, TruckIcon, TrophyIcon } from "lucide-react";
import Featured from "./Featured";
import Hero from "./Hero";
import Services from "./Services";
import Certification from "./Certification";
import ContactUs from "./Contact-Us";
import Products from "./Products";

export function HomePage() {
  return (
    <div>
      <main className="flex-1">
        <Hero />
        <Featured />
        <Services />
        <Products />
        {/* <Certification /> */}
        <ContactUs />
      </main>
    </div>
  );
}
