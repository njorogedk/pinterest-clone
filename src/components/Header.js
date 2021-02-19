import React from 'react'
import styled from 'styled-components';
import PinterestIcon from '@material-ui/icons/Pinterest';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import TextsmsIcon from '@material-ui/icons/Textsms';
import FaceIcon from '@material-ui/icons/Face';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function Header() {
    return (
        <Wrapper>
           <LogoWrapper>
                <IconButton>
                    <PinterestIcon />
                </IconButton>
           </LogoWrapper>
           <HomePageButton>
                <a href="/">Homepage</a>
           </HomePageButton>
           <FollowingButton>
                <a href="/">Followingpage</a>
           </FollowingButton>
           <SearchWrapper>
               <SearchBarWrapper>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <form>
                        <input type="text" />
                        <button type="submit" ></button>
                    </form>
               </SearchBarWrapper>
           </SearchWrapper>
           <IconsWrapper>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <IconButton>
                    <TextsmsIcon />
                </IconButton>
                <IconButton>
                    <FaceIcon />
                </IconButton>
                <IconButton>
                    <KeyboardArrowDownIcon />
                </IconButton>
           </IconsWrapper>
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 56px;
    padding: 12px 4px 4px 16px;
`
const LogoWrapper = styled.div`
.MuiSvgIcon-root {
    color: #e60023;
    font-size: 32px;
    cursor: pointer;
}
`
const HomeButtons = styled.div`
    display: flex;
    height: 48px;
    min-width: 123px;
    align-items: center;
    border-radius: 24px;
    cursor: pointer;
`

const HomePageButton = styled(HomeButtons)`
    background-color:rgb(17, 17, 17);

    a {
        text-decotation: none;
        color: white;
        font-wight: 700;
    }
`
const FollowingButton = styled(HomeButtons)`
    background-color: white;

    a {
        text-decotation: none;
        color: black;
        font-wight: 700;
    }

    :hover {
        background-color: #E1E1E1;
    }
`
const SearchWrapper = styled.div`
    flex: 1;    
`
const SearchBarWrapper = styled.div`
    background-color: #EFEFEF;
    display: flex;
    height: 48px;
    width: 100%;
    border-radius: 50px;
    border: none;
    padding-left: 10px

    form {
        display: flex;
        flex: 1;
    }

    form > input {
        background-color: transparent;
        border: none;
        width: 100%;
        margin-left: 5px;
        font-size: 16px;
    }

    form > button {
        display: none;
    }
`

const IconsWrapper = styled.div`


`