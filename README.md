## Installation

```bash
npm install
npm run storybook
```

Storybook will open at `http://localhost:6006`

## Components

### Input

- Support for different types (text, password, email, number, date)
- Toggle password visibility 
- Clear button 
- Smooth animations on focus

![Input](./public/input.png)
![Password](./public/pass.png)
![Password](./public/show%20pass.png)
![Clearable](./public/clear.png)

###  Toast

- Three notification types: success (green), error (red), info (gray)
- Auto-dismiss feature
- Smooth slide-in animation

![Success](./public/success%20toast.png)
![Error](./public/error%20toast.png)
![Info](./public/info%20toast.png)

### Sidebar Menu

- Slides in from the right with animation
- Support for nested menu items
- Close button inside the menu

![SidebarOpen](./public/open%20sidebar.png)
![SidebarClose](./public/close%20sidebar.png)

### React Hook Form

- Complete form example with validation
- Username, email, and password validation

![Form](./public/react%20hook%20form.png)

##  Features

 TypeScript  
 CSS Modules with animations  
 Storybook with live prop editing (`@storybook/addon-controls`)  
 React Hook Form for validation  
 UI with gradients and transitions

## Tech Stack

- React 18 + TypeScript
- Vite
- Storybook
- CSS Modules
- React Hook Form

## Project Structure

```
src/components/
├── Input/
│   ├── Input.tsx
│   ├── Input.module.css
│   └── Input.stories.tsx
├── Toast/
│   ├── Toast.tsx
│   ├── Toast.module.css
│   └── Toast.stories.tsx
└── SidebarMenu/
    ├── SidebarMenu.tsx
    ├── SidebarMenu.module.css
    └── SidebarMenu.stories.tsx
```

