import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css'

const LBody = styled.p`
  font-size: 1.2em;
`;

const WLB = styled(LBody)`
  color: white;
`;

const SA = styled.a`
  color: #4477bb;
`;

const H1 = styled.p`
  font-weight: bolder;
  font-size: 5rem;
  line-height: 1em;
  color: white;
`;

const H2 = styled.p`
  font-weight: bold;
  font-size: 3rem;
  line-height: 1em;
  color: #eeeeee;
`;

const H3 = styled.p`
  font-weight: bold;
  font-size: 2rem;
  line-height: 1em;
  color: #eeeeee;
`;

const BodyDiv = styled.div`
  padding: 8vh 10vw;
`

const TopDiv = styled(BodyDiv)`
  padding-top: 10vh;
  padding-bottom: 10vh;
`;

const StackPanel = styled.div`
  display: flex;
`;

const VStackPanel = styled(StackPanel)`
  flex-direction: column;
`;

const HStackPanel = styled(StackPanel)`
  flex-direction: row;
`;

function Icon(props) {
    return (
        <a href={props.href} style={props.style}>
            <i className={props.class} style={{fontSize: props.size}}/>
        </a>
    );
}

function ColoredIcon(props, color) {
    return (
        <a href={props.href} style={props.style}>
            <i className={props.class} style={{fontSize: props.size, color: color}}/>
        </a>
    );
}

function IconLink(props) {
    return (
        <HStackPanel style={{gap: '0.5rem', marginTop: '0.5rem'}}>
            {ColoredIcon(props, '#4477bb')}
            <a href={props.href} style={{textDecoration: 'none', color: '#4477bb'}}>
                {props.children}
            </a>
        </HStackPanel>
    )
}

function RCDiv(props) {
    return (
        <div style={{backgroundColor: '#333333', borderRadius: '8px', float: 'left', padding: '0.5em'}}>
            {props.children}
        </div>
    )
}

function ImgText(props) {
    return (
        <HStackPanel style={{gap: '0.5em', alignItems: 'center'}}>
            <img src={props.src} style={{height: props.size}}/>
            <div style={{color: 'white', margin: 0, marginRight: '0.25em', fontSize: props.size}}>
                <div style={props.style}>
                    {props.children}
                </div>
            </div>
        </HStackPanel>
    )
}

function IconText(props) {
    return (
        <HStackPanel style={{gap: '0.5em', alignItems: 'center'}}>
            <i className={props.class} style={{height: props.size, color: 'white'}}/>
            <div style={{color: 'white', margin: 0, marginRight: '0.25em', fontSize: props.size}}>
                <div style={props.style}>
                    {props.children}
                </div>
            </div>
        </HStackPanel>
    )
}

export {
    LBody,
    WLB,
    SA,
    H1,
    H2,
    H3,
    BodyDiv,
    TopDiv,
    HStackPanel,
    VStackPanel,
    Icon,
    ColoredIcon,
    IconLink,
    RCDiv,
    ImgText,
    IconText,
};