import React, { Component } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import axios from "../axios";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import SearchResults from './SearchResults';
import CircularProgress from '@mui/material/CircularProgress';
import { saveItem } from "../Action/SaveItem";
import { saveUser } from "../Action/SaveUser";
import { connect } from "react-redux";

class SearchApartments extends Component {
    constructor(props) {
      super(props);
      this.state = {
          price: 0,
          square_meter: 0,
          num_of_rooms: 0,
          city: '',
          street: '', 
          show_modal: false,
          error: '',
          apartments: null,
          apartments_data: null,
          error_search: false,
          msg_error_search: 'Sorry, we do not find apartments for you yet....'
      };
      this.props.saveUser({
        user: this.props.user.user,
      });
      this.props.saveItem({
        item: this.props.item.item,
      });
      console.log(this.props.user.user.email)
    }

    handleChangePrice = (event) => {
        this.setState({ price: Number(event.target.value) });
      };
    
    handleChangeNumOfRooms = (event) => {
        this.setState({ num_of_rooms: Number(event.target.value) });
      };
    
    handleChangeSquareMeter = (event) => {
        this.setState({ square_meter: Number(event.target.value) });
      };

    handleChangeCity = (event) => {
        this.setState({ city: event.target.value });
      };

    handleChangeStreet = (event) => {
        this.setState({ street: event.target.value });
      };

    handleSubmitForm = (e) => {
        e.preventDefault();
        
        //check_inputs
        let error_msg = this.checkInputs()
        if (error_msg != '') {
            this.setState({ error: error_msg });
            return;
        }
        
        //save_search
        this.save_search()
        
        //open_modal
        this.setState({ show_modal: true });
    }

    handleCloseModal = () => {
        this.setState({ show_modal: false, apartments: null, error_search: false });
    }

    save_search = () => {
        const item = JSON.stringify({
            item_id: '',
            type: "search",
            address: 'null',
            active: true,
            item_attributes: {
                price: this.state.price,
                num_of_rooms: this.state.num_of_rooms,
                location: {
                    street: this.state.street,
                    city: this.state.city
                },
                square_meter: this.state.square_meter
            },
            created_by: this.props.user.user.email //this.props.user.email
        });
        axios.post("items/store", item, {headers:{"Content-Type" : "application/json"}})
        .then((response) => {
            this.postOperation(response.data.item_id);
            this.postOperationData(response.data.item_id);
        })
        .catch((error) => {
            console.log(error.response)
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
            this.setState({error_search: true})
            console.log(error.response.data)
        });
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
            this.setState({apartments_data: response.data})      
        })
        .catch((error) => {
            console.log(error.response.data)
        });
    }

    checkDigits = (field) => {
        return /^[0-9]+$/.test(field);
    }

    checkInputs = () => {
        if (!this.checkDigits(this.state.price)) {
            return 'Price should be a number';
        }
        if (!this.checkDigits(this.state.square_meter)) {
            return 'Square Meter should be a number';
        }
        if (!this.checkDigits(this.state.num_of_rooms)) {
            return 'Number Of Rooms should be a number';
        }
        return ''
    }

    render() {
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
        let error = null;
        if (this.state.error != '') {
            error = (
            <Alert severity="error">{this.state.error}.</Alert>
            );
        }
        let search_results = <CircularProgress />;
        if (this.state.apartments && (Object.keys(this.state.apartments).length > 0) && this.state.apartments_data) {
            search_results = <SearchResults data={this.state.apartments} apartments_data={this.state.apartments_data}></SearchResults>
        }
        else if(this.state.error_search){
            search_results = <Alert severity="info">{this.state.msg_error_search}.</Alert>
        }
        return (
            <div>
                <div style={{alignContent:'center', backgroundColor: 'lightcyan', width: '100%', maxWidth: '500px', display: 'block', margin: '0 auto', marginTop: '100px', borderRadius: '30px'}}>
                    <Modal
                        open={this.state.show_modal}
                        onClose={this.handleCloseModal}
                        aria-labelledby="parent-modal-title"
                        aria-describedby="parent-modal-description">
                        <Box sx={{ ...modal_style, width: 800, maxHeight: 700, overflowY: 'auto' }}>
                        {search_results}
                        </Box>
                    </Modal>
                        {error}
                        <form onSubmit={this.handleSubmitForm}>
                        <Box
                            sx={{
                                '& .MuiTextField-root': { m: 3, width: '25ch' }
                            }}
                            noValidate
                            autoComplete="on"
                        >
                            <div>
                            <FormControl required sx={{ m: 2 }} variant="filled">
                                <InputLabel>Price</InputLabel>
                                <FilledInput
                                        id="filled-adornment-amount"
                                        onChange={this.handleChangePrice}
                                        startAdornment={<InputAdornment position="start">₪</InputAdornment>}
                                />
                            </FormControl>
                            <FormControl required sx={{ m: 2 }} variant="filled" >
                                <InputLabel htmlFor="filled-adornment-amount">Number Of Rooms</InputLabel>
                                <FilledInput
                                    id="filled-adornment-amount"
                                    onChange={this.handleChangeNumOfRooms}
                                />
                            </FormControl>
                            <FormControl required sx={{ m: 2 }} variant="filled">
                                <InputLabel htmlFor="filled-adornment-amount">Square Meter</InputLabel>
                                <FilledInput
                                    id="filled-adornment-amount"
                                    onChange={this.handleChangeSquareMeter}
                                />
                            </FormControl>
                            </div>
                            <div>
                            <FormControl required sx={{ m: 2 }} variant="filled">
                                <InputLabel htmlFor="filled-adornment-amount">City</InputLabel>
                                <FilledInput
                                    id="filled-adornment-amount"
                                    onChange={this.handleChangeCity}
                                />
                            </FormControl>
                            <FormControl sx={{ m: 2 }} variant="filled" >
                                <InputLabel htmlFor="filled-adornment-amount">Street</InputLabel>
                                <FilledInput
                                    id="filled-adornment-amount"
                                    onChange={this.handleChangeStreet}
                                />
                            </FormControl>
                            <Button type='submit' style={{   width: "150px", height: '50px', marginBottom: '10px' }} variant="contained" size = 'large'>
                                SEARCH
                            </Button>
                            </div>
                        </Box>
                        </form>
                </div>
            </div>
        )
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
const Sear = connect(mapStateToProps, mapDispatchToProps)(SearchApartments);
export default Sear;