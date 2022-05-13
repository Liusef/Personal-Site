import {HStackPanel, Icon} from "../Lib/Comps";

function SocialSpacer() {
    return (
        <div style={{width: '2em'}}/>
    )
}

function Socials() {
    return (
        <div style={{
            position: 'relative',
        }}>
            <HStackPanel style={{position: 'absolute', bottom: '0', zIndex: '0'}}>

                <Icon href='mailto:jliu955+web1@gatech.edu'
                      class='bi bi-envelope-fill'
                      size='2em'
                      style={{color: 'white'}}/>
                <SocialSpacer/>
                <Icon href='https://linkedin.com/in/josephliu24'
                      class='bi bi-linkedin'
                      size='2em'
                      style={{color: 'white'}}/>
                <SocialSpacer/>
                <Icon href='https://github.com/Liusef'
                      class='bi bi-github'
                      size='2em'
                      style={{color: 'white'}}/>
                <SocialSpacer/>

            </HStackPanel>
        </div>
    )
}

export default Socials;