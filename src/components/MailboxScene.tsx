import { useState } from "react";
import "./MailboxScene.css";

type Stage = "idle" | "slide" | "open";

export default function MailboxScene() {
  const [stage, setStage] = useState<Stage>("idle");

  const handleClick = () => {
    if (stage === "idle") setStage("slide");
    else if (stage === "slide") setStage("open");
  };

  return (
    <div className="scene" onClick={handleClick}>
      
      {/* BACK (bottom part of mailbox) */}
      <img
        src="/images/mailbox-bot.png"
        className="mailbox bottom"
      />

      {/* BETWEEN (hide envelope) */}
      <div className="white-box"></div>

      {/* ENVELOPE */}
      <div className={`envelope-wrapper ${stage}`}>
        <img src="/images/envelope.png" className="envelope" />
      </div>

      {/* FRONT (top part covers envelope) */}
      <img
        src="/images/mailbox-top.png"
        className="mailbox top"
      />

      {/* LETTER */}
      <div className={`letter ${stage}`}>
        <img src="/images/letter.png" />
      </div>
    </div>
  );
}