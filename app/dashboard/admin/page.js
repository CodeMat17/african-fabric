import Options from "@/components/super-admin/Options";

const SettingsPage = () => {
  return (
    <div className='p-8 w-full'>
      <h1 className='text-center text-xl font-medium'>Admin Dashboard</h1>
      <p className='text-center text-gray-500'>...for Super Admins only</p>
      <Options />
    </div>
  );
};

export default SettingsPage;
