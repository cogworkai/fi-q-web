import { useState, useEffect } from 'react';

export type ABVariant = 'A' | 'B';

interface ABTestConfig {
  testName: string;
  variants: ABVariant[];
}

/**
 * Hook for A/B testing
 * Assigns user to a variant and persists it in localStorage
 */
export function useABTest({ testName, variants }: ABTestConfig): ABVariant {
  const [variant, setVariant] = useState<ABVariant>('A');

  useEffect(() => {
    const storageKey = `ab_test_${testName}`;
    
    // Check if user already has a variant assigned
    const storedVariant = localStorage.getItem(storageKey) as ABVariant | null;
    
    if (storedVariant && variants.includes(storedVariant)) {
      setVariant(storedVariant);
    } else {
      // Randomly assign a variant
      const randomVariant = variants[Math.floor(Math.random() * variants.length)];
      setVariant(randomVariant);
      localStorage.setItem(storageKey, randomVariant);
      
      // Track assignment (can be extended with analytics)
      console.log(`A/B Test "${testName}": Assigned variant ${randomVariant}`);
    }
  }, [testName, variants]);

  return variant;
}
