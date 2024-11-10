import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="relative flex justify-center items-center mt-10">
        <Image src="/gnomy.png" alt="Gnomy" width={300} height={300} />
        <div className="absolute right-0 mt-16">
          <Image
            src="/gnomyreverse.png"
            alt="Gnomy reverse"
            width={300}
            height={300}
          />
        </div>
      </div>

      <div className="relative flex justify-start items-start mt-8">
        <Image
          src="/gnomyscream.svg"
          alt="Gnomy reverse"
          width={400}
          height={300}
        />
        <div className="flex flex-col absolute top-0 left-0 right-0 bottom-0 m-auto justify-center items-center">
          <Image
            src="/gnomyid.svg"
            alt="Gnomy reverse"
            width={200}
            height={300}
          />
          <p className="text-center text-xl p-10">
            Siggles, Coinbase&apos;s beloved mascot, is tired of <br />
            he pressure and fame. To regain a little serenity, he&apos;s
          </p>

          <div className="flex flex-col-3 space-x-16 justify-center items-center top-0">
            <svg
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="96"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38"
              />
            </svg>

            <Image
              className="cursor-pointer"
              src="/pump.svg"
              alt="Gnomy reverse"
              width={96}
              height={116}
            />

            <svg
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="72"
              viewBox="0 0 16 16"
            >
              <path
                fill="white"
                d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07l-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
              />
            </svg>
            <div className="absolute right-32 bottom-20">
              <Image
                className="cursor-pointer"
                src="/gnomyback.svg"
                alt="Gnomy reverse"
                width={150}
                height={116}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen mt-20">
        <div className="flex justify-center items-center">
          <Image src="/gnomy2.png" alt="Gnomy" width={300} height={300} />
        </div>
        <div className="flex flex-col-2 mt-40 space-x-40 justify-center items-center">
          <Image src="/gnomystonks.png" alt="Gnomy" width={350} height={350} />
          <div className="flex flex-col text-2xl text-center">
            <h1>With a big smile</h1>
            <p>
              With a big smile and a joint worthy of the <br /> greatest, he
              shows a new side to his personality, now <br /> embodying
              relaxation and letting go. Join Siggles on Base <br /> and let
              yourself be carried away by his relaxed energy, <br /> symbolising
              a cooler philosophy of life <br />
              <br /> Siggles, Coinbase's beloved mascot, is tired of <br /> he
              pressure and fame. To regain a little serenity, he's{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-screen flex flex-col items-center">
        <div className="flex justify-center items-center mb-36">
          <Image src="/gnomy.png" alt="Gnomy" width={300} height={300} />
        </div>

        <div className="grid grid-cols-3 gap-4 p-2">
          <Image src="/f1.png" alt="Gnomy" width={200} height={300} />
          <Image src="/f2.png" alt="Gnomy" width={200} height={300} />
          <Image src="/f3.png" alt="Gnomy" width={200} height={300} />
          <Image src="/f4.png" alt="Gnomy" width={200} height={300} />
          <Image src="/f5.png" alt="Gnomy" width={200} height={300} />
          <Image src="/f6.png" alt="Gnomy" width={200} height={300} />
          <Image src="/f7.png" alt="Gnomy" width={200} height={300} />
          <Image src="/f8.png" alt="Gnomy" width={200} height={300} />
          <Image src="/f9.png" alt="Gnomy" width={200} height={300} />
        </div>
      </div>
      <div id="footer" className="flex justify-center items-center mt-10 p-2">
        <h1 className="text-black text-lg">gnomy, 2024, All Rights Reserved</h1>
      </div>
    </main>
  );
}
