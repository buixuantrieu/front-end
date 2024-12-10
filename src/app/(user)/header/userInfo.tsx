"use client";

import { LogOut, User } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageSquareMore } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { useUserInfo } from "@/api/user/queries";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function UserInfo() {
  const { data: userInfo } = useUserInfo();
  const queryClient = useQueryClient();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear();
    queryClient.setQueryData(["get-user-info"], null);
    router.push(ROUTES.USER.HOME);
  };

  return (
    <div className="flex gap-4 items-center">
      <span className="cursor-pointer">
        <MessageSquareMore />
      </span>
      <Button variant="secondary">
        <Image
          src="/images/DoctorIcon.gif"
          alt="IconDoctor"
          width={25}
          height={25}
          className="rounded-[50%] aspect-[1/1]"
        />
        Đặt lịch với bác sĩ
      </Button>
      {!userInfo?.data ? (
        <Link href={ROUTES.AUTH.LOGIN}>
          <Button variant="secondary">Đăng nhập</Button>
        </Link>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="h-9 w-9 rounded-[50%]">
              {userInfo?.data.Profile.avatar ? (
                <AvatarImage src="" alt="" />
              ) : (
                <AvatarImage src="/images/NoAvatar.jpg" alt="" />
              )}
              <AvatarFallback className="rounded-[50%]"></AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link href={ROUTES.USER.HOME} className="flex gap-2 items-center">
                  <User className="w-[16px]" />
                  <span>Thông tin Cá nhân</span>
                </Link>
                <DropdownMenuShortcut>|</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={ROUTES.USER.HOME} className="flex gap-2 items-center">
                  <User className="w-[16px]" />
                  <span>Thông tin Cá nhân</span>
                </Link>
                <DropdownMenuShortcut>|</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div onClick={handleLogout} className="flex gap-2 items-center">
                <LogOut className="w-[16px]" />
                <span>Đăng xuất</span>
              </div>
              <DropdownMenuShortcut>|</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
}
