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
import { LiaPhoneSquareAltSolid } from "react-icons/lia";
import { TbPasswordUser } from "react-icons/tb";

const formRegisterSchema = z.object({
  userName: z
    .string()
    .trim()
    .min(5, "Tên đăng nhập từ 5 đến 20 kí tự!")
    .max(20, "Tên đăng nhập từ 5 đến 20 kí tự!")
    .regex(/^\S*$/, "Tên đăng nhập không được chứa khoảng trắng!")
    .regex(/^[a-z0-9]*$/, "Tên đăng nhập gồm chữ thường và số!"),
  email: z.string().min(1, "Vui lòng nhập email!").max(100).email("Không phải định dạng email!"),
  password: z.string().min(1, "Vui lòng nhập email!").max(100).email("Không phải định dạng email!"),
});

export default function FormRegister() {
  const form = useForm<z.infer<typeof formRegisterSchema>>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      userName: "",
      email: "",
      password: "",
    },
  });

  const handleSubmitRegister = () => {
    console.log(1);
  };
  return (
    <Form {...form}>
      <form className="flex-1 flex flex-col justify-center sm: gap-1 xl:gap-12" onSubmit={form.handleSubmit(handleSubmitRegister)}>
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
                    <Input className="pl-7 focus:pl-9" placeholder="Nhập số điện thoại của bạn..." {...field} />
                  </FormControl>
                  <span className="absolute left-0 top-0 text-[#a78bfa]">
                    <LiaPhoneSquareAltSolid />
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
                    <Input className="pl-7 focus:pl-9" placeholder="Nhập mật khẩu..." {...field} />
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
              name="password"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    <Input className="pl-7 focus:pl-9" placeholder="Nhập lại mật khẩu..." {...field} />
                  </FormControl>
                  <span className="absolute left-0 top-0 text-[#a78bfa]">
                    <TbPasswordFingerprint />
                  </span>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button type="submit">Đăng kí</Button>
      </form>
    </Form>
  );
}
