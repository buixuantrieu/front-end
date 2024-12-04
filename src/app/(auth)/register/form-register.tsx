"use client";

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaUserLock } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { TbPasswordFingerprint } from "react-icons/tb";
import { TbPasswordUser } from "react-icons/tb";
import Link from "next/link";
import { ROUTES } from "../../../constants/routes";
import { IRegister } from "@/types/interfaces";
import { useRegister } from "@/api/auth/mutations";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
const formRegisterSchema = z
  .object({
    userName: z
      .string()
      .trim()
      .min(5, "Tên đăng nhập từ 5 đến 20 kí tự!")
      .max(20, "Tên đăng nhập từ 5 đến 20 kí tự!")
      .regex(/^\S*$/, "Tên đăng nhập không được chứa khoảng trắng!")
      .regex(/^[a-z0-9]*$/, "Tên đăng nhập gồm chữ thường và số!"),
    email: z.string().min(1, "Vui lòng nhập email!").max(100).email("Không phải định dạng email!"),
    password: z
      .string()
      .min(8, "Mật khẩu ít nhất 8 kí tự!")
      .max(100)
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/, "Mật khẩu yếu! Ví dụ: Bxt2312@"),
    confirmPassword: z.string(),
  })
  .refine((value) => value.password === value.confirmPassword, {
    message: "Mật khẩu và mật khẩu xác nhận không khớp!",
    path: ["confirmPassword"],
  });

export default function FormRegister() {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const { mutate: register } = useRegister();
  const form = useForm<z.infer<typeof formRegisterSchema>>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const handleSubmitRegister = async (values: IRegister) => {
    const { email, password, userName } = values;
    setLoading(true);

    register(
      { email, password, userName },
      {
        onSuccess: (result) => {
          setLoading(false);
          router.push(ROUTES.AUTH.VERIFY + "?email=" + result.data.email);
        },
        onError: (e) => {
          setLoading(false);
          toast.error(e.message);
          console.log(e);

          if (e instanceof AxiosError) {
            if (e.response?.data.message.userName) {
              form.setError("userName", {
                message: e.response?.data.message.userName,
              });
            }
            if (e.response?.data.message.email) {
              form.setError("email", {
                message: e.response?.data.message.email,
              });
            }
          }
        },
      }
    );
  };
  return (
    <Form {...form}>
      <form
        className="flex-1 flex flex-col justify-center sm: gap-1 xl:gap-12"
        onSubmit={form.handleSubmit(handleSubmitRegister)}
      >
        <div className="grid grid-cols-12">
          <div className="col-span-12 mt-1">
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    <Input className="pl-7 focus:pl-9" placeholder="Nhập tên đăng nhập..." {...field} />
                  </FormControl>
                  <span className="absolute left-0 top-0 text-[#a78bfa]">
                    <FaUserLock />
                  </span>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-12 mt-1">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    <Input className="pl-7 focus:pl-9" placeholder="Nhập email của bạn..." {...field} />
                  </FormControl>
                  <span className="absolute left-0 top-0 text-[#a78bfa]">
                    <BiLogoGmail />
                  </span>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-12 mt-1">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    <Input type="password" className="pl-7 focus:pl-9" placeholder="Nhập mật khẩu..." {...field} />
                  </FormControl>
                  <span className="absolute left-0 top-0 text-[#a78bfa]">
                    <TbPasswordUser />
                  </span>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-12 mt-1">
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    <Input type="password" className="pl-7 focus:pl-9" placeholder="Nhập lại mật khẩu..." {...field} />
                  </FormControl>
                  <span className="absolute left-0 top-0 text-[#a78bfa]">
                    <TbPasswordFingerprint />
                  </span>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-12 mt-1">
            <div className="flex justify-end text-[12px] text-[#a78bfa] hover:text-blue-300">
              <Link href={ROUTES.AUTH.LOGIN}>Bạn đã có tài khoản?</Link>
            </div>
          </div>
        </div>
        <Button disabled={isLoading} type="submit">
          {isLoading ? (
            <>
              <Loader2 className="animate-spin h-5 w-5 text-white" />
              Đăng kí
            </>
          ) : (
            "Đăng kí"
          )}
        </Button>
      </form>
    </Form>
  );
}
