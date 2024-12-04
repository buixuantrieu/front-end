"use client";

import { ROUTES } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

export default function VerifyAccount() {
  const handleClick = () => {
    toast.success("Ok");
  };
  return (
    <div className="min-h-[100vh] flex justify-center items-center bg-[linear-gradient(45deg,_#8F7DE1,_#E4E5F5)]">
      <div className="w-[100%] relative min-h-[100vh] bg-[linear-gradient(45deg,_#f3f8f9,_#8F7DE1)] flex justify-center items-center">
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
      </div>
    </div>
  );
}
