function help() {
    term.echo('');
    term.echo('The commands that you can write in here:');
    term.echo('- [[b;#fff;]hello()] to say hello.');
    term.echo('- [[b;#fff;]whoAmI()] for some info.');
    term.echo('- [[b;#fff;]myBlog()] for going to my blog about coding.');
    term.echo('- [[b;#fff;]contact()], if you wanna say something or sth. else.')
    term.echo('- [[b;#fff;]cvDetails()] for my experience information.');
    //term.echo('- [[b;#fff;]desktop()] for directing to UI.'); working on it.
    term.echo('- [[b;#fff;]clear()] to clear the screen.');
    term.echo('');
} 

function desktop() {
    term.echo('');
    term.echo('You are going to see the desktop here but its under construction.');
    term.echo('');
}

//CONTACT LIST

function contact() {
    term.echo('');
    term.echo('Here is the list:');
    term.echo(' - [[b;#fff;]myTwitter()]');
    term.echo(' - [[b;#fff;]myInstagram()]');
    term.echo(' - [[b;#fff;]myBlogInsta()]')
    term.echo(' - [[b;#fff;]myLinkedIn()]');
    term.echo(' - [[b;#fff;]myMail()]');
    term.echo(' - [[b;#fff;]myGithub()]');
    term.echo('');
}

function myTwitter() {
    term.echo('');
    term.echo('Directing to my Twitter.');
    window.open('https://twitter.com/mfarukgul', '_blank');
    term.echo('');
}

function myInstagram() {
    term.echo('');
    term.echo('Directing to my Instagram.');
    window.open('https://www.instagram.com/m.farukgul/', '_blank');
    term.echo('');
}

function myBlogInsta() {
    term.echo('');
    term.echo('Directing to my blog\'s Instagram.');
    window.open('https://www.instagram.com/mfgstudiosblog/', '_blank');
    term.echo('');
}

function myLinkedIn() {
    term.echo('');
    term.echo('Directing to my LinkedIn.');
    window.open('https://www.linkedin.com/in/mfg', '_blank');
    term.echo('');
}

function myMail() {
    term.echo('');
    term.echo('m.farukgul@gmail.com');
    term.echo('');
}

function myGithub() {
    term.echo('');
    term.echo('Directing to my Github.');
    window.open('https://github.com/Mastechnology', '_blank');
    term.echo('');
}

function cvDetails() {
    term.echo('');
    term.echo('What do you wanna see?');
    term.echo('I will make a list for you to choose:');
    term.echo(' - [[b;#fff;]myExperiences()]');
    term.echo(' - [[b;#fff;]myEducation()]');
    term.echo(' - [[b;#fff;]myVolunteerings()]')
    term.echo(' - [[b;#fff;]myCvPDF()]');
    term.echo('');
}

function myVolunteerings() {
    term.echo('');
    term.echo('Volunteering Works List:');
    term.echo('- [[b;#fff;]pressAndMedia()]');
    term.echo('- [[b;#fff;]autonomousCar()]');
    term.echo('- [[b;#fff;]mergenRobotaxi()]');
    term.echo('- [[b;#fff;]computerSociety()]');
    term.echo('- [[b;#fff;]bursaIO()]');
    term.echo('');
}

function pressAndMedia() {
    term.echo('');
    term.echo('* Press and Media Representative.');
    term.echo('- IEEE Uludag University Student Branch.');
    term.echo('- Dec 2017 - Apr 2019, 1 yr 5 months.');
    term.echo('- I took part in the Press and Media Representative position of the club. During the');
    term.echo('  first two years of my university life, I worked as a representative. My task was');
    term.echo('  briefly to design the social media and poster works of our club via photoshop and');
    term.echo('  to share the activities held in the club with our members.');
    term.echo('- I am one of the designer and the author of BULUŞ Magazine.');
    term.echo('');
}

