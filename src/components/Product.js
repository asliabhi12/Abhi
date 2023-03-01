import React from 'react'
import { Link } from 'react-router-dom'

function Product() {
  return (
    <section id="product1" class="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Modern Design</p>
        <div class="pro-container">
            <div class="pro">
                <Link to="/single">
                <img src="img/product/cart1.jpg" alt=""/>
                <div class="des">
                    <span>adidas</span>
                    <h5>Cartoon Astronaut T-shirts</h5>
                    <h4>₹999</h4>
                </div>
                </Link>
                <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>

            <div class="pro">
            <Link to="/single">
                <img src="img/product/cart1.jpg" alt=""/>
                <div class="des">
                    <span>adidas</span>
                    <h5>Sneaker</h5>
                    <h4>₹799</h4>
                </div>
                </Link>
                <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
            <div class="pro">
            <Link to="/single">
                <img src="img/product/cart3.jpg" alt=""/>
                <div class="des">
                    <span>adidas</span>
                    <h5>Astronaut shirts</h5>
                    <h4>₹1599</h4>
                </div>
                </Link>
                <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
            <div class="pro">
            <Link to="/single">
                <img src="img/product/cart4.jpg" alt=""/>
                <div class="des">
                    <span>Puma</span>
                    <h5>Jacket Puma</h5>
                    <h4>₹4500</h4>
                </div>
                </Link>
                <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
            <div class="pro">
            <Link to="/single">
                <img src="img/product/f4.jpg" alt=""/>
                <div class="des">
                    <span>US Polo</span>
                    <h5>shirts</h5>
                    <h4>₹1299</h4>
                </div>
                </Link>
                <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
            <div class="pro">
            <Link to="/single">
                <img src="img/product/cart6.jpg" alt=""/>
                <div class="des">
                    <span>adidas</span>
                    <h5>Shirts</h5>
                    <h4>₹778</h4>
                </div>
                </Link>
                <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
            <div class="pro">
            <Link to="/single">
                <img src="img/product/f5.jpg" alt=""/>
                <div class="des">
                    <span>adidas</span>
                    <h5>Cartoon Astronaut T-shirts</h5>
                    <h4>₹1299</h4>
                </div>
                </Link>
                <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
            <div class="pro">
            <Link to="/single">
                <img src="img/product/f6.jpg" alt=""/>
                <div class="des">
                    <span>adidas</span>
                    <h5>Cartoon Astronaut T-shirts</h5>
                    <h4>₹4599</h4>
                </div>
                </Link>
                <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
        </div>
    </section>
  )
}

export default Product