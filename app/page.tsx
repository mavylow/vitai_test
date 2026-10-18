import Header from "@/app/sections/Header";
import Form from "@components/Form";
import Footer from "@sections/Footer";
import AboutSection from "@sections/About";
import MainScreen from "@/app/sections/Main";
import Freshness from "@sections/Freshness";
import Coffee from "@sections/Coffee";
import Subscription from "@sections/Subscription";
import Delivery from "@sections/Delivery";
import Order from "@sections/Order";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <MainScreen />
        <Freshness />
        <Coffee />
        <Subscription />
        <AboutSection />
        <Delivery />
        <Order />
      </main>
      <Footer />
    </>
  );
}
