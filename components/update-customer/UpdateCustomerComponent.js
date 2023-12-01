"use client";

import { supabaseClient } from "@/supabaseClient";
import { Disclosure } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { CgSpinnerAlt } from "react-icons/cg";
import { TbChevronUp } from "react-icons/tb";

const UpdateComponent = ({
  id,
  c_name,
  c_email,
  c_tel,
  c_style,
  c_neck,
  c_o_bust,
  c_bust,
  c_u_bust,
  c_waist,
  c_hips,
  c_nk_heel,
  c_nk_abov_knee,
  c_a_length,
  c_s_seam,
  c_arm_hole,
  c_bicep,
  c_fore_arm,
  c_wrist,
  c_v_neck_cut,
  c_abv_knee_ankle,
  c_w_abv_knee,
}) => {
  const router = useRouter();

  const [name, setName] = useState(c_name);
  const [email, setEmail] = useState(c_email);
  const [tel, setTel] = useState(c_tel);
  const [loadingPersonal, setLoadingPersonal] = useState(false);

  const [style, setStyle] = useState(c_style);
  const [loadingStyle, setLoadingStyle] = useState(false);

  const [neck, setNeck] = useState(c_neck);
  const [o_bust, setOBust] = useState(c_o_bust);
  const [bust, setBust] = useState(c_bust);
  const [u_bust, setUBust] = useState(c_u_bust);
  const [waist, setWaist] = useState(c_waist);
  const [hips, setHips] = useState(c_hips);
  const [nk_heel, setNkHeel] = useState(c_nk_heel);
  const [nk_abov_knee, setNkAbvKnee] = useState(c_nk_abov_knee);
  const [a_length, setALength] = useState(c_a_length);
  const [s_seam, setSSeam] = useState(c_s_seam);
  const [arm_hole, setArmHole] = useState(c_arm_hole);
  const [bicep, setBicep] = useState(c_bicep);
  const [fore_arm, setForeArm] = useState(c_fore_arm);
  const [wrist, setWrist] = useState(c_wrist);
  const [v_neck_cut, setVNeckCut] = useState(c_v_neck_cut);
  const [abv_knee_ankle, setAbvKneeAnkle] = useState(c_abv_knee_ankle);
  const [w_abv_knee, setWAbvKnee] = useState(c_w_abv_knee);
  const [loadingMeasurement, setLoadingMeasurement] = useState(false);


  const updatePersonalData = async () => {
    try {
      setLoadingPersonal(true);

      const { error } = await supabaseClient
        .from("customers")
        .update({ name, email, tel })
        .eq("id", id)
        .select();

      if (error) {
        throw new Error(`Something went wrong: `, error.message);
      }
      if (!error) {
        toast.success("Uploaded successfully", {
          duration: 5000,
          position: "top-center",
          // Aria
          ariaProps: {
            role: "status",
            "aria-live": "polite",
          },
        });
        router.refresh();
      }
    } catch (error) {
      console.log("Error Msg: ", error.message);
    } finally {
      setLoadingPersonal(false);
    }
  };

  const updateStyle = async () => {
    try {
      setLoadingStyle(true);

      const { error } = await supabaseClient
        .from("customers")
        .update({ style })
        .eq("id", id)
        .select();

      if (error) {
        throw new Error(`Something went wrong: `, error.message);
      }
      if (!error) {
        toast.success("Uploaded successfully", {
          duration: 5000,
          position: "top-center",
          // Aria
          ariaProps: {
            role: "status",
            "aria-live": "polite",
          },
        });
        router.refresh();
      }
    } catch (error) {
      console.log("Error Msg: ", error.message);
    } finally {
      setLoadingStyle(false);
    }
  };

  const updateMeasurement = async () => {
    try {
      setLoadingMeasurement(true);

      const { error } = await supabaseClient
        .from("customers")
        .update({
          neck,
          o_bust,
          bust,
          u_bust,
          waist,
          hips,
          nk_heel,
          nk_abov_knee,
          a_length,
          s_seam,
          arm_hole,
          bicep,
          fore_arm,
          wrist,
          v_neck_cut,
          abv_knee_ankle,
          w_abv_knee,
        })
        .eq("id", id)
        .select();

      if (error) {
        throw new Error(`Something went wrong: `, error.message);
      }
      if (!error) {
        toast.success("Uploaded successfully", {
          duration: 5000,
          position: "top-center",
          // Aria
          ariaProps: {
            role: "status",
            "aria-live": "polite",
          },
        });
        router.refresh();
      }
    } catch (error) {
      console.log("Error Msg: ", error.message);
    } finally {
      setLoadingMeasurement(false);
    }
  };

  return (
    <div className='w-full'>
      <div className='mx-auto w-full max-w-md rounded-2xl bg-white p-2'>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex w-full items-center justify-between rounded-lg bg-[#55c694] px-4 py-3 text-left font-medium text-white hover:bg-[#55c694]/70 focus:outline-none focus-visible:ring focus-visible:ring-[#55c694]/75'>
                <span>Update customer personal info</span>
                <TbChevronUp
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='px-4 pb-2 pt-4 text-sm text-gray-500'>
                <div className='flex flex-col gap-3'>
                  <div className='text-sm'>
                    <label>Name</label>
                    <input
                      type='text'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className='border outline-none rounded-xl w-full py-2 px-3 ring-1 ring-inset ring-[#55c694] focus:ring-2 focus:ring-inset focus:ring-[#55c694]/80'
                    />
                  </div>
                  <div className='text-sm'>
                    <label>Email</label>
                    <input
                      type='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className='border outline-none rounded-xl w-full py-2 px-3 ring-1 ring-inset ring-[#55c694] focus:ring-2 focus:ring-inset focus:ring-[#55c694]/80'
                    />
                  </div>
                  <div className='text-sm'>
                    <label>Tel</label>
                    <input
                      type='tel'
                      value={tel}
                      onChange={(e) => setTel(e.target.value)}
                      className='border outline-none rounded-xl w-full py-2 px-3 ring-1 ring-inset ring-[#55c694] focus:ring-2 focus:ring-inset focus:ring-[#55c694]/80'
                    />
                  </div>
                  <div className=''>
                    <button
                      onClick={updatePersonalData}
                      className='flex items-center justify-center gap-4 py-2.5 mt-2 font-medium tracking-wider rounded-xl w-full bg-black/10 text-black'>
                      {loadingPersonal ? (
                        <>
                          <CgSpinnerAlt className='text-xl animate-spin' />{" "}
                          <span>Updating</span>
                        </>
                      ) : (
                        "Update"
                      )}
                    </button>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as='div' className='mt-2'>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex w-full items-center justify-between rounded-lg bg-[#55c694] px-4 py-3 text-left font-medium text-white hover:bg-[#55c694]/70 focus:outline-none focus-visible:ring focus-visible:ring-[#55c694]/75'>
                <span>Update design style</span>
                <TbChevronUp
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='px-4 pb-2 pt-4 text-gray-500'>
                <div className='flex flex-col gap-3'>
                  <div className='text-sm'>
                    <label>Style</label>
                    <input
                      type='text'
                      value={style}
                      onChange={(e) => setStyle(e.target.value)}
                      className='border outline-none rounded-xl w-full py-2 px-3 ring-1 ring-inset ring-[#55c694] focus:ring-2 focus:ring-inset focus:ring-[#55c694]/80'
                    />
                  </div>

                  <div className=''>
                    <button
                      onClick={updateStyle}
                      className='flex items-center justify-center gap-4 py-2.5 mt-2 font-medium tracking-wider rounded-xl w-full bg-black/10 text-black'>
                      {loadingStyle ? (
                        <>
                          <CgSpinnerAlt className='text-xl animate-spin' />{" "}
                          <span>Updating</span>
                        </>
                      ) : (
                        "Update"
                      )}
                    </button>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as='div' className='mt-2'>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex w-full items-center justify-between rounded-lg bg-[#55c694] px-4 py-3 text-left font-medium text-white hover:bg-[#55c694]/70 focus:outline-none focus-visible:ring focus-visible:ring-[#55c694]/75'>
                <span>Update measurements</span>
                <TbChevronUp
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='px-4 pb-2 pt-4 text-gray-500'>
                <div className=' '>
                  <div className='mb-3 grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-3'>
                    <div className='text-sm flex flex-col items-center justify-center'>
                      <label>Neck</label>
                      <input
                        type='text'
                        value={neck}
                        onChange={(e) => setNeck(e.target.value)}
                        className='border text-center outline-none rounded-xl w-full py-2 px-3 ring-1 ring-inset ring-[#55c694] focus:ring-2 focus:ring-inset focus:ring-[#55c694]/80'
                      />
                    </div>
                    <div className='text-sm flex flex-col items-center justify-center'>
                      <label>O_bust</label>
                      <input
                        type='text'
                        value={o_bust}
                        onChange={(e) => setOBust(e.target.value)}
                        className='border text-center outline-none rounded-xl w-full py-2 px-3 ring-1 ring-inset ring-[#55c694] focus:ring-2 focus:ring-inset focus:ring-[#55c694]/80'
                      />
                    </div>
                    <div className='text-sm flex flex-col items-center justify-center'>
                      <label>Bust</label>
                      <input
                        type='text'
                        value={bust}
                        onChange={(e) => setBust(e.target.value)}
                        className='border text-center outline-none rounded-xl w-full py-2 px-3 ring-1 ring-inset ring-[#55c694] focus:ring-2 focus:ring-inset focus:ring-[#55c694]/80'
                      />
                    </div>
                    <div className='text-sm flex flex-col items-center justify-center'>
                      <label>U_bust</label>
                      <input
                        type='text'
                        value={u_bust}
                        onChange={(e) => setUBust(e.target.value)}
                        className='border text-center outline-none rounded-xl w-full py-2 px-3 ring-1 ring-inset ring-[#55c694] focus:ring-2 focus:ring-inset focus:ring-[#55c694]/80'
                      />
                    </div>
                    <div className='text-sm flex flex-col items-center justify-center'>
                      <label>Waist</label>
                      <input
                        type='text'
                        value={waist}
                        onChange={(e) => setWaist(e.target.value)}
                        className='border text-center outline-none rounded-xl w-full py-2 px-3 ring-1 ring-inset ring-[#55c694] focus:ring-2 focus:ring-inset focus:ring-[#55c694]/80'
                      />
                    </div>
                    <div className='text-sm flex flex-col items-center justify-center'>
                      <label>Hips</label>
                      <input
                        type='text'
                        value={hips}
                        onChange={(e) => setHips(e.target.value)}
                        className='border text-center outline-none rounded-xl w-full py-2 px-3 ring-1 ring-inset ring-[#55c694] focus:ring-2 focus:ring-inset focus:ring-[#55c694]/80'
                      />
                    </div>
                    <div className='text-sm flex flex-col items-center justify-center'>
                      <label>Nk_heel</label>
                      <input
                        type='text'
                        value={nk_heel}
                        onChange={(e) => setNkHeel(e.target.value)}
                        className='border text-center outline-none rounded-xl w-full py-2 px-3 ring-1 ring-inset ring-[#55c694] focus:ring-2 focus:ring-inset focus:ring-[#55c694]/80'
                      />
                    </div>
                    <div className='text-sm flex flex-col items-center justify-center'>
                      <label>Nk_abv_knee</label>
                      <input
                        type='text'
                        value={nk_abov_knee}
                        onChange={(e) => setNkAbvKnee(e.target.value)}
                        className='border text-center outline-none rounded-xl w-full py-2 px-3 ring-1 ring-inset ring-[#55c694] focus:ring-2 focus:ring-inset focus:ring-[#55c694]/80'
                      />
                    </div>
                    <div className='text-sm flex flex-col items-center justify-center'>
                      <label>A_length</label>
                      <input
                        type='text'
                        value={a_length}
                        onChange={(e) => setALength(e.target.value)}
                        className='border text-center outline-none rounded-xl w-full py-2 px-3 ring-1 ring-inset ring-[#55c694] focus:ring-2 focus:ring-inset focus:ring-[#55c694]/80'
                      />
                    </div>
                    <div className='text-sm flex flex-col items-center justify-center'>
                      <label>S_Seam</label>
                      <input
                        type='text'
                        value={s_seam}
                        onChange={(e) => setSSeam(e.target.value)}
                        className='border text-center outline-none rounded-xl w-full py-2 px-3 ring-1 ring-inset ring-[#55c694] focus:ring-2 focus:ring-inset focus:ring-[#55c694]/80'
                      />
                    </div>
                    <div className='text-sm flex flex-col items-center justify-center'>
                      <label>Arm_hole</label>
                      <input
                        type='text'
                        value={arm_hole}
                        onChange={(e) => setArmHole(e.target.value)}
                        className='border text-center outline-none rounded-xl w-full py-2 px-3 ring-1 ring-inset ring-[#55c694] focus:ring-2 focus:ring-inset focus:ring-[#55c694]/80'
                      />
                    </div>
                    <div className='text-sm flex flex-col items-center justify-center'>
                      <label>Bicep</label>
                      <input
                        type='text'
                        value={bicep}
                        onChange={(e) => setBicep(e.target.value)}
                        className='border text-center outline-none rounded-xl w-full py-2 px-3 ring-1 ring-inset ring-[#55c694] focus:ring-2 focus:ring-inset focus:ring-[#55c694]/80'
                      />
                    </div>
                    <div className='text-sm flex flex-col items-center justify-center'>
                      <label>Fore_arm</label>
                      <input
                        type='text'
                        value={fore_arm}
                        onChange={(e) => setForeArm(e.target.value)}
                        className='border text-center outline-none rounded-xl w-full py-2 px-3 ring-1 ring-inset ring-[#55c694] focus:ring-2 focus:ring-inset focus:ring-[#55c694]/80'
                      />
                    </div>
                    <div className='text-sm flex flex-col items-center justify-center'>
                      <label>wrist</label>
                      <input
                        type='text'
                        value={wrist}
                        onChange={(e) => setWrist(e.target.value)}
                        className='border text-center outline-none rounded-xl w-full py-2 px-3 ring-1 ring-inset ring-[#55c694] focus:ring-2 focus:ring-inset focus:ring-[#55c694]/80'
                      />
                    </div>
                    <div className='text-sm flex flex-col items-center justify-center'>
                      <label>V_neck_cut</label>
                      <input
                        type='text'
                        value={v_neck_cut}
                        onChange={(e) => setVNeckCut(e.target.value)}
                        className='border text-center outline-none rounded-xl w-full py-2 px-3 ring-1 ring-inset ring-[#55c694] focus:ring-2 focus:ring-inset focus:ring-[#55c694]/80'
                      />
                    </div>
                    <div className='text-sm flex flex-col items-center justify-center'>
                      <label>Abv_knee_ankle</label>
                      <input
                        type='text'
                        value={abv_knee_ankle}
                        onChange={(e) => setAbvKneeAnkle(e.target.value)}
                        className='border text-center outline-none rounded-xl w-full py-2 px-3 ring-1 ring-inset ring-[#55c694] focus:ring-2 focus:ring-inset focus:ring-[#55c694]/80'
                      />
                    </div>
                    <div className='text-sm flex flex-col items-center justify-center'>
                      <label>W_abv_knee</label>
                      <input
                        type='text'
                        value={w_abv_knee}
                        onChange={(e) => setWAbvKnee(e.target.value)}
                        className='border text-center outline-none rounded-xl w-full py-2 px-3 ring-1 ring-inset ring-[#55c694] focus:ring-2 focus:ring-inset focus:ring-[#55c694]/80'
                      />
                    </div>
                  </div>

                  <div className=''>
                    <button
                      onClick={updateMeasurement}
                      className='flex items-center justify-center gap-4 py-2.5 mt-2 font-medium tracking-wider rounded-xl w-full bg-black/10 text-black'>
                      {loadingMeasurement ? (
                        <>
                          <CgSpinnerAlt className='text-xl animate-spin' />{" "}
                          <span>Updating</span>
                        </>
                      ) : (
                        "Update"
                      )}
                    </button>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default UpdateComponent;
