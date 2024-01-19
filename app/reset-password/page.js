"use client";

import { supabaseClient } from "@/supabaseClient";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { TbEye, TbEyeOff } from "react-icons/tb";

const ResetPasswordPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [passwordMatch, setPasswordMathch] = useState("");
  const emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$";

  const submitPassword = async () => {
    setLoading(true);
    setErrorMsg(null);
    setPasswordMathch(null);

    if (password != confirmPassword) {
      setPasswordMathch("Your passwords does not match");
      setLoading(false);
      return;
    }
   
    if (password === confirmPassword) {
      try {
        const { data, error } = await supabaseClient.auth.updateUser({
          // email: "new@email.com",
          password,
        });
        if (error) {
          setErrorMsg(error.message);
        }
        if (!error) {
          toast.success("Password updated successfully.", {
            duration: 5000,
            position: "top-center",
            // Aria
            ariaProps: {
              role: "status",
              "aria-live": "polite",
            },
          });
          
        }
      } catch (error) {
        console.log("ErrorMsg: ", error.message);
      } finally {
          setLoading(false);
          router.push("/");
      }
    }
  };

  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='border rounded-xl shadow-md p-5 w-full m-5 sm:max-w-md'>
        <h1 className='font-semibold text-lg'>Enter new password</h1>
        {errorMsg && (
          <div className='text-sm text-red-600 bg-red-100 rounded-xl text-center px-3 py-1.5 my-3'>
            {errorMsg}
          </div>
        )}
        <div className='mt-4 space-y-3'>
          <input
            type={showPassword ? "text" : "password"}
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border rounded-xl px-3 py-2 w-full'
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className='border rounded-xl px-3 py-2 w-full'
          />
          {passwordMatch && (
            <span className='textsm text-red-600'>{passwordMatch}</span>
          )}
          <div className='text-sm flex items-center justify-end gap-3'>
            {showPassword ? "Hide password" : "Show password"}
            <button
              className='py-2 text-blue-600'
              onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <TbEyeOff className='w-5 h-5' />
              ) : (
                <TbEye className='w-5 h-5' />
              )}
            </button>
          </div>
          <button
            onClick={submitPassword}
            className='w-full bg-gray-900 hover:bg-gray-700 py-2 rounded-xl text-white'>
            {loading ? "wait..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
