import Image from 'next/image';

const Home = () => (
  <main className="bg-black text-white flex min-h-screen flex-col gap-32 p-[7vw] items-center">
    <div className="z-10 w-full flex items-center justify-between font-mono">
      <p>
        Get started by editing{' '}
        <code className="font-mono font-bold">src/app/(home)/page.tsx</code>
      </p>

      <div className="">
        <a
          className="flex gap-2 "
          href="https://vectorform.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          By
          <Image
            src="/vectorform.svg"
            alt="Vectorform Logo"
            className="invert"
            width={190}
            height={45}
            priority
          />
        </a>
      </div>
    </div>
    <a href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app">
      <Image
        className="invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </a>
  </main>
);

export default Home;
