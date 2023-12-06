import React from "react";

import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiHanger } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiYoutubegaming } from "react-icons/si";

export const categories = [
  { name: "New", icon: <AiFillHome />, type: "home" },
  { name: "Trending", icon: <MdLocalFireDepartment />, type: "category" },
  { name: "JavaScript", icon: <IoLogoJavascript />, type: "category" },
  { name: "ReactJS", icon: <FaReact />, type: "category" },
  { name: "Music", icon: <CgMusicNote />, type: "category" },
  { name: "Films", icon: <FiFilm />, type: "category" },
  { name: "Live", icon: <MdLiveTv />, type: "category" },
  { name: "Gaming", icon: <SiYoutubegaming />, type: "category" },
  { name: "News", icon: <ImNewspaper />, type: "category" },
  { name: "Sports", icon: <GiDiamondTrophy />, type: "category" },
  { name: "Learning", icon: <RiLightbulbLine />, type: "category" },
  {
    name: "Fashion & beauty",
    icon: <GiHanger />,
    type: "category",
    divider: true,
  },
  { name: "Settings", icon: <FiSettings />, type: "menu" },
  { name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
  { name: "Help", icon: <FiHelpCircle />, type: "menu" },
  { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
];

export const ytData=[
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/xrMXuR2ARUKOvvMKeB2XAFMt6rchyUkiEn2G2J1DtWjL5zVxKW9H4jlkQdBdBoqTi_WmU5_dGQ=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@FoxNews",
              "channelId": "UCXIJgqnII2ZOINSWNOGFThA",
              "title": "Fox News"
          },
          "badges": [
              "New",
              "CC"
          ],
          "descriptionSnippet": "Former Clinton pollster Doug Schoen and FOX News political analyst Gianno Caldwell break down inflation concerns, a think ...",
          "isLiveNow": false,
          "lengthSeconds": 424,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/5vIy944N_pc/mqdefault_6s.webp?du=3000&sqp=CLr9pasG&rs=AOn4CLCiY6hbv6q-jFvTf1uwuW-R_3rn5w",
                  "width": 320
              }
          ],
          "publishedTimeText": "2 days ago",
          "stats": {
              "views": 255595
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/5vIy944N_pc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIV6R7NS60vOh--CfxovtXnhtf8g",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/5vIy944N_pc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDPbz1VL1-AJY9OmOMpqoMQ9aSmjw",
                  "width": 720
              }
          ],
          "title": "Biden blasted for finding new 'scapegoat'",
          "videoId": "5vIy944N_pc"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/ytc/APkrFKaPk36XsYQxebxZrHEUR-3Z30LgpAJaYTeH7dJKpg=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@FoxBusiness",
              "channelId": "UCCXoCcu9Rp7NPbTzIvogpZg",
              "title": "Fox Business"
          },
          "badges": [
              "New",
              "CC"
          ],
          "descriptionSnippet": "Legal spokeswoman for Donald J. Trump, Alina Habba, gives an update on the the former president's New York civil fraud trial on ...",
          "isLiveNow": false,
          "lengthSeconds": 292,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/kTlC2bdO62Y/mqdefault_6s.webp?du=3000&sqp=CKaDpqsG&rs=AOn4CLB3ePCEDTW0rpXpnqpLwnc0D7MrRA",
                  "width": 320
              }
          ],
          "publishedTimeText": "2 days ago",
          "stats": {
              "views": 609335
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/kTlC2bdO62Y/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBL5jMvAFZdjvVwKCeddLrDx-Pwmw",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/kTlC2bdO62Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQaZ92S2XF9xAT0evy4j4LFL9W_w",
                  "width": 720
              }
          ],
          "title": "Trump attorney: New Yorkers should be afraid",
          "videoId": "kTlC2bdO62Y"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/ytc/APkrFKZdXO4D0ioO3jNWqmsORIFs7DPVW_mfCeeqO1_9dQ=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@CNBCtelevision",
              "channelId": "UCrp_UI8XtuYfpiqluWLD7Lw",
              "title": "CNBC Television"
          },
          "badges": [
              "New",
              "CC"
          ],
          "descriptionSnippet": "Elon Musk sits down with Andrew Ross Sorkin at the 'New York TImes' DealBook Summit' on a wide-ranging interview including ...",
          "isLiveNow": false,
          "lengthSeconds": 218,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/U_M_uvDChJQ/mqdefault_6s.webp?du=3000&sqp=COz9pasG&rs=AOn4CLDTEIFBFzpN-ln0tvQiTsZ__HXlow",
                  "width": 320
              }
          ],
          "publishedTimeText": "1 day ago",
          "stats": {
              "views": 1781332
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/U_M_uvDChJQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA0RE1yderW1qUzdde3bxNP79PqRA",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/U_M_uvDChJQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAdfnRk4xaNGzZXuKpJLA6_aIQTQQ",
                  "width": 720
              }
          ],
          "title": "Elon Musk to advertisers who are trying to ‘blackmail’ him: ‘Go f--- yourself’",
          "videoId": "U_M_uvDChJQ"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/ytc/APkrFKZkd-2W-clgFg0HNVMjSrFxhHjFk_6GJeuif6Lm9xg=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@msnbc",
              "channelId": "UCaXkIU1QidjPwiAYu6GcHjg",
              "title": "MSNBC"
          },
          "badges": [
              "New",
              "CC"
          ],
          "descriptionSnippet": "An appeals court has reinstated the gag order against former President Trump in his New York civil fraud trial. MSNBC legal ...",
          "isLiveNow": false,
          "lengthSeconds": 147,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/RJkRscUflp0/mqdefault_6s.webp?du=3000&sqp=CIftpasG&rs=AOn4CLCkU1ELBjbVSX5TGOZwndBUJbOxDQ",
                  "width": 320
              }
          ],
          "publishedTimeText": "14 hours ago",
          "stats": {
              "views": 473033
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/RJkRscUflp0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLClfQYi5iDLoV3FmH385vzyjrQv0w",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/RJkRscUflp0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAAWNc2Jsc9n0mG3LBKtQ9jBqNWJA",
                  "width": 720
              }
          ],
          "title": "New York appeals court reinstates Trump gag order in civil fraud trial",
          "videoId": "RJkRscUflp0"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/ytc/APkrFKZdXO4D0ioO3jNWqmsORIFs7DPVW_mfCeeqO1_9dQ=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@CNBCtelevision",
              "channelId": "UCrp_UI8XtuYfpiqluWLD7Lw",
              "title": "CNBC Television"
          },
          "badges": [
              "New",
              "CC"
          ],
          "descriptionSnippet": "Elon Musk sits down with Andrew Ross Sorkin at the 'New York TImes' DealBook Summit' on a wide-ranging interview including ...",
          "isLiveNow": false,
          "lengthSeconds": 336,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/sctgA2qa-rA/mqdefault_6s.webp?du=3000&sqp=CMDQpasG&rs=AOn4CLDX0ubVxipd0rnLOT8Hvq9DC7QJsg",
                  "width": 320
              }
          ],
          "publishedTimeText": "1 day ago",
          "stats": {
              "views": 452896
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/sctgA2qa-rA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5cMKpyoJSEugJyZ6_nTwvjNi6dw",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/sctgA2qa-rA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA0V4q45gr_8L-iOJLZV6iIf_OKSg",
                  "width": 720
              }
          ],
          "title": "Elon Musk: I disagree with the idea of unions",
          "videoId": "sctgA2qa-rA"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/JSS6ykU01xhBZd_sjDQrEmefuslfSPE0FNyVuw_QvRpn_J6SNX5aP0YGfw0h-wElil_PUw30O2o=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@wsj",
              "channelId": "UCK7tptUDHh-RYDsdxO1-5QQ",
              "title": "The Wall Street Journal"
          },
          "badges": [
              "New",
              "CC"
          ],
          "descriptionSnippet": "Prompt engineering—getting the best answers of a generative AI chatbot like ChatGPT—is a new type of job. Large language ...",
          "isLiveNow": false,
          "lengthSeconds": 299,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/whkge1rEamU/mqdefault_6s.webp?du=3000&sqp=CMnppasG&rs=AOn4CLDE4zc1ZiYhZssHK1-usx9w9EpVdA",
                  "width": 320
              }
          ],
          "publishedTimeText": "1 day ago",
          "stats": {
              "views": 66488
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/whkge1rEamU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDGTO_N9k7UBlHii3fliZaQ6t2s_A",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/whkge1rEamU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDpfaEMqhTCRmSiWr_QhDliDgRZ3w",
                  "width": 720
              }
          ],
          "title": "AI’s Hottest New Job Pays Up to $250K a Year. So I Applied.  | WSJ",
          "videoId": "whkge1rEamU"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/GjDLYFGF4IQaUobUK-6q3nOsU4o8fRMl4XgVipPWRqdRVt61s2LqgnbBXu3-qYL4Ab2xsfVo=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@NBCNews",
              "channelId": "UCeY0bbntWzzVIaj2z3QigXg",
              "title": "NBC News"
          },
          "badges": [
              "New",
              "CC"
          ],
          "descriptionSnippet": "An appeals court has reinstated the gag order against former President Trump in his New York civil fraud trial. NBC News' Ken ...",
          "isLiveNow": false,
          "lengthSeconds": 131,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/5uKMCQBeZh0/mqdefault_6s.webp?du=3000&sqp=CMLdpasG&rs=AOn4CLB8tICvVT1bSBcoYbvJxUK8WwVdiA",
                  "width": 320
              }
          ],
          "publishedTimeText": "10 hours ago",
          "stats": {
              "views": 136657
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/5uKMCQBeZh0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLABbYL9lefR6za7JqZkTo-5n04Fug",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/5uKMCQBeZh0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAkRZow2S6SxLAXc5llezxNlIfEFQ",
                  "width": 720
              }
          ],
          "title": "Appeals court reinstates Trump gag order in New York civil fraud case",
          "videoId": "5uKMCQBeZh0"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/ytc/APkrFKZkd-2W-clgFg0HNVMjSrFxhHjFk_6GJeuif6Lm9xg=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@msnbc",
              "channelId": "UCaXkIU1QidjPwiAYu6GcHjg",
              "title": "MSNBC"
          },
          "badges": [
              "New",
              "CC"
          ],
          "descriptionSnippet": "MSNBC's Lawrence O'Donnell analyzes new filings from Donald Trump's criminal defense team in Special Counsel Jack Smith's ...",
          "isLiveNow": false,
          "lengthSeconds": 442,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/XTsMpOeNapQ/mqdefault_6s.webp?du=3000&sqp=CJTupasG&rs=AOn4CLBwyHtBpwNm1bbb7fLfnOY9u3ixGA",
                  "width": 320
              }
          ],
          "publishedTimeText": "2 days ago",
          "stats": {
              "views": 234191
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/XTsMpOeNapQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAR3tcPe0CNrFrSpJCGK5_F-QtYWg",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/XTsMpOeNapQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAR2Eoi8Yr3-xj7UDrc8NqnBNX84A",
                  "width": 720
              }
          ],
          "title": "Lawrence: Liz Cheney’s new book reveals what a potential witness might tell Jack Smith",
          "videoId": "XTsMpOeNapQ"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/ytc/APkrFKZkd-2W-clgFg0HNVMjSrFxhHjFk_6GJeuif6Lm9xg=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@msnbc",
              "channelId": "UCaXkIU1QidjPwiAYu6GcHjg",
              "title": "MSNBC"
          },
          "badges": [
              "New",
              "CC"
          ],
          "descriptionSnippet": "The Morning Joe panel digs into Liz Cheney's new book, “Oath and Honor,” which is set to be released on Dec. 5. Cheney ...",
          "isLiveNow": false,
          "lengthSeconds": 195,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/cE6Mh_v65IE/mqdefault_6s.webp?du=3000&sqp=CI_ipasG&rs=AOn4CLDga-UNLlVfT-FzcRyClEx8muadkg",
                  "width": 320
              }
          ],
          "publishedTimeText": "1 day ago",
          "stats": {
              "views": 56979
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/cE6Mh_v65IE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC0ICtcgYb-vo0bLsFXy_UVfKfX1A",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/cE6Mh_v65IE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDLur8yyS5p5_HFdNXtwa_vODCdxQ",
                  "width": 720
              }
          ],
          "title": "'Trump's not eating': New Cheney book reveals why McCarthy visited Trump after Jan. 6 ",
          "videoId": "cE6Mh_v65IE"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/ytc/APkrFKaItP7bB1fxVpOdprHfDpyTm3GlPcvRNQU4iRt73w=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@ForbesBreakingNews",
              "channelId": "UCg40OxZ1GYh3u3jBntB6DLg",
              "title": "Forbes Breaking News"
          },
          "badges": [
              "New"
          ],
          "descriptionSnippet": "On the House floor, Rep. Marjorie Taylor Greene (R-GA) introduced new articles of impeachment against Homeland Security ...",
          "isLiveNow": false,
          "lengthSeconds": 552,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/5Mkq9x_Guvo/mqdefault_6s.webp?du=3000&sqp=CJzZpasG&rs=AOn4CLABrrO5CzYeFUWP2chGbVQHpcT40A",
                  "width": 320
              }
          ],
          "publishedTimeText": "1 day ago",
          "stats": {
              "views": 94344
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/5Mkq9x_Guvo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDsU3Jx9pRorogGFyFeg8toKWacZg",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/5Mkq9x_Guvo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCMvxPclDDS0I2O1-D-7cqBsI8WLg",
                  "width": 720
              }
          ],
          "title": "BREAKING NEWS: Marjorie Taylor Greene Introduces New Articles Of Impeachment For Alejandro Mayorkas",
          "videoId": "5Mkq9x_Guvo"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/3NpeFRulmo_3-9KmBZJ1dKqa0aUnB2tRHy00nISAUlXUmVLt9vXEYI13c-_mwJvvq-A6WEVpxjw=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@PastorJerryEze",
              "channelId": "UCLg4NCAJxhIvD4IRV__LOFg",
              "title": "Pastor Jerry Eze"
          },
          "badges": [
              "LIVE",
              "New"
          ],
          "descriptionSnippet": "New Season Prophetic Prayers and Declarations [NSPPD] || 1ST DECEMBER 2023 Music by Juan Sanchez - When Daybreak ...",
          "isLiveNow": true,
          "lengthSeconds": null,
          "movingThumbnails": null,
          "publishedTimeText": null,
          "stats": {
              "viewers": 174883
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/KjXB3KNSoyo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBtpQqEkuuTB-txhsAnyXv2ZdnOhA",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/KjXB3KNSoyo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBfgPv32pQRKOGcUARD9yZJc9cCXQ",
                  "width": 720
              }
          ],
          "title": "SPECIAL NEW MONTH PROPHETIC PRAYERS FOR DECEMBER || NSPPD || 1ST DECEMBER 2023",
          "videoId": "KjXB3KNSoyo"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/lsINJGC2TEzUY2CfocaTnP2gLrsgUn2vw8Q3SAV7cv_S-sNYijIdwrr79SA-TluwrbEJOItYsF8=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [],
              "canonicalBaseUrl": "/@trailmater",
              "channelId": "UC7gdYr2K4ubgydDnmYWl_hw",
              "title": "Trail Mater"
          },
          "badges": [
              "New"
          ],
          "descriptionSnippet": "We got a call for a bronco that had hit the transmission pan on a rock and lost all it's fluid. So we headed out after it. We took the ...",
          "isLiveNow": false,
          "lengthSeconds": 1140,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/P-6Rmhmmx-E/mqdefault_6s.webp?du=3000&sqp=CLLQpasG&rs=AOn4CLAxW-cxU_wd0pTTKPYlnE165UM6Ew",
                  "width": 320
              }
          ],
          "publishedTimeText": "12 hours ago",
          "stats": {
              "views": 94738
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/P-6Rmhmmx-E/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB9Ny-C64_4_Qp4DJHB_SsU2s7CBg",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/P-6Rmhmmx-E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBnLjptZ42NrrfbdMROmRZiQjhH6Q",
                  "width": 720
              }
          ],
          "title": "Big D Gets A New Bronco",
          "videoId": "P-6Rmhmmx-E"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/Pwi9ymi3gnQ5aLfrBj5w3tzxEGhF_ta837yQzTpy_5kVFFdu76DOQI58JobptmYjTw6Gh1EjPA=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@newheightshow",
              "channelId": "UCVRm2Ho8cL3lvWDyp2ayuFw",
              "title": "New Heights"
          },
          "badges": [
              "New"
          ],
          "descriptionSnippet": "92%ers we are back with another episode of New Heights presented by our friends at Experian and the all-new Experian Debit ...",
          "isLiveNow": false,
          "lengthSeconds": 6279,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/4YfZkq4fiqs/mqdefault_6s.webp?du=3000&sqp=CLfqpasG&rs=AOn4CLA2iu787hALht6UYxkag2LfQtdXvw",
                  "width": 320
              }
          ],
          "publishedTimeText": "1 day ago",
          "stats": {
              "views": 1213365
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/4YfZkq4fiqs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB4EQTHkIKtma9cbCyFlRYgrSH_gg",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/4YfZkq4fiqs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBXer0iGPCNMnUJO_vV_IbHU2X1RA",
                  "width": 720
              }
          ],
          "title": "Jalen's Walks Off, Chiefs Offense Bounces Back and \"The Gang Starts a Bidding War\" | Ep 66",
          "videoId": "4YfZkq4fiqs"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/DJk-KusYMYc1pfoofmQC3dshxT4ttV8jhQUleTtxE9O2SnKmgoLws2F2sIhnBfjKGNt4D_95=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@RabbitholebdSports",
              "channelId": "UCNU0Vv6U1xZS82cIQrgDeqw",
              "title": "Rabbitholebd Sports"
          },
          "badges": [
              "LIVE",
              "New"
          ],
          "descriptionSnippet": "Bangladesh vs New zealand | 1st Test | Day 4 | LIVE | New Zealand tour of Bangladesh 2023 Series: New Zealand tour of ...",
          "isLiveNow": true,
          "lengthSeconds": null,
          "movingThumbnails": null,
          "publishedTimeText": null,
          "stats": {
              "viewers": 15023
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/jAEYuv20Iyk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCiYwl0mrEAp6j75Neb6MC5xisjmA",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/jAEYuv20Iyk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCq7vxcdHoDXd8rjcDq6MSwPt6-eg",
                  "width": 720
              }
          ],
          "title": "Bangladesh vs New zealand | 1st Test | Day 4 | LIVE",
          "videoId": "jAEYuv20Iyk"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/zJtLviP77uKqO_KWlr2b4WHF8CpQ_XG0pF5uofDPAadUPJcQkoy55un_7qlCyikVJePjmFfL1kE=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [],
              "canonicalBaseUrl": "/@LiveMusicRadio",
              "channelId": "UC0f4WJAjYdwl4XYHz-6FhyQ",
              "title": "Radio Hits Music"
          },
          "badges": [
              "LIVE"
          ],
          "descriptionSnippet": "Hits Radio 1 - Top Hits 2023 - Pop Music Playlist 2023 - New Songs 2023 - Top Music 2023 New Popular Songs 2023 - Pop Hits ...",
          "isLiveNow": true,
          "lengthSeconds": null,
          "movingThumbnails": null,
          "publishedTimeText": null,
          "stats": {
              "viewers": 1031
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/uNd5kvrGHjk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvi8gnYGnOBi_O4PuYvQKVk8OUIg",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/uNd5kvrGHjk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAzqsvo25-saCJ8tR6igRNnl0ApvQ",
                  "width": 720
              }
          ],
          "title": "Hits Radio 1 Top Hits 2023 New Popular Songs - Pop Music 2023 Best English Songs 2023 New Music 2023",
          "videoId": "uNd5kvrGHjk"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/f6BWKFJa-1DcnqCIqiGCqNl2daN4rSo21UogJbKcmPC6h_VkvlF3TQ1rF-I6hN66hZ6Dfjb-bA=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@souravjoshivlogs7028",
              "channelId": "UCjvgGbPPn-FgYeguc5nxG4A",
              "title": "Sourav Joshi Vlogs"
          },
          "badges": [
              "New",
              "4K"
          ],
          "descriptionSnippet": "Folllow me on Instagram- https://www.instagram.com/souravjoshivlogs/?hl=en I hope you enjoyed this video hit likes. And do ...",
          "isLiveNow": false,
          "lengthSeconds": 523,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/F2JyA3QEoTs/mqdefault_6s.webp?du=3000&sqp=CPTdpasG&rs=AOn4CLDJt36K0z65noQr_KFHnhaj0VRiJg",
                  "width": 320
              }
          ],
          "publishedTimeText": "4 hours ago",
          "stats": {
              "views": 1076680
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/F2JyA3QEoTs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDgGpSvkqCjGIMVncGhgtLq_Ari1w",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/F2JyA3QEoTs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDxm_EpItaC3fQvT7TBmkr2ymyxvA",
                  "width": 720
              }
          ],
          "title": "Ye Hai Mummy Papa Ka Room 😍 New Ghar Mein",
          "videoId": "F2JyA3QEoTs"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/jBY4zm0dAQsm25bsFqpO-kjC_cJl5rHF5nqbQEMAG08FBZeYhGXsCwCV3QYdMbrWi7q5rRiTqw=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@AnandAudio",
              "channelId": "UCLtCejNl8eAg4PO_9lf2TIg",
              "title": "Anand Audio"
          },
          "badges": [
              "New",
              "4K"
          ],
          "descriptionSnippet": "Presenting the KAATERA New Announcement Starring: Challenging ⭐\" Darshan, Radhana Ram, Jagapathi Babu & Others ...",
          "isLiveNow": false,
          "lengthSeconds": 62,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/lVuuwNQg74M/mqdefault_6s.webp?du=3000&sqp=CP-CpqsG&rs=AOn4CLBauoaPdnVOqspXy7vI7VJWbZSrxg",
                  "width": 320
              }
          ],
          "publishedTimeText": "1 day ago",
          "stats": {
              "views": 2149639
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/lVuuwNQg74M/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAjxghUAU3yk-E4F60VhCDd-xPrLg",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/lVuuwNQg74M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1zA-gnXbIyH5t5tTXrWuqLGh9Fw",
                  "width": 720
              }
          ],
          "title": "KAATERA New Announcement | Darshan | Tharun Kishore Sudhir | Rockline Venkatesh | V.Harikrishna",
          "videoId": "lVuuwNQg74M"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/CqhZc2-I1E-5PUuP2KNMcWLz1B74xJE5EitfXgf4hmHXDIL96-XH0mDRlNXznXTjJ7X7mg1Uog=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@Street_Dog_Pluto",
              "channelId": "UClQ3mKZEkYO2qqn5vcIZrFQ",
              "title": "Street Dog Pluto"
          },
          "badges": [
              "New"
          ],
          "descriptionSnippet": null,
          "isLiveNow": false,
          "lengthSeconds": 60,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/MPu17X8f0UQ/mqdefault_6s.webp?du=3000&sqp=CMjgpasG&rs=AOn4CLD6Mly7_uZn8tY_60QtRjRJHotLhg",
                  "width": 320
              }
          ],
          "publishedTimeText": "4 days ago",
          "stats": {
              "views": 5645248
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/MPu17X8f0UQ/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBtgiAAoAPigIMCAAQARhXIGEoZTAP&rs=AOn4CLAqF-9chGsLgqOQUgavCCVhzjZOnA",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/MPu17X8f0UQ/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBtgiAAoAPigIMCAAQARhXIGEoZTAP&rs=AOn4CLCTkAm7E8qRWRr-lWRkdxtHJO6ubg",
                  "width": 720
              }
          ],
          "title": "Bluetooth New Born Babies 🥹 | #325",
          "videoId": "MPu17X8f0UQ"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/Pwi9ymi3gnQ5aLfrBj5w3tzxEGhF_ta837yQzTpy_5kVFFdu76DOQI58JobptmYjTw6Gh1EjPA=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@newheightshow",
              "channelId": "UCVRm2Ho8cL3lvWDyp2ayuFw",
              "title": "New Heights"
          },
          "badges": [
              "New"
          ],
          "descriptionSnippet": "\"It's Always Sunny In Philadelphia\" stars Rob McElhenney and Kaitlin Olson stop by the show to break the news to Jason and ...",
          "isLiveNow": false,
          "lengthSeconds": 516,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/AuK3CECExmg/mqdefault_6s.webp?du=3000&sqp=CPDnpasG&rs=AOn4CLD3Zr4jA4US31FjO3ynbSwSHa6sKw",
                  "width": 320
              }
          ],
          "publishedTimeText": "10 hours ago",
          "stats": {
              "views": 56012
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/AuK3CECExmg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsw7HiYx5F05JGiu_iD_4TzNKUBQ",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/AuK3CECExmg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBGFr3y1DwTxhKX41oWNer3oyyhKg",
                  "width": 720
              }
          ],
          "title": "Rob McElhenney and Kaitlin Olson reveal real story behind $100k bid for Kylie Kelce Eagles jacket",
          "videoId": "AuK3CECExmg"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/Pwi9ymi3gnQ5aLfrBj5w3tzxEGhF_ta837yQzTpy_5kVFFdu76DOQI58JobptmYjTw6Gh1EjPA=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@newheightshow",
              "channelId": "UCVRm2Ho8cL3lvWDyp2ayuFw",
              "title": "New Heights"
          },
          "badges": [],
          "descriptionSnippet": "92%ers we are back with another episode of New Heights presented by our friends at Experian and the all-new Experian Debit ...",
          "isLiveNow": false,
          "lengthSeconds": 5104,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/hsCPJ6y9KRE/mqdefault_6s.webp?du=3000&sqp=CJHspasG&rs=AOn4CLAp4CftS9Lq-xAqOc0EZQ8mG6ukQQ",
                  "width": 320
              }
          ],
          "publishedTimeText": "2 weeks ago",
          "stats": {
              "views": 1830047
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/hsCPJ6y9KRE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjHShWCznLF4Bnp-8jXPL5H78QSQ",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/hsCPJ6y9KRE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDu-yP4ZNLhXhQG09rUfHTJBFkzJQ",
                  "width": 720
              }
          ],
          "title": "The Sexiest Batman Alive, The Guy on the Chiefs, and A Kelce Duet | Ep 64",
          "videoId": "hsCPJ6y9KRE"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/ytc/APkrFKZkd-2W-clgFg0HNVMjSrFxhHjFk_6GJeuif6Lm9xg=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@msnbc",
              "channelId": "UCaXkIU1QidjPwiAYu6GcHjg",
              "title": "MSNBC"
          },
          "badges": [
              "New",
              "CC"
          ],
          "descriptionSnippet": "An appeals court has reinstated the gag order against former President Trump in his New York civil fraud trial. MSNBC legal ...",
          "isLiveNow": false,
          "lengthSeconds": 147,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/RJkRscUflp0/mqdefault_6s.webp?du=3000&sqp=CIftpasG&rs=AOn4CLCkU1ELBjbVSX5TGOZwndBUJbOxDQ",
                  "width": 320
              }
          ],
          "publishedTimeText": "14 hours ago",
          "stats": {
              "views": 473033
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/RJkRscUflp0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLClfQYi5iDLoV3FmH385vzyjrQv0w",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/RJkRscUflp0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAAWNc2Jsc9n0mG3LBKtQ9jBqNWJA",
                  "width": 720
              }
          ],
          "title": "New York appeals court reinstates Trump gag order in civil fraud trial",
          "videoId": "RJkRscUflp0"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/Pwi9ymi3gnQ5aLfrBj5w3tzxEGhF_ta837yQzTpy_5kVFFdu76DOQI58JobptmYjTw6Gh1EjPA=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@newheightshow",
              "channelId": "UCVRm2Ho8cL3lvWDyp2ayuFw",
              "title": "New Heights"
          },
          "badges": [],
          "descriptionSnippet": "92%ers we are back with another episode of New Heights presented by our friends at Experian and the all-new Experian Debit ...",
          "isLiveNow": false,
          "lengthSeconds": 5323,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/oberYpE6MEQ/mqdefault_6s.webp?du=3000&sqp=COyHpqsG&rs=AOn4CLCHNyt0kZOz6zFlHGNn5VBJNA3ivg",
                  "width": 320
              }
          ],
          "publishedTimeText": "8 days ago",
          "stats": {
              "views": 1542703
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/oberYpE6MEQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDogduDNhnXlem6Ue8soAWgoVJjw",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/oberYpE6MEQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhXKcjSeUV7m0Qm0kEmUMUzvrn_A",
                  "width": 720
              }
          ],
          "title": "Jason’s Late Birthday Gift, Travis’ Old Tweets and Thanksgiving Sides Power Ranking | Ep 65",
          "videoId": "oberYpE6MEQ"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/WXCclpzxtBJhIAxEDI6S8Ald8eFXzm6U8UwBG1BgFFsTvGg0N0NpVvWzeJDaKikm58GRGqZ1Iw=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@MeidasTouch",
              "channelId": "UC9r9HYFxEQOBXSopFS61ZWg",
              "title": "MeidasTouch"
          },
          "badges": [
              "New"
          ],
          "descriptionSnippet": "Michael Cohen reacts to Trump's Gag order being reinstated in New York as a court appointed monitor in the same trial, informed ...",
          "isLiveNow": false,
          "lengthSeconds": 473,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/0QoXezKoihY/mqdefault_6s.webp?du=3000&sqp=CPTQpasG&rs=AOn4CLBmhLeWWP0ga9bm-ack5yPZ0Se1fg",
                  "width": 320
              }
          ],
          "publishedTimeText": "1 hour ago",
          "stats": {
              "views": 22001
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/0QoXezKoihY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzjmTeJlffQTWT8B4XPgInl_P9rw",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/0QoXezKoihY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBnPW0M7s1d_sUlQ8w01qr2p6IHdA",
                  "width": 720
              }
          ],
          "title": "Trump gets SHUT UP by Court and Caught RED-HANDED, Michael Cohen STRIKES BACK",
          "videoId": "0QoXezKoihY"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/ytc/APkrFKZkd-2W-clgFg0HNVMjSrFxhHjFk_6GJeuif6Lm9xg=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@msnbc",
              "channelId": "UCaXkIU1QidjPwiAYu6GcHjg",
              "title": "MSNBC"
          },
          "badges": [
              "New",
              "CC"
          ],
          "descriptionSnippet": "An apparent court clerical error briefly revealed sealed documents containing communications by Rep. Scott Perry that are of ...",
          "isLiveNow": false,
          "lengthSeconds": 519,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/qDvfZMxFlpc/mqdefault_6s.webp?du=3000&sqp=CJCFpqsG&rs=AOn4CLDQ5AVPN915nO31Tk-c6QU_giLKDw",
                  "width": 320
              }
          ],
          "publishedTimeText": "1 hour ago",
          "stats": {
              "views": 10212
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/qDvfZMxFlpc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB0u3jm6fJBM7ozO07UzJ4RqTTxPA",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/qDvfZMxFlpc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbgZxknYB26lM2ZL0wx2a4GJZM3w",
                  "width": 720
              }
          ],
          "title": "Rep. Perry's central role in Trump's election scheme exposed by 'clerical error'",
          "videoId": "qDvfZMxFlpc"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/ytc/APkrFKaSUpNH2fg37el1XXJLW8AMUKFsRkSm4WJ95XB3=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@nvlteam",
              "channelId": "UCsxO4mqNxXDz6zLc_BqQxNg",
              "title": "NVL Team"
          },
          "badges": [
              "New"
          ],
          "descriptionSnippet": null,
          "isLiveNow": false,
          "lengthSeconds": 2073,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/Fxur5Zxw6AQ/mqdefault_6s.webp?du=3000&sqp=CMTgpasG&rs=AOn4CLDl9pU5lqsxS4ofka6_1WwlRrFO4Q",
                  "width": 320
              }
          ],
          "publishedTimeText": "3 hours ago",
          "stats": {
              "views": 34771
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/Fxur5Zxw6AQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB0Rb3jdpm3yzgKEDahJdpeo1UtBw",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/Fxur5Zxw6AQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD8BUNf1i_bUxhh1lFT-euYS88V3A",
                  "width": 720
              }
          ],
          "title": "Gutfeld! 11/30/23 [ Full HD ] | BREAKING NEWS TODAY November 30, 2023",
          "videoId": "Fxur5Zxw6AQ"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/xrMXuR2ARUKOvvMKeB2XAFMt6rchyUkiEn2G2J1DtWjL5zVxKW9H4jlkQdBdBoqTi_WmU5_dGQ=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@FoxNews",
              "channelId": "UCXIJgqnII2ZOINSWNOGFThA",
              "title": "Fox News"
          },
          "badges": [
              "New",
              "CC"
          ],
          "descriptionSnippet": "FOX News contributor Douglas Murray tells 'The Story' that Hamas is purposefully keeping some released hostages' family ...",
          "isLiveNow": false,
          "lengthSeconds": 250,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/yMIbU-meRcI/mqdefault_6s.webp?du=3000&sqp=CJrxpasG&rs=AOn4CLDFMZt86ri_Xa8aC2Ivjl0FhJpqqw",
                  "width": 320
              }
          ],
          "publishedTimeText": "31 minutes ago",
          "stats": {
              "views": 4305
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/yMIbU-meRcI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJ_AbMeatmBPYSBKSvqK242LhNLw",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/yMIbU-meRcI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDh-D0evgv3AqbWtpGGlNjvj9P3ig",
                  "width": 720
              }
          ],
          "title": "‘UTTER TORTURE’: Israel ‘cannot live beside Hamas’",
          "videoId": "yMIbU-meRcI"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/UEbZ5N5HZ3JIGD-_eiAAGHlCkHlQwb-f4_gxVsG2vJa4a5s5GKHTKCkdc1SXtunxYn3qEAD1=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [],
              "canonicalBaseUrl": "/@ABC11WTVD",
              "channelId": "UCe7cIhm4_RWsThRzBCXtmOQ",
              "title": "ABC11"
          },
          "badges": [
              "New",
              "CC"
          ],
          "descriptionSnippet": "Fayetteville Police Chief Kemberle Braden called a hastily arranged news conference Wednesday night to discuss \"an ongoing ...",
          "isLiveNow": false,
          "lengthSeconds": 481,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/21bgRQNwH-M/mqdefault_6s.webp?du=3000&sqp=CPKDpqsG&rs=AOn4CLBxEjdhBOvtlEupQT37TIG901JHrw",
                  "width": 320
              }
          ],
          "publishedTimeText": "10 hours ago",
          "stats": {
              "views": 116
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/21bgRQNwH-M/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARg_IFYoZTAP&rs=AOn4CLD0NSc8hW_p_o_q2iVb0G0wMgsO1g",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/21bgRQNwH-M/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARg_IFYoZTAP&rs=AOn4CLDOY7C9wv-xurRVSJNuQVz1O0NMiQ",
                  "width": 720
              }
          ],
          "title": "Press Conference: Fayetteville police officer facing charges that include not doing her job",
          "videoId": "21bgRQNwH-M"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/xrMXuR2ARUKOvvMKeB2XAFMt6rchyUkiEn2G2J1DtWjL5zVxKW9H4jlkQdBdBoqTi_WmU5_dGQ=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@FoxNews",
              "channelId": "UCXIJgqnII2ZOINSWNOGFThA",
              "title": "Fox News"
          },
          "badges": [
              "New",
              "CC"
          ],
          "descriptionSnippet": "Florida Gov. Ron DeSantis and California Gov. Gavin Newsom debate the homeless crisis on 'Hannity.' #foxnews #fox #hannity ...",
          "isLiveNow": false,
          "lengthSeconds": 343,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/V4j2tmOtZng/mqdefault_6s.webp?du=3000&sqp=CKCEpqsG&rs=AOn4CLA6O8VGKrlHeFiv6FQJxrjNheAi1g",
                  "width": 320
              }
          ],
          "publishedTimeText": "1 hour ago",
          "stats": {
              "views": 14079
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/V4j2tmOtZng/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDqP1OTiptonc5uqixcsqwfosyN5g",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/V4j2tmOtZng/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDVECGOFfA0lH6slp5UZxo03GaJ_g",
                  "width": 720
              }
          ],
          "title": "Ron DeSantis: California empowers lawlessness and drug use",
          "videoId": "V4j2tmOtZng"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/ytc/APkrFKYvwOZnfU85Z4bsKWfb6K6pof_ydV2z_V3pk9Xhe8M=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@StephenGardner1",
              "channelId": "UC3VlRtY0ARsTRR5Eq8QE1Yg",
              "title": "Stephen Gardner"
          },
          "badges": [
              "New"
          ],
          "descriptionSnippet": "President Joe Biden just received some backlash after he jokingly bragged that he could “blow up the world” during a visit to the ...",
          "isLiveNow": false,
          "lengthSeconds": 622,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/2dcHWXlZr8s/mqdefault_6s.webp?du=3000&sqp=CKnEpasG&rs=AOn4CLBVRF4TdltuD3U1RfqaUWySh2M80A",
                  "width": 320
              }
          ],
          "publishedTimeText": "2 hours ago",
          "stats": {
              "views": 23773
          },
          "thumbnails": [
              {
                  "height": 270,
                  "url": "https://i.ytimg.com/vi/2dcHWXlZr8s/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB3KH7AZuG1sYY_UKAgBrupXcL5sA",
                  "width": 480
              }
          ],
          "title": "Must see: Trump RAGES against court JUDGE!",
          "videoId": "2dcHWXlZr8s"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/WXCclpzxtBJhIAxEDI6S8Ald8eFXzm6U8UwBG1BgFFsTvGg0N0NpVvWzeJDaKikm58GRGqZ1Iw=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@MeidasTouch",
              "channelId": "UC9r9HYFxEQOBXSopFS61ZWg",
              "title": "MeidasTouch"
          },
          "badges": [
              "New"
          ],
          "descriptionSnippet": "MeidasTouch host Ben Meiselas reports on the debate between California Democratic Governor Gavin Newsom and Florida ...",
          "isLiveNow": false,
          "lengthSeconds": 1286,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/HezhVpAJIhU/mqdefault_6s.webp?du=3000&sqp=CK-ApqsG&rs=AOn4CLCLxZeruTx2Z_Wbs6pSVKeoyGvtug",
                  "width": 320
              }
          ],
          "publishedTimeText": "2 hours ago",
          "stats": {
              "views": 156874
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/HezhVpAJIhU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDMoVmwsn56huLHKJjYPJjgSPnp2w",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/HezhVpAJIhU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBzCqF8ip5CNGPNZX6EdTM0bYCehA",
                  "width": 720
              }
          ],
          "title": "Ron DeSanits Gets ABSOLUTELY SCHOOLED in Debate by Gavin Newsom",
          "videoId": "HezhVpAJIhU"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/ytc/APkrFKbTYm-RUBcq7UiswcuBilGCIJJ2js6lkzy8xK8ajdw=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@JimmyKimmelLive",
              "channelId": "UCa6vGFO9ty8v5KZJXQxdhaw",
              "title": "Jimmy Kimmel Live"
          },
          "badges": [
              "New"
          ],
          "descriptionSnippet": "Tonight was the season finale of “The Golden Bachelor” on ABC, the House is expected to vote tomorrow on whether or not to ...",
          "isLiveNow": false,
          "lengthSeconds": 800,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/-EskWSfb9Tg/mqdefault_6s.webp?du=3000&sqp=CPjgpasG&rs=AOn4CLAiv0kDA0fNMdqorTQJdV6DMneMtA",
                  "width": 320
              }
          ],
          "publishedTimeText": "2 hours ago",
          "stats": {
              "views": 209222
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/-EskWSfb9Tg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCV-7IjBSzmuirSmxP_sD93hQdcgA",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/-EskWSfb9Tg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3KnFOPkp4pSm05eVbfNbGepajJw",
                  "width": 720
              }
          ],
          "title": "Expulsion Looms for George Santos, McCarthy Says “F**k You” to Trump & The Golden Bachelor Finale",
          "videoId": "-EskWSfb9Tg"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/ytc/APkrFKZkd-2W-clgFg0HNVMjSrFxhHjFk_6GJeuif6Lm9xg=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@msnbc",
              "channelId": "UCaXkIU1QidjPwiAYu6GcHjg",
              "title": "MSNBC"
          },
          "badges": [
              "New",
              "CC"
          ],
          "descriptionSnippet": "MSNBC's Lawrence O'Donnell analyzes the latest developments in Donald Trump's civil fraud trial in New York, including a ...",
          "isLiveNow": false,
          "lengthSeconds": 476,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/zB8PuB34xQg/mqdefault_6s.webp?du=3000&sqp=CMD5pasG&rs=AOn4CLBhE2dk6dsEfx1-r_rZBm-2KfXMTg",
                  "width": 320
              }
          ],
          "publishedTimeText": "2 hours ago",
          "stats": {
              "views": 61711
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/zB8PuB34xQg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCtpvbhwN52bbXRfye28H4hAWQPuQ",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/zB8PuB34xQg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2Ovig-gn4AU3pmhkzOhZBpPY7nQ",
                  "width": 720
              }
          ],
          "title": "Lawrence: Trump co-defendant Jeffrey Clark chose to communicate with me today",
          "videoId": "zB8PuB34xQg"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/TfTa8HWjTh-Bc8vuyPrwj0hdrqAxvTnJ6Lkgy1SEN_kyptxPNhKPPd0CIKzaRC-rUmQwXEwJ=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@fox5ny",
              "channelId": "UCIjSUWHWp6KohfnR5OQTXnQ",
              "title": "FOX 5 New York"
          },
          "badges": [
              "New",
              "CC"
          ],
          "descriptionSnippet": "As winter gets closer and temperatures continue to drop, there are more and more questions about how the city plans to make ...",
          "isLiveNow": false,
          "lengthSeconds": 165,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/NE97_5qJNMQ/mqdefault_6s.webp?du=3000&sqp=CMzppasG&rs=AOn4CLDnF7HIKjPmo8mLHuIjQPXKgRgj7w",
                  "width": 320
              }
          ],
          "publishedTimeText": "7 hours ago",
          "stats": {
              "views": 23658
          },
          "thumbnails": [
              {
                  "height": 270,
                  "url": "https://i.ytimg.com/vi/NE97_5qJNMQ/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBg0zDlzlAHdjPcM8U7Wy4oOq-bVg",
                  "width": 480
              }
          ],
          "title": "NYC migrants struggle to find winter housing",
          "videoId": "NE97_5qJNMQ"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/ytc/APkrFKZDwsvd4PBGLDqtT1g13ItQ5kbfVFsQX3MX5EnGQw=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@carwow",
              "channelId": "UCUhFaUpnq31m6TNX2VKVSVA",
              "title": "carwow"
          },
          "badges": [
              "New",
              "4K"
          ],
          "descriptionSnippet": "Meet the new Audi SQ8 e-tron! It was previously known as just the Audi e-tron, but Audi has rebranded its largest electric SUV to ...",
          "isLiveNow": false,
          "lengthSeconds": 1310,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/CxuK4oYKANg/mqdefault_6s.webp?du=3000&sqp=CNjVpasG&rs=AOn4CLDB2KEEHwDvi5W3oclGQBVnQlQJeA",
                  "width": 320
              }
          ],
          "publishedTimeText": "19 hours ago",
          "stats": {
              "views": 241278
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/CxuK4oYKANg/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARgXIEUofzAP&rs=AOn4CLBrkfdLZ1k_i37weVco0ZqP9mv7sA",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/CxuK4oYKANg/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARgXIEUofzAP&rs=AOn4CLBuuzISDBZ-16HCF5ZGgudb2FSjFQ",
                  "width": 720
              }
          ],
          "title": "New Audi SQ8 review: Better Than EVER?!",
          "videoId": "CxuK4oYKANg"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/ytc/APkrFKaSMaTPV-a8cANxWIrwNAczH9Sxw6qdpa6PjAx8zT8=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@TopGear",
              "channelId": "UCjOl2AUblVmg2rA_cRgZkFg",
              "title": "Top Gear"
          },
          "badges": [
              "New",
              "4K"
          ],
          "descriptionSnippet": "The third-generation of a Top Gear favourite has definitely grown up - should we be worried? Why? Well, it looks a bit… too good, ...",
          "isLiveNow": false,
          "lengthSeconds": 548,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/AT5BsZ450QA/mqdefault_6s.webp?du=3000&sqp=COD4pasG&rs=AOn4CLDc6kYtb_Iv5JiOviRySQZPiMefQQ",
                  "width": 320
              }
          ],
          "publishedTimeText": "22 hours ago",
          "stats": {
              "views": 130110
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/AT5BsZ450QA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAeAkRJ8Yl--CbljAdRhf9P3G-A0Q",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/AT5BsZ450QA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAbW3yQHGJNTh39_lt-DLJc5lYFxw",
                  "width": 720
              }
          ],
          "title": "It's the brand-new (plusher!) Dacia Duster! | Top Gear",
          "videoId": "AT5BsZ450QA"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/5R6CAknOCqHTaMb_H7Yde4qGZAIjdiiyDTFzvicvS59eDJbqKz7v-9uqmcBX3h9NEdXoK-qfZQ=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@NewsNation",
              "channelId": "UCCjG8NtOig0USdrT5D1FpxQ",
              "title": "NewsNation"
          },
          "badges": [
              "New",
              "CC"
          ],
          "descriptionSnippet": "A new report from the Daily Mail purports that the CIA has a central role in retrieving UFOs, revealing information about a so-called ...",
          "isLiveNow": false,
          "lengthSeconds": 357,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/-yao8Pzffw8/mqdefault_6s.webp?du=3000&sqp=CIvwpasG&rs=AOn4CLBS29Isxl0nBPmqqFuSNYPiSioPmg",
                  "width": 320
              }
          ],
          "publishedTimeText": "2 days ago",
          "stats": {
              "views": 138277
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/-yao8Pzffw8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBMaZGSSq92ZQQi-VqbRtkaGfIqbw",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/-yao8Pzffw8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDEoFBWjI7ysp_gRJw3--FBATwRdQ",
                  "width": 720
              }
          ],
          "title": "New reporting on CIA’s role in UFO retrieval accurate: Coulthart | Cuomo",
          "videoId": "-yao8Pzffw8"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/TQOOAQZAzO1BraPCMwBx_f9VT8LTHnO20TfhpS6DyvvJWffGbqsyphwornndQs8s1trbuVH6=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@legendsofruneterra",
              "channelId": "UCMZ5vTV7dLz_yoWw4nOzDwg",
              "title": "Legends of Runeterra"
          },
          "badges": [
              "New",
              "CC"
          ],
          "descriptionSnippet": "Show them what it is to fall. Morgana unleashes her divine powers in the newest expansion, Fate's Voyage: Beyond, releasing ...",
          "isLiveNow": false,
          "lengthSeconds": 66,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/39aUv2cJ7ok/mqdefault_6s.webp?du=3000&sqp=CN7QpasG&rs=AOn4CLDek7d9SlUSeDvrAZvUv9ja64ijMA",
                  "width": 320
              }
          ],
          "publishedTimeText": "13 hours ago",
          "stats": {
              "views": 116644
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/39aUv2cJ7ok/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCEPp-7C1a1S3t5mP30D95rvmxCew",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/39aUv2cJ7ok/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAlBG-5h94c3k97NWDj5cBRqcM4MA",
                  "width": 720
              }
          ],
          "title": "Morgana | New Champion Spotlight - Legends of Runeterra",
          "videoId": "39aUv2cJ7ok"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/ytc/APkrFKZQzVEWrgR-DCbniYXV33KBEzArwxdLRh1k2P3Hjg=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@RGT85",
              "channelId": "UCA5RGaQc-a8tIX_AqTTmWdw",
              "title": "RGT 85"
          },
          "badges": [
              "New"
          ],
          "descriptionSnippet": "Well what do we have here? Cameo: http://cameo.com/rgt_85 Twitter: http://twitter.com/rgt_85 Facebook: ...",
          "isLiveNow": false,
          "lengthSeconds": 609,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/M6o9JKY-pRw/mqdefault_6s.webp?du=3000&sqp=COSCpqsG&rs=AOn4CLAgIEwWJEW-feb1uo3UPfoKeUZQ5g",
                  "width": 320
              }
          ],
          "publishedTimeText": "16 hours ago",
          "stats": {
              "views": 48736
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/M6o9JKY-pRw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBHq71h7fEk_KU1k6Fs8R-LaKzfhQ",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/M6o9JKY-pRw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2CAbFbkGfZpgAa2djKFK_fwy0-A",
                  "width": 720
              }
          ],
          "title": "The New Nintendo Switch Mini Coming In 2024?!",
          "videoId": "M6o9JKY-pRw"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/ytc/APkrFKZkd-2W-clgFg0HNVMjSrFxhHjFk_6GJeuif6Lm9xg=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@msnbc",
              "channelId": "UCaXkIU1QidjPwiAYu6GcHjg",
              "title": "MSNBC"
          },
          "badges": [
              "New",
              "CC"
          ],
          "descriptionSnippet": "Tim Heaphy, former lead investigator for the January 6th Select Committee, Former Democratic Senator from Missouri Claire ...",
          "isLiveNow": false,
          "lengthSeconds": 513,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/dfaX5yNtF5Y/mqdefault_6s.webp?du=3000&sqp=CMrBpasG&rs=AOn4CLDuzJOramCvHA9Qv6IqW1TnBShK6A",
                  "width": 320
              }
          ],
          "publishedTimeText": "8 hours ago",
          "stats": {
              "views": 238876
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/dfaX5yNtF5Y/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvcb2kxRm7EbUk1jbYV5WFoSZnIA",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/dfaX5yNtF5Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDTVn4JAihiUTowL4obO8AVXATsZQ",
                  "width": 720
              }
          ],
          "title": "New text messages show Rep. Scott Perry’s effort to install a Trump sycophant as Attorney General",
          "videoId": "dfaX5yNtF5Y"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/Pwi9ymi3gnQ5aLfrBj5w3tzxEGhF_ta837yQzTpy_5kVFFdu76DOQI58JobptmYjTw6Gh1EjPA=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@newheightshow",
              "channelId": "UCVRm2Ho8cL3lvWDyp2ayuFw",
              "title": "New Heights"
          },
          "badges": [
              "New"
          ],
          "descriptionSnippet": "\"It's Always Sunny In Philadelphia\" stars Rob McElhenney and Kaitlin Olson stop by the show to break the news to Jason and ...",
          "isLiveNow": false,
          "lengthSeconds": 516,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/AuK3CECExmg/mqdefault_6s.webp?du=3000&sqp=CPDnpasG&rs=AOn4CLD3Zr4jA4US31FjO3ynbSwSHa6sKw",
                  "width": 320
              }
          ],
          "publishedTimeText": "10 hours ago",
          "stats": {
              "views": 56012
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/AuK3CECExmg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsw7HiYx5F05JGiu_iD_4TzNKUBQ",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/AuK3CECExmg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBGFr3y1DwTxhKX41oWNer3oyyhKg",
                  "width": 720
              }
          ],
          "title": "Rob McElhenney and Kaitlin Olson reveal real story behind $100k bid for Kylie Kelce Eagles jacket",
          "videoId": "AuK3CECExmg"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/JSS6ykU01xhBZd_sjDQrEmefuslfSPE0FNyVuw_QvRpn_J6SNX5aP0YGfw0h-wElil_PUw30O2o=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@wsj",
              "channelId": "UCK7tptUDHh-RYDsdxO1-5QQ",
              "title": "The Wall Street Journal"
          },
          "badges": [
              "New",
              "CC"
          ],
          "descriptionSnippet": "Prompt engineering—getting the best answers of a generative AI chatbot like ChatGPT—is a new type of job. Large language ...",
          "isLiveNow": false,
          "lengthSeconds": 299,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/whkge1rEamU/mqdefault_6s.webp?du=3000&sqp=CMnppasG&rs=AOn4CLDE4zc1ZiYhZssHK1-usx9w9EpVdA",
                  "width": 320
              }
          ],
          "publishedTimeText": "1 day ago",
          "stats": {
              "views": 66488
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/whkge1rEamU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDGTO_N9k7UBlHii3fliZaQ6t2s_A",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/whkge1rEamU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDpfaEMqhTCRmSiWr_QhDliDgRZ3w",
                  "width": 720
              }
          ],
          "title": "AI’s Hottest New Job Pays Up to $250K a Year. So I Applied.  | WSJ",
          "videoId": "whkge1rEamU"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/TfTa8HWjTh-Bc8vuyPrwj0hdrqAxvTnJ6Lkgy1SEN_kyptxPNhKPPd0CIKzaRC-rUmQwXEwJ=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@fox5ny",
              "channelId": "UCIjSUWHWp6KohfnR5OQTXnQ",
              "title": "FOX 5 New York"
          },
          "badges": [
              "New",
              "CC"
          ],
          "descriptionSnippet": "As winter gets closer and temperatures continue to drop, there are more and more questions about how the city plans to make ...",
          "isLiveNow": false,
          "lengthSeconds": 165,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/NE97_5qJNMQ/mqdefault_6s.webp?du=3000&sqp=CMzppasG&rs=AOn4CLDnF7HIKjPmo8mLHuIjQPXKgRgj7w",
                  "width": 320
              }
          ],
          "publishedTimeText": "7 hours ago",
          "stats": {
              "views": 23658
          },
          "thumbnails": [
              {
                  "height": 270,
                  "url": "https://i.ytimg.com/vi/NE97_5qJNMQ/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBg0zDlzlAHdjPcM8U7Wy4oOq-bVg",
                  "width": 480
              }
          ],
          "title": "NYC migrants struggle to find winter housing",
          "videoId": "NE97_5qJNMQ"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/ytc/APkrFKZdXO4D0ioO3jNWqmsORIFs7DPVW_mfCeeqO1_9dQ=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@CNBCtelevision",
              "channelId": "UCrp_UI8XtuYfpiqluWLD7Lw",
              "title": "CNBC Television"
          },
          "badges": [
              "New",
              "CC"
          ],
          "descriptionSnippet": "CNBC's Andrew Ross Sorkin, Becky Quick and Joe Kernen discuss Elon Musk's interview at The New York Times DealBook ...",
          "isLiveNow": false,
          "lengthSeconds": 614,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/0yo74luRr5k/mqdefault_6s.webp?du=3000&sqp=CKKFpqsG&rs=AOn4CLAtejBR86tLvUZXc8mhlpTWx4r4KQ",
                  "width": 320
              }
          ],
          "publishedTimeText": "17 hours ago",
          "stats": {
              "views": 195260
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/0yo74luRr5k/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB4gCIJYo4qWneRF26TQadkaHyCKA",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/0yo74luRr5k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAVZOlzD6y9K3lCnCeOiiI3Ospu-w",
                  "width": 720
              }
          ],
          "title": "'Squawk Box' crew react to Elon Musk's NYT DealBook Summit interview",
          "videoId": "0yo74luRr5k"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/JSS6ykU01xhBZd_sjDQrEmefuslfSPE0FNyVuw_QvRpn_J6SNX5aP0YGfw0h-wElil_PUw30O2o=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@wsj",
              "channelId": "UCK7tptUDHh-RYDsdxO1-5QQ",
              "title": "The Wall Street Journal"
          },
          "badges": [
              "New",
              "CC"
          ],
          "descriptionSnippet": "Prompt engineering—getting the best answers of a generative AI chatbot like ChatGPT—is a new type of job. Large language ...",
          "isLiveNow": false,
          "lengthSeconds": 299,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/whkge1rEamU/mqdefault_6s.webp?du=3000&sqp=CMnppasG&rs=AOn4CLDE4zc1ZiYhZssHK1-usx9w9EpVdA",
                  "width": 320
              }
          ],
          "publishedTimeText": "1 day ago",
          "stats": {
              "views": 66488
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/whkge1rEamU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDGTO_N9k7UBlHii3fliZaQ6t2s_A",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/whkge1rEamU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDpfaEMqhTCRmSiWr_QhDliDgRZ3w",
                  "width": 720
              }
          ],
          "title": "AI’s Hottest New Job Pays Up to $250K a Year. So I Applied.  | WSJ",
          "videoId": "whkge1rEamU"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/ytc/APkrFKZkd-2W-clgFg0HNVMjSrFxhHjFk_6GJeuif6Lm9xg=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@msnbc",
              "channelId": "UCaXkIU1QidjPwiAYu6GcHjg",
              "title": "MSNBC"
          },
          "badges": [
              "New",
              "CC"
          ],
          "descriptionSnippet": "MSNBC's Lawrence O'Donnell analyzes new filings from Donald Trump's criminal defense team in Special Counsel Jack Smith's ...",
          "isLiveNow": false,
          "lengthSeconds": 442,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/XTsMpOeNapQ/mqdefault_6s.webp?du=3000&sqp=CJTupasG&rs=AOn4CLBwyHtBpwNm1bbb7fLfnOY9u3ixGA",
                  "width": 320
              }
          ],
          "publishedTimeText": "2 days ago",
          "stats": {
              "views": 234191
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/XTsMpOeNapQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAR3tcPe0CNrFrSpJCGK5_F-QtYWg",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/XTsMpOeNapQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAR2Eoi8Yr3-xj7UDrc8NqnBNX84A",
                  "width": 720
              }
          ],
          "title": "Lawrence: Liz Cheney’s new book reveals what a potential witness might tell Jack Smith",
          "videoId": "XTsMpOeNapQ"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/yGbA7wHYbj_KXDN4Q7IP4P8ADErUQX6SYJotTN35Kjes6ufM7Kua15xVqzCfq_IEfz8nAlr3=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@TSportsbd",
              "channelId": "UC2t9imwIR7xlDfma3CmRKJQ",
              "title": "T Sports"
          },
          "badges": [
              "LIVE",
              "New"
          ],
          "descriptionSnippet": "LIVE | Bangladesh vs New Zealand, 1st Test | Day - 4 | Cricket | T Sports Series: New Zealand tour of Bangladesh, 2023 Match ...",
          "isLiveNow": true,
          "lengthSeconds": null,
          "movingThumbnails": null,
          "publishedTimeText": null,
          "stats": {
              "viewers": 4154
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/ETdZnTsRymU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLANOQM9g-veP7EVFpPA46No8dwTkQ",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/ETdZnTsRymU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCVT9u46G2fvmd2WjWM6bOH2x-k7Q",
                  "width": 720
              }
          ],
          "title": "LIVE | Bangladesh vs New Zealand, 1st Test | Day - 4 | Cricket | T Sports",
          "videoId": "ETdZnTsRymU"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/ytc/APkrFKaiJAbql8qpR-ePVtanKzgL8y7cBjX5KA3jkhlsZQ=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@newyorker",
              "channelId": "UCsD-Qms-AkXDrsU962OicLw",
              "title": "The New Yorker"
          },
          "badges": [
              "New",
              "CC"
          ],
          "descriptionSnippet": "Opposites make for great comedy in the life-long friendship of comedy legends Bob Newhart and Don Rickles by Judd Apatow.",
          "isLiveNow": false,
          "lengthSeconds": 1248,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/o3cs7PyXPsU/mqdefault_6s.webp?du=3000&sqp=CJ_WpasG&rs=AOn4CLCgw7UmPNIjWVBjacAeZfREyMBY6A",
                  "width": 320
              }
          ],
          "publishedTimeText": "2 days ago",
          "stats": {
              "views": 359325
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/o3cs7PyXPsU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBGL4jLhh5OKTWvYMFu7x-orOZTCA",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/o3cs7PyXPsU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDgDRiNI5-YzmKtvh6lvblntXcmlg",
                  "width": 720
              }
          ],
          "title": "\"Bob and Don: A Love Story\" a short documentary by Judd Apatow | The New Yorker",
          "videoId": "o3cs7PyXPsU"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/ytc/APkrFKakVh5FD9rflnuxPyEQhHz3dPsVnGYUpgu5AkfXiA=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@Warcraft",
              "channelId": "UCbLj9QP9FAaHs_647QckGtg",
              "title": "World of Warcraft"
          },
          "badges": [
              "New",
              "CC"
          ],
          "descriptionSnippet": "New Level Caps, New Quests, New Monsters, New PvP Activities, New End-Game Content, and New Role-Defining Abilities!",
          "isLiveNow": false,
          "lengthSeconds": 210,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/mV2ssdfd2KM/mqdefault_6s.webp?du=3000&sqp=CO7hpasG&rs=AOn4CLCK9TiL-Hs8vWV22Xw8gMFoebvmPA",
                  "width": 320
              }
          ],
          "publishedTimeText": "1 day ago",
          "stats": {
              "views": 420331
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/mV2ssdfd2KM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCcKSYluljzrBEoaeH85aVYjRFEOA",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/mV2ssdfd2KM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLApXK_hj4lWvLY_jYL7AsbSEHxC0Q",
                  "width": 720
              }
          ],
          "title": "What's New in WoW Classic Season of Discovery | Featuring PlatinumWoW",
          "videoId": "mV2ssdfd2KM"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/ytc/APkrFKZkd-2W-clgFg0HNVMjSrFxhHjFk_6GJeuif6Lm9xg=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@msnbc",
              "channelId": "UCaXkIU1QidjPwiAYu6GcHjg",
              "title": "MSNBC"
          },
          "badges": [
              "New",
              "CC"
          ],
          "descriptionSnippet": "Tim Heaphy, former lead investigator for the January 6th Select Committee, Former Democratic Senator from Missouri Claire ...",
          "isLiveNow": false,
          "lengthSeconds": 513,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/dfaX5yNtF5Y/mqdefault_6s.webp?du=3000&sqp=CMrBpasG&rs=AOn4CLDuzJOramCvHA9Qv6IqW1TnBShK6A",
                  "width": 320
              }
          ],
          "publishedTimeText": "8 hours ago",
          "stats": {
              "views": 238876
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/dfaX5yNtF5Y/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvcb2kxRm7EbUk1jbYV5WFoSZnIA",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/dfaX5yNtF5Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDTVn4JAihiUTowL4obO8AVXATsZQ",
                  "width": 720
              }
          ],
          "title": "New text messages show Rep. Scott Perry’s effort to install a Trump sycophant as Attorney General",
          "videoId": "dfaX5yNtF5Y"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/25xrLCjT8wTXk13ciJi08JtxMpNfvy0FbuE8lwKFIAYnTt5BFXb0mJcIdhqdXjTCnnboGLMb=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [],
              "canonicalBaseUrl": "/@GameChangerShorts",
              "channelId": "UCTcw8GqWQlFcc6ioeJQOMAQ",
              "title": "Game Changer Shorts"
          },
          "badges": [],
          "descriptionSnippet": "God, Brennan's lore... #shorts #gamechanger Comic Sans Watch a few full episodes of Game Changer here: ...",
          "isLiveNow": false,
          "lengthSeconds": 55,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/m_VdP1iaFV8/mqdefault_6s.webp?du=3000&sqp=CIn8pasG&rs=AOn4CLC-5zpGFiL9Zp5egVyD6lS6b-1mGA",
                  "width": 320
              }
          ],
          "publishedTimeText": "1 year ago",
          "stats": {
              "views": 5107821
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/m_VdP1iaFV8/hq720_2.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBzgWAAoAKigIMCAAQARhyIGIoKDAP&rs=AOn4CLAj2tJgXhBWyOijQHxPNHhbXtLSjQ",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/m_VdP1iaFV8/hq720_2.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBzgWAAoAKigIMCAAQARhyIGIoKDAP&rs=AOn4CLBTWkOpkJ8j74_FFAYavnvZPeXgoA",
                  "width": 720
              }
          ],
          "title": "Brennan's Villain Monologue for Times New Roman (from 'Make Some Noise')",
          "videoId": "m_VdP1iaFV8"
      }
  },
  {
      "type": "video",
      "video": {
          "author": {
              "avatar": [
                  {
                      "height": 68,
                      "url": "https://yt3.ggpht.com/OOT0eq8LoW8V3PMURGYuk0kRSgRGP7EsuGZoODhHBcg1jCB1qkuIAxS-XGnjKX9Q6rf-WKTvkQ=s68-c-k-c0x00ffffff-no-rj",
                      "width": 68
                  }
              ],
              "badges": [
                  {
                      "text": "Verified",
                      "type": "VERIFIED_CHANNEL"
                  }
              ],
              "canonicalBaseUrl": "/@ABCNews",
              "channelId": "UCBi2mrWuNuyYy4gbM6fU18Q",
              "title": "ABC News"
          },
          "badges": [
              "New"
          ],
          "descriptionSnippet": "ABC News' Ginger Zee travels to New Jersey's Atlantic White Cedar forest, where salt water from rising sea levels has ...",
          "isLiveNow": false,
          "lengthSeconds": 404,
          "movingThumbnails": [
              {
                  "height": 180,
                  "url": "https://i.ytimg.com/an_webp/8Xr1hJ59waY/mqdefault_6s.webp?du=3000&sqp=CLT6pasG&rs=AOn4CLCiHk44YX6UvAtZlP2erSUAHw92WA",
                  "width": 320
              }
          ],
          "publishedTimeText": "2 days ago",
          "stats": {
              "views": 7376
          },
          "thumbnails": [
              {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/8Xr1hJ59waY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB7EK6rNq-6_rolQq52uQvdKUm84w",
                  "width": 360
              },
              {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/8Xr1hJ59waY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCKp8-goLfAzfFrHRmVoBdg2NETAQ",
                  "width": 720
              }
          ],
          "title": "New Jersey ghost forest exposes climate change threat",
          "videoId": "8Xr1hJ59waY"
      }
  }
]