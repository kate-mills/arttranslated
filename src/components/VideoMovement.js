/* eslint-disable jsx-a11y/media-has-caption */

import React from 'react'
import video from '../videos/art-translated-for-movments.mp4'
import styled from 'styled-components'


const MovementVideo = () => {
  return(
    <RegVideoWrapper>
      <video controls muted autoPlay>
        <source src={video} type="video/mp4" />
      </video>
    </RegVideoWrapper>
  )
}
const RegVideoWrapper = styled.div`
  margin: 2rem auto 0;
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

export default MovementVideo
