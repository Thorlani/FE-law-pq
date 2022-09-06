import Aos from "aos"
import Link from "next/link"


const Recommended = () => {

  return (
    <div className="my-[50px] mx-[4%] text-center">
      <h1 className="mb-[10px] font-medium text-2xl lg:hidden">Available PQ</h1>
      <p className="mb-[30px] font-thin text-sm"><i><span className="underline">Note</span> answers to each courses are dropped every friday.</i></p>
      <ul className="mb-[20px] lg:hidden">
        <li className="mb-[15px] font-medium text-l text-[blue] underline">
          <Link href={'/contract'}>Law of Contract</Link>
        </li>
        <li className="mb-[15px] font-medium text-l text-[blue] underline">
          <Link href={'/legal'}>Legal System</Link>
        </li>
        <li className="font-medium text-l text-[blue] underline">
          <Link href={'/constitutional'}>Constitutional Law</Link>
        </li>
      </ul>
    </div>
  )
}

export default Recommended