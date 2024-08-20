import { useEffect, useRef } from 'react';

const Component = ({ value }: { value: number }) => {
  const prevValueRef = useRef(value);

  useEffect(() => {
    const prevValue = prevValueRef.current;
    prevValueRef.current = value;

    if (prevValue !== value) {
      console.log(`Previous value: ${prevValue}`);
      console.log(`New value: ${value}`);
    }
  }, [value]);

  return <div>{value}</div>;
};
