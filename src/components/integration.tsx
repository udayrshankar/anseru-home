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

  const Card = ({ logo }) => (
    <div className="w-[110px] h-[110px] bg-gray-100 rounded-2xl border border-gray-200 flex items-center justify-center shadow-sm">
      <img
        src={logo}
        alt="integration logo"
        className="w-10 h-10 object-contain"
      />
    </div>
  );

  return (
    <section className="py-10">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">

        {/* FRAME CONTAINER */}
        <div className="w-[420px] h-[420px] bg-white rounded-3xl overflow-hidden flex items-center justify-center">

          {/* LOGO GRID */}
          <div className="flex gap-2">

            {/* Column 1 */}
            <div className="flex flex-col gap-2">
              {col1.map((logo, i) => (
                <Card key={i} logo={logo} />
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-2 mt-20">
              {col2.map((logo, i) => (
                <Card key={i} logo={logo} />
              ))}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-2 mt-10">
              {col3.map((logo, i) => (
                <Card key={i} logo={logo} />
              ))}
            </div>

          </div>

        </div>

        {/* TEXT SECTION */}
        <div>
          <p className="text-gray-500 mb-4 text-sm">
            Integrations
          </p>

          <h2 className="text-[36px] font-medium text-gray-900 leading-[1]">
            Connect to the Tools <br />
            You Already Use
          </h2>
        </div>

      </div>

    </section>
  );
}