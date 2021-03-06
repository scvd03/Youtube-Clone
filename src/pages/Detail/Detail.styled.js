import styled, { css } from 'styled-components';

export const Layout = styled.div`
  display: flex;

  ${({ theme }) => theme.media.laptop`
      flex-direction: column;
  `}
`;

export const Content = styled.div`
  position: relative;
  overflow: hidden;
  flex: 3;
  padding: 2rem;
`;

export const Info = styled.div`
  margin: 2rem 0;
  padding-bottom: 2rem;
  border-bottom: 2px solid #333;
`;

export const Title = styled.h1`
  width: 100%;
  font-size: 2rem;
`;

export const ViewCount = styled.span`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.subTextColor};
`;
export const ChannelInfo = styled.div`
  & > *:first-child {
    display: flex;
    align-items: center;
  }
`;
export const ChannelThumbnail = styled.img`
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
  border-radius: 50%;
  object-fit: cover;
`;
export const ChannelTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.3rem;
`;
export const SubscriberCount = styled.span`
  font-size: 1.3rem;
`;

// BUG: 가끔씩 깨짐
export const Desc = styled.pre`
  position: relative;
  font-size: 1.4rem;
  margin: 2rem 0;
  width: 50%;
  overflow-x: hidden;

  ${({ more }) =>
    !more &&
    css`
      height: 10rem;
      overflow-y: hidden;
    `}
`;

export const More = styled.a`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.subTextColor};
  cursor: pointer;
`;

export const SideList = styled.div`
  height: 100vh;
  overflow-y: auto;
  flex: 1;
  padding: 1.5rem;
  padding-left: 0;
`;
