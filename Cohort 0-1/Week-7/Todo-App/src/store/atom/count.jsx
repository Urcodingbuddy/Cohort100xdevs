import { atom, selector } from "recoil";

export const countAtom = atom({
    key: "countAtom",
    default: 0
});
export const TodosAtom = atom({
    key: "todosAtom",
    default: [], // initialize with an empty array
  });
  
  export const FilterAtom = atom({
    key: "filterAtom",
    default: "", // initialize with an empty string
  });

  export const FilteredTodo = selector({
    key: "FilteredTodo",
    get: ({ get }) => {
      const todos = get(TodosAtom);
      const filter = get(FilterAtom);
      if (filter.trim() === "") {
        return todos;
      } else {
        return todos.filter((todo) => {
          const titleMatch = todo.title.toLowerCase().includes(filter.toLowerCase());
          const descriptionMatch = todo.description.toLowerCase().includes(filter.toLowerCase());
          return titleMatch || descriptionMatch;
        });
      }
    }
  })