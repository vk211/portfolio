import Image from 'next/image';
import { Profile } from '../../../utils/types';
import { Card } from '../ui/Card';

export default function ContactMe({ profile, welcome, sectionId }: { profile: Profile; welcome: string; sectionId: string }) {
    return (
        <section id={sectionId} className="flex justify-center items-center h-screen font-mono px-3 bg-gradient-to-b from-green-50 to-yellow-50">
            <Card>
                <div className=" py-8 px-2 sm:px-12 max-w-lg text-center">
                    <p className="text-gray-800 text-lg">{welcome}</p>
                    <div className="flex flex-col space-y-4">
                        <div className="flex justify-center gap-5 mt-5">
                            <a href={profile.linkedin.url} target="_blank">
                                <Image src={profile.linkedin.logoUrl} alt="LinkedIn" width={100} height={100} className="w-16 h-16" />
                            </a>
                            {/* <a href={profile.facebook.url} target="_blank">
                                <Image src={profile.facebook.logoUrl} alt="Facebook" width={100} height={100} className="w-16 h-16" />
                            </a> */}
                            <a href={`mailto:${profile.gmail.url}`}>
                                <Image src={profile.gmail.logoUrl} alt="Gmail" width={100} height={100} className="w-16 h-16" />
                            </a>
                            <a href={`https://wa.me/${profile.whatsapp.number}`} target="_blank">
                                <Image src={profile.whatsapp.logoUrl} alt="WhatsApp" width={100} height={100} className="w-16 h-16" />
                            </a>
                        </div>
                    </div>
                </div>
            </Card>
        </section>
    );
};
