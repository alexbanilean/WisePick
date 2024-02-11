import Image from "next/image";
import darkWisePickBG from "~/../public/darkWisePickBG.jpg";
import lightWisePickBG from "~/../public/lightWisePickBG.jpg";

export const BackgroundImage = ({ theme }: { theme: string | undefined }) => {
  return (
    <>
      {theme === undefined ? (
        <Image
          src={theme === "dark" ? darkWisePickBG : lightWisePickBG}
          alt="WisePick"
          className="z-0 h-screen w-screen"
        />
      ) : null}
    </>
  );
};
