import {BodyDiv, H2, IconLink} from "../Lib/Comps";
import {SSItem, SSList} from "../Lib/SideScroll";
import tgs from "../Assets/proj/tgstickers.png";
import maze from '../Assets/proj/maze.png';
import gitlet from '../Assets/proj/gitlet.png';
import stats from '../Assets/proj/stats.png';
import gba from '../Assets/proj/gba.png';
import meetinglauncher from '../Assets/proj/meetinglauncher.png'
import goat from '../Assets/proj/goat.png'

function Project() {
    return (
        <BodyDiv id='projects'>
            <H2 style={{margin: '0'}}>
                Projects
            </H2>
            <SSList>
                <SSItem img={tgs} title="Telegram Sticker Pack Manager" sub='Aug 2021 - Present'>
                    A program to automate Sticker bot  and make managing sticker packs less tedious.
                    Written in C#/XAML and uses async programming, smart caching and parallelization.

                    <IconLink class='bi bi-github' href='https://github.com/Liusef/TelegramStickerManager'>
                        GitHub Repo
                    </IconLink>
                </SSItem>

                <SSItem img={gba} title="Gameboy Advance Platformer" sub='Apr 2022'>
                    A simple platforming game for the Gameboy Advance. Written in C and uses MMIO to draw to the display and read user input.
                    <IconLink class='bi bi-github' href='https://github.com/Liusef/Gameboy-JumpingCat'>
                        GitHub Repo
                    </IconLink>
                </SSItem>

                <SSItem img={goat} title="Dance Goat Dance" sub='Mar 2022'>
                    An interactive, educational, and fun website all about Goats! Submission for Hexlabs Horizons 2022.
                    Won the Creativity Award.
                    <IconLink class='bi bi-globe' href='http://dance.goat.dance/'>
                        Goat Website
                    </IconLink>
                    <IconLink class='bi bi-github' href='https://github.com/ZenithO-o/GOAT-WEBSITE'>
                        GitHub Repo
                    </IconLink>
                    <IconLink class='bi bi-book' href='https://devpost.com/software/goat-sauce-educational-website'>
                        Devpost Submission
                    </IconLink>
                </SSItem>

                <SSItem img={maze} title="Maze Image Solver" sub='May 2021'>
                    A program that reads in a maze image, converts it to a graph data structure, and finds the shortest
                    path from start to end using the A* Search Algorithm. Uses Java and JavaFX.

                    <IconLink class='bi bi-github' href='https://github.com/Liusef/MazeImgSolver-FinalProj'>
                        GitHub Repo
                    </IconLink>
                </SSItem>

                <SSItem img={gitlet} title="Gitlet: Version Control System" sub='Jul 2020'>
                    A basic command line implementation of git, created from scratch. Supports commits, branching,
                    resetting, merging, etc. Written in Java.
                </SSItem>

                <SSItem img={meetinglauncher} title="Web Meeting Launcher" sub='Aug 2020'>
                    A Universal Windows Platform App to quickly and easily launch zoom meetings without having to be
                    redirected through your browser.

                    <IconLink class='bi bi-github' href='https://github.com/Liusef/ZoomMeetingLauncher-UWP'>
                        GitHub Repo
                    </IconLink>
                </SSItem>

                <SSItem img={stats} title="Comparing Tongue Movement Between Languages" sub='May 2020'>
                    Converts written text to the International Phonetic Alphabet and Analyzes tongue movement between
                    English and French. Written in Python.

                    <IconLink class='bi bi-github' href='https://github.com/Liusef/APStats-Final'>
                        GitHub Repo
                    </IconLink>
                </SSItem>

            </SSList>
        </BodyDiv>
    )
}

export default Project;