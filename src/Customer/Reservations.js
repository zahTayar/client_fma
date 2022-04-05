import React , {Component} from 'react'
import "./Style.css";
import Navbar from "./NavbarCustomer"
import { saveItem } from "../Action/SaveItem";
import { saveUser } from "../Action/SaveUser";
import { connect } from "react-redux";
import Bottom from "../Basic/Bottom"
import Table from "./Table"

class Reservations extends Component{
    constructor(props) {
        super(props);

        this.props.saveUser({
          user: this.props.user.user,
        });
        this.props.saveItem({
            item: this.props.item.item,
          });
        }
        viewTableMap(){

        }

    render(){
        return(
           
           <div >
         <Navbar/>
         <div>
         <h1 className="regular" style={{color: 'black', textAlign:'center', marginTop:'100px', fontWeight:'bolder'}}>השולחנות שלי</h1>
         </div>
         <div style={{marginLeft:'250px'}}>
         <Table user={this.props.user} />
         </div>
         <div style={{marginTop:"464px"}}>
          <Bottom />
          </div>
               </div>
        );                      
    }
}
const mapStateToProps = (state) => {
    return {
      item: state.item,
      user: state.user
    };
  };
  function mapDispatchToProps(dispatch) {
    return {
      saveItem: (item) => dispatch(saveItem(item)),
      saveUser: (user) => dispatch(saveUser(user)),
    };
  }
const Res = connect(mapStateToProps, mapDispatchToProps)(Reservations);

export default connect()(Res);