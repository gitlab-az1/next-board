export const themeModes = ['dark', 'light'];

type Palette = {
  readonly default: {
    readonly 'theme-red': string;
    readonly 'theme-green': string;
    readonly 'theme-orange': string;
    readonly 'theme-violet': string;
    readonly 'theme-yellow': string;
    readonly 'theme-skyblue': string;
    readonly 'theme-cyan': string;
    readonly 'theme-magenta': string;
    readonly 'theme-purple': string;
    readonly 'theme-aqua': string;
    readonly red: string;
    readonly green: string;
    readonly blue:string;
    readonly yellow:string;
    readonly orange:string;
    readonly magenta:string;
    readonly violet:string;
    readonly gray:string;
    readonly graylight: string;
    readonly graylighter: string;
    readonly pink: string;
    readonly purple: string;
    readonly skyblue: string;
    readonly teal: string;
    readonly cyan: string;
    readonly lime: string;
    readonly brown: string;
    readonly black: string;
    readonly 'light-yellow': string;
    readonly 'light-blue': string;
    readonly 'light-green': string;
    readonly 'light-red': string;
    readonly 'light-orangeyellow': string;
    readonly 'light-orange': string;
    readonly 'color-ansi-selection': string;
    readonly 'color-ansi-bg': string;
    readonly 'color-ansi-fg': string;
    readonly 'color-ansi-white': string;
    readonly 'color-ansi-black': string;
    readonly 'color-ansi-blue': string;
    readonly 'color-ansi-cyan': string;
    readonly 'color-ansi-green': string;
    readonly 'color-ansi-magenta': string;
    readonly 'color-ansi-red': string;
    readonly 'color-ansi-yellow': string;
    readonly 'color-ansi-bright-white': string;
    readonly 'color-ansi-bright-black': string;
    readonly 'color-ansi-bright-blue': string;
    readonly 'color-ansi-bright-cyan': string;
    readonly 'color-ansi-bright-green': string;
    readonly 'color-ansi-bright-magenta': string;
    readonly 'color-ansi-bright-red': string;
    readonly 'color-ansi-bright-yellow': string;
  }
}

export const palette: Palette = Object.freeze({
  default: {
    'theme-red':' #ff3d71',
    'theme-green':' #70c542',
    'theme-orange':' #ff9f00',
    'theme-violet':' #a259ff',
    'theme-yellow':' #ffcc00',
    'theme-skyblue':' #00d8ff',
    'theme-cyan':' #00d8ff',
    'theme-magenta':' #ff00ff',
    'theme-purple':' #a259ff',
    'theme-aqua':' #00d8ff',
    red:' #ff3200',
    green:' #00b300',
    blue:' #0066ff',
    yellow:' #ffd966',
    orange:' #ff8c00',
    magenta:' #ff00ff',
    violet:' #8a2be2',
    gray:' #777777',
    graylight: '#e0e0e',
    graylighter: '#f0f0f',
    pink:' #ff69b4',
    purple:' #800080',
    skyblue:' #87ceeb',
    teal:' #008080',
    cyan:' #00ffff',
    lime:' #00ff00',
    brown:' #a52a2a',
    black:' #000000',
    'light-yellow':' #ebb624',
    'light-blue':' #0f73ff',
    'light-green':' #38b24d',
    'light-red':' #ff3300',
    'light-orangeyellow':' #ffc420',
    'light-orange': '#ffa500',
    'color-ansi-selection': 'rgba(95, 126, 151, 0.48)',
    'color-ansi-bg': '#111111',
    'color-ansi-fg': '#cccccc',
    'color-ansi-white': '#777777',
    'color-ansi-black': '#141414',
    'color-ansi-blue': '#00aaff',
    'color-ansi-cyan': '#88ddff',
    'color-ansi-green': '#98ec65',
    'color-ansi-magenta': '#aa88ff',
    'color-ansi-red': '#ff5555',
    'color-ansi-yellow': '#ffcc33',
    'color-ansi-bright-white': '#ffffff',
    'color-ansi-bright-black': '#777777',
    'color-ansi-bright-blue': '#33bbff',
    'color-ansi-bright-cyan': '#bbecff',
    'color-ansi-bright-green': '#b6f292',
    'color-ansi-bright-magenta': '#cebbff',
    'color-ansi-bright-red': '#ff8888',
    'color-ansi-bright-yellow': '#ffd966',
  }
});