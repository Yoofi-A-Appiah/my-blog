---
slug: machine learning with javascript
title: What JavaScript can't do?🤯
authors: [yoofi]
tags: [javascript, machine learning, artificial intelligence]
---

A few weeks ago I asked myself "What can't JavaScript do?" and it led to a very intriguing discovery. Did you know Machine learning is possible with JavaScript?🤯 Well, I definitely did not.

> I think it’s safe to call JavaScript a _Jack-of-all-trades master of all_ programming language.

**Here are :seven: budding JavaScript Machine Learning Libraries you should try today.**
![Other](machine.jpg)

<!--truncate-->

[*If you have want more understanding on what Machine learning is you can click here (I don’t want anyone to be left out*😄*)*](https://www.ibm.com/cloud/learn/machine-learning).

Let's consider the following libraries

1. [ **Brain.js** ](https://brain.js.org) – this library simplifies [neural networks](https://en.wikipedia.org/wiki/Neural_network) by concealing the underlying mathematical complexities (less math is always a win for me). It is a GPU accelerated making it very fast but can easily fall back to pure JavaScript when GPU is not available. https://brain.js.org

2. [ **TensorFlow.js** ](https://www.tensorflow.org/js/) – This can be considered as on of the most popular JS framework for Machine Learning. Google created this API that builds and trains models from scratch using JavaScript in your browser.

3. [ **ml5.js** ](https://ml5js.org/) – it handles mathematical operations and memory management for machine language algorithms. It can be considered as a more friendly interface to TensorFlow.

4. [**Synaptic js**](http://caza.la/synaptic/#/) – is an architecture free neural network for Node JS and your browser. Created by MIT, it easily trains firs order or second order neural networks. It incorporates architectures like long short term memory networks, multilayer perceptrons among others. It even has a cool demo that shows machine trained creatures learning to explore the screen of your browser on their homepage.

5. [**Mind.js**](https://stevenmiller888.github.io/mindjs.net/) – it is a neural network library primed for prediction. It easily processes training data and in no time can make well informed predictions. Networks can be pre-trained before release with Mind js.

6. [**Keras.js**](https://transcranial.github.io/keras-js/#/) – It is a GPU accelerated library great for deep learning. With Keras.js backends are abstracted away, and models can be trained in any backend, including [TensorFlow](https://www.tensorflow.org/resources/learn-ml?gclid=Cj0KCQjwlemWBhDUARIsAFp1rLVuynm9HzUEPqZfAi0EIKFC8pQCAunwM0tfCmiB2aD9ZyXfouZeUf8aAjYYEALw_wcB) and [CNTK(Microsoft Cognitive Toolkit)](https://docs.microsoft.com/en-us/cognitive-toolkit/). Companies like Netflix use Keras.js to enhance their platform experience. Even NASA uses it for AI related projects. It is supported by WebGL which is a JS API for rendering 2D and 3D image in your browser.

7. [**Covnet js**](https://cs.stanford.edu/people/karpathy/convnetjs/) – is another framework great for deep learning right in your browser which boasts of how easy it is to use. No software requirements, no compilers, no installations, no GPUs, no sweat.

---

<h3>So why use JavaScript for Machine Learning? 🤔</h3>

![why](why.png)

For those of you who are committed to the ‘python is the soulmate for machine learning bit’ allow me to sell you on JavaScript as an equally good if not better option for Machine Learning.

---

- <mark>Machine Learning in a private environment</mark> – With increasing awareness for privacy concern, users might not be willing to give their photos and messages away to outsourced servers. JavaScript ML libraries are a solution to this because these learning models can be compressed to reside on the user’s device. Users will not have to install JavaScript because of its worldwide browser support. [^1]

- <mark>Speed, Speed and more Speed</mark> - Application which will require round the clock communication between client and server will have to be built upon a fast framework. Modern JavaScript compiles to machine language making it faster than Python. [Benchmarks here](https://benchmarksgame-team.pages.debian.net/benchmarksgame/fastest/python.html) [^1]

- <mark>A “serverless” feature</mark> - The process of delivering the device's data to the server might result in a delay in some applications, degrading the user experience. In situations where the user might not have internet connection, JavaScript Machine Learning Models which run on the user’s device will prove to be useful [^1]

- <mark>Mobile and Web application integration</mark> – Python in mobile OS is still in its infancy. With JavaScript ML models, it will be easier to integrate with cross-platform mobile applications. This is done by running a webview within the application. This integration is not possible with React but Google’s release of [TensorFlow for React Native](https://blog.tensorflow.org/2020/02/tensorflowjs-for-react-native-is-here.html) makes this a possibility. [^1]

So, if you’re considering Machine Learning or are familiar with the JavaScript language, consider these options too. They are powerful libraries with lots of potential. Thanks, if you made it this far. (But seriously check them out. Their capabilities are mind blowing)

References
[^1]: https://venturebeat.com/2021/04/23/4-reasons-to-learn-machine-learning-with-javascript/.
