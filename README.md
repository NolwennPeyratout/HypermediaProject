# Hypermedia Project

This is our implementation of the Hypermedia project

## Group

Riccardo Gianni, 10868744
Nolwenn Peyratout, 10953084
Alessio Alfonsi, 10688058
Yiyue Wang, 10885616

## How to use the project
- moving inside the folder with the terminal (or opening the project with VSCode) and then using:

      npm install

- To run the project you have to use:

      npm run dev

    or

      npm run dev -- -o
    
    to automatically open your project in a new tab of your browser.

## Content
The project contains:
- 11 components
  - CircleContainer
  - HomeCircleComponent
  - HomeRectangleComponent
  - ProjectCard
  - ProjectCardExtended
  - ProjectCardExtendedCustom
  - RectangleContainer
  - RectangleTitle
  - SmallCircleContainer
  - TheFooter
  - TheHeader
- 1 layout: default.vue
- 11 pages, reachable at:
  - / (home page)
  - /areas
  - /areas/:id
  - /projects
  - /projects/:id
  - /projects/Food
  - /projects/IT
  - /projects/Health
  - /projects/MostRelevant
  - /contact
  - /about
- The server with the database

Most of the content is commented to explain how things works.
