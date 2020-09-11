# romangorev

[Github](https://github.com/ogogorev/ogogorev.github.io)

My personal website, created using typescript, jsx and webpack.

Main motive of this website: it's my personal website. So it introduces myself not only by its content but by its implementation as well. Many things I implemented here I have done first time, so this project can be considered as experimental. But despite that and all the difficulties I have gone through, I'm satisfied with the result and I am optimistic about the future ways of development and scalability.

Please don't judge the design too strict - I just wanted to make it simple and clean and did it intuitively.
<br>
Here are a few key points that I would like to mention:

### The app is component-based

I tried to split the app into components. It might seem similar to functional components in React - I use functions that get props as parameters and return root element with html, but there is some differences. My component function called only once - at initialization, and will be not re-rendered at runtime. It means that every component should update itself explicitly. I consider this rather as issue then as feature and have some ideas of improving it.

### This project has no dependencies

I mean, it's written using Typescript and built with Webpack, but without any other dependencies. I like creating apps from scratch. This app is one of them.

### JSX is used

I really like the jsx syntax and wanted to use it in this project. It turned out that it's not so easy to do so without React.

Basically I could achieve that by exporting of a namespace in the `index.tsx`. The exported namespace defines `createElement` function that will be called each time a new node is created in jsx. I could simply export my namespace as 'React', because React is default namespace that is used when compiling jsx. But in fact you can export your namespace using any name you want, you need only to specify this name in the `tsconfig.json`: `reactNamespace: "JSX"`.

My `createElement` function is simple: it recognizes what type current tagName has and calls appropriate function: `document.createElement` for intrinsic elements and tagName itself if it's a functional component.

### Simple router

I implemented basic version of router. It listens to url updates and mounts appropriate component into the container div. Similar to many libraries and frameworks I created Link component for internal links.

The router supports only first level paths, so following path `/projects/my-project` is handled by the component mounted for `/projects` path. However it's still working well in my case as each project component is displayed inside projects page.

Besides handling of sub-routes, my next goal for router is to make possible to add custom animations when mounting/unmounting components. Strangely I haven't seen a lot routers that allow doing some cool transitions between pages. I might have overlooked it though.

### Markdown loader

Since I'm going to introduce more projects in the future, I wanted to simplify adding of new projects (and other contents). And ideally I should be able add them without any knowledge about project structure and other internal implementations.

The solution is quite obvious - I’m using markdown files. I collect them in the data folder and transform to json objects at build time. To achieve that I created markdown loader - it's very simple and naive. Then at runtime I store jsons with project data in the state and transform json objects to html. So as you probably see, there is a big opportunity to improve it by transforming jsons to html at build time. But I don't have a lot of data, it doesn't affect the performance.
<br>
Issues and rooms for improvement:

- not automatic re-rendering. Works fine for static components (like footer), but dynamic components become quickly too large. But as I already mentioned I have some ideas of solving this problem.
- project is basic and a lot of issues are just not discovered yet.
- Since some parts (like JSX or Markdown loader) were developed by myself, they support only basic operations and have to be developed further as new components, tags, md syntax appear.

<br>

In conclusion I would like to mention again that this is an experimental project. I’m not pretending to create another js library or framework. I know that my project could be easily done with something like gatsby or next.js and I am not trying to reinvent the wheel. I just believe that one learns better and gains a deeper understanding of other tools and their internal mechanisms when tries to implement similar stuff by oneself.
