import { type RootState } from '../../rootType';

const abilitySelector = (state: RootState) => state.testRedux.ability;
const berrySelector = (state: RootState) => state.testRedux.berry;

export { abilitySelector, berrySelector };
