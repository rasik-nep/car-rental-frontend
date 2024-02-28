import TextComponent from "./TextComponent";
import { SERVICES_DISPLAY_SECTION } from "../../constants"

export default function Services() {
    return (
        <section className="relative py-6 md:py-6 bg-body overflow-hidden">
            <div className="relative container mx-auto px-4">
                <div className="relative max-w-lg lg:max-w-4xl mx-auto lg:mx-0 mb-12">
                    <h2 className="w-[26rem] font-heading text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight mb-6 border-b-2 border-opacity-100 border-red-400">Our Services</h2>
                    <p className="max-w-xl text-xl text-gray-500 tracking-tight">Your go-to destination for reliable and convenient car rental services. Our commitment is to provide you with seamless experiences and quality vehicles for all your travel needs.</p>
                </div>
                <div className="relative">
                    {SERVICES_DISPLAY_SECTION.map((social) => (
                        <TextComponent index={social.index} firstSpan={social.firstSpan} secondSpan={social.secondSpan} descriptionShort={social.descriptionShort} descriptionLong={social.descriptionLong} imgLink={social.imgLink} key={social.index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
