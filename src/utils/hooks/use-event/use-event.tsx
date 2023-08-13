import { useEffect } from 'react';

const useEvent = (
  name: string,
  handler: (event: KeyboardEvent) => void,
  target: HTMLElement | Document = document
) => {
  useEffect(() => {
    const eventHandler: EventListenerOrEventListenerObject = (event) => {
      if (event instanceof KeyboardEvent) {
        handler(event);
      }
    };

    target.addEventListener(name, eventHandler);

    return () => target.removeEventListener(name, eventHandler);
  }, [handler, name, target]);
};

export { useEvent };
