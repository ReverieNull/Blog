import {
  About,
  Exclamation,
  FriendshipLinks,
  Home,
  MessageBoard,
  Music,
  Other,
  PhotoAlbum,
  Refresh,
  TreeHollow
} from "./SvgList";

export const menuData = {
  header: {
    title: "梦游笔记",
    svg: Exclamation
  },
  body: [
    {
      text: "首页",
      svg: Home,
      click(frontmatter: any, navigateTo: Function) {
        navigateTo("/");
      }
    },
    {
      text: "关于我",
      svg: About,
      click(frontmatter: any, navigateTo: Function) {
        navigateTo("/about-me");
      }
    },
    {
      text: "其他",
      svg: Other,
      subMenu: [
        {
          text: "梦游记",
          svg: TreeHollow,
          click(frontmatter: any, navigateTo: Function) {
            console.log("梦游记");
          }
        },
    
      ]
    },
    {
      text: "友链",
      svg: FriendshipLinks,
      click(frontmatter: any, navigateTo: Function) {}
    },
    {
      text: "音乐",
      svg: Music,
      click(frontmatter: any, navigateTo: Function) {}
    },
    {
      text: "相册",
      svg: PhotoAlbum,
      click(frontmatter: any, navigateTo: Function) {}
    }
  ],
  footer: {
    copy: true,
    refresh: true
  }
};