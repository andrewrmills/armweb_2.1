import * as THREE from 'three'
import Experience from '../Experience.js'

export default class HSU
{
    constructor() 
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.world = this.experience.physics
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug

        // Debug
        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('HSU')
        }

        // Setup
        this.resource = this.resources.items.hsuModel

        this.setModel()
    }

    setModel()
    {

        this.model = this.resource.scene
        this.model.rotation.set(0, -1.65, 0)
        this.model.position.set(5, -20.6, -11)
        this.model.scale.set(0.003, 0.003, 0.003)
        this.scene.add(this.model)

        if(this.debug.active)
        {
            this.debugFolder
            .add(this.model.position, 'x')
            .name('hsuPositionX')
            .min(-50)
            .max(50)
            .step(1)

            this.debugFolder
            .add(this.model.position, 'y')
            .name('hsuPositionY')
            .min(-50)
            .max(50)
            .step(1)

            this.debugFolder
            .add(this.model.position, 'z')
            .name('hsuPositionZ')
            .min(-50)
            .max(50)
            .step(1)

            this.debugFolder
            .add(this.model.rotation, 'x')
            .name('hsuRotationX')
            .min(-50)
            .max(50)
            .step(1)

            this.debugFolder
            .add(this.model.rotation, 'y')
            .name('hsuRotationY')
            .min(-50)
            .max(50)
            .step(1)

            this.debugFolder
            .add(this.model.rotation, 'z')
            .name('hsuRotationZ')
            .min(-50)
            .max(50)
            .step(1)
        }


    }

    update() 
    {      
        // this.model.position.copy(this.body.position)
        // this.model.quaternion.copy(this.body.quaternion)
        // this.model.position.y -= 2.1
    }
}