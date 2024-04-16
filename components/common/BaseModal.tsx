import React from "react";

type Props = {
  isOpen?: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const BaseModal: React.FC<Props> = ({ onClose, children }) => {
  return (
    <div className="fixed z-20 inset-0">
      <div className="flex items-center justify-center mx-auto h-full">
        <div
          className="fixed inset-0 bg-[#0D0E1A] opacity-60"
          onClick={onClose}
        ></div>
        <div className="relative flex flex-col">{children}</div>
      </div>
    </div>
  );
};

export default BaseModal;
