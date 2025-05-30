import fallbackImage from "../../assets/fallback-image.png";
import bgVideo from "../../assets/bg-universe.mp4";
import "./background.css";

export const Background = () => {
  return (
    <>
      <div className="shadow-overlay"></div>
      <video
        playsInline
        autoPlay
        muted
        loop
        preload="auto"
        id="bg"
        poster={fallbackImage}
        src={bgVideo}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
    </>
  );
};
