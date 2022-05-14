import {BodyDiv, H2, IconLink} from "../Lib/Comps";
import {SSItem, SSList} from "../Lib/SideScroll";
import gt from "../Assets/edu/gt.png";
import ucb from '../Assets/edu/ucb.png'
import wvc from '../Assets/edu/wvc.jpg'
import lhs from '../Assets/edu/lhs.jpg'

function Education() {
    return(
        <BodyDiv id='education'>
            <H2 style={{margin: '0'}}>
                Education
            </H2>
            <SSList>
                <SSItem img={gt} title="Georgia Tech" sub='Atlanta, GA'>
                    Currently an undergrad studying Computer Science with threads in Intelligence and Sys/Arch.

                    <p style={{marginBottom: 0}}> Computer Science B.S. </p>
                    <p style={{margin: 0}}> Expected Graduation: Dec 2024 </p>
                    <p style={{margin: 0}}> GPA: 4.0  </p>

                    <IconLink class='bi bi-book' href='https://gatech.edu/'>
                        Georgia Tech Website
                    </IconLink>

                </SSItem>

                <SSItem img={ucb} title="UC Berkeley" sub='Berkeley, CA'>
                    Attended Berkeley for the 2020 Summer Session. Took CS 61BL Data Structures and Algorithms.

                    <p style={{marginBottom: 0}}> Letters & Sciences Undeclared </p>
                    <p style={{margin: 0}}> GPA: 4.0  </p>

                    <IconLink class='bi bi-book' href='https://berkeley.edu/'>
                        UC Berkeley Website
                    </IconLink>

                </SSItem>

                <SSItem img={wvc} title="West Valley College" sub='Saratoga, CA'>
                    Attended West Valley College for the Fall 2020 term. Took MATH 04A Intermediate (Multivariable) Calculus.

                    <p style={{marginBottom: 0}}> Computer Science and Engineering </p>
                    <p style={{margin: 0}}> GPA: 4.0  </p>

                    <IconLink class='bi bi-book' href='https://westvalley.edu/'>
                        West Valley College Website
                    </IconLink>

                </SSItem>

                <SSItem img={lhs} title="Lynbrook High School" sub='San Jose, CA'>
                    Attended Lynbrook High School for general studies. VP in Robotics.

                    <p style={{marginBottom: 0}}> Graduated: Jun 2021 </p>
                    <p style={{margin: 0}}> Unweighted GPA: 3.969   </p>

                    <IconLink class='bi bi-book' href='https://lhs.fuhsd.org/'>
                        Lynbrook High School Website
                    </IconLink>

                </SSItem>

            </SSList>
        </BodyDiv>
    )
}

export default Education;