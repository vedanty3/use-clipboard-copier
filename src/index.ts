import { useRef, useState } from "react";

enum TagName {
  INPUT = "INPUT",
}

export const useClipBoardCopier = (hasCopiedTimer: number) => {
  const [isCopied, setIsCopied] = useState(false);
  const clipBoardRef = useRef<HTMLInputElement | null>(null);

  const copyToClipBoard = (): void => {
    if (!clipBoardRef || !clipBoardRef.current) {
      return;
    } else if (clipBoardRef.current.tagName === TagName.INPUT) {
      navigator.clipboard.writeText(clipBoardRef.current.value);
    } else {
      navigator.clipboard.writeText(clipBoardRef.current.innerText);
    }

    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, hasCopiedTimer);
  };

  return { isCopied, clipBoardRef, copyToClipBoard };
};
