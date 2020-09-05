import React from "react";
import MenuItem from "../menu-item/menu-item";
//redux
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCurrentDirectory} from "../../redux/directory/directory.selectors";
import "./directory.styles.scss";

class Directory extends React.Component {
  
     render() {
          const { sections } = this.props;
          return(
               <div className="directory-menu">
                    {
                         sections
                         .map(directoryItems => {
                              return (
                                   <MenuItem 
                                   key={directoryItems.id}
                                   directoryItems={directoryItems}
                                   />
                              )
                         })
                    }
               </div>
          )
     }

}
const mapStateToProps = createStructuredSelector({
     sections: selectCurrentDirectory
});

export default connect(mapStateToProps)(Directory);