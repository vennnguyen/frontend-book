import { z } from "zod"; // validate dữ liệu
import { useForm } from "react-hook-form"; // quản lí trạng thái và sự kiện của form
import { zodResolver } from "@hookform/resolvers/zod"; //giúp kết nối zod với hookform
import { useAuthStore } from "@/stores/useAuthStore";
import { useNavigate } from "react-router";


const signUpSchema = z.object({
  lastName: z.string().min(1, "Tên bắt buộc phải có"),
  firstName: z.string().min(1, "Họ bắt buộc phải có"),
  email: z.email("Email không hợp lệ"),
  phone: z
    .string()
    .min(10, { message: "Số điện thoại không hợp lệ" })
    .max(10, "Số điện thoại không hợp lệ"),
  password: z.string().min(6, "Mật khẩu phải có ít nhất 6 kí tự"),
});
type SignUpFormValues = z.infer<typeof signUpSchema>;
const RegisterForm = () => {
  const { signUp } = useAuthStore();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema), // để kết nối useForm với zod đã định nghĩa
  });

  const onSubmit = async (data: SignUpFormValues) => {
    const { lastName, firstName, phone, email, password } = data;
    //gọi backend để tạo tài khoản
    await signUp(lastName, firstName, phone, email, password);
    setTimeout(() => {
  navigate(0); // reload trang
}, 1000);
    
    
  };
  return (
    <form className="space-y-5 text-left" onSubmit={handleSubmit(onSubmit)}>
      {/* HỌ & TÊN */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Họ <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Nhập họ"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm
                       focus:border-[#016504] focus:ring-2 focus:ring-[#016504]/20
                       outline-none transition"
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className="text-red-400 text-sm">{errors.lastName.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Tên <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Nhập tên"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm
                       focus:border-[#016504] focus:ring-2 focus:ring-[#016504]/20
                       outline-none transition"
            {...register("firstName")}
          />
          {errors.firstName && (
            <p className="text-red-400 text-sm">{errors.firstName.message}</p>
          )}
        </div>
      </div>

      {/* SỐ ĐIỆN THOẠI */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">
          Số điện thoại <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          placeholder="Nhập số điện thoại"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm
                     focus:border-[#016504] focus:ring-2 focus:ring-[#016504]/20
                     outline-none transition"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-red-400 text-sm">{errors.phone.message}</p>
        )}
      </div>

      {/* EMAIL */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          placeholder="Nhập email"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm
                     focus:border-[#016504] focus:ring-2 focus:ring-[#016504]/20
                     outline-none transition"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-400 text-sm">{errors.email.message}</p>
        )}
      </div>
      {/* PASSWORD */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">
          Mật khẩu <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          placeholder="Nhập mật khẩu"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm
                     focus:border-[#016504] focus:ring-2 focus:ring-[#016504]/20
                     outline-none transition"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-400 text-sm">{errors.password.message}</p>
        )}
      </div>

      {/* SUBMIT */}
      <button
        type="submit"
        className="w-full rounded-lg bg-[#016504] py-3 text-sm font-semibold text-white
                   hover:bg-[#014f03] active:scale-[0.98]
                   transition"
        disabled={isSubmitting}
      >
        Đăng ký
      </button>
    </form>
  );
};

export default RegisterForm;
