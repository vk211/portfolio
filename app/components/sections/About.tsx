import Image from "next/image";
import { Card } from "../ui/Card";
import { AboutMeInfo } from "../../../utils/types";


export default function About(  {aboutMe, sectionId}: {aboutMe: AboutMeInfo; sectionId: string}  ) {
    return <section id={sectionId} className="flex justify-center items-center h-screen font-mono px-3 bg-gradient-to-b to-green-50 from-yellow-50 text-gray-900">
        <Card>
            <div className="py-8 px-2 sm:px-5 max-w-md text-center">
                <h2 className="font-bold flex justify-center items-center mb-4 text-3xl">
                    <span className="animate-wave">👋</span>
                    <span className="mb-2 mr-4">🤓</span>
                    <span className="text-red-400 drop-shadow-2xl mr-2">Hey there!!</span>
                    <span>🎉</span>
                </h2>
                <div className="flex flex-col sm:flex-row justify-center items-center mb-4 gap-x-4">
                    <p className="text-gray-800 text-lg">{aboutMe.myself}</p>
                    <Image src="/programmer.png" alt="Vijay Goud Kodipyaka" width={96} height={96} className="mt-4 sm:mt-0" />
                </div>
                <p className="text-gray-800 mb-4 text-lg">{aboutMe.passion}</p>
                <p className="text-gray-800 mb-4 text-lg">{aboutMe.hobby}</p>
            </div>
        </Card>
    </section>
}