import Profile from './Components/Profile';
import MyPageNav from './Components/MyPageNav/MyPageNav';
import Header from './Components/Header';
import styled from 'styled-components';
import Calendar from './Components/MyPageNav/Calendar';


const MyPageBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
    z-index: 10;

    .myPageBox {
        width: 1024px;
        height: 50px;
        background-color: #c7c5f4;
        margin: auto;
    }
`

const MyPage = () => {

    return (
        <MyPageBlock>
            <div className='myPageBox'>
                <Header />
                <Profile />
                <MyPageNav />
                <Calendar />
            </div>
        </MyPageBlock>    
    )
}
export default MyPage;