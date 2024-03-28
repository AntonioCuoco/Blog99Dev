import Image from "next/image"
import Link from "next/link"
import profileImg from "@/public/2-removebg-preview.png"
import profileImg2 from "@/public/1-removebg-preview.png"

const Logo = (props) => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
        <div className=" w-14 md:w-18 mr-2 md:mr-4 rounded-full roundend-full overflow-hidden border border-solid border-dark dark:border-gray">
            <Image src={props.mode === "dark" ? profileImg2 : profileImg} alt="99DEV logo" className="w-full h-auto rounded-full" sizes="20vw" priority />
        </div>
        {/* <span className="font-bold dark:font-semibold text-lg md:text-xl">99DEV</span> */}
    </Link>
  )
}

export default Logo