import Profile from './Components/MyPageTitle';
import MyPageNav from './Components/MyPageNav';
import Header from './Components/Header';
import styled from 'styled-components'
import Calendar from './Calendar';

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
        margin: auto;
    }
`

const MyPage = () => {

    return (
        <>
        <Header />
        <MyPageBlock>
            <div className='myPageBox'>
                <Profile />
                <MyPageNav />
                <Calendar />
            </div>
        </MyPageBlock>
        </>    
    )
}
export default MyPage;