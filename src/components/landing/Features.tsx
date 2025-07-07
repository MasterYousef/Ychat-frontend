import React from "react";
import FeaturesCard from "./Features.card";

function Features() {
  return (
    <section className="my-20 text-center md:text-left">
      <h1 className="font-bold text-4xl mb-5">Features</h1>
      <p>
        Ychat is packed with features that make it easy to connect with the
        people who matter most to you
      </p>
      <div className="cards flex flex-wrap gap-10 mt-10 justify-between">
        <FeaturesCard
          icon="fa-solid fa-comments"
          title="simple, reliable messaging"
          description="Message your friends and family for free*. Ychat uses your phone's Internet connection to send messages so you can avoid SMS fees."
        />
        <FeaturesCard
          icon="fa-solid fa-lock"
          title="Private and secure"
          description="With end-to-end encryption, your personal messages and calls are secured. Only you and the person you're communicating with can read or listen to them."
        />
        <FeaturesCard
          icon="fa-solid fa-video"
          title="Connecting with voice and video"
          description="With voice and video calls, you can talk to your friends and family for free*, even if they're in another country. And with encrypted group video calls, you can have private conversations with up to 8 people."
        />
      </div>
    </section>
  );
}

export default Features;
