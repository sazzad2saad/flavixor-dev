import React from "react";
import Slider from "../Components/Slider";
import CustomerReview from "../Components/CustomerReview";
import WhyChooseUs from "../Components/WhyChooseUs";
import TopFoods from "../Components/TopFoods";
import { Helmet } from "react-helmet-async";
import Newsletter from "../Components/Newsletter";

export default function Home() {
  return (
    <main>
      <Helmet>
        <title>Home | Taste Treasury</title>
      </Helmet>
      <section>
        <Slider></Slider>
      </section>
      <section>
        <TopFoods></TopFoods>
      </section>
      <section>
        <CustomerReview></CustomerReview>
      </section>
      <section>
        <WhyChooseUs></WhyChooseUs>
      </section>
      <section>
        <Newsletter></Newsletter>
      </section>
    </main>
  );
}
