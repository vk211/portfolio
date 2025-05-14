import Image from 'next/image';
import { Profile } from '../../../utils/types';
import { Card } from '../ui/Card';

export default function ContactMe({
    profile,
    welcome,
    sectionId,
  }: {
    profile: Profile;
    welcome: string;
    sectionId: string;
  }) {
    return (
      <section
        id={sectionId}
        className="w-full py-20 px-4 bg-gradient-to-b from-green-50 to-yellow-50 flex justify-center"
      >
        <Card>
          <div className="w-full max-w-2xl px-6 sm:px-10 py-10 text-center space-y-8">
            <p className="text-gray-800 text-lg leading-relaxed">{welcome}</p>
  
            <div className="flex justify-center flex-wrap gap-8">
              <a href={profile.linkedin.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={profile.linkedin.logoUrl}
                  alt="LinkedIn"
                  width={64}
                  height={64}
                  className="hover:scale-110 transition-transform"
                />
              </a>
  
              <a href={`mailto:${profile.gmail.url}`}>
                <Image
                  src={profile.gmail.logoUrl}
                  alt="Gmail"
                  width={64}
                  height={64}
                  className="hover:scale-110 transition-transform"
                />
              </a>
  
              <a href={profile.github.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={profile.github.logoUrl}
                  alt="GitHub"
                  width={64}
                  height={64}
                  className="hover:scale-110 transition-transform"
                />
              </a>
            </div>
          </div>
        </Card>
      </section>
    );
  }
  