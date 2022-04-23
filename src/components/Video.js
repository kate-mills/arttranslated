import React from 'react'
import movementVideo from '../videos/art-translated-for-movments.mp4'
import styled from 'styled-components'
import { Link } from 'gatsby'


const CloseVideo = ({goTo, className}) => {
  return <CloseVideoLinkWrapper to={goTo} className="className">X</CloseVideoLinkWrapper>
}
const CloseVideoLinkWrapper = styled(Link)`
    background: rgb(250 245 245 / 82%);
    font-size: 3rem;
    font-weight: 600;
    position: absolute;
    text-decoration: none;
    line-height: 1;
    padding: 1rem;
    z-index: 100;
`

export const MovementVideo = () => {
  return (
    <RegVideoWrapper>
    <CloseVideo goTo="/art-translated-for-movements" />
      <video controls autoPlay muted loop>
        <source src={movementVideo} type="video/mp4" />
      </video>
    </RegVideoWrapper>
  )
}


const RegVideoWrapper = styled.div`
  position: relative;
  min-width: 100%;
  height: 562px;
  max-width: fit-content;
  width: 100%;
  max-height: 100%;

  .close-video {
    background: rgb(250 245 245 / 82%);
    font-size: 3rem;
    font-weight: 600;
    position: absolute;
    text-align: center;
    text-decoration: none;
    z-index: 100;
    line-height: 1;
    top: 20px;
    left: 11px;
    width: 50px;
    height: 50px;
  }
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: fit-content;
    height: 100%;
    object-fit: contain;
  }
  @media (min-width: 600px) {
    video {
      left: 0;
    }
  }
`
