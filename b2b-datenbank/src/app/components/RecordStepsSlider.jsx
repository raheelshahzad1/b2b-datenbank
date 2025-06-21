'use client';

import * as Slider from '@radix-ui/react-slider';
import { useState } from 'react';

const ranges = [
  '1 to 99',
  '100 to 999',
  '1,000 to 4,999',
  '5,000 to 9,999',
  '10,000 to 19,999',
  '20,000 to 29,999',
  '30,000 to 39,999',
  '40,000 to 49,999',
  '50,000 to 99,999',
  '100,000+',
];

export default function RecordStepsSlider() {
  const [selectedStep, setSelectedStep] = useState(0); // index of `ranges`

  return (
    <div className="w-full max-w-xl space-y-4 flex flex-col items-center mx-auto mb-12">
      {/* Label based on selected range */}
      <div className="text-lg font-semibold text-primary">
        {ranges[selectedStep]} records
      </div>

      {/* Slider with fixed steps */}
      <Slider.Root
        className="relative flex items-center select-none touch-none w-full h-5"
        min={0}
        max={ranges.length - 1}
        step={1}
        value={[selectedStep]}
        onValueChange={([val]) => setSelectedStep(val)}
      >
        <Slider.Track className="bg-gray-300 relative grow rounded-full h-3">
          <Slider.Range className="absolute bg-primary rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb
          className="block w-7 h-7 bg-white border border-secondary rounded-full shadow hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
          aria-label="Step"
        />
      </Slider.Root>
    </div>
  );
}
