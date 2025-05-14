import Image from "next/image";
import { Card } from "../ui/Card";
import { AboutMeInfo } from "../../../utils/types";

export default function About({ aboutMe, sectionId }: { aboutMe: AboutMeInfo; sectionId: string }) {
    return (
        <section
            id={sectionId}
            className="flex justify-center items-center min-h-screen font-mono px-3 bg-gradient-to-b to-green-50 from-yellow-50 text-gray-900"
        >
            <Card>
                <div className="py-8 px-6 sm:px-10 md:px-16 lg:px-20 max-w-4xl w-full text-center">
                    <h2 className="font-bold flex justify-center items-center flex-wrap gap-2 mb-6 text-3xl">
                        <span className="animate-wave">👋</span>
                        <span className="mb-2">🤓</span>
                        <span className="text-red-400 drop-shadow-2xl">Hey there!!</span>
                        <span>🎉</span>
                    </h2>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-left">
                        <div className="flex-1 space-y-4">
                            <p className="text-gray-800 text-lg">{aboutMe.myself}</p>
                            <p className="text-gray-800 text-lg">{aboutMe.passion}</p>
                            <p className="text-gray-800 text-lg">{aboutMe.passionApart}</p>
                        </div>
                        <Image
                            src="/programmer.png"
                            alt="Vijay Goud Kodipyaka"
                            width={120}
                            height={120}
                            className="self-center"
                        />
                    </div>
                </div>
            </Card>
        </section>
    );
}
