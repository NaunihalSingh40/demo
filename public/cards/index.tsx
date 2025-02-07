import React from 'react'
import { Title } from '@mui/icons-material'
import { CardContent } from '@mui/material'
import data from '@/components/cards/data'
import { Wrapper } from '@/styles/components/cards'

const SimpleCard: React.FC = () => (
  <Wrapper>
    {data.map((card) => (
      <CardContent key={card.id}>
        <img src="card.image" alt="card.title" />
        <Title>{card.title}</Title>
        <Title>{card.subtitle}</Title>
      </CardContent>
    ))}
  </Wrapper>
)

export default SimpleCard
