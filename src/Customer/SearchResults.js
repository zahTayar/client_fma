import React, { Component } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import BackgroundImage from '../img/BackgroungImage.jpg'
import ListItemButton from '@mui/material/ListItemButton';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Apartment from './Apartment';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show_modal: false,
            current_apartment: null
        }
      }

      handleToggle = (value) => {
        console.log(value);
        this.setState({show_modal: true, current_apartment: value});
      };

      handleCloseModal = () => {
          this.setState({show_modal: false});
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
            overflowY: 'auto'
          };
        let apartments = []
        for(let i in Object.values(this.props.data)) {
            let tmp_apartment = this.props.data[i];
            apartments.push(tmp_apartment);
        }
        let apartments_data = []
        for(let i in Object.values(this.props.apartments_data)) {
            let tmp_apartment_data = this.props.apartments_data[i];
            apartments_data.push(tmp_apartment_data);
        }
        let apartments_view = apartments.map(apartment => 
            <><ListItemButton onClick={()=> this.handleToggle(apartment)} dense>
                <ListItem alignItems="flex-start" key={apartments.indexOf(apartment)}>
                  <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src={ apartment['pictures'].length > 0 ? apartment['pictures'][0] : `url(${BackgroundImage})`} />
                  </ListItemAvatar>
                  <ListItemText
                      primary= {apartment['street'] ? apartment['street'] + ', ' + apartment['city'] : apartment['city']}
                      secondary={<React.Fragment>
                          <Typography
                              sx={{ display: 'inline' }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                          >
                              {apartment['num_of_rooms'] + ' rooms, ' + apartment['price']+'₪'}
                          </Typography>
                          {" — Size: " + apartment['square_meter'] + " square meter, Date Of Uploaded: " + apartment['date_of_uploaded']}
                      </React.Fragment>} />
              </ListItem></ListItemButton><Divider variant="inset" component="li" /></>
           )
        let apartment_view = <CircularProgress />;
        if (this.state.current_apartment) {
            apartment_view = <Apartment data={this.state.current_apartment}></Apartment>
        }
        return (
            <div>
                <Modal
                    open={this.state.show_modal}
                    onClose={this.handleCloseModal}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description">
                    <Box sx={{ ...modal_style, width: 900, maxHeight: '600px', overflowY: 'auto' }}>
                    <Button onClick = {this.handleCloseModal}>X</Button>
                    {apartment_view}
                    </Box>
                </Modal>
                <List sx={{ width: '100%', maxWidth: 1000, bgcolor: 'background.paper', maxHeight: '500px' }}>
                <h3 id="parent-modal-title">Last Deals</h3>
                {apartments_data && apartments_data.map(tmp_apartment_data => 
                     <><ListItem alignItems="flex-start" style={{backgroundColor: "whitesmoke"}}>
                           <ListItemText
                               primary= {tmp_apartment_data['full_address']}
                               secondary={<React.Fragment>
                                   <Typography
                                       sx={{ display: 'inline' }}
                                       component="span"
                                       variant="body2"
                                       color="text.primary"
                                   >
                                       {tmp_apartment_data['asset_room_numbers'] + ' rooms, price sold: ' + tmp_apartment_data['price_sold_asset']+'₪'}
                                   </Typography>
                                   {" — Size: " + tmp_apartment_data['asset_size_in_meters'] + " meter, Deal Date: " + tmp_apartment_data['date_deal'] + ' ,' + tmp_apartment_data['deal_description']}
                               </React.Fragment>} />
                       </ListItem><Divider variant="inset" component="li" /></>
                    )}
                    <br></br>
                    <h2 id="parent-modal-title">Search Results</h2> 
                   {apartments ? apartments_view : null}
                </List>
            </div>
        )
    }
    
}
export default SearchResults;