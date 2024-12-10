"use client";

import { z } from "zod";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { ROLE } from "@/types/enum";
import { socket } from "@/sockets/socket";
import { ROUTES } from "@/constants/routes";
import { useVerificationCode } from "@/api/auth/mutations";
import { useVerificationExpirationTime } from "@/api/auth/queries";
import { calculateCountdown, formatCountdown } from "@/utils/util-time";

import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

export default function FormVerifyOTP() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const [countdown, setCountdown] = useState(0);
  const { mutate: verificationCode } = useVerificationCode();
  const { data: expirationTimeData, error } = useVerificationExpirationTime(email);

  useEffect(() => {
    if (error instanceof AxiosError) {
      if (error.status === 404) {
        router.push(ROUTES.NOTFOUND);
      }
    }
  }, [error, router]);

  useEffect(() => {
    socket.on("verifySuccess", (data) => {
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      if (data.role === ROLE.ADMIN) {
        router.push(ROUTES.ADMIN.DASHBOARD);
      } else if (data.role === ROLE.USER) {
        router.push(ROUTES.USER.HOME);
      }
    });
  }, [router]);

  useEffect(() => {
    if (expirationTimeData?.data.userId) {
      socket.emit("login", expirationTimeData?.data.userId);
    }
  }, [expirationTimeData?.data.userId]);

  useEffect(() => {
    const expireTime = expirationTimeData?.data.expiryTime;
    if (expireTime) {
      let initialCountdown = calculateCountdown(expireTime);
      if (initialCountdown <= 0) {
        router.push(ROUTES.AUTH.REGISTER);
      }
      setCountdown(initialCountdown);
      const interval = setInterval(() => {
        initialCountdown = calculateCountdown(expireTime);
        setCountdown(initialCountdown);
        if (initialCountdown <= 0) {
          clearInterval(interval);
        }
      }, 1000);
    }
  }, [expirationTimeData?.data.expiryTime, router]);

  useEffect(() => {}, []);
  const formOTPSchema = z.object({
    otp: z
      .string()
      .min(6, {
        message: "Mã OTP gồm 6 số!",
      })
      .regex(/^\d{6}$/, { message: "Mã OTP không hợp lệ!" }),
  });

  const form = useForm<z.infer<typeof formOTPSchema>>({
    resolver: zodResolver(formOTPSchema),
    defaultValues: {
      otp: "",
    },
  });
  function onSubmit(value: z.infer<typeof formOTPSchema>) {
    const { otp } = value;
    verificationCode(
      { email: email as string, verifyCode: Number(otp) },
      {
        onError: (e) => {
          if (e instanceof AxiosError) {
            if (e.status === 400) {
              form.setError("otp", {
                message: e.response?.data.message,
              });
            }
          }
        },
        onSuccess: (data) => {
          console.log(data);
          toast.success("Xác thực tài khoản thành công!");
        },
      }
    );
  }
  return (
    <div className="w-[300px]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" flex flex-col items-center mt-4">
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputOTP
                    maxLength={6}
                    {...field}
                    onInput={(e) => {
                      const input = e.target as HTMLInputElement;
                      input.value = input.value.replace(/[^0-9]/g, "");
                    }}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage className="h-max" />
              </FormItem>
            )}
          />
          <div className="w-full flex justify-end gap-1 text-[12px] mb-2">
            <span className="font-medium">Thời gian còn lại:</span>
            <span className="text-blue-600">{formatCountdown(countdown)}</span>
          </div>
          <Button className="w-full" type="submit">
            Xác thực
          </Button>
        </form>
      </Form>
    </div>
  );
}
