import { useEffect } from 'react';
import * as styles from './toast-item.css';
import { ToastData } from './types/types';
import useTimeout from './hooks/use-timeout';

interface ToastItemProps {
  toast: ToastData;
  onClose: (id: string) => void;
}

const ToastItem = ({ toast, onClose }: ToastItemProps) => {
  const duration = toast.duration ?? 3000;
  const autoClose = toast.autoClose ?? true;

  const { start, clear } = useTimeout(() => {
    if (toast.id) {
      onClose(toast.id);
    }
  }, duration);

  useEffect(() => {
    if (autoClose && duration > 0) {
      start();
    }
    return () => clear();
  }, [autoClose, duration, start, clear]);

  return (
    <div className={styles.toastContainerRecipe({ position: 'bottom-center' })}>
      <div className={styles.toastMessage}>
        {toast.icon}
        <p>{toast.message}</p>
      </div>
    </div>
  );
};

export default ToastItem;
