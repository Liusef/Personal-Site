import {BodyDiv, H3, VStackPanel} from "../Lib/Comps";
import Socials from "./Socials";

function Footer() {
    return (
        <BodyDiv>
            <VStackPanel>
                <H3 style={{margin: 0}}>
                    You've reached the end.
                </H3>
                <div style={{height: '4em'}}/>
                <Socials/>
                <p style={{color: 'grey'}}>
                    ©️ Joseph Liu {new Date().getFullYear()}. All Rights Reserved.
                </p>
            </VStackPanel>
        </BodyDiv>
    )
}

export default Footer;