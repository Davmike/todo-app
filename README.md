# Todo App

### Table of Contents

- [Prerequisites](#Prerequisites)
- [Tech Stack](#Tech-Stack)
- [Getting Started](#Getting-Started)
- [Project Structure](#Project-Structure)
- [Deployment](#Deployment)
- [Author](#Author)

#

### Prerequisites

- <img src="readme/npm.png" width="25" style="top: 8px" /> _npm @8 and up_
- <img src="readme/vite.png" width="25" style="top: 8px" /> _vite @4.0.0_

#

### Tech Stack

- <img src="readme/react.png" width="25" style="top: 8px" />
- <img src="readme/styled-components.png" width="25" style="top: 8px" />

#

### Getting Started

1. First of all you need to clone app repository from github:

```
git clone git@github.com:Davmike/todo-app.git
```

2. Next step requires install all the dependencies.

```
npm install
```

3. To see project in action

```
npm run dev
```

#

### Project Structure

```
|--- components
|--- layouts
|--- pages
|   |---|--- styled-components
|   |---|---|--- input
|   |---|---|--- todo
|   |---|---|--- result
|--- public


- vercel.json # vercel configuration
- package.json # dependency manager configurations

```

#

### Deployment

Before every deployment you need to create build file.

```
npm run build
```

after this you can use this file to deploy project on server.

#

### Author

- [LinkedIn](https://www.linkedin.com/in/david-mikeladze-927406264/)
