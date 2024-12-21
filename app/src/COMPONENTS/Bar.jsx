import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Chatbot from '../Chatbot';
import '../COMPONENTS/Bar.css';

function Bar() {
    return (
        <div id="mainpage" style={{ height: '100vh', display: 'flex' }}>
            {/* Sidebar */}
            <div style={{ width: '250px' }}>
                <CDBSidebar
                    style={{ backgroundColor: '#222a2f', height: '100%' }}
                    textColor="#fff"
                >
                    <CDBSidebarHeader
                        prefix={<i className="fa fa-bars fa-large"></i>}
                    >
                        <a href="/" className="text-decoration-none">
                            Sidebar
                        </a>
                    </CDBSidebarHeader>

                    <CDBSidebarContent className="sidebar-content">
                        <CDBSidebarMenu>
                            <NavLink
                                exact
                                to="/"
                                activeClassName="activeClicked"
                            >
                                <CDBSidebarMenuItem icon="columns">
                                    Dashboard
                                </CDBSidebarMenuItem>
                                <CDBSidebarMenuItem icon="columns">
                                    Dashboard
                                </CDBSidebarMenuItem>{' '}
                                <CDBSidebarMenuItem icon="columns">
                                    Dashboard
                                </CDBSidebarMenuItem>{' '}
                                <CDBSidebarMenuItem icon="columns">
                                    Dashboard
                                </CDBSidebarMenuItem>
                            </NavLink>
                            {/* Additional menu items can go here */}
                        </CDBSidebarMenu>
                    </CDBSidebarContent>

                    <CDBSidebarFooter style={{ textAlign: 'center' }}>
                        <div style={{ padding: '20px 5px' }}>
                            Sidebar Footer
                        </div>
                    </CDBSidebarFooter>
                </CDBSidebar>
            </div>

            {/* Main Content (Chatbot) */}
            <div
                style={{
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Chatbot />
            </div>
        </div>
    );
}

export default Bar;
