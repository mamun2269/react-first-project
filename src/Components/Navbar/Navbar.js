import React, {useState} from 'react';
import Modal from 'react-modal';
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    const [click, setClick]= useState(false);

    const handleClick=() => {
        setClick(!click);
    }


    // useState for sign in
    const [openModal, setOpenModal]= useState(false);
    const clickHandler=()=> {
        setOpenModal(true);
    }

    // use state code for inputs fields
    const [inputs, setInputs]= useState({
        email:'',
        password:''
    });

    const changeHandler=(event) => {
        const value= event.target.value;
        const name= event.target.name;
        setInputs((preValue)=>{
            return{
                ...preValue,
                [name]:value
            }
        });
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
            setInputs({
                email:'',
                password:''
            })
    }


    return (
        <div>
            <div className="navbar_area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 navbar_wrap">
                            <div className="logo_area">
                                <Link to="/" className="nav_logo nav_link">dolla</Link>
                            </div>


                            {/* main menu */}
                            <ul className={ click ? "show" : "main_menu"} onClick={()=> setClick(false)}>
                                <li className="nav_item">
                                    <NavLink to="/about" className="nav_link">About</NavLink>
                                </li>
                                <li className="nav_item">
                                    <NavLink to="/discover" className="nav_link">Discover</NavLink>
                                </li>
                                <li className="nav_item">
                                    <NavLink to="/service" className="nav_link">Service</NavLink>
                                </li>
                                <li className="nav_item">
                                    <NavLink to="/signup" className="nav_link">Sign Up</NavLink>
                                </li>
                                <li className="nav_item">
                                    <NavLink to="/contact" className="nav_link">Contact</NavLink>
                                </li>
                            </ul>


                            {/* sign in area */}
                            <div className="sign_area">
                                <button className='sign_btn btN' onClick={clickHandler}>Sign In</button>
                            </div>

                            
                            {/* modal area  */}

                            <Modal isOpen={openModal}>
                                <div className="modal_container">
                                    <div className='modal_area'>
                                        <div className="modal_head">
                                            <button onClick={()=>{setOpenModal(false)}}>
                                                <i class="fas fa-times"></i> 
                                            </button>
                                        </div>

                                        <div className="modal_body mb-5">
                                            <h4 className="text-center">Sign In</h4>
                                            <form onSubmit={handleSubmit}>
                                                <div className="form_item">
                                                    <label>Email Address</label>
                                                    <input 
                                                        type="email"
                                                        name="email"
                                                        value={inputs.email}
                                                        placeholder="Enter Email"
                                                        onChange={changeHandler}
                                                        autoComplete='off'                                            
                                                    />
                                                </div>
                                                <div className="form_item">
                                                    <label>Password</label>
                                                    <input 
                                                        type="password"
                                                        name="password"
                                                        value={inputs.password}
                                                        placeholder="Enter Password"
                                                        onChange={changeHandler}   
                                                        autoComplete='off'                                                                                                                                         
                                                    />
                                                </div>
                                                <button type="submit" className="submit_btn">Submit</button>
                                            </form>
                                        </div>
                                        <div className="modal_footer">
                                            <button onClick={()=>{setOpenModal(false)}}>Close</button>
                                        </div>
                                    </div>
                                </div>
                            </Modal>

                            {/* mobile menu */}
                            <div className="mobile_menu" onClick={handleClick}>
                                <i className={ click ? "fas fa-times" : "fas fa-bars"}></i>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
