3 Features of this Project:

1. Course Management:
   
   i) Users can add courses to their list, and these courses are    displayed in a column.
   
   ii) A course can only be added once to prevent duplication.

2. Toast Notifications:

   i) When a user tries to add a course that they've already taken, a toast notification is shown to alert them.

   ii) Another toast notification is displayed if a user attempts to exceed the 20-credit limit.

3. Credit Limit:

   i) Implement a credit limit of 20 credits, ensuring users cannot add more courses once they reach this limit.

------------------------------------------------------------------------

I used 5 states in this project.

--> const [showToast,setShowToast] = useState(false);

    I used this state to manage whether or not a toast notification should be displayed. 
    If the conditions aren't valid, 'showToast' will be 'true' and a toast notification will be shown.

--> const [insert,setInsert]=useState([]);

    In 'insert' array there will be those courses that are clicked
    by the users.
    I used 'insert' array to store all the data from JSON as an array of objects

--> const [totalCost,setTotalCost] = useState(0);

    In 'totalCost' variable, I stored the total cost of the courses that had been added by the users.

--> const [totalCredit,setTotalCredit] = useState(0);

    In 'totalCredit' variable, I stored the total Credit of the courses that had been added by the users.

--> const [courses,setCourses]=useState([]);

    In 'courses' array I fetched all the data as an array of objects from the JSON file. 'useEffect()' has also been used to achieve this.
