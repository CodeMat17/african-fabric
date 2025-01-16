import NotificationComponent from "../../../components/NotificationComponent";
import { supabaseClient } from "../../../supabaseClient";

const NotificationPage = async () => {
  const today = new Date().toISOString().split("T")[0];

  const { data: notifications, error } = await supabaseClient
    .from("customers")
    .select(
      "id, name, tel, created_at, due_date, avatar, fabric, due_date, three_days_2_due_date, two_days_2_due_date, one_day_2_due_date"
    )
    .or(
      `two_days_2_due_date.eq.${today}, three_days_2_due_date.eq.${today}, due_date.eq.${today}`
    );
  
  
  if (error) {
    throw new Error(`Something went wrong: ${error.message}`);
  }

  return (
    <div className='px-4 pt-8 pb-20'>
      <p className='text-center text-xl font-medium'>
        Job(s) due time notification.
      </p>
      {/* <pre>{JSON.stringify(notifications, null, 2)}</pre> */}
      <div className='py-8'>
        <NotificationComponent notifications={notifications} />
      </div>
    </div>
  );
};

export default NotificationPage;
