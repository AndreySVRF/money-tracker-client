import React, { ReactNode, useCallback, useEffect, useRef } from 'react';
import { CloseIcon } from '../../assets';
import classNames from 'classnames';
import { useEvent } from '../../utils';

interface ModalProps {
  title?: string;
  handleClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, handleClose, children }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const animate = (isClosing = false) => {
    ref.current?.classList.toggle('opacity-0', isClosing);
    contentRef.current?.classList.toggle('-translate-y-10', isClosing);
  };

  const handleEsc = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      close();
    }
  };

  useEvent('keydown', handleEsc);

  const close = useCallback(() => {
    animate(true);

    setTimeout(handleClose, 500);
  }, [handleClose]);

  useEffect(() => {
    setTimeout(animate);
  }, [close, handleClose]);

  return (
    <div
      className="fixed inset-0 z-30 flex items-center justify-center bg-slate-700/70 opacity-0 transition-opacity duration-300 dark:bg-slate-900/80"
      role="dialog"
      ref={ref}
      onClick={close}
    >
      <div
        className="relative bottom-0 top-0 flex max-h-[calc(100vh-40px)] w-[450px] -translate-y-10 flex-col rounded-md bg-white transition-transform duration-300 dark:bg-gray-800"
        ref={contentRef}
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className={classNames('relative flex justify-between  p-4', {
            ['flex-row-reverse']: !title
          })}
        >
          {title && <div className="text-xl">{title}</div>}
          <button
            className="right-0 text-neutral-800 duration-300 hover:text-neutral-600 dark:text-neutral-300 dark:hover:text-neutral-100"
            onClick={close}
          >
            <CloseIcon className="h-7 w-7" />
          </button>
        </div>

        <div className="flex-grow px-5 py-4">{children}</div>
      </div>
    </div>
  );
};

export { Modal };
