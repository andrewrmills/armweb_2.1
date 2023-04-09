import Experience from '../Experience.js'
import Environment from './Environment.js'
import Moon from './Moon.js'
import Lander from './Lander.js'
import Sev from './Sev.js'
import Font from './Font.js'
import Gantry from './Gantry.js'
import HSU from './HSU.js'
import Z2 from './Z2.js'

export default class World
{
    constructor() 
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.camera = this.experience.camera

        this.resources.overlay(this.scene)

        // Wait for resources
        this.resources.on('ready', () =>
        {
            // Setup
            this.lander = new Lander()
            this.sev = new Sev()
            this.moon = new Moon()
            this.font = new Font()
            this.gantry = new Gantry()
            this.hsu = new HSU()
            this.z2 = new Z2()
            this.environment = new Environment()
        })
    }

    update()
    {
        if(this.lander) {
            this.lander.update()   
        }

        if(this.z2) {
            this.z2.update() 
        }
    }
}