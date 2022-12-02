import styled from "styled-components";

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: sticky;
    margin: 0;
    padding: 0;
    z-index: 10;
    background-color: #c7c5f4;

    .headerBox {
        height: 50px;
    }

    .logoBox {
        float:left;
        margin: 0;
        height: 50px;
    }

    .logo {
        color: #5d54a4;
        font-size: 2em;
        font-weight: bold;
        margin: 0;
        padding-left: 10px;
    }

    .profileBox {
        display: inline-block;
        float: right;
        margin: 0;
        height: 50px;
    }

    .profile {
        font-size: 1.3em;
        margin: 0;
        padding-right: 10px;
    }

`

const Header = () => {
    return (
        <HeaderContainer>
            <div className="headerBox">
                <div className="logoBox">
                    <p className="logo">Dev's</p>
                </div>
                <div className="profileBox">
                    <p className="profile">Profile</p>
                </div>
            </div>
        </HeaderContainer>
    )
}
export default Header;