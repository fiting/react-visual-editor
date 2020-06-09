import ACTION_TYPES from '../actionTypes';
import { DragSourceType, DropTargetType } from '../../types';
import { LEGO_BRIDGE } from '../../store';

export type DragSourcePayload = Partial<DragSourceType> & { componentName?: string, defaultProps?: any }
export const getDragSource = (payload: DragSourcePayload) => LEGO_BRIDGE.store!.dispatch({
  type: ACTION_TYPES.getDragSource,
  payload,
});
export const getDropTarget = (payload: DropTargetType) => LEGO_BRIDGE.store!.dispatch({
  type: ACTION_TYPES.getDropTarget,
  payload,
});

export const clearDropTarget = () => LEGO_BRIDGE.store!.dispatch({
  type: ACTION_TYPES.clearDropTarget,
});