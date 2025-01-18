import AssignToTailorComponent from "../../../../components/AssignToTailorComponent";
import { supabaseClient } from "../../../../supabaseClient";

export const revalidate = 0;

const AssignToTailor = async ({ searchParams }) => {
  const id = searchParams?.id || "";
  const name = searchParams?.name || "";
  const fabric = searchParams?.fabric || "";

  const { data: tailors } = await supabaseClient
    .from("tailors")
    .select("id, name, busy, assigned_on, to_finish_on")

  return (
    <div className='px-4 py-8'>
      <p className='text-center text-xl uppercase'>Assign to a Tailor</p>
      <AssignToTailorComponent
        tailors={tailors}
        id={id}
        name={name}
        fabric={fabric}
      />
    </div>
  );
};

export default AssignToTailor;
