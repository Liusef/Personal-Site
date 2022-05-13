import React from "react";
import styled from "styled-components";
import {H3, WLB} from "./Comps";
import SwiperCore, {Navigation, Pagination, Scrollbar} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/bundle';

const SSIWidth = '335px'
const SSIHeight = '500px'
const SSIBorderRad = '8px'
const imgHeight = '200px';
const textMargin = '24px';

const SSIImg = styled.img`
  width: ${SSIWidth};
  max-width: 80vw;
  height: ${imgHeight};
  object-fit: cover;
  background-color: #1a1a1a;
  border-radius: ${SSIBorderRad} ${SSIBorderRad} 0 0;
`;

const SSIDiv = styled.div`
  background-color: #333333;
  width: ${SSIWidth};
  max-width: 80vw;
  height: ${SSIHeight};
  display: flex;
  flex-direction: column;
  border-radius: ${SSIBorderRad};
  margin-top: 50px;
  margin-bottom: 0;
`;

const SSIBody = styled.div`
  color: white;
  margin: ${textMargin};
`;

class SSItem extends React.Component {

    render() {
        return(
            <SSIDiv>
                <SSIImg src={this.props.img}/>
                <H3 style={{margin: 0, marginTop: textMargin, marginLeft: textMargin}}>
                    {this.props.title}
                </H3>
                <SSIBody>
                    <p style={{marginTop: '-1.25rem'}}>
                        {this.props.sub}
                    </p>
                    {this.props.children}
                </SSIBody>
            </SSIDiv>
        )
    }

}

const SSLHContainer = styled.div`
  .swiper-scrollbar {
    background-color: #ffffff55;
  }
  .swiper-scrollbar-drag {
    background-color: #ffffffaa;
  }
`;

class SSList extends React.Component {

    render() {
        const children = React.Children.map(this.props.children, (c) => (
            <SwiperSlide style={{width: SSIWidth, maxWidth: '100vw'}}>
                {c}
            </SwiperSlide>
        ));
        const g1 = children.length > 1;
        return(
            <SSLHContainer>
                <Swiper modules={children.length > 1 ? [Navigation, Pagination, Scrollbar] : []}
                        spaceBetween={children.length > 1 ? 50 : 0}
                        slidesPerView='auto'
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        navigation={g1}
                        // scrollbar={g1 ? {
                        //     draggable: true
                        // } : false}
                >
                    {children}
                </Swiper>
            </SSLHContainer>
        )
    }

}

export {SSItem, SSList}