import React from 'react';

import { Container } from './styles';
import Recommend from "../WeekBook";
const frame = `<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>`

const Second = () => {
    const iframe = () => {
        return {
          __html: frame
        }
      }
    
    return(
    <Container>
        <Recommend />

        <div className="iframe" dangerouslySetInnerHTML={ iframe() } />

    </Container>
)}
export default Second;