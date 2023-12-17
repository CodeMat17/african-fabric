import TailorCard from "@/components/update-consultants/TailorCard";
import { supabaseClient } from "@/supabaseClient";

export const revalidate = 0;

const Beaders = async () => {
 let { data: beaders, error } = await supabaseClient
    .from("staffers")
    .select("*")
    .order("name", { ascending: true })
    .eq("position", "Beader");

  if (error) {
    throw new Error(`Somethingwent wrong: ${error.message}`);
  }

  return (
    <div className='py-6 px-4'>
      <p className='text-center text-xl uppercase font-medium'>Beaders</p>
      {/* <AddTailor /> */}
      <div className='py-10'>
        {beaders && beaders.length < 1 ? (
          <p className='text-center py-12'>No entry at the moment</p>
        ) : (
          <div className='max-w-xs sm:max-w-xl lg:max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 md:gap-6'>
            {beaders.map((user) => (
              <div
                key={user.id}
                className='border text-sm shadow-md bg-gray-100 odd:bg-gray-200 rounded-xl overflow-hidden p-6'>
                <div className='w-full flex flex-col items-center justify-center   '>
                  <h1 className='text-lg font-medium mt-2 text-center'>
                    {user.name}
                  </h1>
                  <p className=' text-center'>{user.tel}</p>
                </div>

                <div className='text-center mt-3 leading-5'>
                  <p>
                    {user.status ? (
                      <span className='text-red-600 font-medium text-md'>
                        Busy
                      </span>
                    ) : (
                      <span className='text-green-600 font-medium text-xl'>
                        Free
                      </span>
                    )}
                  </p>
                  {/* {user.busy && (
                    <div className='text-gray-500'>
                      <p>
                        Assigned on{" "}
                        <span>
                          {dayjs(user.assigned_on).format("MMM DD, YYYY")}
                        </span>
                      </p>
                      <p>
                        To finish on on{" "}
                        <span>
                          {dayjs(user.to_finish_on).format("MMM DD, YYYY")}
                        </span>
                      </p>
                    </div>
                  )} */}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Beaders;
