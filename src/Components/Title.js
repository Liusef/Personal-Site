import React, {useState} from "react";
import logo from '../Assets/logo.svg'
import icon from '../Assets/icon.png'
import styled from "styled-components";
import {HStackPanel, VStackPanel} from "../Lib/Comps";
import {Link, NavLink} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import Hamburger from 'hamburger-react';

const imgheight = 48;
const imgmargin = 12;

const TitleBar = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  position: fixed;
  background-color: #000000aa;
  backdrop-filter: blur(4px);
  z-index: 999;
`;

const LogoImg = styled.img`
  height: ${imgheight}px;
  width: auto;
  margin: ${imgmargin}px ${2 * imgmargin}px;
`;

const HashNavItem = styled(HashLink)`
  color: white;
  text-decoration: none;
  &.active {
    font-size: 1.02em;
    font-weight: bold;
  }
`;

function Logo() {
    return (
        <HashLink smooth to='/#home'>
            <LogoImg src={icon}/>
        </HashLink>
    );
}

function NavBar() {
    return (
      <HStackPanel style={{gap: '2em'}}>
        <HashNavItem smooth to='/#home'>
            HOME
        </HashNavItem>
        <HashNavItem smooth to='/#about'>
            ABOUT
        </HashNavItem>
        <HashNavItem smooth to='/#experience'>
            EXPERIENCE
        </HashNavItem>
          <HashNavItem smooth to='/#projects'>
              PROJECTS
          </HashNavItem>
          <HashNavItem smooth to='/#education'>
              EDUCATION
          </HashNavItem>
          <HashNavItem smooth to='/#skills'>
              SKILLS
          </HashNavItem>
      </HStackPanel>
    );
}

const LeftDiv = styled.div`
  width: 100%;
  height: ${imgheight + 2 * imgmargin}px;
`;

const RightDiv = styled.div`
  width: auto;
  float: right;
  margin-right: 3em;
`;


function Title() {

    const breakpoint = 700;

    const [width, setWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    });

    const updateWidth = () => {
        setWidth(window.innerWidth);
    };

    const [isOpen, setOpen] = useState(false);

    const stateFalse = () => setOpen(false)

    if (width < breakpoint) {
        return (
            <VStackPanel>
                <TitleBar>
                    <LeftDiv>
                        <Logo/>
                    </LeftDiv>
                    <RightDiv>
                        <HStackPanel style={{gap: '2em', alignItems: 'center'}}>
                            <HashNavItem smooth to='/#home' style={{fontSize: '1.25em'}} onClick={stateFalse}>
                                HOME
                            </HashNavItem>
                            <div style={{color: 'white'}}>
                                <Hamburger rounded size={25} duration={0.35} toggled={isOpen} toggle={setOpen}/>
                            </div>
                        </HStackPanel>
                    </RightDiv>
                </TitleBar>
                {isOpen && (
                    <div style={{
                        fontSize: '1.5em',
                        backgroundColor: '#000000cc',
                        backdropFilter: 'blur(4px)',
                        paddingTop: '1em',
                        paddingBottom: '1em',
                        paddingLeft: '1.5em',
                        paddingRight: '2em',
                        position: 'fixed',
                        top: imgmargin * 2 + imgheight,
                        right: '2em',
                        float:"right",
                        zIndex: 998,
                    }}>
                        <VStackPanel style={{gap: '1em'}}>
                            <HashNavItem smooth to='/#about' onClick={stateFalse}>
                                ABOUT
                            </HashNavItem>
                            <HashNavItem smooth to='/#experience' onClick={stateFalse}>
                                EXPERIENCE
                            </HashNavItem>
                            <HashNavItem smooth to='/#projects' onClick={stateFalse}>
                                PROJECTS
                            </HashNavItem>
                            <HashNavItem smooth to='/#education' onClick={stateFalse}>
                                EDUCATION
                            </HashNavItem>
                            <HashNavItem smooth to='/#skills' onClick={stateFalse}>
                                SKILLS
                            </HashNavItem>
                        </VStackPanel>
                    </div>
                )}
            </VStackPanel>
        )
    }

    return(
        <TitleBar>
            <LeftDiv>
                <Logo/>
            </LeftDiv>
            <RightDiv>
                <NavBar/>
            </RightDiv>
        </TitleBar>
    )
}

export default Title;