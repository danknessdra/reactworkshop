<details open>
    <summary style="font-size: 2rem">Requirements</summary>

Little to no knowledge of Javascript

Also please download node.js and git before the workshop if you don't already have them.

We will be using VScode but you can use any IDE
* if you're using VScode do ctrl+shift+v to open md preview
</details>

<details open>
    <summary style="font-size: 2rem">Intro to Figma</summary>

This workshop is best enjoyed sequentially *so don't skip ahead*


What is a wireframe?
* A simple mock up of a website

Why figma?
* designers and developers can collaborate
* colors
* alignment
* can be organized

#### We will be trying to recreate this figma design.
![shop design ](/src/images/figma%20design.png)
</details>

<details open>
<summary style="font-size: 2rem">Set Up</summary>

1. Navigate to Github directory in the terminal
1. If you don’t have one, cd into Documents
1. mkdir Github
1. cd .\Github
1. Git clone https://github.com/danknessdra/reactworkshop.git
    * If (!git) {
        * git config --global user.email "janedoe@gmail.com"
        * git config --global user.name "Jane Doe"
    * }
1. npm install
1. npm start
</details>

<details>
<summary style= "font-size: 2rem"> Please don't open these before we tell you too </summary>

[![rick roll](/public/logo.jpg)](http://www.youtube.com/watch?v=dQw4w9WgXcQ)
</details>

<details>
    <summary style="font-size: 2rem">Explain components</summary>

* Components are like html elements made by us.
* You can make html elements that are highly complex, reactive, and styled.
* Components also allow for the javascript, styling, and associated data to be together in one place that makes sense
* One of the biggest advantages of components is their reusability.
* Reusing a component cleans up html files and removes duplicate sections, increasing readability
</details>

<details>
    <summary style="font-size: 2rem">Use components to try to build the website</summary>

* What is flex
    * a div with a css property allowing unique functionality
    * flexible container for holding items and automatically allocating space

You have been provided a product component. Make use of `<div>`, `<hr>`, and `<Product>`.
</details>

<details>
    <summary style="font-size: 2rem">Component inception</summary>

### Components can be made with other components inside of them

Now instead of placing them all by hand add the Product component to the shelf component and place 3 shelf components.
</details>

<details>
    <summary style="font-size: 2rem">Mind blowing Figma moment </summary>

![structure of elements in the wire frame](/src/images/componenets.png)

Notice that in figma we have organized the elements of the wire frame in a way that can easily be translated too elements in react js
</details>