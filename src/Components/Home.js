import { H1, BodyDiv, TopDiv, HStackPanel, VStackPanel, Icon } from "../Lib/Comps";
import Socials from "./Socials";

const title =
    "I'm Joseph"

const description =
    "I'm a second year undergraduate student studying Computer Science at the Georgia Institute of Technology."


function TopDivSpacer() {
    return (
        <div style={{width: '8vw'}}/>
    );
}

function Home() {
    return (
        <VStackPanel id='home'>
            <div style={{backgroundColor: 'black', color: 'white'}}>
                <TopDiv>
                    <HStackPanel style={{height: '80vh', alignItems: 'center', marginBottom: '3em'}}>
                        <TopDivSpacer/>
                        <VStackPanel style={{gap: '1rem'}}>
                            <H1 style={{margin: '0'}}>
                                {title}
                            </H1>
                            <p style={{margin: '0', width: '80vw'}}>
                                {description}
                            </p>
                        </VStackPanel>
                    </HStackPanel>
                    <Socials/>
                </TopDiv>
            </div>
        </VStackPanel>
    );
}

export default Home;
