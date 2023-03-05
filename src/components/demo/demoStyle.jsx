import styled from 'styled-components'

const Btn = styled.button`border:1px solid red; color:${props => props.color? props.color : 'red'};`

export { Btn}