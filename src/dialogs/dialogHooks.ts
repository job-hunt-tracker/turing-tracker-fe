import { useRecoilState } from 'recoil';
import { dialogState, DialogState } from './dialogState';

const useDialog = () => {
  const [currentDialog, setDialog] = useRecoilState(dialogState);

  const openDialog = (type: DialogState['type'], data: DialogState['data'] = null) => {
    setDialog({ type, data });
  };

  const closeDialog = () => {
    setDialog({ type: null, data: null });
  };

  return {
    ...currentDialog,
    openDialog,
    closeDialog,
  };
};

export default useDialog;