import React from "react";
import classNames from "classnames";

// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavLink,
  NavItem,
  Nav,
  Container,
} from "reactstrap";

class AdminNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      modalSearch: false,
      color: "navbar-transparent",
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateColor);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateColor);
  }
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  updateColor = () => {
    if (window.innerWidth < 993 && this.state.collapseOpen) {
      this.setState({
        color: "bg-white",
      });
    } else {
      this.setState({
        color: "navbar-transparent",
      });
    }
  };
  // this function opens and closes the collapse on small devices
  toggleCollapse = () => {
    if (this.state.collapseOpen) {
      this.setState({
        color: "navbar-transparent",
      });
    } else {
      this.setState({
        color: "bg-white",
      });
    }
    this.setState({
      collapseOpen: !this.state.collapseOpen,
    });
  };
  // this function is to open the Search modal
  toggleModalSearch = () => {
    this.setState({
      modalSearch: !this.state.modalSearch,
    });
  };
  render() {
    return (
      <>
        <Navbar
          className={classNames("navbar-absolute", this.state.color)}
          expand="lg"
        >
          <Container fluid>
            <div className="navbar-wrapper">
              <div
                className={classNames("navbar-toggle d-inline", {
                  toggled: this.props.sidebarOpened,
                })}
              >
                <NavLink
                  className="navbar-toggler text-white"
                  type="button"
                  onClick={this.props.toggleSidebar}
                >
                  Home
                </NavLink>
              </div>
              <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                {this.props.brandText}
              </NavbarBrand>
            </div>
            <button
              aria-expanded={false}
              aria-label="Toggle navigation"
              className="navbar-toggler mt-1"
              data-target="#navigation"
              data-toggle="collapse"
              id="navigation"
              type="button"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
            </button>
            <Collapse navbar isOpen={this.state.collapseOpen}>
              <Nav className="mr-auto" navbar>
                <NavItem className="text-white  d-none d-lg-block d-xl-block">
                  Home
                </NavItem>
                <NavItem className="text-white">About</NavItem>
                <NavItem className="text-white">Contact</NavItem>
                <NavItem className="text-white">Loans</NavItem>

                <li className="separator d-lg-none" />
              </Nav>

              <Nav className="" navbar>
                {true ? (
                  <>
                    <Button> Log In</Button>
                    <Button color="info"> Register </Button>
                  </>
                ) : (
                  <UncontrolledDropdown nav>
                    <DropdownToggle
                      caret
                      color="default"
                      data-toggle="dropdown"
                      nav
                    >
                      <div className="photo">
                        <img alt="..." src={require("assets/img/anime3.png")} />
                        <b className="caret d-none d-lg-block d-xl-block" />
                      </div>
                      <p className="d-lg-none">Profile</p>
                    </DropdownToggle>

                    <DropdownMenu className="dropdown-navbar" tag="ul" right>
                      <NavLink tag="li">
                        <DropdownItem className="nav-item">
                          Mike John responded to your email
                        </DropdownItem>
                      </NavLink>
                      <NavLink tag="li">
                        <DropdownItem className="nav-item">
                          You have 5 more tasks
                        </DropdownItem>
                      </NavLink>
                      <NavLink tag="li">
                        <DropdownItem className="nav-item">
                          Your friend Michael is in town
                        </DropdownItem>
                      </NavLink>
                      <NavLink tag="li">
                        <DropdownItem className="nav-item">
                          Another notification
                        </DropdownItem>
                      </NavLink>
                      <NavLink tag="li">
                        <DropdownItem className="nav-item">
                          Another one
                        </DropdownItem>
                      </NavLink>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                )}
                <li className="separator d-lg-none" />
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default AdminNavbar;
