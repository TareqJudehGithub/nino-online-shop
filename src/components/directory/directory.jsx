import React from "react";
import MenuItem from "../menu-item/menu-item";
import {connect} from "react-redux";
import "./directory.styles.scss";

class Directory extends React.Component {

     constructor(){
          super();
          this.state = {
               
          };
     };
     
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
const mapStateToProps = ({ directory: {sections}}) => ({
     sections: sections
});

export default connect(mapStateToProps)(Directory);