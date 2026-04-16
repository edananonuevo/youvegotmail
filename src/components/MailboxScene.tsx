import { useState, useEffect } from "react";
import "./MailboxScene.css";

type Stage = "idle" | "slide" | "flip" | "pull" | "viewing";

export default function MailboxScene() {
  const [stage, setStage] = useState<Stage>("idle");
  const [isFlapUp, setIsFlapUp] = useState(false);

  const handleClick = () => {
    setStage((prev) => {
      if (prev === "idle") return "slide";
      if (prev === "slide") return "flip";
      if (prev === "flip") return "pull";
      if (prev === "pull") return "viewing";
      return prev;
    });
  };

  useEffect(() => {
    if (stage === "flip") {
      setTimeout(() => setIsFlapUp(true), 350); // Toggle flap halfway through the flip animation
    } else if (stage === "idle" || stage === "slide") {
      setIsFlapUp(false);
    }
  }, [stage]);

  return (
    <div className="scene" onClick={handleClick}>
      {/* MAILBOX BOTTOM */}
      <img
        src="/youvegotmail/images/mailbox-bot.png"
        className="mailbox bottom"
      />

      <div className="shadow" />

      {/* ENVELOPE */}
      <div className={`envelope-wrapper ${stage}`}>

        {/* BASE BACK (always back) */}
        <img
          src="/youvegotmail/images/envelope-base-back.png"
          className="envelope back"
        />

        {/* LETTER (moves above flap when opening) */}
        <div className={`letter ${stage}`}>
          <img src="/youvegotmail/images/letter-top.png" />
        </div>

        {/* FLAP (z-index flips depending on stage) */}
        <div className={`flap ${stage}`}>
          {isFlapUp ? (
            <img
              src="/youvegotmail/images/envelope-flap-up.png"
              className="flap-up"
            />
          ) : (
            <img
              src="/youvegotmail/images/envelope-flap-down.png"
              className="flap-down"
            />
          )}
        </div>

        {/* BASE FRONT (always above back, but below flap when closed) */}
        <img
          src="/youvegotmail/images/envelope-base-front.png"
          className="envelope front"
        />
      </div>

      {/* MAILBOX TOP */}
      <img
        src="/youvegotmail/images/mailbox-top.png"
        className={`mailbox top ${stage}`}
      />
    </div>
  );
}