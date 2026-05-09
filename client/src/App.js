import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/User/Login';
import Register from './components/User/Register';
import ForgotPassword from './components/User/ForgotPassword';
import WalletModal from './wallet/WalletModal';
import ConnectWalletButton from './wallet/ConnectWalletButton';

function App() {

  return (
    <div className="App">
      <WalletModal />
      <div class="preloader">
<div class="spinner">
<div class="dot1"></div>
<div class="dot2"></div>
</div>
</div>


<div class="navbar-area">
<div class="mobile-responsive-nav">
<div class="container-fluid">
<div class="mobile-responsive-menu">
<div class="logo">
<a href="index.html" >
<img src="assets/images/logo-2.png" class="logo-one" alt="Logo"  />
<img src="assets/images/logo.png" class="logo-two" alt="Logo" />
</a>
</div>
</div>
</div>
</div>

<div class="desktop-nav nav-area">
<div class="container-fluid">
<nav class="navbar navbar-expand-md navbar-light ">
<a class="navbar-brand" href="index.html">
<img src="assets/images/logo-2.png" class="logo-one" alt="Logo" />
<img src="assets/images/logo.png" class="logo-two" alt="Logo" />
</a>
<div class="nav-widget-form nav-widget-form-bg">
<form class="search-form">
<input type="search" class="form-control" placeholder="Search items, Creators " />
<button type="submit">
<i class="ri-search-line"></i>
</button>
</form>
</div>
<div class="navbar-collapse mean-menu" id="navbarSupportedContent">
<ul class="navbar-nav">
<li class="nav-item">
<a href="#" class="nav-link active">
Home
<i class="ri-arrow-down-s-line"></i>
</a>
<ul class="dropdown-menu">
<li class="nav-item">
<a href="index.html" class="nav-link">
Home One
</a>
</li>
<li class="nav-item">
<a href="index-2.html" class="nav-link">
Home Two
</a>
</li>
<li class="nav-item">
<a href="index-3.html" class="nav-link active">
Home Three
</a>
</li>
</ul>
</li>
<li class="nav-item">
<a href="#" class="nav-link ">
Discover
<i class="ri-arrow-down-s-line"></i>
</a>
<ul class="dropdown-menu">
<li class="nav-item">
<a href="auction.html" class="nav-link">
Live Auction
</a>
</li>
<li class="nav-item">
<a href="discover-1.html" class="nav-link">
Discover Style One
</a>
</li>
<li class="nav-item">
<a href="discover-2.html" class="nav-link">
Discover Style Two
</a>
</li>
<li class="nav-item">
<a href="item-details.html" class="nav-link">
Item Details
</a>
</li>
</ul>
</li>
<li class="nav-item">
<a href="activity.html" class="nav-link">
Activity
</a>
</li>
<li class="nav-item">
<a href="#" class="nav-link">
Pages
<i class="ri-arrow-down-s-line"></i>
</a>
<ul class="dropdown-menu">
<li class="nav-item">
<a href="collection.html" class="nav-link">
Collection
</a>
</li>
<li class="nav-item">
<a href="create-collection.html" class="nav-link">
Create Collection
</a>
</li>
<li class="nav-item">
<a href="authors.html" class="nav-link">
Authors
</a>
</li>
<li class="nav-item">
<a href="author-profile.html" class="nav-link">
Author Profile
</a>
</li>
<li class="nav-item">
<a href="team.html" class="nav-link">
Team
</a>
</li>
<li class="nav-item">
<a href="testimonials.html" class="nav-link">
Testimonials
</a>
</li>
<li class="nav-item">
<a href="#" class="nav-link">
User
<i class="ri-arrow-down-s-line"></i>
</a>
<ul class="dropdown-menu">
<li class="nav-item">
<Link to="/login" className="nav-link">
Log In
</Link>
</li>
<li class="nav-item">
<Link to="/register" className="nav-link">
Register
</Link>
</li>
<li class="nav-item">
<Link to="/password/forgot" className="nav-link">
Forgot Password
</Link>
</li>
</ul>
</li>
<li class="nav-item">
<a href="terms-condition.html" class="nav-link">
Terms & Conditions
</a>
</li>
<li class="nav-item">
<a href="privacy-policy.html" class="nav-link">
Privacy Policy
</a>
</li>
<li class="nav-item">
<a href="404.html" class="nav-link">
404 Page
</a>
</li>
<li class="nav-item">
<a href="coming-soon.html" class="nav-link">
Coming Soon
</a>
</li>
</ul>
</li>
<li class="nav-item">
<a href="#" class="nav-link">
Community
<i class="ri-arrow-down-s-line"></i>
</a>
<ul class="dropdown-menu">
<li class="nav-item">
<a href="about.html" class="nav-link">
About Us
</a>
</li>
<li class="nav-item">
<ConnectWalletButton className="nav-link" label="Add Wallet" />
</li>
<li class="nav-item">
<a href="#" class="nav-link">
Blog
<i class="ri-arrow-down-s-line"></i>
</a>
<ul class="dropdown-menu">
<li class="nav-item">
<a href="blog-1.html" class="nav-link">
Blog Grid
</a>
</li>
<li class="nav-item">
<a href="blog-2.html" class="nav-link">
Blog Left Sidebar
</a>
</li>
<li class="nav-item">
<a href="blog-3.html" class="nav-link">
Blog Right Sidebar
</a>
</li>
<li class="nav-item">
<a href="blog-details.html" class="nav-link">
Blog Details
</a>
</li>
<li class="nav-item">
<a href="categories.html" class="nav-link">
Categories
</a>
</li>
<li class="nav-item">
<a href="tags.html" class="nav-link">
Tags
</a>
</li>
</ul>
</li>
<li class="nav-item">
<a href="help-center.html" class="nav-link">
Help Center
</a>
</li>
</ul>
</li>
<li class="nav-item">
<a href="contact.html" class="nav-link">
Contact Us
</a>
</li>
</ul>
<div class="others-options">
<ul class="optional-item-list">
<li><a href="create-collection.html">Create</a></li>
<li><ConnectWalletButton className="active" /></li>
</ul>
</div>
</div>
</nav>
</div>
</div>
<div class="mobile-nav">
<div class="search-btn">
<a class="#" href="#searchmodal" data-bs-toggle="modal" data-bs-target="#searchmodal">
<i class="ri-search-line"></i>
</a>
</div>
</div>
<div class="side-nav-responsive">
<div class="container-max">
<div class="dot-menu">
<div class="circle-inner">
<div class="circle circle-one"></div>
<div class="circle circle-two"></div>
<div class="circle circle-three"></div>
</div>
</div>
<div class="container">
<div class="side-nav-inner">
<div class="side-nav justify-content-center align-items-center">
<div class="side-nav-item">
<ul class="optional-item-list">
<li><a href="create-collection.html">Create</a></li>
<li><ConnectWalletButton className="active" /></li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


<div class="modal fade fade-scale searchmodal" id="searchmodal" tabindex="-1" role="dialog">
<div class="modal-dialog" role="document">
<div class="modal-content">
<div class="modal-header">
<button type="button" class="close" data-bs-dismiss="modal">
<i class="ri-close-line"></i>
</button>
</div>
<div class="modal-body">
<form class="modal-search-form">
<input type="search" class="search-field" placeholder="Search..." />
<button type="submit"><i class="ri-search-line"></i></button>
</form>
</div>
</div>
</div>
</div>


<Routes>
<Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/password/forgot" element={<ForgotPassword />} />
</Routes>


<footer class="footer-area pt-100 pb-70">
<div class="container">
<div class="row">
<div class="col-lg-4 col-sm-8">
<div class="footer-widget">
<div class="footer-logo">
<a href="index.html">
<img src="assets/images/footer-logo.png" class="footer-logo1" alt="Footer Logo" />
<img src="assets/images/logo.png" class="footer-logo2" alt="Footer Logo" />
</a>
</div>
<p>Subscribe to our newsletter</p>
<div class="newsletter-area">
<form class="newsletter-form" data-toggle="validator" method="POST">
<input type="email" class="form-control" placeholder="Enter Your Email" name="EMAIL" required autocomplete="off" />
<button class="subscribe-btn" type="submit">
Subscribe Now
</button>
<div id="validator-newsletter" class="form-result"></div>
</form>
</div>
</div>
</div>
<div class="col-lg-2 col-sm-4">
<div class="footer-widget ps-5">
<h3>Marketplace</h3>
<ul class="footer-list">
<li>
<a href="discover-1.html" target="_blank">
Art
</a>
</li>
<li>
<a href="discover-1.html" target="_blank">
All NFTs
</a>
</li>
<li>
<a href="discover-1.html" target="_blank">
Music
</a>
</li>
<li>
<a href="discover-1.html" target="_blank">
Trending Cards
</a>
</li>
</ul>
</div>
</div>
<div class="col-lg-2 col-sm-4">
<div class="footer-widget ps-5">
<h3>My Account</h3>
<ul class="footer-list">
<li>
<a href="authors.html" target="_blank">
Authors
</a>
</li>
<li>
<a href="collection.html" target="_blank">
Collection
</a>
</li>
<li>
<a href="author-profile.html" target="_blank">
Author Profile
</a>
</li>
<li>
<a href="create-collection.html" target="_blank">
Create Collection
</a>
</li>
</ul>
</div>
</div>
<div class="col-lg-2 col-sm-4">
<div class="footer-widget ps-5">
<h3>Resources</h3>
<ul class="footer-list">
<li>
<a href="help-center.html" target="_blank">
Helps & Support
</a>
</li>
<li>
<a href="auction.html" target="_blank">
Live Auctions
</a>
</li>
<li>
<a href="item-details.html" target="_blank">
Item Details
</a>
</li>
<li>
<a href="activity.html" target="_blank">
Activity
</a>
</li>
</ul>
</div>
</div>
<div class="col-lg-2 col-sm-4">
<div class="footer-widget ps-5">
<h3>Company</h3>
<ul class="footer-list">
<li>
<a href="about.html" target="_blank">
About Us
</a>
</li>
<li>
<a href="contact.html" target="_blank">
Contact Us
</a>
</li>
<li>
<a href="blog-1.html" target="_blank">
Our Blog
</a>
</li>
<li>
<a href="discover-1.html" target="_blank">
Discover
</a>
</li>
</ul>
</div>
</div>
</div>
</div>
<div class="footer-shape">
<div class="footer-shape1">
<img src="assets/images/shape/shape-bg.png" alt="Images" />
</div>
<div class="footer-shape2">
<img src="assets/images/shape/shape1.png" alt="Images" />
</div>
<div class="footer-shape3">
<img src="assets/images/shape/shape2.png" alt="Images" />
</div>
</div>
</footer>


<div class="copyright-area">
<div class="container">
<div class="row align-items-center">
<div class="col-lg-8">
<div class="copy-right-text">
<p>
Â© <script>document.write(new Date().getFullYear())</script> Tezor. All Rights Reserved by
<a href="https://hibootstrap.com/" target="_blank">HiBootstrap</a>
</p>
<ul class="copy-right-list">
<li>
<a href="terms-condition.html" target="_blank">
Terms & Conditions
</a>
</li>
<li>
<a href="privacy-policy.html" target="_blank">
Privacy Policy
</a>
</li>
</ul>
</div>
</div>
<div class="col-lg-4">
<div class="copy-right-social">
<ul class="social-link">
<li>
<a href="https://www.facebook.com/" target="_blank">
<i class="ri-facebook-fill"></i>
</a>
</li>
<li>
<a href="https://www.instagram.com/" target="_blank">
<i class="ri-instagram-fill"></i>
</a>
</li>
<li>
<a href="https://twitter.com/" target="_blank">
<i class="ri-twitter-fill"></i>
</a>
</li>
<li>
<a href="https://www.linkedin.com/" target="_blank">
<i class="ri-linkedin-fill"></i>
</a>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
    </div>
  );
}

export default App;
