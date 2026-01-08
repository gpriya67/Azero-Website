import { useState } from "react";
import AnimatedHeading from "../component/AnimatedHeading";
import TestimonialGrid from "./TestimonalGrid";

const Testimonials = () => {
  const [showTestimonials, setShowTestimonials] = useState(false);

  return (
    <section className="">
      <AnimatedHeading onComplete={() => setShowTestimonials(true)} />

      {showTestimonials && <TestimonialGrid />}
    </section>
  );
};

export default Testimonials;
