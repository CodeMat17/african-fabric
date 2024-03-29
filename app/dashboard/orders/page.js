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
        {/* <div>
          {data && data.length < 1 ? (
            <p className='text-center py-unit-12 text-red-500'>
              Invalid customer name. Try again.
            </p>
          ) : (
            <>
              <div className='sm:hidden grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-y-3'>
                {data &&
                  data.map((user) => <MobileTable key={user.id} {...user} />)}
              </div>
              <div className='hidden sm:block max-w-xl mx-auto overflow-x-auto'>
                <MediumTable data={data} />
              </div>
            </>
          )}
        </div> */}
        <div className='py-8  mx-auto'>
          <Pagination count={count} />
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
