import styled from "styled-components";

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: sticky;
    margin: 0;
    padding: 0;
    z-index: 10;

    .headerBox {
        width: 1024px;
        height: 50px;
        background-color: #c7c5f4;
        margin: auto;
    }

    .logoBox {
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

`

const Header = () => {
    return (
        <HeaderContainer>
            <div className="headerBox">
                <div className="logoBox">
                    <p className="logo">Dev's</p>
                </div>
            </div>
        </HeaderContainer>
    )
}
export default Header;