import {LBody, WLB,  BodyDiv, H2} from "../Lib/Comps";
import styled from "styled-components";



function About() {
    return (
        <div style={{backgroundColor: '#222222'}} id='about'>
            <BodyDiv>
                <H2 style={{margin: 0}}>
                   About Me
                </H2>
                <WLB>
                    Hello! I'm Joseph Liu, and I'm currently a second year undergraduate student at Georgia Tech!
                    I'm currently studying computer science with concentrations in Artificial Intelligence and Systems/Architecture.
                </WLB>
                <WLB>
                    I've worked with the Georgia Tech Empathy Bytes VIP (Vertically Integrated Project) where I used
                    Unity and AR/VR technologies to develop interactive experiences for the project.
                </WLB>
                <WLB>
                    Beyond computer science and software development, I have experience with media technologies and
                    creative applications. Previously I was the VP of Media at Lynbrook Robotics,
                    where I did much of the photography, video, and some of the graphic design. I'm also proficient in
                    many professional creative programs, such as Adobe Premiere Pro, Adobe After Effects,
                    Adobe Photoshop, Adobe Lightroom Classic, and CLIP Studio Paint.
                </WLB>
            </BodyDiv>
        </div>
    )
}

export default About;