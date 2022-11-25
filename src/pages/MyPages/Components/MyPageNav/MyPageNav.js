import styled from "styled-components";


const Navigation = styled.div`
    width: 500px; // 지정하면 가운데 정렬이 해지됨...
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 20px 0;

     & p {
        display: inline-block;
        position: relative;
        /* padding: 10px 20px; */
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
            <p className='category' >Calendar</p>
            <p className='category' >Bookmark</p>
            <p className='category' >Hashtag</p>
            <p className='category' >Study</p>
        </Navigation>
    )
}
export default MyPageNav;