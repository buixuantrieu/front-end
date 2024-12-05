import FormLogin from "./form-login";

export default function Login() {
  return (
    <div className="flex flex-col flex-1 gap-2">
      <div className="mb-4">
        <h1 className="text-blue-600 font-bold xl:text-[28px] xl:mb-4 md:text-[24px]">Đăng nhập</h1>
        <p className="text-blue-500 font-normal text-[13px]">
          Đăng nhập để tiếp tục trải nghiệm dịch vụ và kết nối với bác sĩ mọi lúc, mọi nơi!
        </p>
      </div>
      <div className="flex-1 flex">
        <FormLogin />
      </div>
    </div>
  );
}
