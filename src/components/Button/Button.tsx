import React from 'react'
import styled from 'styled-components/macro'

interface Props {
  children: React.ReactNode
}

const ButtonWrap = styled.button`
  border-radius: 4px;
  border: 1px solid silver;
  padding: 6px 14px;
  background-color: white;

  &:hover {
    background-color: gold;
  }
`

export function Button(props: Props) {
  const { children } = props

  return (
    <ButtonWrap>
      { children }
    </ButtonWrap>
  )
}
