'use client';

interface Section {
  id: number;
  title: string;
  subtitle: string;
  icon: any;
}

interface NavigationDotsProps {
  sections: Section[];
  currentLap: number;
  onNavigate: (sectionId: number) => void;
}

export function NavigationDots({ sections, currentLap, onNavigate }: NavigationDotsProps) {
  return (
    <div className="fixed top-1/2 right-2 sm:right-4 -translate-y-1/2 z-50 flex flex-col gap-1.5 sm:gap-2">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onNavigate(section.id)}
          className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
            currentLap === section.id
              ? 'bg-[#177e89] scale-125'
              : 'bg-gray-600 hover:bg-[#177e89]'
          }`}
          title={section.title}
          aria-label={section.title}
        />
      ))}
    </div>
  );
}
