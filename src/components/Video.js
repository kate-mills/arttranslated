import React from 'react'
import movementVideo from '../videos/art-translated-for-movments.mp4'
import symbolVideo from '../videos/art-translated-for-symbols.mp4'
import styled from 'styled-components'
import { Link } from 'gatsby'

export const CloseVideo = ({ goTo, className }) => {
  return (
    <CloseVideoLinkWrapper to={goTo} className="className">
      X
    </CloseVideoLinkWrapper>
  )
}
const CloseVideoLinkWrapper = styled(Link)`
  background: rgb(250 245 245 / 50%);
  font-size: 3rem;
  font-weight: 600;
  position: absolute;
  top: 0;
  left: 0;
  text-decoration: none;
  line-height: 1;
  padding: 2rem 0.3rem 0 2rem;
  z-index: 2;
`

export const MovementVideo = ({ video }) => {
  return (
    <RegVideoWrapper height="673" width="325" id="video">
      <video width="325" height="673" controls autoPlay loop>
        <source src={movementVideo} type="video/mp4" />
      </video>
    </RegVideoWrapper>
  )
}


export const SymbolVideo = ({ video }) => {
  return (
    <RegVideoWrapper height="673" width="325" id="video">
      <video width="325" height="673" controls autoPlay loop>
        <source src={symbolVideo} type="video/mp4" />
      </video>
    </RegVideoWrapper>
  )
}



const RegVideoWrapper = styled.div`
  width: 70vw;
  max-width: 325px;
  height: 75vh;
  position: relative;
  margin-bottom: 2rem;
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
