"use client";

import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";

import FormVerifyOTP from "./form-otp";
import { ROUTES } from "@/constants/routes";

export default function VerifyAccount() {
  const handleClick = () => {
    toast.success("Ok");
  };
  return (
    <div className="min-h-[100vh] flex justify-center items-center bg-blue-100">
      <div className="w-[100%] p-4 relative min-h-[100vh] sm:w-[600px] sm:min-h-[600px] sm:rounded-[10px] h-max bg-white flex flex-col justify-center items-center">
        <Link href={ROUTES.USER.HOME} className="absolute top-2 left-3">
          <Image
            src="/images/Logo.webp"
            alt="Logo"
            width={100}
            height={100}
            quality={100}
            priority
            className="aspect-[1/1] object-cover"
          />
        </Link>
        <Image
          onClick={handleClick}
          src="/images/CheckYourMail.gif"
          alt="Check your mail"
          width={160}
          height={120}
          quality={100}
          priority
          className="aspect-[8/6]"
        />
        <h1 className="font-bold text-[22px] text-blue-600 ">Chào mừng bạn đến với Good doctor</h1>
        <p className="text-[13px] text-center text-blue-500">
          Để bảo mật tài khoản, chúng tôi cần xác nhận email của bạn. Chúng tôi đã gửi mã OTP đến email của bạn. Vui
          lòng nhập mã OTP để tiếp tục.
        </p>
        <FormVerifyOTP />
      </div>
    </div>
  );
}
