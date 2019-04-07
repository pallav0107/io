import React, { Component } from 'react';
import styled from 'styled-components';
import { Box } from 'grid-styled';
import { Field } from 'redux-form';
import { required, dayDate } from '../../helpers/index';
import { InputDate } from '../forms';
import moment from "moment";

const DateContainer = styled(Box)`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 3px;
  margin-left: 1px;
  with: 100;
`;

export class DateComponent extends Component {
  constructor(props) {
    super(props);
  }

  onblur = e => {
    var dateReg = /^\d{1,2}[/]\d{1,2}[/]\d{4}$/
   var res= e.target.value.match(dateReg)
    if(!res){
      this.props.logError('Invalid Input');
    }
    const { minDate, maxDate } = this.props;
    const date = e.target.value.split('/');
    const day = date[0];
    const month = date[1];
    const year = date[2];

    const today = new Date();
    if (minDate) {
      let min_date = minDate.split("/");
      let min_day = min_date[0];
      let min_month = min_date[1];
      let min_year = min_date[2];
      
      let yourDate = moment([parseInt(year), parseInt(month) - 1, parseInt(day)]);
      let minimumDate = moment([parseInt(min_year), parseInt(min_month) - 1, parseInt(min_day)])

      let diffDays = yourDate.diff(minimumDate, 'days')
      if (diffDays < 0) {
        //log error
        console.log("diff");
        
        this.props.logError('Date cannot be below minimum date');
      return false;
      }
      else {
        if (maxDate) {
          let max_date = maxDate.split("/");
          let max_day = max_date[0];
          let max_month = max_date[1];
          let max_year = max_date[2];
          let yourDate = moment([parseInt(year), parseInt(month) - 1, parseInt(day)]);
          let maximumDate = moment([parseInt(max_year), parseInt(max_month) - 1, parseInt(max_day)])
          let diffDays = yourDate.diff(maximumDate, 'days')
          if (diffDays > 0) {
            //log error
            this.props.logError('Date cannot exceed maximum date');
      
      console.log("diff");
    return false;    
    }
        }
      }
    }
    
    // if (today.getFullYear() < year || 2000 > year) {
    // //   this.props.logError('Enter Valid Year');
    // }
    // // if (day === '') {
    //   return
    // }
    // if (month === '') {
    //   return
    // }
    // if (month > 12 || month < 1) {

    //   this.props.logError('Invalid Month');
    // }
    // if (day < 1) {
    //   this.props.logError('Invalid Day');
    // }
    // if (
    //   today.getFullYear() === year ||
    //   today.getFullYear() <= year
    // ) {
    //   if (
    //     today.getMonth() + 1 < month ||
    //     today.getMonth() + 1 === month
    //   ) {

    //     this.props.logError('Enter Valid Year Or Month');
    //   }
    //   if (today.getMonth() + 1 == month) {
    //     if (today.getDate() < day) {

    //       this.props.logError('Invalid Day');
    //     }
    //   }
    // }
    /**
     * Check for min and max date
     */

      if (month < 8) {
        if (month % 2 == 0) {
          if (month == 2) {
            if (
              (year % 4 == 0 && year % 100 != 0) ||
              year % 400 == 0
            ) {
              if (day > 29) {
  
                this.props.logError('Invalid Day');
              } else if (day > 28) {
  
                this.props.logError('Invalid Day');
              }
            }
          }
          if (day > 29) {
  
            this.props.logError('Enter Valid Day Or Month');
          }
        }
      }
      if (month >= 8) {
        if (month % 2 == 1) {
          if (day == 31) {
            this.props.logError('Enter Valid Day');
          }
        }
      }

  };
  onChangeDay = e => {
    this.props.logError('')
  };

  render() {

    return (
      <Box>
        <DateContainer>
          <Field
            name="date"
            type="text"
            placeholder="DD/MM/YYYY"
            component={InputDate}
            validate={[required, dayDate]}
            onChange={this.onChangeDay}
            onFieldBlur={this.onblur}
          />
        </DateContainer>
        <b><font color="red">{this.props.dateError}</font></b>
      </Box>
    );
  }
}

export default DateComponent;
