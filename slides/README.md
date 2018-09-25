<!-- slide {class="title-slide"} -->
<div class="title">
    <h1>Mobile applications with React Native</h1>
</div>

<div class="signature"> 
    <div class="author">
        <div class="image">
            <img src="css/imgs/doncho-minkov.jpg"/>
        </div>
        <div class="text">
            <strong>Doncho Minkov</strong>
            <div class="title-name">Senior full-stack developer</div>
            <div class="company">Software University</div>
        </div>
    </div>
    <div class="date">
        29-Sep-2018
    </div>
</div>

<!-- slide {class="who-am-i" style="font-size:0.85em"} -->
# Who am I?
<div style="display:flex;">
    <div style="">
        <h3>Doncho Minkov</h3>
        <ul>
            <li>
                Senior full-stack developer & trainer
                <ul>
                    <li>
                        @ Software University
                    </li>
                    <li>
                        ASP.NET Core & React.js
                    </li>
                </ul>
            </li>
            <li>
                15+ years in IT
                <ul>
                    <li>
                        8+ as a technical trainer & developer
                    </li>
                    <li>
                        Front-end developer by heart
                        <ul>
                            <li>
                                Software developer by need
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                Experience with mobile development
                <ul>
                    <li>Android, iOS, Windows, React Native, NativeScript, Xamarin, Apache Cordova, Ionic</li>
                </ul>
            </li>
            <li>
                Loves JavaScript: AngularJS, Angular, React, Node.js, etc..
            </li>
            <li>Also fluent in .NET, Java, C++, Python</li>
            <li>Deep knowledge of Data Structures and Algorithms</li>
        </ul>
    </div>
    <div style="position: absolute; top: 10px; right: 100px; width: 35%">
        <div style="text-align: center">
            <img src="css/imgs/doncho-minkov.jpg" style="width: 100%; border: 1px solid #000; border-radius: 5px;"/>
        </div>
        <ul style="list-style-type: none; margin: 0; padding: 0; display: flex; justify-content:space-between">
            <li>
                <a href="https://github.com/minkov" target="_blank" class="icon github" style="margin-right: 15px"></a>
            </li>
            <li>
                <a href="https://bg.linkedin.com/in/donchominkov"  target="_blank" class="icon linkedin" style="margin-right: 15px"></a>
            </li>
            <li>
                <a href="https://www.hackerrank.com/DonchoMinkov"  target="_blank" class="icon hackerrank" style="margin-right: 15px"></a>
            </li>
            <li>
                <a href="https://leetcode.com/doncho/"  target="_blank" class="icon leetcode" style="margin-right: 15px"></a>
            </li>
            <li>
                <a href="mailto:donchominkov@gmail.com"  target="_blank" class="icon email"></a>
            </li>
            <li>
                <a href="http://minkov.it"  target="_blank" class="icon www"></a>
            </li>
        </ul>
    </div>
</div>


<!-- slide -->
# Table of contents

- What is React and React Native?
- Components in React Native

<!-- slide {class="demo-slide"} -->
# React & React Native

<!-- slide -->
# React

- React is a JavaScript framework for building **web applications**
- React is the **View** of MVC
- Use JSX to declare components
	- Something like custom HTML tags
	- 

<pre><code>class TodosApp extends Component {
	state = { todos: [] };

	render() {
		const { todos } = this.state;

		return (
			<ul class="list list-todos">
				{
					todos.map(todo => <Todo {...todo} />)
				}
			</ul>
		)
	}
}</code></pre>

<!-- slide -->

# React Native
- React is a JavaScript framework for building **mobile applications**
	- Applications are native for Android and iOS
	- Build mobile applications with shared code base
		-	Code once, run everywhere
- Use React and JavaScript know-how for building mobile apps
	- No need to learn Java/Kotlin or Swift/Obj-C

```jsx
// Insert TODO list for React Native here
```


<!-- slide -->

<div class="compare">
	<div class="line header">
		<strong>React</strong>
		<strong>React Native</strong>
	</div>
	<div class="line">
		<div>For the **web**</div>
		<div>For **iOS** and **Android**</div>
	</div>
	<div class="line">
		<div>Runs in the browser</div>
		<div>Runs on a device</div>
	</div>
	<div class="line">
		<div>Uses **common HTML tags**</div>
		<div>Uses **React Native XML elements**</div>
	</div>
	<div class="line">
		<div>Uses **browser APIs**</div>
		<div>Uses **device APIs**</div>
	</div>
</div>

<!-- slide {class="title-slide"} -->
<div class="title">
    <h1>Questions</h1>
</div>

<div class="title">
    <h2>Mobile applications with React Native</h2>
</div>

<div class="signature"> 
    <div class="author">
        <div class="image">
            <img src="css/imgs/doncho-minkov.jpg"/>
        </div>
        <div class="text">
            <strong>Doncho Minkov</strong>
            <div class="title-name">Senior full-stack developer</div>
            <div class="company">Software University</div>
        </div>
    </div>
    <div class="date">
        29-Sep-2018
    </div>
</div>
