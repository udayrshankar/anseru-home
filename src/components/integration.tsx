import slack from "../assets/slack icon.png";
import notion from "../assets/notion icon.png";
import drive from "../assets/drive icon.png";
import hubspot from "../assets/Hubspot Icon.png";
import zendesk from "../assets/zendesk icon.png";
import teams from "../assets/teams icon.png";
import seismic from "../assets/seismic icon.png";
import onedrive from "../assets/onedrive icon.png";
import highspot from "../assets/highspot icon.png";
import gong from "../assets/gong icon.png";

export default function Integrations() {

  const col1 = [seismic, drive, zendesk, onedrive];
  const col2 = [highspot, slack, gong];
  const col3 = [hubspot, zendesk, notion, teams];

  const Card = ({ logo }: { logo: string }) => (
    <div className="w-[80px] h-[80px] md:w-[110px] md:h-[110px] bg-white rounded-xl md:rounded-2xl border border-gray-100 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
      <img
        src={logo}
        alt="integration logo"
        className="w-8 h-8 md:w-10 md:h-10 object-contain"
      />
    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12 md:gap-24 items-center">

        {/* FRAME CONTAINER */}
        <div className="w-full max-w-[420px] aspect-square bg-gray-50 rounded-3xl overflow-hidden flex items-center justify-center p-6 md:p-0">

          {/* LOGO GRID */}
          <div className="flex gap-2 md:gap-3">

            {/* Column 1 */}
            <div className="flex flex-col gap-2 md:gap-3">
              {col1.map((logo, i) => (
                <Card key={i} logo={logo} />
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-2 md:gap-3 mt-10 md:mt-20">
              {col2.map((logo, i) => (
                <Card key={i} logo={logo} />
              ))}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-2 md:gap-3 mt-5 md:mt-10">
              {col3.map((logo, i) => (
                <Card key={i} logo={logo} />
              ))}
            </div>

          </div>

        </div>

        {/* TEXT SECTION */}
        <div className="text-center md:text-left flex-1">
          <p className="text-gray-500 mb-4 text-sm font-medium uppercase tracking-wider">
            Integrations
          </p>

          <h2 className="text-3xl md:text-[44px] font-medium text-gray-900 leading-tight tracking-tight">
            Connect to the Tools <br className="hidden md:block" />
            You Already Use
          </h2>
          <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            Anseru syncs effortlessly with your existing stack, pulling knowledge from where it lives and pushing answers where they're needed.
          </p>
        </div>

      </div>

    </section>
  );
}