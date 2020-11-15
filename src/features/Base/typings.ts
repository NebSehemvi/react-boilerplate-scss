export interface StoreProps {
  value: number;
}

export interface DispatchProps {
  clear: (value: number) => void;
  add: () => void;
  add10: () => void;
  subtract: () => void;
  subtract10: () => void;
}

export interface Props {
}

export interface State {
}