export interface PopUpInterface {
  onClose?: () => void;
  coordinates: { x: number; y: number };
  setCoordinates: (x: number, y: number) => void;
}
