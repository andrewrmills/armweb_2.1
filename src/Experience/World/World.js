import Experience from '../Experience.js'
import Environment from './Environment.js'
import Moon from './Moon.js'
import Lander from './Lander.js'
import Stars from './Stars.js'
import Font from './Font.js'

export default class World
{
    constructor() 
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.camera = this.experience.camera

        // Wait for resources
        this.resources.on('ready', () =>
        {
            // Setup
            this.lander = new Lander()
            this.moon = new Moon()
            this.stars = new Stars()
            this.font = new Font()
            this.environment = new Environment()
        })
    }

    update()
    {
        if(this.lander) {
            this.lander.update()   
        }

        if(this.moon) {
            this.moon.update() 
        }
    }
}