import React from 'react'
import {Route , Switch,Redirect} from "react-router-dom"
import { Desktop } from './Desktop'
import { WelcomePage } from './WelcomePage'
import { YourComputer } from './YourComputer'
//  import { Start } from './Start'
import { AboutPage } from './AboutPage'
import { ProjectFile } from './ProjectFile'
import { AboutFile } from './AboutFile'
import { Resume } from './Resume'
import { Technology } from './Technology'
import { Project1 } from './Project1'
import { Project2 } from './Project2'
import { Project3 } from './Project3'
import { Project4 } from './Project4'
import { Project5 } from './Project5'
import { Project6 } from './Project6'
import { Project7 } from './Project7'
import { Project8 } from './Project8'
import { Project9 } from './Project9'
import { Project10 } from './Project10'
import { DesignFile } from './DesignFile'
import { ServicesFile } from './ServicesFile'
import { HimeFile } from './HimeFile'
import { Design1 } from './Design1'
import { Design2} from './Design2'
import { Design3 } from './Design3'
import { Design4} from './Design4'
import { Design5} from './Design5'
import { Service1} from './Service1'
import { Service2} from './Service2'
import { Service3} from './Service3'
import { Email} from './Email'
import { Call} from './Call'
import { Follow} from './Follow'
import { BlogFile} from './BlogFile'
import { AnimatePresence} from "framer-motion";



export const Header = () => {
    return (
        <>
        <AnimatePresence>
           <Switch>
               <Route exact="/" path="/" component={WelcomePage} />
               <Route exact="/Desktop" path="/Desktop" component={Desktop} />
               <Route exact="/YourComputer" path="/YourComputer" component={YourComputer} />
               {/* <Route exact="/Start" path="/Start" component={Start} /> */}
               <Route exact="/AboutPage" path="/AboutPage" component={AboutPage} />
               <Route exact="/ProjectFile" path="/ProjectFile" component={ProjectFile} />
               <Route exact="/AboutFile" path="/AboutFile" component={AboutFile} />
               <Route exact="/Resume" path="/Resume" component={Resume} />
               <Route exact="/Technology" path="/Technology" component={Technology} />
               <Route exact="/Project1" path="/Project1" component={Project1} />
               <Route exact="/Project2" path="/Project2" component={Project2} />
               <Route exact="/Project3" path="/Project3" component={Project3} />
               <Route exact="/Project4" path="/Project4" component={Project4} />
               <Route exact="/Project5" path="/Project5" component={Project5} />
               <Route exact="/Project6" path="/Project6" component={Project6} />
               <Route exact="/Project7" path="/Project7" component={Project7} />
               <Route exact="/Project8" path="/Project8" component={Project8} />
               <Route exact="/Project9" path="/Project9" component={Project9} />
               <Route exact="/Project10" path="/Project10" component={Project10} />
               <Route exact="/DesignFile" path="/DesignFile" component={DesignFile} />
               <Route exact="/ServicesFile" path="/ServicesFile" component={ServicesFile} />
               <Route exact="/HireFile" path="/HireFile" component={HimeFile} />
               <Route exact="/HireFile" path="/HireFile" component={HimeFile} />
               <Route exact="/Design1" path="/Design1" component={Design1} />
               <Route exact="/Design2" path="/Design2" component={Design2} />
               <Route exact="/Design3" path="/Design3" component={Design3} />
               <Route exact="/Design4" path="/Design4" component={Design4} />
               <Route exact="/Design5" path="/Design5" component={Design5} />
               <Route exact="/webDevelopment" path="/webDevelopment" component={Service1} />
                <Route exact="/uiDesign" path="/UiDesign" component={Service2} />
               <Route exact="/responsive" path="/responsive" component={Service3} /> 
               <Route exact="/Email" path="/Email" component={Email} /> 
               <Route exact="/Call" path="/Call" component={Call} /> 
               <Route exact="/Follow" path="/Follow" component={Follow} /> 
               <Route exact="/BlogFile" path="/BlogFile" component={BlogFile} /> 
               <Redirect to="/"/>
           </Switch> 
           </AnimatePresence>
        </>
    )
}
