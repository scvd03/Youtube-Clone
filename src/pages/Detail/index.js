import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { parseCount } from '../../helpers';
import Video from '../../components/Detail/Video';
import * as S from './Detail.styled';
import Item from '../../components/Common/Item';

export default function Detail() {
  // TODO: 디테일 페이지에서 세로고침하면 에러 생긴다 막을 수 있는 방법은..?
  const { id, payload } = useSelector(state => state.selectedVideo);
  const { data } = useSelector(state => state.video);
  const { snippet, statistics, channelInfo } = payload;

  const channelTitle = channelInfo.snippet.title;
  const channelThumbnail = channelInfo.snippet.thumbnails.medium.url;
  const subscriberCount = channelInfo.statistics.subscriberCount;
  const [more, setMore] = useState(false);

  if (!snippet) return null;

  return (
    <S.Layout>
      <S.Content>
        <Video id={id} />
        <S.Info>
          <S.Title>{snippet.title}</S.Title>
          <S.ViewCount>조회수 {statistics.viewCount}회</S.ViewCount>
        </S.Info>
        <S.ChannelInfo>
          <div>
            <S.ChannelThumbnail src={channelThumbnail} alt={channelTitle} />
            <div>
              <S.ChannelTitle>{channelTitle}</S.ChannelTitle>
              <S.SubscriberCount>
                {parseCount(subscriberCount)}명
              </S.SubscriberCount>
            </div>
          </div>
          <S.Desc more={more}>{snippet.description}</S.Desc>
          <S.More onClick={() => setMore(!more)}>
            {more ? '숨기기' : '더보기'}
          </S.More>
        </S.ChannelInfo>
      </S.Content>
      <S.SideList>
        {data.map(video => (
          <Item key={video.id} video={video} />
        ))}
      </S.SideList>
    </S.Layout>
  );
}
