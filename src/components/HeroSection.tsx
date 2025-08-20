const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        {/* Left: Text Content */}
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            Build Responsive Layouts with Tailwind CSS
          </h1>
          <p className="text-gray-700 text-lg md:text-xl">
            Master Flexbox and Grid utilities to create modern, responsive
            designs without writing a single line of custom CSS.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
              Get Started
            </button>
            <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-xl hover:bg-gray-300 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://placehold.co/500x350"
            alt="Hero Illustration"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
