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

  const renderTask = () => {
    let htmlString = "";
    for (const task of tasks) {
      htmlString += `
      <li class="task form__task" >
      <button class="list__buttonDone js-done">${task.done ? "&#10003;" : " "} </button>
      <span ${task.done ? "style = \"text-decoration: line-through\" " : ""} >${task.content}</span>
      <div class="test"><button class="list__buttonRemove js-remove">🗑️</button></div>
      </li>
      `;
    }
    

    document.querySelector(".js-tasks").innerHTML=htmlString;
  }

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
    renderTask();

    bindEvents();

    };


    const onFormSubmit = (event) => {
      event.preventDefault();

      const newTaskElement = document.querySelector(".js-newTask");
      const newTaskContent = newTaskElement.value.trim();

      if (newTaskContent !== "") {
        addNewTask(newTaskContent);
        newTaskElement.value = "";
      }

      newTaskElement.focus();



    }

    const init = () => {
      render ();

      const form = document.querySelector(".js-form");

      form.addEventListener("submit", onFormSubmit);

    };

    init();
};

