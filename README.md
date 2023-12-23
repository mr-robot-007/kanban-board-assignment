
# Kanban-Board


- All the data is first fetched from an API and stored in the redux store.
- Redux store additionally stores groupBy and orderBy information and the same is also stored in local storage, so this info can persist between renders.
- In store, we also store the title of each column for different groupBy conditions in the array.
- Then these titles along with data from API are passed to the Board Component from where titles are mapped and columns are created. Then in each column, data is filtered based on the title.
- For eg.
  - if the title is "Backlog", then items with the status as backlog will be filtered as they need to be rendered in that column.
- Then Filtered data array is mapped and Card elements are created where each card element receives data to be rendered.
## Run Locally

Clone the project

```bash
  git clone https://github.com/mr-robot-007/kanban-board-assignment
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Tech Stack

**Client:** React, Redux, TailwindCSS



## Demo

Deployment - https://kanban-board-4321.web.app/


      

  
