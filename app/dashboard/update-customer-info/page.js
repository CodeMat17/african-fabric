import UpdateCustomerCard from "@/components/update-customer/UpdateCustomerCard";
import SearchComponent from "@/components/update-customer/SearchComponent";
import { supabaseClient } from "../../../supabaseClient";
import PaginationComponent from "@/components/update-customer/PaginationComponent";

export const revalidate = 0;

const UpdateCustomerInfo = async ({ searchParams }) => {
  const search = searchParams?.search || "";
  const start = searchParams?.start || 0;
  const end = searchParams?.end || 9;
    
  let query = supabaseClient
    .from("customers")
    .select(
      "id, name, email, tel, avatar, style, tailoring, beading, q_c, ready",
      {
        count: "exact",
      }
    )
    .order("created_at", { ascending: false })
    .range(start, end);

  if (search) {
    query = query.textSearch("name", search);
  }

  const { data, count } = await query;

  return (
    <div className='px-4 pt-8 pb-12'>
      <h2 className='text-lg font-medium text-center'>Update Customer Data</h2>

      <div className='max-w-xs mx-auto py-6'>
        <SearchComponent />
      </div>
      <div className='pt-2 pb-6'>
        <UpdateCustomerCard data={data} />
      </div>

      <div>
        <PaginationComponent count={count} />
      </div>
    </div>
  );
};

export default UpdateCustomerInfo;
