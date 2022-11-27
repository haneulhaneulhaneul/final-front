import styled from "styled-components";

const Navigation = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 100px 0;
    padding: 0 200px;

     & p {
        display: inline-block;
        position: relative;
        font-size: 1.4em;
        margin:0;
        color: #958888;
            &::after {
                position: absolute; 
                content:""; 
                display: block; 
                border-bottom: 3px solid #5d54a4; 
                transition: all 250ms ease-out; 
                left: 50%;
                width: 0;
            }
            &:hover::after {
                transition: all 250ms ease-out; 
                left: 0%; width: 100%;
            }

     }
`

const MyPageNav = () => {

    return(
        <Navigation>
            <p>Calendar</p>
            <p>Bookmark</p>
            <p>Hashtag</p>
            <p>Study</p>
        </Navigation>
    )
}
export default MyPageNav;