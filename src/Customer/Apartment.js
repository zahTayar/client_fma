import React, { Component } from 'react';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

class Apartment extends Component {
    constructor(props) {
        super(props);
      }

      render() {
          let image_list = null;
          if(this.props.data['pictures'].length > 0){
            image_list = 
            <ImageList sx={{ width: 700, height: 450, marginRight: 0, marginLeft: 'auto'}} cols={4} rowHeight={164}>
            {this.props.data['pictures'].map((item, index) => (
              <ImageListItem key={index}>
                <img
                  src={item}
                  alt={index}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
          }
          return (
              <div>
                  <Typography variant="h4" component="div" style={{direction: 'rtl', textAlign: 'right'}}>
                    {this.props.data['neighbor'] ? this.props.data['neighbor']+ ", " : ''}
                    {this.props.data['street'] ? this.props.data['street']+ ", " : ''}
                    { this.props.data['city'] }
                  </Typography>
                  <Typography variant="h6" component="div" style={{direction: 'rtl', textAlign: 'right'}}>
                    {this.props.data['floor'] ? this.props.data['floor']+ ", " : ''}
                    {this.props.data['num_of_rooms'] ? "מספר חדרים " + this.props.data['num_of_rooms']+ ", " : ''}
                    {this.props.data['square_meter'] ? this.props.data['square_meter']+ " "+"מטר מרובע" + ", " : ''}
                    { this.props.data['price'] + "₪" }
                  </Typography>
                  <Typography variant="h8" component="div" style={{direction: 'rtl', textAlign: 'right'}}>
                    {this.props.data['description'] ? this.props.data['description'] : ''}
                  </Typography>
                  <br></br>
                  {image_list}
                  <Box sx={{
                        width: '100%',
                        height: 80,
                        maxHeight: '500px',
                        textAlign: 'right',
                        backgroundColor: 'whitesmoke',
                        '&:hover': {
                        backgroundColor: 'whitesmoke.dark',
                        opacity: [0.9, 0.8, 0.7],
                        textAlign: 'right'
                    }}}>
                        <Stack spacing={1}>
                            <Typography variant="h5" component="div" style={{direction: 'rtl'}}>
                            { this.props.data['contract_name'] }
                            </Typography>
                            <Typography variant="h5" component="div" style={{direction: 'rtl'}}>
                            { this.props.data['contract_phone'] }
                            </Typography>
                        </Stack>
                 </Box>
              </div>
          )
      }

}

export default Apartment;
