export default function HeroSection() {
    return (
        <section className="bg-gradient-hero text-white py-24 md:py-32 relative overflow-hidden flex items-center min-h-[80vh]">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 right-10 w-72 h-72 bg-brand-teal rounded-full blur-3xl" />
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6">
                        Welcome to <span className="text-brand-teal">OneInvest</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
                        Experience premium wealth management and seamless investing with Centricity Securities.
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <button className="px-8 py-4 bg-brand-teal text-white font-semibold rounded-full hover:bg-teal-600 transition-all duration-300 shadow-lg hover:shadow-brand-teal/40 transform hover:-translate-y-1">
                            Get Started
                        </button>
                        <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
