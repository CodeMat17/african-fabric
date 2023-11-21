"use client";

import { supabaseClient } from "@/supabaseClient";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineLoading } from "react-icons/ai";

const MeasurementData = ({
  name,
  email,
  tel,
  style,
  avatar,
  fabric,
  setAvatar,
  setFabric,
  setName,
  setEmail,
  setTel,
  setStyle,
  setProfileData,
}) => {
  const router = useRouter();
  const [loadingProfile, setLoadingProfile] = useState(false);

  const [neck, setNeck] = useState("");
  const [o_bust, setOBust] = useState("");
  const [bust, setBust] = useState("");
  const [u_bust, setUBust] = useState("");
  const [waist, setWaist] = useState("");
  const [hips, setHips] = useState("");
  const [nk_heel, setNKHeel] = useState("");
  const [nk_abov_knee, setNKAbvKnee] = useState("");
  const [a_length, setALength] = useState("");
  const [s_seam, setSSeam] = useState("");
  const [arm_hole, setArmHole] = useState("");
  const [bicep, setBicep] = useState("");
  const [fore_arm, setForeArm] = useState("");
  const [wrist, setWrist] = useState("");
  const [v_neck_cut, setVNeckCut] = useState("");
  const [abv_knee_ankle, setAbvKneeAnkle] = useState("");
  const [w_abv_knee, setWAbvKnee] = useState("");

  const loadProfile = async () => {
    // e.preventDefault();
    try {
      setLoadingProfile(true);

      const { error } = await supabaseClient
        .from("customers")
        .insert([
          {
            avatar,
            fabric,
            name,
            email,
            tel,
            style,
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
          },
        ])
        .select();

      if (error) {
        alert(`Something went wrong: ${error.message}`);
      }

      if (!error) {
        toast.success(`Customer data and measurements uploaded successfully`, {
          duration: 5000,
          position: "top-center",
        });
        setNeck("");
        setOBust("");
        setBust("");
        setUBust("");
        setWaist("");
        setHips("");
        setNKHeel("");
        setNKAbvKnee("");
        setALength("");
        setSSeam("");
        setArmHole("");
        setBicep("");
        setForeArm("");
        setWrist("");
        setVNeckCut("");
        setAbvKneeAnkle("");
        setWAbvKnee("");
        setAvatar(null);
        setFabric(null);
        setName("");
        setEmail("");
        setTel("");
        setStyle("");
        setProfileData(true);
        router.refresh();
      }
    } catch (error) {
      console.log("ErrorMsg: ", error.message);
    } finally {
      setLoadingProfile(false);
    }
  };

  return (
    <div className='pt-2 pb-6 my-6 rounded-xl'>
      <p className='text-center text-lg'>Take measurements for {name}.</p>
      <div className='pt-4 text-sm grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-4'>
        <div className='flex flex-col'>
          <label className='text-gray-500'>Enter Neck</label>
          <input
            type='text'
            value={neck}
            onChange={(e) => setNeck(e.target.value)}
            placeholder='Enter Neck'
            className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-gray-500'>Enter O-Bust</label>
          <input
            type='text'
            value={o_bust}
            onChange={(e) => setOBust(e.target.value)}
            placeholder='Enter O-Bust'
            className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-gray-500'>Enter Bust</label>
          <input
            type='text'
            value={bust}
            onChange={(e) => setBust(e.target.value)}
            placeholder='Enter Bust'
            className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-gray-500'>Enter U-Bust</label>
          <input
            type='text'
            value={u_bust}
            onChange={(e) => setUBust(e.target.value)}
            placeholder='Enter U-Bust'
            className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-gray-500'>Enter Waist</label>
          <input
            type='text'
            value={waist}
            onChange={(e) => setWaist(e.target.value)}
            placeholder='Enter Waist'
            className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-gray-500'>Enter Hips</label>
          <input
            type='text'
            value={hips}
            onChange={(e) => setHips(e.target.value)}
            placeholder='Enter Hips'
            className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-gray-500'>Enter Nk-Heel</label>
          <input
            type='text'
            value={nk_heel}
            onChange={(e) => setNKHeel(e.target.value)}
            placeholder='Enter Nk-Heel'
            className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-gray-500'>Enter NK abv Knee</label>
          <input
            type='text'
            value={nk_abov_knee}
            onChange={(e) => setNKAbvKnee(e.target.value)}
            placeholder='Enter NK abv Knee'
            className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-gray-500'>Enter A-Length</label>
          <input
            type='text'
            value={a_length}
            onChange={(e) => setALength(e.target.value)}
            placeholder='Enter A-Length'
            className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-gray-500'>Enter S-Seam</label>
          <input
            type='text'
            value={s_seam}
            onChange={(e) => setSSeam(e.target.value)}
            placeholder='Enter S-Seam'
            className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-gray-500'>Enter Arm Hole</label>
          <input
            type='text'
            value={arm_hole}
            onChange={(e) => setArmHole(e.target.value)}
            placeholder='Enter Arm Hole'
            className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-gray-500'>Enter Bicep</label>
          <input
            type='text'
            value={bicep}
            onChange={(e) => setBicep(e.target.value)}
            placeholder='Enter Bicep'
            className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-gray-500'>Enter Fore Arm</label>
          <input
            type='text'
            value={fore_arm}
            onChange={(e) => setForeArm(e.target.value)}
            placeholder='Enter Fore Arm'
            className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-gray-500'>Enter Wrist</label>
          <input
            type='text'
            value={wrist}
            onChange={(e) => setWrist(e.target.value)}
            placeholder='Enter Wrist'
            className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-gray-500'>Enter V Neck Cut</label>
          <input
            type='text'
            value={v_neck_cut}
            onChange={(e) => setVNeckCut(e.target.value)}
            placeholder='Enter V Neck Cut'
            className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-gray-500'>Enter Abv Knee-Ankle</label>
          <input
            type='text'
            value={abv_knee_ankle}
            onChange={(e) => setAbvKneeAnkle(e.target.value)}
            placeholder='Enter Abv Knee-Ankle'
            className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-gray-500'>Enter abv Kneel</label>
          <input
            type='text'
            value={w_abv_knee}
            onChange={(e) => setWAbvKnee(e.target.value)}
            placeholder='Enter Waist abv Kneel'
            className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
          />
        </div>
      </div>

      <div className=' mt-6 px-4'>
        <button
          onClick={loadProfile}
          className='bg-[#55c694] w-full py-2.5 text-white rounded-xl group-invalid:pointer-events-none group-invalid:opacity-30'>
          {loadingProfile ? (
            <section className='flex items-center justify-center gap-3'>
              <AiOutlineLoading className='text-white text-2xl animate-spin' />
              <span>UPLOADING...</span>
            </section>
          ) : (
            "UPLOAD"
          )}
        </button>
      </div>
    </div>
  );
};

export default MeasurementData;
