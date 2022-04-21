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

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
      }

      handleToggle = (value) => {
        console.log(value);
      };

    render() {
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
        return (
            <div>
                <List sx={{ width: '100%', maxWidth: 800, bgcolor: 'background.paper', overflowY: 'auto' }}>
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