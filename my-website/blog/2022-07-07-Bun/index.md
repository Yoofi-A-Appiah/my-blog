---
slug: bun runtime environment
title: Goodbye Node js
authors: [yoofi]
tags: [javascript, runtime environment]
hide_table_of_contents: false

---

May 27, 2009 an open source runtime environment was released. Node js revolutionized server-side applications and made countless impossibilities a reality. Now there is a new kid on the block. <h2>Who is this new kid you speak of? 🤔</h2> <!--truncate--> <a href="https://bun.sh/"> Bun </a>
(and before you ask yes all the cool names have already been taken 😅 ) is a new open source runtime environment created by <a href="https://jarredsumner.com/">Jared Sumner</a> and over 40 contributors. This nerdy looking runtime environment really packs a punch.
According to its creator it was made to: <ol><li>Start fast</li> <li>Have new levels of performance</li> <li>To be a great and complete tool.</li></ol>  
On its beta release it's creator made a claim to be the an increadibly fast all all-in-one JavaScript

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Introducing Bun - an incredibly fast all-in-one JavaScript runtime. <a href="https://t.co/Yt6tAcnBQs">https://t.co/Yt6tAcnBQs</a></p>&mdash; Jarred Sumner (@jarredsumner) <a href="https://twitter.com/jarredsumner/status/1544460933753229312?ref_src=twsrc%5Etfw">July 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> runtime. 


![Other](fastbun.jpg)

## How fast you ask? 🚀
Here are the benchmark performances of Bun in comparision to Node js and Deno.
<br>
</br>

![Other](Bun.png)
![two](<Bun(1).png>)
![Other](<Bun(2).png>)
Take a moment to soak in those number. And yes its legit well atleast according to <a href="https://bun.sh/">Bun</a> they are . It is not looking good for deno but i am sure <a href="https://en.wikipedia.org/wiki/Ryan_Dahl">Ryan Dahl</a> and the team at deno have somethng up their sleeve.

## How does it work? ⚙️
Well Node Js uses googles <a href="https://v8.dev/">V8 engine</a> and has made it a great tool because of <a href="https://www.ibm.com/docs/en/sdk-java-technology/8?topic=reference-jit-compiler">JIT (Just In Time) compilation</a>. Now Bun uses the <a href="https://developer.apple.com/documentation/javascriptcore">JavaScript Core </a> which is considered to be faster. It was also written in a low level language <a href="https://ziglang.org/">Zig</a> which is like C and Rust had a baby. Low level control of memory and lack of hidden control flow are the features of Zig that make Bun as fast as it is

## Features 📋 
<ul>
<li>
Native bundler that replaces Web Pack
</li>
<li>
Transpiler that enables TypesScript to be written out of the box
</li>
<li>
Task runner
</li>
<li>
npm client
</li>
<li>
Automatically loaded environment variable (bye bye require("dotenv").load()).
</li>
<li>
Native Test runner
</li>
<li>
90% of the Node Api functions
</li>
<li>
<a href="https://bun.sh/">
and more</a>
</li>
</ul>

I don't think it can get better than this.<br></br>
It is worth noting that since its a new tool it will be buggy. It will be best to use a WSL ( Windows Subsystem for Linux)

The introduction of Bun will definitely be a dream come true for many developers. However will this tool stand the test of time or become the next Windows 8. Hopefully not.
If you would like more information on Bun <a href="https://bun.sh/">click here</a>
Thanks for reading
