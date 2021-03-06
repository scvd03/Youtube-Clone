import {
  BsSearch,
  BsHouseDoorFill,
  BsMicFill,
  BsCollectionPlay,
  BsCameraVideoFill,
  BsFillBellFill,
  BsPeopleCircle,
  BsGrid3X3Gap,
  BsList,
  BsFillFolderFill,
} from 'react-icons/bs';

import { ImPlay } from 'react-icons/im';

export const ROUTES = {
  home: '/',
  search: '/search',
  detail: '/detail',
};
export const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const icons = {
  유투브: ImPlay(),
  검색: BsSearch(),
  마이크: BsMicFill(),
  녹화: BsCameraVideoFill(),
  알림: BsFillBellFill(),
  유저: BsPeopleCircle(),
  앱: BsGrid3X3Gap(),
  햄버거: BsList(),
  홈: BsHouseDoorFill(),
  구독: BsCollectionPlay(),
  보관함: BsFillFolderFill(),
};
