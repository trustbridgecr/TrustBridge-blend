"use client";

import Image from "next/image";

const HeaderMaintenace = () => {
  return (
    <div className="flex w-full justify-between items-center gap-2 px-4">
      <Image src="/logo.png" alt="Trustless Work" width={80} height={80} />
      <div className="flex gap-5 ml-auto"></div>
    </div>
  );
};

export default HeaderMaintenace;
