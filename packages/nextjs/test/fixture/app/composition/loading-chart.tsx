"use client";

import { useState, useSyncExternalStore } from "react";
import { useLoadingData } from "../../../../../../components/chart/src/useLoadingData";

const subscribe = () => () => {};

export function ShellNote() {
  const [value, setValue] = useState("");
  return (
    <label>
      Shell note
      <input
        aria-label="Shell note"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
    </label>
  );
}

export function LoadingChart() {
  const { loadingData } = useLoadingData(true, 4, 20, 80);
  const hydrated = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
  return (
    <svg
      aria-label="Loading chart"
      data-hydrated={hydrated}
      width={200}
      height={100}>
      {loadingData.map(({ loading }, index) => (
        <rect
          key={index}
          x={index * 40}
          width={24}
          height={loading}
          fill="currentColor"
        />
      ))}
    </svg>
  );
}
