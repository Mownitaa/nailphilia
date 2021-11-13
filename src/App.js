import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import AddProduct from './pages/Dashboard/AddProduct/AddProduct';
import AddReview from './pages/Dashboard/AddReview/AddReview';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageOrders from './pages/Dashboard/ManageOrders/ManageOrders';
import ManageProducts from './pages/Dashboard/ManageProducts/ManageProducts';
import MyOrders from './pages/Dashboard/MyOrders/MyOrders';
import Pay from './pages/Dashboard/Pay/Pay';
import Home from './pages/Home/Home/Home';
import Products from './pages/Home/Products/Products';
import Reviews from './pages/Home/Reviews/Reviews';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Register from './pages/Login/Register/Register';
import MoreProducts from './pages/MoreProducts/MoreProducts/MoreProducts';
import PlaceOrder from './pages/MoreProducts/PlaceOrder/PlaceOrder';
import Purchase from './pages/MoreProducts/Purchase/Purchase';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/moreProducts'>
              <MoreProducts></MoreProducts>
            </Route>
            <Route exact path='/reviews'>
              <Reviews></Reviews>
            </Route>
            <Route exact path='/placeOrder'>
              <PlaceOrder></PlaceOrder>
            </Route>
            <PrivateRoute exact path='/product/:productId'>
              <Purchase></Purchase>
            </PrivateRoute>
            <PrivateRoute exact path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute exact path='/dashboard/makeAdmin'>
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
            <PrivateRoute exact path='/dashboard/pay'>
              <Pay></Pay>
            </PrivateRoute>
            <PrivateRoute exact path='/dashboard/addReview'>
              <AddReview></AddReview>
            </PrivateRoute>
            <PrivateRoute exact path='/dashboard/myOrders'>
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute exact path='/dashboard/manageOrders'>
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute exact path='/dashboard/manageProducts'>
              <ManageProducts></ManageProducts>
            </PrivateRoute>
            <PrivateRoute exact path='/dashboard/addProduct'>
              <AddProduct></AddProduct>
            </PrivateRoute>
            <Route exact path='/products'>
              <Products></Products>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/register'>
              <Register></Register>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
