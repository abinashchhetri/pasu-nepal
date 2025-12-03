import MaxWidthContainer from '@/components/MaxWidthContainer';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Heart, HandHeart, Sparkles, Users, Award, ShoppingBag } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#FCF6E7] via-[#FFF8DB] to-[#E3F8E1] min-h-[60vh] flex items-center py-12 md:py-16 lg:py-24">
        <MaxWidthContainer className="relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto gap-6">
            <div className="relative mb-4">
              <Image
                src="/pawsu-icons/pinkpaw.svg"
                alt="Pawshu Logo"
                width={120}
                height={120}
                className="w-20 h-20 md:w-24 md:h-24 lg:w-[120px] lg:h-[120px] animate-in zoom-in-95 duration-500"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#161821] leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
              About Pawshu
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-[#161821]/80 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              A love letter to the beautiful bond we share with our pets
            </p>
          </div>
        </MaxWidthContainer>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-16 lg:py-[120px] bg-white relative">
        <MaxWidthContainer>
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-md">
                <div className="absolute -top-4 -left-4 w-full h-full bg-primary/10 rounded-3xl -z-10"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                  <Image
                    src="/kenjo.svg"
                    alt="Our Story"
                    width={400}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#161821]">
                Our Story
              </h2>
              <div className="space-y-4 text-base md:text-lg text-[#161821]/80 leading-relaxed">
                <p>
                  Pawshu is a love letter to the beautiful bond we share with our pets. 
                  Inspired by the Nepali word <span className="font-semibold text-primary">"pashu,"</span> meaning 
                  animal or pet, Pawshu was born out of pure affection—for the wagging tails, 
                  soft paws, and joyful moments that make our lives brighter.
                </p>
                <p>
                  At Pawshu, we create handcrafted accessories that celebrate the inclusivity 
                  of our pets and us. Every piece is designed with love, crafted with care, 
                  and made to bring a smile to both you and your furry friend.
                </p>
                <p>
                  What started as a passion project has grown into a mission to celebrate 
                  the special relationships between pets and their humans, one beautiful 
                  accessory at a time.
                </p>
              </div>
            </div>
          </div>
        </MaxWidthContainer>
      </section>

      {/* What We Do Section */}
      <section className="py-12 md:py-16 lg:py-[120px] bg-[#FFF8DB] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <MaxWidthContainer className="relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#161821] mb-4">
              What We Do
            </h2>
            <p className="text-lg md:text-xl text-[#161821]/80 max-w-3xl mx-auto">
              Creating charming and culturally inspired accessories and treats for your beloved pets
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Accessories Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#161821]">Accessories</h3>
              </div>
              <p className="text-[#161821]/80 leading-relaxed mb-6">
                Our current lineup includes beautifully designed bandanas for both cats and dogs, 
                as well as matching scarves and scrunchies perfect for special occasions like Tihar. 
                Each piece is handcrafted with attention to detail and made with love.
              </p>
              <div className="flex gap-4">
                <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] bg-white rounded-full overflow-hidden flex items-end justify-end drop-shadow-lg relative">
                  <Image
                    src="/pawsu-icons/aboutsection/about1.svg"
                    alt="Accessories"
                    width={200}
                    height={200}
                    className="w-full h-full object-contain absolute -bottom-3 right-0"
                  />
                </div>
                <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] bg-white rounded-full overflow-hidden flex items-end justify-end relative">
                  <Image
                    src="/pawsu-icons/aboutsection/about2.svg"
                    alt="Accessories"
                    width={200}
                    height={200}
                    className="w-full h-full object-contain absolute -bottom-3 right-0"
                  />
                </div>
              </div>
            </div>

            {/* Treats Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#161821]">Pet Treats</h3>
              </div>
              <p className="text-[#161821]/80 leading-relaxed mb-6">
                We bake wholesome dog treats, from cookies to muffins, made with natural ingredients 
                and lots of love. We're excited to expand into nutritious dehydrated snacks in the 
                future, ensuring your pets get the best nutrition while enjoying delicious treats.
              </p>
              <div className="bg-primary/5 rounded-xl p-6">
                <p className="text-sm text-[#161821]/70 italic">
                  "Made with love, one treat at a time"
                </p>
              </div>
            </div>
          </div>
        </MaxWidthContainer>
      </section>

      {/* Our Values Section */}
      <section className="py-12 md:py-16 lg:py-[120px] bg-[#E3F8E1] relative">
        <span className="absolute top-8 left-8 z-30">
          <Image
            src="/pawsu-icons/pinkpaw.svg"
            alt="Values"
            width={100}
            height={100}
            className="w-16 h-16 lg:w-[100px] lg:h-[100px] opacity-80"
          />
        </span>
        
        <MaxWidthContainer>
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#161821] mb-4">
              Our Values
            </h2>
            <p className="text-lg md:text-xl text-[#161821]/80 max-w-3xl mx-auto">
              What drives us every day
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="flex flex-col gap-4 bg-white/50 rounded-2xl p-6 hover:bg-white transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#161821]">Our Story</h3>
              <p className="text-sm md:text-base text-[#161821]/80 leading-relaxed">
                Born from a love of gentle moments and handmade care, we create pieces that 
                celebrate pets and the people who adore them.
              </p>
            </div>

            <div className="flex flex-col gap-4 bg-white/50 rounded-2xl p-6 hover:bg-white transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#161821]">Our Creations</h3>
              <p className="text-sm md:text-base text-[#161821]/80 leading-relaxed">
                Each piece is crafted with care, blending gentle colors and textures that 
                reflect the warmth of companionship.
              </p>
            </div>

            <div className="flex flex-col gap-4 bg-white/50 rounded-2xl p-6 hover:bg-white transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <HandHeart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#161821]">Our Inspiration</h3>
              <p className="text-sm md:text-base text-[#161821]/80 leading-relaxed">
                Every design is inspired by the joy, love, and special moments shared between 
                pets and their humans.
              </p>
            </div>

            <div className="flex flex-col gap-4 bg-white/50 rounded-2xl p-6 hover:bg-white transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#161821]">Reach Out</h3>
              <p className="text-sm md:text-base text-[#161821]/80 leading-relaxed">
                We'd love to hear from you, share your thoughts, your pets, or just say hello!
              </p>
            </div>
          </div>
        </MaxWidthContainer>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16 lg:py-[120px] bg-white">
        <MaxWidthContainer>
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#161821]">
                Why Choose Pawshu?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#161821] mb-2">Handcrafted Quality</h3>
                    <p className="text-[#161821]/80 leading-relaxed">
                      Every piece is carefully handcrafted with attention to detail and made with love.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#161821] mb-2">Pet & Human Friendly</h3>
                    <p className="text-[#161821]/80 leading-relaxed">
                      We create accessories that celebrate the bond between pets and their humans, 
                      with matching pieces for both.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#161821] mb-2">Culturally Inspired</h3>
                    <p className="text-[#161821]/80 leading-relaxed">
                      Our designs are inspired by Nepali culture and traditions, bringing a unique 
                      touch to pet accessories.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <HandHeart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#161821] mb-2">Natural & Wholesome</h3>
                    <p className="text-[#161821]/80 leading-relaxed">
                      Our treats are made with natural ingredients, ensuring your pets get the best 
                      nutrition while enjoying delicious snacks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -top-6 -right-6 w-full h-full bg-primary/10 rounded-3xl -z-10"></div>
                <div className="relative bg-gradient-to-br from-[#FFF8DB] to-[#E3F8E1] rounded-3xl p-8 shadow-xl">
                  <div className="flex flex-col items-center gap-6 text-center">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
                      <Image
                        src="/pawsu-icons/pinkpaw.svg"
                        alt="Pawshu"
                        width={80}
                        height={80}
                        className="w-16 h-16"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-[#161821]">
                      Join the Pawshu Family
                    </h3>
                    <p className="text-[#161821]/80">
                      Be part of a community that celebrates the beautiful bond between pets and humans.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthContainer>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-[#FFF8DB] to-[#E3F8E1]">
        <MaxWidthContainer>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#161821] mb-6">
              Ready to Celebrate Your Pet?
            </h2>
            <p className="text-lg md:text-xl text-[#161821]/80 mb-8 leading-relaxed">
              Explore our handcrafted accessories and treats, designed with love for you and your furry friend.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button 
                  className="bg-primary text-white hover:bg-[#be497e] rounded-full px-8 py-6 text-lg w-full sm:w-auto"
                  size="lg"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Shop Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8 py-6 text-lg w-full sm:w-auto"
                  size="lg"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </MaxWidthContainer>
      </section>
    </div>
  );
};

export default AboutPage;

