import { FaHome, FaHeart, FaQuestionCircle, FaCog } from 'react-icons/fa';
import './Sidebar.css';

const Slidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-icon">
                <FaHome />
            </div>
            <div className="sidebar-icon">
                <FaHeart />
            </div>
            <div className="sidebar-icon">
                <FaQuestionCircle />
            </div>
            <div className="sidebar-icon">
                <FaCog />
            </div>
        </div>
    );
};

export default Slidebar;
