import { atom } from 'recoil';

type DialogType = 'new' | 'details' | null;

export interface DialogState {
  type: DialogType;
  data: any; // !! define shape of data here
}

export const dialogState = atom<DialogState>({
  key: 'dialogState',
  default: {
    type: null,
    data: null,
  },
});