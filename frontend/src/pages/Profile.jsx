import React, { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingAI from "../components/FloatingAI";

import "../styles/sid.css";

import {
    User,
    Mail,
    Phone,
    MapPin,
    ShieldCheck,
    FileText,
    Lock,
    Bell,
    Globe,
    LogOut,
    Edit3,
    ArrowRight,
    Tractor,
    Eye,
    Download,
    Upload,
    Save
} from "lucide-react";

function Profile() {

    const [profile, setProfile] = useState({

        name: "Siddharth G",

        email: "siddharth@agrismart.com",

        phone: "+91 9876543210",

        district: "Coimbatore",

        state: "Tamil Nadu"

    });

    const [password, setPassword] = useState({

        current: "",

        newPassword: "",

        confirmPassword: ""

    });

    const farms = [

        {

            id:1,

            name:"Green Valley Farm",

            crop:"Rice",

            area:"4 Acres",

            soil:"Black Soil"

        },

        {

            id:2,

            name:"South Farm",

            crop:"Cotton",

            area:"2 Acres",

            soil:"Red Soil"

        },

        {

            id:3,

            name:"West Farm",

            crop:"Groundnut",

            area:"3 Acres",

            soil:"Sandy Soil"

        }

    ];

    const documents = [

        "Aadhaar Card",

        "Land Ownership Certificate",

        "Farmer Registration",

        "Soil Health Card",

        "Bank Passbook"

    ];

    return(

        <>

            <Navbar/>

            <FloatingAI/>

            <div className="profilePage">

                <div className="profileHeader">

                    <h1>My Account</h1>

                    <p>

                        Manage your profile, farms,
                        documents and security settings.

                    </p>

                </div>

                <div className="profileGrid">

                    {/* LEFT */}

                    <aside className="profileSidebar">

                        <div className="profileCard">

                            <div className="avatarCircle">

                                {profile.name.charAt(0)}

                            </div>

                            <h2>{profile.name}</h2>

                            <span className="verifiedBadge">

                                <ShieldCheck size={16}/>

                                Verified Farmer

                            </span>

                            <div className="profileMeta">

                                <div>

                                    <Mail size={18}/>

                                    <span>{profile.email}</span>

                                </div>

                                <div>

                                    <Phone size={18}/>

                                    <span>{profile.phone}</span>

                                </div>

                                <div>

                                    <MapPin size={18}/>

                                    <span>

                                        {profile.district},

                                        {" "}

                                        {profile.state}

                                    </span>

                                </div>

                            </div>

                            <div className="profileStats">

                                <div>

                                    <h3>3</h3>

                                    <span>Farms</span>

                                </div>

                                <div>

                                    <h3>8</h3>

                                    <span>Crops</span>

                                </div>

                                <div>

                                    <h3>5</h3>

                                    <span>Documents</span>

                                </div>

                            </div>

                            <button className="primaryBtn">

                                <Edit3 size={18}/>

                                Edit Profile

                            </button>

                        </div>

                    </aside>

                    {/* RIGHT */}

                    <div className="profileContent">

                        {/* FARMS */}

                        <section className="profileSection">

                            <div className="sectionHeader">

                                <h2>

                                    <Tractor/>

                                    Manage Farms

                                </h2>

                                <Link

                                    to="/manage-farms"

                                    className="sectionButton"

                                >

                                    Open Manager

                                </Link>

                            </div>

                            <div className="farmGrid">

                                {

                                    farms.map(farm=>(

                                        <div

                                            className="farmCard"

                                            key={farm.id}

                                        >

                                            <h3>{farm.name}</h3>

                                            <p>

                                                {farm.crop}

                                            </p>

                                            <span>

                                                {farm.area}

                                            </span>

                                            <small>

                                                {farm.soil}

                                            </small>

                                            <Link

                                                to="/cropdetails"

                                                className="viewBtn"

                                            >

                                                View

                                                <ArrowRight size={16}/>

                                            </Link>

                                        </div>

                                    ))

                                }

                            </div>

                        </section>

                        {/* DOCUMENTS */}

                        <section className="profileSection">

                            <div className="sectionHeader">

                                <h2>

                                    <FileText/>

                                    Documents

                                </h2>

                            </div>

                            <div className="documentGrid">

                                {

                                    documents.map((doc,index)=>(

                                        <div

                                            className="documentCard"

                                            key={index}

                                        >

                                            <FileText/>

                                            <h3>

                                                {doc}

                                            </h3>

                                            <span>

                                                Verified

                                            </span>

                                            <div className="documentActions">

                                                <button>

                                                    <Eye size={16}/>

                                                </button>

                                                <button>

                                                    <Download size={16}/>

                                                </button>

                                                <button>

                                                    <Upload size={16}/>

                                                </button>

                                            </div>

                                        </div>

                                    ))

                                }

                            </div>

                            <button className="uploadButton">

                                <Upload size={18}/>

                                Upload New Document

                            </button>

                        </section>
                                                {/* PERSONAL INFORMATION */}

                        <section className="profileSection">

                            <div className="sectionHeader">

                                <h2>

                                    <User />

                                    Personal Information

                                </h2>

                            </div>

                            <form className="profileForm">

                                <div className="formRow">

                                    <div className="inputGroup">

                                        <label>Full Name</label>

                                        <input
                                            type="text"
                                            value={profile.name}
                                            onChange={(e)=>
                                                setProfile({
                                                    ...profile,
                                                    name:e.target.value
                                                })
                                            }
                                        />

                                    </div>

                                    <div className="inputGroup">

                                        <label>Email Address</label>

                                        <input
                                            type="email"
                                            value={profile.email}
                                            onChange={(e)=>
                                                setProfile({
                                                    ...profile,
                                                    email:e.target.value
                                                })
                                            }
                                        />

                                    </div>

                                </div>

                                <div className="formRow">

                                    <div className="inputGroup">

                                        <label>Phone Number</label>

                                        <input
                                            type="text"
                                            value={profile.phone}
                                            onChange={(e)=>
                                                setProfile({
                                                    ...profile,
                                                    phone:e.target.value
                                                })
                                            }
                                        />

                                    </div>

                                    <div className="inputGroup">

                                        <label>District</label>

                                        <input
                                            type="text"
                                            value={profile.district}
                                            onChange={(e)=>
                                                setProfile({
                                                    ...profile,
                                                    district:e.target.value
                                                })
                                            }
                                        />

                                    </div>

                                </div>

                                <div className="formRow">

                                    <div className="inputGroup fullWidth">

                                        <label>State</label>

                                        <input
                                            type="text"
                                            value={profile.state}
                                            onChange={(e)=>
                                                setProfile({
                                                    ...profile,
                                                    state:e.target.value
                                                })
                                            }
                                        />

                                    </div>

                                </div>

                                <button
                                    type="button"
                                    className="saveButton"
                                >

                                    <Save size={18}/>

                                    Save Changes

                                </button>

                            </form>

                        </section>

                        {/* SECURITY */}

                        <section className="profileSection">

                            <div className="sectionHeader">

                                <h2>

                                    <Lock/>

                                    Security

                                </h2>

                            </div>

                            <form className="profileForm">

                                <div className="inputGroup">

                                    <label>

                                        Current Password

                                    </label>

                                    <input
                                        type="password"
                                        value={password.current}
                                        onChange={(e)=>

                                            setPassword({

                                                ...password,

                                                current:e.target.value

                                            })

                                        }
                                    />

                                </div>

                                <div className="formRow">

                                    <div className="inputGroup">

                                        <label>

                                            New Password

                                        </label>

                                        <input
                                            type="password"
                                            value={password.newPassword}
                                            onChange={(e)=>

                                                setPassword({

                                                    ...password,

                                                    newPassword:e.target.value

                                                })

                                            }
                                        />

                                    </div>

                                    <div className="inputGroup">

                                        <label>

                                            Confirm Password

                                        </label>

                                        <input
                                            type="password"
                                            value={password.confirmPassword}
                                            onChange={(e)=>

                                                setPassword({

                                                    ...password,

                                                    confirmPassword:e.target.value

                                                })

                                            }
                                        />

                                    </div>

                                </div>

                                <button
                                    type="button"
                                    className="saveButton"
                                >

                                    <Lock size={18}/>

                                    Update Password

                                </button>

                            </form>

                        </section>

                        {/* ACCOUNT SETTINGS */}

                        <section className="profileSection">

                            <div className="sectionHeader">

                                <h2>

                                    <Bell/>

                                    Preferences

                                </h2>

                            </div>

                            <div className="settingsGrid">

                                <div className="settingCard">

                                    <Bell size={22}/>

                                    <div>

                                        <h3>

                                            Notifications

                                        </h3>

                                        <p>

                                            Manage app notifications

                                        </p>

                                    </div>

                                </div>

                                <div className="settingCard">

                                    <Globe size={22}/>

                                    <div>

                                        <h3>

                                            Language

                                        </h3>

                                        <p>

                                            English

                                        </p>

                                    </div>

                                </div>

                            </div>

                        </section>

                        {/* LOGOUT */}

                        <section className="logoutSection">

                            <button className="logoutButton">

                                <LogOut size={18}/>

                                Logout

                            </button>

                        </section>

                    </div>

                </div>

            </div>

            <Footer/>

        </>

    );

}

export default Profile;