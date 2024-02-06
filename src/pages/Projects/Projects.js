import './Projects.css';
import Page from "../../components/Page/Page.js";
import Card from "../../components/Card/Card.js";
import Button from "../../mui_components/Button.js";

import Truman from "../../images/Truman_platform.png";
import TSP from "../../images/TSP.png";
import Smart_bike from "../../images/Smart_bike.png";
import IBE_logo from "../../images/IBE_logo.png";
import blackjack from "../../images/Blackjack_game.jpg";
import Data_Sci_Fin from "../../images/Data_Sci_Fin.png";

import bike1 from "../../images/Bike1.jpeg";
import bike2 from "../../images/Bike2.png";
import bike3 from "../../images/Bike3.jpeg";


function Projects(props) {
  return (
    <Page id="Projects" header="Projects">
      <Card 
        image={TSP}
        alt='Graph'
        title='Parallel Programming Final Project'
        subtitle='March 2023 - May 2023'
        description={`In the final semester of my graduate study, I took a parallel programming 
          course. Parallel programming involves finding ways to break down an algorithm into 
          parts that can be run simultaneously or concurrently in hopes that it will reduce the 
          algorithm's runtime. For our final project, two other students and I examined how 
          parallel programming might be applied to the Traveling Salesman Problem (TSP). To 
          quote its Wikipedia page, the TSP asks the question: “Given a list of cities and 
          the distances between each pair of cities, what is the shortest possible route that 
          visits each city exactly once and returns to the origin city?" For example, if a 
          musician on tour wants to visit 20 cities in North America, what is the most efficient 
          order for them to do so?`}
        button1text="View code"
        button1link="https://github.com/rws222/travelling-salesperson"
      >
        <p>
          In the final semester of my graduate study, I took a parallel programming 
          course. Parallel programming involves finding ways to break down an algorithm into 
          parts that can be run simultaneously or concurrently in hopes that it will reduce the 
          algorithm's runtime. For our final project, two other students and I examined how 
          parallel programming might be applied to the Traveling Salesman Problem (TSP). To 
          quote its Wikipedia page, the TSP asks the question: “Given a list of cities and 
          the distances between each pair of cities, what is the shortest possible route that 
          visits each city exactly once and returns to the origin city?" For example, if a 
          musician on tour wants to visit 20 cities in North America, what is the most efficient 
          order for them to do so?
        </p>
        <h3>Time Complexity Background</h3>
        <p>
          One problem with a TSP algorithm is the time it takes to run. The brute force TSP algorithm, which calculates the total distance of every possible order of cities, follows what we call an <i>O(n!)</i> time complexity, which means that its execution time scales by a factor of <i>n!</i> for each additional city. For example, if it takes 2 seconds to solve for 2 cities (<i>2!</i>) and 6 seconds for 3 cities (<i>3!</i>), it would take 3,628,800 seconds (42 days) to solve for just 10 cities (<i>10!</i>). In practice, a computer would be much faster than 2 or 6 seconds for such a small number of cities, but this example still highlights the inefficiency of the TSP brute force algorithm for a greater number of cities. If a delivery driver must make 300 deliveries in a day, using such an algorithm to find the most efficient route is highly impractical. Therefore, we wanted to see what optimizations we could make to improve the runtime of TSP algorithms. 
        </p>
        <h3>Inspiration</h3>
        <p>
          In my senior-year algorithms class, we had a guest lecture from Dr. Jon Bentley, a former professor at Carnegie Mellon University and former researcher at Bell Laboratories. His lecture focused on practical ways to make algorithms more efficient, and he used the TSP as his example. He walked us through both his optimized brute force TSP algorithm as well as a nondeterministic approximation algorithm (k-opt) for TSP, which resulted in a much faster runtime while still providing a near-optimal solution.  
        </p>
        <h3>Our Project</h3>
        <p>
        For our project, we set out to apply our parallel programming knowledge to three TSP algorithms - our own brute force, Dr. Bentley's optimized TSP, and Dr. Bentley's k-opt. While we achieved some minor speedup of the brute force algorithm and Dr. Bentley's optimized algorithm using vector instructions, our biggest achievement was with his k-opt algorithm. The k-opt algorithm involves a repeated set of heuristics that reverse sections of a path if doing so would improve the total distance. In Dr. Bentley’s algorithm, this runs about 250 times. It repeats the overall process four times by generating a new random tour from random starting cities and takes the best iteration as its result. By this design, we were able to rewrite Dr. Bentley's algorithm to run each tour in parallel. We also were able to run the k-opt heuristics in parallel by giving each thread an equal section of the 250 iterations. We ran into a race condition where two or more threads could attempt to write their own best path simultaneously, but we solved this simply by adding a single lock to the results file. It would rarely cause waiting since it is infrequently written to. With Dr. Bentley’s k-opt algorithm, we were able to achieve a speedup of about 7 using 8 threads. We tested it using more, but had significantly diminishing returns, if any. 
        </p>
      </Card>
      <Card 
        image={Truman}
        alt='Truman Project'
        title='Truman Project - Cornell Social Media Lab'
        subtitle='Summer 2022, Fall 2021'
        description="At Lehigh, I completed two independent study (research) courses - one 
          during my senior year and the other for my graduate study. Both times I worked on 
          something called the Truman Project under the direction of Professor Dominic DiFranzo. 
          The Truman Project is a platform that allows researchers to conduct social media 
          experiments in a controlled environment. It is an open-source project that can be 
          downloaded from GitHub (linked below) and adapted for various experiments. Its 
          appearance resembles a typical social media site in which users can create, view, 
          read, and like posts developed by the researchers conducting the experiment. "
        button1text="Truman Description"
        button1link="https://socialmedialab.cornell.edu/the-truman-platform/"
        button2text="Truman Code"
        button2link="https://github.com/cornellsml/truman"
      >
        <p>
          At Lehigh, I completed two independent study (research) courses - one during my senior year and the other for my graduate study. Both times I worked on something called the Truman Project under the direction of Professor Dominic DiFranzo. The Truman Project is a platform that allows researchers to conduct social media experiments in a controlled environment. It is an open-source project that can be downloaded from GitHub (linked below) and adapted for various experiments. Its appearance resembles a typical social media site in which users can create, view, read, and like posts developed by the researchers conducting the experiment. 
        </p>
        <p>
          During my undergraduate independent study, I implemented the ability to add hashtags to posts. Just like other social media sites, when a valid hashtag is recognized, it is added as a link in the post. I also implemented a route in the backend that filters posts by a queried hashtag, so when the user clicks a hashtag, they only see posts with that same hashtag.
        </p>
        <p>
          For my graduate independent study, my task was to develop a script that would automatically generate content for the Truman Project. Prior to my work, all content had to be manually created. The goal of my project was to make the process of generating content significantly easier. I took this project on as a way for me to begin exploring applications of machine learning - a topic I would explore more thoroughly in the following semesters. I also wanted to use free APIs only, and the best one for natural text generation I could find at the time was GPT-Neo, an open-source API from OpenAI, who were only a few months away from releasing ChatGPT. 
        </p>
        <p>
          My content generation script was written in Python. It allowed for a few variables and parameters to be set by the user to produce the desired result. To allow for some choice in the type of content generated, the user would enter the name of any subreddit community. The script would get the most popular posts of the day from that subreddit and then generate similar posts. I then had it use a free commercial image API to find a picture related to the newly generated text for each post. To complete each post, I had it generate a username of the author, a timestamp, and a few other attributes required by the Truman Project.
        </p>
        <p>
          The result was very useful in generating realistic content for a social media platform, eliminating the need to write each post manually from scratch. Professor DiFranzo was very happy with my work. 
        </p>
        <Button href='https://github.com/Social-Design-Lab/truman_content_generation' target="_blank">Project Code</Button>
      </Card>
      <Card 
        image={Smart_bike}
        alt='Smart Bike logo'
        title='Computer Engineering Senior Lab'
        subtitle='August 2021 - May 2022'
        description="For my computer engineering senior lab project, we were allowed to pursue 
          any project of our choosing if it involved the appropriate level of computer 
          engineering work and was something relatively novel. My group and I chose to make a 
          safety system for bicycles. We designed it to have a distance sensor and camera 
          mounted under the seat, facing backward. The sensors were wired to our 
          microcontroller, the Nvidia Jetson Nano, which was wired and mounted to the back of 
          a small monitor on the handlebars. Near the monitor, there were a yellow LED, a red 
          LED, a blue LED, and a speaker. The system was powered by a portable power bank 
          battery mounted to the body of the bike."
      >
        <p>
          For my computer engineering senior lab project, we were allowed to pursue any project of our choosing if it involved the appropriate level of computer engineering work and was something relatively novel. My group and I chose to make a safety system for bicycles. We designed it to have a distance sensor and camera mounted under the seat, facing backward. The sensors were wired to our microcontroller, the Nvidia Jetson Nano, which was wired and mounted to the back of a small monitor on the handlebars. Near the monitor, there were a yellow LED, a red LED, a blue LED, and a speaker. The system was powered by a portable power bank battery mounted to the body of the bike.
        </p>
        <div className='Projects-modal-img-wrapper'>
          <img className='Projects-modal-img' alt='Smart Bike diagram' src={bike2} />
        </div>
        <p>
          If an object such as a car or other bicycle was within four meters of the rear of the bike, the yellow light would flash. If something was within two meters of the bike, the red light would flash and the speaker would play a sound. The rider could press a button to activate the blue LED, which would start blinking on and off as added visibility at night or in harsh weather conditions. 
        </p>
        <div className='Projects-modal-img-wrapper'>
          <img className='Projects-modal-img' alt='Smart Bike diagram' src={bike1} />
        </div>
        <p>
          The other aspect of our bike was the rear-view system. The feed from the camera mounted below the bicycle seat would display on the monitor between the handlebars. The rider could use this as a way to easily check what was behind them. For added visibility, we used OpenCV, a computer vision library, to graphically highlight objects on the screen, making it more obvious to the rider when something was behind them.  
        </p>
        <div className='Projects-modal-img-wrapper'>
          <img className='Projects-modal-img' alt='Smart Bike diagram' src={bike3} />
        </div>
        <p>
          Overall, our Senior Lab professors were happy with our work and appreciated our goal of using technology to improve rider safety. This project was a great way to get hands-on experience applying our degrees.  
        </p>
      </Card>
      <Card 
        image={Data_Sci_Fin}
        alt='Stock chart'
        title='Data Science for Finance Final Project'
        subtitle='March 2022 - May 2022'
        description={`In my last semester of undergraduate study, I took a course called "Data 
          Science for Finance," which applies data science concepts in analyzing financial data. 
          The course's final project was open-ended. My group and I decided to create a website 
          that would determine the user's optimal investment portfolio from a list of S&P 500 
          stocks, popular ETFs, and a risk-free asset (10-year T-bonds) by having them complete 
          a risk aversion assessment. The assessment results in a numeric answer which is then 
          scaled to a reasonable risk aversion variable. We then use a quadratic utility function 
          along with the assessment-determined risk aversion variable to calculate and plot the 
          optimal makeup of this user's investment portfolio.`} 
        button1text='Class website'
        button1link='https://ledatascifi.github.io/ledatascifi-2024/content/about/hall_of_awesomeness.html'
      >
        <p>
          In my last semester of undergraduate study, I took a course called "Data Science for Finance," which applies data science concepts in analyzing financial data. The course's final project was open-ended. My group and I decided to create a website that would determine the user's optimal investment portfolio from a list of S&P 500 stocks, popular ETFs, and a risk-free asset (10-year T-bonds) by having them complete a risk aversion assessment. The assessment results in a numeric answer which is then scaled to a reasonable risk aversion variable. We then use a quadratic utility function along with the assessment-determined risk aversion variable to calculate and plot the optimal makeup of this user's investment portfolio. Our group was the first to make an online dashboard as our final deliverable in the three years of the course being offered.
        </p>
        <p>
          The original website was a Flask project that was hosted on Heroku. After the free tier of Heroku was eliminated, our Professor, Dr. Don Bowen, created a new version on Streamlit which uses our original code on a new interface. He also added the ability to specify the maximum leverage the user is willing to take on as well as the option to customize the securities in the portfolio. View the live project and our group's original code below.
        </p>
        <Button href='https://donbowen-portfolio-frontier-streamlit-dashboard-app-yentvd.streamlit.app' target="_blank">View Project</Button>
        <Button href='https://github.com/rws222/fin377-project-site' target="_blank" style={{marginLeft: '20px'}}>View Code</Button>
        <br /><br />
        <p>
          In addition, my group's final project and my personal website are both featured on the course website's “Hall of Awesomeness,” which you can see at the link below.
        </p>
      </Card>
      <Card 
        image={IBE_logo}
        alt='IBE logo'
        title='IBE Capstone Project'
        subtitle='January 2021 - December 2021'
        description="In 2021, I completed my IBE Capstone project, which involved working with a 
          local community center's new digital makerspace to help bring it business. The first 
          semester of our work focused heavily on research and conducting interviews with members 
          of the community and professionals in the VR space. Our ideas around a business model 
          and target audience for the space pivoted multiple times throughout the semester before 
          we settled on developing a virtual reality learning curriculum for special needs individuals. "
      >
        <p>
          In 2021, I completed my IBE Capstone project, which involved working with a local community center's new digital makerspace to help bring it business. The first semester of our work focused heavily on research and conducting interviews with members of the community and professionals in the VR space. Our ideas around a business model and target audience for the space pivoted multiple times throughout the semester before we settled on developing a virtual reality learning curriculum for special needs individuals. 
        </p>
        <p>
          We expanded on this idea in our second semester of the project. Local professionals with special needs teaching experience assisted us in figuring out the logistics of hosting such a program, including teaching methods, transportation, and safety. We established a relationship with an organization that develops VR lessons for special needs individuals. For example, some of their lessons involve virtually guiding the user through grocery shopping, crossing the street, and joining a conversation. We established a business model and plan to implement our curriculum that included our market research, finances, safety, partnerships, and overall viability all backed by our interviews with technology and education professionals. Finally, we presented our plan to the community center's board of directors, who showed great enthusiasm for our project. 
        </p>
        <p>
          This project was immensely rewarding in both personally and educationally, given our target audience and the insight our work on this project offered into what it takes to conduct proper research, make a thorough and realistic business plan, form professional relationships, and deliver a final product. 
        </p>
      </Card>
      <Card 
        image={blackjack}
        alt='Playing cards'
        title='Blackjack Web App'
        subtitle='January 2021 - December 2021'
        description={`As part of my Web Systems Programming course in the fall semester 
        of 2020, my classmates and I were tasked with building a Blackjack web application. 
        The assignment was a test of our understanding of HTML, CSS, and JavaScript and 
        required us to use a Deck of Cards API to manage the deck, animations for the 
        cards, and an opponent that operated based on a set of rules given by the professor. 
        Play the game using the link below. Enjoy!`}
        button1text='Play Blackjack'
        button1link='https://blackjack-drab-kappa.vercel.app'
      >
        <p>As part of my Web Systems Programming course in the fall semester 
          of 2020, my classmates and I were tasked with building a Blackjack web application. 
          The assignment was a test of our understanding of HTML, CSS, and JavaScript and 
          required us to use a Deck of Cards API to manage the deck, animations for the 
          cards, and an opponent that operated based on a set of rules given by the professor. 
          Play the game using the link below. Enjoy!
        </p>
        <p>Note: This web app was designed for desktop/laptop only. Mobile and tablet views 
          may not look right. 
        </p>
      </Card>
    </Page>
  );
}

export default Projects;