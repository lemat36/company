import Image from "next/image";

export default function ClientRoster() {
  return (
    <div className="h-screen p-11 text-start">
      <h1 className="text-5xl font-semibold text-black">Our Client Roster</h1>
      <p className="pt-4">
        From our early days, we've been providing reliable service to our
        clientele. <br />
        We've had the honor of being the firm of choice of the following
        corporations:
      </p>
      <div className="grid grid-cols-3 gap-8 pt-10">
        <div className="text-center">
          <div className="relative w-full h-48">
            <Image
              src="/images/cb343e4e335c5c43bdb7b0caaad2a2e4.jpg"
              alt="Belden Bank LTD"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <button className="bg-black px-4 py-2  text-white w-full">
            Belden Bank LTD
          </button>
        </div>
        <div className="text-center">
          <div className="relative w-full h-48">
            <Image
              src="/images/cb343e4e335c5c43bdb7b0caaad2a2e4.jpg"
              alt="Michaelson Digital"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <button className="bg-black px-4 py-2  text-white w-full">
            Michaelson Digital
          </button>
        </div>
        <div className="text-center">
          <div className="relative w-full h-48">
            <Image
              src="/images/cb343e4e335c5c43bdb7b0caaad2a2e4.jpg"
              alt="Perlanton Securities"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <button className="bg-black px-4 py-2  text-white w-full">
            Perlanton Securities
          </button>
        </div>
      </div>
    </div>
  );
}
