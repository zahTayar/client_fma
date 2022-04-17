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

class SearchApartments extends Component {
    constructor() {
      super();
      this.state = {
          price: 0,
          square_meter: 0,
          num_of_rooms: 0,
          city: '',
          street: '', 
          show_modal: false,
          error: '',
          item_id: ''
      };
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
        this.setState({ show_modal: false });
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
            created_by: 'lidar602@gmail.com' //this.props.user.email
        });
        axios.post("items/store", item, {headers:{"Content-Type" : "application/json"}})
        .then((response) => {
            this.setState({item_id: response.data.item_id})
        })
        .catch((error) => {
            console.log(error.response)
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
        return (
            <div>
                <div style={{ display: "flex", alignItems: "center", padding: "100px", margin: 'auto', borderRadius: '50%'}}>
                    <Stack>
                    <Modal
                        open={this.state.show_modal}
                        onClose={this.handleCloseModal}
                        aria-labelledby="parent-modal-title"
                        aria-describedby="parent-modal-description">
                        <Box sx={{ ...modal_style, width: 400 }}>
                        <h2 id="parent-modal-title">Search Results</h2>
                        <SearchResults item_id={this.state.item_id}></SearchResults>
                        </Box>
                    </Modal>
                    <form style={{marginLeft: "100px", backgroundColor: 'black', borderRadius: '50%'}} onSubmit={this.handleSubmitForm}>
                        {error}
                        <table style={{ justifyContent: "center", width: "800px", height: "150px", backgroundColor: 'white'}}>
                        <tr>
                        <th style={{ padding: "20px", width: "150px",backgroundColor: 'white'}}>
                        <FormControl required fullWidth sx={{ m: 1 }} variant="filled" style={{backgroundColor: 'white'}}>
                            <InputLabel htmlFor="filled-adornment-amount">Price</InputLabel>
                            <FilledInput
                                id="filled-adornment-amount"
                                onChange={this.handleChangePrice}
                                startAdornment={<InputAdornment position="start">₪</InputAdornment>}
                            />
                        </FormControl>
                        </th>
                        <th style={{ padding: "20px", width: "150px" }}>
                        <FormControl required fullWidth sx={{ m: 1 }} variant="filled" style={{backgroundColor: 'white'}}>
                            <InputLabel htmlFor="filled-adornment-amount">Number Of Rooms</InputLabel>
                            <FilledInput
                                id="filled-adornment-amount"
                                onChange={this.handleChangeNumOfRooms}
                            />
                        </FormControl>
                        </th> 
                        <th style={{ padding: "20px", width: "150px" }}>
                        <FormControl required fullWidth sx={{ m: 1 }} variant="filled" style={{backgroundColor: 'white'}}>
                            <InputLabel htmlFor="filled-adornment-amount">Square Meter</InputLabel>
                            <FilledInput
                                id="filled-adornment-amount"
                                onChange={this.handleChangeSquareMeter}
                            />
                        </FormControl>
                        </th>
                        </tr>
                        <tr>    
                        <th style={{ padding: "20px", width: "150px" }}>
                        <FormControl required fullWidth sx={{ m: 1 }} variant="filled" style={{backgroundColor: 'white'}}>
                            <InputLabel htmlFor="filled-adornment-amount">City</InputLabel>
                            <FilledInput
                                id="filled-adornment-amount"
                                onChange={this.handleChangeCity}
                            />
                        </FormControl>
                        </th>
                        <th style={{ padding: "20px", width: "150px" }}>
                        <FormControl fullWidth sx={{ m: 1 }} variant="filled" style={{backgroundColor: 'white'}}>
                            <InputLabel htmlFor="filled-adornment-amount">Street</InputLabel>
                            <FilledInput
                                id="filled-adornment-amount"
                                onChange={this.handleChangeStreet}
                            />
                        </FormControl>
                        </th>
                        <th style={{  padding: "10px", width: "150px" }}>
                            <Button type='submit' style={{  width: "150px", height: '50px' }} variant="contained" size = 'large'>
                                SEARCH</Button>
                        </th>
                        </tr>                       
                        </table>
                    </form>
                    </Stack>
                </div>
            </div>
        )
    }


    
}
export default SearchApartments;