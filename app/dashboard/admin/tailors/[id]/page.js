import DeleteTailor from "../../../../../components/DeleteTailor";
import EditTailor from "../../../../../components/EditTailor";
import { supabaseClient } from "../../../../../supabaseClient";
import dayjs from "dayjs";
import { notFound } from "next/navigation";

export const revalidate = 0;

const AdminTailorID = async ({ params: { id } }) => {
  let {
    data: tailor,
    error,
    count,
  } = await supabaseClient.from("tailors").select("*").match({ id }).single();

  if (!tailor) {
    notFound;
  }

  return (
    <div className='px-4 pt-4 pb-12'>
      <p className='uppercase text-center text-xl font-medium'>
        Tailor Details
      </p>

      <div className='mt-16 flex flex-col justify-center text-center'>
        <h2 className='text-center text-xl '>{tailor.name}</h2>
        <p>{tailor.tel}</p>
        <p
          className={`mt-4 font-semibold tracking-wide ${
            tailor.busy ? "text-red-600" : "text-green-600"
          }`}>
          {tailor.busy ? "BUSY" : "FREE"}
        </p>
        {tailor.busy && (
          <p>
            Job assigned on {dayjs(tailor.assigned_on).format("MMM DD, YYYY")}
          </p>
        )}
        {tailor.busy && (
          <p>
            To finish on {dayjs(tailor.to_finish_on).format("MMM DD, YYYY")}
          </p>
        )}
      </div>
      <div className='mt-10 flex justify-center items-center gap-8'>
        <EditTailor id={tailor.id} tname={tailor.name} ttel={tailor.tel} />

        <DeleteTailor id={tailor.id} />
      </div>
    </div>
  );
};

export default AdminTailorID;
