import logo from './logo.svg';
import './App.scss';
import {QueryClientProvider, QueryClient} from 'react-query';
import {ReactQueryDevtools}from 'react-query/devtools'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navigation from './components/navigation/navigation';
import Homepage from './components/homepage/homepage';
import About from './components/about/about';
import MyProject from './components/myProject/myProject';
import ContactUs from './components/contactUs/contactUs';
import Thankyou from './components/thankyou/thankyou';
import './App.scss'
import './index.scss'
import Adminhome from './components/admin/adminhome/adminhome';
import Supplierhome from './components/supplier/supplierhome/supplierhome';
import Login from './components/login/login';
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Register from './components/register/register';
import Customer from './components/customer/customer';
import CustomerOne from './components/customerOne/customerOne';
import Pagenotfound from './components/pagenotfound/pagenotfound';
import Footer from './components/footer/footer';
import Myprojectdetails from './components/myprojectdetails/myprojectdetails';
import Search from './components/search/search';
const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:true,
       retry: 0,
      suspense: false,
    }
  }
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer theme='colored'></ToastContainer>
            <Router>
                <Navigation Sticky></Navigation>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/about' element={<About />} />
                    {/* <Route path='/my-project' element={<MyProject />} /> */}
                    <Route path='/contact-us' element={<ContactUs />} />
                    <Route path='/thankyou' element={<Thankyou />} />
                    <Route path='/admin-home' element={<Adminhome />} />
                    <Route path='/suppplier-home' element={<Supplierhome />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/customer' element={<Customer />} />
                    <Route path='/customerone' element={<CustomerOne />} />
                    {/* <Route path='*' element={<Pagenotfound />} /> */}
                    <Route path='*' element={<h1>Page not found</h1>} />
                    <Route path='/my-project' element={<Myprojectdetails />} />
                    <Route path='/search' element={<Search />} />
                </Routes>
                <Footer></Footer>
            </Router>
            <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />  
    </QueryClientProvider>  
     
    
  );
}

export default App;
