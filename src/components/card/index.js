import React, { Component } from 'react';
import {
  CardContainer,
  StyledCard
}
from './style';

class Cards extends Component {

  render() {
    return(
      <CardContainer>
        <StyledCard>ABC</StyledCard>
        <StyledCard>123</StyledCard>
        <StyledCard>ABC</StyledCard>
        <StyledCard>123</StyledCard>
        <StyledCard>ABC</StyledCard>
        <StyledCard>123</StyledCard>
        <StyledCard>ABC</StyledCard>
        <StyledCard>123</StyledCard>
      </CardContainer>
    )
  }

}

export default Cards;