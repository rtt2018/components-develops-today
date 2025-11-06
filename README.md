# Test task

Test task for DevelopsToday



## 1. Input component

Custom input component with two modes:
 - text
 - password




### Example:
```
<Input type="password" clearable={true} />

```
 For switch mode use props: 
|  Props    | Type     |   Value   |  Description                |
| :-------- | :------- |:----| :------------------------- |
| `type` | `union of literals` | `'text' \| 'password'`| If prop missing - default mode `text` |
| `clearable`| `boolean`| `true \| false`| Default - `false`|



### Screenshots
Custom input type text
![Custom input type text](https://github.com/user-attachments/assets/6ce8cac3-85cc-4468-8a39-e5584ba267ca)

Custom input type password with clear button
![Custom input type password with clear button](https://github.com/user-attachments/assets/b9716cff-6e6f-4b70-b6fc-052bf0985ce0)

## 2. Toast component

A simple Toast component with a call using CustomEvent. This approach allows you to easily control the display of the Toast and easily pass data to it. The component can accept several props that affect the behavior of the component and can be used to control the data to be displayed. 

### Example:

Toast component for `primaryData="props"`: 
```
<Toast 
    text="Hello!!" 
    primaryData="props" 
    eventName="showPropToast" 
    delay={1000}
    enableCloseButton={false}
    transition="slide"
/>
```
Show Toast function (onClick callback): 

```
<button
    type="button"
    className={styles.showToast}
    onClick={() =>
        window.dispatchEvent(new CustomEvent('showPropToast'))
    }
>
Show Toast
</button>
```

Toast component for `primaryData="event"`: 
```
<Toast 
    text="" 
    primaryData="event" 
    eventName="showEventToast" 
/>
```
Show Toast function (onClick callback): 

```
<button
    type="button"
    className={styles.showToast}
    onClick={() =>
        window.dispatchEvent(
            new CustomEvent('showEventToast', {
                detail: {
                    text: 'Hello!',
                    delay: 2000,
                    enableCloseButton: true,
                    transition: 'slide',
                },
            }),
        )
    }
>
Show Toast
</button>
```

### Props
Below is a description of the props and an example of displaying a Toast

|  Props    | Type     |   Value   | Use in| Description                |
| :-------- | :------- |:----| :----|:------------------------- |
|`primaryData`|`union of literals`|`'props' \| 'event'`|props|**Required**. Switches the source of data for displaying Toast|
| `eventName` | `string` | arbitrary value|props & event; **props === event** | **Required**. You can enter any value. Must match the value in the Toast display function |
|`text`|`string`|arbitrary value|props \| event|**Required**. Text to display in Toast|
|`delay`|`number`|arbitrary value|props \| event|Toast display duration in ms|
|`enableCloseButton`|`boolean`|`true \| false`|props \| event|Activating the display of the Toast close button|
|`transition`|`union of literals`|`'fade' \| 'slide'`|props \| event|Specifies the type of animation when the Toast appears and disappears.|

### Screenshots

Displaying a Toast with a close button and data passed through props
![Displaying a Toast with a close button and data passed through props](https://github.com/user-attachments/assets/af864022-d337-46bc-8900-0e0713f3d614)

Displaying a Toast without a close button and with data passed via an event, with a slide-like animation
![Displaying a Toast without a close button and with data passed via an event, with a slide-like animation](https://github.com/user-attachments/assets/4134848f-2ab2-4b9b-a013-fbf5832a5710)

## 3. SidebarMenu component

Sidebar menu with two levels. Closes when clicked outside of it. Has a submenu opening button with animation

### Props
Below is a description of the props and an example of displaying a Toast

|  Props    | Type     |   Description                |
| :-------- | :------- |:------------------------- |
|`menuElements`|`Array of Objects`|**Required**. Props gets an array of data for rendering the menu|

### Data structure for menu rendering:

```
[
  {
    id: '1',
    title: 'Home',
    path: '/home',
    subMenu: [
      { id: '11', title: 'Hero', path: '/hero' },
      { id: '12', title: 'About', path: '/about' },
    ],
  },
  { id: '2', title: 'Gallery', path: '/gallery' },
  {
    id: '3',
    title: 'Someone',
    path: '/someone',
    subMenu: [
      { id: '13', title: 'SomeoneSub', path: '/someonesub' },
      { id: '14', title: 'SomeoneSubSecond', path: '/someonesubsecond' },
    ],
  },
  { id: '4', title: 'SomeoneElse', path: '/someoneelse' },
  { id: '5', title: 'SomeoneElseSecond', path: '/someoneelsesecond' },
]
```

|  Property    | Type     |   Description                |
| :-------- | :------- |:------------------------- |
|`id`|`unique key`|**Required**.Unique key for menu items|
|`title`|`string`|**Required**.Name for menu items|
|`path`|`string`|**Required**.The path to follow after selecting a menu item|
|`subMenu`|`Array of Objects`|Optional. An array of objects to render submenu items. Each submenu item object should contain the same properties as the main menu object|


## Screenshots

![Image](https://github.com/user-attachments/assets/c13a34b6-3d8c-4528-855f-17a9d3ca30d0)
