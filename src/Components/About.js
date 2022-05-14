import {LBody, WLB,  BodyDiv, H2} from "../Lib/Comps";
import styled from "styled-components";



function About() {
    return (
        <div style={{backgroundColor: '#222222', padding: '3em 0'}} id='about'>
            <BodyDiv>
                <H2 style={{margin: 0}}>
                   About Me
                </H2>
                <WLB>
                    Hello! I'm Joseph Liu, a second year undergraduate student at Georgia Tech!
                    I'm currently studying computer science with concentrations in Artificial Intelligence and Systems/Architecture.
                </WLB>
                <WLB>
                    I've worked with the Georgia Tech Empathy Bytes VIP (Vertically Integrated Project) where I utilized
                    Unity and AR/VR technologies to develop interactive experiences.
                </WLB>
                <WLB>
                    Beyond computer science and software development, I have experience with media technologies and
                    creative applications. Previously, I served as the VP of Media at Lynbrook Robotics,
                    where oversaw many of the media related tasks on the team. I'm also proficient in
                    many professional creative programs, such as Adobe Premiere Pro, After Effects,
                    Photoshop, Lightroom Classic, and CLIP Studio Paint.
                </WLB>
            </BodyDiv>
        </div>
    )
}

export default About;