const initialData = [
    {
        id: 1,
        name: "Grocery Shopping",
        items: [
            {
                id: 1,
                itemName: "Buy Milk",
                status: "Pending",
                createdDate: "2025-01-05",
                endDate: "2025-01-07"
            },
            {
                id: 2,
                itemName: "Buy Bread",
                status: "Completed",
                createdDate: "2025-01-03",
                endDate: "2025-01-04"
            }
        ],
        createdDate: "2025-01-01"
    },
    {
        id: 2,
        name: "Work Tasks",
        items: [
            {
                id: 1,
                itemName: "Submit Report",
                status: "Pending",
                createdDate: "2025-01-02",
                endDate: "2025-01-06"
            }
        ],
        createdDate: "2025-01-01"
    },
    {
        id: 3,
        name: "Fitness Goals",
        items: [
            {
                id: 1,
                itemName: "Do Yoga",
                status: "In Progress",
                createdDate: "2025-01-04",
                endDate: "2025-01-08"
            }
        ],
        createdDate: "2025-01-03"
    },
    {
        id: 4,
        name: "Home Maintenance",
        items: [
            {
                id: 1,
                itemName: "Fix the faucet",
                status: "Pending",
                createdDate: "2025-01-01",
                endDate: "2025-01-10"
            }
        ],
        createdDate: "2025-01-01"
    },
    {
        id: 5,
        name: "Travel Plans",
        items: [
            {
                id: 1,
                itemName: "Book Train Tickets",
                status: "Completed",
                createdDate: "2025-01-03",
                endDate: "2025-01-03"
            }
        ],
        createdDate: "2025-01-02"
    }
]


function App() {
  return (
    <div className="todo-page">
        <aside className="todo-page__sidebar">
            <header className="todo-page__sidebar-header heading-primary">
                <h1>ToDo</h1>
            </header>
            <div className="todo-page__sidebar-search">
                <input type="text"/>
            </div>
            <nav>
                <ul>
                </ul>
            </nav>
        </aside>
        <main className="todo-page__content"></main>
    </div>
  );
}

export default App;
