import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "vue简介",
        icon: "pen-to-square",
        prefix: "vue简介/",
        children: [
          { text: "vue简介_1", icon: "pen-to-square", link: "1" },
          { text: "vue简介_2", icon: "pen-to-square", link: "2" },
          "3"
        ],
      },
      
      { text: "git_教程", icon: "pen-to-square", link: "git_use" },
      { text: "大前端", icon: "pen-to-square", link: "大前端" },
      // "tomato",
      // "strawberry",
    ],
  },
]);
