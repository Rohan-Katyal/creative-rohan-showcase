import { Youtube, Instagram } from "lucide-react";

const clients = [
  {
    name: "MYSSTARA",
    status: "Worked With (Past Client)",
    statusActive: false,
    category: "Professional Tarot Card Reader & Crystal Healer",
    description:
      "Led by RashmiiShree, practicing tarot since 2022 with 1000+ readings delivered and recognized at Jyotish Mahakumbh 2024.",
    contributions: [
      "Instagram Reels creation",
      "YouTube Shorts editing",
      "Spiritual content videos",
      "Festival-based devotional videos",
      "Client feedback/testimonial videos",
      "Emotional pacing & storytelling optimization",
    ],
    socials: [
      {
        icon: Youtube,
        url: "https://www.youtube.com/@Mysstara-RASHMIISHREE",
        label: "YouTube",
      },
      {
        icon: Instagram,
        url: "https://www.instagram.com/mysstara/",
        label: "Instagram",
      },
    ],
  },
  {
    name: "Shikshami Classes",
    status: "Currently Working With",
    statusActive: true,
    category: "Educational Coaching Platform",
    description:
      "Academic coaching platform focused on structured concept clarity and exam preparation.",
    contributions: [
      "Instagram Reels creation",
      "YouTube Shorts editing",
      "YouTube thumbnail design",
      "Academic visual presentation structuring",
      "Thumbnail consistency for brand identity",
      "Short-form concept explainer videos",
    ],
    socials: [
      {
        icon: Youtube,
        url: "https://www.youtube.com/@shikshamiclasses",
        label: "YouTube",
      },
    ],
  },
];

const Clients = () => {
  return (
    <section
      id="clients"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-charcoal flex items-center transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal dark:text-white">
            Clients & Ongoing{" "}
            <span className="text-mustard">Collaborations</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-mustard to-mustard/70 mx-auto mb-8 rounded-full"></div>
          <p className="text-charcoal/70 dark:text-white/70 text-lg max-w-3xl mx-auto">
            Currently delivering structured short-form and educational content
            for growing digital brands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {clients.map((client) => (
            <div
              key={client.name}
              className="relative bg-white dark:bg-charcoal/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:transform hover:-translate-y-1 border border-mustard/20 dark:border-mustard/30 hover:border-mustard/50 p-6"
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                    client.statusActive
                      ? "bg-mustard/20 text-mustard border border-mustard/40"
                      : "bg-charcoal/10 dark:bg-white/10 text-charcoal/70 dark:text-white/70 border border-charcoal/20 dark:border-white/20"
                  }`}
                >
                  {client.statusActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-mustard animate-pulse" />
                  )}
                  {client.status}
                </span>
              </div>

              {/* Client Info */}
              <div className="mt-6">
                <h3 className="text-2xl font-bold text-charcoal dark:text-white mb-1">
                  {client.name}
                </h3>
                <p className="text-mustard font-medium text-sm mb-3">
                  {client.category}
                </p>
                <p className="text-charcoal/70 dark:text-white/70 text-sm leading-relaxed mb-5">
                  {client.description}
                </p>

                {/* Contributions */}
                <div className="mb-5">
                  <h4 className="text-sm font-semibold text-charcoal dark:text-white mb-3 uppercase tracking-wider">
                    My Contribution
                  </h4>
                  <ul className="space-y-1.5">
                    {client.contributions.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-charcoal/70 dark:text-white/70"
                      >
                        <span className="text-mustard mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-3 pt-4 border-t border-mustard/10">
                  {client.socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="text-charcoal/50 dark:text-white/50 hover:text-mustard transition-colors duration-300"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
