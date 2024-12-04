import FormLogin from "./form-login";

export default function Login() {
  return (
    <div className="flex flex-col flex-1 gap-2">
      <div className="mb-4">
        <h1 className="text-[#8778CB] font-bold xl:text-[28px] xl:mb-4 md:text-[24px]">Đăng nhập</h1>
        <p className="text-[#8778CB] font-thin text-[13px]">
          Đăng nhập để tiếp tục trải nghiệm dịch vụ và kết nối với bác sĩ mọi lúc, mọi nơi!
        </p>
      </div>
      <div className="flex-1 flex">
        <FormLogin />
      </div>
    </div>
  );
}
