import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2
            font-bold px-10 py-5">
              <div className="flex items-center space-x-2">
                <Link href="/">
                                    <Image
                                      src="https://seeklogo.com/images/B/blogger-icon-logo-93FC9A4806-seeklogo.com.png"
                                      alt="Logo"
                                      width={50}
                                      height={50}
                                      className="rounded-full"
                                    />
                </Link>
                <h1>BlogNow</h1>
              </div>
            </header>
  )
}

export default Header