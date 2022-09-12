// .vitepress/config.js
const path = require("path");

const rootDir = path.resolve(__dirname, "../");
const mdDir = path.resolve(rootDir, "docs");

export default {
    title: "지수",
    description: 'A VitePress site',
    srcDir : mdDir,
    themeConfig: {
        
        sidebar:getSidebar(),
        nav: getNav()
    },
    vite:{
      ssr:{
        format:"cjs",
      }
    },
}

function get09TIL(){
  return {
    text: 'TIL',
    collapsible: true,
    items: [
      
      {text: '2022/09/09', link: '/TIL/202209/20220909'},
      
      
     
    ]
  }
}

function getSidebar(){
  return {
   
    '/TIL/202209':[
      get09TIL(),
    ],
 
    "/":[
      {
        text: 'TIL📖',
        collapsible: true,
        items: [
          
          { text: '2022년09월', link: '/TIL/202209/202209'},
        ]}
      ],
  };
}
function getNav(){
  return [
    {
      text:'TIL',
      link:"/TIL/202206/20220608",
      activeMatch: "/TIL/",
    },
    {
      text: 'Menu',
      items: [
        {
          text:'TIL',
          link:"/TIL/202209/202209",
          activeMatch: "/TIL/",
        },
      ]
    }
  ]
}
