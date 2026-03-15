import dropbox from "../assets/dropbox.png"
import drive from "../assets/drive.png"
import teams from "../assets/teams.png"
import slack from "../assets/slack.png"
import jira from "../assets/jira.png"
import circle from "../assets/circle.png"

export default function DealInfrastructure() {
  return (
    <section className="w-full py-40">
      <div className="mx-auto px-3 text-center relative">

        {/* Floating Integration Icons */}
        <div className="absolute inset-0">

          {/* Dropbox */}
          <img
            src={dropbox}
            className="w-[100px] h-[100px] absolute left-1/2 -translate-x-1/2 -top-24 opacity-90"
          />

          {/* Left Top */}
          <img
            src={jira}
            className="w-[100px] h-[100px] absolute left-[25%] top-[1%] opacity-90"
          />

          {/* Left Middle */}
          <img
            src={slack}
            className="w-[100px] h-[100px] absolute left-[10%] top-[30%] opacity-90"
          />

          {/* Right Top */}
          <img
            src={drive}
            className="w-[100px] h-[100px] absolute right-[25%] top-[1%] opacity-90"
          />

          {/* Right Middle */}
          <img
            src={teams}
            className="w-[100px] h-[100px] absolute right-[10%] top-[30%] opacity-90"
          />

        </div>

        {/* Center Circle Image */}
        <div className="flex justify-center">
          <img
            src={circle}
            className="w-31 h-31 object-contain mt-10"
            alt="center circle"
          />
        </div>

        {/* Text */}
        
        <p className="text-gray-600 text-lg mb-3">
          We are building next generation of
        </p>

        <h2 className="text-5xl font-medium text-black">
          Deal Infrastructure
        </h2>

      </div>
    </section>
  )
}
