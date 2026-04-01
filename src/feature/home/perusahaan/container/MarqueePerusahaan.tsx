import Marquee from "react-fast-marquee";
import { perusahaan } from "../data/perusahaan";
import Image from "next/image";

const MarqueePerusahaan = () => {
    return (
        <div className="py-4 space-y-12">
            <div className="text-center">
                <h3 className="body-semibold md:text-4xl text-secondary">Mitra</h3>
            </div>
            <Marquee gradient={false} speed={50}>
                {perusahaan.map((perusahaan) => (
                    <div key={perusahaan.id} className="flex items-center">
                        <Image
                            src={perusahaan.logo}
                            alt={"Logo"}
                            width={500}
                            height={500}
                            className="w-40 h-35 mx-10"
                        />
                    </div>
                ))}
            </Marquee>
        </div>
    )
}

export default MarqueePerusahaan