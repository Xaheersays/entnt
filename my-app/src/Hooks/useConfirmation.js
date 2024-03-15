import { useState } from 'react';

const useConfirmation = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [itemIdToDelete, setItemIdToDelete] = useState(null);

  const confirm = (itemId) => {
    setItemIdToDelete(itemId);
    setShowConfirmation(true);
  };

  const cancel = () => {
    setShowConfirmation(false);
    setItemIdToDelete(null);
  };

  return {
    showConfirmation,
    confirm,
    cancel,
    itemIdToDelete
  };
};

export default useConfirmation;
