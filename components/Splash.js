import Image from "next/image";
import Logo from "../public/logoDivisas.png";

const Splash = () => {
  return (
    <div className="bg-gray-100 w-screen">
      <div className="grid h-screen place-items-center">
        <Image
          src={Logo}
          width="120"
          height="120"
          alt="Logo de divisas app"
          className="animate-bounce"
        />
      </div>
    </div>
  );
};

export default Splash;
