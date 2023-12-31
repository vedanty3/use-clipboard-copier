import { useRef, useState } from "react";

enum TagName {
  INPUT = "INPUT",
}

export const useClipBoardCopier = (hasCopiedTimer: number) => {
  const [isCopied, setIsCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const clipBoardRef = useRef<HTMLInputElement | null>(null);

  const copyToClipBoard = async (): Promise<void> => {
    if (!clipBoardRef || !clipBoardRef.current) {
      return;
    }

    try {
      if (clipBoardRef.current.tagName === TagName.INPUT) {
        await navigator.clipboard.writeText(clipBoardRef.current.value);
      } else {
        await navigator.clipboard.writeText(clipBoardRef.current.innerText);
      }
      setIsCopied(true);
      setError(null);

      setTimeout(() => {
        setIsCopied(false);
      }, hasCopiedTimer);
    } catch (err) {
      setIsCopied(false);
      setError("Failed to copy to clipboard");
      console.error("Copy to clipboard failed:", err);
    }
  };

  return { isCopied, clipBoardRef, copyToClipBoard, error };
};
