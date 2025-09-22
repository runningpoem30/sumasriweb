import { Leaf, Award, Truck, Globe, Users, Trophy, Phone, Mail, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import StrengthCard from '@/components/StrengthCard';

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

  const strengths = [
    { icon: Leaf, title: "Sustainable Farming" },
    { icon: Award, title: "High-Quality Produce" },
    { icon: Truck, title: "Reliable Distribution" },
    { icon: Globe, title: "Wide Market Reach" },
    { icon: Users, title: "Expert Team" },
    { icon: Trophy, title: "Industry Recognition" }
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            One of the largest producers of shrimps in Andhra Pradesh
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Premium quality seafood with sustainable practices and reliable distribution
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">About Us</h2>
          <div className="text-lg text-muted-foreground leading-relaxed text-center space-y-6">
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
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">Vannamei Shrimp</h2>
              <h3 className="text-2xl font-semibold text-primary mb-6">
                One of the largest producers of Vannamei shrimps in India
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
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
                className="w-full h-96 object-cover rounded-lg shadow-ocean"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">Products</h2>
          
          {/* Tank Products */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Tank Products</h3>
            <div className="grid md:grid-cols-3 gap-8">
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
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Sea Products</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {seaProducts.map((product, index) => (
                <ProductCard
                  key={index}
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
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">Our Strengths</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {strengths.map((strength, index) => (
              <StrengthCard
                key={index}
                icon={strength.icon}
                title={strength.title}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contact" className="py-16 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 mb-4 text-accent" />
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-primary-foreground/80">
                Aquaculture Complex<br />
                Vijayawada, Andhra Pradesh<br />
                India - 520001
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 mb-4 text-accent" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-primary-foreground/80">
                +91 98765 43210<br />
                +91 87654 32109
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 mb-4 text-accent" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-primary-foreground/80">
                info@aquashrimp.com<br />
                sales@aquashrimp.com
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
            <p className="text-primary-foreground/60">
              © 2024 AquaShrimp. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;