function autonomousCar() {
    term.echo('');
    term.echo('* IEEE Bursa Uludag Otonomous Car Project.');
    term.echo('- Volunteer of IEEE Uludag Otonomous Car Project.');
    term.echo('- Jun 2018 - Feb 2020, 1 yr 9 months');
    term.echo('- We worked on the project with our team of 14 people for the Marc-Autonomous Vehicle.');
    term.echo('  Project Competition.We had a very good experience in the competition and preparing for it.');
    term.echo('');
}

function mergenRobotaxi() {
    term.echo('');
    term.echo('* MERGEN Robotaxi Team Member.');
    term.echo('- IEEE Uludag MERGEN Robotaxi.');
    term.echo('- Feb 2020 - May 2021, 1 yr 4 months.');
    term.echo('- Thanks to our IEEE Uludag club, we took part in our project that we started working on.');
    term.echo('  We worked on the autonomous software of our vehicle. In our project for the Teknofest');
    term.echo('  Competition, we developed ourselves as a team on autonomous vehicles. I worked on object');
    term.echo('  detection and the ROS system of the car.');
    term.echo('');
}

function computerSociety() {
    term.echo('');
    term.echo('* Computer Society Committee Representative.');
    term.echo('- IEEE Bursa Uludag University Student Branch.');
    term.echo('- Apr 2019 - Aug 2020, 1 yr 5 months.');
    term.echo('- As the Cs Committee Representative in IEEE Bursa Uludağ, I organized trainings,');
    term.echo('  workshops, teatalk and technical trips in the field of computers. The purpose of ');
    term.echo('  all of these was to create a space for myself and for us students to learn and improve');
    term.echo('  themselves outside of school.');
    term.echo('');
    term.echo('Hint: You can type ieeeULUSB() to see our club in Instagram.');
    term.echo('');
}

function ieeeULUSB() {
    term.echo('');
    term.echo('Directing to video.');
    window.open('https://www.instagram.com/ieeeulusb/', '_blank');
    term.echo('');
}

function bursaIO() {
    term.echo('');
    term.echo('* Bursa IO Team Member.');
    term.echo('- Feb 2020 - Mar 2021, 1 yr 1 months.');
    term.echo('- We work voluntarily in the social, information sharing and working group that aims to');
    term.echo('  gather technology-oriented people in Bursa. We have organized many great events.');
    term.echo('');
}

function myEducation() { 
    term.echo('');
    term.echo('School List:');
    term.echo('- [[b;#fff;]uludagUni()]');
    term.echo('- [[b;#fff;]anadoluUni()]');
    term.echo('');
}

function uludagUni() {
    term.echo('');
    term.echo('* Bachelor\'s Degree in Computer Engineering.');
    term.echo('- I finished my school with 3.31 GPA from 2017 to 2021.');
    term.echo('- My graduation project was about "APPLICATION THAT CAN DISCRIMINATE RECYCLABLE SUBSTANCES".');
    term.echo('- You can see my projects paper with typing [[b;#fff;]uludagPaper()].');
    term.echo('- You can see my projects video with typing [[b;#fff;]uludagVideo()].');
    term.echo('');
}

function uludagPaper() { 
    term.echo('');
    term.echo('Directing to paper.');
    window.open('mfg/mfg_cv_new.pdf', '_blank');
    term.echo('');
}

function uludagVideo() {
    term.echo('');
    term.echo('Directing to video.');
    window.open('https://drive.google.com/file/d/1BdGcwA7Ps9_f6QB60Ki-AfcbqiSUWTHD/view?usp=sharing&usp=embed_facebook', '_blank');
    term.echo('');
}

function anadoluUni() {
    term.echo('');
    term.echo('* Associate Degree Business Management Pr. Student.');
    term.echo('- Attending from Sept. 2020 to June 2022.');
    term.echo('');
}

function myCvPDF() {
    term.echo('');
    term.echo('Directing to site.');
    window.open('mfg/mfg_cv_new.pdf', '_blank');
    term.echo('');
}

