import { useState } from "react";
import "./MailboxScene.css";

type Stage = "idle" | "slide" | "flip" | "open";

export default function MailboxScene() {
  const [stage, setStage] = useState<Stage>("idle");

  const handleClick = () => {
    if (stage === "idle") {
      setStage("slide");
    } else if (stage === "slide") {
      setStage("flip");
    } else if (stage === "flip") {
      setStage("open");
    } else if (stage === "open") {
      // Prevent further clicks or add custom behavior here
      console.log("Envelope is already open.");
    }
  };

  return (
    <div className="scene" onClick={handleClick}>
      
      {/* BACK (bottom part of mailbox) */}
      <img
        // src="/youvegotmail/images/mailbox-bot.png"
        className="mailbox bottom"
      />

      <div className="shadow"></div>

      {/* BETWEEN (hide envelope) */}
      {/* <div className="white-box"></div> */}

      {/* ENVELOPE */}
      <div className={`envelope-wrapper ${stage}`}>
        <img src="/youvegotmail/images/envelope-base.png" className="envelope" />

        <div className={`flap ${stage === "open" ? "open" : ""}`}>
          <img src="/youvegotmail/images/envelope-flap-up.png" className="flap down" />
          <img src="/youvegotmail/images/envelope-flap-down.png" className="flap up" />
        </div>
      </div>

      {/* FRONT (top part covers envelope) */}
      <img
        // src="/youvegotmail/images/mailbox-top.png"
        className="mailbox top"
      />

      {/* LETTER */}
      {/* <div className={`letter ${stage}`}>
        <img src="/youvegotmail/images/letter.png" />
      </div> */}
    </div>
  );
}