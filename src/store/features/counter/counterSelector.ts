import { type RootState } from '../../rootType';

const counterSelector = (state: RootState) => state.counter.value;

export default counterSelector;
