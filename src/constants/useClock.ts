// hooks/useCanadaClock.ts
import { useEffect, useRef } from "react";

export const useCanadaClock = () => {
  const secRef = useRef<HTMLLIElement>(null);
  const minRef = useRef<HTMLLIElement>(null);
  const hourRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Canada/Atlantic" }));

      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours();

      const sdegree = seconds * 6;
      const mdegree = minutes * 6;
      const hdegree = hours * 30 + minutes / 2;

      if (secRef.current) secRef.current.style.transform = `rotate(${sdegree}deg)`;
      if (minRef.current) minRef.current.style.transform = `rotate(${mdegree}deg)`;
      if (hourRef.current) hourRef.current.style.transform = `rotate(${hdegree}deg)`;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return { secRef, minRef, hourRef };
};

export const useIndiaClock = () => {
  const secRef1 = useRef<HTMLLIElement>(null);
  const minRef1 = useRef<HTMLLIElement>(null);
  const hourRef1 = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));

      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours();

      const sdegree = seconds * 6;
      const mdegree = minutes * 6;
      const hdegree = hours * 30 + minutes / 2;

      if (secRef1.current) secRef1.current.style.transform = `rotate(${sdegree}deg)`;
      if (minRef1.current) minRef1.current.style.transform = `rotate(${mdegree}deg)`;
      if (hourRef1.current) hourRef1.current.style.transform = `rotate(${hdegree}deg)`;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return { secRef1, minRef1, hourRef1 };
};
