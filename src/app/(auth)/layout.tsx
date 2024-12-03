import { IoLogoGoogle } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="min-h-[100vh] flex justify-center items-center bg-[linear-gradient(45deg,_#4D53A9,_#5E389B)]">
        <div className="md:w-[750px] md:h-[550px] xl:w-[1200px] xl:h-[700px] rounded-[10px] flex overflow-hidden">
          <div className=" md:bg-[right] flex-1  bg-[url('/images/BackgroundAuth.jpg')] bg-cover bg-center "></div>
          <div className="flex-1 flex">
            <div className="flex-1 bg-white flex flex-col xl:px-12 xl:py-8 md:px-6 md:py-4">
              {children}
              <div className="md:mt-2">
                <div className="flex gap-4 items-center">
                  <p className="h-[2px] flex-1 bg-[#8778CB]"></p>
                  <p className="text-[#8778CB] font-thin text-[13px]">Hoặc đăng nhập với</p>
                  <p className="h-[2px] flex-1 bg-[#8778CB]"></p>
                </div>
                <div className="flex justify-center items-center md:mt-2 xl:mt-6 gap-4">
                  <div className="flex items-center gap-1">
                    <span className=" md:p-1 xl:p-2 md:text-[14px] text-[#8778CB] hover:bg-[#8778CB] hover:text-white cursor-pointer rounded-[50%] w-max border flex justify-center items-center">
                      <IoLogoGoogle />
                    </span>
                    <span className="text-[#8778CB] md:text-[13px]">Google</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="md:p-1 xl:p-2 md:text-[14px]  text-[#8778CB] hover:bg-[#8778CB] hover:text-white cursor-pointer rounded-[50%] w-max border flex justify-center items-center">
                      <FaFacebookF />
                    </span>
                    <span className="text-[#8778CB] md:text-[13px]">Facebook</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
