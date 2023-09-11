"use client";

import PreviewModal from "@/components/preview-modal";

import {useEffect, useState} from "react";

const ModalProvider = () => {
  // hydration check
  const [isMounted, setIsMounted]  = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  // hydration check end

  return (
    <>
      <PreviewModal/>
    </>
  );
}

export default ModalProvider;