import Link from "next/link";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Link href='/dashboard' className='bg-gray-200 rounded-xl px-6 py-2.5'>
        Sign in
      </Link>
    </main>
  );
}
