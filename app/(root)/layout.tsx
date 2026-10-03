import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { isAuthenticated } from "@/lib/actions/auth.action";

const RootLayout = async ({children} : {children: React.ReactNode}) => {

  // const isUserAuthenticated = await isAuthenticated();
  // if (isUserAuthenticated) {
  //   redirect('/dashboard');
  // }


  return (
    <div className='root-layout'>
      <nav className="flex items-center justify-between p-4 text-white">
        <Link className='flex items-center gap-2' href="/">
         <Image src="/logo.svg" alt="Logo" width={38} height={32} />
         <h2 className='text-primary-100'> PrepMaster</h2>
        </Link>
        <button className='btn btn-primary'>
          <Link href="/sign-up">Start Your Prepration</Link>
        </button>
      </nav>
      {children}
    </div>
  )
}

export default RootLayout
