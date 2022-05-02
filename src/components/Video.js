/* eslint-disable jsx-a11y/media-has-caption */

import React from 'react'
import movementVideo from '../videos/art-translated-for-movments.mp4'
import symbolVideo from '../videos/art-translated-for-symbols.mp4'
import styled from 'styled-components'
import { Link } from 'gatsby'


export const MovementVideo = ({ video }) => {
  return (
    <RegVideoWrapper id="video">
      <CloseVideo to="/art-translated-for-movements" />
      <video width="325" controls autoPlay>
        <source src={movementVideo} type="video/mp4" />
      </video>
    </RegVideoWrapper>
  )
}

export const SymbolVideo = ({ video }) => {
  return (
    <RegVideoWrapper id="video">
      <CloseVideo to="/art-translated-for-symbols" />
      <video width="325" controls autoPlay>
        <source src={symbolVideo} type="video/mp4" />
      </video>
    </RegVideoWrapper>
  )
}

const RegVideoWrapper = styled.div`
  max-width: 100vw;
  width: 325px;
  height: 75vh;
  max-height: 100%;
  position: relative;
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const CloseVideo = ({ to:goTo, className }) => {
  return (
    <CloseVideoLinkWrapper
      to={goTo}
      className="className"
    >X</CloseVideoLinkWrapper>
  )
}

const CloseVideoLinkWrapper = styled(Link)`
  display: inline-block;
  background: rgb(250 245 245 / 50%);
  font-size: 3rem;
  font-weight: 600;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  text-decoration: none;
  padding: 2rem 0.3rem 0 2rem;
  z-index: 2;
`
