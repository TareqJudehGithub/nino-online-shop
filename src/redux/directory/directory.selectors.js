import {createSelector} from "reselect";

const directoryState = state => state.directory;
export const selectCurrentDirectory = createSelector(
     [directoryState],
     directory => directory.sections
);

const MENU_ID_MAP = {
     women: 1,
     men: 2,
     sneakers: 3,
     jackets: 4,
     hats: 5
}
export const selectMenu = menuUrlParam => createSelector(
     [selectCurrentDirectory],
     sections => sections.find(section => 
          section.id === MENU_ID_MAP[menuUrlParam]
     )
);

