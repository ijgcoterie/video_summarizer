import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width?: string;
}

const UploadModal: React.FC<ModalProps> = ({
  isVisible,
  onClose,
  children,
  width = 'auto',
}) => {
  if (!isVisible) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-md shadow-lg relative flex flex-col gap-4">
        <button
          onClick={onClose}
          className="flex justify-center items-center w-6 h-6 rounded-full absolute border-2 border-black top-3 right-3"
        >
          <XMarkIcon className="w-4 h-4 stroke-2" />
        </button>
        <div className="overflow-y-scroll max-w-[996px] max-h-[600px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
