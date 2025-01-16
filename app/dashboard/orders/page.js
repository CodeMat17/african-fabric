import CustomerOrderCard from "../../../components/CustomerOrderCard";
import Pagination from "../../../components/Pagination";
import SearchOrder from "../../../components/SearchOrder";
import { supabaseClient } from "../../../supabaseClient";

export const revalidate = 0;

const OrdersPage = async ({ searchParams }) => {
  const search = searchParams?.search || "";
  const start = searchParams?.start || 0;
  const end = searchParams?.end || 9;

  let query = supabaseClient
    .from("customers")
    .select(
      "id, created_at, name, email, tel, style, status, avatar, fabric, tailoring, beading, q_c, ready",
      {
        count: "exact",
      }
    )
    .order("created_at", { ascending: false })
    .range(start, end);

  if (search) {
    query = query.textSearch("name", search, {
      type: "websearch",
      config: "english",
    });
  }

  const { data, count } = await query;

  return (
    <div className='px-4 py-8'>
      <h1 className='text-center uppercase text-xl font-medium'>
        Order List <span>({count})</span>
      </h1>
      {/* <pre className='text-xs max-w-xs'>{ JSON.stringify(count, null, 2)}</pre> */}
      <div className='w-full mt-6 max-w-sm mx-auto'>
        <SearchOrder />
      </div>

      <div className='py-8'>
        <CustomerOrderCard data={data} />
      
        <div className='py-8  mx-auto'>
          <Pagination count={count} />
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
