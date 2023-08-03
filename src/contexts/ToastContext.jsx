import React, { createContext, useCallback, useMemo, useState } from 'react';
import { Toast } from 'react-bootstrap';
import IconInfo from '../components/icons/IconInfo';

export const ToastContext = createContext();

export function ToastContextProvider({ children }) {
  const [toast, setToast] = useState(null);

  const showToast = useCallback(
    (message) => {
      setToast(null);
      setTimeout(() => setToast(message), 0);
    },
    [setToast]
  );

  const value = useMemo(() => ({ showToast }), []);

  return (
    <ToastContext.Provider value={value}>
      {children}

      <div className="d-flex flex-column-reverse gap-3 p-4 position-fixed bottom-0 w-100 align-items-center">
        {toast && (
          <Toast
            bg="dark"
            className="text-bg-dark"
            show
            animation={false}
            delay={2500}
            autohide
            onClose={() => setToast(null)}
          >
            <Toast.Body className="hstack gap-2 align-items-center">
              <IconInfo />
              <span>{`${toast}.`}</span>
            </Toast.Body>
          </Toast>
        )}
      </div>
    </ToastContext.Provider>
  );
}
