import React from "react";
import ToolsCard from "./Tools.card";

function Tools() {
  return (
    <div>
      <section className="text-center md:text-left my-20">
        <h3 className="text-2xl font-bold mb-5">Stay in Control</h3>
        <p>
          Ychat offers a variety of Tools to help you stay connected and in
          control.
        </p>
        <div className="flex my-10 flex-wrap justify-between">
          <ToolsCard
            src="images/tool1.svg"
            title="Groups to keep in touch"
            description="Whether you're planning a get-together or just catching up, groups let you easily stay connected. With group video calls, up to 8 people can talk to each other at the same time."
          />
          <ToolsCard
            src="images/tool2.svg"
            title="Stay in touch with your profile"
            description="Make your account truly yours by updating your name, profile photo, and about section. Let others know who you are—no stories or status updates needed."
          />
          <ToolsCard
            src="images/tool3.svg"
            title="Settings to customize your experience"
            description="Customize your Ychat experience with settings that let you control your privacy, notifications, and more."
          />
        </div>
      </section>
    </div>
  );
}

export default Tools;
