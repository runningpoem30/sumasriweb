import { Leaf, Award, Truck, Globe, Users, Trophy, Phone, Mail, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import {ReactComponent as MyLogo} from '@/assets/blackbgimage2.svg'
import { useEffect, useRef, useState } from "react"; 
import Location from '../components/Location'
import { motion } from "framer-motion";

// Import all images
import heroShrimp from '@/assets/hero-shrimp.jpg';
import vannameiShrimp from '@/assets/vannamei-shrimp.jpg';
import bananaShrimp from '@/assets/banana-shrimp.jpg';
import pinkShrimp from '@/assets/pink-shrimp.jpg';
import giantRiverPrawn from '@/assets/giant-river-prawn.jpg';
import whiteShrimp from '@/assets/white-shrimp.jpg';
import brownShrimp from '@/assets/brown-shrimp.jpg';
import rockShrimp from '@/assets/rock-shrimp.jpg';
import bgShrimp from '@/assets/mainbgshrimp.jpg'
import newBgShrimp from '@/assets/newbglanding.jpg'
import venime from '@/assets/venimeee-removebg-preview.png'
import scrampieShrimp from '@/assets/scrampieshrimp.jpg'
import blackBgImage2 from '@/assets/blackbgimage2.svg'
import blackTigerShrimp from '@/assets/blacktigershrimp.webp'
import vannameiShrimp2 from '@/assets/vannameishrimp.webp'
//tank shrimps
import seaWhiteShrimp from '@/assets/seawhiteshrimp.jpg'
import seaTigerShrimp from '@/assets/seatigershrimp.jpg'
import seaBlackTigerShrimp from '@/assets/seablacktigershrimp.webp'
import seaBrownShrimp from '@/assets/seabrownshrimp.jpg'
import redTinyShrimp from'@/assets/redTinyShrimp.webp'
import seaBrownShrimpFinal from '@/assets/image-copy.png'
import culturedBlackTiger from '@/assets/culturedblacktiger.png'

const Index = () => {
  const aboutRef = useRef(null)
  const [isVisible , setIsVisible] = useState(false)
  const vannameiRef = useRef(null);
  const [vannameiVisible, setVannameiVisible] = useState(false); 
  const productsRef = useRef(null);
  const [productVisible , setProductVisible] = useState(false);

    useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // animate once
        }
      },
      {
        threshold: 0.2, // 20% of the section visible
      }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setVannameiVisible(true);
        observer.disconnect(); // animate only once
      }
    },
    { threshold: 0.2 }
  );

  if (vannameiRef.current) observer.observe(vannameiRef.current);

  return () => observer.disconnect();
}, []);


  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setProductVisible(true);
        observer.disconnect(); // animate only once
      }
    },
    { threshold: 0.2 }
  );

  if (productsRef.current) observer.observe(productsRef.current);

  return () => observer.disconnect();
}, []);




  const tankProducts = [
     {
      image: vannameiShrimp2,
      title: "Vannamei",
      description: "Our signature white leg shrimp, sustainably farmed with superior quality and consistent supply."
    },
    {
  image: scrampieShrimp,
  title: "Scampie",
  description: "Scrampie Shrimp are prized for their firm texture and delicate flavor, ideal for gourmet dishes. Carefully farmed to ensure consistent quality, they are perfect for both commercial and retail markets."
},
   {
  image: blackTigerShrimp,
  title: "Tank Black Tiger",
  description: "Black Tiger Shrimp are known for their bold flavor and striking dark stripes, making them a favorite for gourmet recipes. Sustainably farmed to ensure premium quality, they are perfect for both commercial and retail markets."
}
,
   
  ];

  const seaProducts = [
    {
  image: seaWhiteShrimp,
  title: "Sea White",
  description: "Clean, tender white shrimp with a mild flavor, ideal for versatile cooking applications."
},
{
  image: seaTigerShrimp,
  title: "Sea Tiger",
  description: "Large, flavorful tiger shrimp with distinctive stripes, perfect for gourmet dishes."
},
{
  image: seaBlackTigerShrimp,
  title: "Sea Black Tiger",
  description: "Premium black tiger shrimp with bold flavor and striking dark stripes, great for both commercial and retail markets."
},
{
  image: seaBrownShrimpFinal,
  title: "Sea Brown",
  description: "Also known as Pink Shrimp , it is rich-flavored  with firm texture, popular in traditional and specialty seafood dishes."
},
{
  image: culturedBlackTiger,
  title: "Cultured Black Tiger",
  description: "These shrimp are prized for their bold stripes, firm texture, and delicious taste. They are commonly farmed in coastal areas and valued for their high export potential."
}

  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section 
  id="home" 
  className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${newBgShrimp})` }}
>
  <div className="absolute inset-0 bg-gradient-hero"></div>
  <div className='flex flex-col items-center text-center gap-y-5'>
      <div>
     <h1 className='font-bodoni text-4xl text-white text-[45px] lg:text-[175px] font-light'>SUMASRI AQUA</h1>
  </div>
  <div className='lg:mt-20'>
     <h2 className='font-bodoni text-4xl text-white text-[20px] lg:text-[40px] font-light'>One of the largest shrimp suppliers in Andhra Pradesh</h2>
  </div>
  </div>
  
  
  
  {/* Content container with proper spacing */}
  <div className="relative z-10 px-4 sm:px-6 lg:px-8 text-center">
    {/* Your content goes here */}
  </div>
</section>
    


      {/* About Us Section */}
      <section
        id="about"
        ref={aboutRef}
        className="py-24 px-6"
      >
        <div className="container mx-auto max-w-4xl">
          <h2
            className={`text-3xl md:text-6xl font-bodoni text-foreground mb-16 tracking-tight font-bold tracking-[0.2em] transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            ABOUT US
          </h2>
          <div
            className={`text-base md:text-lg leading-relaxed space-y-9 font-inter text-black transition-all duration-1000 ease-out delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <p className='font-sans font-light lg:text-[20px] text-[18px]'>
              With decades of experience in aquaculture, we have established ourselves as one of the most trusted 
              shrimp suppliers in Andhra Pradesh. Our commitment to sustainable farming practices and quality 
              assurance has made us a preferred partner for businesses worldwide.
            </p>
            <p className='font-sans font-light lg:text-[20px] text-[18px]'>
              Our team of experienced aquaculture professionals works closely with local farmers and experts to innovate 
              sustainable farming solutions. From water quality management to disease prevention and selective breeding, 
              every step is carefully monitored to maintain the highest standards of shrimp health and growth. 
              This ensures that our products not only meet international quality benchmarks but also contribute positively 
              to the communities and ecosystems where we operate.
            </p>
          </div>
        </div>
      </section>

      {/* Vannamei Shrimp USP Section */}
     <section
  ref={vannameiRef}
  className="py-24 px-6 bg-gray-700"
>
  <div className="container mx-auto max-w-6xl">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      {/* Left Text */}
      <div
        className={`transition-all duration-1000 ease-out ${
          vannameiVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bodoni font-light text-center text-white mb-10 tracking-tight">
          One of the largest suppliers of Vannamei shrimps in India
        </h2>
        <h3 className="text-xl md:text-2xl font-light text-primary mb-8"></h3>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-bodoni text-gray-400">
          We are one of the largest suppliers of Vannamei shrimps in India. Our Vannamei shrimp, also known as white leg shrimp, is prized for its clean taste, firm texture, and consistent quality, reflecting the pinnacle of aquaculture excellence.
        </p>
        <br />
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-bodoni text-gray-400">
          Managing over 10,000 acres of farmers’ land, we work closely with local farmers to cultivate and maintain the farms. With advanced techniques and a dedicated expert team, we can supply Vannamei shrimp year-round, ensuring freshness, reliability, and premium quality for our clients.
        </p>
      </div>

      {/* Right Image */}
      <div
        className={`relative transition-all duration-1000 ease-out ${
          vannameiVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <img
          src={venime}
          alt="Premium Vannamei shrimp"
          className="w-full h-[32rem] md:h-[36rem] object-cover "
        />
      </div>
    </div>
  </div>
</section>


      {/* Products Section */}
<section
  id="products"
  ref={productsRef}   // Add this ref
  className="py-24 px-6 text-white"
>
<div
 className="container mx-auto max-w-6xl"
>

    <h2 className="text-3xl md:text-6xl font-bodoni font-light text-center text-gray-800 mb-10 tracking-tight">
      OUR PRODUCTS
    </h2>
    <h3 className="text-gray-800 mb-20 font-light font-bodoni">
      As one of the leading shrimp suppliers, we bring premium quality seafood straight to your business.
      Our products are carefully sourced and sustainably farmed to ensure consistency and freshness.
      Browse our range and partner with us for reliable, top-quality shrimp supply.
    </h3>

    {/* Tank Products */}
    <div className="mb-20">
      <h3 className="text-xl md:text-3xl font-bodoni font-light text-black mb-12 text-center tracking-tight">
        TANK PRODUCTS
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {tankProducts.map((product, index) => (
          <div
            key={index}
            className="transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <ProductCard
              image={product.image}
              title={product.title}
              description={product.description}
            />
          </div>
        ))}
      </div>
    </div>

    {/* Sea Products */}
    <div>
      <h3 className="text-xl md:text-3xl font-bodoni font-light text-black mb-12 text-center tracking-tight">
        SEA PRODUCTS
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
        {seaProducts.slice(0, 3).map((product, index) => (
          <div
            key={index}
            className="transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <ProductCard
              image={product.image}
              title={product.title}
              description={product.description}
            />
          </div>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {seaProducts.slice(3, 5).map((product, index) => (
          <div
            key={index + 3}
            className="transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <ProductCard
              image={product.image}
              title={product.title}
              description={product.description}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>



      {/* Strengths Section */}
<section className="py-24 px-6 bg-gray-700">
  <div className="container mx-auto max-w-6xl">
    <h2 className="text-3xl md:text-5xl font-bodoni font-light text-center text-white mb-10 tracking-tight">
      OUR STRENGTHS
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
      <div>
        <h3 className="text-lg font-light font-bodoni text-foreground mb-3 tracking-tight text-white">Sustainable Farming</h3>
        <p className="text-muted-foreground font-light leading-relaxed text-gray-400 font-sans">
          Our eco-friendly aquaculture practices ensure environmental responsibility while maintaining premium quality standards in every batch of shrimp we produce.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-light text-foreground mb-3 tracking-tight text-white font-bodoni">High-Quality Produce</h3>
        <p className="text-muted-foreground font-light leading-relaxed text-gray-400">
          Rigorous quality control measures and advanced processing techniques guarantee consistently superior shrimp that meet international food safety standards.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-light text-foreground mb-3 tracking-tight text-white font-bodoni">Reliable Distribution</h3>
        <p className="text-muted-foreground font-light leading-relaxed text-gray-400">
          Our efficient supply chain network ensures timely delivery of fresh, high-quality shrimp to customers across India and international markets.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-light text-foreground mb-3 tracking-tight text-white font-bodoni">Wide Market Reach</h3>
        <p className="text-muted-foreground font-light leading-relaxed text-gray-400">
          Strong partnerships with distributors and retailers enable us to serve diverse markets, from local restaurants to international seafood exporters.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-light text-foreground mb-3 tracking-tight text-white font-bodoni">Expert Team</h3>
        <p className="text-muted-foreground font-light leading-relaxed text-gray-400">
          Our experienced aquaculture specialists and quality assurance professionals bring decades of expertise to every aspect of shrimp production.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-light text-foreground mb-3 tracking-tight text-white font-bodoni">Industry Recognition</h3>
        <p className="text-muted-foreground font-light leading-relaxed text-gray-400">
          Certified by leading food safety organizations and recognized for excellence in sustainable aquaculture practices throughout the industry.
        </p>
      </div>
    </div>
  </div>

</section>

     {/* Markets Section */}
   <div className='w-100 h-100 mt-10'>
    <h2 className="text-3xl md:text-5xl font-inter font-light text-center text-gray-800 mb-10 tracking-tight font-bodoni">
      FOUNDERS' DESK
    </h2>
    <div className='flex flex-col items-center lg:px-[250px] gap-y-5 lg:gap-y-6 mb-10'>
      <div>
          <h1 className='text-2xl lg:text-3xl font-bodoni mb-2'>
      Relangi Venkata Ramana (RVR)
    </h1>
    <p>+91 99593 53714</p>
    <p className='font-sans'>
      Founder of Sumasri Aqua, RVR is the guiding force behind the company’s vision and growth. With his leadership and dedication, he has laid the foundation for a sustainable and innovative approach in the aquaculture industry.
    </p>
      </div>
      <div>
           <h1 className='text-2xl lg:text-3xl font-bodoni mb-2'>
    Relangi Mahesh Gowd 
    </h1>
    <p>+91 63054 81230</p>
    <p>
      As the Business Manager and proud son of RVR, Mahesh Gowd continues his father’s legacy with the same passion and commitment. Carrying forward the RVR trademark, he focuses on driving business excellence and ensuring Sumasri Aqua’s steady growth in the market.
    </p>
      </div>
        
         
        
    </div>
    
   </div>



      {/* Footer / Contact Section */}
      <footer id="contact" className="py-20 px-6  text-primary-foreground bg-gray-700">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-16 tracking-tight font-bodoni">CONTACT US</h2>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 mb-4 text-accent" />
              <h3 className="text-lg font-medium mb-4 tracking-tight">Address</h3>
              <p className="text-primary-foreground/75 font-light leading-relaxed">
                2-223/2 Valasapakala,<br />
                Kakinada - 533005, AP<br />
                India
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 mb-4 text-accent" />
              <h3 className="text-lg font-medium mb-4 tracking-tight">Phone</h3>
              <p className="text-primary-foreground/75 font-light leading-relaxed">
               +91 99088 57997<br />
                +91  63054 81230
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 mb-4 text-accent" />
              <h3 className="text-lg font-medium mb-4 tracking-tight">Email</h3>
              <p className="text-primary-foreground/75 font-light leading-relaxed">
                sumasriaqua@gmail.com
              </p>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-primary-foreground/20 text-center">
            <p className="text-primary-foreground/60 font-light text-white">
              © 2024 SumasriAqua. All rights reserved.
            </p>
          </div>
        </div>
        
      </footer>
       
  
  <div className="px-2 bg-gray-700">
  <a 
    href="https://goarya.dev" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="block lg:ml-[1500px] text-gray-400 lg:text-[12px] hover:text-white transition-colors"
  >
    Developed by goarya.dev
  </a>
</div>

     
    </div>
  );
};

export default Index;