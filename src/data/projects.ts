
export type projectEntry = {
  name: string; // project name
  description: string; //short project description
  docs?: string; //project doc file url (for read more)
  repo: string; //repository url
  demo?: string; //live demo
  mini?: string; //miniature url
  tags: string[]
}

const projects: projectEntry[] = [
  {
    name: "Aurora",
    description: "MQTT and HTTP enabled LED strip controller",
    repo: "https://github.com/garhul/aurora",
    tags: ['ESP8266', 'Embedded', 'IoT', 'LED', 'Arduino', 'MQTT'],
  },
  {
    name: "Weather Station",
    description: "MQTT and esp8266 based climate gathering and reporting",
    repo: "https://github.com/garhul/weatherSt",
    tags: ['ESP8266', 'Embedded', 'IoT', 'LED', 'Arduino', 'MQTT']
  },
  {
    name: "Home Dashboard",
    description: "Simple home dashboard app for managing Aurora devices and Weather stations data",
    repo: "https://github.com/garhul/dash",
    tags: ['Nodejs', 'Docker', 'IoT', 'LED', 'Arduino', 'MQTT', 'React']
  },
  {
    name: "jsTetris",
    description: "A minimalistic vanilla-js tetris clone",
    repo: "https://github.com/garhul/jsTetris",
    tags: ['Js', 'HTML', 'CSS'],
    demo: "/projects/jstetris"

  },
  {
    name: "makingToolBox",
    description: "2d Shape generator for 3d printing gears and pulleys",
    repo: "https://github.com/garhul/makingToolBox",
    tags: ['Js', 'Canvas', 'React'],
    demo: "/projects/makingToolBox"
  },

];

export default projects;