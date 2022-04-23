import React from 'react'
import video from '../videos/art-translated-for-movments.mp4'
import styled from 'styled-components'

export const RegVideo = () => {
  return (
    <RegVideoWrapper id="video">
      <video controls autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
    </RegVideoWrapper>
  )
}

export const Video = ({ src, title, ...props }) => {
  return (
    <IframeVideoWrapper>
      <div className="video">
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        />
      </div>
    </IframeVideoWrapper>
  )
}

const RegVideoWrapper = styled.div`
  position: relative;
  min-width: 100%;
  height: 562px;
  max-height: 882px;
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
const IframeVideoWrapper = styled.div`
  width: 90vw;
  max-width: 700px;

  .video {
    overflow: hidden;
    /* // Calculated from the aspect ration of the content (in case of 16:9 it is 9/16= 0.5625) */
    padding-top: 56.25%;
    position: relative;
    border-radius: var(--radius);
  }

  .video iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`

Video.defaultProps = {
  src: 'https://www.youtube.com/embed/-8ORfgUa8ow',
  title: 'the best html css tutorial ever !',
}