function versionUpdates() {
    term.echo('');
    term.echo('This version is v1.0');
    term.echo('New commands will be listed here:');
    term.echo('- I just uploaded my Site. Sooooooo I need to think what can I add extra.');
    term.echo('- If you have an idea, here is my [[b;#fff;]contact()] list.');
    term.echo('');
    term.echo('Hint: For older versions, go to my [[b;#fff;]githubRepo()].');
    term.echo('');
}

function githubRepo() {
    term.echo('');
    term.echo('Directing to site.');
    window.open('https://github.com/Mastechnology/mfgstudio.dev-files', '_blank');
    term.echo('');
}

function hello() {
    term.echo('');
    term.echo('Hello my friend. I\'m here to help you :)');
    term.echo('');
} 

/// whoAmI SECTION STARTED

function whoAmI() {
    term.echo('');
    term.echo('- I am a computer engineer who is working on his dream job. ');
    term.echo('  I love to work on Mobile App Development and IOT. ');
    term.echo('  My second dream is to pass what I am learning to others. ');
    term.echo('  Because of that, I opened [[b;#fff;]mfgstudiosblog.com] for expanding ');
    term.echo('  the Turkish coding sources.I\'m working on it because I think ');
    term.echo('  we need this for our future. My Github account name is [[b;#fff;]@Mastechnology], ');
    term.echo('  you can find my works in there.');
    term.echo('');
    term.echo('Hint: Go to site [[b;#fff;]mfgstudiosblog.com] with [[b;#fff;]myBlog()].');
    term.echo('Hint: Go to my github account with [[b;#fff;]myGithub()].');
    term.echo('');
} 

function myBlog() {
    term.echo('');
    term.echo('Directing to site.');
    window.open('https://www.mfgstudiosblog.com/', '_blank');
    term.echo('');
}

/// whoAmI SECTION FINISHED

/// myExperiences SECTION STARTED

function myExperiences() { 
    term.echo('');
    term.echo('Experience List:');
    term.echo('   -[[b;#fff;]nekaElektronik()]');
    term.echo('   -[[b;#fff;]mythologyTech()]');
    term.echo('   -[[b;#fff;]gurmeSoft()]');
    term.echo('   -[[b;#fff;]orakciFirm()]');
    term.echo('');
}

function nekaElektronik() {
    term.echo('');
    term.echo('* Full-time, Feb 2021 - Present , 1 yr 2 months.');
    term.echo('- Made a web-app for 3D Printers with Flask, running on Raspberry PI.');
    term.echo('- Made a website for the company ([[b;#fff;]ne-ka.com.tr]).');
    term.echo('- Worked with ROS for making Spotmicro Robot walk and do other stuffs.');
    term.echo('- Worked with Debian for CNC machines.');
    term.echo('- Working with PyQt5 to make Desktop Apps for CNC Machines.');
    term.echo('');
    term.echo('Hint: Go to site [[b;#fff;]ne-ka.com.tr] with [[b;#fff;]nekaSite()]');
    term.echo('Hint: Wanna know what is Spot Micro is? type [[b;#fff;]spotMicro()]');
    term.echo('');
}

function nekaSite() {
    term.echo('');
    term.echo('Directing to site.');
    window.open('https://www.ne-ka.com.tr/', '_blank');  
    term.echo('');
}

function spotMicro() {
    term.echo('');
    term.echo('Directing to site.');
    window.open('https://spotmicroai.readthedocs.io/en/latest/', '_blank');
    term.echo('');
}

function mythologyTech() {
    term.echo('');
    term.echo('* Internship, Aug 2020 - Sep 2020, 2 months.');
    term.echo('- I wrote Android and IOS application that sends data using MQTT protocol. ');
    term.echo('  Using RabbitMQ Broker, I designed a desktop application that can run on ');
    term.echo('  localhost and connected it to my mobile applications. Continuing my internship, ');
    term.echo('  I tried to transfer this system to the Linux system in the cloud.');
    term.echo('');
    term.echo('Hint: What is MQTT protocol? type [[b;#fff;]mqtt()]');
    term.echo('Hint: What is RabbitMQ protocol? type [[b;#fff;]rabbitMQ()]');
    term.echo('');
}

