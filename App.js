import logo from './logo.svg';
import './App.css';
import StudentRegister from './Components/StudentRegister';
import StudentLogin from './Components/StudentLogin'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom'; 
import ListAllStudents from './Components/ListAllStudents';
import ViewStudent from './Components/ViewStudent';
import {NavigationBar} from './Components/NavigationBar'
import HomeComponent from './Components/HomeComponent'
import AboutComponent from './Components/AboutComponent'
import UpdateStudent from './Components/UpdateStudent';
import RecruiterLogin from './Components/RecruiterLogin';
import RecruiterRegister from './Components/RecruiterRegister';
import RecruiterMenu from './Components/RecruiterMenu';
import ViewStudentsComponent from './Components/ViewStudentsComponent'
import ViewRecruiterDetails from './Components/ViewRecruiterDetails';
import RecruiterContact from './Components/RecruiterContact';
import UpdateRecruiter from './Components/UpdateRecruiter'
import StudentMenu from './Components/StudentMenu';
import RecruiterChangePassword from './Components/RecruiterChangePassword';
import AdminLogin from './AdminComponents/AdminLogin';
import LoginComponent from './AdminComponents/LoginComponent';
import ForgotPassword from './AdminComponents/ForgotPassword';
import ViewCollegeDetailsComponent from './AdminComponents/ViewCollegeDetailsComponent '
import UpdateCollegeDetailsComponent from './AdminComponents/UpdateCollegeDetailsComponent';
import ViewRecruitersComponent from './AdminComponents/ViewRecruitersComponent'
import AdminNavigation from './AdminComponents/AdminNavigation'




function App() {
  return (
  <Router>
     <NavigationBar/>
     
      <Switch>

         <Route exact path="/" component={HomeComponent}/>
         <Route path='/about'  exact component={AboutComponent} />
         <Route path='/studentlogin' exact component={StudentLogin}/>
         <Route path='/studentregister' exact component={StudentRegister}/>
         <Route path='/update-student/:userId' exact component={UpdateStudent}/>
         <Route path='/students' exact component={ListAllStudents}/>
         <Route path='/view-student/:userId' exact component={ViewStudent}/>
         <Route path='/studentmenu' exact component={StudentMenu} />
         <Route path='/recruiterlogin' exact component={RecruiterLogin}/>
         <Route path='/recruiterRegister' exact component={RecruiterRegister}/>
         <Route path='/recruitermenu' exact component={RecruiterMenu}/>
         <Route path='/ViewStudents' exact component={ViewStudentsComponent} />
         <Route path='/ViewRecruiterDetails' exact component={ViewRecruiterDetails} />
         <Route path='/sendMail' exact component={RecruiterContact} />
         <Route path='/update/:id' exact component={UpdateRecruiter} />
         <Route path='/recruiterpassword' exact component={RecruiterChangePassword} />


         <Route path ="/adminlogin" exact component={AdminLogin}></Route>
         <Route path="/login" exact component={LoginComponent}></Route>
         <Route path = "/admin_navigation" exact component = {AdminNavigation}></Route>
          <Route path = "/view_college_details" exact component = {ViewCollegeDetailsComponent}></Route>
          <Route path = "/update_college_details/:id" component = {UpdateCollegeDetailsComponent}></Route>    
          <Route path = "/get_recruiter_list" component = {ViewRecruitersComponent}></Route>
          <Route path="/forgotpassword" exact component={ForgotPassword}></Route>

         
         
         
         

           
           
       </Switch> 
         
      </Router>
  
  );
}

export default App;
