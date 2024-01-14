"use client";

import { supabaseClient } from "@/supabaseClient";
import { CldUploadWidget } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { AiOutlineLoading } from "react-icons/ai";
import { TbCameraPlus } from "react-icons/tb";
import SketchScreenshotComponent from "./SketchScreenshotComponent";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MeasurementData = ({
  name,
  email,
  tel,
  style,
  avatar,
  fabric,
  selectedSex,
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
  const [m_on_paper, setMOnPaper] = useState("");
  const [sketch, setSketch] = useState("");
  const [due_date, setDueDate] = useState();
  const [three_days_2_due_date, setThreeDays] = useState();
  const [two_days_2_due_date, setTwoDays] = useState();

  const [forehead, setForehead] = useState("");
  const [chest_at_ampits, setChestAtAmpit] = useState("");
  const [chest_or_bust, setChestOrBust] = useState("");
  const [thigh_at_crotch, setThighAtCrotch] = useState("");
  const [mid_thigh, setMidThigh] = useState("");
  const [knee, setKnee] = useState("");
  const [below_knee, setBelowKnee] = useState("");
  const [calf, setCalf] = useState("");
  const [ankle, setAnkle] = useState("");
  const [elbow, setElbow] = useState("");
  const [forearm, setForearm] = useState("");
  const [torso_circum, setTorsoCircum] = useState("");
  const [pants_length, setPantsLength] = useState("");
  const [shoulders, setShoulders] = useState("");
  const [top_length, setTopLength] = useState("");

  useEffect(() => {
    if (due_date) {
      const threeDaysTo = new Date(due_date);
      threeDaysTo.setDate(due_date.getDate() - 3);
      setThreeDays(threeDaysTo);

      const twoDaysTo = new Date(due_date);
      twoDaysTo.setDate(due_date.getDate() - 2);
      setTwoDays(twoDaysTo);
    }
  }, [due_date]);

  const loadWomenProfile = async () => {
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
            m_on_paper,
            sex: selectedSex,
            sketch,
            due_date,
            three_days_2_due_date,
            two_days_2_due_date,
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
        setMOnPaper("");
        setSketch("");
        setDueDate();
        setProfileData(true);
        router.refresh();
      }
    } catch (error) {
      console.log("ErrorMsg: ", error.message);
    } finally {
      setLoadingProfile(false);
    }
  };

  const loadMenProfile = async () => {
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
            forehead,
            chest_at_ampits,
            chest_or_bust,
            waist,
            hips,
            thigh_at_crotch,
            mid_thigh,
            knee,
            below_knee,
            calf,
            bicep,
            ankle,
            wrist,
            elbow,
            forearm,
            torso_circum,
            pants_length,
            shoulders,
            top_length,
            sex: selectedSex,
            m_on_paper,
            sketch,
            due_date,
            three_days_2_due_date,
            two_days_2_due_date,
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
        setForehead("");
        setChestAtAmpit("");
        setChestOrBust("");
        setWaist("");
        setHips("");
        setThighAtCrotch("");
        setMidThigh("");
        setKnee("");
        setBelowKnee("");
        setCalf("");
        setBicep("");
        setAnkle("");
        setWrist("");
        setElbow("");
        setForearm("");
        setTorsoCircum("");
        setPantsLength('')
        setShoulders('')
        setTopLength('')
        setAvatar(null);
        setFabric(null);
        setName("");
        setEmail("");
        setTel("");
        setStyle("");
        setMOnPaper("");
        setSketch("");
        setDueDate();
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
    <div className='pt-2 pb-6 my-6 rounded-xl mx-auto'>
      <p className='text-center text-lg'>Take measurements for {name}.</p>

      {selectedSex === "Women" && (
        <div className='pt-4 text-sm grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-4 mx-auto'>
          <div className='flex flex-col w-full '>
            <label className='text-center text-gray-500'>Neck</label>
            <input
              type='text'
              value={neck}
              onChange={(e) => setNeck(e.target.value)}
              placeholder='enter neck'
              className='w-full p-2 text-center border rounded-xl outline-none'
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-center text-gray-500'>Over Bust</label>
            <input
              type='text'
              value={o_bust}
              onChange={(e) => setOBust(e.target.value)}
              placeholder='enter over bust'
              className='p-2 text-center border rounded-xl outline-none '
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-center text-gray-500'>Bust</label>
            <input
              type='text'
              value={bust}
              onChange={(e) => setBust(e.target.value)}
              placeholder='enter bust'
              className='p-2 text-center border rounded-xl outline-none '
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-center text-gray-500'>Under Bust</label>
            <input
              type='text'
              value={u_bust}
              onChange={(e) => setUBust(e.target.value)}
              placeholder='enter under bust'
              className='p-2 text-center border rounded-xl outline-none '
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-center text-gray-500'>Waist</label>
            <input
              type='text'
              value={waist}
              onChange={(e) => setWaist(e.target.value)}
              placeholder='enter waist'
              className='p-2 text-center border rounded-xl outline-none '
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-center text-gray-500'>Hips</label>
            <input
              type='text'
              value={hips}
              onChange={(e) => setHips(e.target.value)}
              placeholder='enter hips'
              className='p-2 text-center border rounded-xl outline-none '
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-center text-gray-500'>Neck to Heel</label>
            <input
              type='text'
              value={nk_heel}
              onChange={(e) => setNKHeel(e.target.value)}
              placeholder='enter neck to heel'
              className='p-2 text-center border rounded-xl outline-none '
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-center text-gray-500'>
              Neck to abv Knee
            </label>
            <input
              type='text'
              value={nk_abov_knee}
              onChange={(e) => setNKAbvKnee(e.target.value)}
              placeholder='enter neck to abv knee'
              className='p-2 text-center border rounded-xl outline-none '
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-center text-gray-500'>Arm Length</label>
            <input
              type='text'
              value={a_length}
              onChange={(e) => setALength(e.target.value)}
              placeholder='enter arm length'
              className='p-2 text-center border rounded-xl outline-none'
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-center text-gray-500'>Shoulder Seam</label>
            <input
              type='text'
              value={s_seam}
              onChange={(e) => setSSeam(e.target.value)}
              placeholder='enter shoulder seam'
              className='p-2 text-center border rounded-xl outline-none'
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-center text-gray-500'>Arm Hole</label>
            <input
              type='text'
              value={arm_hole}
              onChange={(e) => setArmHole(e.target.value)}
              placeholder='enter arm hole'
              className='p-2 text-center border rounded-xl outline-none '
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-center text-gray-500'>Bicep</label>
            <input
              type='text'
              value={bicep}
              onChange={(e) => setBicep(e.target.value)}
              placeholder='enter bicep'
              className='p-2 text-center border rounded-xl outline-none '
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-center text-gray-500'>Fore Arm</label>
            <input
              type='text'
              value={fore_arm}
              onChange={(e) => setForeArm(e.target.value)}
              placeholder='enter fore arm'
              className='p-2 text-center border rounded-xl outline-none '
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-center text-gray-500'>Wrist</label>
            <input
              type='text'
              value={wrist}
              onChange={(e) => setWrist(e.target.value)}
              placeholder='enter wrist'
              className='p-2 text-center border rounded-xl outline-none '
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-center text-gray-500'>V Neck Cut</label>
            <input
              type='text'
              value={v_neck_cut}
              onChange={(e) => setVNeckCut(e.target.value)}
              placeholder='enter v neck cut'
              className='p-2 text-center border rounded-xl outline-none '
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-center text-gray-500'>
              Abv Knee to Ankle
            </label>
            <input
              type='text'
              value={abv_knee_ankle}
              onChange={(e) => setAbvKneeAnkle(e.target.value)}
              placeholder='enter abv knee to ankle'
              className='w-full p-2 text-center border rounded-xl outline-none '
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-center text-gray-500'>
              Waist to Abv Knee
            </label>
            <input
              type='text'
              value={w_abv_knee}
              onChange={(e) => setWAbvKnee(e.target.value)}
              placeholder='enter waist to abv knee'
              className='p-2 text-center border rounded-xl outline-none '
            />
          </div>
        </div>
      )}

      {selectedSex === "Men" && (
        <div className='pt-4 text-sm grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-4 mx-auto'>
          <div className='flex flex-col w-full '>
            <label className='text-center text-gray-500'>Forehead</label>
            <input
              type='text'
              value={forehead}
              onChange={(e) => setForehead(e.target.value)}
              placeholder='enter forehead'
              className='w-full p-2 text-center border rounded-xl outline-none'
            />
          </div>
          <div className='flex flex-col w-full '>
            <label className='text-center text-gray-500'>Neck</label>
            <input
              type='text'
              value={neck}
              onChange={(e) => setNeck(e.target.value)}
              placeholder='enter neck'
              className='w-full p-2 text-center border rounded-xl outline-none'
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-center text-gray-500'>Chest @ ampits</label>
            <input
              type='text'
              value={chest_at_ampits}
              onChange={(e) => setChestAtAmpit(e.target.value)}
              placeholder='enter chest at ampits'
              className='p-2 text-center border rounded-xl outline-none '
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-center text-gray-500'>Chest or Bust</label>
            <input
              type='text'
              value={chest_or_bust}
              onChange={(e) => setChestOrBust(e.target.value)}
              placeholder='enter chest or bust'
              className='p-2 text-center border rounded-xl outline-none '
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-center text-gray-500'>Waist</label>
            <input
              type='text'
              value={waist}
              onChange={(e) => setWaist(e.target.value)}
              placeholder='enter waist'
              className='p-2 text-center border rounded-xl outline-none '
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-center text-gray-500'>Hips</label>
            <input
              type='text'
              value={hips}
              onChange={(e) => setHips(e.target.value)}
              placeholder='enter hips'
              className='p-2 text-center border rounded-xl outline-none '
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-center text-gray-500'>Thigh @ crotch</label>
            <input
              type='text'
              value={thigh_at_crotch}
              onChange={(e) => setThighAtCrotch(e.target.value)}
              placeholder='enter thigh @ crotch'
              className='p-2 text-center border rounded-xl outline-none '
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-center text-gray-500'>Mid Thigh</label>
            <input
              type='text'
              value={mid_thigh}
              onChange={(e) => setMidThigh(e.target.value)}
              placeholder='enter mid thigh'
              className='p-2 text-center border rounded-xl outline-none '
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-center text-gray-500'>Knee</label>
            <input
              type='text'
              value={knee}
              onChange={(e) => setKnee(e.target.value)}
              placeholder='enter knee'
              className='p-2 text-center border rounded-xl outline-none'
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-center text-gray-500'>Below Knee</label>
            <input
              type='text'
              value={below_knee}
              onChange={(e) => setBelowKnee(e.target.value)}
              placeholder='enter below knee'
              className='p-2 text-center border rounded-xl outline-none'
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-center text-gray-500'>Calf</label>
            <input
              type='text'
              value={calf}
              onChange={(e) => setCalf(e.target.value)}
              placeholder='enter calf'
              className='p-2 text-center border rounded-xl outline-none '
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-center text-gray-500'>Ankle</label>
            <input
              type='text'
              value={ankle}
              onChange={(e) => setAnkle(e.target.value)}
              placeholder='enter ankle'
              className='p-2 text-center border rounded-xl outline-none '
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-center text-gray-500'>Bicep</label>
            <input
              type='text'
              value={bicep}
              onChange={(e) => setBicep(e.target.value)}
              placeholder='enter bicep'
              className='p-2 text-center border rounded-xl outline-none '
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-center text-gray-500'>Elbow</label>
            <input
              type='text'
              value={elbow}
              onChange={(e) => setElbow(e.target.value)}
              placeholder='enter elbow'
              className='p-2 text-center border rounded-xl outline-none '
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-center text-gray-500'>Forearm</label>
            <input
              type='text'
              value={forearm}
              onChange={(e) => setForearm(e.target.value)}
              placeholder='enter forearm'
              className='p-2 text-center border rounded-xl outline-none '
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-center text-gray-500'>Wrist</label>
            <input
              type='text'
              value={wrist}
              onChange={(e) => setWrist(e.target.value)}
              placeholder='enter wrist'
              className='w-full p-2 text-center border rounded-xl outline-none '
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-center text-gray-500'>Torso Circum.</label>
            <input
              type='text'
              value={torso_circum}
              onChange={(e) => setTorsoCircum(e.target.value)}
              placeholder='enter torso circum.'
              className='p-2 text-center border rounded-xl outline-none '
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-center text-gray-500'>Pants Length</label>
            <input
              type='text'
              value={pants_length}
              onChange={(e) => setPantsLength(e.target.value)}
              placeholder='enter pants length'
              className='p-2 text-center border rounded-xl outline-none '
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-center text-gray-500'>Shoulders</label>
            <input
              type='text'
              value={shoulders}
              onChange={(e) => setShoulders(e.target.value)}
              placeholder='enter shoulders'
              className='p-2 text-center border rounded-xl outline-none '
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-center text-gray-500'>Top Length</label>
            <input
              type='text'
              value={top_length}
              onChange={(e) => setTopLength(e.target.value)}
              placeholder='enter top length'
              className='p-2 text-center border rounded-xl outline-none '
            />
          </div>
        </div>
      )}

      {/* <div className='mt-8'>
        <Tab.Group>
          <Tab.List className='flex space-x-1 rounded-xl bg-black/10 p-1 max-w-xs mx-auto'>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                  "ring-white/60 ring-offset-2 ring-offset-green-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white text-green-700 shadow"
                    : "text-black hover:bg-white/[0.12] "
                )
              }>
              Female
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                  "ring-white/60 ring-offset-2 ring-offset-green-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white text-green-700 shadow"
                    : "text-black hover:bg-white/[0.12] "
                )
              }>
              Male
            </Tab>
          </Tab.List>
          <Tab.Panels className='mt-2'>
            <Tab.Panel
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white/60 ring-offset-2 ring-offset-green-400 focus:outline-none focus:ring-2"
              )}>
              <div className='pt-4 text-sm grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-4 mx-auto'>
                <div className='flex flex-col w-full '>
                  <label className='text-center text-gray-500'>Neck</label>
                  <input
                    type='text'
                    value={neck}
                    onChange={(e) => setNeck(e.target.value)}
                    placeholder='enter neck'
                    className='w-full p-2 text-center border rounded-xl outline-none'
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='text-center text-gray-500'>Over Bust</label>
                  <input
                    type='text'
                    value={o_bust}
                    onChange={(e) => setOBust(e.target.value)}
                    placeholder='enter over bust'
                    className='p-2 text-center border rounded-xl outline-none '
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='text-center text-gray-500'>Bust</label>
                  <input
                    type='text'
                    value={bust}
                    onChange={(e) => setBust(e.target.value)}
                    placeholder='enter bust'
                    className='p-2 text-center border rounded-xl outline-none '
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='text-center text-gray-500'>
                    Under Bust
                  </label>
                  <input
                    type='text'
                    value={u_bust}
                    onChange={(e) => setUBust(e.target.value)}
                    placeholder='enter under bust'
                    className='p-2 text-center border rounded-xl outline-none '
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='text-center text-gray-500'>Waist</label>
                  <input
                    type='text'
                    value={waist}
                    onChange={(e) => setWaist(e.target.value)}
                    placeholder='enter waist'
                    className='p-2 text-center border rounded-xl outline-none '
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='text-center text-gray-500'>Hips</label>
                  <input
                    type='text'
                    value={hips}
                    onChange={(e) => setHips(e.target.value)}
                    placeholder='enter hips'
                    className='p-2 text-center border rounded-xl outline-none '
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='text-center text-gray-500'>
                    Neck to Heel
                  </label>
                  <input
                    type='text'
                    value={nk_heel}
                    onChange={(e) => setNKHeel(e.target.value)}
                    placeholder='enter neck to heel'
                    className='p-2 text-center border rounded-xl outline-none '
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='text-center text-gray-500'>
                    Neck to abv Knee
                  </label>
                  <input
                    type='text'
                    value={nk_abov_knee}
                    onChange={(e) => setNKAbvKnee(e.target.value)}
                    placeholder='enter neck to abv knee'
                    className='p-2 text-center border rounded-xl outline-none '
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='text-center text-gray-500'>
                    Arm Length
                  </label>
                  <input
                    type='text'
                    value={a_length}
                    onChange={(e) => setALength(e.target.value)}
                    placeholder='enter arm length'
                    className='p-2 text-center border rounded-xl outline-none'
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='text-center text-gray-500'>
                    Shoulder Seam
                  </label>
                  <input
                    type='text'
                    value={s_seam}
                    onChange={(e) => setSSeam(e.target.value)}
                    placeholder='enter shoulder seam'
                    className='p-2 text-center border rounded-xl outline-none'
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='text-center text-gray-500'>Arm Hole</label>
                  <input
                    type='text'
                    value={arm_hole}
                    onChange={(e) => setArmHole(e.target.value)}
                    placeholder='enter arm hole'
                    className='p-2 text-center border rounded-xl outline-none '
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='text-center text-gray-500'>Bicep</label>
                  <input
                    type='text'
                    value={bicep}
                    onChange={(e) => setBicep(e.target.value)}
                    placeholder='enter bicep'
                    className='p-2 text-center border rounded-xl outline-none '
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='text-center text-gray-500'>Fore Arm</label>
                  <input
                    type='text'
                    value={fore_arm}
                    onChange={(e) => setForeArm(e.target.value)}
                    placeholder='enter fore arm'
                    className='p-2 text-center border rounded-xl outline-none '
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='text-center text-gray-500'>Wrist</label>
                  <input
                    type='text'
                    value={wrist}
                    onChange={(e) => setWrist(e.target.value)}
                    placeholder='enter wrist'
                    className='p-2 text-center border rounded-xl outline-none '
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='text-center text-gray-500'>
                    V Neck Cut
                  </label>
                  <input
                    type='text'
                    value={v_neck_cut}
                    onChange={(e) => setVNeckCut(e.target.value)}
                    placeholder='enter v neck cut'
                    className='p-2 text-center border rounded-xl outline-none '
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='text-center text-gray-500'>
                    Abv Knee to Ankle
                  </label>
                  <input
                    type='text'
                    value={abv_knee_ankle}
                    onChange={(e) => setAbvKneeAnkle(e.target.value)}
                    placeholder='enter abv knee to ankle'
                    className='w-full p-2 text-center border rounded-xl outline-none '
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='text-center text-gray-500'>
                    Waist to Abv Knee
                  </label>
                  <input
                    type='text'
                    value={w_abv_knee}
                    onChange={(e) => setWAbvKnee(e.target.value)}
                    placeholder='enter waist to abv knee'
                    className='p-2 text-center border rounded-xl outline-none '
                  />
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white/60 ring-offset-2 ring-offset-green-400 focus:outline-none focus:ring-2"
              )}>
              Male measurements
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div> */}

      <div className='pb-6 pt-12'>
        <p className='mb-4 text-center font-medium'>Due date</p>
        <div className='flex justify-center'>
          <DatePicker
            // showIcon
            placeholderText='Click to add finish date'
            selected={due_date}
            onChange={(date) => setDueDate(date)}
            dateFormat='MMM dd, yyyy'
            className='bg-inherit outline-none text-center text-gray-500 border p-4 w-full rounded-xl cursor-pointer'
          />
        </div>
      </div>

      <div className='py-8 flex flex-col items-center justify-center sm:flex-row gap-8'>
        <div className='flex flex-col items-center justify-center'>
          <p className='mb-4 text-center font-medium'>
            Upload measurement on paper
          </p>
          <div>
            {m_on_paper ? (
              <div>
                <SketchScreenshotComponent
                  width='250'
                  height='700'
                  image={m_on_paper}
                  sizes='50vw'
                  classnames='rounded-xl'
                />
              </div>
            ) : (
              <div className='border rounded-xl w-[250px] aspect-video bg-gray-200' />
            )}
            <div className='pt-2 flex justify-center'>
              <CldUploadWidget
                uploadPreset='af_measurements'
                folder='af_designs/measurements'
                onSuccess={(result) => {
                  // handle successful upload
                  setMOnPaper(result.info.public_id);
                  // setPix(result.info.secure_url);
                  // console.log(`result: `, result.info.secure_url);
                }}>
                {({ open }) => {
                  function handleOnClick(e) {
                    e.preventDefault();
                    open();
                  }
                  return (
                    <button
                      onClick={handleOnClick}
                      className='flex justify-center items-center gap-4 px-6 text-[#55c694] bg-[#55c694]/20 p-2 rounded-full'>
                      {/* Attach */}
                      <TbCameraPlus className=' text-2xl' />
                      <span>Attach</span>
                    </button>
                  );
                }}
              </CldUploadWidget>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <p className='mb-4 text-center font-medium'>Upload sketch</p>
          <div>
            {sketch ? (
              <div>
                <SketchScreenshotComponent
                  width='250'
                  height='700'
                  image={sketch}
                  sizes='50vw'
                  classnames='rounded-xl'
                />
              </div>
            ) : (
              <div className='border rounded-xl w-[250px] aspect-video bg-gray-200' />
            )}
            <div className='pt-2 flex justify-center'>
              <CldUploadWidget
                uploadPreset='af_measurements'
                folder='af_designs/measurements'
                onSuccess={(result) => {
                  // handle successful upload
                  setSketch(result.info.public_id);
                  // setPix(result.info.secure_url);
                  // console.log(`result: `, result.info.secure_url);
                }}>
                {({ open }) => {
                  function handleOnClick(e) {
                    e.preventDefault();
                    open();
                  }
                  return (
                    <button
                      onClick={handleOnClick}
                      className='flex justify-center items-center gap-4 px-6 text-[#55c694] bg-[#55c694]/20 p-2 rounded-full'>
                      {/* Attach */}
                      <TbCameraPlus className=' text-2xl' />
                      <span>Attach</span>
                    </button>
                  );
                }}
              </CldUploadWidget>
            </div>
          </div>
        </div>
      </div>
      {selectedSex === "Women" && (
        <div className=' mt-6 px-4'>
          <button
            onClick={loadWomenProfile}
            className='bg-[#55c694] w-full py-2.5 text-white rounded-xl group-invalid:pointer-events-none group-invalid:opacity-30 disabled:bg-[#55c694]/40 disabled:cursor-not-allowed'
            disabled={
              !sketch ||
              !m_on_paper ||
              !neck ||
              !o_bust ||
              !bust ||
              !u_bust ||
              !waist ||
              !hips ||
              !nk_heel ||
              !nk_abov_knee ||
              !a_length ||
              !s_seam ||
              !arm_hole ||
              !bicep ||
              !fore_arm ||
              !wrist ||
              !v_neck_cut ||
              !abv_knee_ankle ||
              !w_abv_knee ||
              !due_date
            }>
            {loadingProfile ? (
              <section className='flex items-center justify-center gap-3'>
                <AiOutlineLoading className='text-white text-2xl animate-spin' />
                <span>UPLOADING...</span>
              </section>
            ) : (
              "UPLOAD"
            )}
          </button>
          {!sketch ||
          !m_on_paper ||
          !neck ||
          !o_bust ||
          !bust ||
          !u_bust ||
          !waist ||
          !hips ||
          !nk_heel ||
          !nk_abov_knee ||
          !a_length ||
          !s_seam ||
          !arm_hole ||
          !bicep ||
          !fore_arm ||
          !wrist ||
          !v_neck_cut ||
          !abv_knee_ankle ||
          !w_abv_knee ||
          !due_date ? (
            <p className='text-xs text-red-500 text-center pt-0.5'>
              Fill all the provided feilds
            </p>
          ) : (
            ""
          )}
        </div>
      )}

      {selectedSex === "Men" && (
        <div className=' mt-6 px-4'>
          <button
            onClick={loadMenProfile}
            className='bg-[#55c694] w-full py-2.5 text-white rounded-xl group-invalid:pointer-events-none group-invalid:opacity-30 disabled:bg-[#55c694]/40 disabled:cursor-not-allowed'
            disabled={
              !sketch ||
              !m_on_paper ||
              !neck ||
              !forehead ||
              !chest_at_ampits ||
              !chest_or_bust ||
              !waist ||
              !hips ||
              !thigh_at_crotch ||
              !mid_thigh ||
              !knee ||
              !below_knee ||
              !calf ||
              !bicep ||
              !ankle ||
              !wrist ||
              !elbow ||
              !forearm ||
              !torso_circum ||
              !pants_length ||
              !shoulders ||
              !top_length ||
              !due_date
            }>
            {loadingProfile ? (
              <section className='flex items-center justify-center gap-3'>
                <AiOutlineLoading className='text-white text-2xl animate-spin' />
                <span>UPLOADING...</span>
              </section>
            ) : (
              "UPLOAD"
            )}
          </button>
          {!sketch ||
          !m_on_paper ||
          !neck ||
          !forehead ||
          !chest_at_ampits ||
          !chest_or_bust ||
          !waist ||
          !hips ||
          !thigh_at_crotch ||
          !mid_thigh ||
          !knee ||
          !below_knee ||
          !calf ||
          !bicep ||
          !ankle ||
          !wrist ||
          !elbow ||
          !forearm ||
          !torso_circum ||
          !pants_length ||
          !shoulders ||
          !top_length ||
          !due_date ? (
            <p className='text-xs text-red-500 text-center pt-0.5'>
              Fill all the provided feilds
            </p>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};

export default MeasurementData;
