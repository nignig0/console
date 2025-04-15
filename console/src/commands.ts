export interface StateChange {
    text: string,
    backgroundColor?: string,
    textColor?: string
}

export const commands: Map<string, StateChange> = new Map();
commands.set("tani", {
    text: `
    Of course you know me. Tani. The T man.\n
    Tangent of i.e. tan(i)\n
    Yes... I'm a nerd.\n
    But I also love writing... code... but also poems and short stories\n
    Been wanting to have a blog but too damn tired for that.\n
    I love exploring new things... this was something new and kinda wacky.\n
    Reach out to me if you want a command for you!
    `
});

commands.set("tani -f", {
    text: `
    Name: Tani\n
    DOB: 13th August 2002\n
    Technologies: Python, Java, Typescript, Dart, C++\n
    ... Don't know what else to add
    `
});


commands.set("npm install siri", {
    backgroundColor: '#eda1c5',
    textColor: '#ffffff',
    text: `
    INSTALLING SIRI.....\n\n
    DOWNLOADING A LOVE FOR THE COLOR PINK THAT CAME FROM NOWHERE: [####################]\n
    DOWNLOADING IMPRESSIVE BACKEND SKILLS: [####################]\n
    DOWNLOADING DAVIDO STANNING: [####################]\n
    DOWNLOADING CHILL, COOL PERSONALITY: [####################]\n
    DOWNLOADING IMPRESSIVE MOBILE DEV SKILLS: [####################]\n
    DOWNLOADING A LOVE FOR DUBAI: [####################]\n
    DOWNLOADING A LOVE FOR ENTREPRENEURSHIP: [####################]\n
    DONE\n
    
    `
})

commands.set("help", {
    text: `COMMANDS\n ${Array.from(commands.keys()).join('\n')} \n\nAs for descriptions... try and find out`
})

export const introText = `
Welcome to CNSL (pronounced console... vowels are just not cool anymore).\n
A bit of a reimagining of a personal website.\n
You type commands and you find out more about me or others that are think are cool.\n
Enter "help" to find out the commands you can enter.
`

