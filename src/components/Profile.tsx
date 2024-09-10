import Image from "next/image";

export default function () {
  return (
    <div className="h-screen bg-black grid grid-cols-2 ">
      <div className="items-center flex ">
        <Image
          src="/images/pexels-yentl-jacobs-43020-157811.jpg"
          width={800}
          height={600}
          alt="img"
        ></Image>
      </div>
      <div className="text-start flex flex-col py-24 px-10 space-y-10">
        <h1 className="text-6xl font-semibold text-white">
          Company <br /> Profil
        </h1>
        <p className="text-white text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          numquam illum cum ea rem incidunt ipsa, suscipit, voluptatum in quia
          non, corporis ad necessitatibus. Illo iure porro provident sit
          quisquam?
        </p>
        <button className="px-4 py-3 bg-slate-500 text-white">
          Learn More{" "}
        </button>
      </div>
    </div>
  );
}
