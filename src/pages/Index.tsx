import { Leaf, Award, Truck, Globe, Users, Trophy, Phone, Mail, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';

// Import all images
import heroShrimp from '@/assets/hero-shrimp.jpg';
import vannameiShrimp from '@/assets/vannamei-shrimp.jpg';
import blackTigerShrimp from '@/assets/black-tiger-shrimp.jpg';
import bananaShrimp from '@/assets/banana-shrimp.jpg';
import pinkShrimp from '@/assets/pink-shrimp.jpg';
import giantRiverPrawn from '@/assets/giant-river-prawn.jpg';
import whiteShrimp from '@/assets/white-shrimp.jpg';
import brownShrimp from '@/assets/brown-shrimp.jpg';
import rockShrimp from '@/assets/rock-shrimp.jpg';

const Index = () => {
  const tankProducts = [
    {
      image: blackTigerShrimp,
      title: "Black Tiger Shrimp",
      description: "Premium quality black tiger shrimp with distinctive markings, perfect for commercial and retail markets."
    },
    {
      image: giantRiverPrawn,
      title: "Giant River Prawn",
      description: "Large freshwater prawns known for their sweet taste and firm texture, ideal for gourmet dishes."
    },
    {
      image: vannameiShrimp,
      title: "Vannamei Shrimp",
      description: "Our signature white leg shrimp, sustainably farmed with superior quality and consistent supply."
    }
  ];

  const seaProducts = [
    {
      image: pinkShrimp,
      title: "Pink Shrimp",
      description: "Delicate pink shrimp with sweet flavor, perfect for fine dining and premium markets."
    },
    {
      image: whiteShrimp,
      title: "White Shrimp",
      description: "Clean, white shrimp with mild flavor and versatile cooking applications."
    },
    {
      image: brownShrimp,
      title: "Brown Shrimp",
      description: "Rich-flavored brown shrimp, popular in traditional and commercial preparations."
    },
    {
      image: bananaShrimp,
      title: "Banana Shrimp",
      description: "Yellow-tinted shrimp with unique flavor profile, sourced from pristine waters."
    },
    {
      image: rockShrimp,
      title: "Rock Shrimp",
      description: "Hard-shell shrimp with lobster-like taste, premium seafood for specialty markets."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroShrimp}
            alt="Fresh premium shrimp"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight tracking-tight">
            One of the largest producers of shrimps in Andhra Pradesh
          </h1>
          <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto font-light">
            Premium quality seafood with sustainable practices and reliable distribution
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-light text-center text-foreground mb-16 tracking-tight">About Us</h2>
          <div className="text-base md:text-lg text-muted-foreground leading-relaxed text-center space-y-8 font-light">
            <p>
              With decades of experience in aquaculture, we have established ourselves as one of the most trusted 
              shrimp producers in Andhra Pradesh. Our commitment to sustainable farming practices and quality 
              assurance has made us a preferred partner for businesses worldwide.
            </p>
            <p>
              Our state-of-the-art facilities and expert team ensure that every shrimp meets the highest standards 
              of freshness, taste, and nutritional value. We believe in responsible farming that protects our 
              environment while delivering exceptional seafood to our customers.
            </p>
          </div>
        </div>
      </section>

      {/* Vannamei Shrimp USP Section */}
      <section className="py-24 px-6 bg-muted/40">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 tracking-tight">Vannamei Shrimp</h2>
              <h3 className="text-xl md:text-2xl font-light text-primary mb-8">
                One of the largest producers of Vannamei shrimps in India
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light">
                Our Vannamei shrimp, also known as white leg shrimp, represents the pinnacle of aquaculture 
                excellence. These premium crustaceans are prized for their clean taste, firm texture, and 
                consistent quality. Through advanced farming techniques and strict quality controls, we deliver 
                Vannamei shrimp that exceeds international standards and satisfies the most discerning palates.
              </p>
            </div>
            <div className="relative">
              <img
                src={vannameiShrimp}
                alt="Premium Vannamei shrimp"
                className="w-full h-96 object-cover rounded-lg shadow-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-light text-center text-foreground mb-20 tracking-tight">Products</h2>
          
          {/* Tank Products */}
          <div className="mb-20">
            <h3 className="text-xl md:text-2xl font-light text-foreground mb-12 text-center tracking-tight">Tank Products</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {tankProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  image={product.image}
                  title={product.title}
                  description={product.description}
                />
              ))}
            </div>
          </div>

          {/* Sea Products */}
          <div>
            <h3 className="text-xl md:text-2xl font-light text-foreground mb-12 text-center tracking-tight">Sea Products</h3>
            {/* First row - 3 products */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
              {seaProducts.slice(0, 3).map((product, index) => (
                <ProductCard
                  key={index}
                  image={product.image}
                  title={product.title}
                  description={product.description}
                />
              ))}
            </div>
            {/* Second row - 2 products */}
            <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {seaProducts.slice(3, 5).map((product, index) => (
                <ProductCard
                  key={index + 3}
                  image={product.image}
                  title={product.title}
                  description={product.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="py-24 px-6 bg-muted/40">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-light text-center text-foreground mb-20 tracking-tight">Our Strengths</h2>
          <div className="grid md:grid-cols-2 gap-12 text-center md:text-left">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3 tracking-tight">Sustainable Farming</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Our eco-friendly aquaculture practices ensure environmental responsibility while maintaining premium quality standards in every batch of shrimp we produce.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3 tracking-tight">High-Quality Produce</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Rigorous quality control measures and advanced processing techniques guarantee consistently superior shrimp that meet international food safety standards.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3 tracking-tight">Reliable Distribution</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Our efficient supply chain network ensures timely delivery of fresh, high-quality shrimp to customers across India and international markets.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3 tracking-tight">Wide Market Reach</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Strong partnerships with distributors and retailers enable us to serve diverse markets, from local restaurants to international seafood exporters.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3 tracking-tight">Expert Team</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Our experienced aquaculture specialists and quality assurance professionals bring decades of expertise to every aspect of shrimp production.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3 tracking-tight">Industry Recognition</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Certified by leading food safety organizations and recognized for excellence in sustainable aquaculture practices throughout the industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contact" className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-16 tracking-tight">Contact Us</h2>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 mb-4 text-accent" />
              <h3 className="text-lg font-medium mb-4 tracking-tight">Address</h3>
              <p className="text-primary-foreground/75 font-light leading-relaxed">
                Aquaculture Complex<br />
                Vijayawada, Andhra Pradesh<br />
                India - 520001
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 mb-4 text-accent" />
              <h3 className="text-lg font-medium mb-4 tracking-tight">Phone</h3>
              <p className="text-primary-foreground/75 font-light leading-relaxed">
                +91 98765 43210<br />
                +91 87654 32109
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 mb-4 text-accent" />
              <h3 className="text-lg font-medium mb-4 tracking-tight">Email</h3>
              <p className="text-primary-foreground/75 font-light leading-relaxed">
                info@sumasriaqua.com<br />
                sales@sumasriaqua.com
              </p>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-primary-foreground/20 text-center">
            <p className="text-primary-foreground/60 font-light">
              © 2024 SumasriAqua. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;