function mqtt() {
    term.echo('');
    term.echo('Directing to site.');
    window.open('https://mqtt.org/', '_blank');
    term.echo('');
}

function rabbitMQ() {
    term.echo('');
    term.echo('Directing to site.');
    window.open('https://www.rabbitmq.com/', '_blank');
    term.echo('');
}

function gurmeSoft() {
    term.echo('');
    term.echo('* Part-time, Sep 2019 - Jun 2020, 10 months.');
    term.echo('I have created an invoice plugin on Wordpress. I\'ve done reviews about ready made ');
    term.echo('plugins and prepared videos on how to use some of them.I designed advertisement ');
    term.echo('designs such as banners and posts, and in addition to these, I took care of our ');
    term.echo('customers\' support requests.');
    term.echo('');
    term.echo('Hint: If you want to see my videos, try [[b;#fff;]gurmeSoft1()] to [[b;#fff;]gurmeSoft5()] ([[b;#fff;]5] videos included)');
    term.echo('');
}

function gurmeSoft1() {
    term.echo('');
    term.echo('Directing to site.');
    window.open('https://www.youtube.com/watch?v=48B7YFR8TbQ', '_blank');
    term.echo('');
}

function gurmeSoft2() {
    term.echo('');
    term.echo('Directing to site.');
    window.open('https://www.youtube.com/watch?v=jfS0INm0O1Q', '_blank');
    term.echo('');
}

function gurmeSoft3() {
    term.echo('');
    term.echo('Directing to site.');
    window.open('https://www.youtube.com/watch?v=pYIMF7xG2ao', '_blank');
    term.echo('');
}

function gurmeSoft4() {
    term.echo('');
    term.echo('Directing to site.');
    window.open('https://www.youtube.com/watch?v=c4z4y0hMIBc', '_blank');
    term.echo('');
}

function gurmeSoft5() {
    term.echo('');
    term.echo('Directing to site.');
    window.open('https://www.youtube.com/watch?v=k5re8BG-b0I', '_blank');
    term.echo('');
}

function orakciFirm() {
    term.echo('');
    term.echo('* Internship, Aug 2019 - Sep 2019, 2 months.');
    term.echo('- I worked as a Computer Engineering intern at Dora Bilisim Company. I worked for a ');
    term.echo('  service required for the company and did the coding process with python language. ');
    term.echo('  At the end of my internship, I delivered the project ready. The service was sending ');
    term.echo('  a message celebrating the birthdays of the employees at the workplace at 9 o\'clock ');
    term.echo('  every morning.');
    term.echo('');
}

/// myExperiences SECTION FINISHED

function clear() {
    term.clear();
    term.echo('[[b;#fff;]mfgstudio.dev] has been cleared your screen. (press [[b;#fff;]help()] for help)')
    term.echo('');
}

function print(text) {
    term.echo(text);
}

//extra

function extra() {
    term.echo('');
    term.echo('Here is the list:');
    term.echo(' - [[b;#fff;]myTwitter()]');
    term.echo('');
}

//free takilmalik burasi

function ls() {
    //Are you root :D
    term.echo("\nWe are not executing this command in here :)\n");
}
function mkdir() {
    //What are you doing :D
    term.echo("\nWe are not executing this command in here :)\n");
}
function rmdir() {
    //Okay, stop that thing right now :D
    term.echo("\nWe are not executing this command in here :)\n");
}
function cd() {
    //What were you thinking? :D
    term.echo("\nWe are not executing this command in here :)\n");
}
function ping() {
    //Whyyyyy? :D
    term.echo("\nWe are not executing this command in here :)\n");
}
function cat() {
    //I like cats by the way :D
    term.echo("\nWe are not executing this command in here :)\n");
}
function mv() {
    //Are you kidding me :D
    term.echo("\nWe are not executing this command in here :)\n");
}
function sudo() {
    //Haha no way man :D
    term.echo("\nWe are not executing this command in here :)\n");
}
function siri() {
    //Are you serious :D
    term.echo("\nWe are not executing this command in here :)\n");
}

