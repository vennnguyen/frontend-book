import { z } from "zod"; // validate dữ liệu
import { useForm } from "react-hook-form"; // quản lí trạng thái và sự kiện của form
import { zodResolver } from "@hookform/resolvers/zod"; //giúp kết nối zod với hookform
import { useAuthStore } from "@/stores/useAuthStore";
import { useNavigate } from "react-router";


const signInSchema = z.object({
  email: z.email("Email không hợp lệ"),
  password: z.string().min(6, "Mật khẩu phải có ít nhất 6 kí tự"),
});
type SignInFormValues = z.infer<typeof signInSchema>;

const LoginForm = () => {
  const {signIn} = useAuthStore()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema), // để kết nối useForm với zod đã định nghĩa
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = async (data: SignInFormValues) => {
   const {email, password} = data
   await signIn(email,password)

    setTimeout(() => {
  navigate(0); 
}, 1000);
  };
  return (
    <form className="space-y-5 text-left" onSubmit={handleSubmit(onSubmit)}>
      {/* EMAIL */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="text  "
          placeholder="Nhập email"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm
                     focus:border-[#016504] focus:ring-2 focus:ring-[#016504]/20
                     outline-none transition"
                     {...register("email")}
        />
        {errors.email && (
            <p className="text-red-400 text-sm">
                {errors.email.message}
            </p>
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
            <p className="text-red-400 text-sm">
                {errors.password.message}
            </p>
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
        Đăng nhập
      </button>
    </form>
  );
};

export default LoginForm;
