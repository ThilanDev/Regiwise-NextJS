import Image from 'next/image';
import { Inter } from 'next/font/google';
import Nav from '@/components/Nav';
import StatItem from '@/components/StatItem';
import StatItemsMobile from '@/components/StatItemsMobile';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <div className="bg-gradient-to-tl from-purple from-1% to-blue">
        <Nav />
        <div className="container flex flex-col-reverse items:center xl:ml-28 px-6 mx-auto pt-0 space-x-5 md:flex-row">

          {/* Left side */}
          <div className="flex flex-col mt-14 mb-8 text-white items-center md:w-3/5">
            <h1 className="text-center mb-5 text-4xl font-bold lg:increased-line-height lg:text-6xl lg:mb-10">
              Are you looking for the<br />US or UK Business Registration Services?
            </h1>
            <img src="line2.png" alt="" />
            <p className="text-center mt-5  text-lg font-bold xl:text-2xl lg:mt-10">
              We take care of everything for you to have your<br />Business Registration, Stripe account live & ready<br /> to go in less than <b className="text-yellow text-xl">7 days.</b>
            </p>
          </div>

          {/* Right side */}
          <div className="md:w-2/5">
            <Image
              src="/boy.png"
              alt="Boy"
              width={400}
              height={900}
              className="max-w-full max-h-full ml-1 md:ml-7 lg:ml-12"
            />
          </div>

        </div>

        {/* Buttons */}
        <div className="container flex flex-col-reverse md:items-center md:flex-row px-6 mx-auto mt-0 xl:ml-24 space-y-0 md:space-y-0">
          {/* Right side */}
          <div className="flex flex-col mb-32 space-y-12 items-center md:w-3/5">
            <div className="flex text-xl font-bold items-center gap-6 justify-center lg:text-3xl">
              <a href="" className="p-5 px-6 pt-5 bg-yellow rounded-3xl">Get Started</a>
              <a href="" className="p-5 px-6 pt-5 border-white text-white rounded-3xl border-2">Contact Us</a>
            </div>
          </div>

          {/* Right side: Empty */}
          <div className="md:w-2/5 mt-0 text-center"></div>
        </div>
      </div>
      
      <script src="/js/Script.js"></script>
      {/* 2nd page */}

      {/* Stat bar */}

      <div className="relative container my-16 mx-auto p-5 px-10">
    <div className="lg:flex items-center text-center px-10 mx-auto py-6 rounded-3xl justify-between boxshadowblack hidden">
    <StatItem number="1500+" description="clients" />
    <StatItem number="1800+" description="companies formed" />
    <StatItem number="150+" description="countries served" />
    <StatItem number="5+" description="Years of experience" />
    </div>
    </div>
    
    <StatItemsMobile/>
    
    

      {/* Why regiwise */}

      <div className="container mx-auto flex flex-col-reverse md:flex-row">
      {/* left side */}
      <div className="flex flex-col text-center items-center md:items-start md:text-left md:w-1/2">
        <div className="ml-4 xl:pt-24 md:ml-0">
        <p className="text-2xl py-2 md:py-0">Why RegiWise ?</p>
        <p className="text-4xl font-semibold xl:text-6xl">
        We Provide The <span className="bg-blue rounded-2xl text-white px-4">Best</span> Service For Your Business
        </p>
        <p className="text-xl md:mr-32 pt-5">
        We understand the challenges you face in accepting card payments at your store, 
        particularly if you are located in a country not supported by Stripe. Our solution 
        is designed to address this issue by managing the entire process for you.  We'll 
        establish a UK or US company on your behalf and set up a fully verified and approved 
        Business Stripe account, no matter where you are in the world.<span className='font-semibold'> All of this at a highly 
        competitive price!</span>
        </p>
        </div>

        <div className='py-10 text-xl font-bold '>
          <div className='flex items-center gap-3'>
          <img src='/Checkmark.png' alt=''/>
          <p>We accept all countries</p>
          </div>

          <div className='flex items-center gap-3'>
          <img src='/Checkmark.png' alt=''/>
          <p>Support in 6 Languages</p>
          </div>

          <div className='flex items-center gap-3'>
          <img src='/Checkmark.png' alt=''/>
          <p>Quick delivery</p>
          </div>           
        </div>

      </div>
  {/* right side */}
  <div className="md:w-1/2">
    <img className='xl:ml-20' src="4guys.png" alt="" />
  </div>
</div>


<div className='w-screen text-center h-[720px] text-2xl bg-violet'>
  <p className='text-6xl  font-bold pt-8 '>Our services</p>
  <img className='mx-auto pt-10' src="Line 1.png" alt="" />
</div>



      
    </main>
  );
  
}
