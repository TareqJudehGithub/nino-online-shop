import {createSelector} from "reselect";

const directoryState = state => state.directory;
export const selectCurrentDirectory = createSelector(
     [directoryState],
     directory => directory.sections
);