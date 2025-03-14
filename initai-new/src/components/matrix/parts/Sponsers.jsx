import React from "react";

const sponsors = {
  titleSponsor: {
    tier: "Title Sponsor",
    name: "Title Sponsor",
    image:
      "https://res.cloudinary.com/dk5acaaxg/image/upload/v1741716856/init-ai/p2x8uaez5epvccxhtnmh.png",
    link: "https://punctualiti.com/",
  },
  associateSponsors: [
    {
      tier: "Associate Sponsorship",
      name: "Associate Sponsorship",
      image:
        "https://res.cloudinary.com/dk5acaaxg/image/upload/v1741697474/init-ai/denbxmd0nvtvfx4gaagr.png",
      link: "https://www.solunation.com/",
    },
    {
      tier: "Powered By",
      name: "Powered By",
      image:
        "https://res.cloudinary.com/dk5acaaxg/image/upload/v1741697571/init-ai/mck4ih9peqi3p0hya8gk.png",
      link: "https://www.antennae.in",
    },
    {
      tier: "Associate Sponsorship",
      name: "Associate Sponsorship",
      image:
        "https://res.cloudinary.com/dk5acaaxg/image/upload/v1741697035/init-ai/f9zrcgdiozww4cngxnn9.png",
      link: "https://www.hexamad.in/",
    },
  ],
  otherSponsors: [
    {
      tier: "Gold Partner",
      name: "Gold Sponsor",
      image:
        "https://res.cloudinary.com/dk5acaaxg/image/upload/v1741717108/init-ai/jkpw3yiz7e4216tvafrn.png",
      link: "https://devfolio.co/",
    },
    {
      tier: "Silver Partner",
      name: "Silver Sponsor",
      image:
        "https://res.cloudinary.com/dk5acaaxg/image/upload/v1741697193/init-ai/mwc9icnmny4xtmvkfxzc.png",
      link: "https://ethindia2024.devfolio.co/",
    },
  ],
};

const SponsorsContent = () => {
  return (
    <div id="sponsors" className="max-w-7xl mx-auto px-4 space-y-12">
      {/* Title Sponsor */}
      <div className="space-y-6">
        <h3 className="text-3xl font-bold text-green-400 text-center matrix-glow">
          Title Sponsor
        </h3>
        <div className="flex justify-center">
          <a
            href={sponsors.titleSponsor.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group relative overflow-hidden transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <div className="max-w-[320px] w-full backdrop-blur-md bg-black/30 rounded-lg border border-green-400/30 transition-all duration-300 group-hover:border-green-400/50 group-hover:bg-black/40 shadow-md shadow-black/20 group-hover:shadow-green-400/10 p-5">
              <div className="aspect-[4/3] flex items-center justify-center">
                <img
                  src={sponsors.titleSponsor.image}
                  alt={sponsors.titleSponsor.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 filter brightness-110 contrast-125"
                />
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Associate Sponsors */}
      <div className="space-y-6">
        <h3 className="text-3xl font-bold text-green-400 text-center matrix-glow">
          Associate Sponsors
        </h3>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
            {sponsors.associateSponsors.map((sponsor) => (
              <div key={sponsor.name} className="max-w-[320px] w-full">
                <h4 className="text-xl font-bold text-green-300 text-center matrix-glow">
                  {sponsor.tier}
                </h4>
                <a
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group relative overflow-hidden transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <div className="backdrop-blur-md bg-black/30 rounded-lg border border-green-400/30 transition-all duration-300 group-hover:border-green-400/50 group-hover:bg-black/40 shadow-md shadow-black/20 group-hover:shadow-green-400/10 p-5">
                    <div className="aspect-[4/3] flex items-center justify-center">
                      <img
                        src={sponsor.image}
                        alt={sponsor.name}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 filter brightness-110 contrast-125"
                      />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gold and Silver Sponsors */}
      <div className="space-y-6">
        <h3 className="text-3xl font-bold text-green-400 text-center matrix-glow">
          Partners
        </h3>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 place-items-center">
            {sponsors.otherSponsors.map((sponsor) => (
              <div key={sponsor.name} className="max-w-[320px] w-full">
                <h4 className="text-xl font-bold text-green-300 text-center matrix-glow">
                  {sponsor.tier}
                </h4>
                <a
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group relative overflow-hidden transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <div className="backdrop-blur-md bg-black/30 rounded-lg border border-green-400/30 transition-all duration-300 group-hover:border-green-400/50 group-hover:bg-black/40 shadow-md shadow-black/20 group-hover:shadow-green-400/10 p-5">
                    <div className="aspect-[4/3] flex items-center justify-center">
                      <img
                        src={sponsor.image}
                        alt={sponsor.name}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 filter brightness-110 contrast-125"
                      />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsContent;
