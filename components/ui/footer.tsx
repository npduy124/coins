import Image from "next/image";

export default function FooterComponent() {
    return (
        <div className='footer pt-10'>
            <div className='grid grid-cols-5 gap-2 py-4'>
                <div className="w-[132px] h-[16px] flex-none relative">
                    <Image src={`/next.svg`} alt='logo' fill
                        className="object-fit" />
                </div>
                <div>
                    <h3 className='text-sm uppercase font-medium'>Content</h3>
                    <ul className="py-4">
                        <li>News</li>
                        <li>Data</li>
                        <li>Research</li>
                        <li>Indices</li>
                        <li>Prices</li>
                        <li>People</li>
                        <li>BTC etf</li>
                        <li>Learn</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-sm uppercase font-medium'>Multimedia</h3>
                    <ul className="py-4">
                        <li>Podcast</li>
                        <li>Newsletter</li>
                        <li>Event</li>
                        <li>Community</li>
                        <li>Emergence</li>

                    </ul>
                </div>
                <div>
                    <h3 className='text-sm uppercase font-medium'>Connect</h3>
                    <ul className="py-4">
                        <li>Lens</li>
                        <li>Twittcher</li>
                        <li>Linked</li>
                        <li>Facebook</li>
                        <li>Youtube</li>
                        <li>People</li>
                        <li>BTC etf</li>
                        <li>Press</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-sm uppercase font-medium'>Company</h3>
                    <ul className="py-4">
                        <li>About US</li>
                        <li>Editor: Musk</li>
                        <li>Press</li>
                        <li>Wrong app</li>
                        <li>Prices</li>
                        <li>Carreers</li>
                        <li>ETH etf</li>
                        <li>Learn</li>
                    </ul>
                </div>
            </div>
            <div className='footerInfos flex flex-col justify-center items-center text-sm py-8 uppercase border-t'>
                <span> © 2026 the block. all rights reserved.</span>
                <span>Privacy Policy • Terms of Service • Cookie Settings • Security</span>
                <span>Do Not Sell or Share My Personal Information</span>
            </div>
        </div>
    )
}