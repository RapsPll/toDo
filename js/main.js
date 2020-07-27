{
  const tasks = [
    {
      content: "Uczyć się",
      done: false,
    },
    {
      content: "Zjeść śniadanie",
      done: true,
    }
  ];

  const addNewTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
    });

    render();
  }

  const removeTask = (index) => {
    tasks.splice(index, 1);
    render();
  }

  const toggleTaskDone = (index) => {
    tasks[index].done = !tasks[index].done
    render();
  }

  const bindEvents = () => {
    const removeButtons = document.querySelectorAll(".js-remove");
    
    removeButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        removeTask(index);
      })
    })

    const toggleDoneButton = document.querySelectorAll(".js-done");
    
    toggleDoneButton.forEach((toggleDoneButton, index) => {
      toggleDoneButton.addEventListener("click", () => {
        toggleTaskDone(index);
      });
    });
  }

  const render = () => {
    let htmlString = "";
    for (const task of tasks) {
      htmlString += `
      <li ${task.done ? "style = \"text-decoration: line-through\" " : ""}>
      <button class="js-remove"> Usuń zadanie</button>
      <button class="js-done">Zrobione</button>
      ${task.content}
      </li>
      `;
    }

    document.querySelector(".js-tasks").innerHTML=htmlString;

    

    bindEvents();


    };



    const onFormSubmit = (event) => {
      event.preventDefault();

      const newTaskContent = document.querySelector(".js-newTask").value.trim();

      if (newTaskContent === "") {
        return;
      }

      addNewTask(newTaskContent);



    }

    const init = () => {
      render ();

      const form = document.querySelector(".js-form");

      form.addEventListener("submit", onFormSubmit);

    };

    init();
};

