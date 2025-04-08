'use client';

import { useState } from 'react';

export default function SectionCalc() {
  const [selectedInfo, setSelectedInfo] = useState('infoCharacter');

  const sections = [
    { id: 'infoCharacter', label: '캐릭터' },
    { id: 'infoRecipe', label: '레시피' },
  ];

  return (
    <section className="section-info">
      <div className="section-nav">
          {sections.map(section => (
              <div
                  key={section.id}
                  className={`lowerSection ${selectedInfo === section.id ? 'active' : ''}`}
                  onClick={() => setSelectedInfo(section.id)}
              >
                  {section.label}
              </div>
          ))}
      </div>

      {selectedInfo === 'infoCharacter' && (
          <>
            <div>
              <div className="section-nav">
                <h4>캐릭터</h4>
              </div>
            </div>
          </>
      )}
      {selectedInfo === 'infoRecipe' && (
          <>
            <div>
              <div className="section-nav">
                <h4>레시피</h4>
              </div>
            </div>
          </>
      )}
     </section>
  );
}