# Movie Mania

<img src="https://github.com/BrijenMakwana/movie-mania/blob/main/src/images/logo.png" width="200" style="border-radius:50px;">

Access this site at [movie-mania-brijen.vercel.app](https://movie-mania-brijen.vercel.app/)

## Table of Content:

- [About The App](#about-the-app)
- [Screenshots](#screenshots)
- [Technologies](#technologies-and-tools)
- [Setup](#setup)
- [Approach](#approach)

## About The App

Movie Mania is a one stop search site for all movies and tv series. You can stay updated with all latest releases, upcoming releases and much more. It shows a well organised collection of movies and series. You can click on any show to get more details about the show like story plot, ratings, release date and duration of that show. You can also search for any specific movie. It also shows trailer which you can directly see in the site. It uses React Router 6 for navigation and axios for API calling.

## Screenshots

![App Screenshot](https://github.com/BrijenMakwana/movie-mania/blob/main/public/movie_mania_1.png)
![App Screenshot](https://github.com/BrijenMakwana/movie-mania/blob/main/public/movie_mania_2.png)
![App Screenshot](https://github.com/BrijenMakwana/movie-mania/blob/main/public/movie_mania_3.png)
![App Screenshot](https://github.com/BrijenMakwana/movie-mania/blob/main/public/movie_mania_4.png)


## Technologies and Tools

- React
- Javascript
- CSS styling
- Axios
- React Router 6

## Setup

1. Download or clone the repository

2. Run below command to install all the dependency
```
npm i
```

3. Run below command to start the project
```
npm start
```

## Approach

I have used [TMDB](https://www.themoviedb.org) API to get all movie and tv series data. Axios is used to call the api. All the data stored in a state. I have created a custom component called ShowComponent that display all the movie poster data in a row. Then I have used javascript map function to display all the data from that state in this component.
I also implemented search functionality, which is created with a input component. Latest version of React Router is used which is version 6.

