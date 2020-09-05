import DirectoryActionTypes from "./directory.types";

const INITIAL_STATE = {
     sections: [
          {
               title: 'women',
               imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
               size: 'large',
               id: 1,
               linkUrl: 'shop/women'
          },
          {
               title: 'men',
               imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
               size: 'large',
               id: 2,
               linkUrl: 'shop/men'
          },
          {
               title: 'sneakers',
               imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
               id: 3,
               linkUrl: 'shop/sneakers',
               size: "large"
          },
          {
               title: 'jackets',
               imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
               id: 4,
               linkUrl: 'shop/jackets',
               size: "large"
          },
          {
               title: 'hats',
               imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
               id: 5,
               linkUrl: 'shop/hats',
               size: "large"
          }        
     ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
     switch (action.type) {
          case DirectoryActionTypes.DIRECTORY_iTEMS:
               return {
                    ...state,
                    sections: state.sections
               }
          default:
               return state
     }
}
export default directoryReducer;