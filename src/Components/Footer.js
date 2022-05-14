import {BodyDiv, H3, VStackPanel} from "../Lib/Comps";
import Socials from "./Socials";
import {HashLink} from "react-router-hash-link";

function Footer() {
    return (
        <BodyDiv>
            <VStackPanel>
                <H3 style={{marginTop: '0.5em', marginBottom: '0.25em' }}>
                    You've reached the end.
                </H3>
                <HashLink smooth to='/#home' style={{
                    marginBottom: '0.5em',
                    textDecoration: 'none',
                    color: 'grey'
                }}>
                    Go back to top
                </HashLink>
                {Socials(false)}
                <p style={{color: 'grey'}}>
                    © Joseph Liu {new Date().getFullYear()}. All Rights Reserved.
                </p>
            </VStackPanel>
        </BodyDiv>
    )
}

export default Footer;