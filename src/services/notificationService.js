import { toast } from 'react-toastify';

export const showErrorToast = (errorMessage) => {
  toast.error(errorMessage);
};

export const showSuccessToast = (msg) => {
  toast.success(msg);
};
