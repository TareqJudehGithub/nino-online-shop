import DirectoryActionTypes from "./directory.types";

export const directoryItems = (item) => ({
     type: DirectoryActionTypes.DIRECTORY_iTEMS,
     payload: item
});