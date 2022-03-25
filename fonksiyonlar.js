function help() {
    term.echo('');
    term.echo('The commands that you can write in here:');
    term.echo('- [[b;#fff;]hello()] to say hello.');
    term.echo('- [[b;#fff;]whoAmI()] for some info.');
    term.echo('- [[b;#fff;]myExperiences()] for my experience information.');
    term.echo('- [[b;#fff;]clear()] to clear the screen.');
    term.echo('');
} 

function versionUpdates() {
    term.echo('');
    term.echo('This version is 1.0');
    term.echo('New commands are listed here:');
    term.echo('- No new commands!');
    term.echo('');
    term.echo('Hint: For old versions, go to my githubRepo()');
    term.echo('');
}

function githubRepo() {
    term.echo('Directing to site.');
    window.open('https://www.github.com/', '_blank');
}

function hello() {
    term.echo('Hello my friend. Wanna say something?');
} 

/// whoAmI SECTION STARTED

function whoAmI() {
    term.echo('');
    term.echo('I am a computer engineer who is working on his dream job. ');
    term.echo('I love to work on Mobile App Development and IOT. ');
    term.echo('My second dream is to pass what I am learning to others. ');
    term.echo('Because of that, I opened [[b;#fff;]mfgstudiosblog.com] for expanding ');
    term.echo('the Turkish coding sources.I\'m working on it because I think ');
    term.echo('we need this for our future.My Github account name is [[b;#fff;]@Mastechnology], ');
    term.echo('you can find my works in there.');
    term.echo('');
    term.echo('Hint: Go to site [[b;#fff;]mfgstudiosblog.com] with [[b;#fff;]myBlog()].');
    term.echo('Hint: Go to my github account with [[b;#fff;]myGithub()].');
    term.echo('');
} 

function myBlog() { 
    term.echo('Directing to site.');
    window.open('https://www.mfgstudiosblog.com/', '_blank');
}

function myGithub() {
    term.echo('Directing to site.');
    window.open('https://github.com/Mastechnology', '_blank');
}

/// whoAmI SECTION FINISHED

/// myExperiences SECTION STARTED

function myExperiences() { 
    term.echo('');
    term.echo('Experience List:');
    term.echo('   -[[b;#fff;]nekaElektronik()]');
    term.echo('   -[[b;#fff;]mythologyTech()]');
    term.echo('   -[[b;#fff;]gurmeSoft()]');
    term.echo('   -[[b;#fff;]mythologyTech()]');
    term.echo('');
}

function nekaElektronik() {
    term.echo('');
    term.echo('* Full-time, Feb 2021 - Present , 1 yr 2 mos.');
    term.echo('- Made a web-app for 3D Printers with Flask, running on Raspberry PI.');
    term.echo('- Made a website for the company ([[b;#fff;]ne-ka.com.tr]).');
    term.echo('- Worked with ROS for making Spotmicro Robot walk and do other stuffs.');
    term.echo('- Worked with Debian for CNC machines.');
    term.echo('- Working with PyQt5 to make Desktop Apps for CNC Machines.');
    term.echo('');
    term.echo('Hint: Go to site [[b;#fff;]ne-ka.com.tr] with [[b;#fff;]nekaSite()]');
    term.echo('Hint: Wanna know what is Spot Micro is? write [[b;#fff;]spotMicro()]');
    term.echo('');
}

function nekaSite() {
    term.echo('Directing to site.');
    window.open('https://www.ne-ka.com.tr/', '_blank');  
}

function spotMicro() {
    term.echo('Directing to site.');
    window.open('https://spotmicroai.readthedocs.io/en/latest/', '_blank');
}

function mythologyTech() {
    term.echo('');
    term.echo('* Internship, Aug 2020 - Sep 2020, 2 mos.');
    term.echo('- I wrote Android and IOS application that send data using MQTT protocol. ');
    term.echo('Using RabbitMQ Broker, I designed a desktop application that can run on ');
    term.echo('localhost and connected it to my mobile applications. Continuing my internship, ');
    term.echo('I tried to transfer this system to the Linux system in the cloud.');
    term.echo('');
    term.echo('Hint: What is MQTT protocol? write [[b;#fff;]mqtt()]');
    term.echo('Hint: What is RabbitMQ protocol? write [[b;#fff;]rabbitMQ()]');
    term.echo('');
}

function mqtt() {
    term.echo('Directing to site.');
    window.open('https://mqtt.org/', '_blank');
}

function rabbitMQ() {
    term.echo('Directing to site.');
    window.open('https://www.rabbitmq.com/', '_blank');
}

function mythologyTech() {
    term.echo('');
    term.echo('');
    term.echo('');
}

/// myExperiences SECTION FINISHED


function clear() {
    term.clear();
    term.echo('[[b;#fff;]mfgstudio.dev] has been cleared your screen. (press [[b;#fff;]help()] for help)')
    term.echo('');
}