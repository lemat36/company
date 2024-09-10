import Image from "next/image";

export default function () {
  return (
    <div className="grid grid-cols-2  bg-black">
      <div className="pl-10">
        <h1 className="text-white text-4xl  font-bold pb-8">
          Let's work together
        </h1>
        <Image
          src="/images/Untitled-design-2.png"
          width={400}
          height={500}
          alt="img"
        ></Image>
      </div>
      <div className="  text-start py-44 ">
        <div className="flex flex-col pb-4">
          <h2 className="text-white text-2xl font-semibold">Mailling Adress</h2>
          <p className="text-white">123 Anywhere St.any City,ST 12345</p>

          <div className="flex flex-col pt-4">
            <h2 className="text-white text-2xl font-semibold">Phine Number</h2>
            <p className="text-white">(123)456-7890</p>
          </div>

          <div className="flex flex-col pt-4">
            <h2 className="text-white text-2xl font-semibold">Email Adress</h2>
            <p className="text-white">hello@reallygreatsite.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
