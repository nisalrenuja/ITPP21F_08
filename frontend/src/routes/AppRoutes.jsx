import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUs from "../pages/AboutUsPage/AboutUs";
import Events from "../pages/EventsPage/Events";
import Home from "../pages/HomePage/Home";
import Footer from "../component/common/footer/Footer";
import ContactUs from "../pages/ContactUsPage/ContactUs";
import Navbar from "../component/common/navbar/Navbar";
import Clients from "../pages/ClientPage/ClientPage";
import LoginScreen from "../pages/LoginPage/LoginScreen";
import ForgotPasswordScreen from "../pages/LoginPage/ForgotPasswordScreen";
import RegisterScreen from "../pages/LoginPage/RegisterScreen";
import ResetPasswordScreen from "../pages/LoginPage/ResetPasswordScreen";
import Admin from "../pages/AdminPage/AdminPage";
import LapAllo from "../pages/AdminPage/Laps";
import AllAssignmnets from "../pages/AdminPage/AllAssignments";
import CreateAssignment from "../pages/AdminPage/CreateAssignmentt";
import CreateLapAllo from "../pages/AdminPage/CreateLapAllo";
import EmployeePoints from "../pages/AdminPage/EmployeePoints";
import AllEmployees from "../pages/AdminPage/AllEmployees";
import InsertEmployee from "../pages/AdminPage/InsertEmployee";
import EditAssignment from "../pages/AdminPage/EditAssignment";
import Assignment from "../pages/AdminPage/Assignment";
import ReviewPage from "../pages/ReviewPage/ReviewPage";
import CreateReview from "../modules/AdminModules/CreateReview";
import EditReview from "../modules/AdminModules/EditReview";
import DisplayReview from "../modules/AdminModules/DisplayReview";
import EditLapAllo from "../pages/AdminPage/EditLapAllo";
import WorkReport from "../pages/AdminPage/WorkReport";
import CompanyPerfomance from "../pages/AdminPage/CompanyPerformance";
import AllReports from "../pages/AdminPage/AllReports";

const AppRoutes = () => (
  <div>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/aboutus" component={AboutUs} exact />
        <Route path="/events" component={Events} exact />
        <Route path="/Clients" component={Clients} exact />
        <Route path="/contact" component={ContactUs} exact />
        <Route path="/login" component={LoginScreen} exact />
        <Route path="/forgotpassword" component={ForgotPasswordScreen} exact />
        <Route
          exact
          path="/passwordreset/:resetToken"
          component={ResetPasswordScreen}
        />
        <Route path="/register" component={RegisterScreen} exact />
        <Route path="/admin" component={Admin} exact />
        <Route path="/laptopallocation" component={LapAllo} exact />
        <Route path="/allassignments" component={AllAssignmnets} exact />
        <Route path="/createassignment" component={CreateAssignment} exact />
        <Route path="/createlapallocation" component={CreateLapAllo} exact />
        <Route path="/AllEmployees" component={AllEmployees} exact />
        <Route path="/EmployeePoints" component={EmployeePoints} exact />
        <Route
          exact
          path="/editassignment/:assignment"
          component={EditAssignment}
        />
        <Route exact path="/assignment/:assignment" component={Assignment} />
        <Route path="/review" component={ReviewPage} exact />
        <Route path="/add" exact component={CreateReview}></Route>
        <Route path="/edit/:id" exact component={EditReview}></Route>
        <Route path="/post/:id" exact component={DisplayReview}></Route>
        <Route exact path="/editlapallo/:assignment" component={EditLapAllo} />
        <Route path="/reportwork" component={WorkReport} exact />
        <Route path="/InsertEmployee" component={InsertEmployee} exact />
        /*Anujitha Routes*/
        <Route path="/companyperformance" component={CompanyPerfomance} exact />
        <Route path="/allreports" component={AllReports} exact />
      </Switch>
      <Footer />
    </Router>
  </div>
);

export default AppRoutes;
