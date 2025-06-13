
const DesignPortfolio = () => {
  const designs = [
    {
      id: 1,
      title: "Brand Identity Design",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Social Media Templates",
      category: "Social Media",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Digital Marketing Assets",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Website UI Elements",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Print Design Collection",
      category: "Print",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Logo Design Series",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="design" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Design <span className="text-cyan-400">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Discover my graphic design work created with Canva, showcasing creativity and brand-focused solutions
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {designs.map((design, index) => (
            <div
              key={design.id}
              className="group relative overflow-hidden rounded-xl bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block bg-cyan-400 text-gray-900 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {design.category}
                    </span>
                    <h3 className="text-white text-xl font-semibold">
                      {design.title}
                    </h3>
                  </div>
                </div>
              </div>
              
              {/* Bottom info */}
              <div className="p-4 group-hover:bg-gray-700 transition-colors duration-300">
                <h3 className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                  {design.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  {design.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignPortfolio;
