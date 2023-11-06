import OrderTable from "@/components/table/OrderTable";
import { supabaseClient } from "../../../supabaseClient";

const OrdersPage = async () => {
  let { data, error, count } = await supabaseClient
    .from("customers")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className='p-4'>
      <h1 className='text-center uppercase text-xl font-medium'>Order List</h1>
      {/* <pre className='text-xs'>{ JSON.stringify(data, null, 2)}</pre> */}
      <div className='w-full py-6 overflow-x-auto max-w-xs sm:max-w-xl md:max-w-full mx-auto'>
        <OrderTable users={data} />
      </div>
    </div>
  );
};

export default OrdersPage;
