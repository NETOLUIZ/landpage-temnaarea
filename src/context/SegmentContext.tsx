import React, { createContext, useContext, useState } from 'react';
import { SEGMENTS, Segment } from '../data/segments';

interface SegmentContextType {
  openSegmentModal: (segmentOrId: Segment | string) => void;
  closeSegmentModal: () => void;
  selectedSegment: Segment | null;
  isOpen: boolean;
}

const SegmentContext = createContext<SegmentContextType | null>(null);

export const SegmentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedSegment, setSelectedSegment] = useState<Segment | null>(null);

  const openSegmentModal = (segmentOrId: Segment | string) => {
    if (typeof segmentOrId === 'string') {
      const found = SEGMENTS.find((s) => s.id === segmentOrId.toLowerCase());
      if (found) {
        setSelectedSegment(found);
      }
    } else {
      setSelectedSegment(segmentOrId);
    }
  };

  const closeSegmentModal = () => {
    setSelectedSegment(null);
  };

  return (
    <SegmentContext.Provider
      value={{
        openSegmentModal,
        closeSegmentModal,
        selectedSegment,
        isOpen: selectedSegment !== null,
      }}
    >
      {children}
    </SegmentContext.Provider>
  );
};

export const useSegment = () => {
  const ctx = useContext(SegmentContext);
  if (!ctx) {
    throw new Error('useSegment must be used within a SegmentProvider');
  }
  return ctx;
};
