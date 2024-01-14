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
  c_sex,
  c_forehead,
  c_chest_at_ampits,
  c_chest_or_bust,
  c_thigh_at_crotch,
  c_mid_thigh,
  c_knee,
  c_below_knee,
  c_calf,
  c_ankle,
  c_elbow,
  c_forearm,
  c_torso_circum,
  c_pants_length,
  c_shoulders,
  c_top_length,
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

  const [forehead, setForeHead] = useState(c_forehead);
  const [chest_at_ampits, setChestAtAmpits] = useState(c_chest_at_ampits);
  const [chest_or_bust, setChestOrBust] = useState(c_chest_or_bust);
  const [thigh_at_crotch, setThighAtCrotch] = useState(c_thigh_at_crotch);
  const [mid_thigh, setMidThigh] = useState(c_mid_thigh);
  const [knee, setKnee] = useState(c_knee);
  const [below_knee, setBelowKnee] = useState(c_below_knee);
  const [calf, setCalf] = useState(c_calf);
  const [ankle, setAnkle] = useState(c_ankle);
  const [elbow, setElbow] = useState(c_elbow);
  const [forearm, setForearm] = useState(c_forearm);
  const [torso_circum, setTorsoCircum] = useState(c_torso_circum);
  const [pants_length, setPantsLength] = useState(c_pants_length);
  const [shoulders, setShoulders] = useState(c_shoulders);
  const [top_length, setTopLength] = useState(c_top_length);

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

  const updateWomenMeasurement = async () => {
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

  const updateMenMeasurement = async () => {
    try {
      setLoadingMeasurement(true);

      const { error } = await supabaseClient
        .from("customers")
        .update({
          neck,
          forehead,
          chest_at_ampits,
          chest_or_bust,
          u_bust,
          waist,
          hips,
          thigh_at_crotch,
          mid_thigh,
          knee,
          below_knee,
          calf,
          bicep,
          forearm,
          wrist,
          ankle,
          elbow,
          torso_circum,
          pants_length,
          shoulders,
          top_length,
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
              <Disclosure.Panel className='pb-2 pt-4 text-gray-500'>
                <div className=' '>
                  {c_sex === "Women" && (
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
                  )}

                  {c_sex === "Men" && (
                    <div className='mb-3 grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-2'>
                      <div className='text-sm flex flex-col items-center justify-center'>
                        <label>Forehead</label>
                        <input
                          type='text'
                          value={forehead}
                          onChange={(e) => setForeHead(e.target.value)}
                          className='border text-center outline-none rounded-xl w-full py-2 px-3 ring-1 ring-inset ring-[#55c694] focus:ring-2 focus:ring-inset focus:ring-[#55c694]/80'
                        />
                      </div>
                      <div className='text-sm flex flex-col items-center justify-center'>
                        <label>Neck</label>
                        <input
                          type='text'
                          value={neck}
                          onChange={(e) => setNeck(e.target.value)}
                          className='border text-center outline-none rounded-xl w-full py-2 px-3 ring-1 ring-inset ring-[#55c694] focus:ring-2 focus:ring-inset focus:ring-[#55c694]/80'
                        />
                      </div>
                      <div className='text-sm flex flex-col items-center justify-center text-center'>
                        <label>Chest@ampits</label>
                        <input
                          type='text'
                          value={chest_at_ampits}
                          onChange={(e) => setChestAtAmpits(e.target.value)}
                          className='border text-center outline-none rounded-xl w-full py-2 px-3 ring-1 ring-inset ring-[#55c694] focus:ring-2 focus:ring-inset focus:ring-[#55c694]/80'
                        />
                      </div>
                      <div className='text-sm flex flex-col items-center justify-center'>
                        <label>Chest or bust</label>
                        <input
                          type='text'
                          value={chest_or_bust}
                          onChange={(e) => setChestOrBust(e.target.value)}
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
                        <label>Thigh@crotch</label>
                        <input
                          type='text'
                          value={thigh_at_crotch}
                          onChange={(e) => setThighAtCrotch(e.target.value)}
                          className='border text-center outline-none rounded-xl w-full py-2 px-3 ring-1 ring-inset ring-[#55c694] focus:ring-2 focus:ring-inset focus:ring-[#55c694]/80'
                        />
                      </div>
                      <div className='text-sm flex flex-col items-center justify-center'>
                        <label>Mid thigh</label>
                        <input
                          type='text'
                          value={mid_thigh}
                          onChange={(e) => setMidThigh(e.target.value)}
                          className='border text-center outline-none rounded-xl w-full py-2 px-3 ring-1 ring-inset ring-[#55c694] focus:ring-2 focus:ring-inset focus:ring-[#55c694]/80'
                        />
                      </div>
                      <div className='text-sm flex flex-col items-center justify-center'>
                        <label>Knee</label>
                        <input
                          type='text'
                          value={knee}
                          onChange={(e) => setKnee(e.target.value)}
                          className='border text-center outline-none rounded-xl w-full py-2 px-3 ring-1 ring-inset ring-[#55c694] focus:ring-2 focus:ring-inset focus:ring-[#55c694]/80'
                        />
                      </div>
                      <div className='text-sm flex flex-col items-center justify-center'>
                        <label>Below knee</label>
                        <input
                          type='text'
                          value={below_knee}
                          onChange={(e) => setBelowKnee(e.target.value)}
                          className='border text-center outline-none rounded-xl w-full py-2 px-3 ring-1 ring-inset ring-[#55c694] focus:ring-2 focus:ring-inset focus:ring-[#55c694]/80'
                        />
                      </div>
                      <div className='text-sm flex flex-col items-center justify-center'>
                        <label>Calf</label>
                        <input
                          type='text'
                          value={calf}
                          onChange={(e) => setCalf(e.target.value)}
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
                        <label>Ankle</label>
                        <input
                          type='text'
                          value={ankle}
                          onChange={(e) => setAnkle(e.target.value)}
                          className='border text-center outline-none rounded-xl w-full py-2 px-3 ring-1 ring-inset ring-[#55c694] focus:ring-2 focus:ring-inset focus:ring-[#55c694]/80'
                        />
                      </div>
                      <div className='text-sm flex flex-col items-center justify-center'>
                        <label>Elbow</label>
                        <input
                          type='text'
                          value={elbow}
                          onChange={(e) => setElbow(e.target.value)}
                          className='border text-center outline-none rounded-xl w-full py-2 px-3 ring-1 ring-inset ring-[#55c694] focus:ring-2 focus:ring-inset focus:ring-[#55c694]/80'
                        />
                      </div>
                      <div className='text-sm flex flex-col items-center justify-center'>
                        <label>Forearm</label>
                        <input
                          type='text'
                          value={forearm}
                          onChange={(e) => setForearm(e.target.value)}
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
                        <label>Torso circum</label>
                        <input
                          type='text'
                          value={torso_circum}
                          onChange={(e) => setTorsoCircum(e.target.value)}
                          className='border text-center outline-none rounded-xl w-full py-2 px-3 ring-1 ring-inset ring-[#55c694] focus:ring-2 focus:ring-inset focus:ring-[#55c694]/80'
                        />
                      </div>
                      <div className='text-sm flex flex-col items-center justify-center'>
                        <label>Pants length</label>
                        <input
                          type='text'
                          value={pants_length}
                          onChange={(e) => setPantsLength(e.target.value)}
                          className='border text-center outline-none rounded-xl w-full py-2 px-3 ring-1 ring-inset ring-[#55c694] focus:ring-2 focus:ring-inset focus:ring-[#55c694]/80'
                        />
                      </div>
                      <div className='text-sm flex flex-col items-center justify-center'>
                        <label>Shoulders</label>
                        <input
                          type='text'
                          value={shoulders}
                          onChange={(e) => setShoulders(e.target.value)}
                          className='border text-center outline-none rounded-xl w-full py-2 px-3 ring-1 ring-inset ring-[#55c694] focus:ring-2 focus:ring-inset focus:ring-[#55c694]/80'
                        />
                      </div>
                      <div className='text-sm flex flex-col items-center justify-center'>
                        <label>Top length</label>
                        <input
                          type='text'
                          value={top_length}
                          onChange={(e) => setTopLength(e.target.value)}
                          className='border text-center outline-none rounded-xl w-full py-2 px-3 ring-1 ring-inset ring-[#55c694] focus:ring-2 focus:ring-inset focus:ring-[#55c694]/80'
                        />
                      </div>
                    </div>
                  )}

                  <div className=''>
                    {c_sex === "Women" && (
                      <button
                        onClick={updateWomenMeasurement}
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
                    )}
                    {c_sex === "Men" && (
                      <button
                        onClick={updateMenMeasurement}
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
                    )}
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
