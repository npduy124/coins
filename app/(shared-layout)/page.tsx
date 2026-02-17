import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import styles from './shared-layout.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Menu, ArrowUpRight } from 'lucide-react';
import { latestNews } from '@/app/sampleData'
import { ChartComponent } from '@/components/web/charts/LightWeightChart';
import FooterComponent from '@/components/ui/footer';
import PopularSection from '@/components/sections/popular';
import PricesSection from '@/components/sections/prices';
import MainMenu from '@/components/ui/main-menu';


export default function Home() {
  return (
    <div className='w-full'>
      <MainMenu />
      <div
        className={`${styles.bodyContent} w-full body-content flex justify-center`}
      >
        <div className="bodyWrapper w-300">
          {/* section main */}
          <div className='w-full grid grid-cols-4 gap-10 pt-2'>
            <div className='col-start-1 col-end-2'>
              {/* Left content */}
              <h2 className='text-[20px] pb-2'>LATEST CRYPTO NEWS</h2>
              <div className='flex flex-col gap-4'>
                <article className='border-b pb-1.5'>
                  <h3><Link href={`/`} className='font-normal'>Crypto Fear & Greed Index hits record low despite ongoing institutional push into DeFi</Link></h3>
                  <div>
                    <span className='text-xs uppercase'>Feb 16, 2026, 2:06 PM - EST</span>
                    <span> • </span>
                    <span className='text-xs'>Markets</span>
                  </div>
                </article>
                <article className='border-b pb-1.5'>
                  <h3><Link href={`/`} className='font-normal'>Crypto Fear & Greed Index hits record low despite ongoing institutional push into DeFi</Link></h3>
                  <div>
                    <span className='text-xs uppercase'>Feb 16, 2026, 2:06 PM - EST</span>
                    <span> • </span>
                    <span className='text-xs'>Markets</span>
                  </div>
                </article>
                <article className='border-b pb-1.5'>
                  <h3><Link href={`/`} className='font-normal'>Crypto Fear & Greed Index hits record low despite ongoing institutional push into DeFi</Link></h3>
                  <div>
                    <span className='text-xs uppercase'>Feb 16, 2026, 2:06 PM - EST</span>
                    <span> • </span>
                    <span className='text-xs'>Markets</span>
                  </div>
                </article>
                <article className='border-b pb-1.5'>
                  <h3><Link href={`/`} className='font-normal'>Crypto Fear & Greed Index hits record low despite ongoing institutional push into DeFi</Link></h3>
                  <div>
                    <span className='text-xs uppercase'>Feb 16, 2026, 2:06 PM - EST</span>
                    <span> • </span>
                    <span className='text-xs'>Markets</span>
                  </div>
                </article>
                <article className='border-b pb-1.5'>
                  <h3><Link href={`/`} className='font-normal'>Crypto Fear & Greed Index hits record low despite ongoing institutional push into DeFi</Link></h3>
                  <div>
                    <span className='text-xs uppercase'>Feb 16, 2026, 2:06 PM - EST</span>
                    <span> • </span>
                    <span className='text-xs'>Markets</span>
                  </div>
                </article>
              </div>
            </div>
            {/* Middle Content */}
            <div className='col-span-2 col-start-2'>
              {/* main article */}
              <div className=''>
                <Image src={`https://www.tbstat.com/cdn-cgi/image/f=avif,q=50/wp/uploads/2023/02/20230216_Wintermute_News-1200x675.jpg`} alt='ima' width={600} height={350} />
                <article className='border-b pb-1.5'>
                  <h3 className='py-2'><Link href={`/`} className='font-normal text-3xl'>Wintermute launches institutional tokenized gold trading, expects market to reach $15 billion in 2026</Link></h3>
                  <div>
                    <span className='text-xs uppercase'>Feb 16, 2026, 2:06 PM - EST</span>
                    <span> • </span>
                    <span className='text-xs'>Markets</span>
                  </div>
                </article>
              </div>
              {/* other article */}
              <div>
                <div className='flex gap-4 border-b py-4'>
                  <Image
                    src={`https://www.tbstat.com/cdn-cgi/image/w=170,f=avif,q=50/wp/uploads/2024/09/20240904_Bitcoin_News-1200x675.jpg`}
                    alt='ima'
                    width={600}
                    height={350}
                    className='w-50'
                  />
                  <article className='flex flex-col justify-between'>
                    <h3><Link href={`/`} className='font-normal'>Crypto Fear & Greed Index hits record low despite ongoing institutional push into DeFi</Link></h3>
                    <div className=''>
                      <span className='text-xs uppercase'>Feb 16, 2026, 2:06 PM - EST</span>
                      <span> • </span>
                      <span className='text-xs'>Markets</span>
                    </div>
                  </article>
                </div>
                <div className='flex gap-4 border-b py-4'>
                  <Image
                    src={`https://www.tbstat.com/cdn-cgi/image/w=170,f=avif,q=50/wp/uploads/2022/04/Screen-Shot-2022-04-06-at-1.40.50-PM-1184x675.png`}
                    alt='ima'
                    width={600}
                    height={350}
                    className='w-50'
                  />
                  <article className='flex flex-col justify-between'>
                    <h3><Link href={`/`} className='font-normal'>Crypto Fear & Greed Index hits record low despite ongoing institutional push into DeFi</Link></h3>
                    <div className=''>
                      <span className='text-xs uppercase'>Feb 16, 2026, 2:06 PM - EST</span>
                      <span> • </span>
                      <span className='text-xs'>Markets</span>
                    </div>
                  </article>
                </div>
                <div className='flex gap-4 border-b py-4'>
                  <Image
                    src={`https://www.tbstat.com/cdn-cgi/image/w=170,f=avif,q=50/wp/uploads/2025/04/20250401_MetaPlanet_News-1200x675.jpg`}
                    alt='ima'
                    width={600}
                    height={350}
                    className='w-50'
                  />
                  <article className='flex flex-col justify-between'>
                    <h3><Link href={`/`} className='font-normal'>Crypto Fear & Greed Index hits record low despite ongoing institutional push into DeFi</Link></h3>
                    <div className=''>
                      <span className='text-xs uppercase'>Feb 16, 2026, 2:06 PM - EST</span>
                      <span> • </span>
                      <span className='text-xs'>Markets</span>
                    </div>
                  </article>
                </div>

              </div>
            </div>
            {/* Right Content */}
            <div className='col-start-4 col-end-5'>
              <div className='relative h-77.5'>
                <div className='absolute top-0 left-0 w-full h-full z-0'>
                  <Image
                    src={`https://www.tbstat.com/cdn-cgi/image/f=avif,q=80/wp/uploads/2026/02/Case-Study-1-1200x620.jpg`}
                    alt='ima'
                    fill

                  />
                </div>
                <article className='flex gap-1 flex-col justify-end h-1/2 absolute z-10 left-0 bottom-0 bg-[rgb(0,0,0)]/80 text-white p-2'>
                  <span className='text-xs text-blue-600 uppercase'>Markets</span>
                  <h3><Link href={`/`} className='font-normal'>Crypto Fear & Greed Index hits record low despite ongoing institutional push into DeFi</Link></h3>
                  <div className=''>
                    <span className='text-xs uppercase'>Feb 16, 2026, 2:06 PM - EST</span>
                  </div>
                </article>
              </div>
              <div className='mt-5 relative'>
                <h2 className='text-[20px] pb-2'>RESEARCH</h2>
                <div className='border-b mb-5'>
                  <Link href={`/`}>
                    <Image
                      src={`https://www.tbstat.com/cdn-cgi/image/w=600,h=400,f=avif,q=50/wp/uploads/2026/01/20260120_edgeX_ResearchThumbnail-1200x675.jpg`}
                      alt='d'
                      height={150}
                      width={266}

                    />
                    <h3 className='py-2'>edgeX: Where Mobile Traders Meet Institutional Liquidity</h3></Link>
                </div>
                <div className='border-b mb-5'>
                  <Link href={`/`}>
                    <Image
                      src={`https://www.tbstat.com/cdn-cgi/image/w=600,h=400,f=avif,q=50/wp/uploads/2025/12/2025EOYTHUMBNAIL-1200x675.jpg`}
                      alt='d'
                      height={150}
                      width={266}

                    />
                    <h3 className='py-2'>2026 Digital Assets Outlook Report</h3></Link>
                </div>
              </div>
            </div>
          </div>
          {/* section price */}
          <PricesSection />
          {/* section chart */}

          <ChartComponent />

          {/* Section Popular Crypto News */}
          <PopularSection />
          {/* Footer */}
          <FooterComponent />
        </div>
      </div>
    </div >
  );
}
