import RecentCustomerCard from "./RecentCustomerCard";

const RecentOrders = ({ recent }) => {
  return (
    <div className='py-12 w-full md:max-w-lg lg:max-w-xl mx-auto'>
      <p className='font-medium mb-2'>Most recent orders ({recent.length}) </p>

      <div className='flex flex-col space-y-2'>
        {!recent && <p>No recent order at the moment.</p>}
        {recent && recent.length === 0 ? (
          <p>No recent order at the moment.</p>
        ) : (
          <>
            {recent.map((order) => (
              <RecentCustomerCard key={order.id} {...order} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default RecentOrders;
