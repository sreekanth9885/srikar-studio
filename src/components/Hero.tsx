import { Button } from './Button';

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1519741497674-611481863552?w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 animate-slide-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-4">
          Srikar Studio
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto">
          Capturing life's most precious moments with artistry and passion
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" onClick={() => scrollToSection('#portfolio')}>
            View Portfolio
          </Button>
          <Button variant="secondary" onClick={() => scrollToSection('#booking')}>
            Book Now
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};