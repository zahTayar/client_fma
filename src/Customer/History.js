import React , {Component} from 'react'
import Navbar from "./NavbarCustomer"
import Bottom from "../Basic/Bottom";
import BackgroundImage from '../img/BackgroungImage.jpg';
import axios from "../axios";
import CircularProgress from '@mui/material/CircularProgress';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SearchResults from './SearchResults';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { saveItem } from "../Action/SaveItem";
import { saveUser } from "../Action/SaveUser";
import { connect } from "react-redux";

class History extends Component{
    constructor(props) {
        super(props);
        this.state = {
          searches: null,
          show_modal: false,
          apartments: null,
          apartments_data: null,
          error_search: false,
          msg_error_search: 'Sorry, we do not find apartments for you yet....',
          flag: true,
          open: false, 
          item_id: null
        }
        this.props.saveUser({
          user: this.props.user.user,
        });
        this.props.saveItem({
          item: this.props.item.item,
        });
        console.log(this.props.user.user.email)
    }
    componentDidMount = () => {
      this.last_searches()
    }

    handleOpen = () => {
      this.setState({open: true, show_modal: false})
    }

    handleClose = () => {
        this.setState({open: false})
        window.location.reload(false);
        this.setState({flag: true});
    }

    delete = () => {
      console.log(this.state.item_id)
      const item = JSON.stringify({
        active: false
        });
          axios.put("items/" + this.state.item_id, item, {headers:{"Content-Type" : "application/json"}})
          .then((response) => {
            console.log(response.data)
            this.setState({open: false})
            window.location.reload(false);
            this.setState({flag: true});
          })
          .catch((error) => {
              console.log(error.response.data)
          });
    }

    handleClick = (event, item_id) => {
      if(this.state.flag){
        this.postOperation(item_id)
        this.postOperationData(item_id)
        this.setState({ show_modal: true });
      }
    };

    handleDelete = (event, item_id) => {
      this.setState({flag: false, item_id: item_id});
      this.handleOpen();

    }

    last_searches = () => {
      axios.get("items/by_user/" + this.props.user.user.email)
      .then((response) => {
        this.setState({searches: response.data})
        if (Object.keys(response.data).length == 0) {
          this.setState({error_search: true})
      }   
      })
      .catch((error) => {
          console.log(error.response.data)
      });
    }

    postOperation = (item_id) => {
      const operation = JSON.stringify({
          _id: 'operation_id',
          type: "search",
          invoked_by: this.props.user.user.email, //this.props.user.email
          created_timestamp: '',
          operation_attributes: {
              item_id: item_id
          }
      });
      axios.post("operations", operation, {headers:{"Content-Type" : "application/json"}})
      .then((response) => {
          this.setState({apartments: response.data})  
          if (Object.keys(response.data).length == 0) {
            this.setState({error_search: true})
        }   
      })
      .catch((error) => {
          console.log(error.response.data)
          
      });
  }
  
  handleCloseModal = () => {
    this.setState({ show_modal: false, apartments: null, error_search: false});
  }

  postOperationData = (item_id) => {
      const operation = JSON.stringify({
          _id: 'operation_id',
          type: "search_apartments_data",
          invoked_by: this.props.user.user.email, //this.props.user.email
          created_timestamp: '',
          operation_attributes: {
              item_id: item_id
          }
      });
      axios.post("operations", operation, {headers:{"Content-Type" : "application/json"}})
      .then((response) => {
          console.log(response.data)
          this.setState({apartments_data: response.data})      
      })
      .catch((error) => {
          console.log(error.response.data)
      });
  }

    render(){
      const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      const modal_style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
      };
      let search_data = []
      if(this.state.searches) {
        for(let i in Object.values(this.state.searches)) {
          let tmp_search_data = this.state.searches[i];
          search_data.push(tmp_search_data);
        }
        search_data.sort(function(a,b){
          return new Date(b.date_of_upload) - new Date(a.date_of_upload)
        })
      }
      let searchers_view = <CircularProgress />;
      if( this.state.searches && search_data.length > 0) {
        searchers_view = 
          search_data.map((search, index) => (
            <TableRow
              hover
              onClick={(event) => this.handleClick(event, search.item_id)}
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell align="center">{search.date_of_upload}</TableCell>
              <TableCell align="center">{search.item_attributes.location.city}</TableCell>
              <TableCell align="center">{search.item_attributes.location.street}</TableCell>
              <TableCell align="center">{search.item_attributes.num_of_rooms}</TableCell>
              <TableCell align="center">{search.item_attributes.price}</TableCell>
              <TableCell align="center">{search.item_attributes.square_meter}</TableCell>
              <TableCell align="center">
                <IconButton aria-label="delete" onClick={(event) => this.handleDelete(event, search.item_id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))
      }
      else if(this.state.error_search){
        searchers_view = <Alert severity="info" style={{backgroundColor: 'white'}}> You don't have search yet...</Alert>
    }

      let search_results = <CircularProgress />;
        if (this.state.apartments && (Object.keys(this.state.apartments).length > 0) && this.state.apartments_data) {
            search_results = <SearchResults data={this.state.apartments} apartments_data={this.state.apartments_data}></SearchResults>
        }
        else if(this.state.error_search){
            search_results = <Alert severity="info">{this.state.msg_error_search}.</Alert>
        }

        return(
            <div style={{padding: "100px", borderRadius: '50%', display: "flex", position: 'fixed', alignItems: "center", marginLeft: '100px'}}>
                <Modal
                  open={this.state.open}
                  onClose={this.handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Are you sure ? 
                    </Typography>
                    <br></br>
                    <Button variant="contained" style={{marginLeft: '250px'}} onClick={this.delete}>
                      Yes
                    </Button>
                  </Box>
                </Modal>
                <Modal
                        open={this.state.flag && this.state.show_modal}
                        onClose={this.handleCloseModal}
                        aria-labelledby="parent-modal-title"
                        aria-describedby="parent-modal-description">
                        <Box sx={{ ...modal_style, width: 800, maxHeight: 700, overflowY: 'auto' }}>
                        {search_results}
                        </Box>
                </Modal>
                <TableContainer component={Paper} style={{  width: 'auto', maxHeight: '500px'}}>
                  <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                      <TableRow>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center">Search Date</TableCell>
                        <TableCell align="center">City</TableCell>
                        <TableCell align="center">Street</TableCell>
                        <TableCell align="center">Number Of Rooms</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">Square Meter</TableCell>
                        <TableCell align="center"></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {searchers_view}
                    </TableBody>
                  </Table>
                </TableContainer>
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

const His = connect(mapStateToProps, mapDispatchToProps)(History);

export default connect()(His);