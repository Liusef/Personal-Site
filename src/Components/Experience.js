import {BodyDiv, H2, H3, HStackPanel, Icon, IconLink} from "../Lib/Comps";
import {SSItem, SSList} from "../Lib/SideScroll";
import styled from "styled-components";
import eb from '../Assets/exp/eb.jpg'
import lrt from '../Assets/exp/lrt.png'
import thing from '../Assets/exp/thing.jpg'

function Experience() {
    return(
        <BodyDiv id='experience'>
            <H2 style={{margin: '0'}}>
                Experience
            </H2>
            <SSList>
                <SSItem img={eb} title="Empathy Bytes" sub='Student Researcher and Developer'>
                    Empathy Bytes is a Georgia Tech VIP (Vertically Integrated Project). We work with cutting edge
                    technologies like AR and VR to help share experiences and spread empathy.

                    <IconLink class='bi bi-globe' href='https://educast.library.gatech.edu/'>
                        Empathy Bytes Website
                    </IconLink>
                    <IconLink class='bi bi-book' href='https://www.vip.gatech.edu/teams/vwc'>
                        VIP Info Page
                    </IconLink>

                </SSItem>

                <SSItem img={lrt} title="Lynbrook Robotics" sub="VP of Media">
                    Oversaw all media related work on the team. Lead all team efforts in photography, videography,
                    merchandise, and graphic design.

                    <IconLink class='bi bi-globe' href='https://lynbrookrobotics.com/'>
                        Lynbrook Robotics Website
                    </IconLink>

                </SSItem>

                <SSItem img={thing} title="Illustrator" sub="Freelance">
                    Utilizing creativity software such as Adobe Photoshop, CLIP Studio Paint, Procreate,
                    Adobe Substance 3D Painter, and Unity to create art. Gained experience with business operation
                    and working with clients.
                </SSItem>

            </SSList>
        </BodyDiv>
    )
}

export default Experience;