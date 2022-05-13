import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

class CalculateResults extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.data)
        this.state = {
//this.props.data
//this.props.square_meter
        }
      }

      calculate_increase_value = (year) => {
          year = Number(year)
          if(year == 2018 || Number(this.props.data[String(year)]) == 0 || Number(this.props.data[String(year - 1)]) == 0){ return (
            <Typography variant="body2">
                
            </Typography>
        );}
          let current_per_meter = Number(this.props.data[String(year)]) / Number(this.props.square_meter);
          console.log(Number(this.props.square_meter))
          let year_before_per_meter = Number(this.props.data[String(year - 1)]) / Number(this.props.square_meter);
          let dif = current_per_meter - year_before_per_meter;
          let increase_value = Math.abs(dif / year_before_per_meter).toFixed(2)*100
          if(dif > 0){
              return (
                  <Typography variant="body2" style ={{color: 'green'}}>
                      קיימת עליית ערך של {increase_value}%
                  </Typography>
              )
          }
          else {
                return (
                    <Typography variant="body2" style ={{color: 'red'}}>
                        קיימת ירידת ערך של {increase_value}%
                    </Typography>
                )
            }
          
      }

    render() {
        let cal_list = [];
        for (const [key, value] of Object.entries(this.props.data)) {
        cal_list.push(
            <Card sx={{ maxWidth: 300, margin: '0px 10px', direction:'rtl' }}>
                    <CardContent sx={{ mb: 2, textAlign:'center' }}>
                        <Typography sx={{ mb: 2 }} variant="h5" component="div">
                            {key}
                        </Typography>
                        <Typography sx={{ mb: 2 }}>
                        מחיר ממוצע לדירת {this.props.square_meter} מ"ר הינו: {value.toFixed(0)}
                        </Typography>
                        {this.calculate_increase_value(key)}
                    </CardContent>
                </Card>
        )    
          }
        return (
            <div style={{display: 'flex'}}>
                {cal_list}
                
            </div>
        )
    }
    
}
export default CalculateResults;