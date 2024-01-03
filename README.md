"# namaste-react" 


lesson number 2
Igniting our app

In lesson one we learnt that we can run index.html file directly on the browser by opening it, then we can use javascript and append it to html tags and last we used react in script directly through CDN. But CDN is always not the best way to initialize react application.

In this lesson we are going to use React bundler, there are more bundlers like webpack which is originally used with create-react-app, here we are going to use parcel, first we are going to intialize package manager, we are going to use NPM here, after that we are going to use npx install -D parcel, npx means execute, -D means dev, it will be installed in the dev dependencies as we don't need bundler packages on the server.

parcel uses : HMR(Hot module reload, caching, it is fast, it bundles code).

parcel bundles the code and make only one file out of every extension,
there are 3 files made in total - index.js, index.html and index.css , all the code is set into one file by the bundler and thrown to the browser

points to note:

always push package-lock.json to git as it contains dev dependencies and versions. it automatically manages versions to the server.

never push node modules or any such folder/file to git which can be generated to npm commands as server runs it.


LESSON NUMBER 3: Laying the foundation

1. adding script in package.json.
2. JSX is not html inside javascript, not a react part, it is a html like syntax.
3. JSX code is transpiled before it reached the browser so that browsers can understand and run it.
4. tranpiling is done by babel, which is a transpiler/compiler used by bundlers such as parcel/webpack.
5. jsx is first converted to React.cloneElement and then to html and all this is done using transpiler/compiler which is used by bundlers.