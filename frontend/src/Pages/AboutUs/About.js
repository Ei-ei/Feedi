import React from 'react';
import './About.css';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

export default class About extends React.Component {
    render() {
        return (
            
            <div className = 'body'>
                <Header/>
                <div className = 'header'>
                    <h3>Test Express</h3>
                    <div class = "text">          
                        "Company stablished on Brooklyn in 2021, A Company that will full fill 
                        every ethinicy stomach, chinese food, mexican food, american food, every 
                        food around the the whole world that you can imaging."
                    </div>
                </div>
                <div className = 'content'>
                    <div className = 'first'>
                        <h3>Our Goal</h3>
                    </div>   
                    <div className = 'clear'></div>
                    <div className = 'goal'>
                        <p>{'->'} Make sure Our Customer eat happy in every store they order.</p>
                    </div>
                    <div className = 'clear'></div>
                    <div className = 'goal'>
                        <i class="fas fa-band-aid"></i>
                        <p>{'->'} Make Our customer feel "Fast", by making our delivery faster.</p>
                    </div>
                    <div className = 'clear'></div>
                    <div className = 'goal'>
                        <i class="fas fa-clock"></i>
                        <p>{'->'} Make sure our company work with our partner restaurant.</p>
                    </div>
                    {/* <div className = 'clear'></div> */}
                    <div className = 'second'>
                        <h3>Our "Vission"</h3>
                    </div>  
                    <div className = 'vision'>
                        <p>"Our Vission is use this kind of platform to help out people who are not willing
                            to come out of because the pandemic still going on, or people might be to tired 
                            to getting food, our comapany will accomplish all your work." 
                        </p>
                    </div>
                    <div className = 'clear'></div>
                    <div className = 'goal_photo'>
                        {/* <img src = "image/goal.jpg" alt="goal"/> */}
                    </div>
                    <div className = 'vision_photo'>
                        {/* <img src = "image/vision.jpg" alt="goal"/> */}
                    </div>
                    <div className = 'clear'></div>
                    <div className = 'our_company'>
                        <h3>Our Company</h3>     
                    </div>
                    <div className = 'our_company_p'>
                        <p>Our company care everyone on the food they love, to make sure to can spent
                            a afforable price for a afforable food, and make sure that our system run 
                            faster as we can, to ensure that every one will have a happy meal in their 
                            home, workplace. Our priory goal is "If Happy, I am Happy!".
                        </p>
                    </div>
                    <div className = 'clear'></div>
                    <div className = 'company_first'>
                        {/* <img src = "image/company.jpg" alt="goal"/> */}
                    </div>
                    <div className = 'company_second'>
                        {/* company second photo */}
                    </div>
                    <div className = 'company_third'>
                        {/* company third photo */}
                    </div>
                    <div className = 'clear'></div>
                    <div className = 'contact'>
                        <h3>Contact Us</h3>
                    </div>
                    <div className = 'clear'></div>
                    <div className = 'customer_service'>
                        <h3>Customer Service</h3>
                        <p><strong>New York:</strong> 646-614-4738</p>
                        <p><strong>Enping:</strong> 646-651-3738</p>
                        <p><strong>TaiShan:</strong> 646-423-4438</p>
                        <p><strong>Fuzhou:</strong> 646-611-1738</p>
                        <p><strong>Miami:</strong> 646-622-2238</p>
                        <p><strong>California:</strong> 646-633-3738</p>
                        <p><strong>Shang Hai:</strong> 646-643-4438</p>
                    </div>
                    <div className = 'it_support'>
                        <h3>IT Support</h3>
                        <p><strong>New York:</strong> 646-614-4738</p>
                        <p><strong>Enping:</strong> 646-651-3738</p>
                        <p><strong>TaiShan:</strong> 646-423-4438</p>
                        <p><strong>Fuzhou:</strong> 646-611-1738</p>
                        <p><strong>Miami:</strong> 646-622-2238</p>
                        <p><strong>California:</strong> 646-633-3738</p>
                        <p><strong>Shang Hai:</strong> 646-643-4438</p>
                    </div>
                    <div className = 'partner'>
                        <h3>Be Our Partner</h3>
                        <p><strong>Phone:</strong> 646-614-4738</p>
                        <p><strong>email:</strong> pigsquad@gmail.com</p>
                       
                    </div>
                    

                </div>
                <Footer/>
            </div>
           
        )
    }
}