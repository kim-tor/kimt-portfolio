import budget from "../img/budget.jpg";
import mindlink from "../img/mindlink.JPG";
import postmeal from "../img/postmeal.png";
import workitout from "../img/workitout.jpg";

const projectData = [
    {
        title: "Budget Tracker",
        image: budget,
        description: "Budget tracker that takes in income and expenses and updates your balance",
        deployed: "https://kat-budget-tracker.herokuapp.com/",
        github: "https://github.com/kim-tor/budget_tracker"
    },

    {
        title: "Work it out",
        image: workitout,
        description: "Create workouts and track all exercises you have done",
        deployed:"https://kt-fitness-tracker.herokuapp.com/",
        github:"https://github.com/kim-tor/workitout"
    },
    {
        title: "Post Meal",
        image: postmeal,
        description: "Share all your meals with fellow foodies",
        deployed: "https://postmeal.herokuapp.com/",
        github: "https://github.com/canahuate16/PostMeal"
    },
    {
        title: "Mind Link",
        image: mindlink,
        description: "Share your feelings and find resources to maintain a positive outlook and know you are not alone",
        deployed: " https://mind-link.herokuapp.com/",
        github: "https://github.com/kim-tor/mind-link"
    }
]

export default projectData;