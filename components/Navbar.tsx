import Image from 'next/image'
import Link from 'next/link'
import { NavLinks } from '@/constants'
import AuthProvider from './AuthProvider';

export default function Navbar() {

    const session = {};

    return (
      <nav className='flex justify-between items-center navbar m-2'>
            <div className='flex items-center justify-start gap-10'>
                <Link href="/">
                    <Image
                        src="/logo.svg"
                        height={43}
                        width={115}
                        alt="flexible"
                    />
                </Link>
                <ul className="lg:flex hidden text-small gap-7">
                    {NavLinks.map((link) => (
                        <Link href={link.href} key={link.key}>
                            {link.text}
                        </Link>
                    ))}
                </ul>
            </div>  
            <div className="flex gap-4">
                {session ? (
                    <>
                    userPhoto
                    <Link href="create-project">
                        Share Work
                    </Link>
                    </>
                
            ) : (
            <>
                <AuthProvider />
            </>
                )}
            </div>
      </nav>
  )
}
