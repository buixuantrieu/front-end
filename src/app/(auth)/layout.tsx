import { IoLogoGoogle } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="min-h-[100vh] flex justify-center items-center bg-[linear-gradient(45deg,_#8F7DE1,_#E4E5F5)]">
        <div className="md:w-[750px] md:h-[600px] xl:w-[1200px] xl:h-[700px] w-[100%] flex flex-col md:flex-row min-h-[100vh] md:rounded-[10px] md:min-h-[600px] overflow-hidden">
          <div className="md:bg-[right] flex-1 bg-[url('/images/BackgroundAuth.jpg')]  hidden bg-cover bg-center md:flex justify-center items-center">
            <div className="flex flex-col items-center">
              <Link href="/">
                <Image
                  src="/images/GifAuth.gif"
                  alt="Logo"
                  width={130}
                  height={130}
                  quality={100}
                  className="xl:w-[150px] xl:h-[150px] aspect-[1/1]  object-cover"
                />
              </Link>
              <p className="text-center mt-2 xl:w-[70%] md:w-[80%] md:text-[12px] text-white xl:text-[14px]">
                Good Doctor - Kết nối bác sĩ và bệnh nhân, giúp bạn tư vấn y tế và đặt lịch khám dễ dàng mọi lúc, mọi
                nơi.
              </p>
            </div>
          </div>
          <div className="bg-[bottom] pt-4 bg-cover bg-[url('/images/BackgroundAuthMobile.jpg')] h-[200px] flex flex-col items-center md:hidden">
            <Link href="/">
              <Image
                src="/images/GifAuth.gif"
                alt="Logo"
                width={80}
                height={80}
                quality={100}
                className="xl:w-[150px] xl:h-[150px]  aspect-[1/1] object-cover"
              />
            </Link>
            <p className="w-[80%] text-center text-white text-[14px] mt-2 font-semibold">
              Good Doctor - Kết nối bác sĩ và bệnh nhân
            </p>
          </div>
          <div className="flex-1 flex translate-y-[-1px] sm:translate-y-0">
            <div className="flex-1 bg-white flex flex-col px-8 py-4 xl:px-12 xl:py-8 md:px-6 md:py-4">
              {children}
              <div className="mt-3 md:mt-2">
                <div className="flex gap-4 items-center">
                  <p className="h-[2px] flex-1 bg-[#8778CB]"></p>
                  <p className="text-[#8778CB] font-normal text-[13px]">Hoặc đăng nhập với</p>
                  <p className="h-[2px] flex-1 bg-[#8778CB]"></p>
                </div>
                <div className="flex justify-center items-center mt-2 md:mt-2 xl:mt-6 gap-4">
                  <div className="flex items-center gap-1">
                    <span className="p-1 md:p-1 xl:p-2 md:text-[14px] text-[13px] text-[#8778CB] hover:bg-[#8778CB] hover:text-white cursor-pointer rounded-[50%] w-max border flex justify-center items-center">
                      <IoLogoGoogle />
                    </span>
                    <span className="text-[#8778CB] md:text-[13px] text-[12px]">Google</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="p-1 md:p-1 xl:p-2 md:text-[14px] text-[13px]  text-[#8778CB] hover:bg-[#8778CB] hover:text-white cursor-pointer rounded-[50%] w-max border flex justify-center items-center">
                      <FaFacebookF />
                    </span>
                    <span className="text-[#8778CB] md:text-[13px] text-[12px]">Facebook</span>
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
