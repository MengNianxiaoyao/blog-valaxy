import{_ as i}from"./ValaxyMain.vue_vue_type_style_index_0_lang-4rpn_ink.js";import{_ as E,a as y,p as u,o as d,c as b,w as n,f as s,i as l,g as t,s as h,r as a,h as m}from"./app-joX8rTEl.js";import"./YunFooter.vue_vue_type_style_index_0_lang-X4Qa9iOm.js";import"./YunCard.vue_vue_type_script_setup_true_lang-goFdJB5W.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-Iu7cYHs5.js";import"./index-nlSmcLJj.js";const r=JSON.parse('{"title":"【个人博客网站】从零开始搭建博客网站（四）：使用GitHub Actions自动构建博客","description":"","frontmatter":{"title":"【个人博客网站】从零开始搭建博客网站（四）：使用GitHub Actions自动构建博客","categories":"博客教程","tags":["文档","博客教程"],"cover":"https://i0.hdslb.com/bfs/article/8b2ef06b4b7a4167788d7adb98dc2b85381745966.jpg","date":"2022-11-30T16:00:00.000Z"},"headers":[{"level":2,"title":"获取ssh密钥","slug":"获取ssh密钥","link":"#获取ssh密钥","children":[]},{"level":2,"title":"部署密钥","slug":"部署密钥","link":"#部署密钥","children":[{"level":3,"title":"部署私钥","slug":"部署私钥","link":"#部署私钥","children":[]},{"level":3,"title":"部署公钥","slug":"部署公钥","link":"#部署公钥","children":[]}]},{"level":2,"title":"配置Github Actions","slug":"配置github-actions","link":"#配置github-actions","children":[]},{"level":2,"title":"配置Hexo deploy","slug":"配置hexo-deploy","link":"#配置hexo-deploy","children":[]},{"level":2,"title":"推送","slug":"推送","link":"#推送","children":[]}],"relativePath":"pages/posts/boke4.md","path":"/home/runner/work/blog/blog/pages/posts/boke4.md","lastUpdated":1705965752000}'),g={name:"pages/posts/boke4.md",data(){return{data:r,frontmatter:r.frontmatter,$frontmatter:r.frontmatter}},setup(){const e=y();e.meta.frontmatter=Object.assign(e.meta.frontmatter||{},r.frontmatter||{}),u("pageData",r)}},_=s("blockquote",null,[s("p",null,"本篇是可选操作教程")],-1),F={class:"tip custom-block"},f=s("p",{class:"custom-block-title"},[s("i",{class:"icon i-arcticons-pixel-tips"}),s("span",{lang:"en"},"TIP"),s("span",{lang:"zh-CN"},"提示")],-1),k={id:"获取ssh密钥",tabindex:"-1"},x=s("p",null,[l("私钥为"),s("code",null,"id_rsa"),l("文件，公钥为"),s("code",null,"id_rsa.pub"),l("文件"),s("code",null,"(如果是命名过密钥名，公私钥的文件名则为自己命名的名字)")],-1),D={id:"部署密钥",tabindex:"-1"},v={id:"部署私钥",tabindex:"-1"},A=s("p",null,"博客项目仓库 -> settings -> Secrets -> Actions",-1),C=s("p",null,[l("点击"),s("code",null,"New repository secret"),l("，Name填"),s("code",null,"HEXO_DEPLOY_PRI"),l("，Secret填"),s("code",null,"私钥文件里的内容")],-1),B={id:"部署公钥",tabindex:"-1"},P={id:"不同仓库",tabindex:"-1"},$=s("p",null,"如果你没新建仓库的话，请新建仓库（新建过了请忽略），然后上传公钥。",-1),O=s("p",null,"目的仓库（新建仓库） -> settings -> Deploy keys",-1),N=s("p",null,[l("点击"),s("code",null,"add deploy key"),l("，title填"),s("code",null,"HEXO_DEPLOY_PUB"),l("，key填"),s("code",null,"公钥文件里的内容"),l("，并给读写权限")],-1),H={id:"相同仓库",tabindex:"-1"},w=s("p",null,"如果你想部署到和博客项目相同的仓库，请新建一个分支，公钥上传和上一步一样。这里需要注意的是，这种方式必须公开仓库，如果仓库内有不能公开的内容，请使用前一种方式",-1),I={id:"配置github-actions",tabindex:"-1"},X=s("p",null,[l("在hexo的根目录，创建"),s("code",null,".github/workflows/hexo-cl.yml"),l("，修改"),s("code",null,"blog_source_branch"),l("、"),s("code",null,"'your username'"),l("、"),s("code",null,"'your useremail'"),l("为自己的")],-1),L=s("div",{style:{"max-height":"200px"},class:"language-yaml line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yaml"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#85E89D"}},"name"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#9ECBFF"}},"HEXO CI")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"on"),s("span",{style:{color:"#E1E4E8"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#85E89D"}},"push"),s("span",{style:{color:"#E1E4E8"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#85E89D"}},"branches"),s("span",{style:{color:"#E1E4E8"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    - "),s("span",{style:{color:"#9ECBFF"}},"blog_source_branch")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#85E89D"}},"jobs"),s("span",{style:{color:"#E1E4E8"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#85E89D"}},"build"),s("span",{style:{color:"#E1E4E8"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#85E89D"}},"runs-on"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#9ECBFF"}},"ubuntu-latest")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#85E89D"}},"strategy"),s("span",{style:{color:"#E1E4E8"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#85E89D"}},"matrix"),s("span",{style:{color:"#E1E4E8"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#85E89D"}},"node-version"),s("span",{style:{color:"#E1E4E8"}},": ["),s("span",{style:{color:"#9ECBFF"}},"14.x"),s("span",{style:{color:"#E1E4E8"}},"]")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#85E89D"}},"steps"),s("span",{style:{color:"#E1E4E8"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      - "),s("span",{style:{color:"#85E89D"}},"uses"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#9ECBFF"}},"actions/checkout@v2")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      - "),s("span",{style:{color:"#85E89D"}},"name"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#9ECBFF"}},"Use Node.js ${{ matrix.node-version }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#85E89D"}},"uses"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#9ECBFF"}},"actions/setup-node@v1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#85E89D"}},"with"),s("span",{style:{color:"#E1E4E8"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          "),s("span",{style:{color:"#85E89D"}},"node-version"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#9ECBFF"}},"${{ matrix.node-version }}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      - "),s("span",{style:{color:"#85E89D"}},"name"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#9ECBFF"}},"Configuration environment")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#85E89D"}},"env"),s("span",{style:{color:"#E1E4E8"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          "),s("span",{style:{color:"#85E89D"}},"HEXO_DEPLOY_PRI"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#9ECBFF"}},"${{secrets.HEXO_DEPLOY_PRI}}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#85E89D"}},"run"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#F97583"}},"|")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"          mkdir -p ~/.ssh/")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},'          echo "$HEXO_DEPLOY_PRI" > ~/.ssh/id_rsa')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"          chmod 600 ~/.ssh/id_rsa")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"          ssh-keyscan github.com >> ~/.ssh/known_hosts")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"          git config --global user.name 'your username'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"          git config --global user.email 'your useremail'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      - "),s("span",{style:{color:"#85E89D"}},"name"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#9ECBFF"}},"Install dependencies")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#85E89D"}},"run"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#F97583"}},"|")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"          npm i -g hexo-cli")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"          npm i")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      - "),s("span",{style:{color:"#85E89D"}},"name"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#9ECBFF"}},"Deploy hexo")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#85E89D"}},"run"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#F97583"}},"|")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"          hexo clean && hexo generate && gulp && hexo deploy")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#22863A"}},"name"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#032F62"}},"HEXO CI")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#005CC5"}},"on"),s("span",{style:{color:"#24292E"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#22863A"}},"push"),s("span",{style:{color:"#24292E"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#22863A"}},"branches"),s("span",{style:{color:"#24292E"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    - "),s("span",{style:{color:"#032F62"}},"blog_source_branch")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#22863A"}},"jobs"),s("span",{style:{color:"#24292E"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#22863A"}},"build"),s("span",{style:{color:"#24292E"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#22863A"}},"runs-on"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#032F62"}},"ubuntu-latest")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#22863A"}},"strategy"),s("span",{style:{color:"#24292E"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#22863A"}},"matrix"),s("span",{style:{color:"#24292E"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#22863A"}},"node-version"),s("span",{style:{color:"#24292E"}},": ["),s("span",{style:{color:"#032F62"}},"14.x"),s("span",{style:{color:"#24292E"}},"]")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#22863A"}},"steps"),s("span",{style:{color:"#24292E"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      - "),s("span",{style:{color:"#22863A"}},"uses"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#032F62"}},"actions/checkout@v2")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      - "),s("span",{style:{color:"#22863A"}},"name"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#032F62"}},"Use Node.js ${{ matrix.node-version }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#22863A"}},"uses"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#032F62"}},"actions/setup-node@v1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#22863A"}},"with"),s("span",{style:{color:"#24292E"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          "),s("span",{style:{color:"#22863A"}},"node-version"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#032F62"}},"${{ matrix.node-version }}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      - "),s("span",{style:{color:"#22863A"}},"name"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#032F62"}},"Configuration environment")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#22863A"}},"env"),s("span",{style:{color:"#24292E"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          "),s("span",{style:{color:"#22863A"}},"HEXO_DEPLOY_PRI"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#032F62"}},"${{secrets.HEXO_DEPLOY_PRI}}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#22863A"}},"run"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#D73A49"}},"|")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"          mkdir -p ~/.ssh/")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},'          echo "$HEXO_DEPLOY_PRI" > ~/.ssh/id_rsa')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"          chmod 600 ~/.ssh/id_rsa")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"          ssh-keyscan github.com >> ~/.ssh/known_hosts")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"          git config --global user.name 'your username'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"          git config --global user.email 'your useremail'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      - "),s("span",{style:{color:"#22863A"}},"name"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#032F62"}},"Install dependencies")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#22863A"}},"run"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#D73A49"}},"|")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"          npm i -g hexo-cli")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"          npm i")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      - "),s("span",{style:{color:"#22863A"}},"name"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#032F62"}},"Deploy hexo")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#22863A"}},"run"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#D73A49"}},"|")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"          hexo clean && hexo generate && gulp && hexo deploy")])])]),s("button",{class:"collapse"}),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br"),s("span",{class:"line-number"},"13"),s("br"),s("span",{class:"line-number"},"14"),s("br"),s("span",{class:"line-number"},"15"),s("br"),s("span",{class:"line-number"},"16"),s("br"),s("span",{class:"line-number"},"17"),s("br"),s("span",{class:"line-number"},"18"),s("br"),s("span",{class:"line-number"},"19"),s("br"),s("span",{class:"line-number"},"20"),s("br"),s("span",{class:"line-number"},"21"),s("br"),s("span",{class:"line-number"},"22"),s("br"),s("span",{class:"line-number"},"23"),s("br"),s("span",{class:"line-number"},"24"),s("br"),s("span",{class:"line-number"},"25"),s("br"),s("span",{class:"line-number"},"26"),s("br"),s("span",{class:"line-number"},"27"),s("br"),s("span",{class:"line-number"},"28"),s("br"),s("span",{class:"line-number"},"29"),s("br"),s("span",{class:"line-number"},"30"),s("br"),s("span",{class:"line-number"},"31"),s("br"),s("span",{class:"line-number"},"32"),s("br"),s("span",{class:"line-number"},"33"),s("br"),s("span",{class:"line-number"},"34"),s("br"),s("span",{class:"line-number"},"35"),s("br"),s("span",{class:"line-number"},"36"),s("br"),s("span",{class:"line-number"},"37"),s("br"),s("span",{class:"line-number"},"38"),s("br"),s("span",{class:"line-number"},"39"),s("br")])],-1),M={id:"配置hexo-deploy",tabindex:"-1"},R=s("p",null,[l("打开"),s("code",null,"_config.yml"),l("，将Git仓库从https形式修改成ssh形式")],-1),Y=s("div",{style:{"max-height":"200px"},class:"language-yaml line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yaml"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#85E89D"}},"deploy"),s("span",{style:{color:"#E1E4E8"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"- "),s("span",{style:{color:"#85E89D"}},"type"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#9ECBFF"}},"git")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#85E89D"}},"repository"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#9ECBFF"}},"git@github.com:MengNianxiaoyao/MengNianxiaoyao.github.io.git")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#6A737D"}},"#example, https://github.com/MengNianxiaoyao/MengNianxiaoyao.github.io.git")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#85E89D"}},"branch"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#9ECBFF"}},"master")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#22863A"}},"deploy"),s("span",{style:{color:"#24292E"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"- "),s("span",{style:{color:"#22863A"}},"type"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#032F62"}},"git")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#22863A"}},"repository"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#032F62"}},"git@github.com:MengNianxiaoyao/MengNianxiaoyao.github.io.git")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6A737D"}},"#example, https://github.com/MengNianxiaoyao/MengNianxiaoyao.github.io.git")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#22863A"}},"branch"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#032F62"}},"master")])])]),s("button",{class:"collapse"}),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br")])],-1),G={id:"推送",tabindex:"-1"},j=s("p",null,"将代码推送后，GitHub Actions会自动完成构建",-1);function V(e,S,U,T,c,q){const o=m,p=i;return d(),b(p,{frontmatter:c.frontmatter,data:c.data},{"main-content-md":n(()=>[_,s("div",F,[f,s("p",null,[l("参考文档: "),t(o,{href:"https://blog.csdn.net/sinat_16395609/article/details/120806098",target:"_blank",rel:"noreferrer"},{default:n(()=>[l("hexo配合github action 自动构建（多种形式）")]),_:1})])]),h(" more "),s("h2",k,[l("获取ssh密钥 "),t(o,{class:"header-anchor",href:"#获取ssh密钥","aria-label":'Permalink to "获取ssh密钥"'},{default:n(()=>[l("​")]),_:1})]),s("p",null,[l("在第二篇博客"),t(o,{href:"https://blog.mnxy.eu.org/posts/boke2",target:"_blank",rel:"noreferrer"},{default:n(()=>[l("【个人博客网站】从零开发博客网站（二）")]),_:1}),l("中，已经写过如何获取密钥，故这里不再赘述。")]),x,s("h2",D,[l("部署密钥 "),t(o,{class:"header-anchor",href:"#部署密钥","aria-label":'Permalink to "部署密钥"'},{default:n(()=>[l("​")]),_:1})]),s("h3",v,[l("部署私钥 "),t(o,{class:"header-anchor",href:"#部署私钥","aria-label":'Permalink to "部署私钥"'},{default:n(()=>[l("​")]),_:1})]),A,C,s("h3",B,[l("部署公钥 "),t(o,{class:"header-anchor",href:"#部署公钥","aria-label":'Permalink to "部署公钥"'},{default:n(()=>[l("​")]),_:1})]),s("h4",P,[l("不同仓库 "),t(o,{class:"header-anchor",href:"#不同仓库","aria-label":'Permalink to "不同仓库"'},{default:n(()=>[l("​")]),_:1})]),$,O,N,s("h4",H,[l("相同仓库 "),t(o,{class:"header-anchor",href:"#相同仓库","aria-label":'Permalink to "相同仓库"'},{default:n(()=>[l("​")]),_:1})]),w,s("h2",I,[l("配置Github Actions "),t(o,{class:"header-anchor",href:"#配置github-actions","aria-label":'Permalink to "配置Github Actions"'},{default:n(()=>[l("​")]),_:1})]),X,L,s("h2",M,[l("配置Hexo deploy "),t(o,{class:"header-anchor",href:"#配置hexo-deploy","aria-label":'Permalink to "配置Hexo deploy"'},{default:n(()=>[l("​")]),_:1})]),R,Y,s("h2",G,[l("推送 "),t(o,{class:"header-anchor",href:"#推送","aria-label":'Permalink to "推送"'},{default:n(()=>[l("​")]),_:1})]),j]),"main-header":n(()=>[a(e.$slots,"main-header")]),"main-header-after":n(()=>[a(e.$slots,"main-header-after")]),"main-nav":n(()=>[a(e.$slots,"main-nav")]),"main-content":n(()=>[a(e.$slots,"main-content")]),"main-content-after":n(()=>[a(e.$slots,"main-content-after")]),"main-nav-before":n(()=>[a(e.$slots,"main-nav-before")]),"main-nav-after":n(()=>[a(e.$slots,"main-nav-after")]),comment:n(()=>[a(e.$slots,"comment")]),footer:n(()=>[a(e.$slots,"footer")]),aside:n(()=>[a(e.$slots,"aside")]),"aside-custom":n(()=>[a(e.$slots,"aside-custom")]),default:n(()=>[a(e.$slots,"default")]),_:3},8,["frontmatter","data"])}const ss=E(g,[["render",V]]);export{r as data,ss as default};
