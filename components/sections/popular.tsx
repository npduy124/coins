import Image from "next/image";
import Link from "next/link";

export default function PopularSection() {
    return (
        <>
            <h2 className='text-[20px] pt-12 pb-4'>POPULAR CRYPTO NEWS</h2>
            <div className='flex gap-4'>
                <div className='basis-1/2'>
                    <h3 className='text-xs'>CRYPTO FUTURED</h3>
                    <div className='py-4 border-b'>
                        <Link href={`/`}>
                            <Image src={`https://www.tbstat.com/cdn-cgi/image/f=avif,q=50/wp/uploads/2022/01/20210120_Capitol_Generic-1200x675.jpg`} alt='ima' width={600} height={350} />
                            <article>
                                <h3 className='py-2 font-normal text-3xl'>'Clock is ticking': crypto bill's 2026 fate hinges on Trump and stablecoin yields</h3>
                                <div>
                                    <span className='text-xs uppercase'>Feb 16, 2026, 2:06 PM - EST</span>
                                    <span> • </span>
                                    <span className='text-xs'>Markets</span>
                                </div>
                            </article>
                        </Link>
                    </div>
                    <div className='mt-6 flex gap-4'>
                        <div className='border-b pb-4 basis-1/2'>
                            <Link href={`/`}>
                                <Image
                                    src={`https://www.tbstat.com/cdn-cgi/image/f=avif,q=50/wp/uploads/2026/01/IMG_1331-e1769753608584-1200x675.jpg`}
                                    alt='d'
                                    height={150}
                                    width={300}

                                />
                                <h3 className='py-2'>Binance seeks top spot in South Korean market, targets full GoFi repayment in 2026</h3>
                                <div>
                                    <span className='text-xs uppercase'>Feb 16, 2026, 2:06 PM - EST</span>
                                    <span> • </span>
                                    <span className='text-xs'>Companies</span>
                                </div>
                            </Link>
                        </div>
                        <div className='border-b pb-4 basis-1/2'>
                            <Link href={`/`}>
                                <Image
                                    src={`https://www.tbstat.com/cdn-cgi/image/f=avif,q=50/wp/uploads/2022/04/20220404_Hiring_April-1200x675.jpg`}
                                    alt='d'
                                    height={150}
                                    width={300}

                                />
                                <h3 className='py-2'>35 key crypto hires, moves and exits: November 2025</h3>
                                <div>
                                    <span className='text-xs uppercase'>Feb 16, 2026, 2:06 PM - EST</span>
                                    <span> • </span>
                                    <span className='text-xs'>Policy</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='basis-1/2'>
                    <h3 className='text-xs'>MORE CRYPTO NEWS</h3>
                    <div>
                        <div className='border-b py-4'>
                            <Link href={`/`} className='flex gap-4'>
                                <div className="w-[194px] h-[110px] flex-none relative">
                                    <Image
                                        src={`https://www.tbstat.com/cdn-cgi/image/w=170,f=avif,q=50/wp/uploads/2024/11/20241104_ZK-proofs_News_2-1200x675.jpg`}
                                        alt='ima'
                                        fill
                                        className='object-cover'
                                    />
                                </div>
                                <article className='flex flex-col justify-between shrink'>
                                    <h3 className='font-normal'>Case study: How ChangeNOW improved the xPortal user experience without changing the interface</h3>
                                    <div className=''>
                                        <span className='text-xs uppercase'>Feb 16, 2026, 2:06 PM - EST</span>
                                        <span> • </span>
                                        <span className='text-xs'>Markets</span>
                                    </div>
                                </article>
                            </Link>
                        </div>
                        <div className='border-b py-4'>
                            <Link href={`/`} className='flex gap-4'>
                                <div className="w-[194px] h-[110px] flex-none relative">
                                    <Image
                                        src={`https://www.tbstat.com/cdn-cgi/image/w=170,f=avif,q=50/wp/uploads/2024/11/20241104_ZK-proofs_News_2-1200x675.jpg`}
                                        alt='ima'
                                        fill
                                        className='object-cover'
                                    />
                                </div>
                                <article className='flex flex-col justify-between shrink'>
                                    <h3 className='font-normal'>Loss-making DeFi lender ZeroLend to shut down after 98% TVL drop</h3>
                                    <div className=''>
                                        <span className='text-xs uppercase'>Feb 16, 2026, 2:06 PM - EST</span>
                                        <span> • </span>
                                        <span className='text-xs'>Markets</span>
                                    </div>
                                </article>
                            </Link>
                        </div>
                        <div className='border-b py-4'>
                            <Link href={`/`} className='flex gap-4'>
                                <div className="w-[194px] h-[110px] flex-none relative">
                                    <Image
                                        src={`https://www.tbstat.com/cdn-cgi/image/w=170,f=avif,q=50/wp/uploads/2024/11/20241104_ZK-proofs_News_2-1200x675.jpg`}
                                        alt='ima'
                                        fill
                                        className='object-cover'
                                    />
                                </div>
                                <article className='flex flex-col justify-between shrink'>
                                    <h3 className='font-normal'>Anthony Scaramucci's son buys Logan Paul's previously tokenized Pokemon card for record $16 million</h3>
                                    <div className=''>
                                        <span className='text-xs uppercase'>Feb 16, 2026, 2:06 PM - EST</span>
                                        <span> • </span>
                                        <span className='text-xs'>Markets</span>
                                    </div>
                                </article>
                            </Link>
                        </div>
                        <div className='border-b py-4'>
                            <Link href={`/`} className='flex gap-4'>
                                <div className="w-[194px] h-[110px] flex-none relative">
                                    <Image
                                        src={`https://www.tbstat.com/cdn-cgi/image/w=170,f=avif,q=50/wp/uploads/2024/11/20241104_ZK-proofs_News_2-1200x675.jpg`}
                                        alt='ima'
                                        fill
                                        className='object-cover'
                                    />
                                </div>
                                <article className='flex flex-col justify-between shrink'>
                                    <h3 className='font-normal'>Crypto's $300 billion stablecoin supply is increasingly used as 'everyday money,' global study finds</h3>
                                    <div className=''>
                                        <span className='text-xs uppercase'>Feb 16, 2026, 2:06 PM - EST</span>
                                        <span> • </span>
                                        <span className='text-xs'>Markets</span>
                                    </div>
                                </article>
                            </Link>
                        </div>
                        <div className='border-b py-4'>
                            <Link href={`/`} className='flex gap-4'>
                                <div className="w-[194px] h-[110px] flex-none relative">
                                    <Image
                                        src={`https://www.tbstat.com/cdn-cgi/image/w=170,f=avif,q=50/wp/uploads/2024/11/20241104_ZK-proofs_News_2-1200x675.jpg`}
                                        alt='ima'
                                        fill
                                        className='object-cover'
                                    />
                                </div>
                                <article className='flex flex-col justify-between shrink'>
                                    <h3 className='font-normal'>Crypto Fear & Greed Index hits record low despite ongoing institutional push into DeFi</h3>
                                    <div className=''>
                                        <span className='text-xs uppercase'>Feb 16, 2026, 2:06 PM - EST</span>
                                        <span> • </span>
                                        <span className='text-xs'>Markets</span>
                                    </div>
                                </article>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}