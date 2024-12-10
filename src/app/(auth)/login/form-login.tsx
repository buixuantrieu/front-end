"use client";

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaUserLock } from "react-icons/fa";
import { TbPasswordUser } from "react-icons/tb";
import Link from "next/link";
import { ROUTES } from "../../../constants/routes";
import { ILogin } from "@/types/interfaces";
import { useLogin } from "@/api/auth/mutations";
import { AxiosError } from "axios";
import { ROLE } from "@/types/enum";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const formRegisterSchema = z.object({
  userName: z.string().trim().min(1, "Vui lòng nhập tên tài khoản hoặc email!"),
  password: z.string().min(1, "Vui lòng nhập mật khẩu!").max(100),
});

export default function FormLogin() {
  const { mutate: login } = useLogin();
  const router = useRouter();

  const form = useForm<z.infer<typeof formRegisterSchema>>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      userName: "",
      password: "",
    },
  });

  const handleSubmitLogin = (values: ILogin) => {
    login(
      { userName: values.userName, password: values.password },
      {
        onSuccess: (result) => {
          localStorage.setItem("accessToken", result.data.accessToken);
          localStorage.setItem("refreshToken", result.data.refreshToken);
          if (result.data.role === ROLE.ADMIN) {
            router.push(ROUTES.ADMIN.DASHBOARD);
          } else if (result.data.role === ROLE.USER) {
            router.push(ROUTES.USER.HOME);
          }
          toast.success("Đăng nhập thành công!");
        },
        onError: (e) => {
          if (e instanceof AxiosError) {
            if (e.status === 404) {
              form.setError("password", {
                message: e.response?.data.message,
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
        onSubmit={form.handleSubmit(handleSubmitLogin)}
      >
        <div className="grid grid-cols-12">
          <div className="col-span-12 mt-1">
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    <Input
                      autoComplete="userName"
                      className="pl-7 focus:pl-9"
                      placeholder="Nhập tên đăng nhập hoặc email..."
                      {...field}
                    />
                  </FormControl>
                  <span className="absolute left-0 top-0 text-blue-600">
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
              name="password"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    <Input
                      type="password"
                      autoComplete="password"
                      className="pl-7 focus:pl-9"
                      placeholder="Nhập mật khẩu của bạn..."
                      {...field}
                    />
                  </FormControl>
                  <span className="absolute left-0 top-0 text-blue-600">
                    <TbPasswordUser />
                  </span>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-12 mt-1">
            <div className="flex justify-end text-[12px] text-blue-600 hover:text-blue-300">
              <Link href={ROUTES.AUTH.REGISTER}>Bạn chưa có tài khoản?</Link>
            </div>
          </div>
        </div>

        <Button type="submit">Đăng nhập</Button>
      </form>
    </Form>
  );
}
