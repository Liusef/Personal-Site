import {BodyDiv, H2, H3, HStackPanel, Icon, IconText, ImgText, RCDiv} from "../Lib/Comps";
import java from '../Assets/lang/java.png'
import py from '../Assets/lang/py.png'
import cs from '../Assets/lang/cs.png'
import jb from '../Assets/lang/jetbrains.png'
import vsc from '../Assets/lang/vsc.png'
import js from '../Assets/lang/js.png'
import react from '../Assets/lang/react.png'
import c from '../Assets/lang/c.png'

import cc from '../Assets/creative/cc.png'
import ps from '../Assets/creative/ps.png'
import pr from '../Assets/creative/pr.png'
import lrc from '../Assets/creative/lrc.png'
import ae from '../Assets/creative/ae.png'
import csp from '../Assets/creative/csp.png'
import prc from '../Assets/creative/procreate.png'

const size = '1.25em'

function SkillItem(props) {
    return (
        <RCDiv>
            <ImgText src={props.src} size={size} style={{color: 'white'}}>
                {props.children}
            </ImgText>
        </RCDiv>
    )
}

function SkillIcon(props) {
    return (
        <RCDiv>
            <IconText class={props.class} size={size} style={{color: 'white'}}>
                {props.children}
            </IconText>
        </RCDiv>
    )
}

function Skills() {
    return (
        <div style={{backgroundColor: '#222222'}} id='skills'>
            <BodyDiv>
                <H2 style={{margin: 0}}>
                    Skills
                </H2>

                <div>
                    <H3>
                        Programming
                    </H3>

                    <HStackPanel style={{flexWrap: 'wrap', gap: '1em'}}>
                        <SkillItem src={java}>
                            Java
                        </SkillItem>
                        <SkillItem src={py}>
                            Python
                        </SkillItem>
                        <SkillItem src={cs}>
                            C#
                        </SkillItem>
                        <SkillItem src={c}>
                            C
                        </SkillItem>
                        <SkillItem src={js}>
                            Javascript
                        </SkillItem>
                        <SkillItem src={react}>
                            React
                        </SkillItem>
                        <SkillIcon class='bi bi-git'>
                            Git
                        </SkillIcon>
                        <SkillItem src={jb}>
                            Jetbrains IDEs
                        </SkillItem>
                        <SkillItem src={vsc}>
                            VSCode
                        </SkillItem>
                    </HStackPanel>

                </div>

                <div>
                    <H3>
                        Creative
                    </H3>

                    <HStackPanel style={{flexWrap: 'wrap', gap: '1em'}}>
                        <SkillItem src={cc}>
                            Adobe Creative Cloud
                        </SkillItem>
                        <SkillItem src={ps}>
                            Adobe Photoshop
                        </SkillItem>
                        <SkillItem src={lrc}>
                            Adobe Lightroom Classic
                        </SkillItem>
                        <SkillItem src={pr}>
                            Adobe Premiere Pro
                        </SkillItem>
                        <SkillItem src={ae}>
                            Adobe After Effects
                        </SkillItem>
                        <SkillItem src={csp}>
                            CLIPStudioPaint
                        </SkillItem>
                        <SkillItem src={prc}>
                            Procreate
                        </SkillItem>
                    </HStackPanel>

                </div>

                <div>
                    <H3>
                        Languages
                    </H3>

                    <HStackPanel style={{flexWrap: 'wrap', gap: '1em'}}>
                        <SkillItem>
                            English - Fluent
                        </SkillItem>
                        <SkillItem>
                            Chinese - Conversational
                        </SkillItem>
                    </HStackPanel>

                </div>

                <div>
                    <H3>
                        Relevant Coursework
                    </H3>

                    <HStackPanel style={{flexWrap: 'wrap', gap: '1em'}}>
                        <SkillItem>
                            Object Oriented Design
                        </SkillItem>
                        <SkillItem>
                            Object Oriented Programming
                        </SkillItem>
                        <SkillItem>
                            Data Structures and Algorithms
                        </SkillItem>
                        <SkillItem>
                            Differential Calculus
                        </SkillItem>
                        <SkillItem>
                            Integral Calculus
                        </SkillItem>
                        <SkillItem>
                            Multivariable Calculus
                        </SkillItem>
                        <SkillItem>
                            Linear Algebra
                        </SkillItem>
                        <SkillItem>
                            Computer Organization
                        </SkillItem>
                        <SkillItem>
                            Discrete Mathematics
                        </SkillItem>
                    </HStackPanel>

                </div>


            </BodyDiv>
        </div>
    )
}

export default Skills;