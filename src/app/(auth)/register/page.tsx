import FormRegister from "./form-register";

export default function Register() {
  return (
    <div className="flex flex-col flex-1 gap-2">
      <div className="mb-4">
        <h1 className="text-[#8778CB] font-bold xl:text-[28px] xl:mb-4 md:text-[24px]">Đăng kí tài khoản</h1>
        <p className="text-[#8778CB] font-thin text-[13px]">
          Đăng ký để bắt đầu sử dụng dịch vụ và trải nghiệm các tính năng tuyệt vời!
        </p>
      </div>
      <div className="flex-1 flex">
        <FormRegister />
      </div>
    </div>
  );
}
