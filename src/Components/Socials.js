import {HStackPanel, Icon} from "../Lib/Comps";

function SocialSpacer() {
    return (
        <div style={{width: '2em'}}/>
    )
}

function Socials(absolutepos) {
    return (
        <div style={{
            position: 'relative',
        }}>
            <HStackPanel style={absolutepos ? {position: 'absolute', bottom: '5vh', zIndex: '0', alignItems: 'center', flexWrap: 'wrap'}
                : {alignItems: 'center', flexWrap: 'wrap'}}>

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
                <a href='https://1drv.ms/w/s!AuhKl9cjxYZ8vh9FH8lZ5gwZ-IUy?e=jg2hT7'
                   style={{
                       color: 'white',
                       textDecoration: 'none',
                       fontSize: '1em',
                       border: 'solid',
                       padding: '0.15em 0.25em',
                       borderRadius: '4px',
                }}>
                    Résumé
                </a>
                <SocialSpacer/>

            </HStackPanel>
        </div>
    )
}

export default Socials;