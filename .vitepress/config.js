// .vitepress/config.js
const path = require("path");

const rootDir = path.resolve(__dirname, "../");
const mdDir = path.resolve(rootDir, "docs");

export default {
    base: '/TIL/',
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


function getSidebar(){
  return {
   
    
 
    
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
          link:"/TIL/202206/202206",
          activeMatch: "/TIL/",
        },
        {
          text:'회고',
          link:"/TIL/202206/20220608",
          activeMatch: "/TIL/",
        },
        {
          text:'기능경기대회',
          link:"/webskills/problemRank",
          activeMatch: "/webskills/",
        },
      ]
    }
  ]
}
