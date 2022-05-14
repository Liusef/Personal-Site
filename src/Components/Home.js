import { H1, BodyDiv, TopDiv, HStackPanel, VStackPanel, Icon } from "../Lib/Comps";
import styled from "styled-components";
import Socials from "./Socials";
import dotmatrix from "../Assets/dotmatrix.png"
import bg1 from "../Assets/bg1.jpg"

const title =
    "I'm Joseph"

const description =
    "I'm a second year undergraduate student studying Computer Science at the Georgia Institute of Technology."


function TopDivSpacer() {
    return (
        <div style={{width: '8vw'}}/>
    );
}

const HomeVStackPanel = styled(VStackPanel)`
  width: 100vw;
  background-image: url(${bg1});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;

  @media only screen and (max-device-width: 700px) {
    background-attachment: scroll;
  }
`

function Home() {
    return (
        <HomeVStackPanel id='home'>
            <div style={{color: 'white'}}>
                <TopDiv>
                    <HStackPanel style={{height: '80vh', alignItems: 'center', marginBottom: '3em'}}>
                        <TopDivSpacer />
                        <VStackPanel style={{gap: '1rem'}}>
                            <H1 style={{margin: '0'}}>
                                {title}
                            </H1>
                            <p style={{margin: '0', width: '80vw'}}>
                                {description}
                            </p>
                        </VStackPanel>
                    </HStackPanel>
                    {Socials(true)}
                </TopDiv>
            </div>
        </HomeVStackPanel>
    );
}

export default Home;
