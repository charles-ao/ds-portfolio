import weatherApp from '../assets/portfolio/weather-app.png';
import carbon from '../assets/portfolio/carbon.png';
import d3 from '../assets/portfolio/d3.png';
import figo from '../assets/portfolio/figo.png';
import jock from '../assets/portfolio/jock.png';
import microsoft from '../assets/portfolio/microsoft.png'
import portfolio from '../assets/portfolio/portfolio.png';
import breastcancer from '../assets/portfolio/breast-cancer.png';
import electricity from '../assets/portfolio/electricity.png';
import sentiment from '../assets/portfolio/sentiment.png';
import market from '../assets/portfolio/market.png';
import flowers from '../assets/portfolio/flowers.png';
import spending from '../assets/portfolio/spending.png';

const data = [
  {
    id: 15,      
    title: 'Breast Cancer Diagnosis with ANN',
    category: 'data',
    tool: ['ANN', 'Neural Network', 'TensorFlow', 'Python', 'Keras'],
    detail: 'The implementation of Artificial Neural Networks and Deep Learning to solve the breast cancer diagnosis classification problem by fitting, training and testing an ANN model',
    img: breastcancer,
    website: 'https://medium.com/@charles-ao/diagnosing-breast-cancer-using-artificial-neural-networks-ann-866e1bfe60d8',
    github: 'https://github.com/charles-ao/wisconsin-breastcancer-ann'
  },
  {
    id: 17,      
    title: 'Sustainable Electricity Generation',
    category: 'data',
    tool: ['Power BI'],
    detail: 'This report is an investigation into sustainable electric energy generation across eastern Europe between the years of 2010 and 2019. All the Analyses and visualisations carried out in this report were done on Power BI.',
    img: electricity,
    website: 'https://medium.com/@charles-ao/sustainable-electric-energy-generation-across-eastern-europe-9c66672ea5d9',
    github: 'https://github.com/charles-ao/sustainable-electricity'
  },
  {
    id: 33242,      
    title: 'Carbon Homepage Clone',
    category: 'frontend',
    tool: ['React', 'React DOM', 'Context API', 'React Animate Onscroll'],
    detail: 'A web homepage clone of the Cabon Nigeria Official website built on the React frontend framework. Original Carbon Web Address: https://ng.getcarbon.co/',
    img: carbon,
    website: 'https://carbon-homepage-clone.netlify.app',
    github: 'https://github.com/charles-ao/carbon-homepage-clone'
  },
  {
    id: 2,      
    title: "Classifying Images of Flowers",
    category: 'data',
    tool: ['ConvNet',  'TensorFlow', 'Python'],
    detail: "Application of Convolutional Neural Networks (CNNs) to classify several flowers images taking into account Image Augmentation techniques using Tensorflow",
    img: flowers,
    website: 'https://medium.com/@charles-ao/classifying-images-of-flowers-using-convolutional-neural-networks-cnns-ce567b864604',
    github: 'https://github.com/charles-ao/flowers_cnn'
  },
  {
    id: 2,      
    title: "An Analysis on Tourists' Opinions",
    category: 'data',
    tool: ['NLTK',  'Vader', 'Python', 'Pandas', 'Word Cloud'],
    detail: "The implementation of sentiment analysis and text mining to study customer opinions and extract insights. The analysis is focused on all reviews collated from tourists who visited several Hotels and Restaurants in Choeng Thale, Thailand",
    img: sentiment,
    website: 'https://medium.com/@charles-ao/application-of-sentiment-analysis-in-studying-tourists-opinions-on-hospitality-services-b1e7501cc088',
    github: 'https://github.com/charles-ao/tourists-sentiment-analysis'
  },
  {
    id: 3,      
    title: 'Microsoft Homepage Clone',
    category: 'frontend',
    tool: ['React', 'React DOM', 'Context API'],
    detail: 'A web homepage clone of Microsoft Official website built on the React frontend framework. Original Microsoft Web Address: https://www.microsoft.com/en-gb/.',
    img: microsoft,
    website: 'https://adedunmola-microsoft-homepage-clone.netlify.app',
    github: 'https://github.com/charles-ao/microsoft-homepage-clone'
  },
  {
    id: 20,      
    title: 'Online Retail Market Basket Analysis',
    category: 'data',
    tool: ['Association Rule Mining', 'Apriori', 'Python'],
    detail: 'A Market Basket analysis; an application on Association Rule Mining, was carried out in this analysis to identify customer purchase patterns in a selected online retail dataset and consequently to discover insights that would facilitate customer understanding.',
    img: market,
    website: 'https://medium.com/@charles-ao/market-basket-analysis-in-online-retail-business-9e8f84f227e1',
    github: 'https://github.com/charles-ao/ARM-market-basket'
  },
  {
    id: 250,      
    title: 'Customer Base Segmentation',
    category: 'data',
    tool: ['K-Means Clustering', 'Scikit Learn', 'Python'],
    detail: 'This analysis is an implementation of a centroid-based clustering method - K-means clustering algorithm - to segment a customer base based on their product purchase history and to analyse what each of these customer groups represent.',
    img: spending,
    website: 'https://medium.com/@charles-ao/implementation-of-cluster-analysis-for-customer-segmentation-based-on-spending-history-705377d25d2b',
    github: 'https://github.com/charles-ao/kmeans-spending-history'
  },
  {
    id: 7,      
    title: 'Jock Equipment Store',
    category: 'frontend',
    tool: ['React', 'React DOM', 'Context API'],
    detail: 'A proposed welcome page for a sport equipment onlne store, with a product search feature',
    img: jock,
    website: 'https://jock-landing-page.netlify.app',
    github: 'https://github.com/charles-ao/jock_landingpage'
  },
  {
    id: 5,      
    title: "Adedunmola's Portfolio",
    category: 'frontend',
    tool: ['React', 'React DOM', 'Context API'],
    detail: 'My personal portfolio designed on figma and Built by me on the React Framework',
    img: portfolio,
    website: 'https://charles-ao.github.io/portfolio',
    github: 'https://github.com/charles-ao'
  },
  {
    id: 9,      
    title: 'Restaurant Landing Page',
    category: 'frontend',
    tool: ['Html', 'CSS', 'Bootstrap'],
    detail: 'A Restaurant/Eatery Landing Page created with the Bootstrap Styling frame work. U.I Design from S.M Sowkot.',
    img: figo,
    website: 'https://charles-ao.github.io/restaurant_landing_page',
    github: 'https://github.com/charles-ao/restaurant_landing_page'
  },
  {
    id: 11,      
    title: 'Weather App',
    category: 'frontend',
    tool: ['Html', 'CSS', 'jQuery', 'API'],
    detail: 'A Weather forecast application to that shows the current Weather temperature with other details with daily and hourly forecasts.',
    img: weatherApp,
    website: 'https://charles-ao.github.io/weather-app',
    github: 'https://github.com/charles-ao/weather-app'
  },
  {
    id: 13,      
    title: 'Visualizing Data with D3',
    category: 'frontend',
    tool: ['Html', 'CSS', 'D3.js', 'TopoJSON'],
    detail: 'Visualized Dynamic and Interactive Bar-chart, Scatterplot and Choropleth Charts with Data Driven Documents (D3.JS) on a web application',
    img: d3,
    website: 'https://charles-ao.github.io/data-visualization',
    github: 'https://github.com/charles-ao/data-visualization'
  }
]

export default data;