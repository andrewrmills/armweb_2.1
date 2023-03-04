import EventEmitter from './EventEmitter.js'
import Experience from '../Experience.js'
import Stats from 'stats.js'

// const stats =  new Stats()
// stats.showPanel(0)
// document.body.appendChild(stats.dom)

export default class Time extends EventEmitter 
{
    constructor() 
    {
        super()

        // Setup
        this.start = Date.now()
        this.current = this.start
        this.elapsed = 0
        this.delta = 16

        window.requestAnimationFrame(() => 
        {
            this.tick()
        })
    }

    tick()
    {
        // stats.begin()

        const currentTime = Date.now()
        this.delta = currentTime - this.current
        this.current = currentTime
        this.elapsed = currentTime - this.start

        this.trigger('tick')

        window.requestAnimationFrame(() => 
        {
            this.tick()
        })

        // stats.end()
    }
}